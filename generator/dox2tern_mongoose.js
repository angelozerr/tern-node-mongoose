(function(root, mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports, require("./dox2tern")); // CommonJS
    if (typeof define == "function" && define.amd) return define([ "exports", "dox2tern" ], mod); // AMD
    mod(root.dox2tern, root.dox2tern); // Plain browser env
})(this, function(exports, dox2tern) {
  "use strict";
  
  var Mongoose = exports.Mongoose = {};
  Mongoose.generate = function(api) {
    var options = {
      "name" : "node-mongoose",
      "initialize" : initialize,
      "isClass" : isClass,
      "getType" : getType
    };
    var generator = new dox2tern.Generator(options);
    return generator.process(api);
  }
  
  var initialize = function(ternDef) {
    ternDef["!define"]["!node"] = {
        mongoose : {
          "!type" : "+index.Mongoose"
        }
    };
  }
  
  var isClass = function(entry) {
    if (entry.ctx != null  && entry.ctx.type == 'function') return true;
  }
  
  var getType = function(moduleName, className, methodName, staticMethod) {
    switch(className) {
    case 'Mongoose':
      if (!methodName) {
      }
      else {
        // type for Mongoose methods
        switch(methodName) {
        case 'model':
          return "fn(name: string, schema?: +schema.Schema, collection?: string, skipInit?: bool)  -> +model.Model";
        }
      }
      break;     
    case 'Db':
      
      break;
    }
  }
  
});  