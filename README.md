tern-node-mongoose
==================

tern-node-mongoose

## Generator

npm install

Generate `generator/data/api.json` from JS sources with dox : 

 * edit generator\data\node\js2api_mongoose.js
 
 var basedir = "D:/_Projects/git/mongoose/"
 
  * cmd
  
`node generator/data/node/js2api_mongoose`

 * Generate `node-mongodb-native.js` from api.json : 
 
`node generator/node/make_plugin`