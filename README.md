# tern-node-mongoose

[![Build Status](https://secure.travis-ci.org/angelozerr/tern-node-mongoose.png)](http://travis-ci.org/angelozerr/tern-node-mongoose)
[![npm version](https://badge.fury.io/js/tern-node-mongoose.svg)](http://badge.fury.io/js/tern-node-mongoose)

[tern-node-mongoose](https://github.com/angelozerr/tern-node-mongoose) is a tern plugin which adds support for [Mongoose](http://mongoosejs.com/) to the JavaScript code intelligence system [Tern](http://ternjs.net/).

## Demo

You can see demo with CodeMirror (inside Web Browser) [demos/mongoose.html](https://github.com/angelozerr/tern-node-mongoose/blob/master/demos/mongoose.html) :

![CodeMirror & TernNodeMongoose](https://github.com/angelozerr/tern-node-mongoose/wiki/images/CodeMirror_TernNodeMongooseCompletions.png)

If you wish to use Eclipse as IDE, see Eclipse support for [Node Mongoose](https://github.com/angelozerr/tern.java/wiki/Tern-&-Node-Mongoose-support).

## Installation

tern-node-mongoose works with the NodeJS [Tern Server][tern-server], and within a browser.

The easiest way to install tern-node-mongoose is to use a recent version of
[npm][npm]. In the directory where you installed the [tern package][tern-npm],
simply run

```
$ npm install tern-node-mongoose
```

## Configuration

`node-mongoose` tern plugin extends `node` tern plugin to support mongoose.

### With Node.js

In order for Tern to load the tern-node-mongoose plugin once it is installed, you must
include `node-mongoose` in the `plugins` section of your [Tern configuration
file][tern-config] and `node`.

Here is a minimal example `.tern-project` configuration file:

```json
{
  "ecmaVersion": 5,
  "plugins": {
    "node": {},
    "node-mongoose": {}
  }
}
```

### With WebBrowser (CodeMirror)

See [demos/mongoose.html](https://github.com/angelozerr/tern-node-mongoose/blob/master/demos/mongoose.html)
## How to generate node-mongoose.js?

### Introduction

The tern plugin [node-mongoose.js](https://github.com/angelozerr/tern-node-mongoose/blob/master/node-mongoose.js) is generated from the JavaScript sources of [Mongoose](http://mongoosejs.com/).
Process of this generation is : 

 * generate a JSON Representation (api.json) of JavaScript sources of [Mongoose](http://mongoosejs.com/) by using [dox](https://github.com/visionmedia/dox).
 * generate a JSON Type Definition from the generated dox JSON Representation.
 * generate the tern plugin by using the generated JSON Type Definition.
 
### Instruction 

Here the steps : 
  
* open cmd  
* `cd $HOME/tern-node-mongoose`
* `npm install` (to install dox)
* Generate **generator/data/api.json** from JS sources with dox : 
  
  * edit generator/data/node/js2api_mongodb.js with the path of the [node-mongoose](https://github.com/mongodb/node-mongoose) :
 
 	`var basedir = "D:/_Projects/git/node-mongoose/"`
 
  * launch the following command to generate **generator/data/api.json** :
  
	`node generator/data/node/js2api_mongodb`

* Generate the tern plugin **node-mongoose.js** from api.json, by launching :
 
	`node generator/node/make_plugin`

### Advanced informations

JS sources are sometimes NOT well annotated, so it misses some information (some return function, parameter type, etc). The [generator/dox2tern_mongodb.js](generator/dox2tern_mongodb.js) gives the capability to override information of JS sources.

If you wish to work on the dox JSON Representation (api.json) to tern JSON Type Definition, you can open the HTML page [generator/html/dox2tern.html](generator/html/dox2tern.html)

See [Contributing](https://github.com/angelozerr/tern-node-mongoose/wiki/Contributing) for more information

## Structure

The basic structure of the project is given in the following way:

* `node-mongoose.js` the tern plugin.
* `demos/` demos with `node-mongoose` tern plugin which use CodeMirror.
