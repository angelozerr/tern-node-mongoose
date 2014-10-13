var fs = require('fs'),
  dox = require('dox'),
  exec = require('child_process').exec,
  docs = require('./js2api');

var basedir = "D:/_Projects/git/mongoose";
  
// ----------------------------------------------------------------------------
// INITALIZE
// ----------------------------------------------------------------------------
// All source files for the api generation


var path = basedir + "/lib"
var apiClasses = [];

var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      file = dir + '/' + file;
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            next();
          });
        } else {
        
          var f = file.substring(path.length, file.length);
          var filename = f.substring(1, f.length-3);
          results.push({tag: filename, path:"/lib" + f});
          next();
        }
      });
    })();
  });
};

walk(path, function(err, results) {
  if (err) throw err;
  console.log(results);
  
  var apiClasses = results;
  // ----------------------------------------------------------------------------
  // PROCESS Driver API
  // ----------------------------------------------------------------------------
  docs.renderAPIDocs(basedir, apiClasses);
  
});

/*var apiClasses = [
                  {tag:"admin", path:"./lib/mongodb/admin.js"}
]                   
docs.renderAPIDocs(basedir, apiClasses);*/

//var apiClasses = [];
//
//
//var apiClasses = [
//    {tag:"browser", path:"./lib/browser.js"}
//];

