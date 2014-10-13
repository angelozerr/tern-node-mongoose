var fs = require('fs'),
  dox = require('dox'),  
  exec = require('child_process').exec,
  spawn = require('child_process').spawn;  

// -----------------------------------------------------------------------------------------------------
//
//  API Doc generation
//
// -----------------------------------------------------------------------------------------------------
exports.renderAPIDocs = function(baseDir, apiClasses) {
  // Force create the directory for the generated docs
      // Extract meta data from source files
      var dataObjects = exports.extractLibraryMetaData(apiClasses, baseDir);
      
      // Iterate over all classes
      var classNames = Object.keys(dataObjects);
      
      // For each class generate output
      for(var i = 0; i < classNames.length; i++) {
        var className = classNames[i];
        // The meta data object
        var classMetaData = dataObjects[className];
        // console.log("============================================== classMetaData")
        // console.log(JSON.stringify(classMetaData, true, 4))

        // Render the class template
        //
        // Write out the content to disk
        //fs.writeFileSync(format("%s/%s.rst", outputDirectory, className), classContent);
      }
      
      var s = JSON.stringify(dataObjects,null,' ');
      fs.writeFileSync('generator/data/api.json', s);
      console.log("Generate generator/data/api.json" )
      fs.writeFileSync('generator/data/api.json.js', 'var api = ' + s);
      console.log("Generate generator/data/api.js.json" )

   
}


// Parses all the files and extracts the dox data for the library
exports.extractLibraryMetaData = function(sourceFiles, baseDir) {
  var dataObjects = {};
  // Iterate over all source files
  for(var i = 0; i < sourceFiles.length; i++) {
    // Read source file content
    var sourceFile = fs.readFileSync(baseDir + sourceFiles[i].path);
    // Parse the content
    var metaData = dox.parseComments(sourceFile.toString());
    // Save the metadata
    dataObjects[sourceFiles[i]["tag"] != null ? sourceFiles[i].tag : i] = metaData;
  }
  
  // Return all objects
  return dataObjects;
}













