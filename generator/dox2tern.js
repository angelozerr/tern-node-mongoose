(function(root, mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports); // CommonJS
    if (typeof define == "function" && define.amd) return define([ "exports" ], mod); // AMD
    mod(root.dox2tern || (root.dox2tern = {})); // Plain browser env
})(this,function(exports) {
  "use strict";
  
  var Generator = exports.Generator = function(options) {
    this.options = options;
  };
  
  Generator.prototype.process = function(dataObjects) {
    var ternDef = {
      "!name" : this.options.name,
      "!define" : {}
    };
    this.options.initialize(ternDef);
    this.moduleInfos = createModuleInfos(dataObjects, this.options);
    this.visitDataObjects(dataObjects, ternDef);
    return ternDef;
  };

  Generator.prototype.visitDataObjects = function(dataObjects, ternDef) {    
    // Iterate over all classes
    var modulesNames = Object.keys(dataObjects);    
    // For each class generate output
    for(var i = 0; i < modulesNames.length; i++) {
      var moduleName = modulesNames[i];
      // The meta data object
      var moduleMetaData = dataObjects[moduleName], ternModule = {};
      this.visitModuleMetaData(moduleMetaData, moduleName.replace(/\//g, '_'), ternModule);
      ternDef["!define"][moduleName.replace(/\//g, '_')] = ternModule;
    }
  }
    
  var createModuleInfos = function(dataObjects, options) {
    var infos = {};
    // Iterate over all classes
    var moduleNames = Object.keys(dataObjects);    
    // For each class generate output
    for(var i = 0; i < moduleNames.length; i++) {
      var moduleName = moduleNames[i];
      // The meta data object
      var entries = dataObjects[moduleName];
      for(var j = 0; j < entries.length; j++) {
        var entry = entries[j];
        if(isClass(entry, options)) {
          var className = entry.ctx.string.replace("()", "");
          infos[className] = moduleName.replace(/\//g, '_') + '.' + className;
        }
      }
    }
    return infos;
  }
  
  Generator.prototype.visitModuleMetaData = function(entries, moduleName, ternModule) {
      var options = this.options;
      for(var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if(isClass(entry, options)) {
          var className = entry.ctx.string.replace("()", ""), ternClass = {};
          // !type
          var type = this.getTernClassType(entry, moduleName, className, null, false);
          // !url
          var url = options.getURL ? options.getURL(moduleName, className, null) : null;
          // !doc
          var doc = getFullDescription(entry);          
          ternClass = createTernDefItem(ternModule, className, type, null, url, doc);
          
          // loop for entries
          for(var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            if(isFunction(entry)) {
              this.visitFunction(entry, moduleName, className, ternClass);
            } else if(isClassConstant(entry)) {
              this.visitClassConstant (entry, ternClass);
            } else {
              var property = getProperty(entry, options);              
              if (property) {
                var ternPrototype = this.getTernClassPrototype(ternClass, moduleName, className);
                this.visitProperty (property, ternPrototype);
              }
            }
          }
        }
      }
    }

    Generator.prototype.visitFunction = function(entry, moduleName, className, ternClass) {
      var options = this.options;
      var methodName = entry.ctx.name, staticMethod = isStaticMethod(entry);
      var ternMethod = {};
      // !type
      var type = this.getTernClassType(entry, moduleName, className, methodName, staticMethod);
      // !effect
      var effects = this.getTernEffects(moduleName, className, methodName, staticMethod);      
      // !url
      var url = options.getURL ? options.getURL(moduleName, className, methodName) : null;
      // !doc
      var doc = getFullDescription(entry);
      var ternClassOrPrototype = ternClass;
      if (!staticMethod) {
        ternClassOrPrototype = this.getTernClassPrototype(ternClass, moduleName, className);
      }
      createTernDefItem(ternClassOrPrototype, methodName, type, effects, url, doc);
    }

    Generator.prototype.visitProperty = function(property, ternClass) {
      var name = null, type = "?", effects = null, url = null, doc = null;
      if (property.ctx) {
        name = property.ctx.name;
        // !type
        var info = this.moduleInfos[name];
        if (info) type = info;
        // !doc
        doc = getFullDescription(property);
      } else {
        name = property.string;
      }
      if (name) {
        createTernDefItem(ternClass, name, type, effects, url, doc);
      }
    }

    var createTernDefItem = function(parent, name, type, effects, url, doc) {
      var item = parent[name] = {};
      if (type) item["!type"] = type;
      if (effects) item["!effects"] = effects;
      if (url) item["!url"] = url;
      if (doc && doc != '') item["!doc"] = doc;
      return item;
    }
    
    Generator.prototype.visitClassConstant = function(entry, ternClass) {

    }
    
    Generator.prototype.getTernClassPrototype = function(ternClass, moduleName, className) {
      var ternPrototype = ternClass["prototype"], options = this.options;
      if (!ternPrototype) {
        ternPrototype = {};
        ternClass["prototype"] = ternPrototype;
        if (options.getProto) {
          var ternProto = options.getProto(moduleName, className);
          if (ternProto) ternPrototype["!proto"] = ternProto;
        }
      }    
      return ternPrototype;
    }
    
    Generator.prototype.getTernEffects = function(moduleName, className, methodName, staticMethod) {
      var options = this.options;
      if (options.getEffects) return options.getEffects(moduleName, className, methodName);
    }
    
    Generator.prototype.getTernClassType = function(entry, moduleName, className, methodName, staticMethod) {
      var options = this.options, moduleInfos = this.moduleInfos;
      var t = options.getType ? options.getType(moduleName, className, methodName, staticMethod) : null;
      if (t) return t;
      var type = 'fn(', tags = entry.tags, nbParams = 0, returnType = null;
      for(var k = 0; k < tags.length; k++) {
        var tag = tags[k];
        if(tag.type == 'param') {
          if (nbParams) type+= ', ';
          var isOptional = tag.name.charAt(0) == '[', name = (isOptional ? tag.name.substring(1, tag.name.length - 1) : tag.name);
          var index = name.indexOf('(');
          if (index != -1) name = name.substring(0, index);
          index = name.indexOf('.');
          if (index != -1) name = name.substring(0, index);
          type+= name;
          if (isOptional) type+='?';
          type+=': ';
          type+=getTernType(tag, moduleInfos);
          nbParams++;
        } else if(tag.type == 'return') {
          returnType = getTernType(tag, moduleInfos);
        }
      }
      type+= ')';
      if (returnType) {
        type+=' -> ';
        type+=returnType;
      }
      return type;
    }
    
    //Helper methods used in the rendering
    var isClass = function(entry, options) {
      if (options.isClass) return options.isClass(entry);      
      var tags = entry.tags;
      for(var k = 0; k < tags.length; k++) {
        if(tags[k].type == 'class') return true;
      }    
      return false;
    }
    
    var isFunction = function(entry) {
      // If we have a context
      if(entry.ctx != null 
        && (entry.ctx.type == 'method' || entry.ctx.type == 'function')
        && entry.isPrivate == false
        /*&& entry.tags.length >= 1
        && (entry.tags[0].type == 'param' || entry.tags[0].type == 'return')*/) {
        return true;
      }
      return false;
    }
    
    var isStaticMethod = function(entry) {
      return entry.ctx != null
             && entry.ctx.receiver != null 
             && entry.ctx.receiver != "this";
    }
    
    var getProperty = function(entry, options) {
      if (options.isProperty) return options.isProperty(entry);
      if (entry.ctx && entry.ignore != true && entry.ctx.type == 'property') {
        return entry;
      }
      var tags = entry.tags;    
      for(var k = 0; k < tags.length; k++) {
        var tag = tags[k];
        if (tag.visibility == false) return null;
        if(tag.type == 'property') return tag;
      }    
      return null;    
    }
    
    var isClassConstant = function(entry) {
      var tags = entry.tags;    
      for(var k = 0; k < tags.length; k++) {
        if(tags[k].type == 'classconstant') return true;
      }    
      return false;    
    }
    
    var getFullDescription = function(entry) {
      // Get full description and clean it
      var fullDescription = entry.description.summary;
      fullDescription = fullDescription.replace(/\<pre\>\<code\>/g, ".. code-block:: javascript\n\n   ")
        .replace(/\<\/code\>\<\/pre\>/g, "")
        .replace(/\<h2\>|\<\/h2\>/g, "**")
        .replace(/\<p\>/g, "\n\n")
        .replace(/\<\/p\>/g, "")
        .replace(/&lt;/g, "<")
        .replace(/\<strong\>|\<\/strong\>/g, "**")
        .replace(/\<em\>|\<\/em\>/g, "*")
        .replace(/\<br[ ]*\>|\<\/br[ ]*\>|\<br[ ]*\/\>/g, "\n");
      return fullDescription;
    }
    
    var getTernType = function(tag, moduleInfos) {
      var types = tag.types;
      for (var k = 0; k < types.length; k++) {
        var originalType = types[k];
        if (!originalType) return null;
        var type = originalType.toLowerCase();
        switch(type) {
        case 'function':
          return 'fn()';
        case 'array':
          return '[?]';        
        case 'boolean':
          return 'bool'; 
        case 'string':
        case 'number':
          return type;         
        case 'object':
          return '+Object';
        case 'null':
          return null;
        default:
          var info = moduleInfos[originalType];
          if (info) return '+' + info;
        }
      }
      return "?";
    }
    
});  