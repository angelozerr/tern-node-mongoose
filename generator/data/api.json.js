var api = {
 "aggregate": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies</p>",
    "summary": "<p>Module dependencies</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var Promise = require('./promise')\n  , util = require('util')\n  , utils = require('./utils')\n  , Query = require('./query')\n  , read = Query.prototype.read",
   "ctx": {
    "type": "declaration",
    "name": "Promise",
    "value": "require('./promise')",
    "string": "Promise"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "MongoDB",
     "url": "http://docs.mongodb.org/manual/applications/aggregation/",
     "visibility": "http://docs.mongodb.org/manual/applications/aggregation/"
    },
    {
     "type": "see",
     "title": "driver",
     "url": "http://mongodb.github.com/node-mongodb-native/api-generated/collection.html#aggregate",
     "visibility": "http://mongodb.github.com/node-mongodb-native/api-generated/collection.html#aggregate"
    },
    {
     "type": "param",
     "types": [
      "Object",
      "Array"
     ],
     "name": "[ops]",
     "description": "aggregation operator(s) or operator array"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Aggregate constructor used for building aggregation pipelines.</p>\n\n<h4>Example:</h4>\n\n<pre><code>new Aggregate();\nnew Aggregate({ $project: { a: 1, b: 1 } });\nnew Aggregate({ $project: { a: 1, b: 1 } }, { $skip: 5 });\nnew Aggregate([{ $project: { a: 1, b: 1 } }, { $skip: 5 }]);\n</code></pre>\n\n<p>Returned when calling Model.aggregate().</p>\n\n<h4>Example:</h4>\n\n<pre><code>Model\n.aggregate({ $match: { age: { $gte: 21 }}})\n.unwind('tags')\n.exec(callback)\n</code></pre>\n\n<h4>Note:</h4>\n\n<ul>\n<li>The documents returned are plain javascript objects, not mongoose documents (since any shape of document can be returned).</li>\n<li>Requires MongoDB >= 2.1</li>\n</ul>",
    "summary": "<p>Aggregate constructor used for building aggregation pipelines.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>new Aggregate();\nnew Aggregate({ $project: { a: 1, b: 1 } });\nnew Aggregate({ $project: { a: 1, b: 1 } }, { $skip: 5 });\nnew Aggregate([{ $project: { a: 1, b: 1 } }, { $skip: 5 }]);\n</code></pre>\n\n<p>Returned when calling Model.aggregate().</p>\n\n<h4>Example:</h4>\n\n<pre><code>Model\n.aggregate({ $match: { age: { $gte: 21 }}})\n.unwind('tags')\n.exec(callback)\n</code></pre>\n\n<h4>Note:</h4>\n\n<ul>\n<li>The documents returned are plain javascript objects, not mongoose documents (since any shape of document can be returned).</li>\n<li>Requires MongoDB >= 2.1</li>\n</ul>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Aggregate () {\n  this._pipeline = [];\n  this._model = undefined;\n  this.options = undefined;\n\n  if (1 === arguments.length && util.isArray(arguments[0])) {\n    this.append.apply(this, arguments[0]);\n  } else {\n    this.append.apply(this, arguments);\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "Aggregate",
    "string": "Aggregate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Model"
     ],
     "name": "model",
     "description": "the model to which the aggregate is to be bound"
    },
    {
     "type": "return",
     "types": [
      "Aggregate"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Binds this aggregate to a model.</p>",
    "summary": "<p>Binds this aggregate to a model.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Aggregate.prototype.bind = function (model) {\n  this._model = model;\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Aggregate",
    "cons": "Aggregate",
    "name": "bind",
    "string": "Aggregate.prototype.bind()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "ops",
     "description": "operator(s) to append"
    },
    {
     "type": "return",
     "types": [
      "Aggregate"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Appends new operators to this aggregate pipeline</p>\n\n<h4>Examples:</h4>\n\n<pre><code>aggregate.append({ $project: { field: 1 }}, { $limit: 2 });\n\n// or pass an array\nvar pipeline = [{ $match: { daw: 'Logic Audio X' }} ];\naggregate.append(pipeline);\n</code></pre>",
    "summary": "<p>Appends new operators to this aggregate pipeline</p>",
    "body": "<h4>Examples:</h4>\n\n<pre><code>aggregate.append({ $project: { field: 1 }}, { $limit: 2 });\n\n// or pass an array\nvar pipeline = [{ $match: { daw: 'Logic Audio X' }} ];\naggregate.append(pipeline);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Aggregate.prototype.append = function () {\n  var args = utils.args(arguments)\n    , arg;\n\n  if (!args.every(isOperator)) {\n    throw new Error(\"Arguments must be aggregate pipeline operators\");\n  }\n\n  this._pipeline = this._pipeline.concat(args);\n\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Aggregate",
    "cons": "Aggregate",
    "name": "append",
    "string": "Aggregate.prototype.append()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object",
      "String"
     ],
     "name": "arg",
     "description": "field specification"
    },
    {
     "type": "see",
     "title": "projection",
     "url": "http://docs.mongodb.org/manual/reference/aggregation/project/",
     "visibility": "http://docs.mongodb.org/manual/reference/aggregation/project/"
    },
    {
     "type": "return",
     "types": [
      "Aggregate"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Appends a new $project operator to this aggregate pipeline.</p>\n\n<p>Mongoose query <a href=\"#query_Query-select\">selection syntax</a> is also supported.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>// include a, include b, exclude _id\naggregate.project(\"a b -_id\");\n\n// or you may use object notation, useful when\n// you have keys already prefixed with a \"-\"\naggregate.project({a: 1, b: 1, _id: 0});\n\n// reshaping documents\naggregate.project({\n    newField: '$b.nested'\n  , plusTen: { $add: ['$val', 10]}\n  , sub: {\n       name: '$a'\n    }\n})\n\n// etc\naggregate.project({ salary_k: { $divide: [ \"$salary\", 1000 ] } });\n</code></pre>",
    "summary": "<p>Appends a new $project operator to this aggregate pipeline.</p>",
    "body": "<p>Mongoose query <a href=\"#query_Query-select\">selection syntax</a> is also supported.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>// include a, include b, exclude _id\naggregate.project(\"a b -_id\");\n\n// or you may use object notation, useful when\n// you have keys already prefixed with a \"-\"\naggregate.project({a: 1, b: 1, _id: 0});\n\n// reshaping documents\naggregate.project({\n    newField: '$b.nested'\n  , plusTen: { $add: ['$val', 10]}\n  , sub: {\n       name: '$a'\n    }\n})\n\n// etc\naggregate.project({ salary_k: { $divide: [ \"$salary\", 1000 ] } });\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Aggregate.prototype.project = function (arg) {\n  var fields = {};\n\n  if ('object' === typeof arg && !util.isArray(arg)) {\n    Object.keys(arg).forEach(function (field) {\n      fields[field] = arg[field];\n    });\n  } else if (1 === arguments.length && 'string' === typeof arg) {\n    arg.split(/\\s+/).forEach(function (field) {\n      if (!field) return;\n      var include = '-' == field[0] ? 0 : 1;\n      if (include === 0) field = field.substring(1);\n      fields[field] = include;\n    });\n  } else {\n    throw new Error(\"Invalid project() argument. Must be string or object\");\n  }\n\n  return this.append({ $project: fields });\n}",
   "ctx": {
    "type": "method",
    "constructor": "Aggregate",
    "cons": "Aggregate",
    "name": "project",
    "string": "Aggregate.prototype.project()"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$group",
     "url": "http://docs.mongodb.org/manual/reference/aggregation/group/",
     "visibility": "http://docs.mongodb.org/manual/reference/aggregation/group/"
    },
    {
     "type": "method",
     "string": "group"
    },
    {
     "type": "memberOf",
     "parent": "Aggregate"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "arg",
     "description": "$group operator contents"
    },
    {
     "type": "return",
     "types": [
      "Aggregate"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Appends a new custom $group operator to this aggregate pipeline.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>aggregate.group({ _id: \"$department\" });\n</code></pre>",
    "summary": "<p>Appends a new custom $group operator to this aggregate pipeline.</p>",
    "body": "<h4>Examples:</h4>\n\n<pre><code>aggregate.group({ _id: \"$department\" });\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$match",
     "url": "http://docs.mongodb.org/manual/reference/aggregation/match/",
     "visibility": "http://docs.mongodb.org/manual/reference/aggregation/match/"
    },
    {
     "type": "method",
     "string": "match"
    },
    {
     "type": "memberOf",
     "parent": "Aggregate"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "arg",
     "description": "$match operator contents"
    },
    {
     "type": "return",
     "types": [
      "Aggregate"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Appends a new custom $match operator to this aggregate pipeline.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>aggregate.match({ department: { $in: [ \"sales\", \"engineering\" } } });\n</code></pre>",
    "summary": "<p>Appends a new custom $match operator to this aggregate pipeline.</p>",
    "body": "<h4>Examples:</h4>\n\n<pre><code>aggregate.match({ department: { $in: [ \"sales\", \"engineering\" } } });\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$skip",
     "url": "http://docs.mongodb.org/manual/reference/aggregation/skip/",
     "visibility": "http://docs.mongodb.org/manual/reference/aggregation/skip/"
    },
    {
     "type": "method",
     "string": "skip"
    },
    {
     "type": "memberOf",
     "parent": "Aggregate"
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "num",
     "description": "number of records to skip before next stage"
    },
    {
     "type": "return",
     "types": [
      "Aggregate"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Appends a new $skip operator to this aggregate pipeline.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>aggregate.skip(10);\n</code></pre>",
    "summary": "<p>Appends a new $skip operator to this aggregate pipeline.</p>",
    "body": "<h4>Examples:</h4>\n\n<pre><code>aggregate.skip(10);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$limit",
     "url": "http://docs.mongodb.org/manual/reference/aggregation/limit/",
     "visibility": "http://docs.mongodb.org/manual/reference/aggregation/limit/"
    },
    {
     "type": "method",
     "string": "limit"
    },
    {
     "type": "memberOf",
     "parent": "Aggregate"
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "num",
     "description": "maximum number of records to pass to the next stage"
    },
    {
     "type": "return",
     "types": [
      "Aggregate"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Appends a new $limit operator to this aggregate pipeline.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>aggregate.limit(10);\n</code></pre>",
    "summary": "<p>Appends a new $limit operator to this aggregate pipeline.</p>",
    "body": "<h4>Examples:</h4>\n\n<pre><code>aggregate.limit(10);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$geoNear",
     "url": "http://docs.mongodb.org/manual/reference/aggregation/geoNear/",
     "visibility": "http://docs.mongodb.org/manual/reference/aggregation/geoNear/"
    },
    {
     "type": "method",
     "string": "near"
    },
    {
     "type": "memberOf",
     "parent": "Aggregate"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "parameters",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Aggregate"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Appends a new $geoNear operator to this aggregate pipeline.</p>\n\n<h4>NOTE:</h4>\n\n<p><strong>MUST</strong> be used as the first operator in the pipeline.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>aggregate.near({\n  near: [40.724, -73.997],\n  distanceField: \"dist.calculated\", // required\n  maxDistance: 0.008,\n  query: { type: \"public\" },\n  includeLocs: \"dist.location\",\n  uniqueDocs: true,\n  num: 5\n});\n</code></pre>",
    "summary": "<p>Appends a new $geoNear operator to this aggregate pipeline.</p>",
    "body": "<h4>NOTE:</h4>\n\n<p><strong>MUST</strong> be used as the first operator in the pipeline.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>aggregate.near({\n  near: [40.724, -73.997],\n  distanceField: \"dist.calculated\", // required\n  maxDistance: 0.008,\n  query: { type: \"public\" },\n  includeLocs: \"dist.location\",\n  uniqueDocs: true,\n  num: 5\n});\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Aggregate.prototype.near = function (arg) {\n  var op = {};\n  op.$geoNear = arg;\n  return this.append(op);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Aggregate",
    "cons": "Aggregate",
    "name": "near",
    "string": "Aggregate.prototype.near()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>define methods</p>",
    "summary": "<p>define methods</p>",
    "body": ""
   },
   "ignore": true,
   "code": "'group match skip limit out'.split(' ').forEach(function ($operator) {\n  Aggregate.prototype[$operator] = function (arg) {\n    var op = {};\n    op['$' + $operator] = arg;\n    return this.append(op);\n  };\n});"
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$unwind",
     "url": "http://docs.mongodb.org/manual/reference/aggregation/unwind/",
     "visibility": "http://docs.mongodb.org/manual/reference/aggregation/unwind/"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "fields",
     "description": "the field(s) to unwind"
    },
    {
     "type": "return",
     "types": [
      "Aggregate"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Appends new custom $unwind operator(s) to this aggregate pipeline.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>aggregate.unwind(\"tags\");\naggregate.unwind(\"a\", \"b\", \"c\");\n</code></pre>",
    "summary": "<p>Appends new custom $unwind operator(s) to this aggregate pipeline.</p>",
    "body": "<h4>Examples:</h4>\n\n<pre><code>aggregate.unwind(\"tags\");\naggregate.unwind(\"a\", \"b\", \"c\");\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Aggregate.prototype.unwind = function () {\n  var args = utils.args(arguments);\n\n  return this.append.apply(this, args.map(function (arg) {\n    return { $unwind: '$' + arg };\n  }));\n}",
   "ctx": {
    "type": "method",
    "constructor": "Aggregate",
    "cons": "Aggregate",
    "name": "unwind",
    "string": "Aggregate.prototype.unwind()"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$sort",
     "url": "http://docs.mongodb.org/manual/reference/aggregation/sort/",
     "visibility": "http://docs.mongodb.org/manual/reference/aggregation/sort/"
    },
    {
     "type": "param",
     "types": [
      "Object",
      "String"
     ],
     "name": "arg",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Appends a new $sort operator to this aggregate pipeline.</p>\n\n<p>If an object is passed, values allowed are <code>asc</code>, <code>desc</code>, <code>ascending</code>, <code>descending</code>, <code>1</code>, and <code>-1</code>.</p>\n\n<p>If a string is passed, it must be a space delimited list of path names. The sort order of each path is ascending unless the path name is prefixed with <code>-</code> which will be treated as descending.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>// these are equivalent\naggregate.sort({ field: 'asc', test: -1 });\naggregate.sort('field -test');\n</code></pre>",
    "summary": "<p>Appends a new $sort operator to this aggregate pipeline.</p>",
    "body": "<p>If an object is passed, values allowed are <code>asc</code>, <code>desc</code>, <code>ascending</code>, <code>descending</code>, <code>1</code>, and <code>-1</code>.</p>\n\n<p>If a string is passed, it must be a space delimited list of path names. The sort order of each path is ascending unless the path name is prefixed with <code>-</code> which will be treated as descending.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>// these are equivalent\naggregate.sort({ field: 'asc', test: -1 });\naggregate.sort('field -test');\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Aggregate.prototype.sort = function (arg) {\n  // TODO refactor to reuse the query builder logic\n\n  var sort = {};\n\n  if ('Object' === arg.constructor.name) {\n    var desc = ['desc', 'descending', -1];\n    Object.keys(arg).forEach(function (field) {\n      sort[field] = desc.indexOf(arg[field]) === -1 ? 1 : -1;\n    });\n  } else if (1 === arguments.length && 'string' == typeof arg) {\n    arg.split(/\\s+/).forEach(function (field) {\n      if (!field) return;\n      var ascend = '-' == field[0] ? -1 : 1;\n      if (ascend === -1) field = field.substring(1);\n      sort[field] = ascend;\n    });\n  } else {\n    throw new TypeError('Invalid sort() argument. Must be a string or object.');\n  }\n\n  return this.append({ $sort: sort });\n}",
   "ctx": {
    "type": "method",
    "constructor": "Aggregate",
    "cons": "Aggregate",
    "name": "sort",
    "string": "Aggregate.prototype.sort()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "pref",
     "description": "one of the listed preference options or their aliases"
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "[tags]",
     "description": "optional tags for this query"
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://docs.mongodb.org/manual/applications/replication/#read-preference",
     "visibility": "http://docs.mongodb.org/manual/applications/replication/#read-preference"
    },
    {
     "type": "see",
     "title": "driver",
     "url": "http://mongodb.github.com/node-mongodb-native/driver-articles/anintroductionto1_1and2_2.html#read-preferences",
     "visibility": "http://mongodb.github.com/node-mongodb-native/driver-articles/anintroductionto1_1and2_2.html#read-preferences"
    }
   ],
   "description": {
    "full": "<p>Sets the readPreference option for the aggregation query.</p>\n\n<h4>Example:</h4>\n\n<pre><code>Model.aggregate(..).read('primaryPreferred').exec(callback)\n</code></pre>",
    "summary": "<p>Sets the readPreference option for the aggregation query.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>Model.aggregate(..).read('primaryPreferred').exec(callback)\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Aggregate.prototype.read = function (pref) {\n  if (!this.options) this.options = {};\n  read.apply(this, arguments);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Aggregate",
    "cons": "Aggregate",
    "name": "read",
    "string": "Aggregate.prototype.read()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "value",
     "description": "Should tell server it can use hard drive to store data during aggregation."
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "[tags]",
     "description": "optional tags for this query"
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://docs.mongodb.org/manual/reference/command/aggregate/",
     "visibility": "http://docs.mongodb.org/manual/reference/command/aggregate/"
    }
   ],
   "description": {
    "full": "<p>Sets the allowDiskUse option for the aggregation query (ignored for &lt; 2.6.0)</p>\n\n<h4>Example:</h4>\n\n<pre><code>Model.aggregate(..).allowDiskUse(true).exec(callback)\n</code></pre>",
    "summary": "<p>Sets the allowDiskUse option for the aggregation query (ignored for &lt; 2.6.0)</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>Model.aggregate(..).allowDiskUse(true).exec(callback)\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Aggregate.prototype.allowDiskUse = function(value) {\n  if (!this.options) this.options = {};\n  this.options.allowDiskUse = value;\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Aggregate",
    "cons": "Aggregate",
    "name": "allowDiskUse",
    "string": "Aggregate.prototype.allowDiskUse()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": "set the cursor batch size"
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://docs.mongodb.org/manual/reference/command/aggregate/",
     "visibility": "http://docs.mongodb.org/manual/reference/command/aggregate/"
    }
   ],
   "description": {
    "full": "<p>Sets the cursor option option for the aggregation query (ignored for &lt; 2.6.0)</p>\n\n<h4>Example:</h4>\n\n<pre><code>Model.aggregate(..).cursor({ batchSize: 1000 }).exec(callback)\n</code></pre>",
    "summary": "<p>Sets the cursor option option for the aggregation query (ignored for &lt; 2.6.0)</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>Model.aggregate(..).cursor({ batchSize: 1000 }).exec(callback)\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Aggregate.prototype.cursor = function(options) {\n  if (!this.options) this.options = {};\n  this.options.cursor = options;\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Aggregate",
    "cons": "Aggregate",
    "name": "cursor",
    "string": "Aggregate.prototype.cursor()"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "local": "Promise #promise_Promise",
     "visibility": "Promise"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Executes the aggregate pipeline on the currently bound Model.</p>\n\n<h4>Example:</h4>\n\n<pre><code>aggregate.exec(callback);\n\n// Because a promise is returned, the `callback` is optional.\nvar promise = aggregate.exec();\npromise.then(..);\n</code></pre>",
    "summary": "<p>Executes the aggregate pipeline on the currently bound Model.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>aggregate.exec(callback);\n\n// Because a promise is returned, the `callback` is optional.\nvar promise = aggregate.exec();\npromise.then(..);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Aggregate.prototype.exec = function (callback) {\n  var promise = new Promise();\n\n  if (callback) {\n    promise.addBack(callback);\n  }\n\n  if (!this._pipeline.length) {\n    promise.error(new Error(\"Aggregate has empty pipeline\"));\n    return promise;\n  }\n\n  if (!this._model) {\n    promise.error(new Error(\"Aggregate not bound to any Model\"));\n    return promise;\n  }\n\n  this._model\n    .collection\n    .aggregate(this._pipeline, this.options || {}, promise.resolve.bind(promise));\n\n  return promise;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Aggregate",
    "cons": "Aggregate",
    "name": "exec",
    "string": "Aggregate.prototype.exec()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Helpers</p>",
    "summary": "<p>Helpers</p>",
    "body": ""
   },
   "ignore": true
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": "object to check"
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Checks whether an object is likely a pipeline operator</p>",
    "summary": "<p>Checks whether an object is likely a pipeline operator</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function isOperator (obj) {\n  var k;\n\n  if ('object' !== typeof obj) {\n    return false;\n  }\n\n  k = Object.keys(obj);\n\n  return 1 === k.length && k.some(function (key) {\n    return '$' === key[0];\n  });\n}",
   "ctx": {
    "type": "function",
    "name": "isOperator",
    "string": "isOperator()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Exports</p>",
    "summary": "<p>Exports</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = Aggregate;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "Aggregate",
    "string": "module.exports"
   }
  }
 ],
 "browser": [
  {
   "tags": [],
   "description": {
    "full": "",
    "summary": "",
    "body": ""
   },
   "isPrivate": false,
   "code": "exports.Error = require('./error');\nexports.Schema = require('./schema');\nexports.Types = require('./types');\nexports.VirtualType = require('./virtualtype');\nexports.SchemaType = require('./schematype.js');\nexports.utils = require('./utils.js');\n\nexports.Document = require('./document_provider.js')();\n\n// Small hacks to make browserify include variable-path requires\nrequire('./drivers/node-mongodb-native/binary');\n\nif (typeof window !== 'undefined') {\n  window.mongoose = module.exports;\n}",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "Error",
    "value": "require('./error')",
    "string": "exports.Error"
   }
  }
 ],
 "browserDocument": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var NodeJSDocument = require('./document')\n  , EventEmitter = require('events').EventEmitter\n  , setMaxListeners = EventEmitter.prototype.setMaxListeners\n  , MongooseError = require('./error')\n  , MixedSchema = require('./schema/mixed')\n  , Schema = require('./schema')\n  , ObjectId = require('./types/objectid')\n  , ValidatorError = require('./schematype').ValidatorError\n  , utils = require('./utils')\n  , clone = utils.clone\n  , isMongooseObject = utils.isMongooseObject\n  , inspect = require('util').inspect\n  , ValidationError = MongooseError.ValidationError\n  , InternalCache = require('./internal')\n  , deepEqual = utils.deepEqual\n  , hooks = require('hooks')\n  , Promise = require('./promise')\n  , DocumentArray\n  , MongooseArray\n  , Embedded",
   "ctx": {
    "type": "declaration",
    "name": "NodeJSDocument",
    "value": "require('./document')",
    "string": "NodeJSDocument"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": "the values to set"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[fields]",
     "description": "optional object containing the fields which were selected in the query returning this document and any populated paths data"
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "[skipId]",
     "description": "bool, should we auto create an ObjectId _id"
    },
    {
     "type": "inherits",
     "string": "NodeJS EventEmitter http://nodejs.org/api/events.html#events_class_events_eventemitter"
    },
    {
     "type": "event",
     "string": "`init`: Emitted on a document after it has was retreived from the db and fully hydrated by Mongoose."
    },
    {
     "type": "event",
     "string": "`save`: Emitted when the document is successfully saved"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Document constructor.</p>",
    "summary": "<p>Document constructor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function Document (obj, schema, fields, skipId, skipInit) {\n  if ( !(this instanceof Document) )\n    return new Document( obj, schema, fields, skipId, skipInit );\n\n\n  if (utils.isObject(schema) && !(schema instanceof Schema)) {\n    schema = new Schema(schema);\n  }\n\n  // When creating EmbeddedDocument, it already has the schema and he doesn't need the _id\n  schema = this.schema || schema;\n\n  // Generate ObjectId if it is missing, but it requires a scheme\n  if ( !this.schema && schema.options._id ){\n    obj = obj || {};\n\n    if ( obj._id === undefined ){\n      obj._id = new ObjectId();\n    }\n  }\n\n  if ( !schema ){\n    throw new MongooseError.MissingSchemaError();\n  }\n\n  this.$__setSchema(schema);\n\n  this.$__ = new InternalCache;\n  this.isNew = true;\n  this.errors = undefined;\n\n  //var schema = this.schema;\n\n  if ('boolean' === typeof fields) {\n    this.$__.strictMode = fields;\n    fields = undefined;\n  } else {\n    this.$__.strictMode = this.schema.options && this.schema.options.strict;\n    this.$__.selected = fields;\n  }\n\n  var required = this.schema.requiredPaths();\n  for (var i = 0; i < required.length; ++i) {\n    this.$__.activePaths.require(required[i]);\n  }\n\n  setMaxListeners.call(this, 0);\n  this._doc = this.$__buildDoc(obj, fields, skipId);\n\n  if ( !skipInit && obj ){\n    this.init( obj );\n  }\n\n  this.$__registerHooksFromSchema();\n\n  // apply methods\n  for ( var m in schema.methods ){\n    this[ m ] = schema.methods[ m ];\n  }\n  // apply statics\n  for ( var s in schema.statics ){\n    this[ s ] = schema.statics[ s ];\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "Document",
    "string": "Document()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherit from EventEmitter.</p>",
    "summary": "<p>Inherit from EventEmitter.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "Document.prototype = Object.create( NodeJSDocument.prototype );\nDocument.prototype.constructor = Document;",
   "ctx": {
    "type": "property",
    "receiver": "Document",
    "name": "prototype",
    "value": "Object.create( NodeJSDocument.prototype )",
    "string": "Document.prototype"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "Document.ValidationError = ValidationError;\nmodule.exports = exports = Document;",
   "ctx": {
    "type": "property",
    "receiver": "Document",
    "name": "ValidationError",
    "value": "ValidationError",
    "string": "Document.ValidationError"
   }
  }
 ],
 "cast": [
  {
   "tags": [],
   "description": {
    "full": "",
    "summary": "",
    "body": ""
   },
   "isPrivate": false,
   "code": "var utils = require('./utils');\nvar Types = require('./schema/index');\n\nvar cast = module.exports = function(schema, obj) {\n  var paths = Object.keys(obj)\n    , i = paths.length\n    , any$conditionals\n    , schematype\n    , nested\n    , path\n    , type\n    , val;\n\n  while (i--) {\n    path = paths[i];\n    val = obj[path];\n\n    if ('$or' === path || '$nor' === path || '$and' === path) {\n      var k = val.length\n        , orComponentQuery;\n\n      while (k--) {\n        val[k] = cast(schema, val[k]);\n      }\n\n    } else if (path === '$where') {\n      type = typeof val;\n\n      if ('string' !== type && 'function' !== type) {\n        throw new Error(\"Must have a string or function for $where\");\n      }\n\n      if ('function' === type) {\n        obj[path] = val.toString();\n      }\n\n      continue;\n\n    } else {\n\n      if (!schema) {\n        // no casting for Mixed types\n        continue;\n      }\n\n      schematype = schema.path(path);\n\n      if (!schematype) {\n        // Handle potential embedded array queries\n        var split = path.split('.')\n          , j = split.length\n          , pathFirstHalf\n          , pathLastHalf\n          , remainingConds\n          , castingQuery;\n\n        // Find the part of the var path that is a path of the Schema\n        while (j--) {\n          pathFirstHalf = split.slice(0, j).join('.');\n          schematype = schema.path(pathFirstHalf);\n          if (schematype) break;\n        }\n\n        // If a substring of the input path resolves to an actual real path...\n        if (schematype) {\n          // Apply the casting; similar code for $elemMatch in schema/array.js\n          if (schematype.caster && schematype.caster.schema) {\n            remainingConds = {};\n            pathLastHalf = split.slice(j).join('.');\n            remainingConds[pathLastHalf] = val;\n            obj[path] = cast(schematype.caster.schema, remainingConds)[pathLastHalf];\n          } else {\n            obj[path] = val;\n          }\n          continue;\n        }\n\n        if (utils.isObject(val)) {\n          // handle geo schemas that use object notation\n          // { loc: { long: Number, lat: Number }\n\n          var geo = val.$near ? '$near' :\n                    val.$nearSphere ? '$nearSphere' :\n                    val.$within ? '$within' :\n                    val.$geoIntersects ? '$geoIntersects' : '';\n\n          if (!geo) {\n            continue;\n          }\n\n          var numbertype = new Types.Number('__QueryCasting__')\n          var value = val[geo];\n\n          if (val.$maxDistance) {\n            val.$maxDistance = numbertype.castForQuery(val.$maxDistance);\n          }\n\n          if ('$within' == geo) {\n            var withinType = value.$center\n                          || value.$centerSphere\n                          || value.$box\n                          || value.$polygon;\n\n            if (!withinType) {\n              throw new Error('Bad $within paramater: ' + JSON.stringify(val));\n            }\n\n            value = withinType;\n\n          } else if ('$near' == geo &&\n              'string' == typeof value.type && Array.isArray(value.coordinates)) {\n            // geojson; cast the coordinates\n            value = value.coordinates;\n\n          } else if (('$near' == geo || '$nearSphere' == geo || '$geoIntersects' == geo) &&\n              value.$geometry && 'string' == typeof value.$geometry.type &&\n              Array.isArray(value.$geometry.coordinates)) {\n            // geojson; cast the coordinates\n            value = value.$geometry.coordinates;\n          }\n\n          ;(function _cast (val) {\n            if (Array.isArray(val)) {\n              val.forEach(function (item, i) {\n                if (Array.isArray(item) || utils.isObject(item)) {\n                  return _cast(item);\n                }\n                val[i] = numbertype.castForQuery(item);\n              });\n            } else {\n              var nearKeys= Object.keys(val);\n              var nearLen = nearKeys.length;\n              while (nearLen--) {\n                var nkey = nearKeys[nearLen];\n                var item = val[nkey];\n                if (Array.isArray(item) || utils.isObject(item)) {\n                  _cast(item);\n                  val[nkey] = item;\n                } else {\n                  val[nkey] = numbertype.castForQuery(item);\n                }\n              }\n            }\n          })(value);\n        }\n\n      } else if (val === null || val === undefined) {\n        continue;\n      } else if ('Object' === val.constructor.name) {\n\n        any$conditionals = Object.keys(val).some(function (k) {\n          return k.charAt(0) === '$' && k !== '$id' && k !== '$ref';\n        });\n\n        if (!any$conditionals) {\n          obj[path] = schematype.castForQuery(val);\n        } else {\n\n          var ks = Object.keys(val)\n            , k = ks.length\n            , $cond;\n\n          while (k--) {\n            $cond = ks[k];\n            nested = val[$cond];\n\n            if ('$exists' === $cond) {\n              if ('boolean' !== typeof nested) {\n                throw new Error(\"$exists parameter must be Boolean\");\n              }\n              continue;\n            }\n\n            if ('$type' === $cond) {\n              if ('number' !== typeof nested) {\n                throw new Error(\"$type parameter must be Number\");\n              }\n              continue;\n            }\n\n            if ('$not' === $cond) {\n              cast(schema, nested);\n            } else {\n              val[$cond] = schematype.castForQuery($cond, nested);\n            }\n          }\n        }\n      } else {\n        obj[path] = schematype.castForQuery(val);\n      }\n    }\n  }\n\n  return obj;\n}",
   "ctx": {
    "type": "declaration",
    "name": "utils",
    "value": "require('./utils')",
    "string": "utils"
   }
  }
 ],
 "collection": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var STATES = require('./connectionstate')",
   "ctx": {
    "type": "declaration",
    "name": "STATES",
    "value": "require('./connectionstate')",
    "string": "STATES"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": "name of the collection"
    },
    {
     "type": "param",
     "types": [
      "Connection"
     ],
     "name": "conn",
     "description": "A MongooseConnection instance"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "opts",
     "description": "optional collection options"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Abstract Collection constructor</p>\n\n<p>This is the base class that drivers inherit from and implement.</p>",
    "summary": "<p>Abstract Collection constructor</p>",
    "body": "<p>This is the base class that drivers inherit from and implement.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Collection (name, conn, opts) {\n  if (undefined === opts) opts = {};\n  if (undefined === opts.capped) opts.capped = {};\n\n  opts.bufferCommands = undefined === opts.bufferCommands\n    ? true\n    : opts.bufferCommands;\n\n  if ('number' == typeof opts.capped) {\n    opts.capped = { size: opts.capped };\n  }\n\n  this.opts = opts;\n  this.name = name;\n  this.conn = conn;\n  this.queue = [];\n  this.buffer = this.opts.bufferCommands;\n\n  if (STATES.connected == this.conn.readyState) {\n    this.onOpen();\n  }\n};",
   "ctx": {
    "type": "function",
    "name": "Collection",
    "string": "Collection()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "property",
     "string": "name"
    }
   ],
   "description": {
    "full": "<p>The collection name</p>",
    "summary": "<p>The collection name</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.name;"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "property",
     "string": "conn"
    }
   ],
   "description": {
    "full": "<p>The Connection instance</p>",
    "summary": "<p>The Connection instance</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.conn;"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Called when the database connects</p>",
    "summary": "<p>Called when the database connects</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Collection.prototype.onOpen = function () {\n  var self = this;\n  this.buffer = false;\n  self.doQueue();\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "onOpen",
    "string": "Collection.prototype.onOpen()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Called when the database disconnects</p>",
    "summary": "<p>Called when the database disconnects</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Collection.prototype.onClose = function () {\n  if (this.opts.bufferCommands) {\n    this.buffer = true;\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "onClose",
    "string": "Collection.prototype.onClose()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": "name of the method to queue"
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "args",
     "description": "arguments to pass to the method when executed"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Queues a method for later execution when its<br />database connection opens.</p>",
    "summary": "<p>Queues a method for later execution when its<br />database connection opens.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Collection.prototype.addQueue = function (name, args) {\n  this.queue.push([name, args]);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "addQueue",
    "string": "Collection.prototype.addQueue()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Executes all queued methods and clears the queue.</p>",
    "summary": "<p>Executes all queued methods and clears the queue.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Collection.prototype.doQueue = function () {\n  for (var i = 0, l = this.queue.length; i < l; i++){\n    this[this.queue[i][0]].apply(this, this.queue[i][1]);\n  }\n  this.queue = [];\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "doQueue",
    "string": "Collection.prototype.doQueue()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Abstract method that drivers must implement.</p>",
    "summary": "<p>Abstract method that drivers must implement.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Collection.prototype.ensureIndex = function(){\n  throw new Error('Collection#ensureIndex unimplemented by driver');\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "ensureIndex",
    "string": "Collection.prototype.ensureIndex()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Abstract method that drivers must implement.</p>",
    "summary": "<p>Abstract method that drivers must implement.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Collection.prototype.findAndModify = function(){\n  throw new Error('Collection#findAndModify unimplemented by driver');\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "findAndModify",
    "string": "Collection.prototype.findAndModify()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Abstract method that drivers must implement.</p>",
    "summary": "<p>Abstract method that drivers must implement.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Collection.prototype.findOne = function(){\n  throw new Error('Collection#findOne unimplemented by driver');\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "findOne",
    "string": "Collection.prototype.findOne()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Abstract method that drivers must implement.</p>",
    "summary": "<p>Abstract method that drivers must implement.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Collection.prototype.find = function(){\n  throw new Error('Collection#find unimplemented by driver');\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "find",
    "string": "Collection.prototype.find()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Abstract method that drivers must implement.</p>",
    "summary": "<p>Abstract method that drivers must implement.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Collection.prototype.insert = function(){\n  throw new Error('Collection#insert unimplemented by driver');\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "insert",
    "string": "Collection.prototype.insert()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Abstract method that drivers must implement.</p>",
    "summary": "<p>Abstract method that drivers must implement.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Collection.prototype.save = function(){\n  throw new Error('Collection#save unimplemented by driver');\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "save",
    "string": "Collection.prototype.save()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Abstract method that drivers must implement.</p>",
    "summary": "<p>Abstract method that drivers must implement.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Collection.prototype.update = function(){\n  throw new Error('Collection#update unimplemented by driver');\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "update",
    "string": "Collection.prototype.update()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Abstract method that drivers must implement.</p>",
    "summary": "<p>Abstract method that drivers must implement.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Collection.prototype.getIndexes = function(){\n  throw new Error('Collection#getIndexes unimplemented by driver');\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "getIndexes",
    "string": "Collection.prototype.getIndexes()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Abstract method that drivers must implement.</p>",
    "summary": "<p>Abstract method that drivers must implement.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Collection.prototype.mapReduce = function(){\n  throw new Error('Collection#mapReduce unimplemented by driver');\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "mapReduce",
    "string": "Collection.prototype.mapReduce()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = Collection;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "Collection",
    "string": "module.exports"
   }
  }
 ],
 "connection": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var url = require('url')\n  , utils = require('./utils')\n  , EventEmitter = require('events').EventEmitter\n  , driver = global.MONGOOSE_DRIVER_PATH || './drivers/node-mongodb-native'\n  , Model = require('./model')\n  , Schema = require('./schema')\n  , Collection  = require(driver + '/collection')\n  , STATES = require('./connectionstate')\n  , MongooseError = require('./error')\n  , assert =require('assert')\n  , muri = require('muri')",
   "ctx": {
    "type": "declaration",
    "name": "url",
    "value": "require('url')",
    "string": "url"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Protocol prefix regexp.</p>",
    "summary": "<p>Protocol prefix regexp.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "var rgxProtocol = /^(?:.)+:\\/\\//;",
   "ctx": {
    "type": "declaration",
    "name": "rgxProtocol",
    "value": "/^(?:.)+:\\/\\//",
    "string": "rgxProtocol"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Mongoose"
     ],
     "name": "base",
     "description": "a mongoose instance"
    },
    {
     "type": "inherits",
     "string": "NodeJS EventEmitter http://nodejs.org/api/events.html#events_class_events_eventemitter"
    },
    {
     "type": "event",
     "string": "`connecting`: Emitted when `connection.{open,openSet}()` is executed on this connection."
    },
    {
     "type": "event",
     "string": "`connected`: Emitted when this connection successfully connects to the db. May be emitted _multiple_ times in `reconnected` scenarios."
    },
    {
     "type": "event",
     "string": "`open`: Emitted after we `connected` and `onOpen` is executed on all of this connections models."
    },
    {
     "type": "event",
     "string": "`disconnecting`: Emitted when `connection.close()` was executed."
    },
    {
     "type": "event",
     "string": "`disconnected`: Emitted after getting disconnected from the db."
    },
    {
     "type": "event",
     "string": "`close`: Emitted after we `disconnected` and `onClose` executed on all of this connections models."
    },
    {
     "type": "event",
     "string": "`reconnected`: Emitted after we `connected` and subsequently `disconnected`, followed by successfully another successfull connection."
    },
    {
     "type": "event",
     "string": "`error`: Emitted when an error occurs on this connection."
    },
    {
     "type": "event",
     "string": "`fullsetup`: Emitted in a replica-set scenario, when all nodes specified in the connection string are connected."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Connection constructor</p>\n\n<p>For practical reasons, a Connection equals a Db.</p>",
    "summary": "<p>Connection constructor</p>",
    "body": "<p>For practical reasons, a Connection equals a Db.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Connection (base) {\n  this.base = base;\n  this.collections = {};\n  this.models = {};\n  this.replica = false;\n  this.hosts = null;\n  this.host = null;\n  this.port = null;\n  this.user = null;\n  this.pass = null;\n  this.name = null;\n  this.options = null;\n  this.otherDbs = [];\n  this._readyState = STATES.disconnected;\n  this._closeCalled = false;\n  this._hasOpened = false;\n};",
   "ctx": {
    "type": "function",
    "name": "Connection",
    "string": "Connection()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherit from EventEmitter</p>",
    "summary": "<p>Inherit from EventEmitter</p>",
    "body": ""
   },
   "ignore": true,
   "code": "Connection.prototype.__proto__ = EventEmitter.prototype;",
   "ctx": {
    "type": "property",
    "constructor": "Connection",
    "cons": "Connection",
    "name": "__proto__",
    "value": "EventEmitter.prototype",
    "string": "Connection.prototype.__proto__"
   }
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "readyState"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Connection ready state</p>\n\n<ul>\n<li>0 = disconnected</li>\n<li>1 = connected</li>\n<li>2 = connecting</li>\n<li>3 = disconnecting</li>\n</ul>\n\n<p>Each state change emits its associated event name.</p>\n\n<h4>Example</h4>\n\n<pre><code>conn.on('connected', callback);\nconn.on('disconnected', callback);\n</code></pre>",
    "summary": "<p>Connection ready state</p>",
    "body": "<ul>\n<li>0 = disconnected</li>\n<li>1 = connected</li>\n<li>2 = connecting</li>\n<li>3 = disconnecting</li>\n</ul>\n\n<p>Each state change emits its associated event name.</p>\n\n<h4>Example</h4>\n\n<pre><code>conn.on('connected', callback);\nconn.on('disconnected', callback);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Object.defineProperty(Connection.prototype, 'readyState', {\n    get: function(){ return this._readyState; }\n  , set: function (val) {\n      if (!(val in STATES)) {\n        throw new Error('Invalid connection state: ' + val);\n      }\n\n      if (this._readyState !== val) {\n        this._readyState = val;\n        // loop over the otherDbs on this connection and change their state\n        for (var i=0; i < this.otherDbs.length; i++) {\n          this.otherDbs[i].readyState = val;\n        }\n\n        if (STATES.connected === val)\n          this._hasOpened = true;\n\n        this.emit(STATES[val]);\n      }\n    }\n});"
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "collections"
    }
   ],
   "description": {
    "full": "<p>A hash of the collections associated with this connection</p>",
    "summary": "<p>A hash of the collections associated with this connection</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Connection.prototype.collections;"
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "db"
    }
   ],
   "description": {
    "full": "<p>The mongodb.Db instance, set when the connection is opened</p>",
    "summary": "<p>The mongodb.Db instance, set when the connection is opened</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Connection.prototype.db;"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "connection_string",
     "description": "mongodb://uri or the host to which you are connecting"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[database]",
     "description": "database name"
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "[port]",
     "description": "database port"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "options"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "see",
     "title": "node-mongodb-native",
     "url": "https://github.com/mongodb/node-mongodb-native",
     "visibility": "https://github.com/mongodb/node-mongodb-native"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://mongodb.github.com/node-mongodb-native/api-generated/db.html#authenticate",
     "visibility": "http://mongodb.github.com/node-mongodb-native/api-generated/db.html#authenticate"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Opens the connection to MongoDB.</p>\n\n<p><code>options</code> is a hash with the following possible properties:</p>\n\n<pre><code>db      - passed to the connection db instance\nserver  - passed to the connection server instance(s)\nreplset - passed to the connection ReplSet instance\nuser    - username for authentication\npass    - password for authentication\nauth    - options for authentication (see <a href='http://mongodb.github.com/node-mongodb-native/api-generated/db.html#authenticate'>http://mongodb.github.com/node-mongodb-native/api-generated/db.html#authenticate</a>)\n</code></pre>\n\n<h4>Notes:</h4>\n\n<p>Mongoose forces the db option <code>forceServerObjectId</code> false and cannot be overridden.<br />Mongoose defaults the server <code>auto_reconnect</code> options to true which can be overridden.<br />See the node-mongodb-native driver instance for options that it understands.</p>\n\n<p><em>Options passed take precedence over options included in connection strings.</em></p>",
    "summary": "<p>Opens the connection to MongoDB.</p>",
    "body": "<p><code>options</code> is a hash with the following possible properties:</p>\n\n<pre><code>db      - passed to the connection db instance\nserver  - passed to the connection server instance(s)\nreplset - passed to the connection ReplSet instance\nuser    - username for authentication\npass    - password for authentication\nauth    - options for authentication (see <a href='http://mongodb.github.com/node-mongodb-native/api-generated/db.html#authenticate'>http://mongodb.github.com/node-mongodb-native/api-generated/db.html#authenticate</a>)\n</code></pre>\n\n<h4>Notes:</h4>\n\n<p>Mongoose forces the db option <code>forceServerObjectId</code> false and cannot be overridden.<br />Mongoose defaults the server <code>auto_reconnect</code> options to true which can be overridden.<br />See the node-mongodb-native driver instance for options that it understands.</p>\n\n<p><em>Options passed take precedence over options included in connection strings.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Connection.prototype.open = function (host, database, port, options, callback) {\n  var self = this\n    , parsed\n    , uri;\n\n  if ('string' === typeof database) {\n    switch (arguments.length) {\n      case 2:\n        port = 27017;\n      case 3:\n        switch (typeof port) {\n          case 'function':\n            callback = port, port = 27017;\n            break;\n          case 'object':\n            options = port, port = 27017;\n            break;\n        }\n        break;\n      case 4:\n        if ('function' === typeof options)\n          callback = options, options = {};\n    }\n  } else {\n    switch (typeof database) {\n      case 'function':\n        callback = database, database = undefined;\n        break;\n      case 'object':\n        options = database;\n        database = undefined;\n        callback = port;\n        break;\n    }\n\n    if (!rgxProtocol.test(host)) {\n      host = 'mongodb://' + host;\n    }\n\n    try {\n      parsed = muri(host);\n    } catch (err) {\n      this.error(err, callback);\n      return this;\n    }\n\n    database = parsed.db;\n    host = parsed.hosts[0].host || parsed.hosts[0].ipc;\n    port = parsed.hosts[0].port || 27017;\n  }\n\n  this.options = this.parseOptions(options, parsed && parsed.options);\n\n  // make sure we can open\n  if (STATES.disconnected !== this.readyState) {\n    var err = new Error('Trying to open unclosed connection.');\n    err.state = this.readyState;\n    this.error(err, callback);\n    return this;\n  }\n\n  if (!host) {\n    this.error(new Error('Missing hostname.'), callback);\n    return this;\n  }\n\n  if (!database) {\n    this.error(new Error('Missing database name.'), callback);\n    return this;\n  }\n\n  // authentication\n  if (options && options.user && options.pass) {\n    this.user = options.user;\n    this.pass = options.pass;\n\n  } else if (parsed && parsed.auth) {\n    this.user = parsed.auth.user;\n    this.pass = parsed.auth.pass;\n\n  // Check hostname for user/pass\n  } else if (/@/.test(host) && /:/.test(host.split('@')[0])) {\n    host = host.split('@');\n    var auth = host.shift().split(':');\n    host = host.pop();\n    this.user = auth[0];\n    this.pass = auth[1];\n\n  } else {\n    this.user = this.pass = undefined;\n  }\n\n  this.name = database;\n  this.host = host;\n  this.port = port;\n\n  this._open(callback);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Connection",
    "cons": "Connection",
    "name": "open",
    "string": "Connection.prototype.open()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "uris",
     "description": "comma-separated mongodb:// `URI`s"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[database]",
     "description": "database name if not included in `uris`"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "passed to the internal driver"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "see",
     "title": "node-mongodb-native",
     "url": "https://github.com/mongodb/node-mongodb-native",
     "visibility": "https://github.com/mongodb/node-mongodb-native"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://mongodb.github.com/node-mongodb-native/api-generated/db.html#authenticate",
     "visibility": "http://mongodb.github.com/node-mongodb-native/api-generated/db.html#authenticate"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Opens the connection to a replica set.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var db = mongoose.createConnection();\ndb.openSet(\"mongodb://user:pwd@localhost:27020/testing,mongodb://example.com:27020,mongodb://localhost:27019\");\n</code></pre>\n\n<p>The database name and/or auth need only be included in one URI.<br />The <code>options</code> is a hash which is passed to the internal driver connection object.</p>\n\n<p>Valid <code>options</code></p>\n\n<pre><code>db      - passed to the connection db instance\nserver  - passed to the connection server instance(s)\nreplset - passed to the connection ReplSetServer instance\nuser    - username for authentication\npass    - password for authentication\nauth    - options for authentication (see <a href='http://mongodb.github.com/node-mongodb-native/api-generated/db.html#authenticate'>http://mongodb.github.com/node-mongodb-native/api-generated/db.html#authenticate</a>)\nmongos  - Boolean - if true, enables High Availability support for mongos\n</code></pre>\n\n<p><em>Options passed take precedence over options included in connection strings.</em></p>\n\n<h4>Notes:</h4>\n\n<p><em>If connecting to multiple mongos servers, set the <code>mongos</code> option to true.</em></p>\n\n<pre><code>conn.open('mongodb://mongosA:27501,mongosB:27501', { mongos: true }, cb);\n</code></pre>\n\n<p>Mongoose forces the db option <code>forceServerObjectId</code> false and cannot be overridden.<br />Mongoose defaults the server <code>auto_reconnect</code> options to true which can be overridden.<br />See the node-mongodb-native driver instance for options that it understands.</p>\n\n<p><em>Options passed take precedence over options included in connection strings.</em></p>",
    "summary": "<p>Opens the connection to a replica set.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var db = mongoose.createConnection();\ndb.openSet(\"mongodb://user:pwd@localhost:27020/testing,mongodb://example.com:27020,mongodb://localhost:27019\");\n</code></pre>\n\n<p>The database name and/or auth need only be included in one URI.<br />The <code>options</code> is a hash which is passed to the internal driver connection object.</p>\n\n<p>Valid <code>options</code></p>\n\n<pre><code>db      - passed to the connection db instance\nserver  - passed to the connection server instance(s)\nreplset - passed to the connection ReplSetServer instance\nuser    - username for authentication\npass    - password for authentication\nauth    - options for authentication (see <a href='http://mongodb.github.com/node-mongodb-native/api-generated/db.html#authenticate'>http://mongodb.github.com/node-mongodb-native/api-generated/db.html#authenticate</a>)\nmongos  - Boolean - if true, enables High Availability support for mongos\n</code></pre>\n\n<p><em>Options passed take precedence over options included in connection strings.</em></p>\n\n<h4>Notes:</h4>\n\n<p><em>If connecting to multiple mongos servers, set the <code>mongos</code> option to true.</em></p>\n\n<pre><code>conn.open('mongodb://mongosA:27501,mongosB:27501', { mongos: true }, cb);\n</code></pre>\n\n<p>Mongoose forces the db option <code>forceServerObjectId</code> false and cannot be overridden.<br />Mongoose defaults the server <code>auto_reconnect</code> options to true which can be overridden.<br />See the node-mongodb-native driver instance for options that it understands.</p>\n\n<p><em>Options passed take precedence over options included in connection strings.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Connection.prototype.openSet = function (uris, database, options, callback) {\n  if (!rgxProtocol.test(uris)) {\n    uris = 'mongodb://' + uris;\n  }\n\n  var self = this;\n\n  switch (arguments.length) {\n    case 3:\n      switch (typeof database) {\n        case 'string':\n          this.name = database;\n          break;\n        case 'object':\n          callback = options;\n          options = database;\n          database = null;\n          break;\n      }\n\n      if ('function' === typeof options) {\n        callback = options;\n        options = {};\n      }\n      break;\n    case 2:\n      switch (typeof database) {\n        case 'string':\n          this.name = database;\n          break;\n        case 'function':\n          callback = database, database = null;\n          break;\n        case 'object':\n          options = database, database = null;\n          break;\n      }\n  }\n\n  var parsed;\n  try {\n    parsed = muri(uris);\n  } catch (err) {\n    this.error(err, callback);\n    return this;\n  }\n\n  if (!this.name) {\n    this.name = parsed.db;\n  }\n\n  this.hosts = parsed.hosts;\n  this.options = this.parseOptions(options, parsed && parsed.options);\n  this.replica = true;\n\n  if (!this.name) {\n    this.error(new Error('No database name provided for replica set'), callback);\n    return this;\n  }\n\n  // authentication\n  if (options && options.user && options.pass) {\n    this.user = options.user;\n    this.pass = options.pass;\n\n  } else if (parsed && parsed.auth) {\n    this.user = parsed.auth.user;\n    this.pass = parsed.auth.pass;\n\n  } else {\n    this.user = this.pass = undefined;\n  }\n\n  this._open(callback);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Connection",
    "cons": "Connection",
    "name": "openSet",
    "string": "Connection.prototype.openSet()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Error"
     ],
     "name": "err",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "optional"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>error</p>\n\n<p>Graceful error handling, passes error to callback<br />if available, else emits error on the connection.</p>",
    "summary": "<p>error</p>",
    "body": "<p>Graceful error handling, passes error to callback<br />if available, else emits error on the connection.</p>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Connection.prototype.error = function (err, callback) {\n  if (callback) return callback(err);\n  this.emit('error', err);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Connection",
    "cons": "Connection",
    "name": "error",
    "string": "Connection.prototype.error()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Handles opening the connection with the appropriate method based on connection type.</p>",
    "summary": "<p>Handles opening the connection with the appropriate method based on connection type.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Connection.prototype._open = function (callback) {\n  this.readyState = STATES.connecting;\n  this._closeCalled = false;\n\n  var self = this;\n\n  var method = this.replica\n    ? 'doOpenSet'\n    : 'doOpen';\n\n  // open connection\n  this[method](function (err) {\n    if (err) {\n      self.readyState = STATES.disconnected;\n      if (self._hasOpened) {\n        if (callback) callback(err);\n      } else {\n        self.error(err, callback);\n      }\n      return;\n    }\n\n    self.onOpen(callback);\n  });\n}",
   "ctx": {
    "type": "method",
    "constructor": "Connection",
    "cons": "Connection",
    "name": "_open",
    "string": "Connection.prototype._open()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Called when the connection is opened</p>",
    "summary": "<p>Called when the connection is opened</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Connection.prototype.onOpen = function (callback) {\n  var self = this;\n\n  function open (err) {\n    if (err) {\n      self.readyState = STATES.disconnected;\n      if (self._hasOpened) {\n        if (callback) callback(err);\n      } else {\n        self.error(err, callback);\n      }\n      return;\n    }\n\n    self.readyState = STATES.connected;\n\n    // avoid having the collection subscribe to our event emitter\n    // to prevent 0.3 warning\n    for (var i in self.collections)\n      self.collections[i].onOpen();\n\n    callback && callback();\n    self.emit('open');\n  };\n\n  // re-authenticate\n  if (self.user && self.pass) {\n    self.db.authenticate(self.user, self.pass, self.options.auth, open);\n  }\n  else\n    open();\n};",
   "ctx": {
    "type": "method",
    "constructor": "Connection",
    "cons": "Connection",
    "name": "onOpen",
    "string": "Connection.prototype.onOpen()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "optional"
    },
    {
     "type": "return",
     "types": [
      "Connection"
     ],
     "description": "self"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Closes the connection</p>",
    "summary": "<p>Closes the connection</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Connection.prototype.close = function (callback) {\n  var self = this;\n  this._closeCalled = true;\n\n  switch (this.readyState){\n    case 0: // disconnected\n      callback && callback();\n      break;\n\n    case 1: // connected\n      this.readyState = STATES.disconnecting;\n      this.doClose(function(err){\n        if (err){\n          self.error(err, callback);\n        } else {\n          self.onClose();\n          callback && callback();\n        }\n      });\n      break;\n\n    case 2: // connecting\n      this.once('open', function(){\n        self.close(callback);\n      });\n      break;\n\n    case 3: // disconnecting\n      if (!callback) break;\n      this.once('close', function () {\n        callback();\n      });\n      break;\n  }\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Connection",
    "cons": "Connection",
    "name": "close",
    "string": "Connection.prototype.close()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Called when the connection closes</p>",
    "summary": "<p>Called when the connection closes</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Connection.prototype.onClose = function () {\n  this.readyState = STATES.disconnected;\n\n  // avoid having the collection subscribe to our event emitter\n  // to prevent 0.3 warning\n  for (var i in this.collections)\n    this.collections[i].onClose();\n\n  this.emit('close');\n};",
   "ctx": {
    "type": "method",
    "constructor": "Connection",
    "cons": "Connection",
    "name": "onClose",
    "string": "Connection.prototype.onClose()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": "of the collection"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "optional collection options"
    },
    {
     "type": "return",
     "types": [
      "Collection"
     ],
     "description": "collection instance"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieves a collection, creating it if not cached.</p>\n\n<p>Not typically needed by applications. Just talk to your collection through your model.</p>",
    "summary": "<p>Retrieves a collection, creating it if not cached.</p>",
    "body": "<p>Not typically needed by applications. Just talk to your collection through your model.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Connection.prototype.collection = function (name, options) {\n  if (!(name in this.collections))\n    this.collections[name] = new Collection(name, this, options);\n  return this.collections[name];\n};",
   "ctx": {
    "type": "method",
    "constructor": "Connection",
    "cons": "Connection",
    "name": "collection",
    "string": "Connection.prototype.collection()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": "the model name"
    },
    {
     "type": "param",
     "types": [
      "Schema"
     ],
     "name": "[schema]",
     "description": "a schema. necessary when defining a model"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[collection]",
     "description": "name of mongodb collection (optional) if not given it will be induced from model name"
    },
    {
     "type": "see",
     "local": "Mongoose#model #index_Mongoose-model",
     "visibility": "Mongoose#model"
    },
    {
     "type": "return",
     "types": [
      "Model"
     ],
     "description": "The compiled model"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Defines or retrieves a model.</p>\n\n<pre><code>var mongoose = require('mongoose');\nvar db = mongoose.createConnection(..);\ndb.model('Venue', new Schema(..));\nvar Ticket = db.model('Ticket', new Schema(..));\nvar Venue = db.model('Venue');\n</code></pre>\n\n<p><em>When no <code>collection</code> argument is passed, Mongoose produces a collection name by passing the model <code>name</code> to the <a href=\"#utils_exports.toCollectionName\">utils.toCollectionName</a> method. This method pluralizes the name. If you don't like this behavior, either pass a collection name or set your schemas collection name option.</em></p>\n\n<h4>Example:</h4>\n\n<pre><code>var schema = new Schema({ name: String }, { collection: 'actor' });\n\n// or\n\nschema.set('collection', 'actor');\n\n// or\n\nvar collectionName = 'actor'\nvar M = conn.model('Actor', schema, collectionName)\n</code></pre>",
    "summary": "<p>Defines or retrieves a model.</p>",
    "body": "<pre><code>var mongoose = require('mongoose');\nvar db = mongoose.createConnection(..);\ndb.model('Venue', new Schema(..));\nvar Ticket = db.model('Ticket', new Schema(..));\nvar Venue = db.model('Venue');\n</code></pre>\n\n<p><em>When no <code>collection</code> argument is passed, Mongoose produces a collection name by passing the model <code>name</code> to the <a href=\"#utils_exports.toCollectionName\">utils.toCollectionName</a> method. This method pluralizes the name. If you don't like this behavior, either pass a collection name or set your schemas collection name option.</em></p>\n\n<h4>Example:</h4>\n\n<pre><code>var schema = new Schema({ name: String }, { collection: 'actor' });\n\n// or\n\nschema.set('collection', 'actor');\n\n// or\n\nvar collectionName = 'actor'\nvar M = conn.model('Actor', schema, collectionName)\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Connection.prototype.model = function (name, schema, collection) {\n  // collection name discovery\n  if ('string' == typeof schema) {\n    collection = schema;\n    schema = false;\n  }\n\n  if (utils.isObject(schema) && !(schema instanceof Schema)) {\n    schema = new Schema(schema);\n  }\n\n  if (this.models[name] && !collection) {\n    // model exists but we are not subclassing with custom collection\n    if (schema instanceof Schema && schema != this.models[name].schema) {\n      throw new MongooseError.OverwriteModelError(name);\n    }\n    return this.models[name];\n  }\n\n  var opts = { cache: false, connection: this }\n  var model;\n\n  if (schema instanceof Schema) {\n    // compile a model\n    model = this.base.model(name, schema, collection, opts)\n\n    // only the first model with this name is cached to allow\n    // for one-offs with custom collection names etc.\n    if (!this.models[name]) {\n      this.models[name] = model;\n    }\n\n    model.init();\n    return model;\n  }\n\n  if (this.models[name] && collection) {\n    // subclassing current model with alternate collection\n    model = this.models[name];\n    schema = model.prototype.schema;\n    var sub = model.__subclass(this, schema, collection);\n    // do not cache the sub model\n    return sub;\n  }\n\n  // lookup model in mongoose module\n  model = this.base.models[name];\n\n  if (!model) {\n    throw new MongooseError.MissingSchemaError(name);\n  }\n\n  if (this == model.prototype.db\n      && (!collection || collection == model.collection.name)) {\n    // model already uses this connection.\n\n    // only the first model with this name is cached to allow\n    // for one-offs with custom collection names etc.\n    if (!this.models[name]) {\n      this.models[name] = model;\n    }\n\n    return model;\n  }\n\n  return this.models[name] = model.__subclass(this, schema, collection);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Connection",
    "cons": "Connection",
    "name": "model",
    "string": "Connection.prototype.model()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Returns an array of model names created on this connection.</p>",
    "summary": "<p>Returns an array of model names created on this connection.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Connection.prototype.modelNames = function () {\n  return Object.keys(this.models);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Connection",
    "cons": "Connection",
    "name": "modelNames",
    "string": "Connection.prototype.modelNames()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number",
      "String"
     ],
     "name": "level",
     "description": "either off (0), slow (1), or all (2)"
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "[ms]",
     "description": "the threshold in milliseconds above which queries will be logged when in `slow` mode. defaults to 100."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Set profiling level.</p>",
    "summary": "<p>Set profiling level.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Connection.prototype.setProfiling = function (level, ms, callback) {\n  if (STATES.connected !== this.readyState) {\n    return this.on('open', this.setProfiling.bind(this, level, ms, callback));\n  }\n\n  if (!callback) callback = ms, ms = 100;\n\n  var cmd = {};\n\n  switch (level) {\n    case 0:\n    case 'off':\n      cmd.profile = 0;\n      break;\n    case 1:\n    case 'slow':\n      cmd.profile = 1;\n      if ('number' !== typeof ms) {\n        ms = parseInt(ms, 10);\n        if (isNaN(ms)) ms = 100;\n      }\n      cmd.slowms = ms;\n      break;\n    case 2:\n    case 'all':\n      cmd.profile = 2;\n      break;\n    default:\n      return callback(new Error('Invalid profiling level: '+ level));\n  }\n\n  this.db.executeDbCommand(cmd, function (err, resp) {\n    if (err) return callback(err);\n\n    var doc = resp.documents[0];\n\n    err = 1 === doc.ok\n      ? null\n      : new Error('Could not set profiling level to: '+ level)\n\n    callback(err, doc);\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Connection",
    "cons": "Connection",
    "name": "setProfiling",
    "string": "Connection.prototype.setProfiling()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Noop.</p>",
    "summary": "<p>Noop.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function noop () {}",
   "ctx": {
    "type": "function",
    "name": "noop",
    "string": "noop()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "Connection.STATES = STATES;\nmodule.exports = Connection;",
   "ctx": {
    "type": "property",
    "receiver": "Connection",
    "name": "STATES",
    "value": "STATES",
    "string": "Connection.STATES"
   }
  }
 ],
 "connectionstate": [
  {
   "tags": [],
   "description": {
    "full": "<p>Connection states</p>",
    "summary": "<p>Connection states</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var STATES = module.exports = exports = Object.create(null);\n\nvar disconnected = 'disconnected';\nvar connected = 'connected';\nvar connecting = 'connecting';\nvar disconnecting = 'disconnecting';\nvar uninitialized = 'uninitialized';\n\nSTATES[0] = disconnected;\nSTATES[1] = connected;\nSTATES[2] = connecting;\nSTATES[3] = disconnecting;\nSTATES[99] = uninitialized;\n\nSTATES[disconnected] = 0;\nSTATES[connected] = 1;\nSTATES[connecting] = 2;\nSTATES[disconnecting] = 3;\nSTATES[uninitialized] = 99;",
   "ctx": {
    "type": "declaration",
    "name": "STATES",
    "value": "module.exports = exports = Object.create(null)",
    "string": "STATES"
   }
  }
 ],
 "document": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var EventEmitter = require('events').EventEmitter\n  , setMaxListeners = EventEmitter.prototype.setMaxListeners\n  , MongooseError = require('./error')\n  , MixedSchema = require('./schema/mixed')\n  , Schema = require('./schema')\n  , ObjectId = require('./types/objectid')\n  , ValidatorError = require('./schematype').ValidatorError\n  , utils = require('./utils')\n  , clone = utils.clone\n  , isMongooseObject = utils.isMongooseObject\n  , inspect = require('util').inspect\n  , ValidationError = MongooseError.ValidationError\n  , InternalCache = require('./internal')\n  , deepEqual = utils.deepEqual\n  , hooks = require('hooks')\n  , Promise = require('./promise')\n  , DocumentArray\n  , MongooseArray\n  , Embedded",
   "ctx": {
    "type": "declaration",
    "name": "EventEmitter",
    "value": "require('events').EventEmitter",
    "string": "EventEmitter"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": "the values to set"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[fields]",
     "description": "optional object containing the fields which were selected in the query returning this document and any populated paths data"
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "[skipId]",
     "description": "bool, should we auto create an ObjectId _id"
    },
    {
     "type": "inherits",
     "string": "NodeJS EventEmitter http://nodejs.org/api/events.html#events_class_events_eventemitter"
    },
    {
     "type": "event",
     "string": "`init`: Emitted on a document after it has was retreived from the db and fully hydrated by Mongoose."
    },
    {
     "type": "event",
     "string": "`save`: Emitted when the document is successfully saved"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Document constructor.</p>",
    "summary": "<p>Document constructor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function Document (obj, fields, skipId) {\n  this.$__ = new InternalCache;\n  this.isNew = true;\n  this.errors = undefined;\n\n  var schema = this.schema;\n\n  if ('boolean' === typeof fields) {\n    this.$__.strictMode = fields;\n    fields = undefined;\n  } else {\n    this.$__.strictMode = schema.options && schema.options.strict;\n    this.$__.selected = fields;\n  }\n\n  var required = schema.requiredPaths();\n  for (var i = 0; i < required.length; ++i) {\n    this.$__.activePaths.require(required[i]);\n  }\n\n  setMaxListeners.call(this, 0);\n  this._doc = this.$__buildDoc(obj, fields, skipId);\n\n  if (obj) {\n    this.set(obj, undefined, true);\n  }\n\n  this.$__registerHooksFromSchema();\n}",
   "ctx": {
    "type": "function",
    "name": "Document",
    "string": "Document()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherit from EventEmitter.</p>",
    "summary": "<p>Inherit from EventEmitter.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "Document.prototype = Object.create( EventEmitter.prototype );\nDocument.prototype.constructor = Document;",
   "ctx": {
    "type": "property",
    "receiver": "Document",
    "name": "prototype",
    "value": "Object.create( EventEmitter.prototype )",
    "string": "Document.prototype"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "property",
     "string": "schema"
    }
   ],
   "description": {
    "full": "<p>The documents schema.</p>",
    "summary": "<p>The documents schema.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.schema;"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "property",
     "string": "isNew"
    }
   ],
   "description": {
    "full": "<p>Boolean flag specifying if the document is new.</p>",
    "summary": "<p>Boolean flag specifying if the document is new.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.isNew;"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "see",
     "local": "Schema options /docs/guide.html#options",
     "visibility": "Schema"
    },
    {
     "type": "property",
     "string": "id"
    }
   ],
   "description": {
    "full": "<p>The string version of this documents _id.</p>\n\n<h4>Note:</h4>\n\n<p>This getter exists on all documents by default. The getter can be disabled by setting the <code>id</code> <a href=\"/docs/guide.html#id\">option</a> of its <code>Schema</code> to false at construction time.</p>\n\n<pre><code>new Schema({ name: String }, { id: false });\n</code></pre>",
    "summary": "<p>The string version of this documents _id.</p>",
    "body": "<h4>Note:</h4>\n\n<p>This getter exists on all documents by default. The getter can be disabled by setting the <code>id</code> <a href=\"/docs/guide.html#id\">option</a> of its <code>Schema</code> to false at construction time.</p>\n\n<pre><code>new Schema({ name: String }, { id: false });\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.id;"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "property",
     "string": "errors"
    }
   ],
   "description": {
    "full": "<p>Hash containing current validation errors.</p>",
    "summary": "<p>Hash containing current validation errors.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.errors;"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[fields]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "[skipId]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__buildDoc"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Builds the default doc structure</p>",
    "summary": "<p>Builds the default doc structure</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__buildDoc = function (obj, fields, skipId) {\n  var doc = {}\n    , self = this\n    , exclude\n    , keys\n    , key\n    , ki\n\n  // determine if this doc is a result of a query with\n  // excluded fields\n  if (fields && 'Object' === utils.getFunctionName(fields.constructor)) {\n    keys = Object.keys(fields);\n    ki = keys.length;\n\n    while (ki--) {\n      if ('_id' !== keys[ki]) {\n        exclude = 0 === fields[keys[ki]];\n        break;\n      }\n    }\n  }\n\n  var paths = Object.keys(this.schema.paths)\n    , plen = paths.length\n    , ii = 0\n\n  for (; ii < plen; ++ii) {\n    var p = paths[ii];\n\n    if ('_id' == p) {\n      if (skipId) continue;\n      if (obj && '_id' in obj) continue;\n    }\n\n    var type = this.schema.paths[p]\n      , path = p.split('.')\n      , len = path.length\n      , last = len-1\n      , curPath = ''\n      , doc_ = doc\n      , i = 0\n\n    for (; i < len; ++i) {\n      var piece = path[i]\n        , def\n\n      // support excluding intermediary levels\n      if (exclude) {\n        curPath += piece;\n        if (curPath in fields) break;\n        curPath += '.';\n      }\n\n      if (i === last) {\n        if (fields) {\n          if (exclude) {\n            // apply defaults to all non-excluded fields\n            if (p in fields) continue;\n\n            def = type.getDefault(self, true);\n            if ('undefined' !== typeof def) {\n              doc_[piece] = def;\n              self.$__.activePaths.default(p);\n            }\n\n          } else if (p in fields) {\n            // selected field\n            def = type.getDefault(self, true);\n            if ('undefined' !== typeof def) {\n              doc_[piece] = def;\n              self.$__.activePaths.default(p);\n            }\n          }\n        } else {\n          def = type.getDefault(self, true);\n          if ('undefined' !== typeof def) {\n            doc_[piece] = def;\n            self.$__.activePaths.default(p);\n          }\n        }\n      } else {\n        doc_ = doc_[piece] || (doc_[piece] = {});\n      }\n    }\n  }\n\n  return doc;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__buildDoc",
    "string": "Document.prototype.$__buildDoc()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "document returned by mongo"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "fn",
     "description": "callback"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Initializes the document without setters or marking anything modified.</p>\n\n<p>Called internally after a document is returned from mongodb.</p>",
    "summary": "<p>Initializes the document without setters or marking anything modified.</p>",
    "body": "<p>Called internally after a document is returned from mongodb.</p>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.init = function (doc, opts, fn) {\n  // do not prefix this method with $__ since its\n  // used by public hooks\n\n  if ('function' == typeof opts) {\n    fn = opts;\n    opts = null;\n  }\n\n  this.isNew = false;\n\n  // handle docs with populated paths\n  if (doc._id && opts && opts.populated && opts.populated.length) {\n    var id = String(doc._id);\n    for (var i = 0; i < opts.populated.length; ++i) {\n      var item = opts.populated[i];\n      this.populated(item.path, item._docs[id], item);\n    }\n  }\n\n  init(this, doc, this._doc);\n  this.$__storeShard();\n\n  this.emit('init', this);\n  if (fn) fn(null);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "init",
    "string": "Document.prototype.init()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "self",
     "description": "document instance"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": "raw mongodb doc"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "object we are initializing"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Init helper.</p>",
    "summary": "<p>Init helper.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "function init (self, obj, doc, prefix) {\n  prefix = prefix || '';\n\n  var keys = Object.keys(obj)\n    , len = keys.length\n    , schema\n    , path\n    , i;\n\n  while (len--) {\n    i = keys[len];\n    path = prefix + i;\n    schema = self.schema.path(path);\n\n    if (!schema && utils.isObject(obj[i]) &&\n        (!obj[i].constructor || 'Object' == utils.getFunctionName(obj[i].constructor))) {\n      // assume nested object\n      if (!doc[i]) doc[i] = {};\n      init(self, obj[i], doc[i], path + '.');\n    } else {\n      if (obj[i] === null) {\n        doc[i] = null;\n      } else if (obj[i] !== undefined) {\n        if (schema) {\n          self.$__try(function(){\n            doc[i] = schema.cast(obj[i], self, true);\n          });\n        } else {\n          doc[i] = obj[i];\n        }\n      }\n      // mark as hydrated\n      self.$__.activePaths.init(path);\n    }\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "init",
    "string": "init()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__storeShard"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Stores the current values of the shard keys.</p>\n\n<h4>Note:</h4>\n\n<p><em>Shard key values do not / are not allowed to change.</em></p>",
    "summary": "<p>Stores the current values of the shard keys.</p>",
    "body": "<h4>Note:</h4>\n\n<p><em>Shard key values do not / are not allowed to change.</em></p>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__storeShard = function () {\n  // backwards compat\n  var key = this.schema.options.shardKey || this.schema.options.shardkey;\n  if (!(key && 'Object' == utils.getFunctionName(key.constructor))) return;\n\n  var orig = this.$__.shardval = {}\n    , paths = Object.keys(key)\n    , len = paths.length\n    , val\n\n  for (var i = 0; i < len; ++i) {\n    val = this.getValue(paths[i]);\n    if (isMongooseObject(val)) {\n      orig[paths[i]] = val.toObject({ depopulate: true })\n    } else if (null != val &&\n        val.valueOf &&\n        // Explicitly don't take value of dates\n        (!val.constructor || utils.getFunctionName(val.constructor) !== 'Date')) {\n      orig[paths[i]] = val.valueOf();\n    } else {\n      orig[paths[i]] = val;\n    }\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__storeShard",
    "string": "Document.prototype.$__storeShard()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Set up middleware support</p>",
    "summary": "<p>Set up middleware support</p>",
    "body": ""
   },
   "ignore": true,
   "code": "for (var k in hooks) {\n  Document.prototype[k] = Document[k] = hooks[k];\n}"
  },
  {
   "tags": [
    {
     "type": "see",
     "local": "Model.update #model_Model.update",
     "visibility": "Model.update"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sends an update command with this document <code>_id</code> as the query selector.</p>\n\n<h4>Example:</h4>\n\n<pre><code>weirdCar.update({$inc: {wheels:1}}, { w: 1 }, callback);\n</code></pre>\n\n<h4>Valid options:</h4>\n\n<ul>\n<li>same as in <a href=\"#model_Model.update\">Model.update</a></li>\n</ul>",
    "summary": "<p>Sends an update command with this document <code>_id</code> as the query selector.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>weirdCar.update({$inc: {wheels:1}}, { w: 1 }, callback);\n</code></pre>\n\n<h4>Valid options:</h4>\n\n<ul>\n<li>same as in <a href=\"#model_Model.update\">Model.update</a></li>\n</ul>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.update = function update () {\n  var args = utils.args(arguments);\n  args.unshift({_id: this._id});\n  return this.constructor.update.apply(this.constructor, args);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "update",
    "string": "Document.prototype.update()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String",
      "Object"
     ],
     "name": "path",
     "description": "path or object of key/vals to set"
    },
    {
     "type": "param",
     "types": [
      "Any"
     ],
     "name": "val",
     "description": "the value to set"
    },
    {
     "type": "param",
     "types": [
      "Schema",
      "String",
      "Number",
      "Buffer",
      "etc.."
     ],
     "name": "[type]",
     "description": "optionally specify a type for \"on-the-fly\" attributes"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "optionally specify options that modify the behavior of the set"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets the value of a path, or many paths.</p>\n\n<h4>Example:</h4>\n\n<pre><code>// path, value\ndoc.set(path, value)\n\n// object\ndoc.set({\n    path  : value\n  , path2 : {\n       path  : value\n    }\n})\n\n// only-the-fly cast to number\ndoc.set(path, value, Number)\n\n// only-the-fly cast to string\ndoc.set(path, value, String)\n\n// changing strict mode behavior\ndoc.set(path, value, { strict: false });\n</code></pre>",
    "summary": "<p>Sets the value of a path, or many paths.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>// path, value\ndoc.set(path, value)\n\n// object\ndoc.set({\n    path  : value\n  , path2 : {\n       path  : value\n    }\n})\n\n// only-the-fly cast to number\ndoc.set(path, value, Number)\n\n// only-the-fly cast to string\ndoc.set(path, value, String)\n\n// changing strict mode behavior\ndoc.set(path, value, { strict: false });\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.set = function (path, val, type, options) {\n  if (type && 'Object' == utils.getFunctionName(type.constructor)) {\n    options = type;\n    type = undefined;\n  }\n\n  var merge = options && options.merge\n    , adhoc = type && true !== type\n    , constructing = true === type\n    , adhocs\n\n  var strict = options && 'strict' in options\n    ? options.strict\n    : this.$__.strictMode;\n\n  if (adhoc) {\n    adhocs = this.$__.adhocPaths || (this.$__.adhocPaths = {});\n    adhocs[path] = Schema.interpretAsType(path, type);\n  }\n\n  if ('string' !== typeof path) {\n    // new Document({ key: val })\n\n    if (null === path || undefined === path) {\n      var _ = path;\n      path = val;\n      val = _;\n\n    } else {\n      var prefix = val\n        ? val + '.'\n        : '';\n\n      if (path instanceof Document) path = path._doc;\n\n      var keys = Object.keys(path)\n        , i = keys.length\n        , pathtype\n        , key\n\n\n      while (i--) {\n        key = keys[i];\n        pathtype = this.schema.pathType(prefix + key);\n        if (null != path[key]\n            // need to know if plain object - no Buffer, ObjectId, ref, etc\n            && utils.isObject(path[key])\n            && (!path[key].constructor || 'Object' == utils.getFunctionName(path[key].constructor))\n            && 'virtual' != pathtype\n            && !(this.$__path(prefix + key) instanceof MixedSchema)\n            && !(this.schema.paths[key] && this.schema.paths[key].options.ref)\n          ) {\n          this.set(path[key], prefix + key, constructing);\n        } else if (strict) {\n          if ('real' === pathtype || 'virtual' === pathtype) {\n            this.set(prefix + key, path[key], constructing);\n          } else if ('throw' == strict) {\n            throw new Error(\"Field `\" + key + \"` is not in schema.\");\n          }\n        } else if (undefined !== path[key]) {\n          this.set(prefix + key, path[key], constructing);\n        }\n      }\n\n      return this;\n    }\n  }\n\n  // ensure _strict is honored for obj props\n  // docschema = new Schema({ path: { nest: 'string' }})\n  // doc.set('path', obj);\n  var pathType = this.schema.pathType(path);\n  if ('nested' == pathType && val && utils.isObject(val) &&\n      (!val.constructor || 'Object' == utils.getFunctionName(val.constructor))) {\n    if (!merge) this.setValue(path, null);\n    this.set(val, path, constructing);\n    return this;\n  }\n\n  var schema;\n  var parts = path.split('.');\n\n  if ('adhocOrUndefined' == pathType && strict) {\n\n    // check for roots that are Mixed types\n    var mixed;\n\n    for (var i = 0; i < parts.length; ++i) {\n      var subpath = parts.slice(0, i+1).join('.');\n      schema = this.schema.path(subpath);\n      if (schema instanceof MixedSchema) {\n        // allow changes to sub paths of mixed types\n        mixed = true;\n        break;\n      }\n    }\n\n    if (!mixed) {\n      if ('throw' == strict) {\n        throw new Error(\"Field `\" + path + \"` is not in schema.\");\n      }\n      return this;\n    }\n\n  } else if ('virtual' == pathType) {\n    schema = this.schema.virtualpath(path);\n    schema.applySetters(val, this);\n    return this;\n  } else {\n    schema = this.$__path(path);\n  }\n\n  var pathToMark;\n\n  // When using the $set operator the path to the field must already exist.\n  // Else mongodb throws: \"LEFT_SUBFIELD only supports Object\"\n\n  if (parts.length <= 1) {\n    pathToMark = path;\n  } else {\n    for (var i = 0; i < parts.length; ++i) {\n      var subpath = parts.slice(0, i+1).join('.');\n      if (this.isDirectModified(subpath) // earlier prefixes that are already\n                                         // marked as dirty have precedence\n          || this.get(subpath) === null) {\n        pathToMark = subpath;\n        break;\n      }\n    }\n\n    if (!pathToMark) pathToMark = path;\n  }\n\n  // if this doc is being constructed we should not trigger getters\n  var priorVal = constructing\n    ? undefined\n    : this.getValue(path);\n\n  if (!schema || undefined === val) {\n    this.$__set(pathToMark, path, constructing, parts, schema, val, priorVal);\n    return this;\n  }\n\n  var self = this;\n  var shouldSet = this.$__try(function(){\n    val = schema.applySetters(val, self, false, priorVal);\n  });\n\n  if (shouldSet) {\n    this.$__set(pathToMark, path, constructing, parts, schema, val, priorVal);\n  }\n\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "set",
    "string": "Document.prototype.set()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__shouldModify"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Determine if we should mark this change as modified.</p>",
    "summary": "<p>Determine if we should mark this change as modified.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__shouldModify = function (\n    pathToMark, path, constructing, parts, schema, val, priorVal) {\n\n  if (this.isNew) return true;\n\n  if (undefined === val && !this.isSelected(path)) {\n    // when a path is not selected in a query, its initial\n    // value will be undefined.\n    return true;\n  }\n\n  if (undefined === val && path in this.$__.activePaths.states.default) {\n    // we're just unsetting the default value which was never saved\n    return false;\n  }\n\n  if (!deepEqual(val, priorVal || this.get(path))) {\n    return true;\n  }\n\n  if (!constructing &&\n      null != val &&\n      path in this.$__.activePaths.states.default &&\n      deepEqual(val, schema.getDefault(this, constructing))) {\n    // a path with a default was $unset on the server\n    // and the user is setting it to the same value again\n    return true;\n  }\n  return false;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__shouldModify",
    "string": "Document.prototype.$__shouldModify()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__set"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Handles the actual setting of the value and marking the path modified if appropriate.</p>",
    "summary": "<p>Handles the actual setting of the value and marking the path modified if appropriate.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__set = function (\n    pathToMark, path, constructing, parts, schema, val, priorVal) {\n  Embedded = Embedded || require('./types/embedded');\n\n  var shouldModify = this.$__shouldModify.apply(this, arguments);\n  var _this = this;\n\n  if (shouldModify) {\n    this.markModified(pathToMark, val);\n\n    // handle directly setting arrays (gh-1126)\n    MongooseArray || (MongooseArray = require('./types/array'));\n    if (val && val.isMongooseArray) {\n      val._registerAtomic('$set', val);\n\n      // Small hack for gh-1638: if we're overwriting the entire array, ignore\n      // paths that were modified before the array overwrite\n      this.$__.activePaths.forEach(function(modifiedPath) {\n        if (modifiedPath.indexOf(path) === 0 && modifiedPath !== path) {\n          _this.$__.activePaths.ignore(modifiedPath);\n        }\n      });\n    }\n  }\n\n  var obj = this._doc\n    , i = 0\n    , l = parts.length\n\n  for (; i < l; i++) {\n    var next = i + 1\n      , last = next === l;\n\n    if (last) {\n      obj[parts[i]] = val;\n    } else {\n      if (obj[parts[i]] && 'Object' === utils.getFunctionName(obj[parts[i]].constructor)) {\n        obj = obj[parts[i]];\n      } else if (obj[parts[i]] && obj[parts[i]] instanceof Embedded) {  \n        obj = obj[parts[i]];\n      } else if (obj[parts[i]] && Array.isArray(obj[parts[i]])) {\n        obj = obj[parts[i]];\n      } else {\n        obj = obj[parts[i]] = {};\n      }\n    }\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__set",
    "string": "Document.prototype.$__set()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Gets a raw value from a path (no getters)</p>",
    "summary": "<p>Gets a raw value from a path (no getters)</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.getValue = function (path) {\n  return utils.getValue(path, this._doc);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "getValue",
    "string": "Document.prototype.getValue()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Sets a raw value for a path (no casting, setters, transformations)</p>",
    "summary": "<p>Sets a raw value for a path (no casting, setters, transformations)</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.setValue = function (path, val) {\n  utils.setValue(path, val, this._doc);\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "setValue",
    "string": "Document.prototype.setValue()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Schema",
      "String",
      "Number",
      "Buffer",
      "etc.."
     ],
     "name": "[type]",
     "description": "optionally specify a type for on-the-fly attributes"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the value of a path.</p>\n\n<h4>Example</h4>\n\n<pre><code>// path\ndoc.get('age') // 47\n\n// dynamic casting to a string\ndoc.get('age', String) // \"47\"\n</code></pre>",
    "summary": "<p>Returns the value of a path.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>// path\ndoc.get('age') // 47\n\n// dynamic casting to a string\ndoc.get('age', String) // \"47\"\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.get = function (path, type) {\n  var adhocs;\n  if (type) {\n    adhocs = this.$__.adhocPaths || (this.$__.adhocPaths = {});\n    adhocs[path] = Schema.interpretAsType(path, type);\n  }\n\n  var schema = this.$__path(path) || this.schema.virtualpath(path)\n    , pieces = path.split('.')\n    , obj = this._doc;\n\n  for (var i = 0, l = pieces.length; i < l; i++) {\n    obj = undefined === obj || null === obj\n      ? undefined\n      : obj[pieces[i]];\n  }\n\n  if (schema) {\n    obj = schema.applyGetters(obj, this);\n  }\n\n  return obj;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "get",
    "string": "Document.prototype.get()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__path"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Returns the schematype for the given <code>path</code>.</p>",
    "summary": "<p>Returns the schematype for the given <code>path</code>.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__path = function (path) {\n  var adhocs = this.$__.adhocPaths\n    , adhocType = adhocs && adhocs[path];\n\n  if (adhocType) {\n    return adhocType;\n  } else {\n    return this.schema.path(path);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__path",
    "string": "Document.prototype.$__path()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": "the path to mark modified"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Marks the path as having pending changes to write to the db.</p>\n\n<p><em>Very helpful when using <a href=\"./schematypes.html#mixed\">Mixed</a> types.</em></p>\n\n<h4>Example:</h4>\n\n<pre><code>doc.mixed.type = 'changed';\ndoc.markModified('mixed.type');\ndoc.save() // changes to mixed.type are now persisted\n</code></pre>",
    "summary": "<p>Marks the path as having pending changes to write to the db.</p>",
    "body": "<p><em>Very helpful when using <a href=\"./schematypes.html#mixed\">Mixed</a> types.</em></p>\n\n<h4>Example:</h4>\n\n<pre><code>doc.mixed.type = 'changed';\ndoc.markModified('mixed.type');\ndoc.save() // changes to mixed.type are now persisted\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.markModified = function (path) {\n  this.$__.activePaths.modify(path);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "markModified",
    "string": "Document.prototype.markModified()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "fn",
     "description": "function to execute"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "scope",
     "description": "the scope with which to call fn"
    },
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__try"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Catches errors that occur during execution of <code>fn</code> and stores them to later be passed when <code>save()</code> is executed.</p>",
    "summary": "<p>Catches errors that occur during execution of <code>fn</code> and stores them to later be passed when <code>save()</code> is executed.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__try = function (fn, scope) {\n  var res;\n  try {\n    fn.call(scope);\n    res = true;\n  } catch (e) {\n    this.$__error(e);\n    res = false;\n  }\n  return res;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__try",
    "string": "Document.prototype.$__try()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the list of paths that have been modified.</p>",
    "summary": "<p>Returns the list of paths that have been modified.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.modifiedPaths = function () {\n  var directModifiedPaths = Object.keys(this.$__.activePaths.states.modify);\n\n  return directModifiedPaths.reduce(function (list, path) {\n    var parts = path.split('.');\n    return list.concat(parts.reduce(function (chains, part, i) {\n      return chains.concat(parts.slice(0, i).concat(part).join('.'));\n    }, []));\n  }, []);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "modifiedPaths",
    "string": "Document.prototype.modifiedPaths()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": "optional"
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns true if this document was modified, else false.</p>\n\n<p>If <code>path</code> is given, checks if a path or any full path containing <code>path</code> as part of its path chain has been modified.</p>\n\n<h4>Example</h4>\n\n<pre><code>doc.set('documents.0.title', 'changed');\ndoc.isModified()                    // true\ndoc.isModified('documents')         // true\ndoc.isModified('documents.0.title') // true\ndoc.isDirectModified('documents')   // false\n</code></pre>",
    "summary": "<p>Returns true if this document was modified, else false.</p>",
    "body": "<p>If <code>path</code> is given, checks if a path or any full path containing <code>path</code> as part of its path chain has been modified.</p>\n\n<h4>Example</h4>\n\n<pre><code>doc.set('documents.0.title', 'changed');\ndoc.isModified()                    // true\ndoc.isModified('documents')         // true\ndoc.isModified('documents.0.title') // true\ndoc.isDirectModified('documents')   // false\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.isModified = function (path) {\n  return path\n    ? !!~this.modifiedPaths().indexOf(path)\n    : this.$__.activePaths.some('modify');\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "isModified",
    "string": "Document.prototype.isModified()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns true if <code>path</code> was directly set and modified, else false.</p>\n\n<h4>Example</h4>\n\n<pre><code>doc.set('documents.0.title', 'changed');\ndoc.isDirectModified('documents.0.title') // true\ndoc.isDirectModified('documents') // false\n</code></pre>",
    "summary": "<p>Returns true if <code>path</code> was directly set and modified, else false.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>doc.set('documents.0.title', 'changed');\ndoc.isDirectModified('documents.0.title') // true\ndoc.isDirectModified('documents') // false\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.isDirectModified = function (path) {\n  return (path in this.$__.activePaths.states.modify);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "isDirectModified",
    "string": "Document.prototype.isDirectModified()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Checks if <code>path</code> was initialized.</p>",
    "summary": "<p>Checks if <code>path</code> was initialized.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.isInit = function (path) {\n  return (path in this.$__.activePaths.states.init);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "isInit",
    "string": "Document.prototype.isInit()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Checks if <code>path</code> was selected in the source query which initialized this document.</p>\n\n<h4>Example</h4>\n\n<pre><code>Thing.findOne().select('name').exec(function (err, doc) {\n   doc.isSelected('name') // true\n   doc.isSelected('age')  // false\n})\n</code></pre>",
    "summary": "<p>Checks if <code>path</code> was selected in the source query which initialized this document.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>Thing.findOne().select('name').exec(function (err, doc) {\n   doc.isSelected('name') // true\n   doc.isSelected('age')  // false\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.isSelected = function isSelected (path) {\n  if (this.$__.selected) {\n\n    if ('_id' === path) {\n      return 0 !== this.$__.selected._id;\n    }\n\n    var paths = Object.keys(this.$__.selected)\n      , i = paths.length\n      , inclusive = false\n      , cur\n\n    if (1 === i && '_id' === paths[0]) {\n      // only _id was selected.\n      return 0 === this.$__.selected._id;\n    }\n\n    while (i--) {\n      cur = paths[i];\n      if ('_id' == cur) continue;\n      inclusive = !! this.$__.selected[cur];\n      break;\n    }\n\n    if (path in this.$__.selected) {\n      return inclusive;\n    }\n\n    i = paths.length;\n    var pathDot = path + '.';\n\n    while (i--) {\n      cur = paths[i];\n      if ('_id' == cur) continue;\n\n      if (0 === cur.indexOf(pathDot)) {\n        return inclusive;\n      }\n\n      if (0 === pathDot.indexOf(cur + '.')) {\n        return inclusive;\n      }\n    }\n\n    return ! inclusive;\n  }\n\n  return true;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "isSelected",
    "string": "Document.prototype.isSelected()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "optional",
     "description": "cb called after validation completes, passing an error if one occurred"
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": "Promise"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Executes registered validation rules for this document.</p>\n\n<h4>Note:</h4>\n\n<p>This method is called <code>pre</code> save and if a validation rule is violated, <a href=\"#model_Model-save\">save</a> is aborted and the error is returned to your <code>callback</code>.</p>\n\n<h4>Example:</h4>\n\n<pre><code>doc.validate(function (err) {\n  if (err) handleError(err);\n  else // validation passed\n});\n</code></pre>",
    "summary": "<p>Executes registered validation rules for this document.</p>",
    "body": "<h4>Note:</h4>\n\n<p>This method is called <code>pre</code> save and if a validation rule is violated, <a href=\"#model_Model-save\">save</a> is aborted and the error is returned to your <code>callback</code>.</p>\n\n<h4>Example:</h4>\n\n<pre><code>doc.validate(function (err) {\n  if (err) handleError(err);\n  else // validation passed\n});\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.validate = function (cb) {\n  var self = this;\n\n  var promise = new Promise(cb);\n\n  // only validate required fields when necessary\n  var paths = Object.keys(this.$__.activePaths.states.require).filter(function (path) {\n    if (!self.isSelected(path) && !self.isModified(path)) return false;\n    return true;\n  });\n\n  paths = paths.concat(Object.keys(this.$__.activePaths.states.init));\n  paths = paths.concat(Object.keys(this.$__.activePaths.states.modify));\n  paths = paths.concat(Object.keys(this.$__.activePaths.states.default));\n\n  if (0 === paths.length) {\n    process.nextTick(function() {\n      complete();\n    });\n    return promise;\n  }\n\n  var validating = {}\n    , total = 0;\n\n  paths.forEach(validatePath);\n  return promise;\n\n  function validatePath (path) {\n    if (validating[path]) return;\n\n    validating[path] = true;\n    total++;\n\n    process.nextTick(function(){\n      var p = self.schema.path(path);\n      if (!p) return --total || complete();\n\n      var val = self.getValue(path);\n      p.doValidate(val, function (err) {\n        if (err) {\n          self.invalidate(\n              path\n            , err\n            , undefined\n            , true // embedded docs\n            );\n        }\n        --total || complete();\n      }, self);\n    });\n  }\n\n  function complete () {\n    var err = self.$__.validationError;\n    self.$__.validationError = undefined;\n    self.emit('validate', self);\n    if (err) {\n      promise.reject(err);\n    } else {\n      promise.fulfill();\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "validate",
    "string": "Document.prototype.validate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": "the field to invalidate"
    },
    {
     "type": "param",
     "types": [
      "String",
      "Error"
     ],
     "name": "errorMsg",
     "description": "the error which states the reason `path` was invalid"
    },
    {
     "type": "param",
     "types": [
      "Object",
      "String",
      "Number",
      "any"
     ],
     "name": "value",
     "description": "optional invalid value"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Marks a path as invalid, causing validation to fail.</p>\n\n<p>The <code>errorMsg</code> argument will become the message of the <code>ValidationError</code>.</p>\n\n<p>The <code>value</code> argument (if passed) will be available through the <code>ValidationError.value</code> property.</p>\n\n<pre><code>doc.invalidate('size', 'must be less than 20', 14);\n\ndoc.validate(function (err) {\n  console.log(err)\n  // prints\n  { message: 'Validation failed',\n    name: 'ValidationError',\n    errors:\n     { size:\n        { message: 'must be less than 20',\n          name: 'ValidatorError',\n          path: 'size',\n          type: 'user defined',\n          value: 14 } } }\n})\n</code></pre>",
    "summary": "<p>Marks a path as invalid, causing validation to fail.</p>",
    "body": "<p>The <code>errorMsg</code> argument will become the message of the <code>ValidationError</code>.</p>\n\n<p>The <code>value</code> argument (if passed) will be available through the <code>ValidationError.value</code> property.</p>\n\n<pre><code>doc.invalidate('size', 'must be less than 20', 14);\n\ndoc.validate(function (err) {\n  console.log(err)\n  // prints\n  { message: 'Validation failed',\n    name: 'ValidationError',\n    errors:\n     { size:\n        { message: 'must be less than 20',\n          name: 'ValidatorError',\n          path: 'size',\n          type: 'user defined',\n          value: 14 } } }\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.invalidate = function (path, err, val) {\n  if (!this.$__.validationError) {\n    this.$__.validationError = new ValidationError(this);\n  }\n\n  if (!err || 'string' === typeof err) {\n    err = new ValidatorError({\n      path: path,\n      message: err,\n      type: 'user defined',\n      value: val\n    });\n  }\n\n  if (this.$__.validationError == err) return;\n\n  this.$__.validationError.errors[path] = err;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "invalidate",
    "string": "Document.prototype.invalidate()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "return",
     "types": [
      "Document"
     ],
     "description": ""
    },
    {
     "type": "method",
     "string": "$__reset"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Resets the internal modified state of this document.</p>",
    "summary": "<p>Resets the internal modified state of this document.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__reset = function reset () {\n  var self = this;\n  DocumentArray || (DocumentArray = require('./types/documentarray'));\n\n  this.$__.activePaths\n  .map('init', 'modify', function (i) {\n    return self.getValue(i);\n  })\n  .filter(function (val) {\n    return val && val instanceof Array && val.isMongooseDocumentArray && val.length;\n  })\n  .forEach(function (array) {\n    var i = array.length;\n    while (i--) {\n      var doc = array[i];\n      if (!doc) continue;\n      doc.$__reset();\n    }\n  });\n\n  // clear atomics\n  this.$__dirty().forEach(function (dirt) {\n    var type = dirt.value;\n    if (type && type._atomics) {\n      type._atomics = {};\n    }\n  });\n\n  // Clear 'modify'('dirty') cache\n  this.$__.activePaths.clear('modify');\n  this.$__.validationError = undefined;\n  this.errors = undefined;\n  var self = this;\n  this.schema.requiredPaths().forEach(function (path) {\n    self.$__.activePaths.require(path);\n  });\n\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__reset",
    "string": "Document.prototype.$__reset()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__dirty"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Returns this documents dirty paths / vals.</p>",
    "summary": "<p>Returns this documents dirty paths / vals.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__dirty = function () {\n  var self = this;\n\n  var all = this.$__.activePaths.map('modify', function (path) {\n    return { path: path\n           , value: self.getValue(path)\n           , schema: self.$__path(path) };\n  });\n\n  // Sort dirty paths in a flat hierarchy.\n  all.sort(function (a, b) {\n    return (a.path < b.path ? -1 : (a.path > b.path ? 1 : 0));\n  });\n\n  // Ignore \"foo.a\" if \"foo\" is dirty already.\n  var minimal = []\n    , lastPath\n    , top;\n\n  all.forEach(function (item, i) {\n    if (item.path.indexOf(lastPath) !== 0) {\n      lastPath = item.path + '.';\n      minimal.push(item);\n      top = item;\n    } else {\n      // special case for top level MongooseArrays\n      if (top.value && top.value._atomics && top.value.hasAtomics()) {\n        // the `top` array itself and a sub path of `top` are being modified.\n        // the only way to honor all of both modifications is through a $set\n        // of entire array.\n        top.value._atomics = {};\n        top.value._atomics.$set = top.value;\n      }\n    }\n  });\n\n  top = lastPath = null;\n  return minimal;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__dirty",
    "string": "Document.prototype.$__dirty()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Compiles schemas.</p>",
    "summary": "<p>Compiles schemas.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function compile (tree, proto, prefix) {\n  var keys = Object.keys(tree)\n    , i = keys.length\n    , limb\n    , key;\n\n  while (i--) {\n    key = keys[i];\n    limb = tree[key];\n\n    define(key\n        , (('Object' === utils.getFunctionName(limb.constructor)\n               && Object.keys(limb).length)\n               && (!limb.type || limb.type.type)\n               ? limb\n               : null)\n        , proto\n        , prefix\n        , keys);\n  }\n};\n\n// gets descriptors for all properties of `object`\n// makes all properties non-enumerable to match previous behavior to #2211\nfunction getOwnPropertyDescriptors(object) {\n  var result = {};\n  \n  Object.getOwnPropertyNames(object).forEach(function(key) {\n    result[key] = Object.getOwnPropertyDescriptor(object, key);\n    result[key].enumerable = false;\n  });\n  \n  return result;\n}",
   "ctx": {
    "type": "function",
    "name": "compile",
    "string": "compile()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Defines the accessor named prop on the incoming prototype.</p>",
    "summary": "<p>Defines the accessor named prop on the incoming prototype.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function define (prop, subprops, prototype, prefix, keys) {\n  var prefix = prefix || ''\n    , path = (prefix ? prefix + '.' : '') + prop;\n\n  if (subprops) {\n\n    Object.defineProperty(prototype, prop, {\n        enumerable: true\n      , configurable: true\n      , get: function () {\n          if (!this.$__.getters)\n            this.$__.getters = {};\n\n          if (!this.$__.getters[path]) {\n            var nested = Object.create(Object.getPrototypeOf(this), getOwnPropertyDescriptors(this));\n\n            // save scope for nested getters/setters\n            if (!prefix) nested.$__.scope = this;\n\n            // shadow inherited getters from sub-objects so\n            // thing.nested.nested.nested... doesn't occur (gh-366)\n            var i = 0\n              , len = keys.length;\n\n            for (; i < len; ++i) {\n              // over-write the parents getter without triggering it\n              Object.defineProperty(nested, keys[i], {\n                  enumerable: false   // It doesn't show up.\n                , writable: true      // We can set it later.\n                , configurable: true  // We can Object.defineProperty again.\n                , value: undefined    // It shadows its parent.\n              });\n            }\n\n            nested.toObject = function () {\n              return this.get(path);\n            };\n\n            compile(subprops, nested, path);\n            this.$__.getters[path] = nested;\n          }\n\n          return this.$__.getters[path];\n        }\n      , set: function (v) {\n          if (v instanceof Document) v = v.toObject();\n          return (this.$__.scope || this).set(path, v);\n        }\n    });\n\n  } else {\n\n    Object.defineProperty(prototype, prop, {\n        enumerable: true\n      , configurable: true\n      , get: function ( ) { return this.get.call(this.$__.scope || this, path); }\n      , set: function (v) { return this.set.call(this.$__.scope || this, path, v); }\n    });\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "define",
    "string": "define()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Schema"
     ],
     "name": "schema",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__setSchema"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Assigns/compiles <code>schema</code> into this documents prototype.</p>",
    "summary": "<p>Assigns/compiles <code>schema</code> into this documents prototype.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__setSchema = function (schema) {\n  compile(schema.tree, this);\n  this.schema = schema;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__setSchema",
    "string": "Document.prototype.$__setSchema()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__getArrayPathsToValidate"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Get active path that were changed and are arrays</p>",
    "summary": "<p>Get active path that were changed and are arrays</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__getArrayPathsToValidate = function () {\n  DocumentArray || (DocumentArray = require('./types/documentarray'));\n\n  // validate all document arrays.\n  return this.$__.activePaths\n    .map('init', 'modify', function (i) {\n      return this.getValue(i);\n    }.bind(this))\n    .filter(function (val) {\n      return val && val instanceof Array && val.isMongooseDocumentArray && val.length;\n    }).reduce(function(seed, array) {\n      return seed.concat(array);\n    }, [])\n    .filter(function (doc) {return doc});\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__getArrayPathsToValidate",
    "string": "Document.prototype.$__getArrayPathsToValidate()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__getAllSubdocs"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Get all subdocs (by bfs)</p>",
    "summary": "<p>Get all subdocs (by bfs)</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__getAllSubdocs = function () {\n  DocumentArray || (DocumentArray = require('./types/documentarray'));\n  Embedded = Embedded || require('./types/embedded');\n\n  function docReducer(seed, path) {\n    var val = this[path];\n    if (val instanceof Embedded) seed.push(val);\n    if (val && val.isMongooseDocumentArray) {\n      val.forEach(function _docReduce(doc) {\n        if (!doc || !doc._doc) return;\n        if (doc instanceof Embedded) seed.push(doc);\n        seed = Object.keys(doc._doc).reduce(docReducer.bind(doc._doc), seed);\n      });\n    }\n    return seed;\n  }\n\n  var subDocs = Object.keys(this._doc).reduce(docReducer.bind(this), []);\n\n  return subDocs;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__getAllSubdocs",
    "string": "Document.prototype.$__getAllSubdocs()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__presaveValidate"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Handle generic save stuff.<br />to solve #1446 use use hierarchy instead of hooks</p>",
    "summary": "<p>Handle generic save stuff.<br />to solve #1446 use use hierarchy instead of hooks</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__presaveValidate = function $__presaveValidate() {\n  // if any doc.set() calls failed\n\n  var docs = this.$__getArrayPathsToValidate();\n\n  var e2 = docs.map(function (doc) {\n    return doc.$__presaveValidate();\n  });\n  var e1 = [this.$__.saveError].concat(e2);\n  var err = e1.filter(function (x) {return x})[0];\n  this.$__.saveError = null;\n\n  return err;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__presaveValidate",
    "string": "Document.prototype.$__presaveValidate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Error"
     ],
     "name": "err",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__error"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Registers an error</p>",
    "summary": "<p>Registers an error</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__error = function (err) {\n  this.$__.saveError = err;\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__error",
    "string": "Document.prototype.$__error()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__registerHooksFromSchema"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Executes methods queued from the Schema definition</p>",
    "summary": "<p>Executes methods queued from the Schema definition</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__registerHooksFromSchema = function () {\n  Embedded = Embedded || require('./types/embedded');\n\n  var self = this;\n  var q = self.schema && self.schema.callQueue;\n  if (!q.length) return self;\n\n  // we are only interested in 'pre' hooks, and group by point-cut\n  var toWrap = q.reduce(function (seed, pair) {\n    var args = [].slice.call(pair[1]);\n    var pointCut = pair[0] === 'on' ? 'post' : args[0];\n    if (!(pointCut in seed)) seed[pointCut] = [];\n    seed[pointCut].push(args);\n    return seed;\n  }, {post: []});\n\n  // 'post' hooks are simpler\n  toWrap.post.forEach(function (args) {\n    self.on.apply(self, args);\n  });\n  delete toWrap.post;\n\n  Object.keys(toWrap).forEach(function (pointCut) {\n\n    // skip weird handlers\n    if (~\"set \".indexOf(pointCut)) {\n      toWrap[pointCut].forEach(function (args) {\n        self.pre.apply(self, args);\n      });\n      return;\n    }\n\n    // this is so we can wrap everything into a promise;\n    var newName = ('$__original_' + pointCut);\n    self[newName] = self[pointCut];\n    self[pointCut] = function wrappedPointCut () {\n      var args = [].slice.call(arguments);\n      var lastArg = args.pop();\n\n      var wrapingPromise = new Promise;\n      wrapingPromise.end();\n      if (typeof lastArg == 'function') {\n        wrapingPromise.onResolve(lastArg);\n      }\n      if (!(this instanceof Embedded) && !wrapingPromise.hasRejectListeners()) {\n        wrapingPromise.onReject(self.$__handleReject.bind(self));\n      }\n      args.push(function () {\n        return wrapingPromise.resolve.apply(wrapingPromise, arguments);\n      });\n\n      // fire original\n      self[newName].apply(self, args);\n      return wrapingPromise;\n    };\n\n    toWrap[pointCut].forEach(function (args) {\n      args[0] = newName;\n      self.pre.apply(self, args);\n    });\n  })\n  return self;\n};\n\n\nDocument.prototype.$__handleReject = function handleReject(err) {\n  // emit on the Model if listening\n  if (this.listeners('error').length) {\n    this.emit('error', err);\n  } else if (this.constructor.listeners && this.constructor.listeners('error').length) {\n    this.constructor.emit('error', err);\n  } else if (this.listeners && this.listeners('error').length) {\n    this.emit('error', err);\n  } else if (this.db) {\n    // emit on the connection\n    if (!this.db.listeners('error').length) {\n      err.stack = 'No listeners detected, throwing. Consider adding an error listener to your connection.\\n' + err.stack\n    }\n    this.db.emit('error', err);\n  } else {\n    throw err;\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__registerHooksFromSchema",
    "string": "Document.prototype.$__registerHooksFromSchema()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": "js object"
    },
    {
     "type": "see",
     "title": "mongodb.Binary",
     "url": "http://mongodb.github.com/node-mongodb-native/api-bson-generated/binary.html",
     "visibility": "http://mongodb.github.com/node-mongodb-native/api-bson-generated/binary.html"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Converts this document into a plain javascript object, ready for storage in MongoDB.</p>\n\n<p>Buffers are converted to instances of <a href=\"http://mongodb.github.com/node-mongodb-native/api-bson-generated/binary.html\">mongodb.Binary</a> for proper storage.</p>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>getters</code> apply all getters (path and virtual getters)</li>\n<li><code>virtuals</code> apply virtual getters (can override <code>getters</code> option)</li>\n<li><code>minimize</code> remove empty objects (defaults to true)</li>\n<li><code>transform</code> a transform function to apply to the resulting document before returning</li>\n<li><code>depopulate</code> depopulate any populated paths, replacing them with their original refs (defaults to false)</li>\n</ul>\n\n<h4>Getters/Virtuals</h4>\n\n<p>Example of only applying path getters</p>\n\n<pre><code>doc.toObject({ getters: true, virtuals: false })\n</code></pre>\n\n<p>Example of only applying virtual getters</p>\n\n<pre><code>doc.toObject({ virtuals: true })\n</code></pre>\n\n<p>Example of applying both path and virtual getters</p>\n\n<pre><code>doc.toObject({ getters: true })\n</code></pre>\n\n<p>To apply these options to every document of your schema by default, set your <a href=\"#schema_Schema\">schemas</a> <code>toObject</code> option to the same argument.</p>\n\n<pre><code>schema.set('toObject', { virtuals: true })\n</code></pre>\n\n<h4>Transform</h4>\n\n<p>We may need to perform a transformation of the resulting object based on some criteria, say to remove some sensitive information or return a custom object. In this case we set the optional <code>transform</code> function.</p>\n\n<p>Transform functions receive three arguments</p>\n\n<pre><code>function (doc, ret, options) {}\n</code></pre>\n\n<ul>\n<li><code>doc</code> The mongoose document which is being converted</li>\n<li><code>ret</code> The plain object representation which has been converted</li>\n<li><code>options</code> The options in use (either schema options or the options passed inline)</li>\n</ul>\n\n<h4>Example</h4>\n\n<pre><code>// specify the transform schema option\nif (!schema.options.toObject) schema.options.toObject = {};\nschema.options.toObject.transform = function (doc, ret, options) {\n  // remove the _id of every document before returning the result\n  delete ret._id;\n}\n\n// without the transformation in the schema\ndoc.toObject(); // { _id: 'anId', name: 'Wreck-it Ralph' }\n\n// with the transformation\ndoc.toObject(); // { name: 'Wreck-it Ralph' }\n</code></pre>\n\n<p>With transformations we can do a lot more than remove properties. We can even return completely new customized objects:</p>\n\n<pre><code>if (!schema.options.toObject) schema.options.toObject = {};\nschema.options.toObject.transform = function (doc, ret, options) {\n  return { movie: ret.name }\n}\n\n// without the transformation in the schema\ndoc.toObject(); // { _id: 'anId', name: 'Wreck-it Ralph' }\n\n// with the transformation\ndoc.toObject(); // { movie: 'Wreck-it Ralph' }\n</code></pre>\n\n<p><em>Note: if a transform function returns <code>undefined</code>, the return value will be ignored.</em></p>\n\n<p>Transformations may also be applied inline, overridding any transform set in the options:</p>\n\n<pre><code>function xform (doc, ret, options) {\n  return { inline: ret.name, custom: true }\n}\n\n// pass the transform as an inline option\ndoc.toObject({ transform: xform }); // { inline: 'Wreck-it Ralph', custom: true }\n</code></pre>\n\n<p><em>Note: if you call <code>toObject</code> and pass any options, the transform declared in your schema options will <strong>not</strong> be applied. To force its application pass <code>transform: true</code></em></p>\n\n<pre><code>if (!schema.options.toObject) schema.options.toObject = {};\nschema.options.toObject.hide = '_id';\nschema.options.toObject.transform = function (doc, ret, options) {\n  if (options.hide) {\n    options.hide.split(' ').forEach(function (prop) {\n      delete ret[prop];\n    });\n  }\n}\n\nvar doc = new Doc({ _id: 'anId', secret: 47, name: 'Wreck-it Ralph' });\ndoc.toObject();                                        // { secret: 47, name: 'Wreck-it Ralph' }\ndoc.toObject({ hide: 'secret _id' });                  // { _id: 'anId', secret: 47, name: 'Wreck-it Ralph' }\ndoc.toObject({ hide: 'secret _id', transform: true }); // { name: 'Wreck-it Ralph' }\n</code></pre>\n\n<p>Transforms are applied to the document <em>and each of its sub-documents</em>. To determine whether or not you are currently operating on a sub-document you might use the following guard:</p>\n\n<pre><code>if ('function' == typeof doc.ownerDocument) {\n  // working with a sub doc\n}\n</code></pre>\n\n<p>Transforms, like all of these options, are also available for <code>toJSON</code>.</p>\n\n<p>See <a href=\"/docs/guide.html#toObject\">schema options</a> for some more details.</p>\n\n<p><em>During save, no custom options are applied to the document before being sent to the database.</em></p>",
    "summary": "<p>Converts this document into a plain javascript object, ready for storage in MongoDB.</p>",
    "body": "<p>Buffers are converted to instances of <a href=\"http://mongodb.github.com/node-mongodb-native/api-bson-generated/binary.html\">mongodb.Binary</a> for proper storage.</p>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>getters</code> apply all getters (path and virtual getters)</li>\n<li><code>virtuals</code> apply virtual getters (can override <code>getters</code> option)</li>\n<li><code>minimize</code> remove empty objects (defaults to true)</li>\n<li><code>transform</code> a transform function to apply to the resulting document before returning</li>\n<li><code>depopulate</code> depopulate any populated paths, replacing them with their original refs (defaults to false)</li>\n</ul>\n\n<h4>Getters/Virtuals</h4>\n\n<p>Example of only applying path getters</p>\n\n<pre><code>doc.toObject({ getters: true, virtuals: false })\n</code></pre>\n\n<p>Example of only applying virtual getters</p>\n\n<pre><code>doc.toObject({ virtuals: true })\n</code></pre>\n\n<p>Example of applying both path and virtual getters</p>\n\n<pre><code>doc.toObject({ getters: true })\n</code></pre>\n\n<p>To apply these options to every document of your schema by default, set your <a href=\"#schema_Schema\">schemas</a> <code>toObject</code> option to the same argument.</p>\n\n<pre><code>schema.set('toObject', { virtuals: true })\n</code></pre>\n\n<h4>Transform</h4>\n\n<p>We may need to perform a transformation of the resulting object based on some criteria, say to remove some sensitive information or return a custom object. In this case we set the optional <code>transform</code> function.</p>\n\n<p>Transform functions receive three arguments</p>\n\n<pre><code>function (doc, ret, options) {}\n</code></pre>\n\n<ul>\n<li><code>doc</code> The mongoose document which is being converted</li>\n<li><code>ret</code> The plain object representation which has been converted</li>\n<li><code>options</code> The options in use (either schema options or the options passed inline)</li>\n</ul>\n\n<h4>Example</h4>\n\n<pre><code>// specify the transform schema option\nif (!schema.options.toObject) schema.options.toObject = {};\nschema.options.toObject.transform = function (doc, ret, options) {\n  // remove the _id of every document before returning the result\n  delete ret._id;\n}\n\n// without the transformation in the schema\ndoc.toObject(); // { _id: 'anId', name: 'Wreck-it Ralph' }\n\n// with the transformation\ndoc.toObject(); // { name: 'Wreck-it Ralph' }\n</code></pre>\n\n<p>With transformations we can do a lot more than remove properties. We can even return completely new customized objects:</p>\n\n<pre><code>if (!schema.options.toObject) schema.options.toObject = {};\nschema.options.toObject.transform = function (doc, ret, options) {\n  return { movie: ret.name }\n}\n\n// without the transformation in the schema\ndoc.toObject(); // { _id: 'anId', name: 'Wreck-it Ralph' }\n\n// with the transformation\ndoc.toObject(); // { movie: 'Wreck-it Ralph' }\n</code></pre>\n\n<p><em>Note: if a transform function returns <code>undefined</code>, the return value will be ignored.</em></p>\n\n<p>Transformations may also be applied inline, overridding any transform set in the options:</p>\n\n<pre><code>function xform (doc, ret, options) {\n  return { inline: ret.name, custom: true }\n}\n\n// pass the transform as an inline option\ndoc.toObject({ transform: xform }); // { inline: 'Wreck-it Ralph', custom: true }\n</code></pre>\n\n<p><em>Note: if you call <code>toObject</code> and pass any options, the transform declared in your schema options will <strong>not</strong> be applied. To force its application pass <code>transform: true</code></em></p>\n\n<pre><code>if (!schema.options.toObject) schema.options.toObject = {};\nschema.options.toObject.hide = '_id';\nschema.options.toObject.transform = function (doc, ret, options) {\n  if (options.hide) {\n    options.hide.split(' ').forEach(function (prop) {\n      delete ret[prop];\n    });\n  }\n}\n\nvar doc = new Doc({ _id: 'anId', secret: 47, name: 'Wreck-it Ralph' });\ndoc.toObject();                                        // { secret: 47, name: 'Wreck-it Ralph' }\ndoc.toObject({ hide: 'secret _id' });                  // { _id: 'anId', secret: 47, name: 'Wreck-it Ralph' }\ndoc.toObject({ hide: 'secret _id', transform: true }); // { name: 'Wreck-it Ralph' }\n</code></pre>\n\n<p>Transforms are applied to the document <em>and each of its sub-documents</em>. To determine whether or not you are currently operating on a sub-document you might use the following guard:</p>\n\n<pre><code>if ('function' == typeof doc.ownerDocument) {\n  // working with a sub doc\n}\n</code></pre>\n\n<p>Transforms, like all of these options, are also available for <code>toJSON</code>.</p>\n\n<p>See <a href=\"/docs/guide.html#toObject\">schema options</a> for some more details.</p>\n\n<p><em>During save, no custom options are applied to the document before being sent to the database.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.toObject = function (options) {\n  if (options && options.depopulate && this.$__.wasPopulated) {\n    // populated paths that we set to a document\n    return clone(this._id, options);\n  }\n\n  // When internally saving this document we always pass options,\n  // bypassing the custom schema options.\n  var optionsParameter = options;\n  if (!(options && 'Object' == utils.getFunctionName(options.constructor)) ||\n      (options && options._useSchemaOptions)) {\n    options = this.schema.options.toObject\n      ? clone(this.schema.options.toObject)\n      : {};\n  }\n\n  ;('minimize' in options) || (options.minimize = this.schema.options.minimize);\n  if (!optionsParameter) {\n    options._useSchemaOptions = true;\n  }\n\n  var ret = clone(this._doc, options);\n\n  if (options.virtuals || options.getters && false !== options.virtuals) {\n    applyGetters(this, ret, 'virtuals', options);\n  }\n\n  if (options.getters) {\n    applyGetters(this, ret, 'paths', options);\n    // applyGetters for paths will add nested empty objects;\n    // if minimize is set, we need to remove them.\n    if (options.minimize) {\n      ret = minimize(ret) || {};\n    }\n  }\n\n  // In the case where a subdocument has its own transform function, we need to\n  // check and see if the parent has a transform (options.transform) and if the\n  // child schema has a transform (this.schema.options.toObject) In this case,\n  // we need to adjust options.transform to be the child schema's transform and\n  // not the parent schema's\n  if (true === options.transform ||\n      (this.schema.options.toObject && options.transform)) {\n    var opts = options.json\n      ? this.schema.options.toJSON\n      : this.schema.options.toObject;\n    if (opts) {\n      options.transform = opts.transform;\n    }\n  }\n\n  if ('function' == typeof options.transform) {\n    var xformed = options.transform(this, ret, options);\n    if ('undefined' != typeof xformed) ret = xformed;\n  }\n\n  return ret;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "toObject",
    "string": "Document.prototype.toObject()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "object",
     "description": "to minimize"
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Minimizes an object, removing undefined values and empty objects</p>",
    "summary": "<p>Minimizes an object, removing undefined values and empty objects</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function minimize (obj) {\n  var keys = Object.keys(obj)\n    , i = keys.length\n    , hasKeys\n    , key\n    , val\n\n  while (i--) {\n    key = keys[i];\n    val = obj[key];\n\n    if (utils.isObject(val)) {\n      obj[key] = minimize(val);\n    }\n\n    if (undefined === obj[key]) {\n      delete obj[key];\n      continue;\n    }\n\n    hasKeys = true;\n  }\n\n  return hasKeys\n    ? obj\n    : undefined;\n}",
   "ctx": {
    "type": "function",
    "name": "minimize",
    "string": "minimize()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Document"
     ],
     "name": "self",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "json",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "type",
     "description": "either `virtuals` or `paths`"
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": "`json`"
    }
   ],
   "description": {
    "full": "<p>Applies virtuals properties to <code>json</code>.</p>",
    "summary": "<p>Applies virtuals properties to <code>json</code>.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function applyGetters (self, json, type, options) {\n  var schema = self.schema\n    , paths = Object.keys(schema[type])\n    , i = paths.length\n    , path\n\n  while (i--) {\n    path = paths[i];\n\n    var parts = path.split('.')\n      , plen = parts.length\n      , last = plen - 1\n      , branch = json\n      , part\n\n    for (var ii = 0; ii < plen; ++ii) {\n      part = parts[ii];\n      if (ii === last) {\n        branch[part] = clone(self.get(path), options);\n      } else {\n        branch = branch[part] || (branch[part] = {});\n      }\n    }\n  }\n\n  return json;\n}",
   "ctx": {
    "type": "function",
    "name": "applyGetters",
    "string": "applyGetters()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": ""
    },
    {
     "type": "see",
     "local": "Document#toObject #document_Document-toObject",
     "visibility": "Document#toObject"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The return value of this method is used in calls to JSON.stringify(doc).</p>\n\n<p>This method accepts the same options as <a href=\"#document_Document-toObject\">Document#toObject</a>. To apply the options to every document of your schema by default, set your <a href=\"#schema_Schema\">schemas</a> <code>toJSON</code> option to the same argument.</p>\n\n<pre><code>schema.set('toJSON', { virtuals: true })\n</code></pre>\n\n<p>See <a href=\"/docs/guide.html#toJSON\">schema options</a> for details.</p>",
    "summary": "<p>The return value of this method is used in calls to JSON.stringify(doc).</p>",
    "body": "<p>This method accepts the same options as <a href=\"#document_Document-toObject\">Document#toObject</a>. To apply the options to every document of your schema by default, set your <a href=\"#schema_Schema\">schemas</a> <code>toJSON</code> option to the same argument.</p>\n\n<pre><code>schema.set('toJSON', { virtuals: true })\n</code></pre>\n\n<p>See <a href=\"/docs/guide.html#toJSON\">schema options</a> for details.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.toJSON = function (options) {\n  // check for object type since an array of documents\n  // being stringified passes array indexes instead\n  // of options objects. JSON.stringify([doc, doc])\n  // The second check here is to make sure that populated documents (or\n  // subdocuments) use their own options for `.toJSON()` instead of their\n  // parent's\n  if (!(options && 'Object' == utils.getFunctionName(options.constructor))\n      || ((!options || options.json) && this.schema.options.toJSON)) {\n    options = this.schema.options.toJSON\n      ? clone(this.schema.options.toJSON)\n      : {};\n  }\n  options.json = true;\n\n  return this.toObject(options);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "toJSON",
    "string": "Document.prototype.toJSON()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Helper for console.log</p>",
    "summary": "<p>Helper for console.log</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.inspect = function (options) {\n  var opts = options && 'Object' == utils.getFunctionName(options.constructor) ? options :\n      this.schema.options.toObject ? clone(this.schema.options.toObject) :\n      {};\n  opts.minimize = false;\n  return inspect(this.toObject(opts));\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "inspect",
    "string": "Document.prototype.inspect()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "method",
     "string": "toString"
    }
   ],
   "description": {
    "full": "<p>Helper for console.log</p>",
    "summary": "<p>Helper for console.log</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.toString = Document.prototype.inspect;",
   "ctx": {
    "type": "property",
    "constructor": "Document",
    "cons": "Document",
    "name": "toString",
    "value": "Document.prototype.inspect",
    "string": "Document.prototype.toString"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Document"
     ],
     "name": "doc",
     "description": "a document to compare"
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns true if the Document stores the same data as doc.</p>\n\n<p>Documents are considered equal when they have matching <code>_id</code>s, unless neither<br />document has an <code>_id</code>, in which case this function falls back to using<br /><code>deepEqual()</code>.</p>",
    "summary": "<p>Returns true if the Document stores the same data as doc.</p>",
    "body": "<p>Documents are considered equal when they have matching <code>_id</code>s, unless neither<br />document has an <code>_id</code>, in which case this function falls back to using<br /><code>deepEqual()</code>.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.equals = function (doc) {\n  var tid = this.get('_id');\n  var docid = doc.get('_id');\n  if (!tid && !docid) {\n    return deepEqual(this, doc);\n  }\n  return tid && tid.equals\n    ? tid.equals(docid)\n    : tid === docid;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "equals",
    "string": "Document.prototype.equals()"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "local": "Model.populate #model_Model.populate",
     "visibility": "Model.populate"
    },
    {
     "type": "param",
     "types": [
      "String",
      "Object"
     ],
     "name": "[path]",
     "description": "The path to populate or an options object"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "When passed, population is invoked"
    },
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "return",
     "types": [
      "Document"
     ],
     "description": "this"
    }
   ],
   "description": {
    "full": "<p>Populates document references, executing the <code>callback</code> when complete.</p>\n\n<h4>Example:</h4>\n\n<pre><code>doc\n.populate('company')\n.populate({\n  path: 'notes',\n  match: /airline/,\n  select: 'text',\n  model: 'modelName'\n  options: opts\n}, function (err, user) {\n  assert(doc._id == user._id) // the document itself is passed\n})\n\n// summary\ndoc.populate(path)               // not executed\ndoc.populate(options);           // not executed\ndoc.populate(path, callback)     // executed\ndoc.populate(options, callback); // executed\ndoc.populate(callback);          // executed\n</code></pre>\n\n<h4>NOTE:</h4>\n\n<p>Population does not occur unless a <code>callback</code> is passed.<br />Passing the same path a second time will overwrite the previous path options.<br />See <a href=\"#model_Model.populate\">Model.populate()</a> for explaination of options.</p>",
    "summary": "<p>Populates document references, executing the <code>callback</code> when complete.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>doc\n.populate('company')\n.populate({\n  path: 'notes',\n  match: /airline/,\n  select: 'text',\n  model: 'modelName'\n  options: opts\n}, function (err, user) {\n  assert(doc._id == user._id) // the document itself is passed\n})\n\n// summary\ndoc.populate(path)               // not executed\ndoc.populate(options);           // not executed\ndoc.populate(path, callback)     // executed\ndoc.populate(options, callback); // executed\ndoc.populate(callback);          // executed\n</code></pre>\n\n<h4>NOTE:</h4>\n\n<p>Population does not occur unless a <code>callback</code> is passed.<br />Passing the same path a second time will overwrite the previous path options.<br />See <a href=\"#model_Model.populate\">Model.populate()</a> for explaination of options.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.populate = function populate () {\n  if (0 === arguments.length) return this;\n\n  var pop = this.$__.populate || (this.$__.populate = {});\n  var args = utils.args(arguments);\n  var fn;\n\n  if ('function' == typeof args[args.length-1]) {\n    fn = args.pop();\n  }\n\n  // allow `doc.populate(callback)`\n  if (args.length) {\n    // use hash to remove duplicate paths\n    var res = utils.populate.apply(null, args);\n    for (var i = 0; i < res.length; ++i) {\n      pop[res[i].path] = res[i];\n    }\n  }\n\n  if (fn) {\n    var paths = utils.object.vals(pop);\n    this.$__.populate = undefined;\n    this.constructor.populate(this, paths, fn);\n  }\n\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "populate",
    "string": "Document.prototype.populate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Array",
      "ObjectId",
      "Number",
      "Buffer",
      "String",
      "undefined"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Gets _id(s) used during population of the given <code>path</code>.</p>\n\n<h4>Example:</h4>\n\n<pre><code>Model.findOne().populate('author').exec(function (err, doc) {\n  console.log(doc.author.name)         // Dr.Seuss\n  console.log(doc.populated('author')) // '5144cf8050f071d979c118a7'\n})\n</code></pre>\n\n<p>If the path was not populated, undefined is returned.</p>",
    "summary": "<p>Gets _id(s) used during population of the given <code>path</code>.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>Model.findOne().populate('author').exec(function (err, doc) {\n  console.log(doc.author.name)         // Dr.Seuss\n  console.log(doc.populated('author')) // '5144cf8050f071d979c118a7'\n})\n</code></pre>\n\n<p>If the path was not populated, undefined is returned.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Document.prototype.populated = function (path, val, options) {\n  // val and options are internal\n\n  if (null == val) {\n    if (!this.$__.populated) return undefined;\n    var v = this.$__.populated[path];\n    if (v) return v.value;\n    return undefined;\n  }\n\n  // internal\n\n  if (true === val) {\n    if (!this.$__.populated) return undefined;\n    return this.$__.populated[path];\n  }\n\n  this.$__.populated || (this.$__.populated = {});\n  this.$__.populated[path] = { value: val, options: options };\n  return val;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "populated",
    "string": "Document.prototype.populated()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__fullPath"
    },
    {
     "type": "memberOf",
     "parent": "Document"
    }
   ],
   "description": {
    "full": "<p>Returns the full path to this document.</p>",
    "summary": "<p>Returns the full path to this document.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Document.prototype.$__fullPath = function (path) {\n  // overridden in SubDocuments\n  return path || '';\n}",
   "ctx": {
    "type": "method",
    "constructor": "Document",
    "cons": "Document",
    "name": "$__fullPath",
    "string": "Document.prototype.$__fullPath()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "Document.ValidationError = ValidationError;\nmodule.exports = exports = Document;",
   "ctx": {
    "type": "property",
    "receiver": "Document",
    "name": "ValidationError",
    "value": "ValidationError",
    "string": "Document.ValidationError"
   }
  }
 ],
 "document_provider": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var Document = require('./document.js');\nvar BrowserDocument = require('./browserDocument.js');",
   "ctx": {
    "type": "declaration",
    "name": "Document",
    "value": "require('./document.js')",
    "string": "Document"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Returns the Document constructor for the current context </p>",
    "summary": "<p>Returns the Document constructor for the current context </p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "module.exports = function() {\n  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document === window.document) {\n    return BrowserDocument;\n  } else {\n    return Document;\n  }\n};",
   "ctx": {
    "type": "method",
    "receiver": "module",
    "name": "exports",
    "string": "module.exports()"
   }
  }
 ],
 "drivers/node-mongodb-native/binary": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var Binary = require('mongodb/node_modules/bson').Binary;\n\nmodule.exports = exports = Binary;",
   "ctx": {
    "type": "declaration",
    "name": "Binary",
    "value": "require('mongodb/node_modules/bson').Binary",
    "string": "Binary"
   }
  }
 ],
 "drivers/node-mongodb-native/collection": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var MongooseCollection = require('../../collection')\n  , Collection = require('mongodb').Collection\n  , STATES = require('../../connectionstate')\n  , utils = require('../../utils')",
   "ctx": {
    "type": "declaration",
    "name": "MongooseCollection",
    "value": "require('../../collection')",
    "string": "MongooseCollection"
   }
  },
  {
   "tags": [
    {
     "type": "inherits",
     "string": "Collection"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>A <a href=\"https://github.com/mongodb/node-mongodb-native\">node-mongodb-native</a> collection implementation.</p>\n\n<p>All methods methods from the <a href=\"https://github.com/mongodb/node-mongodb-native\">node-mongodb-native</a> driver are copied and wrapped in queue management.</p>",
    "summary": "<p>A <a href=\"https://github.com/mongodb/node-mongodb-native\">node-mongodb-native</a> collection implementation.</p>",
    "body": "<p>All methods methods from the <a href=\"https://github.com/mongodb/node-mongodb-native\">node-mongodb-native</a> driver are copied and wrapped in queue management.</p>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function NativeCollection () {\n  this.collection = null;\n  MongooseCollection.apply(this, arguments);\n}",
   "ctx": {
    "type": "function",
    "name": "NativeCollection",
    "string": "NativeCollection()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherit from abstract Collection.</p>",
    "summary": "<p>Inherit from abstract Collection.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "NativeCollection.prototype.__proto__ = MongooseCollection.prototype;",
   "ctx": {
    "type": "property",
    "constructor": "NativeCollection",
    "cons": "NativeCollection",
    "name": "__proto__",
    "value": "MongooseCollection.prototype",
    "string": "NativeCollection.prototype.__proto__"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Called when the connection opens.</p>",
    "summary": "<p>Called when the connection opens.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "NativeCollection.prototype.onOpen = function () {\n  var self = this;\n\n  // always get a new collection in case the user changed host:port\n  // of parent db instance when re-opening the connection.\n\n  if (!self.opts.capped.size) {\n    // non-capped\n    return self.conn.db.collection(self.name, callback);\n  }\n\n  // capped\n  return self.conn.db.collection(self.name, function (err, c) {\n    if (err) return callback(err);\n\n    // discover if this collection exists and if it is capped\n    self.conn.db.collection( 'system.namespaces', function(err, namespaces) {\n      var namespaceName = self.conn.db.databaseName + '.' + self.name;\n      namespaces.findOne({ name : namespaceName }, function(err, doc) {\n        if (err) {\n          return callback(err);\n        }\n        var exists = !!doc;\n\n        if (exists) {\n          if (doc.options && doc.options.capped) {\n            callback(null, c);\n          } else {\n            var msg = 'A non-capped collection exists with the name: '+ self.name +'\\n\\n'\n                    + ' To use this collection as a capped collection, please '\n                    + 'first convert it.\\n'\n                    + ' http://www.mongodb.org/display/DOCS/Capped+Collections#CappedCollections-Convertingacollectiontocapped'\n            err = new Error(msg);\n            callback(err);\n          }\n        } else {\n          // create\n          var opts = utils.clone(self.opts.capped);\n          opts.capped = true;\n          self.conn.db.createCollection(self.name, opts, callback);\n        }\n      });\n    });\n  });\n\n  function callback (err, collection) {\n    if (err) {\n      // likely a strict mode error\n      self.conn.emit('error', err);\n    } else {\n      self.collection = collection;\n      MongooseCollection.prototype.onOpen.call(self);\n    }\n  };\n};",
   "ctx": {
    "type": "method",
    "constructor": "NativeCollection",
    "cons": "NativeCollection",
    "name": "onOpen",
    "string": "NativeCollection.prototype.onOpen()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Called when the connection closes</p>",
    "summary": "<p>Called when the connection closes</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "NativeCollection.prototype.onClose = function () {\n  MongooseCollection.prototype.onClose.call(this);\n};",
   "ctx": {
    "type": "method",
    "constructor": "NativeCollection",
    "cons": "NativeCollection",
    "name": "onClose",
    "string": "NativeCollection.prototype.onClose()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Copy the collection methods and make them subject to queues</p>",
    "summary": "<p>Copy the collection methods and make them subject to queues</p>",
    "body": ""
   },
   "ignore": true,
   "code": "for (var i in Collection.prototype) {\n  (function(i){\n    NativeCollection.prototype[i] = function () {\n      if (this.buffer) {\n        this.addQueue(i, arguments);\n        return;\n      }\n\n      var collection = this.collection\n        , args = arguments\n        , self = this\n        , debug = self.conn.base.options.debug;\n\n      if (debug) {\n        if ('function' === typeof debug) {\n          debug.apply(debug\n            , [self.name, i].concat(utils.args(args, 0, args.length-1)));\n        } else {\n          console.error('\\x1B[0;36mMongoose:\\x1B[0m %s.%s(%s) %s %s %s'\n            , self.name\n            , i\n            , print(args[0])\n            , print(args[1])\n            , print(args[2])\n            , print(args[3]))\n        }\n      }\n\n      return collection[i].apply(collection, args);\n    };\n  })(i);\n}"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Debug print helper</p>",
    "summary": "<p>Debug print helper</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function print (arg) {\n  var type = typeof arg;\n  if ('function' === type || 'undefined' === type) return '';\n  return format(arg);\n}",
   "ctx": {
    "type": "function",
    "name": "print",
    "string": "print()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Debug print helper</p>",
    "summary": "<p>Debug print helper</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function format (obj, sub) {\n  var x = utils.clone(obj);\n  if (x) {\n    if ('Binary' === x.constructor.name) {\n      x = '[object Buffer]';\n    } else if ('ObjectID' === x.constructor.name) {\n      var representation = 'ObjectId(\"' + x.toHexString() + '\")';\n      x = { inspect: function() { return representation; } };\n    } else if ('Date' === x.constructor.name) {\n      var representation = 'new Date(\"' + x.toUTCString() + '\")';\n      x = { inspect: function() { return representation; } };\n    } else if ('Object' === x.constructor.name) {\n      var keys = Object.keys(x)\n        , i = keys.length\n        , key\n      while (i--) {\n        key = keys[i];\n        if (x[key]) {\n          if ('Binary' === x[key].constructor.name) {\n            x[key] = '[object Buffer]';\n          } else if ('Object' === x[key].constructor.name) {\n            x[key] = format(x[key], true);\n          } else if ('ObjectID' === x[key].constructor.name) {\n            ;(function(x){\n              var representation = 'ObjectId(\"' + x[key].toHexString() + '\")';\n              x[key] = { inspect: function() { return representation; } };\n            })(x)\n          } else if ('Date' === x[key].constructor.name) {\n            ;(function(x){\n              var representation = 'new Date(\"' + x[key].toUTCString() + '\")';\n              x[key] = { inspect: function() { return representation; } };\n            })(x)\n          } else if (Array.isArray(x[key])) {\n            x[key] = x[key].map(function (o) {\n              return format(o, true)\n            });\n          }\n        }\n      }\n    }\n    if (sub) return x;\n  }\n\n  return require('util')\n    .inspect(x, false, 10, true)\n    .replace(/\\n/g, '')\n    .replace(/\\s{2,}/g, ' ')\n}",
   "ctx": {
    "type": "function",
    "name": "format",
    "string": "format()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": ""
    },
    {
     "type": "method",
     "string": "getIndexes"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retreives information about this collections indexes.</p>",
    "summary": "<p>Retreives information about this collections indexes.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "NativeCollection.prototype.getIndexes = NativeCollection.prototype.indexInformation;",
   "ctx": {
    "type": "property",
    "constructor": "NativeCollection",
    "cons": "NativeCollection",
    "name": "getIndexes",
    "value": "NativeCollection.prototype.indexInformation",
    "string": "NativeCollection.prototype.getIndexes"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = NativeCollection;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "NativeCollection",
    "string": "module.exports"
   }
  }
 ],
 "drivers/node-mongodb-native/connection": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var MongooseConnection = require('../../connection')\n  , mongo = require('mongodb')\n  , Db = mongo.Db\n  , Server = mongo.Server\n  , Mongos = mongo.Mongos\n  , STATES = require('../../connectionstate')\n  , ReplSetServers = mongo.ReplSetServers\n  , utils = require('../../utils');",
   "ctx": {
    "type": "declaration",
    "name": "MongooseConnection",
    "value": "require('../../connection')",
    "string": "MongooseConnection"
   }
  },
  {
   "tags": [
    {
     "type": "inherits",
     "string": "Connection"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>A <a href=\"https://github.com/mongodb/node-mongodb-native\">node-mongodb-native</a> connection implementation.</p>",
    "summary": "<p>A <a href=\"https://github.com/mongodb/node-mongodb-native\">node-mongodb-native</a> connection implementation.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function NativeConnection() {\n  MongooseConnection.apply(this, arguments);\n  this._listening = false;\n};",
   "ctx": {
    "type": "function",
    "name": "NativeConnection",
    "string": "NativeConnection()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Expose the possible connection states.</p>",
    "summary": "<p>Expose the possible connection states.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "NativeConnection.STATES = STATES;",
   "ctx": {
    "type": "property",
    "receiver": "NativeConnection",
    "name": "STATES",
    "value": "STATES",
    "string": "NativeConnection.STATES"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from Connection.</p>",
    "summary": "<p>Inherits from Connection.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "NativeConnection.prototype.__proto__ = MongooseConnection.prototype;",
   "ctx": {
    "type": "property",
    "constructor": "NativeConnection",
    "cons": "NativeConnection",
    "name": "__proto__",
    "value": "MongooseConnection.prototype",
    "string": "NativeConnection.prototype.__proto__"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "fn",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Connection"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Opens the connection to MongoDB.</p>",
    "summary": "<p>Opens the connection to MongoDB.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "NativeConnection.prototype.doOpen = function (fn) {\n  if (this.db) {\n    mute(this);\n  }\n\n  var server = new Server(this.host, this.port, this.options.server);\n  this.db = new Db(this.name, server, this.options.db);\n\n  var self = this;\n  this.db.open(function (err) {\n    if (err) return fn(err);\n    listen(self);\n    fn();\n  });\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "NativeConnection",
    "cons": "NativeConnection",
    "name": "doOpen",
    "string": "NativeConnection.prototype.doOpen()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": "The database name"
    },
    {
     "type": "return",
     "types": [
      "Connection"
     ],
     "description": "New Connection Object"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Switches to a different database using the same connection pool.</p>\n\n<p>Returns a new connection object, with the new db.</p>",
    "summary": "<p>Switches to a different database using the same connection pool.</p>",
    "body": "<p>Returns a new connection object, with the new db.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "NativeConnection.prototype.useDb = function (name) {\n  // we have to manually copy all of the attributes...\n  var newConn = new this.constructor();\n  newConn.name = name;\n  newConn.base = this.base;\n  newConn.collections = {};\n  newConn.models = {};\n  newConn.replica = this.replica;\n  newConn.hosts = this.hosts;\n  newConn.host = this.host;\n  newConn.port = this.port;\n  newConn.user = this.user;\n  newConn.pass = this.pass;\n  newConn.options = this.options;\n  newConn._readyState = this._readyState;\n  newConn._closeCalled = this._closeCalled;\n  newConn._hasOpened = this._hasOpened;\n  newConn._listening = false;\n\n  // First, when we create another db object, we are not guaranteed to have a\n  // db object to work with. So, in the case where we have a db object and it\n  // is connected, we can just proceed with setting everything up. However, if\n  // we do not have a db or the state is not connected, then we need to wait on\n  // the 'open' event of the connection before doing the rest of the setup\n  // the 'connected' event is the first time we'll have access to the db object\n\n  var self = this;\n\n  if (this.db && this.db._state == 'connected') {\n    wireup();\n  } else {\n    this.once('connected', wireup);\n  }\n\n  function wireup () {\n    newConn.db = self.db.db(name);\n    newConn.onOpen();\n    // setup the events appropriately\n    listen(newConn);\n  }\n\n  newConn.name = name;\n\n  // push onto the otherDbs stack, this is used when state changes\n  this.otherDbs.push(newConn);\n  newConn.otherDbs.push(this);\n\n  return newConn;\n};",
   "ctx": {
    "type": "method",
    "constructor": "NativeConnection",
    "cons": "NativeConnection",
    "name": "useDb",
    "string": "NativeConnection.prototype.useDb()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Register listeners for important events and bubble appropriately.</p>",
    "summary": "<p>Register listeners for important events and bubble appropriately.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function listen (conn) {\n  if (conn._listening) return;\n  conn._listening = true;\n\n  conn.db.on('close', function(){\n    if (conn._closeCalled) return;\n\n    // the driver never emits an `open` event. auto_reconnect still\n    // emits a `close` event but since we never get another\n    // `open` we can't emit close\n    if (conn.db.serverConfig.autoReconnect) {\n      conn.readyState = STATES.disconnected;\n      conn.emit('close');\n      return;\n    }\n    conn.onClose();\n  });\n  conn.db.on('error', function(err){\n    conn.emit('error', err);\n  });\n  conn.db.on('reconnect', function() {\n    conn.readyState = STATES.connected;\n    conn.emit('reconnected');\n  });\n  conn.db.on('timeout', function(err){\n    var error = new Error(err && err.err || 'connection timeout');\n    conn.emit('error', error);\n  });\n  conn.db.on('open', function (err, db) {\n    if (STATES.disconnected === conn.readyState && db && db.databaseName) {\n      conn.readyState = STATES.connected;\n      conn.emit('reconnected');\n    }\n  });\n  conn.db.on('parseError', function(err) {\n    conn.emit('parseError', err);\n  });\n}",
   "ctx": {
    "type": "function",
    "name": "listen",
    "string": "listen()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Remove listeners registered in <code>listen</code></p>",
    "summary": "<p>Remove listeners registered in <code>listen</code></p>",
    "body": ""
   },
   "ignore": true,
   "code": "function mute (conn) {\n  if (!conn.db) throw new Error('missing db');\n  conn.db.removeAllListeners(\"close\");\n  conn.db.removeAllListeners(\"error\");\n  conn.db.removeAllListeners(\"timeout\");\n  conn.db.removeAllListeners(\"open\");\n  conn.db.removeAllListeners(\"fullsetup\");\n  conn._listening = false;\n}",
   "ctx": {
    "type": "function",
    "name": "mute",
    "string": "mute()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "fn",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "return",
     "types": [
      "Connection"
     ],
     "description": "this"
    }
   ],
   "description": {
    "full": "<p>Opens a connection to a MongoDB ReplicaSet.</p>\n\n<p>See description of <a href=\"#NativeConnection-doOpen\">doOpen</a> for server options. In this case <code>options.replset</code> is also passed to ReplSetServers.</p>",
    "summary": "<p>Opens a connection to a MongoDB ReplicaSet.</p>",
    "body": "<p>See description of <a href=\"#NativeConnection-doOpen\">doOpen</a> for server options. In this case <code>options.replset</code> is also passed to ReplSetServers.</p>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "NativeConnection.prototype.doOpenSet = function (fn) {\n  if (this.db) {\n    mute(this);\n  }\n\n  var servers = []\n    , self = this;\n\n  this.hosts.forEach(function (server) {\n    var host = server.host || server.ipc;\n    var port = server.port || 27017;\n    servers.push(new Server(host, port, self.options.server));\n  })\n\n  var server = this.options.mongos\n    ? new Mongos(servers, this.options.mongos)\n    : new ReplSetServers(servers, this.options.replset);\n  this.db = new Db(this.name, server, this.options.db);\n\n  this.db.on('fullsetup', function () {\n    self.emit('fullsetup')\n  });\n\n  this.db.open(function (err) {\n    if (err) return fn(err);\n    fn();\n    listen(self);\n  });\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "NativeConnection",
    "cons": "NativeConnection",
    "name": "doOpenSet",
    "string": "NativeConnection.prototype.doOpenSet()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "fn",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Connection"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Closes the connection</p>",
    "summary": "<p>Closes the connection</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "NativeConnection.prototype.doClose = function (fn) {\n  this.db.close();\n  if (fn) fn();\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "NativeConnection",
    "cons": "NativeConnection",
    "name": "doClose",
    "string": "NativeConnection.prototype.doClose()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "passed",
     "description": "options that were passed directly during connection"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[connStrOptions]",
     "description": "options that were passed in the connection string"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Prepares default connection options for the node-mongodb-native driver.</p>\n\n<p><em>NOTE: <code>passed</code> options take precedence over connection string options.</em></p>",
    "summary": "<p>Prepares default connection options for the node-mongodb-native driver.</p>",
    "body": "<p><em>NOTE: <code>passed</code> options take precedence over connection string options.</em></p>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "NativeConnection.prototype.parseOptions = function (passed, connStrOpts) {\n  var o = passed || {};\n  o.db || (o.db = {});\n  o.auth || (o.auth = {});\n  o.server || (o.server = {});\n  o.replset || (o.replset = {});\n  o.server.socketOptions || (o.server.socketOptions = {});\n  o.replset.socketOptions || (o.replset.socketOptions = {});\n\n  var opts = connStrOpts || {};\n  Object.keys(opts).forEach(function (name) {\n    switch (name) {\n      case 'ssl':\n      case 'poolSize':\n        if ('undefined' == typeof o.server[name]) {\n          o.server[name] = o.replset[name] = opts[name];\n        }\n        break;\n      case 'slaveOk':\n        if ('undefined' == typeof o.server.slave_ok) {\n          o.server.slave_ok = opts[name];\n        }\n        break;\n      case 'autoReconnect':\n        if ('undefined' == typeof o.server.auto_reconnect) {\n          o.server.auto_reconnect = opts[name];\n        }\n        break;\n      case 'socketTimeoutMS':\n      case 'connectTimeoutMS':\n        if ('undefined' == typeof o.server.socketOptions[name]) {\n          o.server.socketOptions[name] = o.replset.socketOptions[name] = opts[name];\n        }\n        break;\n      case 'authdb':\n        if ('undefined' == typeof o.auth.authdb) {\n          o.auth.authdb = opts[name];\n        }\n        break;\n      case 'authSource':\n        if ('undefined' == typeof o.auth.authSource) {\n          o.auth.authSource = opts[name];\n        }\n        break;\n      case 'retries':\n      case 'reconnectWait':\n      case 'rs_name':\n        if ('undefined' == typeof o.replset[name]) {\n          o.replset[name] = opts[name];\n        }\n        break;\n      case 'replicaSet':\n        if ('undefined' == typeof o.replset.rs_name) {\n          o.replset.rs_name = opts[name];\n        }\n        break;\n      case 'readSecondary':\n        if ('undefined' == typeof o.replset.read_secondary) {\n          o.replset.read_secondary = opts[name];\n        }\n        break;\n      case 'nativeParser':\n        if ('undefined' == typeof o.db.native_parser) {\n          o.db.native_parser = opts[name];\n        }\n        break;\n      case 'w':\n      case 'safe':\n      case 'fsync':\n      case 'journal':\n      case 'wtimeoutMS':\n        if ('undefined' == typeof o.db[name]) {\n          o.db[name] = opts[name];\n        }\n        break;\n      case 'readPreference':\n        if ('undefined' == typeof o.db.read_preference) {\n          o.db.read_preference = opts[name];\n        }\n        break;\n      case 'readPreferenceTags':\n        if ('undefined' == typeof o.db.read_preference_tags) {\n          o.db.read_preference_tags = opts[name];\n        }\n        break;\n    }\n  })\n\n  if (!('auto_reconnect' in o.server)) {\n    o.server.auto_reconnect = true;\n  }\n\n  if (!o.db.read_preference) {\n    // read from primaries by default\n    o.db.read_preference = 'primary';\n  }\n\n  // mongoose creates its own ObjectIds\n  o.db.forceServerObjectId = false;\n\n  // default safe using new nomenclature\n  if (!('journal' in o.db || 'j' in o.db ||\n        'fsync' in o.db || 'safe' in o.db || 'w' in o.db)) {\n    o.db.w = 1;\n  }\n\n  validate(o);\n  return o;\n}",
   "ctx": {
    "type": "method",
    "constructor": "NativeConnection",
    "cons": "NativeConnection",
    "name": "parseOptions",
    "string": "NativeConnection.prototype.parseOptions()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "o",
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Validates the driver db options.</p>",
    "summary": "<p>Validates the driver db options.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function validate (o) {\n  if (-1 === o.db.w || 0 === o.db.w) {\n    if (o.db.journal || o.db.fsync || o.db.safe) {\n      throw new Error(\n          'Invalid writeConcern: '\n        + 'w set to -1 or 0 cannot be combined with safe|fsync|journal');\n    }\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "validate",
    "string": "validate()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = NativeConnection;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "NativeConnection",
    "string": "module.exports"
   }
  }
 ],
 "drivers/node-mongodb-native/objectid": [
  {
   "tags": [
    {
     "type": "constructor",
     "string": "NodeMongoDbObjectId"
    },
    {
     "type": "see",
     "local": "ObjectId",
     "visibility": "ObjectId"
    }
   ],
   "description": {
    "full": "<p><a href=\"https://github.com/mongodb/node-mongodb-native\">node-mongodb-native</a> ObjectId</p>",
    "summary": "<p><a href=\"https://github.com/mongodb/node-mongodb-native\">node-mongodb-native</a> ObjectId</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "var ObjectId = require('mongodb/node_modules/bson').ObjectID;",
   "ctx": {
    "type": "declaration",
    "name": "ObjectId",
    "value": "require('mongodb/node_modules/bson').ObjectID",
    "string": "ObjectId"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>ignore</p>",
    "summary": "<p>ignore</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = exports = ObjectId;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "exports = ObjectId",
    "string": "module.exports"
   }
  }
 ],
 "drivers/SPEC": [
  {
   "tags": [],
   "description": {
    "full": "",
    "summary": "",
    "body": ""
   },
   "isPrivate": false,
   "code": "# Driver Spec\n\nTODO"
  }
 ],
 "error/browserMissingSchema": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var MongooseError = require('../error.js');",
   "ctx": {
    "type": "declaration",
    "name": "MongooseError",
    "value": "require('../error.js')",
    "string": "MongooseError"
   }
  },
  {
   "tags": [
    {
     "type": "inherits",
     "string": "MongooseError"
    }
   ],
   "description": {
    "full": "<p>MissingSchema Error constructor.</p>",
    "summary": "<p>MissingSchema Error constructor.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function MissingSchemaError (name) {\n  var msg = 'Schema hasn\\'t been registered for document.\\n'\n          + 'Use mongoose.Document(name, schema)';\n  MongooseError.call(this, msg);\n  Error.captureStackTrace && Error.captureStackTrace(this, arguments.callee);\n  this.name = 'MissingSchemaError';\n}",
   "ctx": {
    "type": "function",
    "name": "MissingSchemaError",
    "string": "MissingSchemaError()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from MongooseError.</p>",
    "summary": "<p>Inherits from MongooseError.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "MissingSchemaError.prototype = Object.create(MongooseError.prototype);\nMissingSchemaError.prototype.constructor = MongooseError;",
   "ctx": {
    "type": "property",
    "receiver": "MissingSchemaError",
    "name": "prototype",
    "value": "Object.create(MongooseError.prototype)",
    "string": "MissingSchemaError.prototype"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>exports</p>",
    "summary": "<p>exports</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = MissingSchemaError;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "MissingSchemaError",
    "string": "module.exports"
   }
  }
 ],
 "error/cast": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var MongooseError = require('../error.js');",
   "ctx": {
    "type": "declaration",
    "name": "MongooseError",
    "value": "require('../error.js')",
    "string": "MongooseError"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "type",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "MongooseError"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casting Error constructor.</p>",
    "summary": "<p>Casting Error constructor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function CastError (type, value, path) {\n  MongooseError.call(this, 'Cast to ' + type + ' failed for value \"' + value + '\" at path \"' + path + '\"');\n  Error.captureStackTrace && Error.captureStackTrace(this, arguments.callee);\n  this.name = 'CastError';\n  this.kind = type;\n  this.value = value;\n  this.path = path;\n};",
   "ctx": {
    "type": "function",
    "name": "CastError",
    "string": "CastError()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from MongooseError.</p>",
    "summary": "<p>Inherits from MongooseError.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "CastError.prototype = Object.create(MongooseError.prototype);\nCastError.prototype.constructor = MongooseError;",
   "ctx": {
    "type": "property",
    "receiver": "CastError",
    "name": "prototype",
    "value": "Object.create(MongooseError.prototype)",
    "string": "CastError.prototype"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>exports</p>",
    "summary": "<p>exports</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = CastError;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "CastError",
    "string": "module.exports"
   }
  }
 ],
 "error/divergentArray": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var MongooseError = require('../error.js');",
   "ctx": {
    "type": "declaration",
    "name": "MongooseError",
    "value": "require('../error.js')",
    "string": "MongooseError"
   }
  },
  {
   "tags": [
    {
     "type": "inherits",
     "string": "MongooseError"
    }
   ],
   "description": {
    "full": "<p>DivergentArrayError constructor.</p>",
    "summary": "<p>DivergentArrayError constructor.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function DivergentArrayError (paths) {\n  var msg = 'For your own good, using `document.save()` to update an array '\n          + 'which was selected using an $elemMatch projection OR '\n          + 'populated using skip, limit, query conditions, or exclusion of '\n          + 'the _id field when the operation results in a $pop or $set of '\n          + 'the entire array is not supported. The following '\n          + 'path(s) would have been modified unsafely:\\n'\n          + '  ' + paths.join('\\n  ') + '\\n'\n          + 'Use Model.update() to update these arrays instead.'\n          // TODO write up a docs page (FAQ) and link to it\n\n  MongooseError.call(this, msg);\n  Error.captureStackTrace && Error.captureStackTrace(this, arguments.callee);\n  this.name = 'DivergentArrayError';\n};",
   "ctx": {
    "type": "function",
    "name": "DivergentArrayError",
    "string": "DivergentArrayError()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from MongooseError.</p>",
    "summary": "<p>Inherits from MongooseError.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "DivergentArrayError.prototype = Object.create(MongooseError.prototype);\nDivergentArrayError.prototype.constructor = MongooseError;",
   "ctx": {
    "type": "property",
    "receiver": "DivergentArrayError",
    "name": "prototype",
    "value": "Object.create(MongooseError.prototype)",
    "string": "DivergentArrayError.prototype"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>exports</p>",
    "summary": "<p>exports</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = DivergentArrayError;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "DivergentArrayError",
    "string": "module.exports"
   }
  }
 ],
 "error/messages": [
  {
   "tags": [
    {
     "type": "property",
     "string": "messages"
    },
    {
     "type": "receiver",
     "string": "MongooseError"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The default built-in validator error messages. These may be customized.</p>\n\n<pre><code>// customize within each schema or globally like so\nvar mongoose = require('mongoose');\nmongoose.Error.messages.String.enum  = \"Your custom message for {PATH}.\";\n</code></pre>\n\n<p>As you might have noticed, error messages support basic templating</p>\n\n<ul>\n<li><code>{PATH}</code> is replaced with the invalid document path</li>\n<li><code>{VALUE}</code> is replaced with the invalid value</li>\n<li><code>{TYPE}</code> is replaced with the validator type such as \"regexp\", \"min\", or \"user defined\"</li>\n<li><code>{MIN}</code> is replaced with the declared min value for the Number.min validator</li>\n<li><code>{MAX}</code> is replaced with the declared max value for the Number.max validator</li>\n</ul>\n\n<p>Click the \"show code\" link below to see all defaults.</p>",
    "summary": "<p>The default built-in validator error messages. These may be customized.</p>",
    "body": "<pre><code>// customize within each schema or globally like so\nvar mongoose = require('mongoose');\nmongoose.Error.messages.String.enum  = \"Your custom message for {PATH}.\";\n</code></pre>\n\n<p>As you might have noticed, error messages support basic templating</p>\n\n<ul>\n<li><code>{PATH}</code> is replaced with the invalid document path</li>\n<li><code>{VALUE}</code> is replaced with the invalid value</li>\n<li><code>{TYPE}</code> is replaced with the validator type such as \"regexp\", \"min\", or \"user defined\"</li>\n<li><code>{MIN}</code> is replaced with the declared min value for the Number.min validator</li>\n<li><code>{MAX}</code> is replaced with the declared max value for the Number.max validator</li>\n</ul>\n\n<p>Click the \"show code\" link below to see all defaults.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var msg = module.exports = exports = {};\n\nmsg.general = {};\nmsg.general.default = \"Validator failed for path `{PATH}` with value `{VALUE}`\";\nmsg.general.required = \"Path `{PATH}` is required.\";\n\nmsg.Number = {};\nmsg.Number.min = \"Path `{PATH}` ({VALUE}) is less than minimum allowed value ({MIN}).\";\nmsg.Number.max = \"Path `{PATH}` ({VALUE}) is more than maximum allowed value ({MAX}).\";\n\nmsg.String = {};\nmsg.String.enum = \"`{VALUE}` is not a valid enum value for path `{PATH}`.\";\nmsg.String.match = \"Path `{PATH}` is invalid ({VALUE}).\";",
   "ctx": {
    "type": "declaration",
    "name": "msg",
    "value": "module.exports = exports = {}",
    "string": "msg"
   }
  }
 ],
 "error/missingSchema": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var MongooseError = require('../error.js');",
   "ctx": {
    "type": "declaration",
    "name": "MongooseError",
    "value": "require('../error.js')",
    "string": "MongooseError"
   }
  },
  {
   "tags": [
    {
     "type": "inherits",
     "string": "MongooseError"
    }
   ],
   "description": {
    "full": "<p>MissingSchema Error constructor.</p>",
    "summary": "<p>MissingSchema Error constructor.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function MissingSchemaError (name) {\n  var msg = 'Schema hasn\\'t been registered for model \"' + name + '\".\\n'\n          + 'Use mongoose.model(name, schema)';\n  MongooseError.call(this, msg);\n  Error.captureStackTrace && Error.captureStackTrace(this, arguments.callee);\n  this.name = 'MissingSchemaError';\n}",
   "ctx": {
    "type": "function",
    "name": "MissingSchemaError",
    "string": "MissingSchemaError()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from MongooseError.</p>",
    "summary": "<p>Inherits from MongooseError.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "MissingSchemaError.prototype = Object.create(MongooseError.prototype);\nMissingSchemaError.prototype.constructor = MongooseError;",
   "ctx": {
    "type": "property",
    "receiver": "MissingSchemaError",
    "name": "prototype",
    "value": "Object.create(MongooseError.prototype)",
    "string": "MissingSchemaError.prototype"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>exports</p>",
    "summary": "<p>exports</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = MissingSchemaError;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "MissingSchemaError",
    "string": "module.exports"
   }
  }
 ],
 "error/overwriteModel": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var MongooseError = require('../error.js');",
   "ctx": {
    "type": "declaration",
    "name": "MongooseError",
    "value": "require('../error.js')",
    "string": "MongooseError"
   }
  },
  {
   "tags": [
    {
     "type": "inherits",
     "string": "MongooseError"
    }
   ],
   "description": {
    "full": "<p>OverwriteModel Error constructor.</p>",
    "summary": "<p>OverwriteModel Error constructor.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function OverwriteModelError (name) {\n  MongooseError.call(this, 'Cannot overwrite `' + name + '` model once compiled.');\n  Error.captureStackTrace && Error.captureStackTrace(this, arguments.callee);\n  this.name = 'OverwriteModelError';\n};",
   "ctx": {
    "type": "function",
    "name": "OverwriteModelError",
    "string": "OverwriteModelError()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from MongooseError.</p>",
    "summary": "<p>Inherits from MongooseError.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "OverwriteModelError.prototype = Object.create(MongooseError.prototype);\nOverwriteModelError.prototype.constructor = MongooseError;",
   "ctx": {
    "type": "property",
    "receiver": "OverwriteModelError",
    "name": "prototype",
    "value": "Object.create(MongooseError.prototype)",
    "string": "OverwriteModelError.prototype"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>exports</p>",
    "summary": "<p>exports</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = OverwriteModelError;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "OverwriteModelError",
    "string": "module.exports"
   }
  }
 ],
 "error/validation": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module requirements</p>",
    "summary": "<p>Module requirements</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var MongooseError = require('../error.js')",
   "ctx": {
    "type": "declaration",
    "name": "MongooseError",
    "value": "require('../error.js')",
    "string": "MongooseError"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "param",
     "types": [
      "Document"
     ],
     "name": "instance",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "MongooseError"
    }
   ],
   "description": {
    "full": "<p>Document Validation Error</p>",
    "summary": "<p>Document Validation Error</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function ValidationError (instance) {\n  MongooseError.call(this, \"Validation failed\");\n  Error.captureStackTrace && Error.captureStackTrace(this, arguments.callee);\n  this.name = 'ValidationError';\n  this.errors = {};\n  if (instance) {\n    instance.errors = this.errors;\n  }\n};",
   "ctx": {
    "type": "function",
    "name": "ValidationError",
    "string": "ValidationError()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from MongooseError.</p>",
    "summary": "<p>Inherits from MongooseError.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "ValidationError.prototype = Object.create(MongooseError.prototype);\nValidationError.prototype.constructor = MongooseError;",
   "ctx": {
    "type": "property",
    "receiver": "ValidationError",
    "name": "prototype",
    "value": "Object.create(MongooseError.prototype)",
    "string": "ValidationError.prototype"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Console.log helper</p>",
    "summary": "<p>Console.log helper</p>",
    "body": ""
   },
   "ignore": false,
   "code": "ValidationError.prototype.toString = function () {\n  var ret = this.name + ': ';\n  var msgs = [];\n\n  Object.keys(this.errors).forEach(function (key) {\n    if (this == this.errors[key]) return;\n    msgs.push(String(this.errors[key]));\n  }, this)\n\n  return ret + msgs.join(', ');\n};",
   "ctx": {
    "type": "method",
    "constructor": "ValidationError",
    "cons": "ValidationError",
    "name": "toString",
    "string": "ValidationError.prototype.toString()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports</p>",
    "summary": "<p>Module exports</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = exports = ValidationError;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "exports = ValidationError",
    "string": "module.exports"
   }
  }
 ],
 "error/validator": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var MongooseError = require('../error.js');\nvar errorMessages = MongooseError.messages;",
   "ctx": {
    "type": "declaration",
    "name": "MongooseError",
    "value": "require('../error.js')",
    "string": "MongooseError"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "properties",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "MongooseError"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Schema validator error</p>",
    "summary": "<p>Schema validator error</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function ValidatorError (properties) {\n  var msg = properties.message;\n  if (!msg) {\n    msg = errorMessages.general.default;\n  }\n\n  this.properties = properties;\n  var message = this.formatMessage(msg, properties);\n  MongooseError.call(this, message);\n  Error.captureStackTrace && Error.captureStackTrace(this, arguments.callee);\n  this.name = 'ValidatorError';\n  this.kind = properties.type;\n  this.path = properties.path;\n  this.value = properties.value;\n};",
   "ctx": {
    "type": "function",
    "name": "ValidatorError",
    "string": "ValidatorError()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from MongooseError</p>",
    "summary": "<p>Inherits from MongooseError</p>",
    "body": ""
   },
   "ignore": true,
   "code": "ValidatorError.prototype = Object.create(MongooseError.prototype);\nValidatorError.prototype.constructor = MongooseError;",
   "ctx": {
    "type": "property",
    "receiver": "ValidatorError",
    "name": "prototype",
    "value": "Object.create(MongooseError.prototype)",
    "string": "ValidatorError.prototype"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Formats error messages</p>",
    "summary": "<p>Formats error messages</p>",
    "body": ""
   },
   "ignore": true,
   "code": "ValidatorError.prototype.formatMessage = function (msg, properties) {\n  var propertyNames = Object.keys(properties);\n  for (var i = 0; i < propertyNames.length; ++i) {\n    var propertyName = propertyNames[i];\n    if (propertyName === 'message') {\n      continue;\n    }\n    msg = msg.replace('{' + propertyName.toUpperCase() + '}', properties[propertyName]);\n  }\n  return msg;\n};",
   "ctx": {
    "type": "method",
    "constructor": "ValidatorError",
    "cons": "ValidatorError",
    "name": "formatMessage",
    "string": "ValidatorError.prototype.formatMessage()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>toString helper</p>",
    "summary": "<p>toString helper</p>",
    "body": ""
   },
   "ignore": true,
   "code": "ValidatorError.prototype.toString = function () {\n  return this.message;\n}",
   "ctx": {
    "type": "method",
    "constructor": "ValidatorError",
    "cons": "ValidatorError",
    "name": "toString",
    "string": "ValidatorError.prototype.toString()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>exports</p>",
    "summary": "<p>exports</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = ValidatorError;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "ValidatorError",
    "string": "module.exports"
   }
  }
 ],
 "error/version": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var MongooseError = require('../error.js');",
   "ctx": {
    "type": "declaration",
    "name": "MongooseError",
    "value": "require('../error.js')",
    "string": "MongooseError"
   }
  },
  {
   "tags": [
    {
     "type": "inherits",
     "string": "MongooseError"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Version Error constructor.</p>",
    "summary": "<p>Version Error constructor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function VersionError () {\n  MongooseError.call(this, 'No matching document found.');\n  Error.captureStackTrace && Error.captureStackTrace(this, arguments.callee);\n  this.name = 'VersionError';\n};",
   "ctx": {
    "type": "function",
    "name": "VersionError",
    "string": "VersionError()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from MongooseError.</p>",
    "summary": "<p>Inherits from MongooseError.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "VersionError.prototype = Object.create(MongooseError.prototype);\nVersionError.prototype.constructor = MongooseError;",
   "ctx": {
    "type": "property",
    "receiver": "VersionError",
    "name": "prototype",
    "value": "Object.create(MongooseError.prototype)",
    "string": "VersionError.prototype"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>exports</p>",
    "summary": "<p>exports</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = VersionError;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "VersionError",
    "string": "module.exports"
   }
  }
 ],
 "error": [
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "msg",
     "description": "Error message"
    },
    {
     "type": "inherits",
     "string": "Error https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error"
    }
   ],
   "description": {
    "full": "<p>MongooseError constructor</p>",
    "summary": "<p>MongooseError constructor</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function MongooseError (msg) {\n  Error.call(this);\n  Error.captureStackTrace && Error.captureStackTrace(this, arguments.callee);\n  this.message = msg;\n  this.name = 'MongooseError';\n};",
   "ctx": {
    "type": "function",
    "name": "MongooseError",
    "string": "MongooseError()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from Error.</p>",
    "summary": "<p>Inherits from Error.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "MongooseError.prototype = Object.create(Error.prototype);\nMongooseError.prototype.constructor = Error;",
   "ctx": {
    "type": "property",
    "receiver": "MongooseError",
    "name": "prototype",
    "value": "Object.create(Error.prototype)",
    "string": "MongooseError.prototype"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = exports = MongooseError;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "exports = MongooseError",
    "string": "module.exports"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "local": "Error.messages #error_messages_MongooseError-messages",
     "visibility": "Error.messages"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The default built-in validator error messages.</p>",
    "summary": "<p>The default built-in validator error messages.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "MongooseError.messages = require('./error/messages');\n\n// backward compat\nMongooseError.Messages = MongooseError.messages;",
   "ctx": {
    "type": "property",
    "receiver": "MongooseError",
    "name": "messages",
    "value": "require('./error/messages')",
    "string": "MongooseError.messages"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Expose subclasses</p>",
    "summary": "<p>Expose subclasses</p>",
    "body": ""
   },
   "ignore": true,
   "code": "MongooseError.CastError = require('./error/cast');\nMongooseError.ValidationError = require('./error/validation')\nMongooseError.ValidatorError = require('./error/validator')\nMongooseError.VersionError =require('./error/version')\nMongooseError.OverwriteModelError = require('./error/overwriteModel')\nMongooseError.MissingSchemaError = require('./error/missingSchema')\nMongooseError.DivergentArrayError = require('./error/divergentArray')",
   "ctx": {
    "type": "property",
    "receiver": "MongooseError",
    "name": "CastError",
    "value": "require('./error/cast')",
    "string": "MongooseError.CastError"
   }
  }
 ],
 "index": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var Schema = require('./schema')\n  , SchemaType = require('./schematype')\n  , VirtualType = require('./virtualtype')\n  , SchemaDefaults = require('./schemadefault')\n  , STATES = require('./connectionstate')\n  , Types = require('./types')\n  , Query = require('./query')\n  , Promise = require('./promise')\n  , Model = require('./model')\n  , Document = require('./document')\n  , utils = require('./utils')\n  , format = utils.toCollectionName\n  , mongodb = require('mongodb')\n  , pkg = require('../package.json')",
   "ctx": {
    "type": "declaration",
    "name": "Schema",
    "value": "require('./schema')",
    "string": "Schema"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Warn users if they are running an unstable release.</p>\n\n<p>Disable the warning by setting the MONGOOSE_DISABLE_STABILITY_WARNING<br />environment variable.</p>",
    "summary": "<p>Warn users if they are running an unstable release.</p>",
    "body": "<p>Disable the warning by setting the MONGOOSE_DISABLE_STABILITY_WARNING<br />environment variable.</p>"
   },
   "ignore": true,
   "code": "if (pkg.publishConfig && 'unstable' == pkg.publishConfig.tag) {\n  if (!process.env.MONGOOSE_DISABLE_STABILITY_WARNING) {\n    console.log('\\u001b[33m');\n    console.log('##############################################################');\n    console.log('#');\n    console.log('#   !!! MONGOOSE WARNING !!!');\n    console.log('#');\n    console.log('#   This is an UNSTABLE release of Mongoose.');\n    console.log('#   Unstable releases are available for preview/testing only.');\n    console.log('#   DO NOT run this in production.');\n    console.log('#');\n    console.log('##############################################################');\n    console.log('\\u001b[0m');\n  }\n}"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Mongoose constructor.</p>\n\n<p>The exports object of the <code>mongoose</code> module is an instance of this class.<br />Most apps will only use this one instance.</p>",
    "summary": "<p>Mongoose constructor.</p>",
    "body": "<p>The exports object of the <code>mongoose</code> module is an instance of this class.<br />Most apps will only use this one instance.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Mongoose () {\n  this.connections = [];\n  this.plugins = [];\n  this.models = {};\n  this.modelSchemas = {};\n  // default global options\n  this.options = {\n    pluralization: true\n  };\n  var conn = this.createConnection(); // default connection\n  conn.models = this.models;\n};",
   "ctx": {
    "type": "function",
    "name": "Mongoose",
    "string": "Mongoose()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Expose connection states for user-land</p>",
    "summary": "<p>Expose connection states for user-land</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongoose.prototype.STATES = STATES;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "STATES",
    "value": "STATES",
    "string": "Mongoose.prototype.STATES"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "key",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets mongoose options</p>\n\n<h4>Example:</h4>\n\n<pre><code>mongoose.set('test', value) // sets the 'test' option to `value`\n\nmongoose.set('debug', true) // enable logging collection methods + arguments to the console\n</code></pre>",
    "summary": "<p>Sets mongoose options</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>mongoose.set('test', value) // sets the 'test' option to `value`\n\nmongoose.set('debug', true) // enable logging collection methods + arguments to the console\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.set = function (key, value) {\n  if (arguments.length == 1) {\n    return this.options[key];\n  }\n\n  this.options[key] = value;\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "set",
    "string": "Mongoose.prototype.set()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "key",
     "description": ""
    },
    {
     "type": "method",
     "string": "get"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Gets mongoose options</p>\n\n<h4>Example:</h4>\n\n<pre><code>mongoose.get('test') // returns the 'test' value\n</code></pre>",
    "summary": "<p>Gets mongoose options</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>mongoose.get('test') // returns the 'test' value\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.get = Mongoose.prototype.set;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "get",
    "value": "Mongoose.prototype.set",
    "string": "Mongoose.prototype.get"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>ReplSet connection string check.</p>",
    "summary": "<p>ReplSet connection string check.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var rgxReplSet = /^.+,.+$/;",
   "ctx": {
    "type": "declaration",
    "name": "rgxReplSet",
    "value": "/^.+,.+$/",
    "string": "rgxReplSet"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[uri]",
     "description": "a mongodb:// URI"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "options to pass to the driver"
    },
    {
     "type": "see",
     "local": "Connection#open #connection_Connection-open",
     "visibility": "Connection#open"
    },
    {
     "type": "see",
     "local": "Connection#openSet #connection_Connection-openSet",
     "visibility": "Connection#openSet"
    },
    {
     "type": "return",
     "types": [
      "Connection"
     ],
     "description": "the created Connection object"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Creates a Connection instance.</p>\n\n<p>Each <code>connection</code> instance maps to a single database. This method is helpful when mangaging multiple db connections.</p>\n\n<p>If arguments are passed, they are proxied to either <a href=\"#connection_Connection-open\">Connection#open</a> or <a href=\"#connection_Connection-openSet\">Connection#openSet</a> appropriately. This means we can pass <code>db</code>, <code>server</code>, and <code>replset</code> options to the driver. <em>Note that the <code>safe</code> option specified in your schema will overwrite the <code>safe</code> db option specified here unless you set your schemas <code>safe</code> option to <code>undefined</code>. See <a href=\"/docs/guide.html#safe\">this</a> for more information.</em></p>\n\n<p><em>Options passed take precedence over options included in connection strings.</em></p>\n\n<h4>Example:</h4>\n\n<pre><code>// with mongodb:// URI\ndb = mongoose.createConnection('mongodb://user:pass@localhost:port/database');\n\n// and options\nvar opts = { db: { native_parser: true }}\ndb = mongoose.createConnection('mongodb://user:pass@localhost:port/database', opts);\n\n// replica sets\ndb = mongoose.createConnection('mongodb://user:pass@localhost:port/database,mongodb://anotherhost:port,mongodb://yetanother:port');\n\n// and options\nvar opts = { replset: { strategy: 'ping', rs_name: 'testSet' }}\ndb = mongoose.createConnection('mongodb://user:pass@localhost:port/database,mongodb://anotherhost:port,mongodb://yetanother:port', opts);\n\n// with [host, database_name[, port] signature\ndb = mongoose.createConnection('localhost', 'database', port)\n\n// and options\nvar opts = { server: { auto_reconnect: false }, user: 'username', pass: 'mypassword' }\ndb = mongoose.createConnection('localhost', 'database', port, opts)\n\n// initialize now, connect later\ndb = mongoose.createConnection();\ndb.open('localhost', 'database', port, [opts]);\n</code></pre>",
    "summary": "<p>Creates a Connection instance.</p>",
    "body": "<p>Each <code>connection</code> instance maps to a single database. This method is helpful when mangaging multiple db connections.</p>\n\n<p>If arguments are passed, they are proxied to either <a href=\"#connection_Connection-open\">Connection#open</a> or <a href=\"#connection_Connection-openSet\">Connection#openSet</a> appropriately. This means we can pass <code>db</code>, <code>server</code>, and <code>replset</code> options to the driver. <em>Note that the <code>safe</code> option specified in your schema will overwrite the <code>safe</code> db option specified here unless you set your schemas <code>safe</code> option to <code>undefined</code>. See <a href=\"/docs/guide.html#safe\">this</a> for more information.</em></p>\n\n<p><em>Options passed take precedence over options included in connection strings.</em></p>\n\n<h4>Example:</h4>\n\n<pre><code>// with mongodb:// URI\ndb = mongoose.createConnection('mongodb://user:pass@localhost:port/database');\n\n// and options\nvar opts = { db: { native_parser: true }}\ndb = mongoose.createConnection('mongodb://user:pass@localhost:port/database', opts);\n\n// replica sets\ndb = mongoose.createConnection('mongodb://user:pass@localhost:port/database,mongodb://anotherhost:port,mongodb://yetanother:port');\n\n// and options\nvar opts = { replset: { strategy: 'ping', rs_name: 'testSet' }}\ndb = mongoose.createConnection('mongodb://user:pass@localhost:port/database,mongodb://anotherhost:port,mongodb://yetanother:port', opts);\n\n// with [host, database_name[, port] signature\ndb = mongoose.createConnection('localhost', 'database', port)\n\n// and options\nvar opts = { server: { auto_reconnect: false }, user: 'username', pass: 'mypassword' }\ndb = mongoose.createConnection('localhost', 'database', port, opts)\n\n// initialize now, connect later\ndb = mongoose.createConnection();\ndb.open('localhost', 'database', port, [opts]);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.createConnection = function () {\n  var conn = new Connection(this);\n  this.connections.push(conn);\n\n  if (arguments.length) {\n    if (rgxReplSet.test(arguments[0])) {\n      conn.openSet.apply(conn, arguments);\n    } else {\n      conn.open.apply(conn, arguments);\n    }\n  }\n\n  return conn;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "createConnection",
    "string": "Mongoose.prototype.createConnection()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "uri(s)",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "see",
     "local": "Mongoose#createConnection #index_Mongoose-createConnection",
     "visibility": "Mongoose#createConnection"
    },
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "return",
     "types": [
      "Mongoose"
     ],
     "description": "this"
    }
   ],
   "description": {
    "full": "<p>Opens the default mongoose connection.</p>\n\n<p>If arguments are passed, they are proxied to either <a href=\"#connection_Connection-open\">Connection#open</a> or <a href=\"#connection_Connection-openSet\">Connection#openSet</a> appropriately.</p>\n\n<p><em>Options passed take precedence over options included in connection strings.</em></p>\n\n<h4>Example:</h4>\n\n<pre><code>mongoose.connect('mongodb://user:pass@localhost:port/database');\n\n// replica sets\nvar uri = 'mongodb://user:pass@localhost:port/database,mongodb://anotherhost:port,mongodb://yetanother:port';\nmongoose.connect(uri);\n\n// with options\nmongoose.connect(uri, options);\n\n// connecting to multiple mongos\nvar uri = 'mongodb://hostA:27501,hostB:27501';\nvar opts = { mongos: true };\nmongoose.connect(uri, opts);\n</code></pre>",
    "summary": "<p>Opens the default mongoose connection.</p>",
    "body": "<p>If arguments are passed, they are proxied to either <a href=\"#connection_Connection-open\">Connection#open</a> or <a href=\"#connection_Connection-openSet\">Connection#openSet</a> appropriately.</p>\n\n<p><em>Options passed take precedence over options included in connection strings.</em></p>\n\n<h4>Example:</h4>\n\n<pre><code>mongoose.connect('mongodb://user:pass@localhost:port/database');\n\n// replica sets\nvar uri = 'mongodb://user:pass@localhost:port/database,mongodb://anotherhost:port,mongodb://yetanother:port';\nmongoose.connect(uri);\n\n// with options\nmongoose.connect(uri, options);\n\n// connecting to multiple mongos\nvar uri = 'mongodb://hostA:27501,hostB:27501';\nvar opts = { mongos: true };\nmongoose.connect(uri, opts);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.connect = function () {\n  var conn = this.connection;\n\n  if (rgxReplSet.test(arguments[0])) {\n    conn.openSet.apply(conn, arguments);\n  } else {\n    conn.open.apply(conn, arguments);\n  }\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "connect",
    "string": "Mongoose.prototype.connect()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[fn]",
     "description": "called after all connection close."
    },
    {
     "type": "return",
     "types": [
      "Mongoose"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Disconnects all connections.</p>",
    "summary": "<p>Disconnects all connections.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.disconnect = function (fn) {\n  var count = this.connections.length\n    , error\n\n  this.connections.forEach(function(conn){\n    conn.close(function(err){\n      if (error) return;\n\n      if (err) {\n        error = err;\n        if (fn) return fn(err);\n        throw err;\n      }\n\n      if (fn)\n        --count || fn();\n    });\n  });\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "disconnect",
    "string": "Mongoose.prototype.disconnect()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": "model name"
    },
    {
     "type": "param",
     "types": [
      "Schema"
     ],
     "name": "[schema]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[collection]",
     "description": "name (optional, induced from model name)"
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "[skipInit]",
     "description": "whether to skip initialization (defaults to false)"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Defines a model or retrieves it.</p>\n\n<p>Models defined on the <code>mongoose</code> instance are available to all connection created by the same <code>mongoose</code> instance.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var mongoose = require('mongoose');\n\n// define an Actor model with this mongoose instance\nmongoose.model('Actor', new Schema({ name: String }));\n\n// create a new connection\nvar conn = mongoose.createConnection(..);\n\n// retrieve the Actor model\nvar Actor = conn.model('Actor');\n</code></pre>\n\n<p><em>When no <code>collection</code> argument is passed, Mongoose produces a collection name by passing the model <code>name</code> to the <a href=\"#utils_exports.toCollectionName\">utils.toCollectionName</a> method. This method pluralizes the name. If you don't like this behavior, either pass a collection name or set your schemas collection name option.</em></p>\n\n<h4>Example:</h4>\n\n<pre><code>var schema = new Schema({ name: String }, { collection: 'actor' });\n\n// or\n\nschema.set('collection', 'actor');\n\n// or\n\nvar collectionName = 'actor'\nvar M = mongoose.model('Actor', schema, collectionName)\n</code></pre>",
    "summary": "<p>Defines a model or retrieves it.</p>",
    "body": "<p>Models defined on the <code>mongoose</code> instance are available to all connection created by the same <code>mongoose</code> instance.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var mongoose = require('mongoose');\n\n// define an Actor model with this mongoose instance\nmongoose.model('Actor', new Schema({ name: String }));\n\n// create a new connection\nvar conn = mongoose.createConnection(..);\n\n// retrieve the Actor model\nvar Actor = conn.model('Actor');\n</code></pre>\n\n<p><em>When no <code>collection</code> argument is passed, Mongoose produces a collection name by passing the model <code>name</code> to the <a href=\"#utils_exports.toCollectionName\">utils.toCollectionName</a> method. This method pluralizes the name. If you don't like this behavior, either pass a collection name or set your schemas collection name option.</em></p>\n\n<h4>Example:</h4>\n\n<pre><code>var schema = new Schema({ name: String }, { collection: 'actor' });\n\n// or\n\nschema.set('collection', 'actor');\n\n// or\n\nvar collectionName = 'actor'\nvar M = mongoose.model('Actor', schema, collectionName)\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.model = function (name, schema, collection, skipInit) {\n  if ('string' == typeof schema) {\n    collection = schema;\n    schema = false;\n  }\n\n  if (utils.isObject(schema) && !(schema instanceof Schema)) {\n    schema = new Schema(schema);\n  }\n\n  if ('boolean' === typeof collection) {\n    skipInit = collection;\n    collection = null;\n  }\n\n  // handle internal options from connection.model()\n  var options;\n  if (skipInit && utils.isObject(skipInit)) {\n    options = skipInit;\n    skipInit = true;\n  } else {\n    options = {};\n  }\n\n  // look up schema for the collection. this might be a\n  // default schema like system.indexes stored in SchemaDefaults.\n  if (!this.modelSchemas[name]) {\n    if (!schema && name in SchemaDefaults) {\n      schema = SchemaDefaults[name];\n    }\n\n    if (schema) {\n      // cache it so we only apply plugins once\n      this.modelSchemas[name] = schema;\n      this._applyPlugins(schema);\n    } else {\n      throw new mongoose.Error.MissingSchemaError(name);\n    }\n  }\n\n  var model;\n  var sub;\n\n  // connection.model() may be passing a different schema for\n  // an existing model name. in this case don't read from cache.\n  if (this.models[name] && false !== options.cache) {\n    if (schema instanceof Schema && schema != this.models[name].schema) {\n      throw new mongoose.Error.OverwriteModelError(name);\n    }\n\n    if (collection) {\n      // subclass current model with alternate collection\n      model = this.models[name];\n      schema = model.prototype.schema;\n      sub = model.__subclass(this.connection, schema, collection);\n      // do not cache the sub model\n      return sub;\n    }\n\n    return this.models[name];\n  }\n\n  // ensure a schema exists\n  if (!schema) {\n    schema = this.modelSchemas[name];\n    if (!schema) {\n      throw new mongoose.Error.MissingSchemaError(name);\n    }\n  }\n\n  // Apply relevant \"global\" options to the schema\n  if (!('pluralization' in schema.options)) schema.options.pluralization = this.options.pluralization;\n\n\n  if (!collection) {\n    collection = schema.get('collection') || format(name, schema.options);\n  }\n\n  var connection = options.connection || this.connection;\n  model = Model.compile(name, schema, collection, connection, this);\n\n  if (!skipInit) {\n    model.init();\n  }\n\n  if (false === options.cache) {\n    return model;\n  }\n\n  return this.models[name] = model;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "model",
    "string": "Mongoose.prototype.model()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Returns an array of model names created on this instance of Mongoose.</p>\n\n<h4>Note:</h4>\n\n<p><em>Does not include names of models created using <code>connection.model()</code>.</em></p>",
    "summary": "<p>Returns an array of model names created on this instance of Mongoose.</p>",
    "body": "<h4>Note:</h4>\n\n<p><em>Does not include names of models created using <code>connection.model()</code>.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.modelNames = function () {\n  var names = Object.keys(this.models);\n  return names;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "modelNames",
    "string": "Mongoose.prototype.modelNames()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Schema"
     ],
     "name": "schema",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Applies global plugins to <code>schema</code>.</p>",
    "summary": "<p>Applies global plugins to <code>schema</code>.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Mongoose.prototype._applyPlugins = function (schema) {\n  for (var i = 0, l = this.plugins.length; i < l; i++) {\n    schema.plugin(this.plugins[i][0], this.plugins[i][1]);\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "_applyPlugins",
    "string": "Mongoose.prototype._applyPlugins()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "fn",
     "description": "plugin callback"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[opts]",
     "description": "optional options"
    },
    {
     "type": "return",
     "types": [
      "Mongoose"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "local": "plugins ./plugins.html",
     "visibility": "plugins"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Declares a global plugin executed on all Schemas.</p>\n\n<p>Equivalent to calling <code>.plugin(fn)</code> on each Schema you create.</p>",
    "summary": "<p>Declares a global plugin executed on all Schemas.</p>",
    "body": "<p>Equivalent to calling <code>.plugin(fn)</code> on each Schema you create.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.plugin = function (fn, opts) {\n  this.plugins.push([fn, opts]);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "plugin",
    "string": "Mongoose.prototype.plugin()"
   }
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "connection"
    },
    {
     "type": "return",
     "types": [
      "Connection"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The default connection of the mongoose module.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var mongoose = require('mongoose');\nmongoose.connect(...);\nmongoose.connection.on('error', cb);\n</code></pre>\n\n<p>This is the connection used by default for every model created using <a href=\"#index_Mongoose-model\">mongoose.model</a>.</p>",
    "summary": "<p>The default connection of the mongoose module.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var mongoose = require('mongoose');\nmongoose.connect(...);\nmongoose.connection.on('error', cb);\n</code></pre>\n\n<p>This is the connection used by default for every model created using <a href=\"#index_Mongoose-model\">mongoose.model</a>.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.__defineGetter__('connection', function(){\n  return this.connections[0];\n});"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Driver depentend APIs</p>",
    "summary": "<p>Driver depentend APIs</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var driver = global.MONGOOSE_DRIVER_PATH || './drivers/node-mongodb-native';",
   "ctx": {
    "type": "declaration",
    "name": "driver",
    "value": "global.MONGOOSE_DRIVER_PATH || './drivers/node-mongodb-native'",
    "string": "driver"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Connection</p>",
    "summary": "<p>Connection</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var Connection = require(driver + '/connection');",
   "ctx": {
    "type": "declaration",
    "name": "Connection",
    "value": "require(driver + '/connection')",
    "string": "Connection"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Collection</p>",
    "summary": "<p>Collection</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var Collection = require(driver + '/collection');",
   "ctx": {
    "type": "declaration",
    "name": "Collection",
    "value": "require(driver + '/collection')",
    "string": "Collection"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "Collection"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The Mongoose Collection constructor</p>",
    "summary": "<p>The Mongoose Collection constructor</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.Collection = Collection;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "Collection",
    "value": "Collection",
    "string": "Mongoose.prototype.Collection"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "Connection"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The Mongoose <a href=\"#connection_Connection\">Connection</a> constructor</p>",
    "summary": "<p>The Mongoose <a href=\"#connection_Connection\">Connection</a> constructor</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.Connection = Connection;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "Connection",
    "value": "Connection",
    "string": "Mongoose.prototype.Connection"
   }
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "version"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The Mongoose version</p>",
    "summary": "<p>The Mongoose version</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.version = pkg.version;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "version",
    "value": "pkg.version",
    "string": "Mongoose.prototype.version"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "Mongoose"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The Mongoose constructor</p>\n\n<p>The exports of the mongoose module is an instance of this class.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var mongoose = require('mongoose');\nvar mongoose2 = new mongoose.Mongoose();\n</code></pre>",
    "summary": "<p>The Mongoose constructor</p>",
    "body": "<p>The exports of the mongoose module is an instance of this class.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var mongoose = require('mongoose');\nvar mongoose2 = new mongoose.Mongoose();\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.Mongoose = Mongoose;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "Mongoose",
    "value": "Mongoose",
    "string": "Mongoose.prototype.Mongoose"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "Schema"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The Mongoose <a href=\"#schema_Schema\">Schema</a> constructor</p>\n\n<h4>Example:</h4>\n\n<pre><code>var mongoose = require('mongoose');\nvar Schema = mongoose.Schema;\nvar CatSchema = new Schema(..);\n</code></pre>",
    "summary": "<p>The Mongoose <a href=\"#schema_Schema\">Schema</a> constructor</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var mongoose = require('mongoose');\nvar Schema = mongoose.Schema;\nvar CatSchema = new Schema(..);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.Schema = Schema;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "Schema",
    "value": "Schema",
    "string": "Mongoose.prototype.Schema"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "SchemaType"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The Mongoose <a href=\"#schematype_SchemaType\">SchemaType</a> constructor</p>",
    "summary": "<p>The Mongoose <a href=\"#schematype_SchemaType\">SchemaType</a> constructor</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.SchemaType = SchemaType;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "SchemaType",
    "value": "SchemaType",
    "string": "Mongoose.prototype.SchemaType"
   }
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "SchemaTypes"
    },
    {
     "type": "see",
     "local": "Schema.SchemaTypes #schema_Schema.Types",
     "visibility": "Schema.SchemaTypes"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The various Mongoose SchemaTypes.</p>\n\n<h4>Note:</h4>\n\n<p><em>Alias of mongoose.Schema.Types for backwards compatibility.</em></p>",
    "summary": "<p>The various Mongoose SchemaTypes.</p>",
    "body": "<h4>Note:</h4>\n\n<p><em>Alias of mongoose.Schema.Types for backwards compatibility.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.SchemaTypes = Schema.Types;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "SchemaTypes",
    "value": "Schema.Types",
    "string": "Mongoose.prototype.SchemaTypes"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "VirtualType"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The Mongoose <a href=\"#virtualtype_VirtualType\">VirtualType</a> constructor</p>",
    "summary": "<p>The Mongoose <a href=\"#virtualtype_VirtualType\">VirtualType</a> constructor</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.VirtualType = VirtualType;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "VirtualType",
    "value": "VirtualType",
    "string": "Mongoose.prototype.VirtualType"
   }
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "Types"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The various Mongoose Types.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var mongoose = require('mongoose');\nvar array = mongoose.Types.Array;\n</code></pre>\n\n<h4>Types:</h4>\n\n<ul>\n<li><a href=\"#types-objectid-js\">ObjectId</a></li>\n<li><a href=\"#types-buffer-js\">Buffer</a></li>\n<li><a href=\"#types-embedded-js\">SubDocument</a></li>\n<li><a href=\"#types-array-js\">Array</a></li>\n<li><a href=\"#types-documentarray-js\">DocumentArray</a></li>\n</ul>\n\n<p>Using this exposed access to the <code>ObjectId</code> type, we can construct ids on demand.</p>\n\n<pre><code>var ObjectId = mongoose.Types.ObjectId;\nvar id1 = new ObjectId;\n</code></pre>",
    "summary": "<p>The various Mongoose Types.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var mongoose = require('mongoose');\nvar array = mongoose.Types.Array;\n</code></pre>\n\n<h4>Types:</h4>\n\n<ul>\n<li><a href=\"#types-objectid-js\">ObjectId</a></li>\n<li><a href=\"#types-buffer-js\">Buffer</a></li>\n<li><a href=\"#types-embedded-js\">SubDocument</a></li>\n<li><a href=\"#types-array-js\">Array</a></li>\n<li><a href=\"#types-documentarray-js\">DocumentArray</a></li>\n</ul>\n\n<p>Using this exposed access to the <code>ObjectId</code> type, we can construct ids on demand.</p>\n\n<pre><code>var ObjectId = mongoose.Types.ObjectId;\nvar id1 = new ObjectId;\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.Types = Types;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "Types",
    "value": "Types",
    "string": "Mongoose.prototype.Types"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "Query"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The Mongoose <a href=\"#query_Query\">Query</a> constructor.</p>",
    "summary": "<p>The Mongoose <a href=\"#query_Query\">Query</a> constructor.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.Query = Query;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "Query",
    "value": "Query",
    "string": "Mongoose.prototype.Query"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "Promise"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The Mongoose <a href=\"#promise_Promise\">Promise</a> constructor.</p>",
    "summary": "<p>The Mongoose <a href=\"#promise_Promise\">Promise</a> constructor.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.Promise = Promise;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "Promise",
    "value": "Promise",
    "string": "Mongoose.prototype.Promise"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "Model"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The Mongoose <a href=\"#model_Model\">Model</a> constructor.</p>",
    "summary": "<p>The Mongoose <a href=\"#model_Model\">Model</a> constructor.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.Model = Model;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "Model",
    "value": "Model",
    "string": "Mongoose.prototype.Model"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "Document"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The Mongoose <a href=\"#document-js\">Document</a> constructor.</p>",
    "summary": "<p>The Mongoose <a href=\"#document-js\">Document</a> constructor.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.Document = Document;",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "Document",
    "value": "Document",
    "string": "Mongoose.prototype.Document"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "Error"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The <a href=\"#error_MongooseError\">MongooseError</a> constructor.</p>",
    "summary": "<p>The <a href=\"#error_MongooseError\">MongooseError</a> constructor.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.Error = require('./error');",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "Error",
    "value": "require('./error')",
    "string": "Mongoose.prototype.Error"
   }
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "mongo"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The <a href=\"https://github.com/mongodb/node-mongodb-native\">node-mongodb-native</a> driver Mongoose uses.</p>",
    "summary": "<p>The <a href=\"https://github.com/mongodb/node-mongodb-native\">node-mongodb-native</a> driver Mongoose uses.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.mongo = require('mongodb');",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "mongo",
    "value": "require('mongodb')",
    "string": "Mongoose.prototype.mongo"
   }
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "mquery"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The <a href=\"https://github.com/aheckmann/mquery\">mquery</a> query builder Mongoose uses.</p>",
    "summary": "<p>The <a href=\"https://github.com/aheckmann/mquery\">mquery</a> query builder Mongoose uses.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongoose.prototype.mquery = require('mquery');",
   "ctx": {
    "type": "property",
    "constructor": "Mongoose",
    "cons": "Mongoose",
    "name": "mquery",
    "value": "require('mquery')",
    "string": "Mongoose.prototype.mquery"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The exports object is an instance of Mongoose.</p>",
    "summary": "<p>The exports object is an instance of Mongoose.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "var mongoose = module.exports = exports = new Mongoose;",
   "ctx": {
    "type": "declaration",
    "name": "mongoose",
    "value": "module.exports = exports = new Mongoose",
    "string": "mongoose"
   }
  }
 ],
 "internal": [
  {
   "tags": [],
   "description": {
    "full": "<p>Dependencies</p>",
    "summary": "<p>Dependencies</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var StateMachine = require('./statemachine')\nvar ActiveRoster = StateMachine.ctor('require', 'modify', 'init', 'default', 'ignore');\n\nmodule.exports = exports = InternalCache;\n\nfunction InternalCache () {\n  this.strictMode = undefined;\n  this.selected = undefined;\n  this.shardval = undefined;\n  this.saveError = undefined;\n  this.validationError = undefined;\n  this.adhocPaths = undefined;\n  this.removing = undefined;\n  this.inserting = undefined;\n  this.version = undefined;\n  this.getters = {};\n  this._id = undefined;\n  this.populate = undefined; // what we want to populate in this doc\n  this.populated = undefined;// the _ids that have been populated\n  this.wasPopulated = false; // if this doc was the result of a population\n  this.scope = undefined;\n  this.activePaths = new ActiveRoster;\n\n  // embedded docs\n  this.ownerDocument = undefined;\n  this.fullPath = undefined;\n}",
   "ctx": {
    "type": "declaration",
    "name": "StateMachine",
    "value": "require('./statemachine')",
    "string": "StateMachine"
   }
  }
 ],
 "model": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var Document = require('./document')\n  , MongooseArray = require('./types/array')\n  , MongooseDocumentArray = require('./types/documentarray')\n  , MongooseBuffer = require('./types/buffer')\n  , MongooseError = require('./error')\n  , VersionError = MongooseError.VersionError\n  , DivergentArrayError = MongooseError.DivergentArrayError\n  , Query = require('./query')\n  , Aggregate = require('./aggregate')\n  , Schema = require('./schema')\n  , Types = require('./schema/index')\n  , utils = require('./utils')\n  , hasOwnProperty = utils.object.hasOwnProperty\n  , isMongooseObject = utils.isMongooseObject\n  , EventEmitter = require('events').EventEmitter\n  , merge = utils.merge\n  , Promise = require('./promise')\n  , assert = require('assert')\n  , util = require('util')\n  , tick = utils.tick;\n\nvar VERSION_WHERE = 1\n  , VERSION_INC = 2\n  , VERSION_ALL = VERSION_WHERE | VERSION_INC;",
   "ctx": {
    "type": "declaration",
    "name": "Document",
    "value": "require('./document')",
    "string": "Document"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "values with which to create the document"
    },
    {
     "type": "inherits",
     "string": "Document"
    },
    {
     "type": "event",
     "string": "`error`: If listening to this event, it is emitted when a document was saved without passing a callback and an `error` occurred. If not listening, the event bubbles to the connection used to create this Model."
    },
    {
     "type": "event",
     "string": "`index`: Emitted after `Model#ensureIndexes` completes. If an error occurred it is passed with the event."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Model constructor</p>\n\n<p>Provides the interface to MongoDB collections as well as creates document instances.</p>",
    "summary": "<p>Model constructor</p>",
    "body": "<p>Provides the interface to MongoDB collections as well as creates document instances.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Model (doc, fields, skipId) {\n  Document.call(this, doc, fields, skipId);\n};",
   "ctx": {
    "type": "function",
    "name": "Model",
    "string": "Model()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from Document.</p>\n\n<p>All Model.prototype features are available on<br />top level (non-sub) documents.</p>",
    "summary": "<p>Inherits from Document.</p>",
    "body": "<p>All Model.prototype features are available on<br />top level (non-sub) documents.</p>"
   },
   "ignore": true,
   "code": "Model.prototype.__proto__ = Document.prototype;",
   "ctx": {
    "type": "property",
    "constructor": "Model",
    "cons": "Model",
    "name": "__proto__",
    "value": "Document.prototype",
    "string": "Model.prototype.__proto__"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "property",
     "string": "db"
    }
   ],
   "description": {
    "full": "<p>Connection the model uses.</p>",
    "summary": "<p>Connection the model uses.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.prototype.db;"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "property",
     "string": "collection"
    }
   ],
   "description": {
    "full": "<p>Collection the model uses.</p>",
    "summary": "<p>Collection the model uses.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.prototype.collection;"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "property",
     "string": "modelName"
    }
   ],
   "description": {
    "full": "<p>The name of the model</p>",
    "summary": "<p>The name of the model</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.prototype.modelName;\n\n\nModel.prototype.$__handleSave = function $__handleSave() {\n  var self = this;\n  var innerPromise = new Promise;\n  var options = {};\n  if (this.schema.options.safe) {\n    options.safe = this.schema.options.safe;\n  }\n\n  if (this.isNew) {\n    // send entire doc\n    var objectOptions = utils.clone(this.schema.options);\n    objectOptions.toObject = objectOptions.toObject || {};\n    objectOptions.toObject.depopulate = 1;\n    var obj = this.toObject(objectOptions.toObject);\n\n    if (!utils.object.hasOwnProperty(obj || {}, '_id')) {\n      // documents must have an _id else mongoose won't know\n      // what to update later if more changes are made. the user\n      // wouldn't know what _id was generated by mongodb either\n      // nor would the ObjectId generated my mongodb necessarily\n      // match the schema definition.\n      innerPromise.reject(new Error('document must have an _id before saving'));\n      return innerPromise;\n    }\n\n    this.$__version(true, obj);\n    this.collection.insert(obj, options, function (err, ret) {\n      innerPromise.resolve(err, ret);\n    });\n    this.$__reset();\n    this.isNew = false;\n    this.emit('isNew', false);\n    // Make it possible to retry the insert\n    this.$__.inserting = true;\n\n  } else {\n    // Make sure we don't treat it as a new object on error,\n    // since it already exists\n    this.$__.inserting = false;\n\n    var delta = this.$__delta();\n\n    if (delta) {\n      if (delta instanceof Error) {\n        innerPromise.reject(delta);\n        return innerPromise;\n      }\n      var where = this.$__where(delta[0]);\n      this.$__reset();\n      this.collection.update(where, delta[1], options, function (err, ret) {\n        innerPromise.resolve(err, ret);\n      });\n    } else {\n      this.$__reset();\n      innerPromise.fulfill(this);\n    }\n\n    this.emit('isNew', false);\n  }\n  return innerPromise;\n};"
  },
  {
   "tags": [
    {
     "type": "example:",
     "string": ""
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "",
     "string": "product.sold = Date.now();"
    },
    {
     "type": "",
     "string": "product.save(function (err, product, numberAffected) {"
    },
    {
     "type": "",
     "string": "if (err) .."
    },
    {
     "type": "",
     "string": "})"
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "description",
     "string": "The callback will receive three parameters, `err` if an error occurred, `product` which is the saved `product`, and `numberAffected` which will be 1 when the document was found and updated in the database, otherwise 0."
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "The",
     "string": "`fn` callback is optional. If no `fn` is passed and validation fails, the validation error will be emitted on the connection used to create this model."
    },
    {
     "type": "example:",
     "string": ""
    },
    {
     "type": "",
     "string": "var db = mongoose.createConnection(..);"
    },
    {
     "type": "",
     "string": "var schema = new Schema(..);"
    },
    {
     "type": "",
     "string": "var Product = db.model('Product', schema);"
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "",
     "string": "db.on('error', handleError);"
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "description",
     "string": "However, if you desire more local error handling you can add an `error` listener to the model and handle errors there instead."
    },
    {
     "type": "example:",
     "string": ""
    },
    {
     "type": "",
     "string": "Product.on('error', handleError);"
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "description",
     "string": "As an extra measure of flow control, save will return a Promise (bound to `fn` if passed) so it could be chained, or hook to recive errors"
    },
    {
     "type": "example:",
     "string": ""
    },
    {
     "type": "",
     "string": "product.save().then(function (product, numberAffected) {"
    },
    {
     "type": "",
     "string": "..."
    },
    {
     "type": "",
     "string": "}).onRejected(function (err) {"
    },
    {
     "type": "",
     "string": "assert.ok(err)"
    },
    {
     "type": "",
     "string": "})"
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "param",
     "types": [
      "function(err",
      ""
     ],
     "name": "product,",
     "description": "Number)} [fn] optional callback"
    },
    {
     "type": "retu",
     "string": "{Promise} Promise"
    },
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "see",
     "title": "middleware",
     "url": "http://mongoosejs.com/docs/middleware.html",
     "visibility": "http://mongoosejs.com/docs/middleware.html"
    }
   ],
   "description": {
    "full": "<p>@description Saves this document.</p>",
    "summary": "<p>@description Saves this document.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.prototype.save = function (fn) {\n  var self = this;\n  var finalPromise = new Promise(fn);\n\n  // Check for preSave errors\n  var preSaveErr = self.$__presaveValidate();\n  if (preSaveErr) {\n    finalPromise.reject(preSaveErr);\n    return finalPromise;\n  }\n\n  // Validate\n  var p0 = new Promise;\n  if (this.schema.options.validateBeforeSave) {\n    p0 = self.validate();\n  }\n\n  // Call save hooks on subdocs\n  var p1 = p0.all(function () {\n    var subDocs = self.$__getAllSubdocs();\n    return subDocs.map(function (d) {return d.save();});\n  });\n\n  // Handle save and resaults\n  p1\n    .then(this.$__handleSave.bind(this))\n    .then(function (result) {\n      self.$__storeShard();\n\n      var numAffected = 0;\n      if (result)\n        numAffected = (Array.isArray(result)) ? result.length : result;\n      // was this an update that required a version bump?\n      if (self.$__.version && !self.$__.inserting) {\n        var doIncrement = VERSION_INC === (VERSION_INC & self.$__.version);\n        self.$__.version = undefined;\n\n        if (numAffected <= 0) {\n          // the update failed. pass an error back\n          return finalPromise.reject(new VersionError);\n        }\n\n        // increment version if was successful\n        if (doIncrement) {\n          var key = self.schema.options.versionKey;\n          var version = self.getValue(key) | 0;\n          self.setValue(key, version + 1);\n        }\n      }\n\n      self.emit('save', self, numAffected);\n      return finalPromise.fulfill(self, numAffected);\n    }\n    , function (err) {\n      // If the initial insert fails provide a second chance.\n      // (If we did this all the time we would break updates)\n      if (self.$__.inserting) {\n        self.isNew = true;\n        self.emit('isNew', true);\n      }\n      finalPromise.reject(err);\n    })\n    .end();\n\n  return finalPromise;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Model",
    "cons": "Model",
    "name": "save",
    "string": "Model.prototype.save()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Document"
     ],
     "name": "self",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "where",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "delta",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "data",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Mixed"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[operation]",
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Apply the operation to the delta (update) clause as<br />well as track versioning for our where clause.</p>",
    "summary": "<p>Apply the operation to the delta (update) clause as<br />well as track versioning for our where clause.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function operand (self, where, delta, data, val, op) {\n  // delta\n  op || (op = '$set');\n  if (!delta[op]) delta[op] = {};\n  delta[op][data.path] = val;\n\n  // disabled versioning?\n  if (false === self.schema.options.versionKey) return;\n\n  // already marked for versioning?\n  if (VERSION_ALL === (VERSION_ALL & self.$__.version)) return;\n\n  switch (op) {\n    case '$set':\n    case '$unset':\n    case '$pop':\n    case '$pull':\n    case '$pullAll':\n    case '$push':\n    case '$pushAll':\n    case '$addToSet':\n      break;\n    default:\n      // nothing to do\n      return;\n  }\n\n  // ensure updates sent with positional notation are\n  // editing the correct array element.\n  // only increment the version if an array position changes.\n  // modifying elements of an array is ok if position does not change.\n\n  if ('$push' == op || '$pushAll' == op || '$addToSet' == op) {\n    self.$__.version = VERSION_INC;\n  }\n  else if (/^\\$p/.test(op)) {\n    // potentially changing array positions\n    self.increment();\n  }\n  else if (Array.isArray(val)) {\n    // $set an array\n    self.increment();\n  }\n  // now handling $set, $unset\n  else if (/\\.\\d+\\.|\\.\\d+$/.test(data.path)) {\n    // subpath of array\n    self.$__.version = VERSION_WHERE;\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "operand",
    "string": "operand()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Document"
     ],
     "name": "self",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "where",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "delta",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "data",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "value",
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Compiles an update and where clause for a <code>val</code> with _atomics.</p>",
    "summary": "<p>Compiles an update and where clause for a <code>val</code> with _atomics.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function handleAtomics (self, where, delta, data, value) {\n  if (delta.$set && delta.$set[data.path]) {\n    // $set has precedence over other atomics\n    return;\n  }\n\n  if ('function' == typeof value.$__getAtomics) {\n    value.$__getAtomics().forEach(function (atomic) {\n      var op = atomic[0];\n      var val = atomic[1];\n      operand(self, where, delta, data, val, op);\n    })\n    return;\n  }\n\n  // legacy support for plugins\n\n  var atomics = value._atomics\n    , ops = Object.keys(atomics)\n    , i = ops.length\n    , val\n    , op;\n\n  if (0 === i) {\n    // $set\n\n    if (isMongooseObject(value)) {\n      value = value.toObject({ depopulate: 1 });\n    } else if (value.valueOf) {\n      value = value.valueOf();\n    }\n\n    return operand(self, where, delta, data, value);\n  }\n\n  while (i--) {\n    op = ops[i];\n    val = atomics[op];\n\n    if (isMongooseObject(val)) {\n      val = val.toObject({ depopulate: 1 })\n    } else if (Array.isArray(val)) {\n      val = val.map(function (mem) {\n        return isMongooseObject(mem)\n          ? mem.toObject({ depopulate: 1 })\n          : mem;\n      })\n    } else if (val.valueOf) {\n      val = val.valueOf()\n    }\n\n    if ('$addToSet' === op)\n      val = { $each: val };\n\n    operand(self, where, delta, data, val, op);\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "handleAtomics",
    "string": "handleAtomics()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__delta"
    },
    {
     "type": "memberOf",
     "parent": "Model"
    }
   ],
   "description": {
    "full": "<p>Produces a special query document of the modified properties used in updates.</p>",
    "summary": "<p>Produces a special query document of the modified properties used in updates.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Model.prototype.$__delta = function () {\n  var dirty = this.$__dirty();\n  if (!dirty.length && VERSION_ALL != this.$__.version) return;\n\n  var where = {}\n    , delta = {}\n    , len = dirty.length\n    , divergent = []\n    , d = 0\n    , val\n    , obj\n\n  for (; d < len; ++d) {\n    var data = dirty[d]\n    var value = data.value\n    var schema = data.schema\n\n    var match = checkDivergentArray(this, data.path, value);\n    if (match) {\n      divergent.push(match);\n      continue;\n    }\n\n    if (divergent.length) continue;\n\n    if (undefined === value) {\n      operand(this, where, delta, data, 1, '$unset');\n\n    } else if (null === value) {\n      operand(this, where, delta, data, null);\n\n    } else if (value._path && value._atomics) {\n      // arrays and other custom types (support plugins etc)\n      handleAtomics(this, where, delta, data, value);\n\n    } else if (value._path && Buffer.isBuffer(value)) {\n      // MongooseBuffer\n      value = value.toObject();\n      operand(this, where, delta, data, value);\n\n    } else {\n      value = utils.clone(value, { depopulate: 1 });\n      operand(this, where, delta, data, value);\n    }\n  }\n\n  if (divergent.length) {\n    return new DivergentArrayError(divergent);\n  }\n\n  if (this.$__.version) {\n    this.$__version(where, delta);\n  }\n\n  return [where, delta];\n}",
   "ctx": {
    "type": "method",
    "constructor": "Model",
    "cons": "Model",
    "name": "$__delta",
    "string": "Model.prototype.$__delta()"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "",
     "url": "https://github.com/LearnBoost/mongoose/issues/1334",
     "visibility": "https://github.com/LearnBoost/mongoose/issues/1334"
    },
    {
     "type": "param",
     "types": [
      "Document"
     ],
     "name": "doc",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "String",
      "undefined"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Determine if array was populated with some form of filter and is now<br />being updated in a manner which could overwrite data unintentionally.</p>",
    "summary": "<p>Determine if array was populated with some form of filter and is now<br />being updated in a manner which could overwrite data unintentionally.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function checkDivergentArray (doc, path, array) {\n  // see if we populated this path\n  var pop = doc.populated(path, true);\n\n  if (!pop && doc.$__.selected) {\n    // If any array was selected using an $elemMatch projection, we deny the update.\n    // NOTE: MongoDB only supports projected $elemMatch on top level array.\n    var top = path.split('.')[0];\n    if (doc.$__.selected[top] && doc.$__.selected[top].$elemMatch) {\n      return top;\n    }\n  }\n\n  if (!(pop && array && array.isMongooseArray)) return;\n\n  // If the array was populated using options that prevented all\n  // documents from being returned (match, skip, limit) or they\n  // deselected the _id field, $pop and $set of the array are\n  // not safe operations. If _id was deselected, we do not know\n  // how to remove elements. $pop will pop off the _id from the end\n  // of the array in the db which is not guaranteed to be the\n  // same as the last element we have here. $set of the entire array\n  // would be similarily destructive as we never received all\n  // elements of the array and potentially would overwrite data.\n  var check = pop.options.match ||\n              pop.options.options && hasOwnProperty(pop.options.options, 'limit') || // 0 is not permitted\n              pop.options.options && pop.options.options.skip || // 0 is permitted\n              pop.options.select && // deselected _id?\n                (0 === pop.options.select._id ||\n                /\\s?-_id\\s?/.test(pop.options.select))\n\n  if (check) {\n    var atomics = array._atomics;\n    if (0 === Object.keys(atomics).length || atomics.$set || atomics.$pop) {\n      return path;\n    }\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "checkDivergentArray",
    "string": "checkDivergentArray()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__version"
    },
    {
     "type": "memberOf",
     "parent": "Model"
    }
   ],
   "description": {
    "full": "<p>Appends versioning to the where and update clauses.</p>",
    "summary": "<p>Appends versioning to the where and update clauses.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Model.prototype.$__version = function (where, delta) {\n  var key = this.schema.options.versionKey;\n\n  if (true === where) {\n    // this is an insert\n    if (key) this.setValue(key, delta[key] = 0);\n    return;\n  }\n\n  // updates\n\n  // only apply versioning if our versionKey was selected. else\n  // there is no way to select the correct version. we could fail\n  // fast here and force them to include the versionKey but\n  // thats a bit intrusive. can we do this automatically?\n  if (!this.isSelected(key)) {\n    return;\n  }\n\n  // $push $addToSet don't need the where clause set\n  if (VERSION_WHERE === (VERSION_WHERE & this.$__.version)) {\n    where[key] = this.getValue(key);\n  }\n\n  if (VERSION_INC === (VERSION_INC & this.$__.version)) {\n    if (!delta.$set || typeof delta.$set[key] === 'undefined') {\n      delta.$inc || (delta.$inc = {});\n      delta.$inc[key] = 1;\n    }\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "Model",
    "cons": "Model",
    "name": "$__version",
    "string": "Model.prototype.$__version()"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "versionKeys",
     "url": "http://mongoosejs.com/docs/guide.html#versionKey",
     "visibility": "http://mongoosejs.com/docs/guide.html#versionKey"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Signal that we desire an increment of this documents version.</p>\n\n<h4>Example:</h4>\n\n<pre><code>Model.findById(id, function (err, doc) {\n  doc.increment();\n  doc.save(function (err) { .. })\n})\n</code></pre>",
    "summary": "<p>Signal that we desire an increment of this documents version.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>Model.findById(id, function (err, doc) {\n  doc.increment();\n  doc.save(function (err) { .. })\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.prototype.increment = function increment () {\n  this.$__.version = VERSION_ALL;\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Model",
    "cons": "Model",
    "name": "increment",
    "string": "Model.prototype.increment()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__where"
    },
    {
     "type": "memberOf",
     "parent": "Model"
    }
   ],
   "description": {
    "full": "<p>Returns a query object which applies shardkeys if they exist.</p>",
    "summary": "<p>Returns a query object which applies shardkeys if they exist.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Model.prototype.$__where = function _where (where) {\n  where || (where = {});\n\n  var paths\n    , len\n\n  if (this.$__.shardval) {\n    paths = Object.keys(this.$__.shardval)\n    len = paths.length\n\n    for (var i = 0; i < len; ++i) {\n      where[paths[i]] = this.$__.shardval[paths[i]];\n    }\n  }\n\n  where._id = this._doc._id;\n  return where;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Model",
    "cons": "Model",
    "name": "$__where",
    "string": "Model.prototype.$__where()"
   }
  },
  {
   "tags": [
    {
     "type": "example:",
     "string": ""
    },
    {
     "type": "",
     "string": "product.remove(function (err, product) {"
    },
    {
     "type": "",
     "string": "if (err) return handleError(err);"
    },
    {
     "type": "",
     "string": "Product.findById(product._id, function (err, product) {"
    },
    {
     "type": "",
     "string": "console.log(product) // null"
    },
    {
     "type": "",
     "string": "})"
    },
    {
     "type": "",
     "string": "})"
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "description",
     "string": "As an extra measure of flow control, remove will return a Promise (bound to `fn` if passed) so it could be chained, or hooked to recive errors"
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "example",
     "string": ""
    },
    {
     "type": "",
     "string": "product.remove().then(function (product) {"
    },
    {
     "type": "",
     "string": "..."
    },
    {
     "type": "",
     "string": "}).onRejected(function (err) {"
    },
    {
     "type": "",
     "string": "assert.ok(err)"
    },
    {
     "type": "",
     "string": "})"
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "param",
     "types": [
      "function"
     ],
     "name": "(err,",
     "description": "product)} [fn] optional callback"
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": "Promise"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>@description Removes this document from the db.</p>",
    "summary": "<p>@description Removes this document from the db.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.prototype.remove = function remove (fn) {\n  if (this.$__.removing) {\n    this.$__.removing.onResolve(fn);\n    return this;\n  }\n\n  var promise = this.$__.removing = new Promise(fn)\n    , where = this.$__where()\n    , self = this\n    , options = {}\n\n  if (this.schema.options.safe) {\n    options.safe = this.schema.options.safe;\n  }\n\n  this.collection.remove(where, options, function (err) {\n    if (!err) {\n      self.emit('remove', self);\n    }\n    promise.resolve(err, self);\n  });\n\n  return promise;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Model",
    "cons": "Model",
    "name": "remove",
    "string": "Model.prototype.remove()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": "model name"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns another Model instance.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var doc = new Tank;\ndoc.model('User').findById(id, callback);\n</code></pre>",
    "summary": "<p>Returns another Model instance.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var doc = new Tank;\ndoc.model('User').findById(id, callback);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.prototype.model = function model (name) {\n  return this.db.model(name);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Model",
    "cons": "Model",
    "name": "model",
    "string": "Model.prototype.model()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": "discriminator model name"
    },
    {
     "type": "param",
     "types": [
      "Schema"
     ],
     "name": "schema",
     "description": "discriminator model schema"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Adds a discriminator type.</p>\n\n<h4>Example:</h4>\n\n<pre><code>function BaseSchema() {\n  Schema.apply(this, arguments);\n\n  this.add({\n    name: String,\n    createdAt: Date\n  });\n}\nutil.inherits(BaseSchema, Schema);\n\nvar PersonSchema = new BaseSchema();\nvar BossSchema = new BaseSchema({ department: String });\n\nvar Person = mongoose.model('Person', PersonSchema);\nvar Boss = Person.discriminator('Boss', BossSchema);\n</code></pre>",
    "summary": "<p>Adds a discriminator type.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>function BaseSchema() {\n  Schema.apply(this, arguments);\n\n  this.add({\n    name: String,\n    createdAt: Date\n  });\n}\nutil.inherits(BaseSchema, Schema);\n\nvar PersonSchema = new BaseSchema();\nvar BossSchema = new BaseSchema({ department: String });\n\nvar Person = mongoose.model('Person', PersonSchema);\nvar Boss = Person.discriminator('Boss', BossSchema);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.discriminator = function discriminator (name, schema) {\n  if (!(schema instanceof Schema)) {\n    throw new Error(\"You must pass a valid discriminator Schema\");\n  }\n\n  if (this.schema.discriminatorMapping && !this.schema.discriminatorMapping.isRoot) {\n    throw new Error(\"Discriminator \\\"\" + name + \"\\\" can only be a discriminator of the root model\");\n  }\n\n  var key = this.schema.options.discriminatorKey;\n  if (schema.path(key)) {\n    throw new Error(\"Discriminator \\\"\" + name + \"\\\" cannot have field with name \\\"\" + key + \"\\\"\");\n  }\n\n  // merges base schema into new discriminator schema and sets new type field.\n  (function mergeSchemas(schema, baseSchema) {\n    utils.merge(schema, baseSchema);\n\n    var obj = {};\n    obj[key] = { type: String, default: name };\n    schema.add(obj);\n    schema.discriminatorMapping = { key: key, value: name, isRoot: false };\n\n    if (baseSchema.options.collection) {\n      schema.options.collection = baseSchema.options.collection;\n    }\n\n      // throws error if options are invalid\n    (function validateOptions(a, b) {\n      a = utils.clone(a);\n      b = utils.clone(b);\n      delete a.toJSON;\n      delete a.toObject;\n      delete b.toJSON;\n      delete b.toObject;\n\n      if (!utils.deepEqual(a, b)) {\n        throw new Error(\"Discriminator options are not customizable (except toJSON & toObject)\");\n      }\n    })(schema.options, baseSchema.options);\n\n    var toJSON = schema.options.toJSON\n      , toObject = schema.options.toObject;\n\n    schema.options = utils.clone(baseSchema.options);\n    if (toJSON)   schema.options.toJSON = toJSON;\n    if (toObject) schema.options.toObject = toObject;\n\n    schema.callQueue = baseSchema.callQueue.concat(schema.callQueue);\n    schema._requiredpaths = undefined; // reset just in case Schema#requiredPaths() was called on either schema\n  })(schema, this.schema);\n\n  if (!this.discriminators) {\n    this.discriminators = {};\n  }\n\n  if (!this.schema.discriminatorMapping) {\n    this.schema.discriminatorMapping = { key: key, value: null, isRoot: true };\n  }\n\n  if (this.discriminators[name]) {\n    throw new Error(\"Discriminator with name \\\"\" + name + \"\\\" already exists\");\n  }\n\n  this.discriminators[name] = this.db.model(name, schema, this.collection.name);\n  this.discriminators[name].prototype.__proto__ = this.prototype;\n\n  return this.discriminators[name];\n};\n\n// Model (class) features",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "discriminator",
    "string": "Model.discriminator()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Give the constructor the ability to emit events.</p>",
    "summary": "<p>Give the constructor the ability to emit events.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "for (var i in EventEmitter.prototype)\n  Model[i] = EventEmitter.prototype[i];"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Called when the model compiles.</p>",
    "summary": "<p>Called when the model compiles.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Model.init = function init () {\n  if (this.schema.options.autoIndex) {\n    this.ensureIndexes();\n  }\n\n  this.schema.emit('init', this);\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "init",
    "string": "Model.init()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[cb]",
     "description": "optional callback"
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sends <code>ensureIndex</code> commands to mongo for each index declared in the schema.</p>\n\n<h4>Example:</h4>\n\n<pre><code>Event.ensureIndexes(function (err) {\n  if (err) return handleError(err);\n});\n</code></pre>\n\n<p>After completion, an <code>index</code> event is emitted on this <code>Model</code> passing an error if one occurred.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var eventSchema = new Schema({ thing: { type: 'string', unique: true }})\nvar Event = mongoose.model('Event', eventSchema);\n\nEvent.on('index', function (err) {\n  if (err) console.error(err); // error occurred during index creation\n})\n</code></pre>\n\n<p><em>NOTE: It is not recommended that you run this in production. Index creation may impact database performance depending on your load. Use with caution.</em></p>\n\n<p>The <code>ensureIndex</code> commands are not sent in parallel. This is to avoid the <code>MongoError: cannot add index with a background operation in progress</code> error. See <a href=\"https://github.com/LearnBoost/mongoose/issues/1365\">this ticket</a> for more information.</p>",
    "summary": "<p>Sends <code>ensureIndex</code> commands to mongo for each index declared in the schema.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>Event.ensureIndexes(function (err) {\n  if (err) return handleError(err);\n});\n</code></pre>\n\n<p>After completion, an <code>index</code> event is emitted on this <code>Model</code> passing an error if one occurred.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var eventSchema = new Schema({ thing: { type: 'string', unique: true }})\nvar Event = mongoose.model('Event', eventSchema);\n\nEvent.on('index', function (err) {\n  if (err) console.error(err); // error occurred during index creation\n})\n</code></pre>\n\n<p><em>NOTE: It is not recommended that you run this in production. Index creation may impact database performance depending on your load. Use with caution.</em></p>\n\n<p>The <code>ensureIndex</code> commands are not sent in parallel. This is to avoid the <code>MongoError: cannot add index with a background operation in progress</code> error. See <a href=\"https://github.com/LearnBoost/mongoose/issues/1365\">this ticket</a> for more information.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.ensureIndexes = function ensureIndexes (cb) {\n  var promise = new Promise(cb);\n\n  var indexes = this.schema.indexes();\n  if (!indexes.length) {\n    process.nextTick(promise.fulfill.bind(promise));\n    return promise;\n  }\n\n  // Indexes are created one-by-one to support how MongoDB < 2.4 deals\n  // with background indexes.\n\n  var self = this\n    , safe = self.schema.options.safe\n\n  function done (err) {\n    self.emit('index', err);\n    promise.resolve(err);\n  }\n\n  function create () {\n    var index = indexes.shift();\n    if (!index) return done();\n\n    var options = index[1];\n    options.safe = safe;\n    self.collection.ensureIndex(index[0], options, tick(function (err) {\n      if (err) return done(err);\n      create();\n    }));\n  }\n\n  create();\n  return promise;\n}",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "ensureIndexes",
    "string": "Model.ensureIndexes()"
   }
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "schema"
    },
    {
     "type": "receiver",
     "string": "Model"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Schema the model uses.</p>",
    "summary": "<p>Schema the model uses.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.schema;"
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "db"
    },
    {
     "type": "receiver",
     "string": "Model"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Connection instance the model uses.</p>",
    "summary": "<p>Connection instance the model uses.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "Model.db;"
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "collection"
    },
    {
     "type": "receiver",
     "string": "Model"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Collection the model uses.</p>",
    "summary": "<p>Collection the model uses.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "Model.collection;"
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "base"
    },
    {
     "type": "receiver",
     "string": "Model"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Base Mongoose instance the model uses.</p>",
    "summary": "<p>Base Mongoose instance the model uses.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.base;"
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "discriminators"
    },
    {
     "type": "receiver",
     "string": "Model"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Registered discriminators for this model.</p>",
    "summary": "<p>Registered discriminators for this model.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.discriminators;"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "conditions",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": "Promise"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Removes documents from the collection.</p>\n\n<h4>Example:</h4>\n\n<pre><code>Comment.remove({ title: 'baby born from alien father' }, function (err) {\n\n});\n</code></pre>\n\n<h4>Note:</h4>\n\n<p>To remove documents without waiting for a response from MongoDB, do not pass a <code>callback</code>, then call <code>exec</code> on the returned <a href=\"#query-js\">Query</a>:</p>\n\n<pre><code>var query = Comment.remove({ _id: id });\nquery.exec();\n</code></pre>\n\n<h4>Note:</h4>\n\n<p>This method sends a remove command directly to MongoDB, no Mongoose documents are involved. Because no Mongoose documents are involved, <em>no middleware (hooks) are executed</em>.</p>",
    "summary": "<p>Removes documents from the collection.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>Comment.remove({ title: 'baby born from alien father' }, function (err) {\n\n});\n</code></pre>\n\n<h4>Note:</h4>\n\n<p>To remove documents without waiting for a response from MongoDB, do not pass a <code>callback</code>, then call <code>exec</code> on the returned <a href=\"#query-js\">Query</a>:</p>\n\n<pre><code>var query = Comment.remove({ _id: id });\nquery.exec();\n</code></pre>\n\n<h4>Note:</h4>\n\n<p>This method sends a remove command directly to MongoDB, no Mongoose documents are involved. Because no Mongoose documents are involved, <em>no middleware (hooks) are executed</em>.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.remove = function remove (conditions, callback) {\n  if ('function' === typeof conditions) {\n    callback = conditions;\n    conditions = {};\n  }\n\n  // get the mongodb collection object\n  var mq = new Query(conditions, {}, this, this.collection);\n\n  return mq.remove(callback);\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "remove",
    "string": "Model.remove()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "conditions",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[fields]",
     "description": "optional fields to select"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "optional"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": ""
    },
    {
     "type": "see",
     "local": "field selection #query_Query-select",
     "visibility": "field"
    },
    {
     "type": "see",
     "local": "promise #promise-js",
     "visibility": "promise"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Finds documents</p>\n\n<p>The <code>conditions</code> are cast to their respective SchemaTypes before the command is sent.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>// named john and at least 18\nMyModel.find({ name: 'john', age: { $gte: 18 }});\n\n// executes immediately, passing results to callback\nMyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});\n\n// name LIKE john and only selecting the \"name\" and \"friends\" fields, executing immediately\nMyModel.find({ name: /john/i }, 'name friends', function (err, docs) { })\n\n// passing options\nMyModel.find({ name: /john/i }, null, { skip: 10 })\n\n// passing options and executing immediately\nMyModel.find({ name: /john/i }, null, { skip: 10 }, function (err, docs) {});\n\n// executing a query explicitly\nvar query = MyModel.find({ name: /john/i }, null, { skip: 10 })\nquery.exec(function (err, docs) {});\n\n// using the promise returned from executing a query\nvar query = MyModel.find({ name: /john/i }, null, { skip: 10 });\nvar promise = query.exec();\npromise.addBack(function (err, docs) {});\n</code></pre>",
    "summary": "<p>Finds documents</p>",
    "body": "<p>The <code>conditions</code> are cast to their respective SchemaTypes before the command is sent.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>// named john and at least 18\nMyModel.find({ name: 'john', age: { $gte: 18 }});\n\n// executes immediately, passing results to callback\nMyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});\n\n// name LIKE john and only selecting the \"name\" and \"friends\" fields, executing immediately\nMyModel.find({ name: /john/i }, 'name friends', function (err, docs) { })\n\n// passing options\nMyModel.find({ name: /john/i }, null, { skip: 10 })\n\n// passing options and executing immediately\nMyModel.find({ name: /john/i }, null, { skip: 10 }, function (err, docs) {});\n\n// executing a query explicitly\nvar query = MyModel.find({ name: /john/i }, null, { skip: 10 })\nquery.exec(function (err, docs) {});\n\n// using the promise returned from executing a query\nvar query = MyModel.find({ name: /john/i }, null, { skip: 10 });\nvar promise = query.exec();\npromise.addBack(function (err, docs) {});\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.find = function find (conditions, fields, options, callback) {\n  if ('function' == typeof conditions) {\n    callback = conditions;\n    conditions = {};\n    fields = null;\n    options = null;\n  } else if ('function' == typeof fields) {\n    callback = fields;\n    fields = null;\n    options = null;\n  } else if ('function' == typeof options) {\n    callback = options;\n    options = null;\n  }\n\n  // get the raw mongodb collection object\n  var mq = new Query({}, options, this, this.collection);\n  mq.select(fields);\n  if (this.schema.discriminatorMapping && mq.selectedInclusively()) {\n    mq.select(this.schema.options.discriminatorKey);\n  }\n\n  return mq.find(conditions, callback);\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "find",
    "string": "Model.find()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "ObjectId",
      "HexId"
     ],
     "name": "id",
     "description": "objectid, or a value that can be casted to one"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[fields]",
     "description": "optional fields to select"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "optional"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": ""
    },
    {
     "type": "see",
     "local": "field selection #query_Query-select",
     "visibility": "field"
    },
    {
     "type": "see",
     "local": "lean queries #query_Query-lean",
     "visibility": "lean"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Finds a single document by id.</p>\n\n<p>The <code>id</code> is cast based on the Schema before sending the command.</p>\n\n<h4>Example:</h4>\n\n<pre><code>// find adventure by id and execute immediately\nAdventure.findById(id, function (err, adventure) {});\n\n// same as above\nAdventure.findById(id).exec(callback);\n\n// select only the adventures name and length\nAdventure.findById(id, 'name length', function (err, adventure) {});\n\n// same as above\nAdventure.findById(id, 'name length').exec(callback);\n\n// include all properties except for `length`\nAdventure.findById(id, '-length').exec(function (err, adventure) {});\n\n// passing options (in this case return the raw js objects, not mongoose documents by passing `lean`\nAdventure.findById(id, 'name', { lean: true }, function (err, doc) {});\n\n// same as above\nAdventure.findById(id, 'name').lean().exec(function (err, doc) {});\n</code></pre>",
    "summary": "<p>Finds a single document by id.</p>",
    "body": "<p>The <code>id</code> is cast based on the Schema before sending the command.</p>\n\n<h4>Example:</h4>\n\n<pre><code>// find adventure by id and execute immediately\nAdventure.findById(id, function (err, adventure) {});\n\n// same as above\nAdventure.findById(id).exec(callback);\n\n// select only the adventures name and length\nAdventure.findById(id, 'name length', function (err, adventure) {});\n\n// same as above\nAdventure.findById(id, 'name length').exec(callback);\n\n// include all properties except for `length`\nAdventure.findById(id, '-length').exec(function (err, adventure) {});\n\n// passing options (in this case return the raw js objects, not mongoose documents by passing `lean`\nAdventure.findById(id, 'name', { lean: true }, function (err, doc) {});\n\n// same as above\nAdventure.findById(id, 'name').lean().exec(function (err, doc) {});\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.findById = function findById (id, fields, options, callback) {\n  return this.findOne({ _id: id }, fields, options, callback);\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "findById",
    "string": "Model.findById()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "conditions",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[fields]",
     "description": "optional fields to select"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "optional"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": ""
    },
    {
     "type": "see",
     "local": "field selection #query_Query-select",
     "visibility": "field"
    },
    {
     "type": "see",
     "local": "lean queries #query_Query-lean",
     "visibility": "lean"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Finds one document.</p>\n\n<p>The <code>conditions</code> are cast to their respective SchemaTypes before the command is sent.</p>\n\n<h4>Example:</h4>\n\n<pre><code>// find one iphone adventures - iphone adventures??\nAdventure.findOne({ type: 'iphone' }, function (err, adventure) {});\n\n// same as above\nAdventure.findOne({ type: 'iphone' }).exec(function (err, adventure) {});\n\n// select only the adventures name\nAdventure.findOne({ type: 'iphone' }, 'name', function (err, adventure) {});\n\n// same as above\nAdventure.findOne({ type: 'iphone' }, 'name').exec(function (err, adventure) {});\n\n// specify options, in this case lean\nAdventure.findOne({ type: 'iphone' }, 'name', { lean: true }, callback);\n\n// same as above\nAdventure.findOne({ type: 'iphone' }, 'name', { lean: true }).exec(callback);\n\n// chaining findOne queries (same as above)\nAdventure.findOne({ type: 'iphone' }).select('name').lean().exec(callback);\n</code></pre>",
    "summary": "<p>Finds one document.</p>",
    "body": "<p>The <code>conditions</code> are cast to their respective SchemaTypes before the command is sent.</p>\n\n<h4>Example:</h4>\n\n<pre><code>// find one iphone adventures - iphone adventures??\nAdventure.findOne({ type: 'iphone' }, function (err, adventure) {});\n\n// same as above\nAdventure.findOne({ type: 'iphone' }).exec(function (err, adventure) {});\n\n// select only the adventures name\nAdventure.findOne({ type: 'iphone' }, 'name', function (err, adventure) {});\n\n// same as above\nAdventure.findOne({ type: 'iphone' }, 'name').exec(function (err, adventure) {});\n\n// specify options, in this case lean\nAdventure.findOne({ type: 'iphone' }, 'name', { lean: true }, callback);\n\n// same as above\nAdventure.findOne({ type: 'iphone' }, 'name', { lean: true }).exec(callback);\n\n// chaining findOne queries (same as above)\nAdventure.findOne({ type: 'iphone' }).select('name').lean().exec(callback);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.findOne = function findOne (conditions, fields, options, callback) {\n  if ('function' == typeof options) {\n    callback = options;\n    options = null;\n  } else if ('function' == typeof fields) {\n    callback = fields;\n    fields = null;\n    options = null;\n  } else if ('function' == typeof conditions) {\n    callback = conditions;\n    conditions = {};\n    fields = null;\n    options = null;\n  }\n\n  // get the mongodb collection object\n  var mq = new Query({}, options, this, this.collection);\n  mq.select(fields);\n  if (this.schema.discriminatorMapping && mq.selectedInclusively()) {\n    mq.select(this.schema.options.discriminatorKey);\n  }\n\n  return mq.findOne(conditions, callback);\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "findOne",
    "string": "Model.findOne()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "conditions",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Counts number of matching documents in a database collection.</p>\n\n<h4>Example:</h4>\n\n<pre><code>Adventure.count({ type: 'jungle' }, function (err, count) {\n  if (err) ..\n  console.log('there are %d jungle adventures', count);\n});\n</code></pre>",
    "summary": "<p>Counts number of matching documents in a database collection.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>Adventure.count({ type: 'jungle' }, function (err, count) {\n  if (err) ..\n  console.log('there are %d jungle adventures', count);\n});\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.count = function count (conditions, callback) {\n  if ('function' === typeof conditions)\n    callback = conditions, conditions = {};\n\n  // get the mongodb collection object\n  var mq = new Query({}, {}, this, this.collection);\n\n  return mq.count(conditions, callback);\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "count",
    "string": "Model.count()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "field",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[conditions]",
     "description": "optional"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Creates a Query for a <code>distinct</code> operation.</p>\n\n<p>Passing a <code>callback</code> immediately executes the query.</p>\n\n<h4>Example</h4>\n\n<pre><code>Link.distinct('url', { clicks: {$gt: 100}}, function (err, result) {\n  if (err) return handleError(err);\n\n  assert(Array.isArray(result));\n  console.log('unique urls with more than 100 clicks', result);\n})\n\nvar query = Link.distinct('url');\nquery.exec(callback);\n</code></pre>",
    "summary": "<p>Creates a Query for a <code>distinct</code> operation.</p>",
    "body": "<p>Passing a <code>callback</code> immediately executes the query.</p>\n\n<h4>Example</h4>\n\n<pre><code>Link.distinct('url', { clicks: {$gt: 100}}, function (err, result) {\n  if (err) return handleError(err);\n\n  assert(Array.isArray(result));\n  console.log('unique urls with more than 100 clicks', result);\n})\n\nvar query = Link.distinct('url');\nquery.exec(callback);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.distinct = function distinct (field, conditions, callback) {\n  // get the mongodb collection object\n  var mq = new Query({}, {}, this, this.collection);\n\n  if ('function' == typeof conditions) {\n    callback = conditions;\n    conditions = {};\n  }\n\n  return mq.distinct(conditions, field, callback);\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "distinct",
    "string": "Model.distinct()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[val]",
     "description": "optional value"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Creates a Query, applies the passed conditions, and returns the Query.</p>\n\n<p>For example, instead of writing:</p>\n\n<pre><code>User.find({age: {$gte: 21, $lte: 65}}, callback);\n</code></pre>\n\n<p>we can instead write:</p>\n\n<pre><code>User.where('age').gte(21).lte(65).exec(callback);\n</code></pre>\n\n<p>Since the Query class also supports <code>where</code> you can continue chaining</p>\n\n<pre><code>User\n.where('age').gte(21).lte(65)\n.where('name', /^b/i)\n... etc\n</code></pre>",
    "summary": "<p>Creates a Query, applies the passed conditions, and returns the Query.</p>",
    "body": "<p>For example, instead of writing:</p>\n\n<pre><code>User.find({age: {$gte: 21, $lte: 65}}, callback);\n</code></pre>\n\n<p>we can instead write:</p>\n\n<pre><code>User.where('age').gte(21).lte(65).exec(callback);\n</code></pre>\n\n<p>Since the Query class also supports <code>where</code> you can continue chaining</p>\n\n<pre><code>User\n.where('age').gte(21).lte(65)\n.where('name', /^b/i)\n... etc\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.where = function where (path, val) {\n  // get the mongodb collection object\n  var mq = new Query({}, {}, this, this.collection).find({});\n  return mq.where.apply(mq, arguments);\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "where",
    "string": "Model.where()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String",
      "Function"
     ],
     "name": "argument",
     "description": "is a javascript string or anonymous function"
    },
    {
     "type": "method",
     "string": "$where"
    },
    {
     "type": "memberOf",
     "parent": "Model"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": ""
    },
    {
     "type": "see",
     "local": "Query.$where #query_Query-%24where",
     "visibility": "Query.$where"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Creates a <code>Query</code> and specifies a <code>$where</code> condition.</p>\n\n<p>Sometimes you need to query for things in mongodb using a JavaScript expression. You can do so via <code>find({ $where: javascript })</code>, or you can use the mongoose shortcut method $where via a Query chain or from your mongoose Model.</p>\n\n<pre><code>Blog.$where('this.comments.length &gt; 5').exec(function (err, docs) {});\n</code></pre>",
    "summary": "<p>Creates a <code>Query</code> and specifies a <code>$where</code> condition.</p>",
    "body": "<p>Sometimes you need to query for things in mongodb using a JavaScript expression. You can do so via <code>find({ $where: javascript })</code>, or you can use the mongoose shortcut method $where via a Query chain or from your mongoose Model.</p>\n\n<pre><code>Blog.$where('this.comments.length &gt; 5').exec(function (err, docs) {});\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.$where = function $where () {\n  var mq = new Query({}, {}, this, this.collection).find({});\n  return mq.$where.apply(mq, arguments);\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "$where",
    "string": "Model.$where()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[conditions]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[update]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": ""
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://www.mongodb.org/display/DOCS/findAndModify+Command",
     "visibility": "http://www.mongodb.org/display/DOCS/findAndModify+Command"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Issues a mongodb findAndModify update command.</p>\n\n<p>Finds a matching document, updates it according to the <code>update</code> arg, passing any <code>options</code>, and returns the found document (if any) to the callback. The query executes immediately if <code>callback</code> is passed else a Query object is returned.</p>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>new</code>: bool - true to return the modified document rather than the original. defaults to true</li>\n<li><code>upsert</code>: bool - creates the object if it doesn't exist. defaults to false.</li>\n<li><code>sort</code>: if multiple docs are found by the conditions, sets the sort order to choose which doc to update</li>\n<li><code>select</code>: sets the document fields to return</li>\n</ul>\n\n<h4>Examples:</h4>\n\n<pre><code>A.findOneAndUpdate(conditions, update, options, callback) // executes\nA.findOneAndUpdate(conditions, update, options)  // returns Query\nA.findOneAndUpdate(conditions, update, callback) // executes\nA.findOneAndUpdate(conditions, update)           // returns Query\nA.findOneAndUpdate()                             // returns Query\n</code></pre>\n\n<h4>Note:</h4>\n\n<p>All top level update keys which are not <code>atomic</code> operation names are treated as set operations:</p>\n\n<h4>Example:</h4>\n\n<pre><code>var query = { name: 'borne' };\nModel.findOneAndUpdate(query, { name: 'jason borne' }, options, callback)\n\n// is sent as\nModel.findOneAndUpdate(query, { $set: { name: 'jason borne' }}, options, callback)\n</code></pre>\n\n<p>This helps prevent accidentally overwriting your document with <code>{ name: 'jason borne' }</code>.</p>\n\n<h4>Note:</h4>\n\n<p>Although values are cast to their appropriate types when using the findAndModify helpers, the following are <em>not</em> applied:</p>\n\n<ul>\n<li>defaults</li>\n<li>setters</li>\n<li>validators</li>\n<li>middleware</li>\n</ul>\n\n<p>If you need those features, use the traditional approach of first retrieving the document.</p>\n\n<pre><code>Model.findOne({ name: 'borne' }, function (err, doc) {\n  if (err) ..\n  doc.name = 'jason borne';\n  doc.save(callback);\n})\n</code></pre>",
    "summary": "<p>Issues a mongodb findAndModify update command.</p>",
    "body": "<p>Finds a matching document, updates it according to the <code>update</code> arg, passing any <code>options</code>, and returns the found document (if any) to the callback. The query executes immediately if <code>callback</code> is passed else a Query object is returned.</p>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>new</code>: bool - true to return the modified document rather than the original. defaults to true</li>\n<li><code>upsert</code>: bool - creates the object if it doesn't exist. defaults to false.</li>\n<li><code>sort</code>: if multiple docs are found by the conditions, sets the sort order to choose which doc to update</li>\n<li><code>select</code>: sets the document fields to return</li>\n</ul>\n\n<h4>Examples:</h4>\n\n<pre><code>A.findOneAndUpdate(conditions, update, options, callback) // executes\nA.findOneAndUpdate(conditions, update, options)  // returns Query\nA.findOneAndUpdate(conditions, update, callback) // executes\nA.findOneAndUpdate(conditions, update)           // returns Query\nA.findOneAndUpdate()                             // returns Query\n</code></pre>\n\n<h4>Note:</h4>\n\n<p>All top level update keys which are not <code>atomic</code> operation names are treated as set operations:</p>\n\n<h4>Example:</h4>\n\n<pre><code>var query = { name: 'borne' };\nModel.findOneAndUpdate(query, { name: 'jason borne' }, options, callback)\n\n// is sent as\nModel.findOneAndUpdate(query, { $set: { name: 'jason borne' }}, options, callback)\n</code></pre>\n\n<p>This helps prevent accidentally overwriting your document with <code>{ name: 'jason borne' }</code>.</p>\n\n<h4>Note:</h4>\n\n<p>Although values are cast to their appropriate types when using the findAndModify helpers, the following are <em>not</em> applied:</p>\n\n<ul>\n<li>defaults</li>\n<li>setters</li>\n<li>validators</li>\n<li>middleware</li>\n</ul>\n\n<p>If you need those features, use the traditional approach of first retrieving the document.</p>\n\n<pre><code>Model.findOne({ name: 'borne' }, function (err, doc) {\n  if (err) ..\n  doc.name = 'jason borne';\n  doc.save(callback);\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.findOneAndUpdate = function (conditions, update, options, callback) {\n  if ('function' == typeof options) {\n    callback = options;\n    options = null;\n  }\n  else if (1 === arguments.length) {\n    if ('function' == typeof conditions) {\n      var msg = 'Model.findOneAndUpdate(): First argument must not be a function.\\n\\n'\n              + '  ' + this.modelName + '.findOneAndUpdate(conditions, update, options, callback)\\n'\n              + '  ' + this.modelName + '.findOneAndUpdate(conditions, update, options)\\n'\n              + '  ' + this.modelName + '.findOneAndUpdate(conditions, update)\\n'\n              + '  ' + this.modelName + '.findOneAndUpdate(update)\\n'\n              + '  ' + this.modelName + '.findOneAndUpdate()\\n';\n      throw new TypeError(msg)\n    }\n    update = conditions;\n    conditions = undefined;\n  }\n\n  var fields;\n  if (options && options.fields) {\n    fields = options.fields;\n    options.fields = undefined;\n  }\n\n  if (this.schema.options.versionKey && options && options.upsert) {\n    if (!update.$setOnInsert) {\n      update.$setOnInsert = {};\n    }\n    update.$setOnInsert[this.schema.options.versionKey] = 0;\n  }\n\n  var mq = new Query({}, {}, this, this.collection);\n  mq.select(fields);\n\n  return mq.findOneAndUpdate(conditions, update, options, callback);\n}",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "findOneAndUpdate",
    "string": "Model.findOneAndUpdate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "ObjectId",
      "HexId"
     ],
     "name": "id",
     "description": "an ObjectId or string that can be cast to one."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[update]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": ""
    },
    {
     "type": "see",
     "local": "Model.findOneAndUpdate #model_Model.findOneAndUpdate",
     "visibility": "Model.findOneAndUpdate"
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://www.mongodb.org/display/DOCS/findAndModify+Command",
     "visibility": "http://www.mongodb.org/display/DOCS/findAndModify+Command"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Issues a mongodb findAndModify update command by a documents id.</p>\n\n<p>Finds a matching document, updates it according to the <code>update</code> arg, passing any <code>options</code>, and returns the found document (if any) to the callback. The query executes immediately if <code>callback</code> is passed else a Query object is returned.</p>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>new</code>: bool - true to return the modified document rather than the original. defaults to true</li>\n<li><code>upsert</code>: bool - creates the object if it doesn't exist. defaults to false.</li>\n<li><code>sort</code>: if multiple docs are found by the conditions, sets the sort order to choose which doc to update</li>\n<li><code>select</code>: sets the document fields to return</li>\n</ul>\n\n<h4>Examples:</h4>\n\n<pre><code>A.findByIdAndUpdate(id, update, options, callback) // executes\nA.findByIdAndUpdate(id, update, options)  // returns Query\nA.findByIdAndUpdate(id, update, callback) // executes\nA.findByIdAndUpdate(id, update)           // returns Query\nA.findByIdAndUpdate()                     // returns Query\n</code></pre>\n\n<p>Finds a matching document, updates it according to the <code>update</code> arg, passing any <code>options</code>, and returns the found document (if any) to the callback. The query executes      immediately if <code>callback</code> is passed else a Query object is returned.</p>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>new</code>: bool - true to return the modified document rather than the original. defaults to true</li>\n<li><code>upsert</code>: bool - creates the object if it doesn't exist. defaults to false.</li>\n<li><code>sort</code>: if multiple docs are found by the conditions, sets the sort order to choose which doc to update</li>\n</ul>\n\n<h4>Note:</h4>\n\n<p>All top level update keys which are not <code>atomic</code> operation names are treated as set operations:</p>\n\n<h4>Example:</h4>\n\n<pre><code>Model.findByIdAndUpdate(id, { name: 'jason borne' }, options, callback)\n\n// is sent as\nModel.findByIdAndUpdate(id, { $set: { name: 'jason borne' }}, options, callback)\n</code></pre>\n\n<p>This helps prevent accidentally overwriting your document with <code>{ name: 'jason borne' }</code>.</p>\n\n<h4>Note:</h4>\n\n<p>Although values are cast to their appropriate types when using the findAndModify helpers, the following are <em>not</em> applied:</p>\n\n<ul>\n<li>defaults</li>\n<li>setters</li>\n<li>validators</li>\n<li>middleware</li>\n</ul>\n\n<p>If you need those features, use the traditional approach of first retrieving the document.</p>\n\n<pre><code>Model.findById(id, function (err, doc) {\n  if (err) ..\n  doc.name = 'jason borne';\n  doc.save(callback);\n})\n</code></pre>",
    "summary": "<p>Issues a mongodb findAndModify update command by a documents id.</p>",
    "body": "<p>Finds a matching document, updates it according to the <code>update</code> arg, passing any <code>options</code>, and returns the found document (if any) to the callback. The query executes immediately if <code>callback</code> is passed else a Query object is returned.</p>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>new</code>: bool - true to return the modified document rather than the original. defaults to true</li>\n<li><code>upsert</code>: bool - creates the object if it doesn't exist. defaults to false.</li>\n<li><code>sort</code>: if multiple docs are found by the conditions, sets the sort order to choose which doc to update</li>\n<li><code>select</code>: sets the document fields to return</li>\n</ul>\n\n<h4>Examples:</h4>\n\n<pre><code>A.findByIdAndUpdate(id, update, options, callback) // executes\nA.findByIdAndUpdate(id, update, options)  // returns Query\nA.findByIdAndUpdate(id, update, callback) // executes\nA.findByIdAndUpdate(id, update)           // returns Query\nA.findByIdAndUpdate()                     // returns Query\n</code></pre>\n\n<p>Finds a matching document, updates it according to the <code>update</code> arg, passing any <code>options</code>, and returns the found document (if any) to the callback. The query executes      immediately if <code>callback</code> is passed else a Query object is returned.</p>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>new</code>: bool - true to return the modified document rather than the original. defaults to true</li>\n<li><code>upsert</code>: bool - creates the object if it doesn't exist. defaults to false.</li>\n<li><code>sort</code>: if multiple docs are found by the conditions, sets the sort order to choose which doc to update</li>\n</ul>\n\n<h4>Note:</h4>\n\n<p>All top level update keys which are not <code>atomic</code> operation names are treated as set operations:</p>\n\n<h4>Example:</h4>\n\n<pre><code>Model.findByIdAndUpdate(id, { name: 'jason borne' }, options, callback)\n\n// is sent as\nModel.findByIdAndUpdate(id, { $set: { name: 'jason borne' }}, options, callback)\n</code></pre>\n\n<p>This helps prevent accidentally overwriting your document with <code>{ name: 'jason borne' }</code>.</p>\n\n<h4>Note:</h4>\n\n<p>Although values are cast to their appropriate types when using the findAndModify helpers, the following are <em>not</em> applied:</p>\n\n<ul>\n<li>defaults</li>\n<li>setters</li>\n<li>validators</li>\n<li>middleware</li>\n</ul>\n\n<p>If you need those features, use the traditional approach of first retrieving the document.</p>\n\n<pre><code>Model.findById(id, function (err, doc) {\n  if (err) ..\n  doc.name = 'jason borne';\n  doc.save(callback);\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.findByIdAndUpdate = function (id, update, options, callback) {\n  var args;\n\n  if (1 === arguments.length) {\n    if ('function' == typeof id) {\n      var msg = 'Model.findByIdAndUpdate(): First argument must not be a function.\\n\\n'\n                + '  ' + this.modelName + '.findByIdAndUpdate(id, callback)\\n'\n                + '  ' + this.modelName + '.findByIdAndUpdate(id)\\n'\n                + '  ' + this.modelName + '.findByIdAndUpdate()\\n';\n      throw new TypeError(msg)\n    }\n    return this.findOneAndUpdate({_id: id }, undefined);\n  }\n\n  args = utils.args(arguments, 1);\n\n  // if a model is passed in instead of an id\n  if (id && id._id) {\n    id = id._id;\n  }\n  if (id) {\n    args.unshift({ _id: id });\n  }\n  return this.findOneAndUpdate.apply(this, args);\n}",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "findByIdAndUpdate",
    "string": "Model.findByIdAndUpdate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "conditions",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": ""
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://www.mongodb.org/display/DOCS/findAndModify+Command",
     "visibility": "http://www.mongodb.org/display/DOCS/findAndModify+Command"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Issue a mongodb findAndModify remove command.</p>\n\n<p>Finds a matching document, removes it, passing the found document (if any) to the callback.</p>\n\n<p>Executes immediately if <code>callback</code> is passed else a Query object is returned.</p>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>sort</code>: if multiple docs are found by the conditions, sets the sort order to choose which doc to update</li>\n<li><code>select</code>: sets the document fields to return</li>\n</ul>\n\n<h4>Examples:</h4>\n\n<pre><code>A.findOneAndRemove(conditions, options, callback) // executes\nA.findOneAndRemove(conditions, options)  // return Query\nA.findOneAndRemove(conditions, callback) // executes\nA.findOneAndRemove(conditions) // returns Query\nA.findOneAndRemove()           // returns Query\n</code></pre>\n\n<p>Although values are cast to their appropriate types when using the findAndModify helpers, the following are <em>not</em> applied:</p>\n\n<ul>\n<li>defaults</li>\n<li>setters</li>\n<li>validators</li>\n<li>middleware</li>\n</ul>\n\n<p>If you need those features, use the traditional approach of first retrieving the document.</p>\n\n<pre><code>Model.findById(id, function (err, doc) {\n  if (err) ..\n  doc.remove(callback);\n})\n</code></pre>",
    "summary": "<p>Issue a mongodb findAndModify remove command.</p>",
    "body": "<p>Finds a matching document, removes it, passing the found document (if any) to the callback.</p>\n\n<p>Executes immediately if <code>callback</code> is passed else a Query object is returned.</p>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>sort</code>: if multiple docs are found by the conditions, sets the sort order to choose which doc to update</li>\n<li><code>select</code>: sets the document fields to return</li>\n</ul>\n\n<h4>Examples:</h4>\n\n<pre><code>A.findOneAndRemove(conditions, options, callback) // executes\nA.findOneAndRemove(conditions, options)  // return Query\nA.findOneAndRemove(conditions, callback) // executes\nA.findOneAndRemove(conditions) // returns Query\nA.findOneAndRemove()           // returns Query\n</code></pre>\n\n<p>Although values are cast to their appropriate types when using the findAndModify helpers, the following are <em>not</em> applied:</p>\n\n<ul>\n<li>defaults</li>\n<li>setters</li>\n<li>validators</li>\n<li>middleware</li>\n</ul>\n\n<p>If you need those features, use the traditional approach of first retrieving the document.</p>\n\n<pre><code>Model.findById(id, function (err, doc) {\n  if (err) ..\n  doc.remove(callback);\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.findOneAndRemove = function (conditions, options, callback) {\n  if (1 === arguments.length && 'function' == typeof conditions) {\n    var msg = 'Model.findOneAndRemove(): First argument must not be a function.\\n\\n'\n              + '  ' + this.modelName + '.findOneAndRemove(conditions, callback)\\n'\n              + '  ' + this.modelName + '.findOneAndRemove(conditions)\\n'\n              + '  ' + this.modelName + '.findOneAndRemove()\\n';\n    throw new TypeError(msg)\n  }\n\n  if ('function' == typeof options) {\n    callback = options;\n    options = undefined;\n  }\n\n  var fields;\n  if (options) {\n    fields = options.select;\n    options.select = undefined;\n  }\n\n  var mq = new Query({}, {}, this, this.collection);\n  mq.select(fields);\n\n  return mq.findOneAndRemove(conditions, options, callback);\n}",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "findOneAndRemove",
    "string": "Model.findOneAndRemove()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "ObjectId",
      "HexString"
     ],
     "name": "id",
     "description": "ObjectId or string that can be cast to one"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": ""
    },
    {
     "type": "see",
     "local": "Model.findOneAndRemove #model_Model.findOneAndRemove",
     "visibility": "Model.findOneAndRemove"
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://www.mongodb.org/display/DOCS/findAndModify+Command",
     "visibility": "http://www.mongodb.org/display/DOCS/findAndModify+Command"
    }
   ],
   "description": {
    "full": "<p>Issue a mongodb findAndModify remove command by a documents id.</p>\n\n<p>Finds a matching document, removes it, passing the found document (if any) to the callback.</p>\n\n<p>Executes immediately if <code>callback</code> is passed, else a <code>Query</code> object is returned.</p>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>sort</code>: if multiple docs are found by the conditions, sets the sort order to choose which doc to update</li>\n<li><code>select</code>: sets the document fields to return</li>\n</ul>\n\n<h4>Examples:</h4>\n\n<pre><code>A.findByIdAndRemove(id, options, callback) // executes\nA.findByIdAndRemove(id, options)  // return Query\nA.findByIdAndRemove(id, callback) // executes\nA.findByIdAndRemove(id) // returns Query\nA.findByIdAndRemove()           // returns Query\n</code></pre>",
    "summary": "<p>Issue a mongodb findAndModify remove command by a documents id.</p>",
    "body": "<p>Finds a matching document, removes it, passing the found document (if any) to the callback.</p>\n\n<p>Executes immediately if <code>callback</code> is passed, else a <code>Query</code> object is returned.</p>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>sort</code>: if multiple docs are found by the conditions, sets the sort order to choose which doc to update</li>\n<li><code>select</code>: sets the document fields to return</li>\n</ul>\n\n<h4>Examples:</h4>\n\n<pre><code>A.findByIdAndRemove(id, options, callback) // executes\nA.findByIdAndRemove(id, options)  // return Query\nA.findByIdAndRemove(id, callback) // executes\nA.findByIdAndRemove(id) // returns Query\nA.findByIdAndRemove()           // returns Query\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.findByIdAndRemove = function (id, options, callback) {\n  if (1 === arguments.length && 'function' == typeof id) {\n    var msg = 'Model.findByIdAndRemove(): First argument must not be a function.\\n\\n'\n              + '  ' + this.modelName + '.findByIdAndRemove(id, callback)\\n'\n              + '  ' + this.modelName + '.findByIdAndRemove(id)\\n'\n              + '  ' + this.modelName + '.findByIdAndRemove()\\n';\n    throw new TypeError(msg)\n  }\n\n  return this.findOneAndRemove({ _id: id }, options, callback);\n}",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "findByIdAndRemove",
    "string": "Model.findByIdAndRemove()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Array",
      "Object..."
     ],
     "name": "doc(s)",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[fn]",
     "description": "callback"
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Shortcut for creating a new Document that is automatically saved to the db if valid.</p>\n\n<h4>Example:</h4>\n\n<pre><code>// pass individual docs\nCandy.create({ type: 'jelly bean' }, { type: 'snickers' }, function (err, jellybean, snickers) {\n  if (err) // ...\n});\n\n// pass an array\nvar array = [{ type: 'jelly bean' }, { type: 'snickers' }];\nCandy.create(array, function (err, jellybean, snickers) {\n  if (err) // ...\n});\n\n// callback is optional; use the returned promise if you like:\nvar promise = Candy.create({ type: 'jawbreaker' });\npromise.then(function (jawbreaker) {\n  // ...\n})\n</code></pre>",
    "summary": "<p>Shortcut for creating a new Document that is automatically saved to the db if valid.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>// pass individual docs\nCandy.create({ type: 'jelly bean' }, { type: 'snickers' }, function (err, jellybean, snickers) {\n  if (err) // ...\n});\n\n// pass an array\nvar array = [{ type: 'jelly bean' }, { type: 'snickers' }];\nCandy.create(array, function (err, jellybean, snickers) {\n  if (err) // ...\n});\n\n// callback is optional; use the returned promise if you like:\nvar promise = Candy.create({ type: 'jawbreaker' });\npromise.then(function (jawbreaker) {\n  // ...\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.create = function create (doc, fn) {\n  var args\n    , cb\n\n  if (Array.isArray(doc)) {\n    args = doc;\n    cb = fn;\n  } else {\n    var last = arguments[arguments.length - 1];\n    if ('function' == typeof last) {\n      cb = last;\n      args = utils.args(arguments, 0, arguments.length - 1);\n    } else {\n      args = utils.args(arguments);\n    }\n  }\n\n  var p1 = new Promise\n    , ModelConstructor = this\n\n  var retPromise = p1.all(function () {\n    return args.map(function (arg) {return new ModelConstructor(arg).save();})\n  });\n\n  // This hack is so we can get the docs in a splat\n  var promise = new Promise(cb);\n  retPromise.then(function (docs) {\n    promise.fulfill.apply(promise, docs);\n  }, cb);\n\n  p1.fulfill();\n  return promise;\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "create",
    "string": "Model.create()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Document"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Shortcut for creating a new Document from existing raw data, pre-saved in the DB.<br />The document returned has no paths marked as modified initially.</p>\n\n<h4>Example:</h4>\n\n<pre><code>// hydrate previous data into a Mongoose document\nvar mongooseCandy = Candy.hydrate({ _id: '54108337212ffb6d459f854c', type: 'jelly bean' });\n</code></pre>",
    "summary": "<p>Shortcut for creating a new Document from existing raw data, pre-saved in the DB.<br />The document returned has no paths marked as modified initially.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>// hydrate previous data into a Mongoose document\nvar mongooseCandy = Candy.hydrate({ _id: '54108337212ffb6d459f854c', type: 'jelly bean' });\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.hydrate = function (obj) {\n  var doc = this(obj);\n  doc.$__reset();\n  doc.isNew = false;\n  return doc;\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "hydrate",
    "string": "Model.hydrate()"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "strict",
     "url": "http://mongoosejs.com/docs/guide.html#strict",
     "visibility": "http://mongoosejs.com/docs/guide.html#strict"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "conditions",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Updates documents in the database without returning them.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>MyModel.update({ age: { $gt: 18 } }, { oldEnough: true }, fn);\nMyModel.update({ name: 'Tobi' }, { ferret: true }, { multi: true }, function (err, numberAffected, raw) {\n  if (err) return handleError(err);\n  console.log('The number of updated documents was %d', numberAffected);\n  console.log('The raw response from Mongo was ', raw);\n});\n</code></pre>\n\n<h4>Valid options:</h4>\n\n<ul>\n<li><code>safe</code> (boolean) safe mode (defaults to value set in schema (true))</li>\n<li><code>upsert</code> (boolean) whether to create the doc if it doesn't match (false)</li>\n<li><code>multi</code> (boolean) whether multiple documents should be updated (false)</li>\n<li><code>strict</code> (boolean) overrides the <code>strict</code> option for this update</li>\n<li><code>overwrite</code> (boolean) disables update-only mode, allowing you to overwrite the doc (false)</li>\n</ul>\n\n<p>All <code>update</code> values are cast to their appropriate SchemaTypes before being sent.</p>\n\n<p>The <code>callback</code> function receives <code>(err, numberAffected, rawResponse)</code>.</p>\n\n<ul>\n<li><code>err</code> is the error if any occurred</li>\n<li><code>numberAffected</code> is the count of updated documents Mongo reported</li>\n<li><code>rawResponse</code> is the full response from Mongo</li>\n</ul>\n\n<h4>Note:</h4>\n\n<p>All top level keys which are not <code>atomic</code> operation names are treated as set operations:</p>\n\n<h4>Example:</h4>\n\n<pre><code>var query = { name: 'borne' };\nModel.update(query, { name: 'jason borne' }, options, callback)\n\n// is sent as\nModel.update(query, { $set: { name: 'jason borne' }}, options, callback)\n// if overwrite option is false. If overwrite is true, sent without the $set wrapper.\n</code></pre>\n\n<p>This helps prevent accidentally overwriting all documents in your collection with <code>{ name: 'jason borne' }</code>.</p>\n\n<h4>Note:</h4>\n\n<p>Be careful to not use an existing model instance for the update clause (this won't work and can cause weird behavior like infinite loops). Also, ensure that the update clause does not have an _id property, which causes Mongo to return a \"Mod on _id not allowed\" error.</p>\n\n<h4>Note:</h4>\n\n<p>To update documents without waiting for a response from MongoDB, do not pass a <code>callback</code>, then call <code>exec</code> on the returned <a href=\"#query-js\">Query</a>:</p>\n\n<pre><code>Comment.update({ _id: id }, { $set: { text: 'changed' }}).exec();\n</code></pre>\n\n<h4>Note:</h4>\n\n<p>Although values are casted to their appropriate types when using update, the following are <em>not</em> applied:</p>\n\n<ul>\n<li>defaults</li>\n<li>setters</li>\n<li>validators</li>\n<li>middleware</li>\n</ul>\n\n<p>If you need those features, use the traditional approach of first retrieving the document.</p>\n\n<pre><code>Model.findOne({ name: 'borne' }, function (err, doc) {\n  if (err) ..\n  doc.name = 'jason borne';\n  doc.save(callback);\n})\n</code></pre>",
    "summary": "<p>Updates documents in the database without returning them.</p>",
    "body": "<h4>Examples:</h4>\n\n<pre><code>MyModel.update({ age: { $gt: 18 } }, { oldEnough: true }, fn);\nMyModel.update({ name: 'Tobi' }, { ferret: true }, { multi: true }, function (err, numberAffected, raw) {\n  if (err) return handleError(err);\n  console.log('The number of updated documents was %d', numberAffected);\n  console.log('The raw response from Mongo was ', raw);\n});\n</code></pre>\n\n<h4>Valid options:</h4>\n\n<ul>\n<li><code>safe</code> (boolean) safe mode (defaults to value set in schema (true))</li>\n<li><code>upsert</code> (boolean) whether to create the doc if it doesn't match (false)</li>\n<li><code>multi</code> (boolean) whether multiple documents should be updated (false)</li>\n<li><code>strict</code> (boolean) overrides the <code>strict</code> option for this update</li>\n<li><code>overwrite</code> (boolean) disables update-only mode, allowing you to overwrite the doc (false)</li>\n</ul>\n\n<p>All <code>update</code> values are cast to their appropriate SchemaTypes before being sent.</p>\n\n<p>The <code>callback</code> function receives <code>(err, numberAffected, rawResponse)</code>.</p>\n\n<ul>\n<li><code>err</code> is the error if any occurred</li>\n<li><code>numberAffected</code> is the count of updated documents Mongo reported</li>\n<li><code>rawResponse</code> is the full response from Mongo</li>\n</ul>\n\n<h4>Note:</h4>\n\n<p>All top level keys which are not <code>atomic</code> operation names are treated as set operations:</p>\n\n<h4>Example:</h4>\n\n<pre><code>var query = { name: 'borne' };\nModel.update(query, { name: 'jason borne' }, options, callback)\n\n// is sent as\nModel.update(query, { $set: { name: 'jason borne' }}, options, callback)\n// if overwrite option is false. If overwrite is true, sent without the $set wrapper.\n</code></pre>\n\n<p>This helps prevent accidentally overwriting all documents in your collection with <code>{ name: 'jason borne' }</code>.</p>\n\n<h4>Note:</h4>\n\n<p>Be careful to not use an existing model instance for the update clause (this won't work and can cause weird behavior like infinite loops). Also, ensure that the update clause does not have an _id property, which causes Mongo to return a \"Mod on _id not allowed\" error.</p>\n\n<h4>Note:</h4>\n\n<p>To update documents without waiting for a response from MongoDB, do not pass a <code>callback</code>, then call <code>exec</code> on the returned <a href=\"#query-js\">Query</a>:</p>\n\n<pre><code>Comment.update({ _id: id }, { $set: { text: 'changed' }}).exec();\n</code></pre>\n\n<h4>Note:</h4>\n\n<p>Although values are casted to their appropriate types when using update, the following are <em>not</em> applied:</p>\n\n<ul>\n<li>defaults</li>\n<li>setters</li>\n<li>validators</li>\n<li>middleware</li>\n</ul>\n\n<p>If you need those features, use the traditional approach of first retrieving the document.</p>\n\n<pre><code>Model.findOne({ name: 'borne' }, function (err, doc) {\n  if (err) ..\n  doc.name = 'jason borne';\n  doc.save(callback);\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.update = function update (conditions, doc, options, callback) {\n  var mq = new Query({}, {}, this, this.collection);\n  return mq.update(conditions, doc, options, callback);\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "update",
    "string": "Model.update()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "o",
     "description": "an object specifying map-reduce options"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "optional callback"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://www.mongodb.org/display/DOCS/MapReduce",
     "visibility": "http://www.mongodb.org/display/DOCS/MapReduce"
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Executes a mapReduce command.</p>\n\n<p><code>o</code> is an object specifying all mapReduce options as well as the map and reduce functions. All options are delegated to the driver implementation.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var o = {};\no.map = function () { emit(this.name, 1) }\no.reduce = function (k, vals) { return vals.length }\nUser.mapReduce(o, function (err, results) {\n  console.log(results)\n})\n</code></pre>\n\n<h4>Other options:</h4>\n\n<ul>\n<li><code>query</code> {Object} query filter object.</li>\n<li><code>limit</code> {Number} max number of documents</li>\n<li><code>keeptemp</code> {Boolean, default:false} keep temporary data</li>\n<li><code>finalize</code> {Function} finalize function</li>\n<li><code>scope</code> {Object} scope variables exposed to map/reduce/finalize during execution</li>\n<li><code>jsMode</code> {Boolean, default:false} it is possible to make the execution stay in JS. Provided in MongoDB > 2.0.X</li>\n<li><code>verbose</code> {Boolean, default:false} provide statistics on job execution time.</li>\n<li><code>out*</code> {Object, default: {inline:1}} sets the output target for the map reduce job.</li>\n</ul>\n\n<h4>* out options:</h4>\n\n<ul>\n<li><code>{inline:1}</code> the results are returned in an array</li>\n<li><code>{replace: 'collectionName'}</code> add the results to collectionName: the results replace the collection</li>\n<li><code>{reduce: 'collectionName'}</code> add the results to collectionName: if dups are detected, uses the reducer / finalize functions</li>\n<li><code>{merge: 'collectionName'}</code> add the results to collectionName: if dups exist the new docs overwrite the old</li>\n</ul>\n\n<p>If <code>options.out</code> is set to <code>replace</code>, <code>merge</code>, or <code>reduce</code>, a Model instance is returned that can be used for further querying. Queries run against this model are all executed with the <code>lean</code> option; meaning only the js object is returned and no Mongoose magic is applied (getters, setters, etc).</p>\n\n<h4>Example:</h4>\n\n<pre><code>var o = {};\no.map = function () { emit(this.name, 1) }\no.reduce = function (k, vals) { return vals.length }\no.out = { replace: 'createdCollectionNameForResults' }\no.verbose = true;\n\nUser.mapReduce(o, function (err, model, stats) {\n  console.log('map reduce took %d ms', stats.processtime)\n  model.find().where('value').gt(10).exec(function (err, docs) {\n    console.log(docs);\n  });\n})\n\n// a promise is returned so you may instead write\nvar promise = User.mapReduce(o);\npromise.then(function (model, stats) {\n  console.log('map reduce took %d ms', stats.processtime)\n  return model.find().where('value').gt(10).exec();\n}).then(function (docs) {\n   console.log(docs);\n}).then(null, handleError).end()\n</code></pre>",
    "summary": "<p>Executes a mapReduce command.</p>",
    "body": "<p><code>o</code> is an object specifying all mapReduce options as well as the map and reduce functions. All options are delegated to the driver implementation.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var o = {};\no.map = function () { emit(this.name, 1) }\no.reduce = function (k, vals) { return vals.length }\nUser.mapReduce(o, function (err, results) {\n  console.log(results)\n})\n</code></pre>\n\n<h4>Other options:</h4>\n\n<ul>\n<li><code>query</code> {Object} query filter object.</li>\n<li><code>limit</code> {Number} max number of documents</li>\n<li><code>keeptemp</code> {Boolean, default:false} keep temporary data</li>\n<li><code>finalize</code> {Function} finalize function</li>\n<li><code>scope</code> {Object} scope variables exposed to map/reduce/finalize during execution</li>\n<li><code>jsMode</code> {Boolean, default:false} it is possible to make the execution stay in JS. Provided in MongoDB > 2.0.X</li>\n<li><code>verbose</code> {Boolean, default:false} provide statistics on job execution time.</li>\n<li><code>out*</code> {Object, default: {inline:1}} sets the output target for the map reduce job.</li>\n</ul>\n\n<h4>* out options:</h4>\n\n<ul>\n<li><code>{inline:1}</code> the results are returned in an array</li>\n<li><code>{replace: 'collectionName'}</code> add the results to collectionName: the results replace the collection</li>\n<li><code>{reduce: 'collectionName'}</code> add the results to collectionName: if dups are detected, uses the reducer / finalize functions</li>\n<li><code>{merge: 'collectionName'}</code> add the results to collectionName: if dups exist the new docs overwrite the old</li>\n</ul>\n\n<p>If <code>options.out</code> is set to <code>replace</code>, <code>merge</code>, or <code>reduce</code>, a Model instance is returned that can be used for further querying. Queries run against this model are all executed with the <code>lean</code> option; meaning only the js object is returned and no Mongoose magic is applied (getters, setters, etc).</p>\n\n<h4>Example:</h4>\n\n<pre><code>var o = {};\no.map = function () { emit(this.name, 1) }\no.reduce = function (k, vals) { return vals.length }\no.out = { replace: 'createdCollectionNameForResults' }\no.verbose = true;\n\nUser.mapReduce(o, function (err, model, stats) {\n  console.log('map reduce took %d ms', stats.processtime)\n  model.find().where('value').gt(10).exec(function (err, docs) {\n    console.log(docs);\n  });\n})\n\n// a promise is returned so you may instead write\nvar promise = User.mapReduce(o);\npromise.then(function (model, stats) {\n  console.log('map reduce took %d ms', stats.processtime)\n  return model.find().where('value').gt(10).exec();\n}).then(function (docs) {\n   console.log(docs);\n}).then(null, handleError).end()\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.mapReduce = function mapReduce (o, callback) {\n  var promise = new Promise(callback);\n  var self = this;\n\n  if (!Model.mapReduce.schema) {\n    var opts = { noId: true, noVirtualId: true, strict: false }\n    Model.mapReduce.schema = new Schema({}, opts);\n  }\n\n  if (!o.out) o.out = { inline: 1 };\n  if (false !== o.verbose) o.verbose = true;\n\n  o.map = String(o.map);\n  o.reduce = String(o.reduce);\n\n  if (o.query) {\n    var q = new Query(o.query);\n    q.cast(this);\n    o.query = q._conditions;\n    q = undefined;\n  }\n\n  this.collection.mapReduce(null, null, o, function (err, ret, stats) {\n    if (err) return promise.error(err);\n\n    if (ret.findOne && ret.mapReduce) {\n      // returned a collection, convert to Model\n      var model = Model.compile(\n          '_mapreduce_' + ret.collectionName\n        , Model.mapReduce.schema\n        , ret.collectionName\n        , self.db\n        , self.base);\n\n      model._mapreduce = true;\n\n      return promise.fulfill(model, stats);\n    }\n\n    promise.fulfill(ret, stats);\n  });\n\n  return promise;\n}",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "mapReduce",
    "string": "Model.mapReduce()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object",
      "Array"
     ],
     "name": "GeoJSON",
     "description": "point or legacy coordinate pair [x,y] to search near"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": "for the qurery"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "optional callback for the query"
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": ""
    },
    {
     "type": "see",
     "title": "",
     "url": "http://docs.mongodb.org/manual/core/2dsphere/",
     "visibility": "http://docs.mongodb.org/manual/core/2dsphere/"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html?highlight=geonear#geoNear",
     "visibility": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html?highlight=geonear#geoNear"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>geoNear support for Mongoose</p>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>lean</code> {Boolean} return the raw object</li>\n<li>All options supported by the driver are also supported</li>\n</ul>\n\n<h4>Example:</h4>\n\n<pre><code>// Legacy point\nModel.geoNear([1,3], { maxDistance : 5, spherical : true }, function(err, results, stats) {\n   console.log(results);\n});\n\n// geoJson\nvar point = { type : \"Point\", coordinates : [9,9] };\nModel.geoNear(point, { maxDistance : 5, spherical : true }, function(err, results, stats) {\n   console.log(results);\n});\n</code></pre>",
    "summary": "<p>geoNear support for Mongoose</p>",
    "body": "<h4>Options:</h4>\n\n<ul>\n<li><code>lean</code> {Boolean} return the raw object</li>\n<li>All options supported by the driver are also supported</li>\n</ul>\n\n<h4>Example:</h4>\n\n<pre><code>// Legacy point\nModel.geoNear([1,3], { maxDistance : 5, spherical : true }, function(err, results, stats) {\n   console.log(results);\n});\n\n// geoJson\nvar point = { type : \"Point\", coordinates : [9,9] };\nModel.geoNear(point, { maxDistance : 5, spherical : true }, function(err, results, stats) {\n   console.log(results);\n});\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.geoNear = function (near, options, callback) {\n  if ('function' == typeof options) {\n    callback = options;\n    options = {};\n  }\n\n  var promise = new Promise(callback);\n  if (!near) {\n    promise.error(new Error(\"Must pass a near option to geoNear\"));\n    return promise;\n  }\n\n  var x,y;\n\n  if (Array.isArray(near)) {\n    if (near.length != 2) {\n      promise.error(new Error(\"If using legacy coordinates, must be an array of size 2 for geoNear\"));\n      return promise;\n    }\n    x = near[0];\n    y = near[1];\n  } else {\n    if (near.type != \"Point\" || !Array.isArray(near.coordinates)) {\n      promise.error(new Error(\"Must pass either a legacy coordinate array or GeoJSON Point to geoNear\"));\n      return promise;\n    }\n\n    x = near.coordinates[0];\n    y = near.coordinates[1];\n  }\n\n  var self = this;\n  this.collection.geoNear(x, y, options, function (err, res) {\n    if (err) return promise.error(err);\n    if (options.lean) return promise.fulfill(res.results, res.stats);\n\n    var count = res.results.length;\n    // if there are no results, fulfill the promise now\n    if (count == 0) {\n      return promise.fulfill(res.results, res.stats);\n    }\n\n    var errSeen = false;\n    for (var i=0; i < res.results.length; i++) {\n      var temp = res.results[i].obj;\n      res.results[i].obj = new self();\n      res.results[i].obj.init(temp, function (err) {\n        if (err && !errSeen) {\n          errSeen = true;\n          return promise.error(err);\n        }\n        --count || promise.fulfill(res.results, res.stats);\n      });\n    }\n  });\n  return promise;\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "geoNear",
    "string": "Model.geoNear()"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "local": "Aggregate #aggregate_Aggregate",
     "visibility": "Aggregate"
    },
    {
     "type": "see",
     "title": "MongoDB",
     "url": "http://docs.mongodb.org/manual/applications/aggregation/",
     "visibility": "http://docs.mongodb.org/manual/applications/aggregation/"
    },
    {
     "type": "param",
     "types": [
      "Object",
      "Array"
     ],
     "name": "[...]",
     "description": "aggregation pipeline operator(s) or operator array"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Aggregate",
      "Promise"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Performs <a href=\"http://docs.mongodb.org/manual/applications/aggregation/\">aggregations</a> on the models collection.</p>\n\n<p>If a <code>callback</code> is passed, the <code>aggregate</code> is executed and a <code>Promise</code> is returned. If a callback is not passed, the <code>aggregate</code> itself is returned.</p>\n\n<h4>Example:</h4>\n\n<pre><code>// Find the max balance of all accounts\nUsers.aggregate(\n    { $group: { _id: null, maxBalance: { $max: '$balance' }}}\n  , { $project: { _id: 0, maxBalance: 1 }}\n  , function (err, res) {\n  if (err) return handleError(err);\n  console.log(res); // [ { maxBalance: 98000 } ]\n});\n\n// Or use the aggregation pipeline builder.\nUsers.aggregate()\n  .group({ _id: null, maxBalance: { $max: '$balance' } })\n  .select('-id maxBalance')\n  .exec(function (err, res) {\n    if (err) return handleError(err);\n    console.log(res); // [ { maxBalance: 98 } ]\n});\n</code></pre>\n\n<h4>NOTE:</h4>\n\n<ul>\n<li>Arguments are not cast to the model's schema because <code>$project</code> operators allow redefining the \"shape\" of the documents at any stage of the pipeline, which may leave documents in an incompatible format.</li>\n<li>The documents returned are plain javascript objects, not mongoose documents (since any shape of document can be returned).</li>\n<li>Requires MongoDB >= 2.1</li>\n</ul>",
    "summary": "<p>Performs <a href=\"http://docs.mongodb.org/manual/applications/aggregation/\">aggregations</a> on the models collection.</p>",
    "body": "<p>If a <code>callback</code> is passed, the <code>aggregate</code> is executed and a <code>Promise</code> is returned. If a callback is not passed, the <code>aggregate</code> itself is returned.</p>\n\n<h4>Example:</h4>\n\n<pre><code>// Find the max balance of all accounts\nUsers.aggregate(\n    { $group: { _id: null, maxBalance: { $max: '$balance' }}}\n  , { $project: { _id: 0, maxBalance: 1 }}\n  , function (err, res) {\n  if (err) return handleError(err);\n  console.log(res); // [ { maxBalance: 98000 } ]\n});\n\n// Or use the aggregation pipeline builder.\nUsers.aggregate()\n  .group({ _id: null, maxBalance: { $max: '$balance' } })\n  .select('-id maxBalance')\n  .exec(function (err, res) {\n    if (err) return handleError(err);\n    console.log(res); // [ { maxBalance: 98 } ]\n});\n</code></pre>\n\n<h4>NOTE:</h4>\n\n<ul>\n<li>Arguments are not cast to the model's schema because <code>$project</code> operators allow redefining the \"shape\" of the documents at any stage of the pipeline, which may leave documents in an incompatible format.</li>\n<li>The documents returned are plain javascript objects, not mongoose documents (since any shape of document can be returned).</li>\n<li>Requires MongoDB >= 2.1</li>\n</ul>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.aggregate = function aggregate () {\n  var args = [].slice.call(arguments)\n    , aggregate\n    , callback;\n\n  if ('function' === typeof args[args.length - 1]) {\n    callback = args.pop();\n  }\n\n  if (1 === args.length && util.isArray(args[0])) {\n    aggregate = new Aggregate(args[0]);\n  } else {\n    aggregate = new Aggregate(args);\n  }\n\n  aggregate.bind(this);\n\n  if ('undefined' === typeof callback) {\n    return aggregate;\n  }\n\n  return aggregate.exec(callback);\n}",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "aggregate",
    "string": "Model.aggregate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "condition",
     "description": "an object that specifies the match condition (required)"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": "for the geoSearch, some (near, maxDistance) are required"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "optional callback"
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": ""
    },
    {
     "type": "see",
     "title": "",
     "url": "http://docs.mongodb.org/manual/reference/command/geoSearch/",
     "visibility": "http://docs.mongodb.org/manual/reference/command/geoSearch/"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://docs.mongodb.org/manual/core/geohaystack/",
     "visibility": "http://docs.mongodb.org/manual/core/geohaystack/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Implements <code>$geoSearch</code> functionality for Mongoose</p>\n\n<h4>Example:</h4>\n\n<pre><code>var options = { near: [10, 10], maxDistance: 5 };\nLocations.geoSearch({ type : \"house\" }, options, function(err, res) {\n  console.log(res);\n});\n</code></pre>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>near</code> {Array} x,y point to search for</li>\n<li><code>maxDistance</code> {Number} the maximum distance from the point near that a result can be</li>\n<li><code>limit</code> {Number} The maximum number of results to return</li>\n<li><code>lean</code> {Boolean} return the raw object instead of the Mongoose Model</li>\n</ul>",
    "summary": "<p>Implements <code>$geoSearch</code> functionality for Mongoose</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var options = { near: [10, 10], maxDistance: 5 };\nLocations.geoSearch({ type : \"house\" }, options, function(err, res) {\n  console.log(res);\n});\n</code></pre>\n\n<h4>Options:</h4>\n\n<ul>\n<li><code>near</code> {Array} x,y point to search for</li>\n<li><code>maxDistance</code> {Number} the maximum distance from the point near that a result can be</li>\n<li><code>limit</code> {Number} The maximum number of results to return</li>\n<li><code>lean</code> {Boolean} return the raw object instead of the Mongoose Model</li>\n</ul>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.geoSearch = function (conditions, options, callback) {\n  if ('function' == typeof options) {\n    callback = options;\n    options = {};\n  }\n\n  var promise = new Promise(callback);\n\n  if (conditions == undefined || !utils.isObject(conditions)) {\n    return promise.error(new Error(\"Must pass conditions to geoSearch\"));\n  }\n\n  if (!options.near) {\n    return promise.error(new Error(\"Must specify the near option in geoSearch\"));\n  }\n\n  if (!Array.isArray(options.near)) {\n    return promise.error(new Error(\"near option must be an array [x, y]\"));\n  }\n\n\n  // send the conditions in the options object\n  options.search = conditions;\n  var self = this;\n\n  this.collection.geoHaystackSearch(options.near[0], options.near[1], options, function (err, res) {\n    // have to deal with driver problem. Should be fixed in a soon-ish release\n    // (7/8/2013)\n    if (err || res.errmsg) {\n      if (!err) err = new Error(res.errmsg);\n      if (res && res.code !== undefined) err.code = res.code;\n      return promise.error(err);\n    }\n\n    var count = res.results.length;\n    if (options.lean || (count == 0)) return promise.fulfill(res.results, res.stats);\n\n    var errSeen = false;\n    for (var i=0; i < res.results.length; i++) {\n      var temp = res.results[i];\n      res.results[i] = new self();\n      res.results[i].init(temp, {}, function (err) {\n        if (err && !errSeen) {\n          errSeen = true;\n          return promise.error(err);\n        }\n\n        --count || (!errSeen && promise.fulfill(res.results, res.stats));\n      });\n    }\n  });\n\n  return promise;\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "geoSearch",
    "string": "Model.geoSearch()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Document",
      "Array"
     ],
     "name": "docs",
     "description": "Either a single document or array of documents to populate."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": "A hash of key/val (path, options) used for population."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[cb(err,doc)]",
     "description": "Optional callback, executed upon completion. Receives `err` and the `doc(s)`."
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Populates document references.</p>\n\n<h4>Available options:</h4>\n\n<ul>\n<li>path: space delimited path(s) to populate</li>\n<li>select: optional fields to select</li>\n<li>match: optional query conditions to match</li>\n<li>model: optional name of the model to use for population</li>\n<li>options: optional query options like sort, limit, etc</li>\n</ul>\n\n<h4>Examples:</h4>\n\n<pre><code>// populates a single object\nUser.findById(id, function (err, user) {\n  var opts = [\n      { path: 'company', match: { x: 1 }, select: 'name' }\n    , { path: 'notes', options: { limit: 10 }, model: 'override' }\n  ]\n\n  User.populate(user, opts, function (err, user) {\n    console.log(user);\n  })\n})\n\n// populates an array of objects\nUser.find(match, function (err, users) {\n  var opts = [{ path: 'company', match: { x: 1 }, select: 'name' }]\n\n  var promise = User.populate(users, opts);\n  promise.then(console.log).end();\n})\n\n// imagine a Weapon model exists with two saved documents:\n//   { _id: 389, name: 'whip' }\n//   { _id: 8921, name: 'boomerang' }\n\nvar user = { name: 'Indiana Jones', weapon: 389 }\nWeapon.populate(user, { path: 'weapon', model: 'Weapon' }, function (err, user) {\n  console.log(user.weapon.name) // whip\n})\n\n// populate many plain objects\nvar users = [{ name: 'Indiana Jones', weapon: 389 }]\nusers.push({ name: 'Batman', weapon: 8921 })\nWeapon.populate(users, { path: 'weapon' }, function (err, users) {\n  users.forEach(function (user) {\n    console.log('%s uses a %s', users.name, user.weapon.name)\n    // Indiana Jones uses a whip\n    // Batman uses a boomerang\n  })\n})\n// Note that we didn't need to specify the Weapon model because\n// we were already using it's populate() method.\n</code></pre>",
    "summary": "<p>Populates document references.</p>",
    "body": "<h4>Available options:</h4>\n\n<ul>\n<li>path: space delimited path(s) to populate</li>\n<li>select: optional fields to select</li>\n<li>match: optional query conditions to match</li>\n<li>model: optional name of the model to use for population</li>\n<li>options: optional query options like sort, limit, etc</li>\n</ul>\n\n<h4>Examples:</h4>\n\n<pre><code>// populates a single object\nUser.findById(id, function (err, user) {\n  var opts = [\n      { path: 'company', match: { x: 1 }, select: 'name' }\n    , { path: 'notes', options: { limit: 10 }, model: 'override' }\n  ]\n\n  User.populate(user, opts, function (err, user) {\n    console.log(user);\n  })\n})\n\n// populates an array of objects\nUser.find(match, function (err, users) {\n  var opts = [{ path: 'company', match: { x: 1 }, select: 'name' }]\n\n  var promise = User.populate(users, opts);\n  promise.then(console.log).end();\n})\n\n// imagine a Weapon model exists with two saved documents:\n//   { _id: 389, name: 'whip' }\n//   { _id: 8921, name: 'boomerang' }\n\nvar user = { name: 'Indiana Jones', weapon: 389 }\nWeapon.populate(user, { path: 'weapon', model: 'Weapon' }, function (err, user) {\n  console.log(user.weapon.name) // whip\n})\n\n// populate many plain objects\nvar users = [{ name: 'Indiana Jones', weapon: 389 }]\nusers.push({ name: 'Batman', weapon: 8921 })\nWeapon.populate(users, { path: 'weapon' }, function (err, users) {\n  users.forEach(function (user) {\n    console.log('%s uses a %s', users.name, user.weapon.name)\n    // Indiana Jones uses a whip\n    // Batman uses a boomerang\n  })\n})\n// Note that we didn't need to specify the Weapon model because\n// we were already using it's populate() method.\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Model.populate = function (docs, paths, cb) {\n  var promise = new Promise(cb);\n\n  // always resolve on nextTick for consistent async behavior\n  function resolve () {\n    var args = utils.args(arguments);\n    process.nextTick(function () {\n      promise.resolve.apply(promise, args);\n    });\n  }\n\n  // normalized paths\n  var paths = utils.populate(paths);\n  var pending = paths.length;\n\n  if (0 === pending) {\n    resolve(null, docs);\n    return promise;\n  }\n\n  // each path has its own query options and must be executed separately\n  var i = pending;\n  var path;\n  var model = this;\n  while (i--) {\n    path = paths[i];\n    if ('function' === typeof path.model) model = path.model;\n    populate(model, docs, path, next);\n  }\n\n  return promise;\n\n  function next (err) {\n    if (err) return resolve(err);\n    if (--pending) return;\n    resolve(null, docs);\n  }\n}",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "populate",
    "string": "Model.populate()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Populates <code>docs</code></p>",
    "summary": "<p>Populates <code>docs</code></p>",
    "body": ""
   },
   "ignore": true,
   "code": "function populate (model, docs, options, cb) {\n  var select = options.select\n    , match = options.match\n    , path = options.path;\n\n  var schema = model._getSchema(path);\n  var subpath;\n\n  // handle document arrays\n  if (schema && schema.caster) {\n    schema = schema.caster;\n  }\n\n  // model name for the populate query\n  var modelName = options.model && options.model.modelName\n               || options.model                // query options\n               || schema && schema.options && schema.options.ref // declared in schema\n               || model.modelName;              // an ad-hoc structure\n\n  var Model = model.db.model(modelName);\n\n  // expose the model used\n  options.model = Model;\n\n  // normalize single / multiple docs passed\n  if (!Array.isArray(docs)) {\n    docs = [docs];\n  }\n\n  if (0 === docs.length || docs.every(utils.isNullOrUndefined)) {\n    return cb();\n  }\n\n  var rawIds = [];\n  var i, doc, id;\n  var ret;\n  var found = 0;\n  var isDocument;\n  var numDocuments = docs.length;\n\n  for (i = 0; i < numDocuments; ++i) {\n    ret = undefined;\n    doc = docs[i];\n    id = String(utils.getValue(\"_id\", doc));\n    isDocument = !! doc.$__;\n\n    if (!ret || Array.isArray(ret) && 0 === ret.length) {\n      ret = utils.getValue(path, doc);\n    }\n\n    if (ret) {\n      ret = convertTo_id(ret);\n\n      // previously we always assigned this even if the document had no _id\n      options._docs[id] = Array.isArray(ret)\n        ? ret.slice()\n        : ret;\n    }\n\n    // always retain original values, even empty values. these are\n    // used to map the query results back to the correct position.\n    rawIds.push(ret);\n\n    if (isDocument) {\n      // cache original populated _ids and model used\n      doc.populated(path, options._docs[id], options);\n    }\n  }\n\n  var ids = utils.array.flatten(rawIds, function (item) {\n    // no need to include undefined values in our query\n    return undefined !== item;\n  });\n\n  if (0 === ids.length || ids.every(utils.isNullOrUndefined)) {\n    return cb();\n  }\n\n  // preserve original match conditions by copying\n  if (match) {\n    match = utils.object.shallowCopy(match);\n  } else {\n    match = {};\n  }\n\n  match._id || (match._id = { $in: ids });\n\n  var assignmentOpts = {};\n  assignmentOpts.sort = options.options && options.options.sort || undefined;\n  assignmentOpts.excludeId = /\\s?-_id\\s?/.test(select) || (select && 0 === select._id);\n\n  if (assignmentOpts.excludeId) {\n    // override the exclusion from the query so we can use the _id\n    // for document matching during assignment. we'll delete the\n    // _id back off before returning the result.\n    if ('string' == typeof select) {\n      select = select.replace(/\\s?-_id\\s?/g, ' ');\n    } else {\n      // preserve original select conditions by copying\n      select = utils.object.shallowCopy(select);\n      delete select._id;\n    }\n  }\n\n  // if a limit option is passed, we should have the limit apply to *each*\n  // document, not apply in the aggregate\n  if (options.options && options.options.limit) {\n    assignmentOpts.originalLimit = options.options.limit;\n    options.options.limit = options.options.limit * numDocuments;\n  }\n\n  Model.find(match, select, options.options, function (err, vals) {\n    if (err) return cb(err);\n\n    var lean = options.options && options.options.lean;\n    var len = vals.length;\n    var rawOrder = {};\n    var rawDocs = {}\n    var key;\n    var val;\n\n    // optimization:\n    // record the document positions as returned by\n    // the query result.\n    for (var i = 0; i < len; i++) {\n      val = vals[i];\n      key = String(utils.getValue('_id', val));\n      rawDocs[key] = val;\n      rawOrder[key] = i;\n\n      // flag each as result of population\n      if (!lean) val.$__.wasPopulated = true;\n    }\n\n    assignVals({\n      rawIds: rawIds,\n      rawDocs: rawDocs,\n      rawOrder: rawOrder,\n      docs: docs,\n      path: path,\n      options: assignmentOpts\n    });\n\n    cb();\n  });\n}",
   "ctx": {
    "type": "function",
    "name": "populate",
    "string": "populate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Array",
      "Document",
      "Any"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Array",
      "Document",
      "Any"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Retrieve the _id of <code>val</code> if a Document or Array of Documents.</p>",
    "summary": "<p>Retrieve the _id of <code>val</code> if a Document or Array of Documents.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function convertTo_id (val) {\n  if (val instanceof Model) return val._id;\n\n  if (Array.isArray(val)) {\n    for (var i = 0; i < val.length; ++i) {\n      if (val[i] instanceof Model) {\n        val[i] = val[i]._id;\n      }\n    }\n    return val;\n  }\n\n  return val;\n}",
   "ctx": {
    "type": "function",
    "name": "convertTo_id",
    "string": "convertTo_id()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Assigns documents returned from a population query back<br />to the original document path.</p>",
    "summary": "<p>Assigns documents returned from a population query back<br />to the original document path.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function assignVals (o) {\n  // replace the original ids in our intermediate _ids structure\n  // with the documents found by query\n\n  assignRawDocsToIdStructure(o.rawIds, o.rawDocs, o.rawOrder, o.options);\n\n  // now update the original documents being populated using the\n  // result structure that contains real documents.\n\n  var docs = o.docs;\n  var path = o.path;\n  var rawIds = o.rawIds;\n  var options = o.options;\n\n  for (var i = 0; i < docs.length; ++i) {\n    utils.setValue(path, rawIds[i], docs[i], function (val) {\n      return valueFilter(val, options);\n    });\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "assignVals",
    "string": "assignVals()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>1) Apply backwards compatible find/findOne behavior to sub documents</p>\n\n<p>find logic:<br />     a) filter out non-documents<br />     b) remove _id from sub docs when user specified</p>\n\n<p>findOne<br />     a) if no doc found, set to null<br />     b) remove _id from sub docs when user specified</p>\n\n<p>2) Remove _ids when specified by users query.</p>\n\n<p>background:<br />_ids are left in the query even when user excludes them so<br />that population mapping can occur.</p>",
    "summary": "<p>1) Apply backwards compatible find/findOne behavior to sub documents</p>",
    "body": "<p>find logic:<br />     a) filter out non-documents<br />     b) remove _id from sub docs when user specified</p>\n\n<p>findOne<br />     a) if no doc found, set to null<br />     b) remove _id from sub docs when user specified</p>\n\n<p>2) Remove _ids when specified by users query.</p>\n\n<p>background:<br />_ids are left in the query even when user excludes them so<br />that population mapping can occur.</p>"
   },
   "ignore": true,
   "code": "function valueFilter (val, assignmentOpts) {\n  if (Array.isArray(val)) {\n    // find logic\n    var ret = [];\n    var numValues = val.length;\n    for (var i = 0; i < numValues; ++i) {\n      var subdoc = val[i];\n      if (!isDoc(subdoc)) continue;\n      maybeRemoveId(subdoc, assignmentOpts);\n      ret.push(subdoc);\n      if (assignmentOpts.originalLimit &&\n          ret.length >= assignmentOpts.originalLimit) {\n        break;\n      }\n    }\n\n    // Since we don't want to have to create a new mongoosearray, make sure to\n    // modify the array in place\n    while (val.length > ret.length) {\n      Array.prototype.pop.apply(val, []);\n    }\n    for (var i = 0; i < ret.length; ++i) {\n      val[i] = ret[i];\n    }\n    return val;\n  }\n\n  // findOne\n  if (isDoc(val)) {\n    maybeRemoveId(val, assignmentOpts);\n    return val;\n  }\n\n  return null;\n}",
   "ctx": {
    "type": "function",
    "name": "valueFilter",
    "string": "valueFilter()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Remove _id from <code>subdoc</code> if user specified \"lean\" query option</p>",
    "summary": "<p>Remove _id from <code>subdoc</code> if user specified \"lean\" query option</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function maybeRemoveId (subdoc, assignmentOpts) {\n  if (assignmentOpts.excludeId) {\n    if ('function' == typeof subdoc.setValue) {\n      delete subdoc._doc._id;\n    } else {\n      delete subdoc._id;\n    }\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "maybeRemoveId",
    "string": "maybeRemoveId()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Determine if <code>doc</code> is a document returned<br />by a populate query.</p>",
    "summary": "<p>Determine if <code>doc</code> is a document returned<br />by a populate query.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function isDoc (doc) {\n  if (null == doc)\n    return false;\n\n  var type = typeof doc;\n  if ('string' == type)\n    return false;\n\n  if ('number' == type)\n    return false;\n\n  if (Buffer.isBuffer(doc))\n    return false;\n\n  if ('ObjectID' == doc.constructor.name)\n    return false;\n\n  // only docs\n  return true;\n}",
   "ctx": {
    "type": "function",
    "name": "isDoc",
    "string": "isDoc()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "rawIds",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "vals",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "sort",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Assign <code>vals</code> returned by mongo query to the <code>rawIds</code><br />structure returned from utils.getVals() honoring<br />query sort order if specified by user.</p>\n\n<p>This can be optimized.</p>\n\n<p>Rules:</p>\n\n<p>if the value of the path is not an array, use findOne rules, else find.<br />  for findOne the results are assigned directly to doc path (including null results).<br />  for find, if user specified sort order, results are assigned directly<br />  else documents are put back in original order of array if found in results</p>",
    "summary": "<p>Assign <code>vals</code> returned by mongo query to the <code>rawIds</code><br />structure returned from utils.getVals() honoring<br />query sort order if specified by user.</p>",
    "body": "<p>This can be optimized.</p>\n\n<p>Rules:</p>\n\n<p>if the value of the path is not an array, use findOne rules, else find.<br />  for findOne the results are assigned directly to doc path (including null results).<br />  for find, if user specified sort order, results are assigned directly<br />  else documents are put back in original order of array if found in results</p>"
   },
   "isPrivate": true,
   "ignore": true,
   "code": "function assignRawDocsToIdStructure (rawIds, resultDocs, resultOrder, options, recursed) {\n  // honor user specified sort order\n  var newOrder = [];\n  var sorting = options.sort && rawIds.length > 1;\n  var found;\n  var doc;\n  var sid;\n  var id;\n\n  for (var i = 0; i < rawIds.length; ++i) {\n    id = rawIds[i];\n\n    if (Array.isArray(id)) {\n      // handle [ [id0, id2], [id3] ]\n      assignRawDocsToIdStructure(id, resultDocs, resultOrder, options, true);\n      newOrder.push(id);\n      continue;\n    }\n\n    if (null === id && !sorting) {\n      // keep nulls for findOne unless sorting, which always\n      // removes them (backward compat)\n      newOrder.push(id);\n      continue;\n    }\n\n    sid = String(id);\n    found = false;\n\n    if (recursed) {\n      // apply find behavior\n\n      // assign matching documents in original order unless sorting\n      doc = resultDocs[sid];\n      if (doc) {\n        if (sorting) {\n          newOrder[resultOrder[sid]] = doc;\n        } else {\n          newOrder.push(doc);\n        }\n      } else {\n        newOrder.push(id);\n      }\n    } else {\n      // apply findOne behavior - if document in results, assign, else assign null\n      newOrder[i] = doc = resultDocs[sid] || null;\n    }\n  }\n\n  rawIds.length = 0;\n  if (newOrder.length) {\n    // reassign the documents based on corrected order\n\n    // forEach skips over sparse entries in arrays so we\n    // can safely use this to our advantage dealing with sorted\n    // result sets too.\n    newOrder.forEach(function (doc, i) {\n      rawIds[i] = doc;\n    });\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "assignRawDocsToIdStructure",
    "string": "assignRawDocsToIdStructure()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Schema"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Finds the schema for <code>path</code>. This is different than<br />calling <code>schema.path</code> as it also resolves paths with<br />positional selectors (something.$.another.$.path).</p>",
    "summary": "<p>Finds the schema for <code>path</code>. This is different than<br />calling <code>schema.path</code> as it also resolves paths with<br />positional selectors (something.$.another.$.path).</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Model._getSchema = function _getSchema (path) {\n  var schema = this.schema\n    , pathschema = schema.path(path);\n\n  if (pathschema)\n    return pathschema;\n\n  // look for arrays\n  return (function search (parts, schema) {\n    var p = parts.length + 1\n      , foundschema\n      , trypath\n\n    while (p--) {\n      trypath = parts.slice(0, p).join('.');\n      foundschema = schema.path(trypath);\n      if (foundschema) {\n        if (foundschema.caster) {\n\n          // array of Mixed?\n          if (foundschema.caster instanceof Types.Mixed) {\n            return foundschema.caster;\n          }\n\n          // Now that we found the array, we need to check if there\n          // are remaining document paths to look up for casting.\n          // Also we need to handle array.$.path since schema.path\n          // doesn't work for that.\n          // If there is no foundschema.schema we are dealing with\n          // a path like array.$\n          if (p !== parts.length && foundschema.schema) {\n            if ('$' === parts[p]) {\n              // comments.$.comments.$.title\n              return search(parts.slice(p+1), foundschema.schema);\n            } else {\n              // this is the last path of the selector\n              return search(parts.slice(p), foundschema.schema);\n            }\n          }\n        }\n        return foundschema;\n      }\n    }\n  })(path.split('.'), schema)\n}",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "_getSchema",
    "string": "Model._getSchema()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": "model name"
    },
    {
     "type": "param",
     "types": [
      "Schema"
     ],
     "name": "schema",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "collectionName",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Connection"
     ],
     "name": "connection",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Mongoose"
     ],
     "name": "base",
     "description": "mongoose instance"
    }
   ],
   "description": {
    "full": "<p>Compiler utility.</p>",
    "summary": "<p>Compiler utility.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "Model.compile = function compile (name, schema, collectionName, connection, base) {\n  var versioningEnabled = false !== schema.options.versionKey;\n\n  if (versioningEnabled && !schema.paths[schema.options.versionKey]) {\n    // add versioning to top level documents only\n    var o = {};\n    o[schema.options.versionKey] = Number;\n    schema.add(o);\n  }\n\n  // generate new class\n  function model (doc, fields, skipId) {\n    if (!(this instanceof model))\n      return new model(doc, fields, skipId);\n    Model.call(this, doc, fields, skipId);\n  };\n\n  model.base = base;\n  model.modelName = name;\n  model.__proto__ = Model;\n  model.prototype.__proto__ = Model.prototype;\n  model.model = Model.prototype.model;\n  model.db = model.prototype.db = connection;\n  model.discriminators = model.prototype.discriminators = undefined;\n\n  model.prototype.$__setSchema(schema);\n\n  var collectionOptions = {\n      bufferCommands: schema.options.bufferCommands\n    , capped: schema.options.capped\n  };\n\n  model.prototype.collection = connection.collection(\n      collectionName\n    , collectionOptions\n  );\n\n  // apply methods\n  for (var i in schema.methods) {\n    if (typeof schema.methods[i] === 'function') {\n      model.prototype[i] = schema.methods[i];\n    } else {\n      (function(_i) {\n        Object.defineProperty(model.prototype, _i, {\n          get: function() {\n            var h = {};\n            for (var k in schema.methods[_i]) {\n              h[k] = schema.methods[_i][k].bind(this);\n            }\n            return h;\n          }\n        });\n      })(i);\n    }\n  }\n\n  for (var i in schema.methods)\n    model.prototype[i] = schema.methods[i];\n\n  // apply statics\n  for (var i in schema.statics)\n    model[i] = schema.statics[i];\n\n  model.schema = model.prototype.schema;\n  model.options = model.prototype.options;\n  model.collection = model.prototype.collection;\n\n  return model;\n};",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "compile",
    "string": "Model.compile()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Connection"
     ],
     "name": "conn",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Schema"
     ],
     "name": "[schema]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[collection]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Model"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Subclass this model with <code>conn</code>, <code>schema</code>, and <code>collection</code> settings.</p>",
    "summary": "<p>Subclass this model with <code>conn</code>, <code>schema</code>, and <code>collection</code> settings.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "Model.__subclass = function subclass (conn, schema, collection) {\n  // subclass model using this connection and collection name\n  var model = this;\n\n  var Model = function Model (doc, fields, skipId) {\n    if (!(this instanceof Model)) {\n      return new Model(doc, fields, skipId);\n    }\n    model.call(this, doc, fields, skipId);\n  }\n\n  Model.__proto__ = model;\n  Model.prototype.__proto__ = model.prototype;\n  Model.db = Model.prototype.db = conn;\n\n  var s = schema && 'string' != typeof schema\n    ? schema\n    : model.prototype.schema;\n\n  var options = s.options || {};\n\n  if (!collection) {\n    collection = model.prototype.schema.get('collection')\n              || utils.toCollectionName(model.modelName, options);\n  }\n\n  var collectionOptions = {\n      bufferCommands: s ? options.bufferCommands : true\n    , capped: s && options.capped\n  };\n\n  Model.prototype.collection = conn.collection(collection, collectionOptions);\n  Model.collection = Model.prototype.collection;\n  Model.init();\n  return Model;\n}",
   "ctx": {
    "type": "method",
    "receiver": "Model",
    "name": "__subclass",
    "string": "Model.__subclass()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = exports = Model;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "exports = Model",
    "string": "module.exports"
   }
  }
 ],
 "promise": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies</p>",
    "summary": "<p>Module dependencies</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var MPromise = require('mpromise');\nvar util = require('util');",
   "ctx": {
    "type": "declaration",
    "name": "MPromise",
    "value": "require('mpromise')",
    "string": "MPromise"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "fn",
     "description": "a function which will be called when the promise is resolved that accepts `fn(err, ...){}` as signature"
    },
    {
     "type": "inherits",
     "string": "mpromise https://github.com/aheckmann/mpromise"
    },
    {
     "type": "inherits",
     "string": "NodeJS EventEmitter http://nodejs.org/api/events.html#events_class_events_eventemitter"
    },
    {
     "type": "event",
     "string": "`err`: Emits when the promise is rejected"
    },
    {
     "type": "event",
     "string": "`complete`: Emits when the promise is fulfilled"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Promise constructor.</p>\n\n<p>Promises are returned from executed queries. Example:</p>\n\n<pre><code>var query = Candy.find({ bar: true });\nvar promise = query.exec();\n</code></pre>",
    "summary": "<p>Promise constructor.</p>",
    "body": "<p>Promises are returned from executed queries. Example:</p>\n\n<pre><code>var query = Candy.find({ bar: true });\nvar promise = query.exec();\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Promise (fn) {\n  MPromise.call(this, fn);\n}",
   "ctx": {
    "type": "function",
    "name": "Promise",
    "string": "Promise()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherit from mpromise</p>",
    "summary": "<p>Inherit from mpromise</p>",
    "body": ""
   },
   "ignore": true,
   "code": "Promise.prototype = Object.create(MPromise.prototype, {\n    constructor: {\n        value: Promise\n      , enumerable: false\n      , writable: true\n      , configurable: true\n    }\n});",
   "ctx": {
    "type": "property",
    "receiver": "Promise",
    "name": "prototype",
    "value": "Object.create(MPromise.prototype, {",
    "string": "Promise.prototype"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Override event names for backward compatibility.</p>",
    "summary": "<p>Override event names for backward compatibility.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "Promise.SUCCESS = 'complete';\nPromise.FAILURE = 'err';",
   "ctx": {
    "type": "property",
    "receiver": "Promise",
    "name": "SUCCESS",
    "value": "'complete'",
    "string": "Promise.SUCCESS"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "mpromise#on",
     "url": "https://github.com/aheckmann/mpromise#on",
     "visibility": "https://github.com/aheckmann/mpromise#on"
    },
    {
     "type": "method",
     "string": "on"
    },
    {
     "type": "memberOf",
     "parent": "Promise"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "event",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "listener",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Adds <code>listener</code> to the <code>event</code>.</p>\n\n<p>If <code>event</code> is either the success or failure event and the event has already been emitted, the<code>listener</code> is called immediately and passed the results of the original emitted event.</p>",
    "summary": "<p>Adds <code>listener</code> to the <code>event</code>.</p>",
    "body": "<p>If <code>event</code> is either the success or failure event and the event has already been emitted, the<code>listener</code> is called immediately and passed the results of the original emitted event.</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "mpromise#reject",
     "url": "https://github.com/aheckmann/mpromise#reject",
     "visibility": "https://github.com/aheckmann/mpromise#reject"
    },
    {
     "type": "method",
     "string": "reject"
    },
    {
     "type": "memberOf",
     "parent": "Promise"
    },
    {
     "type": "param",
     "types": [
      "Object",
      "String",
      "Error"
     ],
     "name": "reason",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Rejects this promise with <code>reason</code>.</p>\n\n<p>If the promise has already been fulfilled or rejected, not action is taken.</p>",
    "summary": "<p>Rejects this promise with <code>reason</code>.</p>",
    "body": "<p>If the promise has already been fulfilled or rejected, not action is taken.</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "param",
     "types": [
      "Error",
      "String"
     ],
     "name": "err",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": "this"
    }
   ],
   "description": {
    "full": "<p>Rejects this promise with <code>err</code>.</p>\n\n<p>If the promise has already been fulfilled or rejected, not action is taken.</p>\n\n<p>Differs from <a href=\"#promise_Promise-reject\">#reject</a> by first casting <code>err</code> to an <code>Error</code> if it is not <code>instanceof Error</code>.</p>",
    "summary": "<p>Rejects this promise with <code>err</code>.</p>",
    "body": "<p>If the promise has already been fulfilled or rejected, not action is taken.</p>\n\n<p>Differs from <a href=\"#promise_Promise-reject\">#reject</a> by first casting <code>err</code> to an <code>Error</code> if it is not <code>instanceof Error</code>.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Promise.prototype.error = function (err) {\n  if (!(err instanceof Error)) {\n    if (err instanceof Object) {\n      err = util.inspect(err);\n    }\n    err = new Error(err);\n  }\n  return this.reject(err);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Promise",
    "cons": "Promise",
    "name": "error",
    "string": "Promise.prototype.error()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Error"
     ],
     "name": "[err]",
     "description": "error or null"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[val]",
     "description": "value to fulfill the promise with"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Resolves this promise to a rejected state if <code>err</code> is passed or a fulfilled state if no <code>err</code> is passed.</p>\n\n<p>If the promise has already been fulfilled or rejected, not action is taken.</p>\n\n<p><code>err</code> will be cast to an Error if not already instanceof Error.</p>\n\n<p><em>NOTE: overrides <a href=\"https://github.com/aheckmann/mpromise#resolve\">mpromise#resolve</a> to provide error casting.</em></p>",
    "summary": "<p>Resolves this promise to a rejected state if <code>err</code> is passed or a fulfilled state if no <code>err</code> is passed.</p>",
    "body": "<p>If the promise has already been fulfilled or rejected, not action is taken.</p>\n\n<p><code>err</code> will be cast to an Error if not already instanceof Error.</p>\n\n<p><em>NOTE: overrides <a href=\"https://github.com/aheckmann/mpromise#resolve\">mpromise#resolve</a> to provide error casting.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Promise.prototype.resolve = function (err) {\n  if (err) return this.error(err);\n  return this.fulfill.apply(this, Array.prototype.slice.call(arguments, 1));\n};",
   "ctx": {
    "type": "method",
    "constructor": "Promise",
    "cons": "Promise",
    "name": "resolve",
    "string": "Promise.prototype.resolve()"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "addBack"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "listener",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": "this"
    },
    {
     "type": "deprecated",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Adds a single function as a listener to both err and complete.</p>\n\n<p>It will be executed with traditional node.js argument position when the promise is resolved.</p>\n\n<pre><code>promise.addBack(function (err, args...) {\n  if (err) return handleError(err);\n  console.log('success');\n})\n</code></pre>\n\n<p>Alias of <a href=\"https://github.com/aheckmann/mpromise#onresolve\">mpromise#onResolve</a>.</p>\n\n<p><em>Deprecated. Use <code>onResolve</code> instead.</em></p>",
    "summary": "<p>Adds a single function as a listener to both err and complete.</p>",
    "body": "<p>It will be executed with traditional node.js argument position when the promise is resolved.</p>\n\n<pre><code>promise.addBack(function (err, args...) {\n  if (err) return handleError(err);\n  console.log('success');\n})\n</code></pre>\n\n<p>Alias of <a href=\"https://github.com/aheckmann/mpromise#onresolve\">mpromise#onResolve</a>.</p>\n\n<p><em>Deprecated. Use <code>onResolve</code> instead.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Promise.prototype.addBack = Promise.prototype.onResolve;",
   "ctx": {
    "type": "property",
    "constructor": "Promise",
    "cons": "Promise",
    "name": "addBack",
    "value": "Promise.prototype.onResolve",
    "string": "Promise.prototype.addBack"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "fulfill"
    },
    {
     "type": "see",
     "title": "",
     "url": "https://github.com/aheckmann/mpromise#fulfill",
     "visibility": "https://github.com/aheckmann/mpromise#fulfill"
    },
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "args",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Fulfills this promise with passed arguments.</p>",
    "summary": "<p>Fulfills this promise with passed arguments.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "complete"
    },
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "args",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "deprecated",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Fulfills this promise with passed arguments.</p>\n\n<p>Alias of <a href=\"https://github.com/aheckmann/mpromise#fulfill\">mpromise#fulfill</a>.</p>\n\n<p><em>Deprecated. Use <code>fulfill</code> instead.</em></p>",
    "summary": "<p>Fulfills this promise with passed arguments.</p>",
    "body": "<p>Alias of <a href=\"https://github.com/aheckmann/mpromise#fulfill\">mpromise#fulfill</a>.</p>\n\n<p><em>Deprecated. Use <code>fulfill</code> instead.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Promise.prototype.complete = MPromise.prototype.fulfill;",
   "ctx": {
    "type": "property",
    "constructor": "Promise",
    "cons": "Promise",
    "name": "complete",
    "value": "MPromise.prototype.fulfill",
    "string": "Promise.prototype.complete"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "addCallback"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "listener",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "deprecated",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Adds a listener to the <code>complete</code> (success) event.</p>\n\n<p>Alias of <a href=\"https://github.com/aheckmann/mpromise#onfulfill\">mpromise#onFulfill</a>.</p>\n\n<p><em>Deprecated. Use <code>onFulfill</code> instead.</em></p>",
    "summary": "<p>Adds a listener to the <code>complete</code> (success) event.</p>",
    "body": "<p>Alias of <a href=\"https://github.com/aheckmann/mpromise#onfulfill\">mpromise#onFulfill</a>.</p>\n\n<p><em>Deprecated. Use <code>onFulfill</code> instead.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Promise.prototype.addCallback = Promise.prototype.onFulfill;",
   "ctx": {
    "type": "property",
    "constructor": "Promise",
    "cons": "Promise",
    "name": "addCallback",
    "value": "Promise.prototype.onFulfill",
    "string": "Promise.prototype.addCallback"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "addErrback"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "listener",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "deprecated",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Adds a listener to the <code>err</code> (rejected) event.</p>\n\n<p>Alias of <a href=\"https://github.com/aheckmann/mpromise#onreject\">mpromise#onReject</a>.</p>\n\n<p><em>Deprecated. Use <code>onReject</code> instead.</em></p>",
    "summary": "<p>Adds a listener to the <code>err</code> (rejected) event.</p>",
    "body": "<p>Alias of <a href=\"https://github.com/aheckmann/mpromise#onreject\">mpromise#onReject</a>.</p>\n\n<p><em>Deprecated. Use <code>onReject</code> instead.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Promise.prototype.addErrback = Promise.prototype.onReject;",
   "ctx": {
    "type": "property",
    "constructor": "Promise",
    "cons": "Promise",
    "name": "addErrback",
    "value": "Promise.prototype.onReject",
    "string": "Promise.prototype.addErrback"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "promises-A+",
     "url": "https://github.com/promises-aplus/promises-spec",
     "visibility": "https://github.com/promises-aplus/promises-spec"
    },
    {
     "type": "see",
     "title": "mpromise#then",
     "url": "https://github.com/aheckmann/mpromise#then",
     "visibility": "https://github.com/aheckmann/mpromise#then"
    },
    {
     "type": "method",
     "string": "then"
    },
    {
     "type": "memberOf",
     "parent": "Promise"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "onFulFill",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "onReject",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": "newPromise"
    }
   ],
   "description": {
    "full": "<p>Creates a new promise and returns it. If <code>onFulfill</code> or <code>onReject</code> are passed, they are added as SUCCESS/ERROR callbacks to this promise after the nextTick.</p>\n\n<p>Conforms to <a href=\"https://github.com/promises-aplus/promises-spec\">promises/A+</a> specification.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var promise = Meetups.find({ tags: 'javascript' }).select('_id').exec();\npromise.then(function (meetups) {\n  var ids = meetups.map(function (m) {\n    return m._id;\n  });\n  return People.find({ meetups: { $in: ids }).exec();\n}).then(function (people) {\n  if (people.length &lt; 10000) {\n    throw new Error('Too few people!!!');\n  } else {\n    throw new Error('Still need more people!!!');\n  }\n}).then(null, function (err) {\n  assert.ok(err instanceof Error);\n});\n</code></pre>",
    "summary": "<p>Creates a new promise and returns it. If <code>onFulfill</code> or <code>onReject</code> are passed, they are added as SUCCESS/ERROR callbacks to this promise after the nextTick.</p>",
    "body": "<p>Conforms to <a href=\"https://github.com/promises-aplus/promises-spec\">promises/A+</a> specification.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var promise = Meetups.find({ tags: 'javascript' }).select('_id').exec();\npromise.then(function (meetups) {\n  var ids = meetups.map(function (m) {\n    return m._id;\n  });\n  return People.find({ meetups: { $in: ids }).exec();\n}).then(function (people) {\n  if (people.length &lt; 10000) {\n    throw new Error('Too few people!!!');\n  } else {\n    throw new Error('Still need more people!!!');\n  }\n}).then(null, function (err) {\n  assert.ok(err instanceof Error);\n});\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "see",
     "title": "mpromise#end",
     "url": "https://github.com/aheckmann/mpromise#end",
     "visibility": "https://github.com/aheckmann/mpromise#end"
    },
    {
     "type": "method",
     "string": "end"
    },
    {
     "type": "memberOf",
     "parent": "Promise"
    }
   ],
   "description": {
    "full": "<p>Signifies that this promise was the last in a chain of <code>then()s</code>: if a handler passed to the call to <code>then</code> which produced this promise throws, the exception will go uncaught.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var p = new Promise;\np.then(function(){ throw new Error('shucks') });\nsetTimeout(function () {\n  p.fulfill();\n  // error was caught and swallowed by the promise returned from\n  // p.then(). we either have to always register handlers on\n  // the returned promises or we can do the following...\n}, 10);\n\n// this time we use .end() which prevents catching thrown errors\nvar p = new Promise;\nvar p2 = p.then(function(){ throw new Error('shucks') }).end(); // &lt;--\nsetTimeout(function () {\n  p.fulfill(); // throws \"shucks\"\n}, 10);\n</code></pre>",
    "summary": "<p>Signifies that this promise was the last in a chain of <code>then()s</code>: if a handler passed to the call to <code>then</code> which produced this promise throws, the exception will go uncaught.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var p = new Promise;\np.then(function(){ throw new Error('shucks') });\nsetTimeout(function () {\n  p.fulfill();\n  // error was caught and swallowed by the promise returned from\n  // p.then(). we either have to always register handlers on\n  // the returned promises or we can do the following...\n}, 10);\n\n// this time we use .end() which prevents catching thrown errors\nvar p = new Promise;\nvar p2 = p.then(function(){ throw new Error('shucks') }).end(); // &lt;--\nsetTimeout(function () {\n  p.fulfill(); // throws \"shucks\"\n}, 10);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [],
   "description": {
    "full": "<p>expose</p>",
    "summary": "<p>expose</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = Promise;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "Promise",
    "string": "module.exports"
   }
  }
 ],
 "query": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var mquery = require('mquery');\nvar util = require('util');\nvar events = require('events');\nvar mongo = require('mongodb');\n\nvar updateValidators = require('./services/updateValidators');\nvar utils = require('./utils');\nvar Promise = require('./promise');\nvar helpers = require('./queryhelpers');\nvar Types = require('./schema/index');\nvar Document = require('./document');\nvar QueryStream = require('./querystream');\nvar cast = require('./cast');\nvar ValidationError = require('./error/validation.js');",
   "ctx": {
    "type": "declaration",
    "name": "mquery",
    "value": "require('mquery')",
    "string": "mquery"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[model]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[conditions]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[collection]",
     "description": "Mongoose collection"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Query constructor used for building queries.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var query = new Query();\nquery.setOptions({ lean : true });\nquery.collection(model.collection);\nquery.where('age').gte(21).exec(callback);\n</code></pre>",
    "summary": "<p>Query constructor used for building queries.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var query = new Query();\nquery.setOptions({ lean : true });\nquery.collection(model.collection);\nquery.where('age').gte(21).exec(callback);\n</code></pre>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function Query(conditions, options, model, collection) {\n  // this stuff is for dealing with custom queries created by #toConstructor\n  if (!this._mongooseOptions) {\n    this._mongooseOptions = {};\n  }\n\n  // this is the case where we have a CustomQuery, we need to check if we got\n  // options passed in, and if we did, merge them in\n  if (options) {\n    var keys = Object.keys(options);\n    for (var i=0; i < keys.length; i++) {\n      var k = keys[i];\n      this._mongooseOptions[k] = options[k];\n    }\n  }\n\n  if (collection) {\n    this.mongooseCollection = collection;\n  }\n\n  if (model) {\n    this.model = model;\n  }\n\n  // this is needed because map reduce returns a model that can be queried, but\n  // all of the queries on said model should be lean\n  if (this.model && this.model._mapreduce) {\n    this.lean();\n  }\n\n  // inherit mquery\n  mquery.call(this, this.mongooseCollection, options);\n\n  if (conditions) {\n    this.find(conditions);\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "Query",
    "string": "Query()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>inherit mquery</p>",
    "summary": "<p>inherit mquery</p>",
    "body": ""
   },
   "ignore": true,
   "code": "Query.prototype = new mquery;\nQuery.prototype.constructor = Query;\nQuery.base = mquery.prototype;",
   "ctx": {
    "type": "property",
    "receiver": "Query",
    "name": "prototype",
    "value": "new mquery",
    "string": "Query.prototype"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "",
     "url": "http://docs.mongodb.org/manual/reference/operator/geoWithin/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/geoWithin/"
    },
    {
     "type": "default",
     "string": "true"
    },
    {
     "type": "property",
     "string": "use$geoWithin"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "receiver",
     "string": "Query"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Flag to opt out of using <code>$geoWithin</code>.</p>\n\n<pre><code>mongoose.Query.use$geoWithin = false;\n</code></pre>\n\n<p>MongoDB 2.4 deprecated the use of <code>$within</code>, replacing it with <code>$geoWithin</code>. Mongoose uses <code>$geoWithin</code> by default (which is 100% backward compatible with $within). If you are running an older version of MongoDB, set this flag to <code>false</code> so your <code>within()</code> queries continue to work.</p>",
    "summary": "<p>Flag to opt out of using <code>$geoWithin</code>.</p>",
    "body": "<pre><code>mongoose.Query.use$geoWithin = false;\n</code></pre>\n\n<p>MongoDB 2.4 deprecated the use of <code>$within</code>, replacing it with <code>$geoWithin</code>. Mongoose uses <code>$geoWithin</code> by default (which is 100% backward compatible with $within). If you are running an older version of MongoDB, set this flag to <code>false</code> so your <code>within()</code> queries continue to work.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.use$geoWithin = mquery.use$geoWithin;",
   "ctx": {
    "type": "property",
    "receiver": "Query",
    "name": "use$geoWithin",
    "value": "mquery.use$geoWithin",
    "string": "Query.use$geoWithin"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "subclass-of-Query"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Converts this query to a customized, reusable query constructor with all arguments and options retained.</p>\n\n<h4>Example</h4>\n\n<pre><code>// Create a query for adventure movies and read from the primary\n// node in the replica-set unless it is down, in which case we'll\n// read from a secondary node.\nvar query = Movie.find({ tags: 'adventure' }).read('primaryPreferred');\n\n// create a custom Query constructor based off these settings\nvar Adventure = query.toConstructor();\n\n// Adventure is now a subclass of mongoose.Query and works the same way but with the\n// default query parameters and options set.\nAdventure().exec(callback)\n\n// further narrow down our query results while still using the previous settings\nAdventure().where({ name: /^Life/ }).exec(callback);\n\n// since Adventure is a stand-alone constructor we can also add our own\n// helper methods and getters without impacting global queries\nAdventure.prototype.startsWith = function (prefix) {\n  this.where({ name: new RegExp('^' + prefix) })\n  return this;\n}\nObject.defineProperty(Adventure.prototype, 'highlyRated', {\n  get: function () {\n    this.where({ rating: { $gt: 4.5 }});\n    return this;\n  }\n})\nAdventure().highlyRated.startsWith('Life').exec(callback)\n</code></pre>\n\n<p>New in 3.7.3</p>",
    "summary": "<p>Converts this query to a customized, reusable query constructor with all arguments and options retained.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>// Create a query for adventure movies and read from the primary\n// node in the replica-set unless it is down, in which case we'll\n// read from a secondary node.\nvar query = Movie.find({ tags: 'adventure' }).read('primaryPreferred');\n\n// create a custom Query constructor based off these settings\nvar Adventure = query.toConstructor();\n\n// Adventure is now a subclass of mongoose.Query and works the same way but with the\n// default query parameters and options set.\nAdventure().exec(callback)\n\n// further narrow down our query results while still using the previous settings\nAdventure().where({ name: /^Life/ }).exec(callback);\n\n// since Adventure is a stand-alone constructor we can also add our own\n// helper methods and getters without impacting global queries\nAdventure.prototype.startsWith = function (prefix) {\n  this.where({ name: new RegExp('^' + prefix) })\n  return this;\n}\nObject.defineProperty(Adventure.prototype, 'highlyRated', {\n  get: function () {\n    this.where({ rating: { $gt: 4.5 }});\n    return this;\n  }\n})\nAdventure().highlyRated.startsWith('Life').exec(callback)\n</code></pre>\n\n<p>New in 3.7.3</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.toConstructor = function toConstructor () {\n  var CustomQuery = function(criteria, options) {\n    if (!(this instanceof CustomQuery))\n      return new CustomQuery(criteria, options);\n    Query.call(this, criteria, options || null);\n  };\n\n  util.inherits(CustomQuery, Query);\n\n  // set inherited defaults\n  var p = CustomQuery.prototype;\n\n  p.options = {};\n\n  p.setOptions(this.options);\n\n  p.op = this.op;\n  p._conditions = utils.clone(this._conditions);\n  p._fields = utils.clone(this._fields);\n  p._update = utils.clone(this._update);\n  p._path = this._path;\n  p._distict = this._distinct;\n  p._collection = this._collection;\n  p.model = this.model;\n  p.mongooseCollection = this.mongooseCollection;\n  p._mongooseOptions = this._mongooseOptions;\n\n  return CustomQuery;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "toConstructor",
    "string": "Query.prototype.toConstructor()"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$where",
     "url": "http://docs.mongodb.org/manual/reference/operator/where/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/where/"
    },
    {
     "type": "method",
     "string": "$where"
    },
    {
     "type": "param",
     "types": [
      "String",
      "Function"
     ],
     "name": "js",
     "description": "javascript string or function"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "method",
     "string": "$where"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a javascript function or expression to pass to MongoDBs query system.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.$where('this.comments.length &gt; 10 || this.name.length &gt; 5')\n\n// or\n\nquery.$where(function () {\n  return this.comments.length &gt; 10 || this.name.length &gt; 5;\n})\n</code></pre>\n\n<h4>NOTE:</h4>\n\n<p>Only use <code>$where</code> when you have a condition that cannot be met using other MongoDB operators like <code>$lt</code>.<br /><strong>Be sure to read about all of <a href=\"http://docs.mongodb.org/manual/reference/operator/where/\">its caveats</a> before using.</strong></p>",
    "summary": "<p>Specifies a javascript function or expression to pass to MongoDBs query system.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.$where('this.comments.length &gt; 10 || this.name.length &gt; 5')\n\n// or\n\nquery.$where(function () {\n  return this.comments.length &gt; 10 || this.name.length &gt; 5;\n})\n</code></pre>\n\n<h4>NOTE:</h4>\n\n<p>Only use <code>$where</code> when you have a condition that cannot be met using other MongoDB operators like <code>$lt</code>.<br /><strong>Be sure to read about all of <a href=\"http://docs.mongodb.org/manual/reference/operator/where/\">its caveats</a> before using.</strong></p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "where"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String",
      "Object"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "[val]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a <code>path</code> for use with chaining.</p>\n\n<h4>Example</h4>\n\n<pre><code>// instead of writing:\nUser.find({age: {$gte: 21, $lte: 65}}, callback);\n\n// we can instead write:\nUser.where('age').gte(21).lte(65);\n\n// passing query conditions is permitted\nUser.find().where({ name: 'vonderful' })\n\n// chaining\nUser\n.where('age').gte(21).lte(65)\n.where('name', /^vonderful/i)\n.where('friends').slice(10)\n.exec(callback)\n</code></pre>",
    "summary": "<p>Specifies a <code>path</code> for use with chaining.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>// instead of writing:\nUser.find({age: {$gte: 21, $lte: 65}}, callback);\n\n// we can instead write:\nUser.where('age').gte(21).lte(65);\n\n// passing query conditions is permitted\nUser.find().where({ name: 'vonderful' })\n\n// chaining\nUser\n.where('age').gte(21).lte(65)\n.where('name', /^vonderful/i)\n.where('friends').slice(10)\n.exec(callback)\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "equals"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies the complementary comparison value for paths specified with <code>where()</code></p>\n\n<h4>Example</h4>\n\n<pre><code>User.where('age').equals(49);\n\n// is the same as\n\nUser.where('age', 49);\n</code></pre>",
    "summary": "<p>Specifies the complementary comparison value for paths specified with <code>where()</code></p>",
    "body": "<h4>Example</h4>\n\n<pre><code>User.where('age').equals(49);\n\n// is the same as\n\nUser.where('age', 49);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$or",
     "url": "http://docs.mongodb.org/manual/reference/operator/or/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/or/"
    },
    {
     "type": "method",
     "string": "or"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "array",
     "description": "array of conditions"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies arguments for an <code>$or</code> condition.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.or([{ color: 'red' }, { status: 'emergency' }])\n</code></pre>",
    "summary": "<p>Specifies arguments for an <code>$or</code> condition.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.or([{ color: 'red' }, { status: 'emergency' }])\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$nor",
     "url": "http://docs.mongodb.org/manual/reference/operator/nor/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/nor/"
    },
    {
     "type": "method",
     "string": "nor"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "array",
     "description": "array of conditions"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies arguments for a <code>$nor</code> condition.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.nor([{ color: 'green' }, { status: 'ok' }])\n</code></pre>",
    "summary": "<p>Specifies arguments for a <code>$nor</code> condition.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.nor([{ color: 'green' }, { status: 'ok' }])\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "and"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "see",
     "title": "$and",
     "url": "http://docs.mongodb.org/manual/reference/operator/and/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/and/"
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "array",
     "description": "array of conditions"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies arguments for a <code>$and</code> condition.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.and([{ color: 'green' }, { status: 'ok' }])\n</code></pre>",
    "summary": "<p>Specifies arguments for a <code>$and</code> condition.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.and([{ color: 'green' }, { status: 'ok' }])\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "gt"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "see",
     "title": "$gt",
     "url": "http://docs.mongodb.org/manual/reference/operator/gt/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/gt/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a $gt query condition.</p>\n\n<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>\n\n<h4>Example</h4>\n\n<pre><code>Thing.find().where('age').gt(21)\n\n// or\nThing.find().gt('age', 21)\n</code></pre>",
    "summary": "<p>Specifies a $gt query condition.</p>",
    "body": "<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>\n\n<h4>Example</h4>\n\n<pre><code>Thing.find().where('age').gt(21)\n\n// or\nThing.find().gt('age', 21)\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "gte"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "see",
     "title": "$gte",
     "url": "http://docs.mongodb.org/manual/reference/operator/gte/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/gte/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a $gte query condition.</p>\n\n<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>",
    "summary": "<p>Specifies a $gte query condition.</p>",
    "body": "<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "lt"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "see",
     "title": "$lt",
     "url": "http://docs.mongodb.org/manual/reference/operator/lt/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/lt/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a $lt query condition.</p>\n\n<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>",
    "summary": "<p>Specifies a $lt query condition.</p>",
    "body": "<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "lte"
    },
    {
     "type": "see",
     "title": "$lte",
     "url": "http://docs.mongodb.org/manual/reference/operator/lte/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/lte/"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a $lte query condition.</p>\n\n<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>",
    "summary": "<p>Specifies a $lte query condition.</p>",
    "body": "<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$ne",
     "url": "http://docs.mongodb.org/manual/reference/operator/ne/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/ne/"
    },
    {
     "type": "method",
     "string": "ne"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a $ne query condition.</p>\n\n<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>",
    "summary": "<p>Specifies a $ne query condition.</p>",
    "body": "<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$in",
     "url": "http://docs.mongodb.org/manual/reference/operator/in/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/in/"
    },
    {
     "type": "method",
     "string": "in"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies an $in query condition.</p>\n\n<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>",
    "summary": "<p>Specifies an $in query condition.</p>",
    "body": "<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$nin",
     "url": "http://docs.mongodb.org/manual/reference/operator/nin/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/nin/"
    },
    {
     "type": "method",
     "string": "nin"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies an $nin query condition.</p>\n\n<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>",
    "summary": "<p>Specifies an $nin query condition.</p>",
    "body": "<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$all",
     "url": "http://docs.mongodb.org/manual/reference/operator/all/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/all/"
    },
    {
     "type": "method",
     "string": "all"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies an $all query condition.</p>\n\n<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>",
    "summary": "<p>Specifies an $all query condition.</p>",
    "body": "<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$size",
     "url": "http://docs.mongodb.org/manual/reference/operator/size/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/size/"
    },
    {
     "type": "method",
     "string": "size"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a $size query condition.</p>\n\n<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>\n\n<h4>Example</h4>\n\n<pre><code>MyModel.where('tags').size(0).exec(function (err, docs) {\n  if (err) return handleError(err);\n\n  assert(Array.isArray(docs));\n  console.log('documents with 0 tags', docs);\n})\n</code></pre>",
    "summary": "<p>Specifies a $size query condition.</p>",
    "body": "<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>\n\n<h4>Example</h4>\n\n<pre><code>MyModel.where('tags').size(0).exec(function (err, docs) {\n  if (err) return handleError(err);\n\n  assert(Array.isArray(docs));\n  console.log('documents with 0 tags', docs);\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$regex",
     "url": "http://docs.mongodb.org/manual/reference/operator/regex/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/regex/"
    },
    {
     "type": "method",
     "string": "regex"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a $regex query condition.</p>\n\n<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>",
    "summary": "<p>Specifies a $regex query condition.</p>",
    "body": "<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "$maxDistance",
     "url": "http://docs.mongodb.org/manual/reference/operator/maxDistance/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/maxDistance/"
    },
    {
     "type": "method",
     "string": "maxDistance"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a $maxDistance query condition.</p>\n\n<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>",
    "summary": "<p>Specifies a $maxDistance query condition.</p>",
    "body": "<p>When called with one argument, the most recent path passed to <code>where()</code> is used.</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "mod"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "$mod",
     "url": "http://docs.mongodb.org/manual/reference/operator/mod/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/mod/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a <code>$mod</code> condition</p>",
    "summary": "<p>Specifies a <code>$mod</code> condition</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "exists"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "$exists",
     "url": "http://docs.mongodb.org/manual/reference/operator/exists/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/exists/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies an <code>$exists</code> condition</p>\n\n<h4>Example</h4>\n\n<pre><code>// { name: { $exists: true }}\nThing.where('name').exists()\nThing.where('name').exists(true)\nThing.find().exists('name')\n\n// { name: { $exists: false }}\nThing.where('name').exists(false);\nThing.find().exists('name', false);\n</code></pre>",
    "summary": "<p>Specifies an <code>$exists</code> condition</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>// { name: { $exists: true }}\nThing.where('name').exists()\nThing.where('name').exists(true)\nThing.find().exists('name')\n\n// { name: { $exists: false }}\nThing.where('name').exists(false);\nThing.find().exists('name', false);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "elemMatch"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String",
      "Object",
      "Function"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object",
      "Function"
     ],
     "name": "criteria",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "$elemMatch",
     "url": "http://docs.mongodb.org/manual/reference/operator/elemMatch/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/elemMatch/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies an <code>$elemMatch</code> condition</p>\n\n<h4>Example</h4>\n\n<pre><code>query.elemMatch('comment', { author: 'autobot', votes: {$gte: 5}})\n\nquery.where('comment').elemMatch({ author: 'autobot', votes: {$gte: 5}})\n\nquery.elemMatch('comment', function (elem) {\n  elem.where('author').equals('autobot');\n  elem.where('votes').gte(5);\n})\n\nquery.where('comment').elemMatch(function (elem) {\n  elem.where({ author: 'autobot' });\n  elem.where('votes').gte(5);\n})\n</code></pre>",
    "summary": "<p>Specifies an <code>$elemMatch</code> condition</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.elemMatch('comment', { author: 'autobot', votes: {$gte: 5}})\n\nquery.where('comment').elemMatch({ author: 'autobot', votes: {$gte: 5}})\n\nquery.elemMatch('comment', function (elem) {\n  elem.where('author').equals('autobot');\n  elem.where('votes').gte(5);\n})\n\nquery.where('comment').elemMatch(function (elem) {\n  elem.where({ author: 'autobot' });\n  elem.where('votes').gte(5);\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "within"
    },
    {
     "type": "see",
     "title": "$polygon",
     "url": "http://docs.mongodb.org/manual/reference/operator/polygon/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/polygon/"
    },
    {
     "type": "see",
     "title": "$box",
     "url": "http://docs.mongodb.org/manual/reference/operator/box/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/box/"
    },
    {
     "type": "see",
     "title": "$geometry",
     "url": "http://docs.mongodb.org/manual/reference/operator/geometry/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/geometry/"
    },
    {
     "type": "see",
     "title": "$center",
     "url": "http://docs.mongodb.org/manual/reference/operator/center/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/center/"
    },
    {
     "type": "see",
     "title": "$centerSphere",
     "url": "http://docs.mongodb.org/manual/reference/operator/centerSphere/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/centerSphere/"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Defines a <code>$within</code> or <code>$geoWithin</code> argument for geo-spatial queries.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.where(path).within().box()\nquery.where(path).within().circle()\nquery.where(path).within().geometry()\n\nquery.where('loc').within({ center: [50,50], radius: 10, unique: true, spherical: true });\nquery.where('loc').within({ box: [[40.73, -73.9], [40.7, -73.988]] });\nquery.where('loc').within({ polygon: [[],[],[],[]] });\n\nquery.where('loc').within([], [], []) // polygon\nquery.where('loc').within([], []) // box\nquery.where('loc').within({ type: 'LineString', coordinates: [...] }); // geometry\n</code></pre>\n\n<p><strong>MUST</strong> be used after <code>where()</code>.</p>\n\n<h4>NOTE:</h4>\n\n<p>As of Mongoose 3.7, <code>$geoWithin</code> is always used for queries. To change this behavior, see <a href=\"#query_Query-use%2524geoWithin\">Query.use$geoWithin</a>.</p>\n\n<h4>NOTE:</h4>\n\n<p>In Mongoose 3.7, <code>within</code> changed from a getter to a function. If you need the old syntax, use <a href=\"https://github.com/ebensing/mongoose-within\">this</a>.</p>",
    "summary": "<p>Defines a <code>$within</code> or <code>$geoWithin</code> argument for geo-spatial queries.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.where(path).within().box()\nquery.where(path).within().circle()\nquery.where(path).within().geometry()\n\nquery.where('loc').within({ center: [50,50], radius: 10, unique: true, spherical: true });\nquery.where('loc').within({ box: [[40.73, -73.9], [40.7, -73.988]] });\nquery.where('loc').within({ polygon: [[],[],[],[]] });\n\nquery.where('loc').within([], [], []) // polygon\nquery.where('loc').within([], []) // box\nquery.where('loc').within({ type: 'LineString', coordinates: [...] }); // geometry\n</code></pre>\n\n<p><strong>MUST</strong> be used after <code>where()</code>.</p>\n\n<h4>NOTE:</h4>\n\n<p>As of Mongoose 3.7, <code>$geoWithin</code> is always used for queries. To change this behavior, see <a href=\"#query_Query-use%2524geoWithin\">Query.use$geoWithin</a>.</p>\n\n<h4>NOTE:</h4>\n\n<p>In Mongoose 3.7, <code>within</code> changed from a getter to a function. If you need the old syntax, use <a href=\"https://github.com/ebensing/mongoose-within\">this</a>.</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "slice"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": "number/range of elements to slice"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://www.mongodb.org/display/DOCS/Retrieving+a+Subset+of+Fields#RetrievingaSubsetofFields-RetrievingaSubrangeofArrayElements",
     "visibility": "http://www.mongodb.org/display/DOCS/Retrieving+a+Subset+of+Fields#RetrievingaSubsetofFields-RetrievingaSubrangeofArrayElements"
    },
    {
     "type": "see",
     "title": "$slice",
     "url": "http://docs.mongodb.org/manual/reference/projection/slice/#prj._S_slice",
     "visibility": "http://docs.mongodb.org/manual/reference/projection/slice/#prj._S_slice"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a $slice projection for an array.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.slice('comments', 5)\nquery.slice('comments', -5)\nquery.slice('comments', [10, 5])\nquery.where('comments').slice(5)\nquery.where('comments').slice([-10, 5])\n</code></pre>",
    "summary": "<p>Specifies a $slice projection for an array.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.slice('comments', 5)\nquery.slice('comments', -5)\nquery.slice('comments', [10, 5])\nquery.where('comments').slice(5)\nquery.where('comments').slice([-10, 5])\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "limit"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies the maximum number of documents the query will return.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.limit(20)\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>",
    "summary": "<p>Specifies the maximum number of documents the query will return.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.limit(20)\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "skip"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "see",
     "title": "cursor.skip",
     "url": "http://docs.mongodb.org/manual/reference/method/cursor.skip/",
     "visibility": "http://docs.mongodb.org/manual/reference/method/cursor.skip/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies the number of documents to skip.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.skip(100).limit(20)\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>",
    "summary": "<p>Specifies the number of documents to skip.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.skip(100).limit(20)\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "maxScan"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "see",
     "title": "maxScan",
     "url": "http://docs.mongodb.org/manual/reference/operator/maxScan/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/maxScan/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies the maxScan option.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.maxScan(100)\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>",
    "summary": "<p>Specifies the maxScan option.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.maxScan(100)\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "batchSize"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "see",
     "title": "batchSize",
     "url": "http://docs.mongodb.org/manual/reference/method/cursor.batchSize/",
     "visibility": "http://docs.mongodb.org/manual/reference/method/cursor.batchSize/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies the batchSize option.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.batchSize(100)\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>",
    "summary": "<p>Specifies the batchSize option.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.batchSize(100)\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "comment"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "see",
     "title": "comment",
     "url": "http://docs.mongodb.org/manual/reference/operator/comment/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/comment/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies the <code>comment</code> option.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.comment('login query')\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>",
    "summary": "<p>Specifies the <code>comment</code> option.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.comment('login query')\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "snapshot"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "see",
     "title": "snapshot",
     "url": "http://docs.mongodb.org/manual/reference/operator/snapshot/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/snapshot/"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies this query as a <code>snapshot</code> query.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.snapshot() // true\nquery.snapshot(true)\nquery.snapshot(false)\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>",
    "summary": "<p>Specifies this query as a <code>snapshot</code> query.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.snapshot() // true\nquery.snapshot(true)\nquery.snapshot(false)\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "hint"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "val",
     "description": "a hint object"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "$hint",
     "url": "http://docs.mongodb.org/manual/reference/operator/hint/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/hint/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets query hints.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.hint({ indexA: 1, indexB: -1})\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>",
    "summary": "<p>Sets query hints.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.hint({ indexA: 1, indexB: -1})\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "select"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Object",
      "String"
     ],
     "name": "arg",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "local": "SchemaType",
     "visibility": "SchemaType"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies which document fields to include or exclude</p>\n\n<p>When using string syntax, prefixing a path with <code>-</code> will flag that path as excluded. When a path does not have the <code>-</code> prefix, it is included. Lastly, if a path is prefixed with <code>+</code>, it forces inclusion of the path, which is useful for paths excluded at the <a href=\"/docs/api.html#schematype_SchemaType-select\">schema level</a>.</p>\n\n<h4>Example</h4>\n\n<pre><code>// include a and b, exclude c\nquery.select('a b -c');\n\n// or you may use object notation, useful when\n// you have keys already prefixed with a \"-\"\nquery.select({a: 1, b: 1, c: 0});\n\n// force inclusion of field excluded at schema level\nquery.select('+path')\n</code></pre>\n\n<h4>NOTE:</h4>\n\n<p>Cannot be used with <code>distinct()</code>.</p>\n\n<p><em>v2 had slightly different syntax such as allowing arrays of field names. This support was removed in v3.</em></p>",
    "summary": "<p>Specifies which document fields to include or exclude</p>",
    "body": "<p>When using string syntax, prefixing a path with <code>-</code> will flag that path as excluded. When a path does not have the <code>-</code> prefix, it is included. Lastly, if a path is prefixed with <code>+</code>, it forces inclusion of the path, which is useful for paths excluded at the <a href=\"/docs/api.html#schematype_SchemaType-select\">schema level</a>.</p>\n\n<h4>Example</h4>\n\n<pre><code>// include a and b, exclude c\nquery.select('a b -c');\n\n// or you may use object notation, useful when\n// you have keys already prefixed with a \"-\"\nquery.select({a: 1, b: 1, c: 0});\n\n// force inclusion of field excluded at schema level\nquery.select('+path')\n</code></pre>\n\n<h4>NOTE:</h4>\n\n<p>Cannot be used with <code>distinct()</code>.</p>\n\n<p><em>v2 had slightly different syntax such as allowing arrays of field names. This support was removed in v3.</em></p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "slaveOk"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "deprecated",
     "string": "use read() preferences instead if on mongodb >= 2.2"
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "v",
     "description": "defaults to true"
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://docs.mongodb.org/manual/applications/replication/#read-preference",
     "visibility": "http://docs.mongodb.org/manual/applications/replication/#read-preference"
    },
    {
     "type": "see",
     "title": "slaveOk",
     "url": "http://docs.mongodb.org/manual/reference/method/rs.slaveOk/",
     "visibility": "http://docs.mongodb.org/manual/reference/method/rs.slaveOk/"
    },
    {
     "type": "see",
     "local": "read() #query_Query-read",
     "visibility": "read()"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p><em>DEPRECATED</em> Sets the slaveOk option.</p>\n\n<p><strong>Deprecated</strong> in MongoDB 2.2 in favor of <a href=\"#query_Query-read\">read preferences</a>.</p>\n\n<h4>Example:</h4>\n\n<pre><code>query.slaveOk() // true\nquery.slaveOk(true)\nquery.slaveOk(false)\n</code></pre>",
    "summary": "<p><em>DEPRECATED</em> Sets the slaveOk option.</p>",
    "body": "<p><strong>Deprecated</strong> in MongoDB 2.2 in favor of <a href=\"#query_Query-read\">read preferences</a>.</p>\n\n<h4>Example:</h4>\n\n<pre><code>query.slaveOk() // true\nquery.slaveOk(true)\nquery.slaveOk(false)\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "read"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "pref",
     "description": "one of the listed preference options or aliases"
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "[tags]",
     "description": "optional tags for this query"
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://docs.mongodb.org/manual/applications/replication/#read-preference",
     "visibility": "http://docs.mongodb.org/manual/applications/replication/#read-preference"
    },
    {
     "type": "see",
     "title": "driver",
     "url": "http://mongodb.github.com/node-mongodb-native/driver-articles/anintroductionto1_1and2_2.html#read-preferences",
     "visibility": "http://mongodb.github.com/node-mongodb-native/driver-articles/anintroductionto1_1and2_2.html#read-preferences"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Determines the MongoDB nodes from which to read.</p>\n\n<h4>Preferences:</h4>\n\n<pre><code>primary - (default) Read from primary only. Operations will produce an error if primary is unavailable. Cannot be combined with tags.\nsecondary            Read from secondary if available, otherwise error.\nprimaryPreferred     Read from primary if available, otherwise a secondary.\nsecondaryPreferred   Read from a secondary if available, otherwise read from the primary.\nnearest              All operations read from among the nearest candidates, but unlike other modes, this option will include both the primary and all secondaries in the random selection.\n</code></pre>\n\n<p>Aliases</p>\n\n<pre><code>p   primary\npp  primaryPreferred\ns   secondary\nsp  secondaryPreferred\nn   nearest\n</code></pre>\n\n<h4>Example:</h4>\n\n<pre><code>new Query().read('primary')\nnew Query().read('p')  // same as primary\n\nnew Query().read('primaryPreferred')\nnew Query().read('pp') // same as primaryPreferred\n\nnew Query().read('secondary')\nnew Query().read('s')  // same as secondary\n\nnew Query().read('secondaryPreferred')\nnew Query().read('sp') // same as secondaryPreferred\n\nnew Query().read('nearest')\nnew Query().read('n')  // same as nearest\n\n// read from secondaries with matching tags\nnew Query().read('s', [{ dc:'sf', s: 1 },{ dc:'ma', s: 2 }])\n</code></pre>\n\n<p>Read more about how to use read preferrences <a href=\"http://docs.mongodb.org/manual/applications/replication/#read-preference\">here</a> and <a href=\"http://mongodb.github.com/node-mongodb-native/driver-articles/anintroductionto1_1and2_2.html#read-preferences\">here</a>.</p>",
    "summary": "<p>Determines the MongoDB nodes from which to read.</p>",
    "body": "<h4>Preferences:</h4>\n\n<pre><code>primary - (default) Read from primary only. Operations will produce an error if primary is unavailable. Cannot be combined with tags.\nsecondary            Read from secondary if available, otherwise error.\nprimaryPreferred     Read from primary if available, otherwise a secondary.\nsecondaryPreferred   Read from a secondary if available, otherwise read from the primary.\nnearest              All operations read from among the nearest candidates, but unlike other modes, this option will include both the primary and all secondaries in the random selection.\n</code></pre>\n\n<p>Aliases</p>\n\n<pre><code>p   primary\npp  primaryPreferred\ns   secondary\nsp  secondaryPreferred\nn   nearest\n</code></pre>\n\n<h4>Example:</h4>\n\n<pre><code>new Query().read('primary')\nnew Query().read('p')  // same as primary\n\nnew Query().read('primaryPreferred')\nnew Query().read('pp') // same as primaryPreferred\n\nnew Query().read('secondary')\nnew Query().read('s')  // same as secondary\n\nnew Query().read('secondaryPreferred')\nnew Query().read('sp') // same as secondaryPreferred\n\nnew Query().read('nearest')\nnew Query().read('n')  // same as nearest\n\n// read from secondaries with matching tags\nnew Query().read('s', [{ dc:'sf', s: 1 },{ dc:'ma', s: 2 }])\n</code></pre>\n\n<p>Read more about how to use read preferrences <a href=\"http://docs.mongodb.org/manual/applications/replication/#read-preference\">here</a> and <a href=\"http://mongodb.github.com/node-mongodb-native/driver-articles/anintroductionto1_1and2_2.html#read-preferences\">here</a>.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.read = function read (pref, tags) {\n  // first cast into a ReadPreference object to support tags\n  var readPref = utils.readPref.apply(utils.readPref, arguments);\n  return Query.base.read.call(this, readPref);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "read",
    "string": "Query.prototype.read()"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "merge"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Query",
      "Object"
     ],
     "name": "source",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    }
   ],
   "description": {
    "full": "<p>Merges another Query or conditions object into this one.</p>\n\n<p>When a Query is passed, conditions, field selection and options are merged.</p>\n\n<p>New in 3.7.0</p>",
    "summary": "<p>Merges another Query or conditions object into this one.</p>",
    "body": "<p>When a Query is passed, conditions, field selection and options are merged.</p>\n\n<p>New in 3.7.0</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets query options.</p>\n\n<h4>Options:</h4>\n\n<ul>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Tailable+Cursors\">tailable</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7Bsort()%7D%7D\">sort</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7Blimit%28%29%7D%7D\">limit</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7Bskip%28%29%7D%7D\">skip</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%24maxScan\">maxscan</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7BbatchSize%28%29%7D%7D\">batchSize</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%24comment\">comment</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7Bsnapshot%28%29%7D%7D\">snapshot</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%24hint\">hint</a> *</li>\n<li><a href=\"http://docs.mongodb.org/manual/applications/replication/#read-preference\">slaveOk</a> *</li>\n<li><a href=\"./api.html#query_Query-lean\">lean</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/getLastError+Command\">safe</a></li>\n</ul>\n\n<p><em>* denotes a query helper method is also available</em></p>",
    "summary": "<p>Sets query options.</p>",
    "body": "<h4>Options:</h4>\n\n<ul>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Tailable+Cursors\">tailable</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7Bsort()%7D%7D\">sort</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7Blimit%28%29%7D%7D\">limit</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7Bskip%28%29%7D%7D\">skip</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%24maxScan\">maxscan</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7BbatchSize%28%29%7D%7D\">batchSize</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%24comment\">comment</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7Bsnapshot%28%29%7D%7D\">snapshot</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%24hint\">hint</a> *</li>\n<li><a href=\"http://docs.mongodb.org/manual/applications/replication/#read-preference\">slaveOk</a> *</li>\n<li><a href=\"./api.html#query_Query-lean\">lean</a> *</li>\n<li><a href=\"http://www.mongodb.org/display/DOCS/getLastError+Command\">safe</a></li>\n</ul>\n\n<p><em>* denotes a query helper method is also available</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.setOptions = function (options, overwrite) {\n  // overwrite is only for internal use\n  if (overwrite) {\n    // ensure that _mongooseOptions & options are two different objects\n    this._mongooseOptions = (options && utils.clone(options)) || {};\n    this.options = options || {};\n\n    if('populate' in options) {\n      this.populate(this._mongooseOptions);\n    }\n    return this;\n  }\n\n  if (!(options && 'Object' == options.constructor.name)) {\n    return this;\n  }\n\n  return Query.base.setOptions.call(this, options);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "setOptions",
    "string": "Query.prototype.setOptions()"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "_fieldsForExec"
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Returns fields selection for this query.</p>",
    "summary": "<p>Returns fields selection for this query.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "_updateForExec"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Return an update document with corrected $set operations.</p>",
    "summary": "<p>Return an update document with corrected $set operations.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "_ensurePath"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "method",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Makes sure _path is set.</p>",
    "summary": "<p>Makes sure _path is set.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "canMerge"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "conds",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Determines if <code>conds</code> can be merged using <code>mquery().merge()</code></p>",
    "summary": "<p>Determines if <code>conds</code> can be merged using <code>mquery().merge()</code></p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Model"
     ],
     "name": "model",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Returns default options for this query.</p>",
    "summary": "<p>Returns default options for this query.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Query.prototype._optionsForExec = function (model) {\n  var options = Query.base._optionsForExec.call(this);\n\n  delete options.populate;\n  model = model || this.model;\n\n  if (!model) {\n    return options;\n  } else {\n    if (!('safe' in options) && model.schema.options.safe) {\n      options.safe = model.schema.options.safe;\n    }\n\n    if (!('readPreference' in options) && model.schema.options.read) {\n      options.readPreference = model.schema.options.read;\n    }\n\n    return options;\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "_optionsForExec",
    "string": "Query.prototype._optionsForExec()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "bool",
     "description": "defaults to true"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets the lean option.</p>\n\n<p>Documents returned from queries with the <code>lean</code> option enabled are plain javascript objects, not <a href=\"#document-js\">MongooseDocuments</a>. They have no <code>save</code> method, getters/setters or other Mongoose magic applied.</p>\n\n<h4>Example:</h4>\n\n<pre><code>new Query().lean() // true\nnew Query().lean(true)\nnew Query().lean(false)\n\nModel.find().lean().exec(function (err, docs) {\n  docs[0] instanceof mongoose.Document // false\n});\n</code></pre>\n\n<p>This is a <a href=\"https://groups.google.com/forum/#!topic/mongoose-orm/u2_DzDydcnA/discussion\">great</a> option in high-performance read-only scenarios, especially when combined with <a href=\"#query_Query-stream\">stream</a>.</p>",
    "summary": "<p>Sets the lean option.</p>",
    "body": "<p>Documents returned from queries with the <code>lean</code> option enabled are plain javascript objects, not <a href=\"#document-js\">MongooseDocuments</a>. They have no <code>save</code> method, getters/setters or other Mongoose magic applied.</p>\n\n<h4>Example:</h4>\n\n<pre><code>new Query().lean() // true\nnew Query().lean(true)\nnew Query().lean(false)\n\nModel.find().lean().exec(function (err, docs) {\n  docs[0] instanceof mongoose.Document // false\n});\n</code></pre>\n\n<p>This is a <a href=\"https://groups.google.com/forum/#!topic/mongoose-orm/u2_DzDydcnA/discussion\">great</a> option in high-performance read-only scenarios, especially when combined with <a href=\"#query_Query-stream\">stream</a>.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.lean = function (v) {\n  this._mongooseOptions.lean = arguments.length ? !!v : true;\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "lean",
    "string": "Query.prototype.lean()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[criteria]",
     "description": "mongodb selector"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Finds documents.</p>\n\n<p>When no <code>callback</code> is passed, the query is not executed.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.find({ name: 'Los Pollos Hermanos' }).find(callback)\n</code></pre>",
    "summary": "<p>Finds documents.</p>",
    "body": "<p>When no <code>callback</code> is passed, the query is not executed.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.find({ name: 'Los Pollos Hermanos' }).find(callback)\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.find = function (conditions, callback) {\n  if ('function' == typeof conditions) {\n    callback = conditions;\n    conditions = {};\n  } else if (conditions instanceof Document) {\n    conditions = conditions.toObject();\n  }\n\n  if (mquery.canMerge(conditions)) {\n    this.merge(conditions);\n  }\n\n  prepareDiscriminatorCriteria(this);\n\n  try {\n    this.cast(this.model);\n    this._castError = null;\n  } catch (err) {\n    this._castError = err;\n  }\n\n  // if we don't have a callback, then just return the query object\n  if (!callback) {\n    return Query.base.find.call(this);\n  }\n\n  var promise = new Promise(callback);\n  if (this._castError) {\n    promise.error(this._castError);\n    return this;\n  }\n\n  this._applyPaths();\n  this._fields = this._castFields(this._fields);\n\n  var fields = this._fieldsForExec();\n  var options = this._mongooseOptions;\n  var self = this;\n\n\n  var cb = function(err, docs) {\n    if (err) return promise.error(err);\n\n    if (0 === docs.length) {\n      return promise.complete(docs);\n    }\n\n    if (!options.populate) {\n      return true === options.lean\n        ? promise.complete(docs)\n        : completeMany(self.model, docs, fields, self, null, promise);\n    }\n\n\n    var pop = helpers.preparePopulationOptionsMQ(self, options);\n    self.model.populate(docs, pop, function (err, docs) {\n      if(err) return promise.error(err);\n      return true === options.lean\n        ? promise.complete(docs)\n        : completeMany(self.model, docs, fields, self, pop, promise);\n    });\n  };\n\n  return Query.base.find.call(this, {}, cb);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "find",
    "string": "Query.prototype.find()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Model"
     ],
     "name": "model",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "docs",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "fields",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Query"
     ],
     "name": "self",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "[pop]",
     "description": "array of paths used in population"
    },
    {
     "type": "param",
     "types": [
      "Promise"
     ],
     "name": "promise",
     "description": ""
    }
   ],
   "description": {
    "full": "<p>hydrates many documents</p>",
    "summary": "<p>hydrates many documents</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function completeMany (model, docs, fields, self, pop, promise) {\n  var arr = [];\n  var count = docs.length;\n  var len = count;\n  var opts = pop ?\n    { populated: pop }\n    : undefined;\n  for (var i=0; i < len; ++i) {\n    arr[i] = helpers.createModel(model, docs[i], fields);\n    arr[i].init(docs[i], opts, function (err) {\n      if (err) return promise.error(err);\n      --count || promise.complete(arr);\n    });\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "completeMany",
    "string": "completeMany()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object",
      "Query"
     ],
     "name": "[criteria]",
     "description": "mongodb selector"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "findOne",
     "url": "http://docs.mongodb.org/manual/reference/method/db.collection.findOne/",
     "visibility": "http://docs.mongodb.org/manual/reference/method/db.collection.findOne/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Declares the query a findOne operation. When executed, the first found document is passed to the callback.</p>\n\n<p>Passing a <code>callback</code> executes the query.</p>\n\n<h4>Example</h4>\n\n<pre><code>var query  = Kitten.where({ color: 'white' });\nquery.findOne(function (err, kitten) {\n  if (err) return handleError(err);\n  if (kitten) {\n    // doc may be null if no document matched\n  }\n});\n</code></pre>",
    "summary": "<p>Declares the query a findOne operation. When executed, the first found document is passed to the callback.</p>",
    "body": "<p>Passing a <code>callback</code> executes the query.</p>\n\n<h4>Example</h4>\n\n<pre><code>var query  = Kitten.where({ color: 'white' });\nquery.findOne(function (err, kitten) {\n  if (err) return handleError(err);\n  if (kitten) {\n    // doc may be null if no document matched\n  }\n});\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.findOne = function (conditions, fields, options, callback) {\n  if ('function' == typeof conditions) {\n    callback = conditions;\n    conditions = null;\n    fields = null;\n    options = null;\n  }\n\n  if ('function' == typeof fields) {\n    callback = fields;\n    options = null;\n    fields = null;\n  }\n\n  if ('function' == typeof options) {\n    callback = options;\n    options = null;\n  }\n\n  // make sure we don't send in the whole Document to merge()\n  if (conditions instanceof Document) {\n    conditions = conditions.toObject();\n  }\n\n  if (options) {\n    this.setOptions(options);\n  }\n\n  if (fields) {\n    this.select(fields);\n  }\n\n  if (mquery.canMerge(conditions)) {\n    this.merge(conditions);\n  }\n\n  prepareDiscriminatorCriteria(this);\n\n  try {\n    this.cast(this.model);\n    this._castError = null;\n  } catch (err) {\n    this._castError = err;\n  }\n\n  if (!callback) {\n    // already merged in the conditions, don't need to send them in.\n    return Query.base.findOne.call(this);\n  }\n\n  var promise = new Promise(callback);\n\n  if (this._castError) {\n    promise.error(this._castError);\n    return this;\n  }\n\n  this._applyPaths();\n  this._fields = this._castFields(this._fields);\n\n  var options = this._mongooseOptions;\n  var fields = this._fieldsForExec();\n  var self = this;\n\n  // don't pass in the conditions because we already merged them in\n  Query.base.findOne.call(this, {}, function cb (err, doc) {\n    if (err) return promise.error(err);\n    if (!doc) return promise.complete(null);\n\n    if (!options.populate) {\n      return true === options.lean\n        ? promise.complete(doc)\n        : completeOne(self.model, doc, fields, self, null, promise);\n    }\n\n    var pop = helpers.preparePopulationOptionsMQ(self, options);\n    self.model.populate(doc, pop, function (err, doc) {\n      if (err) return promise.error(err);\n\n      return true === options.lean\n        ? promise.complete(doc)\n        : completeOne(self.model, doc, fields, self, pop, promise);\n    });\n  })\n\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "findOne",
    "string": "Query.prototype.findOne()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[criteria]",
     "description": "mongodb selector"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "count",
     "url": "http://docs.mongodb.org/manual/reference/method/db.collection.count/",
     "visibility": "http://docs.mongodb.org/manual/reference/method/db.collection.count/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifying this query as a <code>count</code> query.</p>\n\n<p>Passing a <code>callback</code> executes the query.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var countQuery = model.where({ 'color': 'black' }).count();\n\nquery.count({ color: 'black' }).count(callback)\n\nquery.count({ color: 'black' }, callback)\n\nquery.where('color', 'black').count(function (err, count) {\n  if (err) return handleError(err);\n  console.log('there are %d kittens', count);\n})\n</code></pre>",
    "summary": "<p>Specifying this query as a <code>count</code> query.</p>",
    "body": "<p>Passing a <code>callback</code> executes the query.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var countQuery = model.where({ 'color': 'black' }).count();\n\nquery.count({ color: 'black' }).count(callback)\n\nquery.count({ color: 'black' }, callback)\n\nquery.where('color', 'black').count(function (err, count) {\n  if (err) return handleError(err);\n  console.log('there are %d kittens', count);\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.count = function (conditions, callback) {\n  if ('function' == typeof conditions) {\n    callback = conditions;\n    conditions = undefined;\n  }\n\n  if (mquery.canMerge(conditions)) {\n    this.merge(conditions);\n  }\n\n  try {\n    this.cast(this.model);\n  } catch (err) {\n    process.nextTick(function() {\n      callback(err);\n    });\n    return this;\n  }\n\n  this.op = 'count';\n  if (!callback) {\n    return this;\n  }\n\n  var conds = this._conditions;\n  var options = this._optionsForExec();\n\n  this._collection.count(conds, options, utils.tick(callback));\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "count",
    "string": "Query.prototype.count()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object",
      "Query"
     ],
     "name": "[criteria]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[field]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "distinct",
     "url": "http://docs.mongodb.org/manual/reference/method/db.collection.distinct/",
     "visibility": "http://docs.mongodb.org/manual/reference/method/db.collection.distinct/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Declares or executes a distict() operation.</p>\n\n<p>Passing a <code>callback</code> executes the query.</p>\n\n<h4>Example</h4>\n\n<pre><code>distinct(criteria, field, fn)\ndistinct(criteria, field)\ndistinct(field, fn)\ndistinct(field)\ndistinct(fn)\ndistinct()\n</code></pre>",
    "summary": "<p>Declares or executes a distict() operation.</p>",
    "body": "<p>Passing a <code>callback</code> executes the query.</p>\n\n<h4>Example</h4>\n\n<pre><code>distinct(criteria, field, fn)\ndistinct(criteria, field)\ndistinct(field, fn)\ndistinct(field)\ndistinct(fn)\ndistinct()\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.distinct = function (conditions, field, callback) {\n  if (!callback) {\n    if('function' == typeof field) {\n      callback = field;\n      if ('string' == typeof conditions) {\n        field = conditions;\n        conditions = undefined;\n      }\n    }\n\n    switch (typeof conditions) {\n      case 'string':\n        field = conditions;\n        conditions = undefined;\n        break;\n      case 'function':\n        callback = conditions;\n        field = undefined;\n        conditions = undefined;\n        break;\n    }\n  }\n\n  if (conditions instanceof Document) {\n    conditions = conditions.toObject();\n  }\n\n  if (mquery.canMerge(conditions)) {\n    this.merge(conditions)\n  }\n\n  try {\n    this.cast(this.model);\n  } catch (err) {\n    callback(err);\n    return this;\n  }\n\n  return Query.base.distinct.call(this, {}, field, callback);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "distinct",
    "string": "Query.prototype.distinct()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object",
      "String"
     ],
     "name": "arg",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "cursor.sort",
     "url": "http://docs.mongodb.org/manual/reference/method/cursor.sort/",
     "visibility": "http://docs.mongodb.org/manual/reference/method/cursor.sort/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets the sort order</p>\n\n<p>If an object is passed, values allowed are <code>asc</code>, <code>desc</code>, <code>ascending</code>, <code>descending</code>, <code>1</code>, and <code>-1</code>.</p>\n\n<p>If a string is passed, it must be a space delimited list of path names. The<br />sort order of each path is ascending unless the path name is prefixed with <code>-</code><br />which will be treated as descending.</p>\n\n<h4>Example</h4>\n\n<pre><code>// sort by \"field\" ascending and \"test\" descending\nquery.sort({ field: 'asc', test: -1 });\n\n// equivalent\nquery.sort('field -test');\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>",
    "summary": "<p>Sets the sort order</p>",
    "body": "<p>If an object is passed, values allowed are <code>asc</code>, <code>desc</code>, <code>ascending</code>, <code>descending</code>, <code>1</code>, and <code>-1</code>.</p>\n\n<p>If a string is passed, it must be a space delimited list of path names. The<br />sort order of each path is ascending unless the path name is prefixed with <code>-</code><br />which will be treated as descending.</p>\n\n<h4>Example</h4>\n\n<pre><code>// sort by \"field\" ascending and \"test\" descending\nquery.sort({ field: 'asc', test: -1 });\n\n// equivalent\nquery.sort('field -test');\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.sort = function (arg) {\n  var nArg = {};\n\n  if (arguments.length > 1) {\n    throw new Error(\"sort() only takes 1 Argument\");\n  }\n\n  if (Array.isArray(arg)) {\n    // time to deal with the terrible syntax\n    for (var i=0; i < arg.length; i++) {\n      if (!Array.isArray(arg[i])) throw new Error(\"Invalid sort() argument.\");\n      nArg[arg[i][0]] = arg[i][1];\n    }\n\n  } else {\n    nArg = arg;\n  }\n\n  return Query.base.sort.call(this, nArg);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "sort",
    "string": "Query.prototype.sort()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object",
      "Query"
     ],
     "name": "[criteria]",
     "description": "mongodb selector"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "remove",
     "url": "http://docs.mongodb.org/manual/reference/method/db.collection.remove/",
     "visibility": "http://docs.mongodb.org/manual/reference/method/db.collection.remove/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Declare and/or execute this query as a remove() operation.</p>\n\n<h4>Example</h4>\n\n<pre><code>Model.remove({ artist: 'Anne Murray' }, callback)\n</code></pre>\n\n<h4>Note</h4>\n\n<p>The operation is only executed when a callback is passed. To force execution without a callback (which would be an unsafe write), we must first call remove() and then execute it by using the <code>exec()</code> method.</p>\n\n<pre><code>// not executed\nvar query = Model.find().remove({ name: 'Anne Murray' })\n\n// executed\nquery.remove({ name: 'Anne Murray' }, callback)\nquery.remove({ name: 'Anne Murray' }).remove(callback)\n\n// executed without a callback (unsafe write)\nquery.exec()\n\n// summary\nquery.remove(conds, fn); // executes\nquery.remove(conds)\nquery.remove(fn) // executes\nquery.remove()\n</code></pre>",
    "summary": "<p>Declare and/or execute this query as a remove() operation.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>Model.remove({ artist: 'Anne Murray' }, callback)\n</code></pre>\n\n<h4>Note</h4>\n\n<p>The operation is only executed when a callback is passed. To force execution without a callback (which would be an unsafe write), we must first call remove() and then execute it by using the <code>exec()</code> method.</p>\n\n<pre><code>// not executed\nvar query = Model.find().remove({ name: 'Anne Murray' })\n\n// executed\nquery.remove({ name: 'Anne Murray' }, callback)\nquery.remove({ name: 'Anne Murray' }).remove(callback)\n\n// executed without a callback (unsafe write)\nquery.exec()\n\n// summary\nquery.remove(conds, fn); // executes\nquery.remove(conds)\nquery.remove(fn) // executes\nquery.remove()\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.remove = function (cond, callback) {\n  if ('function' == typeof cond) {\n    callback = cond;\n    cond = null;\n  }\n\n  var cb = 'function' == typeof callback;\n\n  try {\n    this.cast(this.model);\n  } catch (err) {\n    if (cb) return process.nextTick(callback.bind(null, err));\n    return this;\n  }\n\n  return Query.base.remove.call(this, cond, callback);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "remove",
    "string": "Query.prototype.remove()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Model"
     ],
     "name": "model",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Document"
     ],
     "name": "doc",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "fields",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Query"
     ],
     "name": "self",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "[pop]",
     "description": "array of paths used in population"
    },
    {
     "type": "param",
     "types": [
      "Promise"
     ],
     "name": "promise",
     "description": ""
    }
   ],
   "description": {
    "full": "<p>hydrates a document</p>",
    "summary": "<p>hydrates a document</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function completeOne (model, doc, fields, self, pop, promise) {\n  var opts = pop ?\n    { populated: pop }\n    : undefined;\n\n  var casted = helpers.createModel(model, doc, fields)\n  casted.init(doc, opts, function (err) {\n    if (err) return promise.error(err);\n    promise.complete(casted);\n  });\n}",
   "ctx": {
    "type": "function",
    "name": "completeOne",
    "string": "completeOne()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>If the model is a discriminator type and not root, then add the key &amp; value to the criteria.</p>",
    "summary": "<p>If the model is a discriminator type and not root, then add the key &amp; value to the criteria.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function prepareDiscriminatorCriteria(query) {\n  if (!query || !query.model || !query.model.schema) {\n    return;\n  }\n\n  var schema = query.model.schema;\n\n  if (schema && schema.discriminatorMapping && !schema.discriminatorMapping.isRoot) {\n    query._conditions[schema.discriminatorMapping.key] = schema.discriminatorMapping.value;\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "prepareDiscriminatorCriteria",
    "string": "prepareDiscriminatorCriteria()"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "findOneAndUpdate"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Object",
      "Query"
     ],
     "name": "[query]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[doc]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://www.mongodb.org/display/DOCS/findAndModify+Command",
     "visibility": "http://www.mongodb.org/display/DOCS/findAndModify+Command"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Issues a mongodb <a href=\"http://www.mongodb.org/display/DOCS/findAndModify+Command\">findAndModify</a> update command.</p>\n\n<p>Finds a matching document, updates it according to the <code>update</code> arg, passing any <code>options</code>, and returns the found document (if any) to the callback. The query executes immediately if <code>callback</code> is passed.</p>\n\n<h4>Available options</h4>\n\n<ul>\n<li><code>new</code>: bool - true to return the modified document rather than the original. defaults to true</li>\n<li><code>upsert</code>: bool - creates the object if it doesn't exist. defaults to false.</li>\n<li><code>sort</code>: if multiple docs are found by the conditions, sets the sort order to choose which doc to update</li>\n</ul>\n\n<h4>Examples</h4>\n\n<pre><code>query.findOneAndUpdate(conditions, update, options, callback) // executes\nquery.findOneAndUpdate(conditions, update, options)  // returns Query\nquery.findOneAndUpdate(conditions, update, callback) // executes\nquery.findOneAndUpdate(conditions, update)           // returns Query\nquery.findOneAndUpdate(update, callback)             // returns Query\nquery.findOneAndUpdate(update)                       // returns Query\nquery.findOneAndUpdate(callback)                     // executes\nquery.findOneAndUpdate()                             // returns Query\n</code></pre>",
    "summary": "<p>Issues a mongodb <a href=\"http://www.mongodb.org/display/DOCS/findAndModify+Command\">findAndModify</a> update command.</p>",
    "body": "<p>Finds a matching document, updates it according to the <code>update</code> arg, passing any <code>options</code>, and returns the found document (if any) to the callback. The query executes immediately if <code>callback</code> is passed.</p>\n\n<h4>Available options</h4>\n\n<ul>\n<li><code>new</code>: bool - true to return the modified document rather than the original. defaults to true</li>\n<li><code>upsert</code>: bool - creates the object if it doesn't exist. defaults to false.</li>\n<li><code>sort</code>: if multiple docs are found by the conditions, sets the sort order to choose which doc to update</li>\n</ul>\n\n<h4>Examples</h4>\n\n<pre><code>query.findOneAndUpdate(conditions, update, options, callback) // executes\nquery.findOneAndUpdate(conditions, update, options)  // returns Query\nquery.findOneAndUpdate(conditions, update, callback) // executes\nquery.findOneAndUpdate(conditions, update)           // returns Query\nquery.findOneAndUpdate(update, callback)             // returns Query\nquery.findOneAndUpdate(update)                       // returns Query\nquery.findOneAndUpdate(callback)                     // executes\nquery.findOneAndUpdate()                             // returns Query\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "findOneAndRemove"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[conditions]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://www.mongodb.org/display/DOCS/findAndModify+Command",
     "visibility": "http://www.mongodb.org/display/DOCS/findAndModify+Command"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Issues a mongodb <a href=\"http://www.mongodb.org/display/DOCS/findAndModify+Command\">findAndModify</a> remove command.</p>\n\n<p>Finds a matching document, removes it, passing the found document (if any) to the callback. Executes immediately if <code>callback</code> is passed.</p>\n\n<h4>Available options</h4>\n\n<ul>\n<li><code>sort</code>: if multiple docs are found by the conditions, sets the sort order to choose which doc to update</li>\n</ul>\n\n<h4>Examples</h4>\n\n<pre><code>A.where().findOneAndRemove(conditions, options, callback) // executes\nA.where().findOneAndRemove(conditions, options)  // return Query\nA.where().findOneAndRemove(conditions, callback) // executes\nA.where().findOneAndRemove(conditions) // returns Query\nA.where().findOneAndRemove(callback)   // executes\nA.where().findOneAndRemove()           // returns Query\n</code></pre>",
    "summary": "<p>Issues a mongodb <a href=\"http://www.mongodb.org/display/DOCS/findAndModify+Command\">findAndModify</a> remove command.</p>",
    "body": "<p>Finds a matching document, removes it, passing the found document (if any) to the callback. Executes immediately if <code>callback</code> is passed.</p>\n\n<h4>Available options</h4>\n\n<ul>\n<li><code>sort</code>: if multiple docs are found by the conditions, sets the sort order to choose which doc to update</li>\n</ul>\n\n<h4>Examples</h4>\n\n<pre><code>A.where().findOneAndRemove(conditions, options, callback) // executes\nA.where().findOneAndRemove(conditions, options)  // return Query\nA.where().findOneAndRemove(conditions, callback) // executes\nA.where().findOneAndRemove(conditions) // returns Query\nA.where().findOneAndRemove(callback)   // executes\nA.where().findOneAndRemove()           // returns Query\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "type",
     "description": "- either \"remove\" or \"update\""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Override mquery.prototype._findAndModify to provide casting etc.</p>",
    "summary": "<p>Override mquery.prototype._findAndModify to provide casting etc.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Query.prototype._findAndModify = function (type, callback) {\n  if ('function' != typeof callback) {\n    throw new Error(\"Expected callback in _findAndModify\");\n  }\n\n  var model = this.model\n    , promise = new Promise(callback)\n    , self = this\n    , castedQuery\n    , castedDoc\n    , fields\n    , opts;\n\n  castedQuery = castQuery(this);\n  if (castedQuery instanceof Error) {\n    process.nextTick(promise.error.bind(promise, castedQuery));\n    return promise;\n  }\n\n  opts = this._optionsForExec(model);\n\n  if ('remove' == type) {\n    opts.remove = true;\n  } else {\n    if (!('new' in opts)) opts.new = true;\n    if (!('upsert' in opts)) opts.upsert = false;\n\n    castedDoc = castDoc(this, opts.overwrite);\n    if (!castedDoc) {\n      if (opts.upsert) {\n        // still need to do the upsert to empty doc\n        var doc = utils.clone(castedQuery);\n        delete doc._id;\n        castedDoc = { $set: doc };\n      } else {\n        return this.findOne(callback);\n      }\n    } else if (castedDoc instanceof Error) {\n      process.nextTick(promise.error.bind(promise, castedDoc));\n      return promise;\n    } else {\n      // In order to make MongoDB 2.6 happy (see\n      // https://jira.mongodb.org/browse/SERVER-12266 and related issues)\n      // if we have an actual update document but $set is empty, junk the $set.\n      if (castedDoc.$set && Object.keys(castedDoc.$set).length === 0) {\n        delete castedDoc.$set;\n      }\n    }\n  }\n\n  this._applyPaths();\n\n  var self = this;\n  var options = this._mongooseOptions;\n\n  if (this._fields) {\n    fields = utils.clone(this._fields);\n    opts.fields = this._castFields(fields);\n    if (opts.fields instanceof Error) {\n      process.nextTick(promise.error.bind(promise, opts.fields));\n      return promise;\n    }\n  }\n\n  if (opts.sort) convertSortToArray(opts);\n\n  this._collection.findAndModify(castedQuery, castedDoc, opts, utils.tick(cb));\n  function cb (err, doc) {\n    if (err) return promise.error(err);\n\n    if (!doc || (utils.isObject(doc) && Object.keys(doc).length === 0)) {\n      return promise.complete(null);\n    }\n\n    if (!options.populate) {\n      return true === options.lean\n        ? promise.complete(doc)\n        : completeOne(self.model, doc, fields, self, null, promise);\n    }\n\n    var pop = helpers.preparePopulationOptionsMQ(self, options);\n    self.model.populate(doc, pop, function (err, doc) {\n      if (err) return promise.error(err);\n\n      return true === options.lean\n        ? promise.complete(doc)\n        : completeOne(self.model, doc, fields, self, pop, promise);\n    });\n  }\n\n  return promise;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "_findAndModify",
    "string": "Query.prototype._findAndModify()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Override mquery.prototype._mergeUpdate to handle mongoose objects in<br />updates.</p>",
    "summary": "<p>Override mquery.prototype._mergeUpdate to handle mongoose objects in<br />updates.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Query.prototype._mergeUpdate = function(doc) {\n  if (!this._update) this._update = {};\n  if (doc instanceof Query) {\n    if (doc._update) {\n      utils.mergeClone(this._update, doc._update);\n    }\n  } else {\n    utils.mergeClone(this._update, doc);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "_mergeUpdate",
    "string": "Query.prototype._mergeUpdate()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>The mongodb driver 1.3.23 only supports the nested array sort<br />syntax. We must convert it or sorting findAndModify will not work.</p>",
    "summary": "<p>The mongodb driver 1.3.23 only supports the nested array sort<br />syntax. We must convert it or sorting findAndModify will not work.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function convertSortToArray (opts) {\n  if (Array.isArray(opts.sort)) return;\n  if (!utils.isObject(opts.sort)) return;\n\n  var sort = [];\n\n  for (var key in opts.sort) if (utils.object.hasOwnProperty(opts.sort, key)) {\n    sort.push([ key, opts.sort[key] ]);\n  }\n\n  opts.sort = sort;\n}",
   "ctx": {
    "type": "function",
    "name": "convertSortToArray",
    "string": "convertSortToArray()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[criteria]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[doc]",
     "description": "the update command"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "local": "Model.update #model_Model.update",
     "visibility": "Model.update"
    },
    {
     "type": "see",
     "title": "update",
     "url": "http://docs.mongodb.org/manual/reference/method/db.collection.update/",
     "visibility": "http://docs.mongodb.org/manual/reference/method/db.collection.update/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Declare and/or execute this query as an update() operation.</p>\n\n<p><em>All paths passed that are not $atomic operations will become $set ops.</em></p>\n\n<h4>Example</h4>\n\n<pre><code>Model.where({ _id: id }).update({ title: 'words' })\n\n// becomes\n\nModel.where({ _id: id }).update({ $set: { title: 'words' }})\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Passing an empty object <code>{}</code> as the doc will result in a no-op unless the <code>overwrite</code> option is passed. Without the <code>overwrite</code> option set, the update operation will be ignored and the callback executed without sending the command to MongoDB so as to prevent accidently overwritting documents in the collection.</p>\n\n<h4>Note</h4>\n\n<p>The operation is only executed when a callback is passed. To force execution without a callback (which would be an unsafe write), we must first call update() and then execute it by using the <code>exec()</code> method.</p>\n\n<pre><code>var q = Model.where({ _id: id });\nq.update({ $set: { name: 'bob' }}).update(); // not executed\n\nq.update({ $set: { name: 'bob' }}).exec(); // executed as unsafe\n\n// keys that are not $atomic ops become $set.\n// this executes the same command as the previous example.\nq.update({ name: 'bob' }).exec();\n\n// overwriting with empty docs\nvar q = Model.where({ _id: id }).setOptions({ overwrite: true })\nq.update({ }, callback); // executes\n\n// multi update with overwrite to empty doc\nvar q = Model.where({ _id: id });\nq.setOptions({ multi: true, overwrite: true })\nq.update({ });\nq.update(callback); // executed\n\n// multi updates\nModel.where()\n     .update({ name: /^match/ }, { $set: { arr: [] }}, { multi: true }, callback)\n\n// more multi updates\nModel.where()\n     .setOptions({ multi: true })\n     .update({ $set: { arr: [] }}, callback)\n\n// single update by default\nModel.where({ email: '<a href='mailto:address@example.com'>address@example.com</a>' })\n     .update({ $inc: { counter: 1 }}, callback)\n</code></pre>\n\n<p>API summary</p>\n\n<pre><code>update(criteria, doc, options, cb) // executes\nupdate(criteria, doc, options)\nupdate(criteria, doc, cb) // executes\nupdate(criteria, doc)\nupdate(doc, cb) // executes\nupdate(doc)\nupdate(cb) // executes\nupdate(true) // executes (unsafe write)\nupdate()\n</code></pre>",
    "summary": "<p>Declare and/or execute this query as an update() operation.</p>",
    "body": "<p><em>All paths passed that are not $atomic operations will become $set ops.</em></p>\n\n<h4>Example</h4>\n\n<pre><code>Model.where({ _id: id }).update({ title: 'words' })\n\n// becomes\n\nModel.where({ _id: id }).update({ $set: { title: 'words' }})\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Passing an empty object <code>{}</code> as the doc will result in a no-op unless the <code>overwrite</code> option is passed. Without the <code>overwrite</code> option set, the update operation will be ignored and the callback executed without sending the command to MongoDB so as to prevent accidently overwritting documents in the collection.</p>\n\n<h4>Note</h4>\n\n<p>The operation is only executed when a callback is passed. To force execution without a callback (which would be an unsafe write), we must first call update() and then execute it by using the <code>exec()</code> method.</p>\n\n<pre><code>var q = Model.where({ _id: id });\nq.update({ $set: { name: 'bob' }}).update(); // not executed\n\nq.update({ $set: { name: 'bob' }}).exec(); // executed as unsafe\n\n// keys that are not $atomic ops become $set.\n// this executes the same command as the previous example.\nq.update({ name: 'bob' }).exec();\n\n// overwriting with empty docs\nvar q = Model.where({ _id: id }).setOptions({ overwrite: true })\nq.update({ }, callback); // executes\n\n// multi update with overwrite to empty doc\nvar q = Model.where({ _id: id });\nq.setOptions({ multi: true, overwrite: true })\nq.update({ });\nq.update(callback); // executed\n\n// multi updates\nModel.where()\n     .update({ name: /^match/ }, { $set: { arr: [] }}, { multi: true }, callback)\n\n// more multi updates\nModel.where()\n     .setOptions({ multi: true })\n     .update({ $set: { arr: [] }}, callback)\n\n// single update by default\nModel.where({ email: '<a href='mailto:address@example.com'>address@example.com</a>' })\n     .update({ $inc: { counter: 1 }}, callback)\n</code></pre>\n\n<p>API summary</p>\n\n<pre><code>update(criteria, doc, options, cb) // executes\nupdate(criteria, doc, options)\nupdate(criteria, doc, cb) // executes\nupdate(criteria, doc)\nupdate(doc, cb) // executes\nupdate(doc)\nupdate(cb) // executes\nupdate(true) // executes (unsafe write)\nupdate()\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.update = function (conditions, doc, options, callback) {\n  if ('function' === typeof options) {\n    // Scenario: update(conditions, doc, callback)\n    callback = options;\n    options = null;\n  } else if ('function' === typeof doc) {\n    // Scenario: update(doc, callback);\n    callback = doc;\n    doc = conditions;\n    conditions = {};\n    options = null;\n  } else if ('function' === typeof conditions) {\n    callback = conditions;\n    conditions = undefined;\n    doc = undefined;\n    options = undefined;\n  }\n\n  // make sure we don't send in the whole Document to merge()\n  if (conditions instanceof Document) {\n    conditions = conditions.toObject();\n  }\n\n  // strict is an option used in the update checking, make sure it gets set\n  if (options) {\n    if ('strict' in options) {\n      this._mongooseOptions.strict = options.strict;\n    }\n  }\n\n  // if doc is undefined at this point, this means this function is being\n  // executed by exec(not always see below). Grab the update doc from here in\n  // order to validate\n  // This could also be somebody calling update() or update({}). Probably not a\n  // common use case, check for _update to make sure we don't do anything bad\n  if (!doc && this._update) {\n    doc = this._updateForExec();\n  }\n\n  if (mquery.canMerge(conditions)) {\n    this.merge(conditions);\n  }\n\n  // validate the selector part of the query\n  var castedQuery = castQuery(this);\n  if (castedQuery instanceof Error) {\n    if(callback) {\n      callback(castedQuery);\n      return this;\n    } else {\n      throw castedQuery;\n    }\n  }\n\n  // validate the update part of the query\n  var castedDoc;\n  try {\n    castedDoc = this._castUpdate(doc, options && options.overwrite);\n  } catch (err) {\n    if (callback) {\n      callback(err);\n      return this;\n    } else {\n      throw err;\n    }\n  }\n\n  var schema = this.model.schema;\n  var doValidate = updateValidators(this, schema, castedDoc, options);\n\n  if (!castedDoc) {\n    callback && callback(null, 0);\n    return this;\n  }\n\n  if (options && options.runValidators && callback) {\n    var _this = this;\n    doValidate(function(err) {\n      if (err) {\n        return callback(err);\n      }\n      Query.base.update.call(_this, castedQuery, castedDoc, options, callback);\n    });\n    return this;\n  }\n\n  return Query.base.update.call(this, castedQuery, castedDoc, options, callback);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "update",
    "string": "Query.prototype.update()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String",
      "Function"
     ],
     "name": "[operation]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Executes the query</p>\n\n<h4>Examples:</h4>\n\n<pre><code>var promise = query.exec();\nvar promise = query.exec('update');\n\nquery.exec(callback);\nquery.exec('find', callback);\n</code></pre>",
    "summary": "<p>Executes the query</p>",
    "body": "<h4>Examples:</h4>\n\n<pre><code>var promise = query.exec();\nvar promise = query.exec('update');\n\nquery.exec(callback);\nquery.exec('find', callback);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.exec = function exec (op, callback) {\n  var promise = new Promise();\n\n  if ('function' == typeof op) {\n    callback = op;\n    op = null;\n  } else if ('string' == typeof op) {\n    this.op = op;\n  }\n\n  if (callback) promise.addBack(callback);\n\n  if (!this.op) {\n    promise.complete();\n    return promise;\n  }\n\n  Query.base.exec.call(this, op, promise.resolve.bind(promise));\n\n  return promise;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "exec",
    "string": "Query.prototype.exec()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Finds the schema for <code>path</code>. This is different than<br />calling <code>schema.path</code> as it also resolves paths with<br />positional selectors (something.$.another.$.path).</p>",
    "summary": "<p>Finds the schema for <code>path</code>. This is different than<br />calling <code>schema.path</code> as it also resolves paths with<br />positional selectors (something.$.another.$.path).</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Query.prototype._getSchema = function _getSchema (path) {\n  return this.model._getSchema(path);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "_getSchema",
    "string": "Query.prototype._getSchema()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>These operators require casting docs<br />to real Documents for Update operations.</p>",
    "summary": "<p>These operators require casting docs<br />to real Documents for Update operations.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var castOps = {\n    $push: 1\n  , $pushAll: 1\n  , $addToSet: 1\n  , $set: 1\n};",
   "ctx": {
    "type": "declaration",
    "name": "castOps",
    "value": "{",
    "string": "castOps"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>These operators should be cast to numbers instead<br />of their path schema type.</p>",
    "summary": "<p>These operators should be cast to numbers instead<br />of their path schema type.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var numberOps = {\n    $pop: 1\n  , $unset: 1\n  , $inc: 1\n};",
   "ctx": {
    "type": "declaration",
    "name": "numberOps",
    "value": "{",
    "string": "numberOps"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": "obj after casting its values"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts obj for an update command.</p>",
    "summary": "<p>Casts obj for an update command.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Query.prototype._castUpdate = function _castUpdate (obj, overwrite) {\n  if (!obj) return undefined;\n\n  var ops = Object.keys(obj)\n    , i = ops.length\n    , ret = {}\n    , hasKeys\n    , val\n\n  while (i--) {\n    var op = ops[i];\n    // if overwrite is set, don't do any of the special $set stuff\n    if ('$' !== op[0] && !overwrite) {\n      // fix up $set sugar\n      if (!ret.$set) {\n        if (obj.$set) {\n          ret.$set = obj.$set;\n        } else {\n          ret.$set = {};\n        }\n      }\n      ret.$set[op] = obj[op];\n      ops.splice(i, 1);\n      if (!~ops.indexOf('$set')) ops.push('$set');\n    } else if ('$set' === op) {\n      if (!ret.$set) {\n        ret[op] = obj[op];\n      }\n    } else {\n      ret[op] = obj[op];\n    }\n  }\n\n  // cast each value\n  i = ops.length;\n\n  // if we get passed {} for the update, we still need to respect that when it\n  // is an overwrite scenario\n  if (overwrite) {\n    hasKeys = true;\n  }\n\n  while (i--) {\n    op = ops[i];\n    val = ret[op];\n    if (val && 'Object' === val.constructor.name && !overwrite) {\n      hasKeys |= this._walkUpdatePath(val, op);\n    } else if (overwrite && 'Object' === ret.constructor.name) {\n      // if we are just using overwrite, cast the query and then we will\n      // *always* return the value, even if it is an empty object. We need to\n      // set hasKeys above because we need to account for the case where the\n      // user passes {} and wants to clobber the whole document\n      // Also, _walkUpdatePath expects an operation, so give it $set since that\n      // is basically what we're doing\n      this._walkUpdatePath(ret, '$set');\n    } else {\n      var msg = 'Invalid atomic update value for ' + op + '. '\n              + 'Expected an object, received ' + typeof val;\n      throw new Error(msg);\n    }\n  }\n\n  return hasKeys && ret;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "_castUpdate",
    "string": "Query.prototype._castUpdate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": "- part of a query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "op",
     "description": "- the atomic operator ($pull, $set, etc)"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "pref",
     "description": "- path prefix (internal only)"
    },
    {
     "type": "return",
     "types": [
      "Bool"
     ],
     "description": "true if this path has keys to update"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Walk each path of obj and cast its values<br />according to its schema.</p>",
    "summary": "<p>Walk each path of obj and cast its values<br />according to its schema.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Query.prototype._walkUpdatePath = function _walkUpdatePath (obj, op, pref) {\n  var prefix = pref ? pref + '.' : ''\n    , keys = Object.keys(obj)\n    , i = keys.length\n    , hasKeys = false\n    , schema\n    , key\n    , val\n\n  var strict = 'strict' in this._mongooseOptions\n    ? this._mongooseOptions.strict\n    : this.model.schema.options.strict;\n\n  while (i--) {\n    key = keys[i];\n    val = obj[key];\n\n    if (val && 'Object' === val.constructor.name) {\n      // watch for embedded doc schemas\n      schema = this._getSchema(prefix + key);\n      if (schema && schema.caster && op in castOps) {\n        // embedded doc schema\n\n        if (strict && !schema) {\n          // path is not in our strict schema\n          if ('throw' == strict) {\n            throw new Error('Field `' + key + '` is not in schema.');\n          } else {\n            // ignore paths not specified in schema\n            delete obj[key];\n          }\n        } else {\n          hasKeys = true;\n\n          if ('$each' in val) {\n            obj[key] = {\n                $each: this._castUpdateVal(schema, val.$each, op)\n            }\n\n            if (val.$slice) {\n              obj[key].$slice = val.$slice | 0;\n            }\n\n            if (val.$sort) {\n              obj[key].$sort = val.$sort;\n            }\n\n            if (!!val.$position || val.$position === 0) {\n              obj[key].$position = val.$position;\n            }\n          } else {\n            obj[key] = this._castUpdateVal(schema, val, op);\n          }\n        }\n      } else if (op === '$currentDate') {\n        // $currentDate can take an object\n        obj[key] = this._castUpdateVal(schema, val, op);\n      } else {\n        hasKeys |= this._walkUpdatePath(val, op, prefix + key);\n      }\n    } else {\n      schema = ('$each' === key || '$or' === key || '$and' === key)\n        ? this._getSchema(pref)\n        : this._getSchema(prefix + key);\n\n      var skip = strict &&\n                 !schema &&\n                 !/real|nested/.test(this.model.schema.pathType(prefix + key));\n\n      if (skip) {\n        if ('throw' == strict) {\n          throw new Error('Field `' + prefix + key + '` is not in schema.');\n        } else {\n          delete obj[key];\n        }\n      } else {\n        hasKeys = true;\n        obj[key] = this._castUpdateVal(schema, val, op, key);\n      }\n    }\n  }\n  return hasKeys;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "_walkUpdatePath",
    "string": "Query.prototype._walkUpdatePath()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Schema"
     ],
     "name": "schema",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "op",
     "description": "- the atomic operator ($pull, $set, etc)"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[$conditional]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts <code>val</code> according to <code>schema</code> and atomic <code>op</code>.</p>",
    "summary": "<p>Casts <code>val</code> according to <code>schema</code> and atomic <code>op</code>.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Query.prototype._castUpdateVal = function _castUpdateVal (schema, val, op, $conditional) {\n  if (!schema) {\n    // non-existing schema path\n    return op in numberOps\n      ? Number(val)\n      : val\n  }\n\n  var cond = schema.caster && op in castOps &&\n    (utils.isObject(val) || Array.isArray(val));\n  if (cond) {\n    // Cast values for ops that add data to MongoDB.\n    // Ensures embedded documents get ObjectIds etc.\n    var tmp = schema.cast(val);\n\n    if (Array.isArray(val)) {\n      val = tmp;\n    } else {\n      val = tmp[0];\n    }\n  }\n\n  if (op in numberOps) {\n    return Number(val);\n  }\n  if (op === '$currentDate') {\n    if (typeof val === 'object') {\n      return { $type: val.$type };\n    }\n    return Boolean(val);\n  }\n  if (/^\\$/.test($conditional)) {\n    return schema.castForQuery($conditional, val);\n  }\n  return schema.castForQuery(val)\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "_castUpdateVal",
    "string": "Query.prototype._castUpdateVal()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>castQuery</p>",
    "summary": "<p>castQuery</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "function castQuery (query) {\n  try {\n    return query.cast(query.model);\n  } catch (err) {\n    return err;\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "castQuery",
    "string": "castQuery()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>castDoc</p>",
    "summary": "<p>castDoc</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "function castDoc (query, overwrite) {\n  try {\n    return query._castUpdate(query._update, overwrite);\n  } catch (err) {\n    return err;\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "castDoc",
    "string": "castDoc()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object",
      "String"
     ],
     "name": "path",
     "description": "either the path to populate or an object specifying all parameters"
    },
    {
     "type": "param",
     "types": [
      "Object",
      "String"
     ],
     "name": "[select]",
     "description": "Field selection for the population query"
    },
    {
     "type": "param",
     "types": [
      "Model"
     ],
     "name": "[model]",
     "description": "The name of the model you wish to use for population. If not specified, the name is looked up from the Schema ref."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[match]",
     "description": "Conditions for the population query"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "Options for the population query (sort, etc)"
    },
    {
     "type": "see",
     "local": "population ./populate.html",
     "visibility": "population"
    },
    {
     "type": "see",
     "local": "Query#select #query_Query-select",
     "visibility": "Query#select"
    },
    {
     "type": "see",
     "local": "Model.populate #model_Model.populate",
     "visibility": "Model.populate"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies paths which should be populated with other documents.</p>\n\n<h4>Example:</h4>\n\n<pre><code>Kitten.findOne().populate('owner').exec(function (err, kitten) {\n  console.log(kitten.owner.name) // Max\n})\n\nKitten.find().populate({\n    path: 'owner'\n  , select: 'name'\n  , match: { color: 'black' }\n  , options: { sort: { name: -1 }}\n}).exec(function (err, kittens) {\n  console.log(kittens[0].owner.name) // Zoopa\n})\n\n// alternatively\nKitten.find().populate('owner', 'name', null, {sort: { name: -1 }}).exec(function (err, kittens) {\n  console.log(kittens[0].owner.name) // Zoopa\n})\n</code></pre>\n\n<p>Paths are populated after the query executes and a response is received. A separate query is then executed for each path specified for population. After a response for each query has also been returned, the results are passed to the callback.</p>",
    "summary": "<p>Specifies paths which should be populated with other documents.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>Kitten.findOne().populate('owner').exec(function (err, kitten) {\n  console.log(kitten.owner.name) // Max\n})\n\nKitten.find().populate({\n    path: 'owner'\n  , select: 'name'\n  , match: { color: 'black' }\n  , options: { sort: { name: -1 }}\n}).exec(function (err, kittens) {\n  console.log(kittens[0].owner.name) // Zoopa\n})\n\n// alternatively\nKitten.find().populate('owner', 'name', null, {sort: { name: -1 }}).exec(function (err, kittens) {\n  console.log(kittens[0].owner.name) // Zoopa\n})\n</code></pre>\n\n<p>Paths are populated after the query executes and a response is received. A separate query is then executed for each path specified for population. After a response for each query has also been returned, the results are passed to the callback.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.populate = function () {\n  var res = utils.populate.apply(null, arguments);\n  var opts = this._mongooseOptions;\n\n  if (!utils.isObject(opts.populate)) {\n    opts.populate = {};\n  }\n\n  for (var i = 0; i < res.length; ++i) {\n    opts.populate[res[i].path] = res[i];\n  }\n\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "populate",
    "string": "Query.prototype.populate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Model"
     ],
     "name": "model",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[obj]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Casts this query to the schema of <code>model</code></p>\n\n<h4>Note</h4>\n\n<p>If <code>obj</code> is present, it is cast instead of this query.</p>",
    "summary": "<p>Casts this query to the schema of <code>model</code></p>",
    "body": "<h4>Note</h4>\n\n<p>If <code>obj</code> is present, it is cast instead of this query.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.cast = function (model, obj) {\n  obj || (obj = this._conditions);\n\n  return cast(model.schema, obj);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "cast",
    "string": "Query.prototype.cast()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "fields",
     "description": ""
    },
    {
     "type": "see",
     "title": "",
     "url": "https://github.com/LearnBoost/mongoose/issues/1091",
     "visibility": "https://github.com/LearnBoost/mongoose/issues/1091"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://docs.mongodb.org/manual/reference/projection/elemMatch/",
     "visibility": "http://docs.mongodb.org/manual/reference/projection/elemMatch/"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts selected field arguments for field selection with mongo 2.2</p>\n\n<pre><code>query.select({ ids: { $elemMatch: { $in: [hexString] }})\n</code></pre>",
    "summary": "<p>Casts selected field arguments for field selection with mongo 2.2</p>",
    "body": "<pre><code>query.select({ ids: { $elemMatch: { $in: [hexString] }})\n</code></pre>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Query.prototype._castFields = function _castFields (fields) {\n  var selected\n    , elemMatchKeys\n    , keys\n    , key\n    , out\n    , i\n\n  if (fields) {\n    keys = Object.keys(fields);\n    elemMatchKeys = [];\n    i = keys.length;\n\n    // collect $elemMatch args\n    while (i--) {\n      key = keys[i];\n      if (fields[key].$elemMatch) {\n        selected || (selected = {});\n        selected[key] = fields[key];\n        elemMatchKeys.push(key);\n      }\n    }\n  }\n\n  if (selected) {\n    // they passed $elemMatch, cast em\n    try {\n      out = this.cast(this.model, selected);\n    } catch (err) {\n      return err;\n    }\n\n    // apply the casted field args\n    i = elemMatchKeys.length;\n    while (i--) {\n      key = elemMatchKeys[i];\n      fields[key] = out[key];\n    }\n  }\n\n  return fields;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "_castFields",
    "string": "Query.prototype._castFields()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Applies schematype selected options to this query.</p>",
    "summary": "<p>Applies schematype selected options to this query.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Query.prototype._applyPaths = function applyPaths () {\n  // determine if query is selecting or excluding fields\n\n  var fields = this._fields\n    , exclude\n    , keys\n    , ki\n\n  if (fields) {\n    keys = Object.keys(fields);\n    ki = keys.length;\n\n    while (ki--) {\n      if ('+' == keys[ki][0]) continue;\n      exclude = 0 === fields[keys[ki]];\n      break;\n    }\n  }\n\n  // if selecting, apply default schematype select:true fields\n  // if excluding, apply schematype select:false fields\n\n  var selected = []\n    , excluded = []\n    , seen = [];\n\n  analyzeSchema(this.model.schema);\n\n  switch (exclude) {\n    case true:\n      excluded.length && this.select('-' + excluded.join(' -'));\n      break;\n    case false:\n      selected.length && this.select(selected.join(' '));\n      break;\n    case undefined:\n      // user didn't specify fields, implies returning all fields.\n      // only need to apply excluded fields\n      excluded.length && this.select('-' + excluded.join(' -'));\n      break;\n  }\n\n  return seen = excluded = selected = keys = fields = null;\n\n  function analyzeSchema (schema, prefix) {\n    prefix || (prefix = '');\n\n    // avoid recursion\n    if (~seen.indexOf(schema)) return;\n    seen.push(schema);\n\n    schema.eachPath(function (path, type) {\n      if (prefix) path = prefix + '.' + path;\n\n      analyzePath(path, type);\n\n      // array of subdocs?\n      if (type.schema) {\n        analyzeSchema(type.schema, path);\n      }\n\n    });\n  }\n\n  function analyzePath (path, type) {\n    if ('boolean' != typeof type.selected) return;\n\n    var plusPath = '+' + path;\n    if (fields && plusPath in fields) {\n      // forced inclusion\n      delete fields[plusPath];\n\n      // if there are other fields being included, add this one\n      // if no other included fields, leave this out (implied inclusion)\n      if (false === exclude && keys.length > 1 && !~keys.indexOf(path)) {\n        fields[path] = 1;\n      }\n\n      return\n    };\n\n    // check for parent exclusions\n    var root = path.split('.')[0];\n    if (~excluded.indexOf(root)) return;\n\n    ;(type.selected ? selected : excluded).push(path);\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "_applyPaths",
    "string": "Query.prototype._applyPaths()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "QueryStream"
     ],
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "see",
     "local": "QueryStream",
     "visibility": "QueryStream"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns a Node.js 0.8 style <a href=\"http://nodejs.org/docs/v0.8.21/api/stream.html#stream_readable_stream\">read stream</a> interface.</p>\n\n<h4>Example</h4>\n\n<pre><code>// follows the nodejs 0.8 stream api\nThing.find({ name: /^hello/ }).stream().pipe(res)\n\n// manual streaming\nvar stream = Thing.find({ name: /^hello/ }).stream();\n\nstream.on('data', function (doc) {\n  // do something with the mongoose document\n}).on('error', function (err) {\n  // handle the error\n}).on('close', function () {\n  // the stream is closed\n});\n</code></pre>\n\n<h4>Valid options</h4>\n\n<ul>\n<li><code>transform</code>: optional function which accepts a mongoose document. The return value of the function will be emitted on <code>data</code>.</li>\n</ul>\n\n<h4>Example</h4>\n\n<pre><code>// JSON.stringify all documents before emitting\nvar stream = Thing.find().stream({ transform: JSON.stringify });\nstream.pipe(writeStream);\n</code></pre>",
    "summary": "<p>Returns a Node.js 0.8 style <a href=\"http://nodejs.org/docs/v0.8.21/api/stream.html#stream_readable_stream\">read stream</a> interface.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>// follows the nodejs 0.8 stream api\nThing.find({ name: /^hello/ }).stream().pipe(res)\n\n// manual streaming\nvar stream = Thing.find({ name: /^hello/ }).stream();\n\nstream.on('data', function (doc) {\n  // do something with the mongoose document\n}).on('error', function (err) {\n  // handle the error\n}).on('close', function () {\n  // the stream is closed\n});\n</code></pre>\n\n<h4>Valid options</h4>\n\n<ul>\n<li><code>transform</code>: optional function which accepts a mongoose document. The return value of the function will be emitted on <code>data</code>.</li>\n</ul>\n\n<h4>Example</h4>\n\n<pre><code>// JSON.stringify all documents before emitting\nvar stream = Thing.find().stream({ transform: JSON.stringify });\nstream.pipe(writeStream);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.stream = function stream (opts) {\n  this._applyPaths();\n  this._fields = this._castFields(this._fields);\n  return new QueryStream(this, opts);\n}\n\n// the rest of these are basically to support older Mongoose syntax with mquery",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "stream",
    "string": "Query.prototype.stream()"
   }
  },
  {
   "tags": [
    {
     "type": "deprecated",
     "string": ""
    },
    {
     "type": "see",
     "local": "maxScan #query_Query-maxScan",
     "visibility": "maxScan"
    },
    {
     "type": "method",
     "string": "maxscan"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    }
   ],
   "description": {
    "full": "<p><em>DEPRECATED</em> Alias of <code>maxScan</code></p>",
    "summary": "<p><em>DEPRECATED</em> Alias of <code>maxScan</code></p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.maxscan = Query.base.maxScan;",
   "ctx": {
    "type": "property",
    "constructor": "Query",
    "cons": "Query",
    "name": "maxscan",
    "value": "Query.base.maxScan",
    "string": "Query.prototype.maxscan"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "bool",
     "description": "defaults to true"
    },
    {
     "type": "see",
     "title": "tailable",
     "url": "http://docs.mongodb.org/manual/tutorial/create-tailable-cursor/",
     "visibility": "http://docs.mongodb.org/manual/tutorial/create-tailable-cursor/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets the tailable option (for use with capped collections).</p>\n\n<h4>Example</h4>\n\n<pre><code>query.tailable() // true\nquery.tailable(true)\nquery.tailable(false)\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>",
    "summary": "<p>Sets the tailable option (for use with capped collections).</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.tailable() // true\nquery.tailable(true)\nquery.tailable(false)\n</code></pre>\n\n<h4>Note</h4>\n\n<p>Cannot be used with <code>distinct()</code></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.tailable = function (val, opts) {\n  // we need to support the tailable({ awaitdata : true }) as well as the\n  // tailable(true, {awaitdata :true}) syntax that mquery does not support\n  if (val && val.constructor.name == 'Object') {\n    opts = val;\n    val = true;\n  }\n\n  if (val === undefined) {\n    val = true;\n  }\n\n  if (opts && opts.awaitdata) this.options.awaitdata = true;\n  return Query.base.tailable.call(this, val);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "tailable",
    "string": "Query.prototype.tailable()"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "intersects"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[arg]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "$geometry",
     "url": "http://docs.mongodb.org/manual/reference/operator/geometry/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/geometry/"
    },
    {
     "type": "see",
     "title": "geoIntersects",
     "url": "http://docs.mongodb.org/manual/reference/operator/geoIntersects/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/geoIntersects/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Declares an intersects query for <code>geometry()</code>.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.where('path').intersects().geometry({\n    type: 'LineString'\n  , coordinates: [[180.0, 11.0], [180, 9.0]]\n})\n\nquery.where('path').intersects({\n    type: 'LineString'\n  , coordinates: [[180.0, 11.0], [180, 9.0]]\n})\n</code></pre>\n\n<h4>NOTE:</h4>\n\n<p><strong>MUST</strong> be used after <code>where()</code>.</p>\n\n<h4>NOTE:</h4>\n\n<p>In Mongoose 3.7, <code>intersects</code> changed from a getter to a function. If you need the old syntax, use <a href=\"https://github.com/ebensing/mongoose-within\">this</a>.</p>",
    "summary": "<p>Declares an intersects query for <code>geometry()</code>.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.where('path').intersects().geometry({\n    type: 'LineString'\n  , coordinates: [[180.0, 11.0], [180, 9.0]]\n})\n\nquery.where('path').intersects({\n    type: 'LineString'\n  , coordinates: [[180.0, 11.0], [180, 9.0]]\n})\n</code></pre>\n\n<h4>NOTE:</h4>\n\n<p><strong>MUST</strong> be used after <code>where()</code>.</p>\n\n<h4>NOTE:</h4>\n\n<p>In Mongoose 3.7, <code>intersects</code> changed from a getter to a function. If you need the old syntax, use <a href=\"https://github.com/ebensing/mongoose-within\">this</a>.</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "geometry"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "object",
     "description": "Must contain a `type` property which is a String and a `coordinates` property which is an Array. See the examples."
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "$geometry",
     "url": "http://docs.mongodb.org/manual/reference/operator/geometry/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/geometry/"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://docs.mongodb.org/manual/release-notes/2.4/#new-geospatial-indexes-with-geojson-and-improved-spherical-geometry",
     "visibility": "http://docs.mongodb.org/manual/release-notes/2.4/#new-geospatial-indexes-with-geojson-and-improved-spherical-geometry"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://www.mongodb.org/display/DOCS/Geospatial+Indexing",
     "visibility": "http://www.mongodb.org/display/DOCS/Geospatial+Indexing"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a <code>$geometry</code> condition</p>\n\n<h4>Example</h4>\n\n<pre><code>var polyA = [[[ 10, 20 ], [ 10, 40 ], [ 30, 40 ], [ 30, 20 ]]]\nquery.where('loc').within().geometry({ type: 'Polygon', coordinates: polyA })\n\n// or\nvar polyB = [[ 0, 0 ], [ 1, 1 ]]\nquery.where('loc').within().geometry({ type: 'LineString', coordinates: polyB })\n\n// or\nvar polyC = [ 0, 0 ]\nquery.where('loc').within().geometry({ type: 'Point', coordinates: polyC })\n\n// or\nquery.where('loc').intersects().geometry({ type: 'Point', coordinates: polyC })\n</code></pre>\n\n<p>The argument is assigned to the most recent path passed to <code>where()</code>.</p>\n\n<h4>NOTE:</h4>\n\n<p><code>geometry()</code> <strong>must</strong> come after either <code>intersects()</code> or <code>within()</code>.</p>\n\n<p>The <code>object</code> argument must contain <code>type</code> and <code>coordinates</code> properties.<br />- type {String}<br />- coordinates {Array}</p>",
    "summary": "<p>Specifies a <code>$geometry</code> condition</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>var polyA = [[[ 10, 20 ], [ 10, 40 ], [ 30, 40 ], [ 30, 20 ]]]\nquery.where('loc').within().geometry({ type: 'Polygon', coordinates: polyA })\n\n// or\nvar polyB = [[ 0, 0 ], [ 1, 1 ]]\nquery.where('loc').within().geometry({ type: 'LineString', coordinates: polyB })\n\n// or\nvar polyC = [ 0, 0 ]\nquery.where('loc').within().geometry({ type: 'Point', coordinates: polyC })\n\n// or\nquery.where('loc').intersects().geometry({ type: 'Point', coordinates: polyC })\n</code></pre>\n\n<p>The argument is assigned to the most recent path passed to <code>where()</code>.</p>\n\n<h4>NOTE:</h4>\n\n<p><code>geometry()</code> <strong>must</strong> come after either <code>intersects()</code> or <code>within()</code>.</p>\n\n<p>The <code>object</code> argument must contain <code>type</code> and <code>coordinates</code> properties.<br />- type {String}<br />- coordinates {Array}</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "near"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "$near",
     "url": "http://docs.mongodb.org/manual/reference/operator/near/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/near/"
    },
    {
     "type": "see",
     "title": "$nearSphere",
     "url": "http://docs.mongodb.org/manual/reference/operator/nearSphere/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/nearSphere/"
    },
    {
     "type": "see",
     "title": "$maxDistance",
     "url": "http://docs.mongodb.org/manual/reference/operator/maxDistance/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/maxDistance/"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://www.mongodb.org/display/DOCS/Geospatial+Indexing",
     "visibility": "http://www.mongodb.org/display/DOCS/Geospatial+Indexing"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a <code>$near</code> or <code>$nearSphere</code> condition</p>\n\n<p>These operators return documents sorted by distance.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.where('loc').near({ center: [10, 10] });\nquery.where('loc').near({ center: [10, 10], maxDistance: 5 });\nquery.where('loc').near({ center: [10, 10], maxDistance: 5, spherical: true });\nquery.near('loc', { center: [10, 10], maxDistance: 5 });\n</code></pre>",
    "summary": "<p>Specifies a <code>$near</code> or <code>$nearSphere</code> condition</p>",
    "body": "<p>These operators return documents sorted by distance.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.where('loc').near({ center: [10, 10] });\nquery.where('loc').near({ center: [10, 10], maxDistance: 5 });\nquery.where('loc').near({ center: [10, 10], maxDistance: 5, spherical: true });\nquery.near('loc', { center: [10, 10], maxDistance: 5 });\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Overwriting mquery is needed to support a couple different near() forms found in older<br />versions of mongoose<br />near([1,1])<br />near(1,1)<br />near(field, [1,2])<br />near(field, 1, 2)<br />In addition to all of the normal forms supported by mquery</p>",
    "summary": "<p>Overwriting mquery is needed to support a couple different near() forms found in older<br />versions of mongoose<br />near([1,1])<br />near(1,1)<br />near(field, [1,2])<br />near(field, 1, 2)<br />In addition to all of the normal forms supported by mquery</p>",
    "body": ""
   },
   "ignore": true,
   "code": "Query.prototype.near = function () {\n  var params = [];\n  var sphere = this._mongooseOptions.nearSphere;\n\n  // TODO refactor\n\n  if (arguments.length === 1) {\n    if (Array.isArray(arguments[0])) {\n      params.push({ center: arguments[0], spherical: sphere });\n    } else if ('string' == typeof arguments[0]) {\n      // just passing a path\n      params.push(arguments[0]);\n    } else if (utils.isObject(arguments[0])) {\n      if ('boolean' != typeof arguments[0].spherical) {\n        arguments[0].spherical = sphere;\n      }\n      params.push(arguments[0]);\n    } else {\n      throw new TypeError('invalid argument');\n    }\n  } else if (arguments.length === 2) {\n    if ('number' == typeof arguments[0] && 'number' == typeof arguments[1]) {\n      params.push({ center: [arguments[0], arguments[1]], spherical: sphere});\n    } else if ('string' == typeof arguments[0] && Array.isArray(arguments[1])) {\n      params.push(arguments[0]);\n      params.push({ center: arguments[1], spherical: sphere });\n    } else if ('string' == typeof arguments[0] && utils.isObject(arguments[1])) {\n      params.push(arguments[0]);\n      if ('boolean' != typeof arguments[1].spherical) {\n        arguments[1].spherical = sphere;\n      }\n      params.push(arguments[1]);\n    } else {\n      throw new TypeError('invalid argument');\n    }\n  } else if (arguments.length === 3) {\n    if ('string' == typeof arguments[0] && 'number' == typeof arguments[1]\n        && 'number' == typeof arguments[2]) {\n      params.push(arguments[0]);\n      params.push({ center: [arguments[1], arguments[2]], spherical: sphere });\n    } else {\n      throw new TypeError('invalid argument');\n    }\n  } else {\n    throw new TypeError('invalid argument');\n  }\n\n  return Query.base.near.apply(this, params);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "near",
    "string": "Query.prototype.near()"
   }
  },
  {
   "tags": [
    {
     "type": "deprecated",
     "string": ""
    },
    {
     "type": "see",
     "local": "near() #query_Query-near",
     "visibility": "near()"
    },
    {
     "type": "see",
     "title": "$near",
     "url": "http://docs.mongodb.org/manual/reference/operator/near/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/near/"
    },
    {
     "type": "see",
     "title": "$nearSphere",
     "url": "http://docs.mongodb.org/manual/reference/operator/nearSphere/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/nearSphere/"
    },
    {
     "type": "see",
     "title": "$maxDistance",
     "url": "http://docs.mongodb.org/manual/reference/operator/maxDistance/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/maxDistance/"
    }
   ],
   "description": {
    "full": "<p><em>DEPRECATED</em> Specifies a <code>$nearSphere</code> condition</p>\n\n<h4>Example</h4>\n\n<pre><code>query.where('loc').nearSphere({ center: [10, 10], maxDistance: 5 });\n</code></pre>\n\n<p><strong>Deprecated.</strong> Use <code>query.near()</code> instead with the <code>spherical</code> option set to <code>true</code>.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.where('loc').near({ center: [10, 10], spherical: true });\n</code></pre>",
    "summary": "<p><em>DEPRECATED</em> Specifies a <code>$nearSphere</code> condition</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.where('loc').nearSphere({ center: [10, 10], maxDistance: 5 });\n</code></pre>\n\n<p><strong>Deprecated.</strong> Use <code>query.near()</code> instead with the <code>spherical</code> option set to <code>true</code>.</p>\n\n<h4>Example</h4>\n\n<pre><code>query.where('loc').near({ center: [10, 10], spherical: true });\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.nearSphere = function () {\n  this._mongooseOptions.nearSphere = true;\n  this.near.apply(this, arguments);\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "nearSphere",
    "string": "Query.prototype.nearSphere()"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "polygon"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String",
      "Array"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Array",
      "Object"
     ],
     "name": "[coordinatePairs...]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "$polygon",
     "url": "http://docs.mongodb.org/manual/reference/operator/polygon/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/polygon/"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://www.mongodb.org/display/DOCS/Geospatial+Indexing",
     "visibility": "http://www.mongodb.org/display/DOCS/Geospatial+Indexing"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a $polygon condition</p>\n\n<h4>Example</h4>\n\n<pre><code>query.where('loc').within().polygon([10,20], [13, 25], [7,15])\nquery.polygon('loc', [10,20], [13, 25], [7,15])\n</code></pre>",
    "summary": "<p>Specifies a $polygon condition</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>query.where('loc').within().polygon([10,20], [13, 25], [7,15])\nquery.polygon('loc', [10,20], [13, 25], [7,15])\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "box"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "see",
     "title": "$box",
     "url": "http://docs.mongodb.org/manual/reference/operator/box/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/box/"
    },
    {
     "type": "see",
     "local": "within() Query#within #query_Query-within",
     "visibility": "within()"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://www.mongodb.org/display/DOCS/Geospatial+Indexing",
     "visibility": "http://www.mongodb.org/display/DOCS/Geospatial+Indexing"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "[Array]"
     ],
     "name": "Upper",
     "description": "Right Coords"
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a $box condition</p>\n\n<h4>Example</h4>\n\n<pre><code>var lowerLeft = [40.73083, -73.99756]\nvar upperRight= [40.741404,  -73.988135]\n\nquery.where('loc').within().box(lowerLeft, upperRight)\nquery.box({ ll : lowerLeft, ur : upperRight })\n</code></pre>",
    "summary": "<p>Specifies a $box condition</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>var lowerLeft = [40.73083, -73.99756]\nvar upperRight= [40.741404,  -73.988135]\n\nquery.where('loc').within().box(lowerLeft, upperRight)\nquery.box({ ll : lowerLeft, ur : upperRight })\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [],
   "description": {
    "full": "<p>this is needed to support the mongoose syntax of:<br />box(field, { ll : [x,y], ur : [x2,y2] })<br />box({ ll : [x,y], ur : [x2,y2] })</p>",
    "summary": "<p>this is needed to support the mongoose syntax of:<br />box(field, { ll : [x,y], ur : [x2,y2] })<br />box({ ll : [x,y], ur : [x2,y2] })</p>",
    "body": ""
   },
   "ignore": true,
   "code": "Query.prototype.box = function (ll, ur) {\n  if (!Array.isArray(ll) && utils.isObject(ll)) {\n    ur = ll.ur;\n    ll = ll.ll;\n  }\n  return Query.base.box.call(this, ll, ur);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "box",
    "string": "Query.prototype.box()"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "circle"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "area",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "$center",
     "url": "http://docs.mongodb.org/manual/reference/operator/center/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/center/"
    },
    {
     "type": "see",
     "title": "$centerSphere",
     "url": "http://docs.mongodb.org/manual/reference/operator/centerSphere/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/centerSphere/"
    },
    {
     "type": "see",
     "title": "$geoWithin",
     "url": "http://docs.mongodb.org/manual/reference/operator/within/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/within/"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://www.mongodb.org/display/DOCS/Geospatial+Indexing",
     "visibility": "http://www.mongodb.org/display/DOCS/Geospatial+Indexing"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a $center or $centerSphere condition.</p>\n\n<h4>Example</h4>\n\n<pre><code>var area = { center: [50, 50], radius: 10, unique: true }\nquery.where('loc').within().circle(area)\n// alternatively\nquery.circle('loc', area);\n\n// spherical calculations\nvar area = { center: [50, 50], radius: 10, unique: true, spherical: true }\nquery.where('loc').within().circle(area)\n// alternatively\nquery.circle('loc', area);\n</code></pre>\n\n<p>New in 3.7.0</p>",
    "summary": "<p>Specifies a $center or $centerSphere condition.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>var area = { center: [50, 50], radius: 10, unique: true }\nquery.where('loc').within().circle(area)\n// alternatively\nquery.circle('loc', area);\n\n// spherical calculations\nvar area = { center: [50, 50], radius: 10, unique: true, spherical: true }\nquery.where('loc').within().circle(area)\n// alternatively\nquery.circle('loc', area);\n</code></pre>\n\n<p>New in 3.7.0</p>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "deprecated",
     "string": ""
    },
    {
     "type": "method",
     "string": "center"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p><em>DEPRECATED</em> Alias for <a href=\"#query_Query-circle\">circle</a></p>\n\n<p><strong>Deprecated.</strong> Use <a href=\"#query_Query-circle\">circle</a> instead.</p>",
    "summary": "<p><em>DEPRECATED</em> Alias for <a href=\"#query_Query-circle\">circle</a></p>",
    "body": "<p><strong>Deprecated.</strong> Use <a href=\"#query_Query-circle\">circle</a> instead.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.center = Query.base.circle;",
   "ctx": {
    "type": "property",
    "constructor": "Query",
    "cons": "Query",
    "name": "center",
    "value": "Query.base.circle",
    "string": "Query.prototype.center"
   }
  },
  {
   "tags": [
    {
     "type": "deprecated",
     "string": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Query"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://www.mongodb.org/display/DOCS/Geospatial+Indexing",
     "visibility": "http://www.mongodb.org/display/DOCS/Geospatial+Indexing"
    },
    {
     "type": "see",
     "title": "$centerSphere",
     "url": "http://docs.mongodb.org/manual/reference/operator/centerSphere/",
     "visibility": "http://docs.mongodb.org/manual/reference/operator/centerSphere/"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p><em>DEPRECATED</em> Specifies a $centerSphere condition</p>\n\n<p><strong>Deprecated.</strong> Use <a href=\"#query_Query-circle\">circle</a> instead.</p>\n\n<h4>Example</h4>\n\n<pre><code>var area = { center: [50, 50], radius: 10 };\nquery.where('loc').within().centerSphere(area);\n</code></pre>",
    "summary": "<p><em>DEPRECATED</em> Specifies a $centerSphere condition</p>",
    "body": "<p><strong>Deprecated.</strong> Use <a href=\"#query_Query-circle\">circle</a> instead.</p>\n\n<h4>Example</h4>\n\n<pre><code>var area = { center: [50, 50], radius: 10 };\nquery.where('loc').within().centerSphere(area);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Query.prototype.centerSphere = function () {\n  if (arguments[0] && arguments[0].constructor.name == 'Object') {\n    arguments[0].spherical = true;\n  }\n\n  if (arguments[1] && arguments[1].constructor.name == 'Object') {\n    arguments[1].spherical = true;\n  }\n\n  Query.base.circle.apply(this, arguments);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Query",
    "cons": "Query",
    "name": "centerSphere",
    "string": "Query.prototype.centerSphere()"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "selected"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Determines if field selection has been made.</p>",
    "summary": "<p>Determines if field selection has been made.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "selectedInclusively"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Determines if inclusive field selection has been made.</p>\n\n<pre><code>query.selectedInclusively() // false\nquery.select('name')\nquery.selectedInclusively() // true\n</code></pre>",
    "summary": "<p>Determines if inclusive field selection has been made.</p>",
    "body": "<pre><code>query.selectedInclusively() // false\nquery.select('name')\nquery.selectedInclusively() // true\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "selectedExclusively"
    },
    {
     "type": "memberOf",
     "parent": "Query"
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Determines if exclusive field selection has been made.</p>\n\n<pre><code>query.selectedExclusively() // false\nquery.select('-name')\nquery.selectedExclusively() // true\nquery.selectedInclusively() // false\n</code></pre>",
    "summary": "<p>Determines if exclusive field selection has been made.</p>",
    "body": "<pre><code>query.selectedExclusively() // false\nquery.select('-name')\nquery.selectedExclusively() // true\nquery.selectedInclusively() // false\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Export</p>",
    "summary": "<p>Export</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = Query;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "Query",
    "string": "module.exports"
   }
  }
 ],
 "queryhelpers": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies</p>",
    "summary": "<p>Module dependencies</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var utils = require('./utils')",
   "ctx": {
    "type": "declaration",
    "name": "utils",
    "value": "require('./utils')",
    "string": "utils"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Query"
     ],
     "name": "query",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Prepare a set of path options for query population.</p>",
    "summary": "<p>Prepare a set of path options for query population.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "exports.preparePopulationOptions = function preparePopulationOptions (query, options) {\n  var pop = utils.object.vals(query.options.populate);\n\n  // lean options should trickle through all queries\n  if (options.lean) pop.forEach(makeLean);\n\n  return pop;\n}",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "preparePopulationOptions",
    "string": "exports.preparePopulationOptions()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Query"
     ],
     "name": "query",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Prepare a set of path options for query population. This is the MongooseQuery<br />version</p>",
    "summary": "<p>Prepare a set of path options for query population. This is the MongooseQuery<br />version</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "exports.preparePopulationOptionsMQ = function preparePopulationOptionsMQ (query, options) {\n  var pop = utils.object.vals(query._mongooseOptions.populate);\n\n  // lean options should trickle through all queries\n  if (options.lean) pop.forEach(makeLean);\n\n  return pop;\n}",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "preparePopulationOptionsMQ",
    "string": "exports.preparePopulationOptionsMQ()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Model"
     ],
     "name": "model",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "fields",
     "description": ""
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "return",
     "types": [
      "Model"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>If the document is a mapped discriminator type, it returns a model instance for that type, otherwise,<br />it returns an instance of the given model.</p>",
    "summary": "<p>If the document is a mapped discriminator type, it returns a model instance for that type, otherwise,<br />it returns an instance of the given model.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "exports.createModel = function createModel(model, doc, fields) {\n  var discriminatorMapping = model.schema\n    ? model.schema.discriminatorMapping\n    : null;\n\n  var key = discriminatorMapping && discriminatorMapping.isRoot\n    ? discriminatorMapping.key\n    : null;\n\n  if (key && doc[key] && model.discriminators && model.discriminators[doc[key]]) {\n    return new model.discriminators[doc[key]](undefined, fields, true);\n  }\n\n  return new model(undefined, fields, true);\n}",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "createModel",
    "string": "exports.createModel()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "option",
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Set each path query option to lean</p>",
    "summary": "<p>Set each path query option to lean</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function makeLean (option) {\n  option.options || (option.options = {});\n  option.options.lean = true;\n}",
   "ctx": {
    "type": "function",
    "name": "makeLean",
    "string": "makeLean()"
   }
  }
 ],
 "querystream": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var Stream = require('stream').Stream\nvar utils = require('./utils')\nvar helpers = require('./queryhelpers')\nvar K = function(k){ return k }",
   "ctx": {
    "type": "declaration",
    "name": "Stream",
    "value": "require('stream').Stream",
    "string": "Stream"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Query"
     ],
     "name": "query",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "NodeJS Stream http://nodejs.org/docs/v0.8.21/api/stream.html#stream_readable_stream"
    },
    {
     "type": "event",
     "string": "`data`: emits a single Mongoose document"
    },
    {
     "type": "event",
     "string": "`error`: emits when an error occurs during streaming. This will emit _before_ the `close` event."
    },
    {
     "type": "event",
     "string": "`close`: emits when the stream reaches the end of the cursor or an error occurs, or the stream is manually `destroy`ed. After this event, no more events are emitted."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Provides a Node.js 0.8 style <a href=\"http://nodejs.org/docs/v0.8.21/api/stream.html#stream_readable_stream\">ReadStream</a> interface for Queries.</p>\n\n<pre><code>var stream = Model.find().stream();\n\nstream.on('data', function (doc) {\n  // do something with the mongoose document\n}).on('error', function (err) {\n  // handle the error\n}).on('close', function () {\n  // the stream is closed\n});\n</code></pre>\n\n<p>The stream interface allows us to simply \"plug-in\" to other <em>Node.js 0.8</em> style write streams.</p>\n\n<pre><code>Model.where('created').gte(twoWeeksAgo).stream().pipe(writeStream);\n</code></pre>\n\n<h4>Valid options</h4>\n\n<ul>\n<li><code>transform</code>: optional function which accepts a mongoose document. The return value of the function will be emitted on <code>data</code>.</li>\n</ul>\n\n<h4>Example</h4>\n\n<pre><code>// JSON.stringify all documents before emitting\nvar stream = Thing.find().stream({ transform: JSON.stringify });\nstream.pipe(writeStream);\n</code></pre>\n\n<p><em>NOTE: plugging into an HTTP response will *not* work out of the box. Those streams expect only strings or buffers to be emitted, so first formatting our documents as strings/buffers is necessary.</em></p>\n\n<p><em>NOTE: these streams are Node.js 0.8 style read streams which differ from Node.js 0.10 style. Node.js 0.10 streams are not well tested yet and are not guaranteed to work.</em></p>",
    "summary": "<p>Provides a Node.js 0.8 style <a href=\"http://nodejs.org/docs/v0.8.21/api/stream.html#stream_readable_stream\">ReadStream</a> interface for Queries.</p>",
    "body": "<pre><code>var stream = Model.find().stream();\n\nstream.on('data', function (doc) {\n  // do something with the mongoose document\n}).on('error', function (err) {\n  // handle the error\n}).on('close', function () {\n  // the stream is closed\n});\n</code></pre>\n\n<p>The stream interface allows us to simply \"plug-in\" to other <em>Node.js 0.8</em> style write streams.</p>\n\n<pre><code>Model.where('created').gte(twoWeeksAgo).stream().pipe(writeStream);\n</code></pre>\n\n<h4>Valid options</h4>\n\n<ul>\n<li><code>transform</code>: optional function which accepts a mongoose document. The return value of the function will be emitted on <code>data</code>.</li>\n</ul>\n\n<h4>Example</h4>\n\n<pre><code>// JSON.stringify all documents before emitting\nvar stream = Thing.find().stream({ transform: JSON.stringify });\nstream.pipe(writeStream);\n</code></pre>\n\n<p><em>NOTE: plugging into an HTTP response will *not* work out of the box. Those streams expect only strings or buffers to be emitted, so first formatting our documents as strings/buffers is necessary.</em></p>\n\n<p><em>NOTE: these streams are Node.js 0.8 style read streams which differ from Node.js 0.10 style. Node.js 0.10 streams are not well tested yet and are not guaranteed to work.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function QueryStream (query, options) {\n  Stream.call(this);\n\n  this.query = query;\n  this.readable = true;\n  this.paused = false;\n  this._cursor = null;\n  this._destroyed = null;\n  this._fields = null;\n  this._buffer = null;\n  this._inline = T_INIT;\n  this._running = false;\n  this._transform = options && 'function' == typeof options.transform\n    ? options.transform\n    : K;\n\n  // give time to hook up events\n  var self = this;\n  process.nextTick(function () {\n    self._init();\n  });\n}",
   "ctx": {
    "type": "function",
    "name": "QueryStream",
    "string": "QueryStream()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherit from Stream</p>",
    "summary": "<p>Inherit from Stream</p>",
    "body": ""
   },
   "ignore": true,
   "code": "QueryStream.prototype.__proto__ = Stream.prototype;",
   "ctx": {
    "type": "property",
    "constructor": "QueryStream",
    "cons": "QueryStream",
    "name": "__proto__",
    "value": "Stream.prototype",
    "string": "QueryStream.prototype.__proto__"
   }
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "readable"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Flag stating whether or not this stream is readable.</p>",
    "summary": "<p>Flag stating whether or not this stream is readable.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "QueryStream.prototype.readable;"
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "paused"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Flag stating whether or not this stream is paused.</p>",
    "summary": "<p>Flag stating whether or not this stream is paused.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "QueryStream.prototype.paused;\n\n// trampoline flags\nvar T_INIT = 0;\nvar T_IDLE = 1;\nvar T_CONT = 2;"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Initializes the query.</p>",
    "summary": "<p>Initializes the query.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "QueryStream.prototype._init = function () {\n  if (this._destroyed) return;\n\n  var query = this.query\n    , model = query.model\n    , options = query._optionsForExec(model)\n    , self = this\n\n  try {\n    query.cast(model);\n  } catch (err) {\n    return self.destroy(err);\n  }\n\n  self._fields = utils.clone(query._fields);\n  options.fields = query._castFields(self._fields);\n\n  model.collection.find(query._conditions, options, function (err, cursor) {\n    if (err) return self.destroy(err);\n    self._cursor = cursor;\n    self._next();\n  });\n}",
   "ctx": {
    "type": "method",
    "constructor": "QueryStream",
    "cons": "QueryStream",
    "name": "_init",
    "string": "QueryStream.prototype._init()"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "local": "QueryStream#__next #querystream_QueryStream-__next",
     "visibility": "QueryStream#__next"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Trampoline for pulling the next doc from cursor.</p>",
    "summary": "<p>Trampoline for pulling the next doc from cursor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "QueryStream.prototype._next = function _next () {\n  if (this.paused || this._destroyed) {\n    return this._running = false;\n  }\n\n  this._running = true;\n\n  if (this._buffer && this._buffer.length) {\n    var arg;\n    while (!this.paused && !this._destroyed && (arg = this._buffer.shift())) {\n      this._onNextObject.apply(this, arg);\n    }\n  }\n\n  // avoid stack overflows with large result sets.\n  // trampoline instead of recursion.\n  while (this.__next()) {}\n}",
   "ctx": {
    "type": "method",
    "constructor": "QueryStream",
    "cons": "QueryStream",
    "name": "_next",
    "string": "QueryStream.prototype._next()"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "local": "QueryStream#_next #querystream_QueryStream-_next",
     "visibility": "QueryStream#_next"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Pulls the next doc from the cursor.</p>",
    "summary": "<p>Pulls the next doc from the cursor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "QueryStream.prototype.__next = function () {\n  if (this.paused || this._destroyed)\n    return this._running = false;\n\n  var self = this;\n  self._inline = T_INIT;\n\n  self._cursor.nextObject(function cursorcb (err, doc) {\n    self._onNextObject(err, doc);\n  });\n\n  // if onNextObject() was already called in this tick\n  // return ourselves to the trampoline.\n  if (T_CONT === this._inline) {\n    return true;\n  } else {\n    // onNextObject() hasn't fired yet. tell onNextObject\n    // that its ok to call _next b/c we are not within\n    // the trampoline anymore.\n    this._inline = T_IDLE;\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "QueryStream",
    "cons": "QueryStream",
    "name": "__next",
    "string": "QueryStream.prototype.__next()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Error",
      "null"
     ],
     "name": "err",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Transforms raw <code>doc</code>s returned from the cursor into a model instance.</p>",
    "summary": "<p>Transforms raw <code>doc</code>s returned from the cursor into a model instance.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "QueryStream.prototype._onNextObject = function _onNextObject (err, doc) {\n  if (this._destroyed) return;\n\n  if (this.paused) {\n    this._buffer || (this._buffer = []);\n    this._buffer.push([err, doc]);\n    return this._running = false;\n  }\n\n  if (err) return this.destroy(err);\n\n  // when doc is null we hit the end of the cursor\n  if (!doc) {\n    this.emit('end');\n    return this.destroy();\n  }\n\n  var opts = this.query._mongooseOptions;\n\n  if (!opts.populate) {\n    return true === opts.lean\n      ? emit(this, doc)\n      : createAndEmit(this, doc);\n  }\n\n  var self = this;\n  var pop = helpers.preparePopulationOptionsMQ(self.query, self.query._mongooseOptions);\n\n  self.query.model.populate(doc, pop, function (err, doc) {\n    if (err) return self.destroy(err);\n    return true === opts.lean\n      ? emit(self, doc)\n      : createAndEmit(self, doc);\n  })\n}\n\nfunction createAndEmit (self, doc) {\n  var instance = helpers.createModel(self.query.model, doc, self._fields);\n\n  instance.init(doc, function (err) {\n    if (err) return self.destroy(err);\n    emit(self, instance);\n  });\n}",
   "ctx": {
    "type": "method",
    "constructor": "QueryStream",
    "cons": "QueryStream",
    "name": "_onNextObject",
    "string": "QueryStream.prototype._onNextObject()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Emit a data event and manage the trampoline state</p>",
    "summary": "<p>Emit a data event and manage the trampoline state</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function emit (self, doc) {\n  self.emit('data', self._transform(doc));\n\n  // trampoline management\n  if (T_IDLE === self._inline) {\n    // no longer in trampoline. restart it.\n    self._next();\n  } else {\n    // in a trampoline. tell __next that its\n    // ok to continue jumping.\n    self._inline = T_CONT;\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "emit",
    "string": "emit()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Pauses this stream.</p>",
    "summary": "<p>Pauses this stream.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "QueryStream.prototype.pause = function () {\n  this.paused = true;\n}",
   "ctx": {
    "type": "method",
    "constructor": "QueryStream",
    "cons": "QueryStream",
    "name": "pause",
    "string": "QueryStream.prototype.pause()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Resumes this stream.</p>",
    "summary": "<p>Resumes this stream.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "QueryStream.prototype.resume = function () {\n  this.paused = false;\n\n  if (!this._cursor) {\n    // cannot start if not initialized\n    return;\n  }\n\n  // are we within the trampoline?\n  if (T_INIT === this._inline) {\n    return;\n  }\n\n  if (!this._running) {\n    // outside QueryStream control, need manual restart\n    return this._next();\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "QueryStream",
    "cons": "QueryStream",
    "name": "resume",
    "string": "QueryStream.prototype.resume()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Error"
     ],
     "name": "[err]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Destroys the stream, closing the underlying cursor. No more events will be emitted.</p>",
    "summary": "<p>Destroys the stream, closing the underlying cursor. No more events will be emitted.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "QueryStream.prototype.destroy = function (err) {\n  if (this._destroyed) return;\n  this._destroyed = true;\n  this._running = false;\n  this.readable = false;\n\n  if (this._cursor) {\n    this._cursor.close();\n  }\n\n  if (err) {\n    this.emit('error', err);\n  }\n\n  this.emit('close');\n}",
   "ctx": {
    "type": "method",
    "constructor": "QueryStream",
    "cons": "QueryStream",
    "name": "destroy",
    "string": "QueryStream.prototype.destroy()"
   }
  },
  {
   "tags": [
    {
     "type": "method",
     "string": "pipe"
    },
    {
     "type": "memberOf",
     "parent": "QueryStream"
    },
    {
     "type": "see",
     "title": "NodeJS",
     "url": "http://nodejs.org/api/stream.html",
     "visibility": "http://nodejs.org/api/stream.html"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Pipes this query stream into another stream. This method is inherited from NodeJS Streams.</p>\n\n<h4>Example:</h4>\n\n<pre><code>query.stream().pipe(writeStream [, options])\n</code></pre>",
    "summary": "<p>Pipes this query stream into another stream. This method is inherited from NodeJS Streams.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>query.stream().pipe(writeStream [, options])\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports</p>",
    "summary": "<p>Module exports</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = exports = QueryStream;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "exports = QueryStream",
    "string": "module.exports"
   }
  }
 ],
 "schema/array": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var SchemaType = require('../schematype')\n  , CastError = SchemaType.CastError\n  , NumberSchema = require('./number')\n  , Types = {\n        Boolean: require('./boolean')\n      , Date: require('./date')\n      , Number: require('./number')\n      , String: require('./string')\n      , ObjectId: require('./objectid')\n      , Buffer: require('./buffer')\n    }\n  , MongooseArray = require('../types').Array\n  , EmbeddedDoc = require('../types').Embedded\n  , Mixed = require('./mixed')\n  , cast = require('../cast')\n  , utils = require('../utils')\n  , isMongooseObject = utils.isMongooseObject",
   "ctx": {
    "type": "declaration",
    "name": "SchemaType",
    "value": "require('../schematype')",
    "string": "SchemaType"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "key",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "SchemaType"
     ],
     "name": "cast",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "SchemaType"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Array SchemaType constructor</p>",
    "summary": "<p>Array SchemaType constructor</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function SchemaArray (key, cast, options) {\n  if (cast) {\n    var castOptions = {};\n\n    if ('Object' === utils.getFunctionName(cast.constructor)) {\n      if (cast.type) {\n        // support { type: Woot }\n        castOptions = utils.clone(cast); // do not alter user arguments\n        delete castOptions.type;\n        cast = cast.type;\n      } else {\n        cast = Mixed;\n      }\n    }\n\n    // support { type: 'String' }\n    var name = 'string' == typeof cast\n      ? cast\n      : utils.getFunctionName(cast);\n\n    var caster = name in Types\n      ? Types[name]\n      : cast;\n\n    this.casterConstructor = caster;\n    this.caster = new caster(null, castOptions);\n    if (!(this.caster instanceof EmbeddedDoc)) {\n      this.caster.path = key;\n    }\n  }\n\n  SchemaType.call(this, key, options);\n\n  var self = this\n    , defaultArr\n    , fn;\n\n  if (this.defaultValue) {\n    defaultArr = this.defaultValue;\n    fn = 'function' == typeof defaultArr;\n  }\n\n  this.default(function(){\n    var arr = fn ? defaultArr() : defaultArr || [];\n    return new MongooseArray(arr, self.path, this);\n  });\n};",
   "ctx": {
    "type": "function",
    "name": "SchemaArray",
    "string": "SchemaArray()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from SchemaType.</p>",
    "summary": "<p>Inherits from SchemaType.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "SchemaArray.prototype = Object.create( SchemaType.prototype );\nSchemaArray.prototype.constructor = SchemaArray;",
   "ctx": {
    "type": "property",
    "receiver": "SchemaArray",
    "name": "prototype",
    "value": "Object.create( SchemaType.prototype )",
    "string": "SchemaArray.prototype"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Check required</p>",
    "summary": "<p>Check required</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaArray.prototype.checkRequired = function (value) {\n  return !!(value && value.length);\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaArray",
    "cons": "SchemaArray",
    "name": "checkRequired",
    "string": "SchemaArray.prototype.checkRequired()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "scope",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Overrides the getters application for the population special-case</p>",
    "summary": "<p>Overrides the getters application for the population special-case</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaArray.prototype.applyGetters = function (value, scope) {\n  if (this.caster.options && this.caster.options.ref) {\n    // means the object id was populated\n    return value;\n  }\n\n  return SchemaType.prototype.applyGetters.call(this, value, scope);\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaArray",
    "cons": "SchemaArray",
    "name": "applyGetters",
    "string": "SchemaArray.prototype.applyGetters()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Document"
     ],
     "name": "doc",
     "description": "document that triggers the casting"
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "init",
     "description": "whether this is an initialization cast"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts values for set().</p>",
    "summary": "<p>Casts values for set().</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaArray.prototype.cast = function (value, doc, init) {\n  if (Array.isArray(value)) {\n\n    if (!value.length && doc) {\n      var indexes = doc.schema.indexedPaths();\n\n      for (var i = 0, l = indexes.length; i < l; ++i) {\n        var pathIndex = indexes[i][0][this.path];\n        if ('2dsphere' === pathIndex || '2d' === pathIndex) {\n          return;\n        }\n      }\n    }\n\n    if (!(value && value.isMongooseArray)) {\n      value = new MongooseArray(value, this.path, doc);\n    }\n\n    if (this.caster) {\n      try {\n        for (var i = 0, l = value.length; i < l; i++) {\n          value[i] = this.caster.cast(value[i], doc, init);\n        }\n      } catch (e) {\n        // rethrow\n        throw new CastError(e.type, value, this.path);\n      }\n    }\n\n    return value;\n  } else {\n    return this.cast([value], doc, init);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaArray",
    "cons": "SchemaArray",
    "name": "cast",
    "string": "SchemaArray.prototype.cast()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "$conditional",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "[value]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts values for queries.</p>",
    "summary": "<p>Casts values for queries.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaArray.prototype.castForQuery = function ($conditional, value) {\n  var handler\n    , val;\n\n  if (arguments.length === 2) {\n    handler = this.$conditionalHandlers[$conditional];\n\n    if (!handler) {\n      throw new Error(\"Can't use \" + $conditional + \" with Array.\");\n    }\n\n    val = handler.call(this, value);\n\n  } else {\n\n    val = $conditional;\n    var proto = this.casterConstructor.prototype;\n    var method = proto.castForQuery || proto.cast;\n    var caster = this.caster;\n\n    if (Array.isArray(val)) {\n      val = val.map(function (v) {\n        if (method) v = method.call(caster, v);\n        return isMongooseObject(v)\n          ? v.toObject()\n          : v;\n      });\n\n    } else if (method) {\n      val = method.call(caster, val);\n    }\n  }\n\n  return val && isMongooseObject(val)\n    ? val.toObject()\n    : val;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaArray",
    "cons": "SchemaArray",
    "name": "castForQuery",
    "string": "SchemaArray.prototype.castForQuery()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>\n\n<p>$atomic cast helpers</p>",
    "summary": "<p>@ignore</p>",
    "body": "<p>$atomic cast helpers</p>"
   },
   "ignore": true,
   "code": "function castToNumber (val) {\n  return Types.Number.prototype.cast.call(this, val);\n}\n\nfunction castArraysOfNumbers (arr, self) {\n  self || (self = this);\n\n  arr.forEach(function (v, i) {\n    if (Array.isArray(v)) {\n      castArraysOfNumbers(v, self);\n    } else {\n      arr[i] = castToNumber.call(self, v);\n    }\n  });\n}\n\nfunction cast$near (val) {\n  if (Array.isArray(val)) {\n    castArraysOfNumbers(val, this);\n    return val;\n  }\n\n  if (val && val.$geometry) {\n    return cast$geometry(val, this);\n  }\n\n  return SchemaArray.prototype.castForQuery.call(this, val);\n}\n\nfunction cast$geometry (val, self) {\n  switch (val.$geometry.type) {\n    case 'Polygon':\n    case 'LineString':\n    case 'Point':\n      castArraysOfNumbers(val.$geometry.coordinates, self);\n      break;\n    default:\n      // ignore unknowns\n      break;\n  }\n\n  if (val.$maxDistance) {\n    val.$maxDistance = castToNumber.call(self, val.$maxDistance);\n  }\n\n  return val;\n}\n\nfunction cast$within (val) {\n  var self = this;\n\n  if (val.$maxDistance) {\n    val.$maxDistance = castToNumber.call(self, val.$maxDistance);\n  }\n\n  if (val.$box || val.$polygon) {\n    var type = val.$box ? '$box' : '$polygon';\n    val[type].forEach(function (arr) {\n      if (!Array.isArray(arr)) {\n        var msg = 'Invalid $within $box argument. '\n                + 'Expected an array, received ' + arr;\n        throw new TypeError(msg);\n      }\n      arr.forEach(function (v, i) {\n        arr[i] = castToNumber.call(this, v);\n      });\n    })\n  } else if (val.$center || val.$centerSphere) {\n    var type = val.$center ? '$center' : '$centerSphere';\n    val[type].forEach(function (item, i) {\n      if (Array.isArray(item)) {\n        item.forEach(function (v, j) {\n          item[j] = castToNumber.call(this, v);\n        });\n      } else {\n        val[type][i] = castToNumber.call(this, item);\n      }\n    })\n  } else if (val.$geometry) {\n    cast$geometry(val, this);\n  }\n\n  return val;\n}\n\nfunction cast$all (val) {\n  if (!Array.isArray(val)) {\n    val = [val];\n  }\n\n  val = val.map(function (v) {\n    if (utils.isObject(v)) {\n      var o = {};\n      o[this.path] = v;\n      return cast(this.casterConstructor.schema, o)[this.path];\n    }\n    return v;\n  }, this);\n\n  return this.castForQuery(val);\n}\n\nfunction cast$elemMatch (val) {\n  if (val.$in) {\n    val.$in = this.castForQuery('$in', val.$in);\n    return val;\n  }\n\n  return cast(this.casterConstructor.schema, val);\n}\n\nfunction cast$geoIntersects (val) {\n  var geo = val.$geometry;\n  if (!geo) return;\n\n  cast$geometry(val, this);\n  return val;\n}\n\nvar handle = SchemaArray.prototype.$conditionalHandlers = {};\n\nhandle.$all = cast$all;\nhandle.$options = String;\nhandle.$elemMatch = cast$elemMatch;\nhandle.$geoIntersects = cast$geoIntersects;\nhandle.$or = handle.$and = function(val) {\n  if (!Array.isArray(val)) {\n    throw new TypeError('conditional $or/$and require array');\n  }\n\n  var ret = [];\n  for (var i = 0; i < val.length; ++i) {\n    ret.push(cast(this.casterConstructor.schema, val[i]));\n  }\n\n  return ret;\n};\n\nhandle.$near =\nhandle.$nearSphere = cast$near;\n\nhandle.$within =\nhandle.$geoWithin = cast$within;\n\nhandle.$size =\nhandle.$maxDistance = castToNumber;\n\nhandle.$regex =\nhandle.$ne =\nhandle.$in =\nhandle.$nin =\nhandle.$gt =\nhandle.$gte =\nhandle.$lt =\nhandle.$lte = SchemaArray.prototype.castForQuery;",
   "ctx": {
    "type": "function",
    "name": "castToNumber",
    "string": "castToNumber()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = SchemaArray;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "SchemaArray",
    "string": "module.exports"
   }
  }
 ],
 "schema/boolean": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var SchemaType = require('../schematype');\nvar utils = require('../utils');",
   "ctx": {
    "type": "declaration",
    "name": "SchemaType",
    "value": "require('../schematype')",
    "string": "SchemaType"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "SchemaType"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Boolean SchemaType constructor.</p>",
    "summary": "<p>Boolean SchemaType constructor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function SchemaBoolean (path, options) {\n  SchemaType.call(this, path, options);\n};",
   "ctx": {
    "type": "function",
    "name": "SchemaBoolean",
    "string": "SchemaBoolean()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from SchemaType.</p>",
    "summary": "<p>Inherits from SchemaType.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "SchemaBoolean.prototype = Object.create( SchemaType.prototype );\nSchemaBoolean.prototype.constructor = SchemaBoolean;",
   "ctx": {
    "type": "property",
    "receiver": "SchemaBoolean",
    "name": "prototype",
    "value": "Object.create( SchemaType.prototype )",
    "string": "SchemaBoolean.prototype"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Required validator</p>",
    "summary": "<p>Required validator</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaBoolean.prototype.checkRequired = function (value) {\n  return value === true || value === false;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaBoolean",
    "cons": "SchemaBoolean",
    "name": "checkRequired",
    "string": "SchemaBoolean.prototype.checkRequired()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts to boolean</p>",
    "summary": "<p>Casts to boolean</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaBoolean.prototype.cast = function (value) {\n  if (null === value) return value;\n  if ('0' === value) return false;\n  if ('true' === value) return true;\n  if ('false' === value) return false;\n  return !! value;\n}",
   "ctx": {
    "type": "method",
    "constructor": "SchemaBoolean",
    "cons": "SchemaBoolean",
    "name": "cast",
    "string": "SchemaBoolean.prototype.cast()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>ignore</p>",
    "summary": "<p>ignore</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function handleArray (val) {\n  var self = this;\n  return val.map(function (m) {\n    return self.cast(m);\n  });\n}\n\nSchemaBoolean.$conditionalHandlers = {\n    '$in': handleArray\n}",
   "ctx": {
    "type": "function",
    "name": "handleArray",
    "string": "handleArray()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "$conditional",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts contents for queries.</p>",
    "summary": "<p>Casts contents for queries.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaBoolean.prototype.castForQuery = function ($conditional, val) {\n  var handler;\n  if (2 === arguments.length) {\n    handler = SchemaBoolean.$conditionalHandlers[$conditional];\n\n    if (handler) {\n      return handler.call(this, val);\n    }\n\n    return this.cast(val);\n  }\n\n  return this.cast($conditional);\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaBoolean",
    "cons": "SchemaBoolean",
    "name": "castForQuery",
    "string": "SchemaBoolean.prototype.castForQuery()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = SchemaBoolean;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "SchemaBoolean",
    "string": "module.exports"
   }
  }
 ],
 "schema/buffer": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var SchemaType = require('../schematype')\n  , CastError = SchemaType.CastError\n  , MongooseBuffer = require('../types').Buffer\n  , Binary = MongooseBuffer.Binary\n  , utils = require('../utils')\n  , Document",
   "ctx": {
    "type": "declaration",
    "name": "SchemaType",
    "value": "require('../schematype')",
    "string": "SchemaType"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "key",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "SchemaType"
     ],
     "name": "cast",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "SchemaType"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Buffer SchemaType constructor</p>",
    "summary": "<p>Buffer SchemaType constructor</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function SchemaBuffer (key, options) {\n  SchemaType.call(this, key, options, 'Buffer');\n};",
   "ctx": {
    "type": "function",
    "name": "SchemaBuffer",
    "string": "SchemaBuffer()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from SchemaType.</p>",
    "summary": "<p>Inherits from SchemaType.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "SchemaBuffer.prototype = Object.create( SchemaType.prototype );\nSchemaBuffer.prototype.constructor = SchemaBuffer;",
   "ctx": {
    "type": "property",
    "receiver": "SchemaBuffer",
    "name": "prototype",
    "value": "Object.create( SchemaType.prototype )",
    "string": "SchemaBuffer.prototype"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Check required</p>",
    "summary": "<p>Check required</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaBuffer.prototype.checkRequired = function (value, doc) {\n  if (SchemaType._isRef(this, value, doc, true)) {\n    return null != value;\n  } else {\n    return !!(value && value.length);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaBuffer",
    "cons": "SchemaBuffer",
    "name": "checkRequired",
    "string": "SchemaBuffer.prototype.checkRequired()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Document"
     ],
     "name": "doc",
     "description": "document that triggers the casting"
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "init",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts contents</p>",
    "summary": "<p>Casts contents</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaBuffer.prototype.cast = function (value, doc, init) {\n  if (SchemaType._isRef(this, value, doc, init)) {\n    // wait! we may need to cast this to a document\n\n    if (null == value) {\n      return value;\n    }\n\n    // lazy load\n    Document || (Document = require('./../document'));\n\n    if (value instanceof Document) {\n      value.$__.wasPopulated = true;\n      return value;\n    }\n\n    // setting a populated path\n    if (Buffer.isBuffer(value)) {\n      return value;\n    } else if (!utils.isObject(value)) {\n      throw new CastError('buffer', value, this.path);\n    }\n\n    // Handle the case where user directly sets a populated\n    // path to a plain object; cast to the Model used in\n    // the population query.\n    var path = doc.$__fullPath(this.path);\n    var owner = doc.ownerDocument ? doc.ownerDocument() : doc;\n    var pop = owner.populated(path, true);\n    var ret = new pop.options.model(value);\n    ret.$__.wasPopulated = true;\n    return ret;\n  }\n\n  // documents\n  if (value && value._id) {\n    value = value._id;\n  }\n\n  if (Buffer.isBuffer(value)) {\n    if (!value || !value.isMongooseBuffer) {\n      value = new MongooseBuffer(value, [this.path, doc]);\n    }\n\n    return value;\n  } else if (value instanceof Binary) {\n    var ret = new MongooseBuffer(value.value(true), [this.path, doc]);\n    ret.subtype(value.sub_type);\n    // do not override Binary subtypes. users set this\n    // to whatever they want.\n    return ret;\n  }\n\n  if (null === value) return value;\n\n  var type = typeof value;\n  if ('string' == type || 'number' == type || Array.isArray(value)) {\n    var ret = new MongooseBuffer(value, [this.path, doc]);\n    return ret;\n  }\n\n  throw new CastError('buffer', value, this.path);\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaBuffer",
    "cons": "SchemaBuffer",
    "name": "cast",
    "string": "SchemaBuffer.prototype.cast()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>ignore</p>",
    "summary": "<p>ignore</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function handleSingle (val) {\n  return this.castForQuery(val);\n}\n\nfunction handleArray (val) {\n  var self = this;\n  return val.map( function (m) {\n    return self.castForQuery(m);\n  });\n}\n\nSchemaBuffer.prototype.$conditionalHandlers = {\n    '$ne' : handleSingle\n  , '$in' : handleArray\n  , '$nin': handleArray\n  , '$gt' : handleSingle\n  , '$lt' : handleSingle\n  , '$gte': handleSingle\n  , '$lte': handleSingle\n};",
   "ctx": {
    "type": "function",
    "name": "handleSingle",
    "string": "handleSingle()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "$conditional",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "[value]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts contents for queries.</p>",
    "summary": "<p>Casts contents for queries.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaBuffer.prototype.castForQuery = function ($conditional, val) {\n  var handler;\n  if (arguments.length === 2) {\n    handler = this.$conditionalHandlers[$conditional];\n    if (!handler)\n      throw new Error(\"Can't use \" + $conditional + \" with Buffer.\");\n    return handler.call(this, val);\n  } else {\n    val = $conditional;\n    return this.cast(val).toObject();\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaBuffer",
    "cons": "SchemaBuffer",
    "name": "castForQuery",
    "string": "SchemaBuffer.prototype.castForQuery()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = SchemaBuffer;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "SchemaBuffer",
    "string": "module.exports"
   }
  }
 ],
 "schema/date": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module requirements.</p>",
    "summary": "<p>Module requirements.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var SchemaType = require('../schematype');\nvar CastError = SchemaType.CastError;\nvar utils = require('../utils');",
   "ctx": {
    "type": "declaration",
    "name": "SchemaType",
    "value": "require('../schematype')",
    "string": "SchemaType"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "key",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "SchemaType"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Date SchemaType constructor.</p>",
    "summary": "<p>Date SchemaType constructor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function SchemaDate (key, options) {\n  SchemaType.call(this, key, options);\n};",
   "ctx": {
    "type": "function",
    "name": "SchemaDate",
    "string": "SchemaDate()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from SchemaType.</p>",
    "summary": "<p>Inherits from SchemaType.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "SchemaDate.prototype = Object.create( SchemaType.prototype );\nSchemaDate.prototype.constructor = SchemaDate;",
   "ctx": {
    "type": "property",
    "receiver": "SchemaDate",
    "name": "prototype",
    "value": "Object.create( SchemaType.prototype )",
    "string": "SchemaDate.prototype"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number",
      "String"
     ],
     "name": "when",
     "description": ""
    },
    {
     "type": "added",
     "string": "3.0.0"
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Declares a TTL index (rounded to the nearest second) for <em>Date</em> types only.</p>\n\n<p>This sets the <code>expiresAfterSeconds</code> index option available in MongoDB >= 2.1.2.<br />This index type is only compatible with Date types.</p>\n\n<h4>Example:</h4>\n\n<pre><code>// expire in 24 hours\nnew Schema({ createdAt: { type: Date, expires: 60*60*24 }});\n</code></pre>\n\n<p><code>expires</code> utilizes the <code>ms</code> module from <a href=\"https://github.com/guille/\">guille</a> allowing us to use a friendlier syntax:</p>\n\n<h4>Example:</h4>\n\n<pre><code>// expire in 24 hours\nnew Schema({ createdAt: { type: Date, expires: '24h' }});\n\n// expire in 1.5 hours\nnew Schema({ createdAt: { type: Date, expires: '1.5h' }});\n\n// expire in 7 days\nvar schema = new Schema({ createdAt: Date });\nschema.path('createdAt').expires('7d');\n</code></pre>",
    "summary": "<p>Declares a TTL index (rounded to the nearest second) for <em>Date</em> types only.</p>",
    "body": "<p>This sets the <code>expiresAfterSeconds</code> index option available in MongoDB >= 2.1.2.<br />This index type is only compatible with Date types.</p>\n\n<h4>Example:</h4>\n\n<pre><code>// expire in 24 hours\nnew Schema({ createdAt: { type: Date, expires: 60*60*24 }});\n</code></pre>\n\n<p><code>expires</code> utilizes the <code>ms</code> module from <a href=\"https://github.com/guille/\">guille</a> allowing us to use a friendlier syntax:</p>\n\n<h4>Example:</h4>\n\n<pre><code>// expire in 24 hours\nnew Schema({ createdAt: { type: Date, expires: '24h' }});\n\n// expire in 1.5 hours\nnew Schema({ createdAt: { type: Date, expires: '1.5h' }});\n\n// expire in 7 days\nvar schema = new Schema({ createdAt: Date });\nschema.path('createdAt').expires('7d');\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaDate.prototype.expires = function (when) {\n  if (!this._index || 'Object' !== this._index.constructor.name) {\n    this._index = {};\n  }\n\n  this._index.expires = when;\n  utils.expires(this._index);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaDate",
    "cons": "SchemaDate",
    "name": "expires",
    "string": "SchemaDate.prototype.expires()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Required validator for date</p>",
    "summary": "<p>Required validator for date</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaDate.prototype.checkRequired = function (value) {\n  return value instanceof Date;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaDate",
    "cons": "SchemaDate",
    "name": "checkRequired",
    "string": "SchemaDate.prototype.checkRequired()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": "to cast"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts to date</p>",
    "summary": "<p>Casts to date</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaDate.prototype.cast = function (value) {\n  if (value === null || value === '')\n    return null;\n\n  if (value instanceof Date)\n    return value;\n\n  var date;\n\n  // support for timestamps\n  if (value instanceof Number || 'number' == typeof value \n      || String(value) == Number(value))\n    date = new Date(Number(value));\n\n  // support for date strings\n  else if (value.toString)\n    date = new Date(value.toString());\n\n  if (date.toString() != 'Invalid Date')\n    return date;\n\n  throw new CastError('date', value, this.path);\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaDate",
    "cons": "SchemaDate",
    "name": "cast",
    "string": "SchemaDate.prototype.cast()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Date Query casting.</p>",
    "summary": "<p>Date Query casting.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "function handleSingle (val) {\n  return this.cast(val);\n}\n\nfunction handleArray (val) {\n  var self = this;\n  return val.map( function (m) {\n    return self.cast(m);\n  });\n}\n\nSchemaDate.prototype.$conditionalHandlers = {\n    '$lt': handleSingle\n  , '$lte': handleSingle\n  , '$gt': handleSingle\n  , '$gte': handleSingle\n  , '$ne': handleSingle\n  , '$in': handleArray\n  , '$nin': handleArray\n  , '$all': handleArray\n};",
   "ctx": {
    "type": "function",
    "name": "handleSingle",
    "string": "handleSingle()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "$conditional",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "[value]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts contents for queries.</p>",
    "summary": "<p>Casts contents for queries.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaDate.prototype.castForQuery = function ($conditional, val) {\n  var handler;\n\n  if (2 !== arguments.length) {\n    return this.cast($conditional);\n  }\n\n  handler = this.$conditionalHandlers[$conditional];\n\n  if (!handler) {\n    throw new Error(\"Can't use \" + $conditional + \" with Date.\");\n  }\n\n  return handler.call(this, val);\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaDate",
    "cons": "SchemaDate",
    "name": "castForQuery",
    "string": "SchemaDate.prototype.castForQuery()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = SchemaDate;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "SchemaDate",
    "string": "module.exports"
   }
  }
 ],
 "schema/documentarray": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var SchemaType = require('../schematype')\n  , ArrayType = require('./array')\n  , MongooseDocumentArray = require('../types/documentarray')\n  , Subdocument = require('../types/embedded')\n  , Document = require('../document');\nvar utils = require('../utils.js');",
   "ctx": {
    "type": "declaration",
    "name": "SchemaType",
    "value": "require('../schematype')",
    "string": "SchemaType"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "key",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Schema"
     ],
     "name": "schema",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "SchemaArray"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>SubdocsArray SchemaType constructor</p>",
    "summary": "<p>SubdocsArray SchemaType constructor</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function DocumentArray (key, schema, options) {\n\n  // compile an embedded document for this schema\n  function EmbeddedDocument () {\n    this.$__setSchema(schema);\n    // apply methods\n    for (var i in schema.methods) {\n      this[i] = schema.methods[i];\n    }\n    Subdocument.apply(this, arguments);\n  }\n\n  EmbeddedDocument.prototype = Subdocument.prototype;\n  EmbeddedDocument.schema = schema;\n\n  // apply statics\n  for (var i in schema.statics)\n    EmbeddedDocument[i] = schema.statics[i];\n\n  EmbeddedDocument.options = options;\n  this.schema = schema;\n\n  ArrayType.call(this, key, EmbeddedDocument, options);\n\n  this.schema = schema;\n  var path = this.path;\n  var fn = this.defaultValue;\n\n  this.default(function(){\n    var arr = fn.call(this);\n    if (!Array.isArray(arr)) arr = [arr];\n    return new MongooseDocumentArray(arr, path, this);\n  });\n};",
   "ctx": {
    "type": "function",
    "name": "DocumentArray",
    "string": "DocumentArray()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from ArrayType.</p>",
    "summary": "<p>Inherits from ArrayType.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "DocumentArray.prototype = Object.create( ArrayType.prototype );\nDocumentArray.prototype.constructor = DocumentArray;",
   "ctx": {
    "type": "property",
    "receiver": "DocumentArray",
    "name": "prototype",
    "value": "Object.create( ArrayType.prototype )",
    "string": "DocumentArray.prototype"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Performs local validations first, then validations on each embedded doc</p>",
    "summary": "<p>Performs local validations first, then validations on each embedded doc</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "DocumentArray.prototype.doValidate = function (array, fn, scope) {\n  var self = this;\n\n  SchemaType.prototype.doValidate.call(this, array, function (err) {\n    if (err) return fn(err);\n\n    var count = array && array.length\n      , error;\n\n    if (!count) return fn();\n\n    // handle sparse arrays, do not use array.forEach which does not\n    // iterate over sparse elements yet reports array.length including\n    // them :(\n\n    for (var i = 0, len = count; i < len; ++i) {\n      // sidestep sparse entries\n      var doc = array[i];\n      if (!doc) {\n        --count || fn();\n        continue;\n      }\n\n      ;(function (i) {\n        doc.validate(function (err) {\n          if (err && !error) {\n            // rewrite the key\n            err.key = self.key + '.' + i + '.' + err.key;\n            return fn(error = err);\n          }\n          --count || fn();\n        });\n      })(i);\n    }\n  }, scope);\n};",
   "ctx": {
    "type": "method",
    "constructor": "DocumentArray",
    "cons": "DocumentArray",
    "name": "doValidate",
    "string": "DocumentArray.prototype.doValidate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Document"
     ],
     "name": "document",
     "description": "that triggers the casting"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts contents</p>",
    "summary": "<p>Casts contents</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "DocumentArray.prototype.cast = function (value, doc, init, prev) {\n  var selected\n    , subdoc\n    , i\n\n  if (!Array.isArray(value)) {\n    return this.cast([value], doc, init, prev);\n  }\n\n  if (!(value && value.isMongooseDocumentArray)) {\n    value = new MongooseDocumentArray(value, this.path, doc);\n    if (prev && prev._handlers) {\n      for (var key in prev._handlers) {\n        doc.removeListener(key, prev._handlers[key]);\n      }\n    }\n  }\n\n  i = value.length;\n\n  while (i--) {\n    if (!(value[i] instanceof Subdocument) && value[i]) {\n      if (init) {\n        selected || (selected = scopePaths(this, doc.$__.selected, init));\n        subdoc = new this.casterConstructor(null, value, true, selected);\n        value[i] = subdoc.init(value[i]);\n      } else {\n        try {\n          subdoc = prev.id(value[i]._id);\n        } catch(e) {}\n\n        if (prev && subdoc) {\n          // handle resetting doc with existing id but differing data\n          // doc.array = [{ doc: 'val' }]\n          subdoc.set(value[i]);\n        } else {\n          subdoc = new this.casterConstructor(value[i], value);\n        }\n\n        // if set() is hooked it will have no return value\n        // see gh-746\n        value[i] = subdoc;\n      }\n    }\n  }\n\n  return value;\n}",
   "ctx": {
    "type": "method",
    "constructor": "DocumentArray",
    "cons": "DocumentArray",
    "name": "cast",
    "string": "DocumentArray.prototype.cast()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "DocumentArray"
     ],
     "name": "array",
     "description": "- the array to scope `fields` paths"
    },
    {
     "type": "param",
     "types": [
      "Object",
      "undefined"
     ],
     "name": "fields",
     "description": "- the root fields selected in the query"
    },
    {
     "type": "param",
     "types": [
      "Boolean",
      "undefined"
     ],
     "name": "init",
     "description": "- if we are being created part of a query result"
    }
   ],
   "description": {
    "full": "<p>Scopes paths selected in a query to this array.<br />Necessary for proper default application of subdocument values.</p>",
    "summary": "<p>Scopes paths selected in a query to this array.<br />Necessary for proper default application of subdocument values.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "function scopePaths (array, fields, init) {\n  if (!(init && fields)) return undefined;\n\n  var path = array.path + '.'\n    , keys = Object.keys(fields)\n    , i = keys.length\n    , selected = {}\n    , hasKeys\n    , key\n\n  while (i--) {\n    key = keys[i];\n    if (0 === key.indexOf(path)) {\n      hasKeys || (hasKeys = true);\n      selected[key.substring(path.length)] = fields[key];\n    }\n  }\n\n  return hasKeys && selected || undefined;\n}",
   "ctx": {
    "type": "function",
    "name": "scopePaths",
    "string": "scopePaths()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = DocumentArray;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "DocumentArray",
    "string": "module.exports"
   }
  }
 ],
 "schema/index": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "exports.String = require('./string');\n\nexports.Number = require('./number');\n\nexports.Boolean = require('./boolean');\n\nexports.DocumentArray = require('./documentarray');\n\nexports.Array = require('./array');\n\nexports.Buffer = require('./buffer');\n\nexports.Date = require('./date');\n\nexports.ObjectId = require('./objectid');\n\nexports.Mixed = require('./mixed');\n\n// alias\n\nexports.Oid = exports.ObjectId;\nexports.Object = exports.Mixed;\nexports.Bool = exports.Boolean;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "String",
    "value": "require('./string')",
    "string": "exports.String"
   }
  }
 ],
 "schema/mixed": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var SchemaType = require('../schematype');\nvar utils = require('../utils');",
   "ctx": {
    "type": "declaration",
    "name": "SchemaType",
    "value": "require('../schematype')",
    "string": "SchemaType"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "SchemaType"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Mixed SchemaType constructor.</p>",
    "summary": "<p>Mixed SchemaType constructor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function Mixed (path, options) {\n  if (options && options.default) {\n    var def = options.default;\n    if (Array.isArray(def) && 0 === def.length) {\n      // make sure empty array defaults are handled\n      options.default = Array;\n    } else if (!options.shared &&\n               utils.isObject(def) &&\n               0 === Object.keys(def).length) {\n      // prevent odd \"shared\" objects between documents\n      options.default = function () {\n        return {}\n      }\n    }\n  }\n\n  SchemaType.call(this, path, options);\n};",
   "ctx": {
    "type": "function",
    "name": "Mixed",
    "string": "Mixed()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from SchemaType.</p>",
    "summary": "<p>Inherits from SchemaType.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "Mixed.prototype = Object.create( SchemaType.prototype );\nMixed.prototype.constructor = Mixed;",
   "ctx": {
    "type": "property",
    "receiver": "Mixed",
    "name": "prototype",
    "value": "Object.create( SchemaType.prototype )",
    "string": "Mixed.prototype"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Required validator</p>",
    "summary": "<p>Required validator</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Mixed.prototype.checkRequired = function (val) {\n  return (val !== undefined) && (val !== null);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Mixed",
    "cons": "Mixed",
    "name": "checkRequired",
    "string": "Mixed.prototype.checkRequired()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": "to cast"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts <code>val</code> for Mixed.</p>\n\n<p><em>this is a no-op</em></p>",
    "summary": "<p>Casts <code>val</code> for Mixed.</p>",
    "body": "<p><em>this is a no-op</em></p>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Mixed.prototype.cast = function (val) {\n  return val;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Mixed",
    "cons": "Mixed",
    "name": "cast",
    "string": "Mixed.prototype.cast()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "$cond",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "[val]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts contents for queries.</p>",
    "summary": "<p>Casts contents for queries.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Mixed.prototype.castForQuery = function ($cond, val) {\n  if (arguments.length === 2) return val;\n  return $cond;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Mixed",
    "cons": "Mixed",
    "name": "castForQuery",
    "string": "Mixed.prototype.castForQuery()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = Mixed;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "Mixed",
    "string": "module.exports"
   }
  }
 ],
 "schema/number": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module requirements.</p>",
    "summary": "<p>Module requirements.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var SchemaType = require('../schematype')\n  , CastError = SchemaType.CastError\n  , errorMessages = require('../error').messages\n  , utils = require('../utils')\n  , Document",
   "ctx": {
    "type": "declaration",
    "name": "SchemaType",
    "value": "require('../schematype')",
    "string": "SchemaType"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "key",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "SchemaType"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Number SchemaType constructor.</p>",
    "summary": "<p>Number SchemaType constructor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function SchemaNumber (key, options) {\n  SchemaType.call(this, key, options, 'Number');\n};",
   "ctx": {
    "type": "function",
    "name": "SchemaNumber",
    "string": "SchemaNumber()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from SchemaType.</p>",
    "summary": "<p>Inherits from SchemaType.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "SchemaNumber.prototype = Object.create( SchemaType.prototype );\nSchemaNumber.prototype.constructor = SchemaNumber;",
   "ctx": {
    "type": "property",
    "receiver": "SchemaNumber",
    "name": "prototype",
    "value": "Object.create( SchemaType.prototype )",
    "string": "SchemaNumber.prototype"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Required validator for number</p>",
    "summary": "<p>Required validator for number</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaNumber.prototype.checkRequired = function checkRequired (value, doc) {\n  if (SchemaType._isRef(this, value, doc, true)) {\n    return null != value;\n  } else {\n    return typeof value == 'number' || value instanceof Number;\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaNumber",
    "cons": "SchemaNumber",
    "name": "checkRequired",
    "string": "SchemaNumber.prototype.checkRequired()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "value",
     "description": "minimum number"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[message]",
     "description": "optional custom error message"
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "local": "Customized Error Messages #error_messages_MongooseError-messages",
     "visibility": "Customized"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets a minimum number validator.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ n: { type: Number, min: 10 })\nvar M = db.model('M', s)\nvar m = new M({ n: 9 })\nm.save(function (err) {\n  console.error(err) // validator error\n  m.n = 10;\n  m.save() // success\n})\n\n// custom error messages\n// We can also use the special {MIN} token which will be replaced with the invalid value\nvar min = [10, 'The value of path `{PATH}` ({VALUE}) is beneath the limit ({MIN}).'];\nvar schema = new Schema({ n: { type: Number, min: min })\nvar M = mongoose.model('Measurement', schema);\nvar s= new M({ n: 4 });\ns.validate(function (err) {\n  console.log(String(err)) // ValidationError: The value of path `n` (4) is beneath the limit (10).\n})\n</code></pre>",
    "summary": "<p>Sets a minimum number validator.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ n: { type: Number, min: 10 })\nvar M = db.model('M', s)\nvar m = new M({ n: 9 })\nm.save(function (err) {\n  console.error(err) // validator error\n  m.n = 10;\n  m.save() // success\n})\n\n// custom error messages\n// We can also use the special {MIN} token which will be replaced with the invalid value\nvar min = [10, 'The value of path `{PATH}` ({VALUE}) is beneath the limit ({MIN}).'];\nvar schema = new Schema({ n: { type: Number, min: min })\nvar M = mongoose.model('Measurement', schema);\nvar s= new M({ n: 4 });\ns.validate(function (err) {\n  console.log(String(err)) // ValidationError: The value of path `n` (4) is beneath the limit (10).\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaNumber.prototype.min = function (value, message) {\n  if (this.minValidator) {\n    this.validators = this.validators.filter(function (v) {\n      return v.validator != this.minValidator;\n    }, this);\n  }\n\n  if (null != value) {\n    var msg = message || errorMessages.Number.min;\n    msg = msg.replace(/{MIN}/, value);\n    this.validators.push({\n      validator: this.minValidator = function (v) {\n        return v === null || v >= value;\n      },\n      message: msg,\n      type: 'min'\n    });\n  }\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaNumber",
    "cons": "SchemaNumber",
    "name": "min",
    "string": "SchemaNumber.prototype.min()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "maximum",
     "description": "number"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[message]",
     "description": "optional custom error message"
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "local": "Customized Error Messages #error_messages_MongooseError-messages",
     "visibility": "Customized"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets a maximum number validator.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ n: { type: Number, max: 10 })\nvar M = db.model('M', s)\nvar m = new M({ n: 11 })\nm.save(function (err) {\n  console.error(err) // validator error\n  m.n = 10;\n  m.save() // success\n})\n\n// custom error messages\n// We can also use the special {MAX} token which will be replaced with the invalid value\nvar max = [10, 'The value of path `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'];\nvar schema = new Schema({ n: { type: Number, max: max })\nvar M = mongoose.model('Measurement', schema);\nvar s= new M({ n: 4 });\ns.validate(function (err) {\n  console.log(String(err)) // ValidationError: The value of path `n` (4) exceeds the limit (10).\n})\n</code></pre>",
    "summary": "<p>Sets a maximum number validator.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ n: { type: Number, max: 10 })\nvar M = db.model('M', s)\nvar m = new M({ n: 11 })\nm.save(function (err) {\n  console.error(err) // validator error\n  m.n = 10;\n  m.save() // success\n})\n\n// custom error messages\n// We can also use the special {MAX} token which will be replaced with the invalid value\nvar max = [10, 'The value of path `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'];\nvar schema = new Schema({ n: { type: Number, max: max })\nvar M = mongoose.model('Measurement', schema);\nvar s= new M({ n: 4 });\ns.validate(function (err) {\n  console.log(String(err)) // ValidationError: The value of path `n` (4) exceeds the limit (10).\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaNumber.prototype.max = function (value, message) {\n  if (this.maxValidator) {\n    this.validators = this.validators.filter(function(v){\n      return v.validator != this.maxValidator;\n    }, this);\n  }\n\n  if (null != value) {\n    var msg = message || errorMessages.Number.max;\n    msg = msg.replace(/{MAX}/, value);\n    this.validators.push({\n      validator: this.maxValidator = function(v) {\n        return v === null || v <= value;\n      },\n      message: msg,\n      type: 'max'\n    });\n  }\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaNumber",
    "cons": "SchemaNumber",
    "name": "max",
    "string": "SchemaNumber.prototype.max()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": "value to cast"
    },
    {
     "type": "param",
     "types": [
      "Document"
     ],
     "name": "doc",
     "description": "document that triggers the casting"
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "init",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts to number</p>",
    "summary": "<p>Casts to number</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaNumber.prototype.cast = function (value, doc, init) {\n  if (SchemaType._isRef(this, value, doc, init)) {\n    // wait! we may need to cast this to a document\n\n    if (null == value) {\n      return value;\n    }\n\n    // lazy load\n    Document || (Document = require('./../document'));\n\n    if (value instanceof Document) {\n      value.$__.wasPopulated = true;\n      return value;\n    }\n\n    // setting a populated path\n    if ('number' == typeof value) {\n      return value;\n    } else if (Buffer.isBuffer(value) || !utils.isObject(value)) {\n      throw new CastError('number', value, this.path);\n    }\n\n    // Handle the case where user directly sets a populated\n    // path to a plain object; cast to the Model used in\n    // the population query.\n    var path = doc.$__fullPath(this.path);\n    var owner = doc.ownerDocument ? doc.ownerDocument() : doc;\n    var pop = owner.populated(path, true);\n    var ret = new pop.options.model(value);\n    ret.$__.wasPopulated = true;\n    return ret;\n  }\n\n  var val = value && value._id\n    ? value._id // documents\n    : value;\n\n  if (!isNaN(val)){\n    if (null === val) return val;\n    if ('' === val) return null;\n    if ('string' == typeof val) val = Number(val);\n    if (val instanceof Number) return val\n    if ('number' == typeof val) return val;\n    if (val.toString && !Array.isArray(val) &&\n        val.toString() == Number(val)) {\n      return new Number(val)\n    }\n  }\n\n  throw new CastError('number', value, this.path);\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaNumber",
    "cons": "SchemaNumber",
    "name": "cast",
    "string": "SchemaNumber.prototype.cast()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>ignore</p>",
    "summary": "<p>ignore</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function handleSingle (val) {\n  return this.cast(val)\n}\n\nfunction handleArray (val) {\n  var self = this;\n  return val.map(function (m) {\n    return self.cast(m)\n  });\n}\n\nSchemaNumber.prototype.$conditionalHandlers = {\n    '$lt' : handleSingle\n  , '$lte': handleSingle\n  , '$gt' : handleSingle\n  , '$gte': handleSingle\n  , '$ne' : handleSingle\n  , '$in' : handleArray\n  , '$nin': handleArray\n  , '$mod': handleArray\n  , '$all': handleArray\n};",
   "ctx": {
    "type": "function",
    "name": "handleSingle",
    "string": "handleSingle()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "$conditional",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "[value]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts contents for queries.</p>",
    "summary": "<p>Casts contents for queries.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaNumber.prototype.castForQuery = function ($conditional, val) {\n  var handler;\n  if (arguments.length === 2) {\n    handler = this.$conditionalHandlers[$conditional];\n    if (!handler)\n      throw new Error(\"Can't use \" + $conditional + \" with Number.\");\n    return handler.call(this, val);\n  } else {\n    val = this.cast($conditional);\n    return val == null ? val : val\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaNumber",
    "cons": "SchemaNumber",
    "name": "castForQuery",
    "string": "SchemaNumber.prototype.castForQuery()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = SchemaNumber;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "SchemaNumber",
    "string": "module.exports"
   }
  }
 ],
 "schema/objectid": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var SchemaType = require('../schematype')\n  , CastError = SchemaType.CastError\n  , oid = require('../types/objectid')\n  , utils = require('../utils')\n  , Document",
   "ctx": {
    "type": "declaration",
    "name": "SchemaType",
    "value": "require('../schematype')",
    "string": "SchemaType"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "key",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "SchemaType"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>ObjectId SchemaType constructor.</p>",
    "summary": "<p>ObjectId SchemaType constructor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function ObjectId (key, options) {\n  SchemaType.call(this, key, options, 'ObjectID');\n};",
   "ctx": {
    "type": "function",
    "name": "ObjectId",
    "string": "ObjectId()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from SchemaType.</p>",
    "summary": "<p>Inherits from SchemaType.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "ObjectId.prototype = Object.create( SchemaType.prototype );\nObjectId.prototype.constructor = ObjectId;",
   "ctx": {
    "type": "property",
    "receiver": "ObjectId",
    "name": "prototype",
    "value": "Object.create( SchemaType.prototype )",
    "string": "ObjectId.prototype"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "turnOn",
     "description": "auto generated ObjectId defaults"
    },
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    }
   ],
   "description": {
    "full": "<p>Adds an auto-generated ObjectId default if turnOn is true.</p>",
    "summary": "<p>Adds an auto-generated ObjectId default if turnOn is true.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "ObjectId.prototype.auto = function (turnOn) {\n  if (turnOn) {\n    this.default(defaultId);\n    this.set(resetId)\n  }\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "ObjectId",
    "cons": "ObjectId",
    "name": "auto",
    "string": "ObjectId.prototype.auto()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Check required</p>",
    "summary": "<p>Check required</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "ObjectId.prototype.checkRequired = function checkRequired (value, doc) {\n  if (SchemaType._isRef(this, value, doc, true)) {\n    return null != value;\n  } else {\n    return value instanceof oid;\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "ObjectId",
    "cons": "ObjectId",
    "name": "checkRequired",
    "string": "ObjectId.prototype.checkRequired()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "init",
     "description": "whether this is an initialization cast"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts to ObjectId</p>",
    "summary": "<p>Casts to ObjectId</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "ObjectId.prototype.cast = function (value, doc, init) {\n  if (SchemaType._isRef(this, value, doc, init)) {\n    // wait! we may need to cast this to a document\n\n    if (null == value) {\n      return value;\n    }\n\n    // lazy load\n    Document || (Document = require('./../document'));\n\n    if (value instanceof Document) {\n      value.$__.wasPopulated = true;\n      return value;\n    }\n\n    // setting a populated path\n    if (value instanceof oid) {\n      return value;\n    } else if (Buffer.isBuffer(value) || !utils.isObject(value)) {\n      throw new CastError('ObjectId', value, this.path);\n    }\n\n    // Handle the case where user directly sets a populated\n    // path to a plain object; cast to the Model used in\n    // the population query.\n    var path = doc.$__fullPath(this.path);\n    var owner = doc.ownerDocument ? doc.ownerDocument() : doc;\n    var pop = owner.populated(path, true);\n    var ret = new pop.options.model(value);\n    ret.$__.wasPopulated = true;\n    return ret;\n  }\n\n  if (value === null) return value;\n\n  if (value instanceof oid)\n    return value;\n\n  if (value._id && value._id instanceof oid)\n    return value._id;\n\n  if (value.toString) {\n    try {\n      return oid.createFromHexString(value.toString());\n    } catch (err) {\n      throw new CastError('ObjectId', value, this.path);\n    }\n  }\n\n  throw new CastError('ObjectId', value, this.path);\n};",
   "ctx": {
    "type": "method",
    "constructor": "ObjectId",
    "cons": "ObjectId",
    "name": "cast",
    "string": "ObjectId.prototype.cast()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>ignore</p>",
    "summary": "<p>ignore</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function handleSingle (val) {\n  return this.cast(val);\n}\n\nfunction handleArray (val) {\n  var self = this;\n  return val.map(function (m) {\n    return self.cast(m);\n  });\n}\n\nObjectId.prototype.$conditionalHandlers = {\n    '$ne': handleSingle\n  , '$in': handleArray\n  , '$nin': handleArray\n  , '$gt': handleSingle\n  , '$lt': handleSingle\n  , '$gte': handleSingle\n  , '$lte': handleSingle\n  , '$all': handleArray\n};",
   "ctx": {
    "type": "function",
    "name": "handleSingle",
    "string": "handleSingle()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "$conditional",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "[val]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts contents for queries.</p>",
    "summary": "<p>Casts contents for queries.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "ObjectId.prototype.castForQuery = function ($conditional, val) {\n  var handler;\n  if (arguments.length === 2) {\n    handler = this.$conditionalHandlers[$conditional];\n    if (!handler)\n      throw new Error(\"Can't use \" + $conditional + \" with ObjectId.\");\n    return handler.call(this, val);\n  } else {\n    return this.cast($conditional);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "ObjectId",
    "cons": "ObjectId",
    "name": "castForQuery",
    "string": "ObjectId.prototype.castForQuery()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>ignore</p>",
    "summary": "<p>ignore</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function defaultId () {\n  return new oid();\n};\n\nfunction resetId (v) {\n  this.$__._id = null;\n  return v;\n}",
   "ctx": {
    "type": "function",
    "name": "defaultId",
    "string": "defaultId()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = ObjectId;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "ObjectId",
    "string": "module.exports"
   }
  }
 ],
 "schema/string": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var SchemaType = require('../schematype')\n  , CastError = SchemaType.CastError\n  , errorMessages = require('../error').messages\n  , utils = require('../utils')\n  , Document",
   "ctx": {
    "type": "declaration",
    "name": "SchemaType",
    "value": "require('../schematype')",
    "string": "SchemaType"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "key",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "SchemaType"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>String SchemaType constructor.</p>",
    "summary": "<p>String SchemaType constructor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function SchemaString (key, options) {\n  this.enumValues = [];\n  this.regExp = null;\n  SchemaType.call(this, key, options, 'String');\n};",
   "ctx": {
    "type": "function",
    "name": "SchemaString",
    "string": "SchemaString()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from SchemaType.</p>",
    "summary": "<p>Inherits from SchemaType.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "SchemaString.prototype = Object.create( SchemaType.prototype );\nSchemaString.prototype.constructor = SchemaString;",
   "ctx": {
    "type": "property",
    "receiver": "SchemaString",
    "name": "prototype",
    "value": "Object.create( SchemaType.prototype )",
    "string": "SchemaString.prototype"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String",
      "Object"
     ],
     "name": "[args...]",
     "description": "enumeration values"
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "local": "Customized Error Messages #error_messages_MongooseError-messages",
     "visibility": "Customized"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Adds an enum validator</p>\n\n<h4>Example:</h4>\n\n<pre><code>var states = 'opening open closing closed'.split(' ')\nvar s = new Schema({ state: { type: String, enum: states }})\nvar M = db.model('M', s)\nvar m = new M({ state: 'invalid' })\nm.save(function (err) {\n  console.error(String(err)) // ValidationError: `invalid` is not a valid enum value for path `state`.\n  m.state = 'open'\n  m.save(callback) // success\n})\n\n// or with custom error messages\nvar enu = {\n  values: 'opening open closing closed'.split(' '),\n  message: 'enum validator failed for path `{PATH}` with value `{VALUE}`'\n}\nvar s = new Schema({ state: { type: String, enum: enu })\nvar M = db.model('M', s)\nvar m = new M({ state: 'invalid' })\nm.save(function (err) {\n  console.error(String(err)) // ValidationError: enum validator failed for path `state` with value `invalid`\n  m.state = 'open'\n  m.save(callback) // success\n})\n</code></pre>",
    "summary": "<p>Adds an enum validator</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var states = 'opening open closing closed'.split(' ')\nvar s = new Schema({ state: { type: String, enum: states }})\nvar M = db.model('M', s)\nvar m = new M({ state: 'invalid' })\nm.save(function (err) {\n  console.error(String(err)) // ValidationError: `invalid` is not a valid enum value for path `state`.\n  m.state = 'open'\n  m.save(callback) // success\n})\n\n// or with custom error messages\nvar enu = {\n  values: 'opening open closing closed'.split(' '),\n  message: 'enum validator failed for path `{PATH}` with value `{VALUE}`'\n}\nvar s = new Schema({ state: { type: String, enum: enu })\nvar M = db.model('M', s)\nvar m = new M({ state: 'invalid' })\nm.save(function (err) {\n  console.error(String(err)) // ValidationError: enum validator failed for path `state` with value `invalid`\n  m.state = 'open'\n  m.save(callback) // success\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaString.prototype.enum = function () {\n  if (this.enumValidator) {\n    this.validators = this.validators.filter(function(v) {\n      return v.validator != this.enumValidator;\n    }, this);\n    this.enumValidator = false;\n  }\n\n  if (undefined === arguments[0] || false === arguments[0]) {\n    return this;\n  }\n\n  var values;\n  var errorMessage;\n\n  if (utils.isObject(arguments[0])) {\n    values = arguments[0].values;\n    errorMessage = arguments[0].message;\n  } else {\n    values = arguments;\n    errorMessage = errorMessages.String.enum;\n  }\n\n  for (var i = 0; i < values.length; i++) {\n    if (undefined !== values[i]) {\n      this.enumValues.push(this.cast(values[i]));\n    }\n  }\n\n  var vals = this.enumValues;\n  this.enumValidator = function (v) {\n    return undefined === v || ~vals.indexOf(v);\n  };\n  this.validators.push({ validator: this.enumValidator, message: errorMessage, type: 'enum' });\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaString",
    "cons": "SchemaString",
    "name": "enum",
    "string": "SchemaString.prototype.enum()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    }
   ],
   "description": {
    "full": "<p>Adds a lowercase setter.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ email: { type: String, lowercase: true }})\nvar M = db.model('M', s);\nvar m = new M({ email: '<a href='mailto:SomeEmail@example.COM'>SomeEmail@example.COM</a>' });\nconsole.log(m.email) // <a href='mailto:someemail@example.com'>someemail@example.com</a>\n</code></pre>",
    "summary": "<p>Adds a lowercase setter.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ email: { type: String, lowercase: true }})\nvar M = db.model('M', s);\nvar m = new M({ email: '<a href='mailto:SomeEmail@example.COM'>SomeEmail@example.COM</a>' });\nconsole.log(m.email) // <a href='mailto:someemail@example.com'>someemail@example.com</a>\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaString.prototype.lowercase = function () {\n  return this.set(function (v, self) {\n    if ('string' != typeof v) v = self.cast(v)\n    if (v) return v.toLowerCase();\n    return v;\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaString",
    "cons": "SchemaString",
    "name": "lowercase",
    "string": "SchemaString.prototype.lowercase()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    }
   ],
   "description": {
    "full": "<p>Adds an uppercase setter.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ caps: { type: String, uppercase: true }})\nvar M = db.model('M', s);\nvar m = new M({ caps: 'an example' });\nconsole.log(m.caps) // AN EXAMPLE\n</code></pre>",
    "summary": "<p>Adds an uppercase setter.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ caps: { type: String, uppercase: true }})\nvar M = db.model('M', s);\nvar m = new M({ caps: 'an example' });\nconsole.log(m.caps) // AN EXAMPLE\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaString.prototype.uppercase = function () {\n  return this.set(function (v, self) {\n    if ('string' != typeof v) v = self.cast(v)\n    if (v) return v.toUpperCase();\n    return v;\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaString",
    "cons": "SchemaString",
    "name": "uppercase",
    "string": "SchemaString.prototype.uppercase()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    }
   ],
   "description": {
    "full": "<p>Adds a trim setter.</p>\n\n<p>The string value will be trimmed when set.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ name: { type: String, trim: true }})\nvar M = db.model('M', s)\nvar string = ' some name '\nconsole.log(string.length) // 11\nvar m = new M({ name: string })\nconsole.log(m.name.length) // 9\n</code></pre>",
    "summary": "<p>Adds a trim setter.</p>",
    "body": "<p>The string value will be trimmed when set.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ name: { type: String, trim: true }})\nvar M = db.model('M', s)\nvar string = ' some name '\nconsole.log(string.length) // 11\nvar m = new M({ name: string })\nconsole.log(m.name.length) // 9\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaString.prototype.trim = function () {\n  return this.set(function (v, self) {\n    if ('string' != typeof v) v = self.cast(v)\n    if (v) return v.trim();\n    return v;\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaString",
    "cons": "SchemaString",
    "name": "trim",
    "string": "SchemaString.prototype.trim()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "RegExp"
     ],
     "name": "regExp",
     "description": "regular expression to test against"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[message]",
     "description": "optional custom error message"
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "local": "Customized Error Messages #error_messages_MongooseError-messages",
     "visibility": "Customized"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets a regexp validator.</p>\n\n<p>Any value that does not pass <code>regExp</code>.test(val) will fail validation.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ name: { type: String, match: /^a/ }})\nvar M = db.model('M', s)\nvar m = new M({ name: 'I am invalid' })\nm.validate(function (err) {\n  console.error(String(err)) // \"ValidationError: Path `name` is invalid (I am invalid).\"\n  m.name = 'apples'\n  m.validate(function (err) {\n    assert.ok(err) // success\n  })\n})\n\n// using a custom error message\nvar match = [ /\\.html$/, \"That file doesn't end in .html ({VALUE})\" ];\nvar s = new Schema({ file: { type: String, match: match }})\nvar M = db.model('M', s);\nvar m = new M({ file: 'invalid' });\nm.validate(function (err) {\n  console.log(String(err)) // \"ValidationError: That file doesn't end in .html (invalid)\"\n})\n</code></pre>\n\n<p>Empty strings, <code>undefined</code>, and <code>null</code> values always pass the match validator. If you require these values, enable the <code>required</code> validator also.</p>\n\n<pre><code>var s = new Schema({ name: { type: String, match: /^a/, required: true }})\n</code></pre>",
    "summary": "<p>Sets a regexp validator.</p>",
    "body": "<p>Any value that does not pass <code>regExp</code>.test(val) will fail validation.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ name: { type: String, match: /^a/ }})\nvar M = db.model('M', s)\nvar m = new M({ name: 'I am invalid' })\nm.validate(function (err) {\n  console.error(String(err)) // \"ValidationError: Path `name` is invalid (I am invalid).\"\n  m.name = 'apples'\n  m.validate(function (err) {\n    assert.ok(err) // success\n  })\n})\n\n// using a custom error message\nvar match = [ /\\.html$/, \"That file doesn't end in .html ({VALUE})\" ];\nvar s = new Schema({ file: { type: String, match: match }})\nvar M = db.model('M', s);\nvar m = new M({ file: 'invalid' });\nm.validate(function (err) {\n  console.log(String(err)) // \"ValidationError: That file doesn't end in .html (invalid)\"\n})\n</code></pre>\n\n<p>Empty strings, <code>undefined</code>, and <code>null</code> values always pass the match validator. If you require these values, enable the <code>required</code> validator also.</p>\n\n<pre><code>var s = new Schema({ name: { type: String, match: /^a/, required: true }})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaString.prototype.match = function match (regExp, message) {\n  // yes, we allow multiple match validators\n\n  var msg = message || errorMessages.String.match;\n\n  var matchValidator = function(v) {\n    var ret = ((null != v && '' !== v)\n      ? regExp.test(v)\n      : true);\n    return ret;\n  };\n\n  this.validators.push({ validator: matchValidator, message: msg, type: 'regexp' });\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaString",
    "cons": "SchemaString",
    "name": "match",
    "string": "SchemaString.prototype.match()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String",
      "null",
      "undefined"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Check required</p>",
    "summary": "<p>Check required</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaString.prototype.checkRequired = function checkRequired (value, doc) {\n  if (SchemaType._isRef(this, value, doc, true)) {\n    return null != value;\n  } else {\n    return (value instanceof String || typeof value == 'string') && value.length;\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaString",
    "cons": "SchemaString",
    "name": "checkRequired",
    "string": "SchemaString.prototype.checkRequired()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts to String</p>",
    "summary": "<p>Casts to String</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaString.prototype.cast = function (value, doc, init) {\n  if (SchemaType._isRef(this, value, doc, init)) {\n    // wait! we may need to cast this to a document\n\n    if (null == value) {\n      return value;\n    }\n\n    // lazy load\n    Document || (Document = require('./../document'));\n\n    if (value instanceof Document) {\n      value.$__.wasPopulated = true;\n      return value;\n    }\n\n    // setting a populated path\n    if ('string' == typeof value) {\n      return value;\n    } else if (Buffer.isBuffer(value) || !utils.isObject(value)) {\n      throw new CastError('string', value, this.path);\n    }\n\n    // Handle the case where user directly sets a populated\n    // path to a plain object; cast to the Model used in\n    // the population query.\n    var path = doc.$__fullPath(this.path);\n    var owner = doc.ownerDocument ? doc.ownerDocument() : doc;\n    var pop = owner.populated(path, true);\n    var ret = new pop.options.model(value);\n    ret.$__.wasPopulated = true;\n    return ret;\n  }\n\n  if (value === null) {\n    return value;\n  }\n\n  if ('undefined' !== typeof value) {\n    // handle documents being passed\n    if (value._id && 'string' == typeof value._id) {\n      return value._id;\n    }\n    if (value.toString) {\n      return value.toString();\n    }\n  }\n\n\n  throw new CastError('string', value, this.path);\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaString",
    "cons": "SchemaString",
    "name": "cast",
    "string": "SchemaString.prototype.cast()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>ignore</p>",
    "summary": "<p>ignore</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function handleSingle (val) {\n  return this.castForQuery(val);\n}\n\nfunction handleArray (val) {\n  var self = this;\n  return val.map(function (m) {\n    return self.castForQuery(m);\n  });\n}\n\nSchemaString.prototype.$conditionalHandlers = {\n    '$ne' : handleSingle\n  , '$in' : handleArray\n  , '$nin': handleArray\n  , '$gt' : handleSingle\n  , '$lt' : handleSingle\n  , '$gte': handleSingle\n  , '$lte': handleSingle\n  , '$all': handleArray\n  , '$regex': handleSingle\n  , '$options': handleSingle\n};",
   "ctx": {
    "type": "function",
    "name": "handleSingle",
    "string": "handleSingle()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "$conditional",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "[val]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts contents for queries.</p>",
    "summary": "<p>Casts contents for queries.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaString.prototype.castForQuery = function ($conditional, val) {\n  var handler;\n  if (arguments.length === 2) {\n    handler = this.$conditionalHandlers[$conditional];\n    if (!handler)\n      throw new Error(\"Can't use \" + $conditional + \" with String.\");\n    return handler.call(this, val);\n  } else {\n    val = $conditional;\n    if (val instanceof RegExp) return val;\n    return this.cast(val);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaString",
    "cons": "SchemaString",
    "name": "castForQuery",
    "string": "SchemaString.prototype.castForQuery()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = SchemaString;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "SchemaString",
    "string": "module.exports"
   }
  }
 ],
 "schema": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var EventEmitter = require('events').EventEmitter\n  , VirtualType = require('./virtualtype')\n  , utils = require('./utils')\n  , MongooseTypes;",
   "ctx": {
    "type": "declaration",
    "name": "EventEmitter",
    "value": "require('events').EventEmitter",
    "string": "EventEmitter"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "definition",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "NodeJS EventEmitter http://nodejs.org/api/events.html#events_class_events_eventemitter"
    },
    {
     "type": "event",
     "string": "`init`: Emitted after the schema is compiled into a `Model`."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Schema constructor.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var child = new Schema({ name: String });\nvar schema = new Schema({ name: String, age: Number, children: [child] });\nvar Tree = mongoose.model('Tree', schema);\n\n// setting schema options\nnew Schema({ name: String }, { _id: false, autoIndex: false })\n</code></pre>\n\n<h4>Options:</h4>\n\n<ul>\n<li><a href=\"/docs/guide.html#autoIndex\">autoIndex</a>: bool - defaults to true</li>\n<li><a href=\"/docs/guide.html#bufferCommands\">bufferCommands</a>: bool - defaults to true</li>\n<li><a href=\"/docs/guide.html#capped\">capped</a>: bool - defaults to false</li>\n<li><a href=\"/docs/guide.html#collection\">collection</a>: string - no default</li>\n<li><a href=\"/docs/guide.html#id\">id</a>: bool - defaults to true</li>\n<li><a href=\"/docs/guide.html#_id\">_id</a>: bool - defaults to true</li>\n<li><code>minimize</code>: bool - controls <a href=\"#document_Document-toObject\">document#toObject</a> behavior when called manually - defaults to true</li>\n<li><a href=\"/docs/guide.html#read\">read</a>: string</li>\n<li><a href=\"/docs/guide.html#safe\">safe</a>: bool - defaults to true.</li>\n<li><a href=\"/docs/guide.html#shardKey\">shardKey</a>: bool - defaults to <code>null</code></li>\n<li><a href=\"/docs/guide.html#strict\">strict</a>: bool - defaults to true</li>\n<li><a href=\"/docs/guide.html#toJSON\">toJSON</a> - object - no default</li>\n<li><a href=\"/docs/guide.html#toObject\">toObject</a> - object - no default</li>\n<li><a href=\"/docs/guide.html#validateBeforeSave\">validateBeforeSave</a> - bool - defaults to <code>true</code></li>\n<li><a href=\"/docs/guide.html#versionKey\">versionKey</a>: bool - defaults to \"__v\"</li>\n</ul>\n\n<h4>Note:</h4>\n\n<p><em>When nesting schemas, (<code>children</code> in the example above), always declare the child schema first before passing it into is parent.</em></p>",
    "summary": "<p>Schema constructor.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var child = new Schema({ name: String });\nvar schema = new Schema({ name: String, age: Number, children: [child] });\nvar Tree = mongoose.model('Tree', schema);\n\n// setting schema options\nnew Schema({ name: String }, { _id: false, autoIndex: false })\n</code></pre>\n\n<h4>Options:</h4>\n\n<ul>\n<li><a href=\"/docs/guide.html#autoIndex\">autoIndex</a>: bool - defaults to true</li>\n<li><a href=\"/docs/guide.html#bufferCommands\">bufferCommands</a>: bool - defaults to true</li>\n<li><a href=\"/docs/guide.html#capped\">capped</a>: bool - defaults to false</li>\n<li><a href=\"/docs/guide.html#collection\">collection</a>: string - no default</li>\n<li><a href=\"/docs/guide.html#id\">id</a>: bool - defaults to true</li>\n<li><a href=\"/docs/guide.html#_id\">_id</a>: bool - defaults to true</li>\n<li><code>minimize</code>: bool - controls <a href=\"#document_Document-toObject\">document#toObject</a> behavior when called manually - defaults to true</li>\n<li><a href=\"/docs/guide.html#read\">read</a>: string</li>\n<li><a href=\"/docs/guide.html#safe\">safe</a>: bool - defaults to true.</li>\n<li><a href=\"/docs/guide.html#shardKey\">shardKey</a>: bool - defaults to <code>null</code></li>\n<li><a href=\"/docs/guide.html#strict\">strict</a>: bool - defaults to true</li>\n<li><a href=\"/docs/guide.html#toJSON\">toJSON</a> - object - no default</li>\n<li><a href=\"/docs/guide.html#toObject\">toObject</a> - object - no default</li>\n<li><a href=\"/docs/guide.html#validateBeforeSave\">validateBeforeSave</a> - bool - defaults to <code>true</code></li>\n<li><a href=\"/docs/guide.html#versionKey\">versionKey</a>: bool - defaults to \"__v\"</li>\n</ul>\n\n<h4>Note:</h4>\n\n<p><em>When nesting schemas, (<code>children</code> in the example above), always declare the child schema first before passing it into is parent.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Schema (obj, options) {\n  if (!(this instanceof Schema))\n    return new Schema(obj, options);\n\n  this.paths = {};\n  this.subpaths = {};\n  this.virtuals = {};\n  this.nested = {};\n  this.inherits = {};\n  this.callQueue = [];\n  this._indexes = [];\n  this.methods = {};\n  this.statics = {};\n  this.tree = {};\n  this._requiredpaths = undefined;\n  this.discriminatorMapping = undefined;\n  this._indexedpaths = undefined;\n\n  this.options = this.defaultOptions(options);\n\n  // build paths\n  if (obj) {\n    this.add(obj);\n  }\n\n  // ensure the documents get an auto _id unless disabled\n  var auto_id = !this.paths['_id'] && (!this.options.noId && this.options._id);\n  if (auto_id) {\n    this.add({ _id: {type: Schema.ObjectId, auto: true} });\n  }\n\n  // ensure the documents receive an id getter unless disabled\n  var autoid = !this.paths['id'] && (!this.options.noVirtualId && this.options.id);\n  if (autoid) {\n    this.virtual('id').get(idGetter);\n  }\n\n  // adds updatedAt and createdAt timestamps to documents if enabled\n  var timestamps = this.options.timestamps;\n  if (timestamps) {\n    var createdAt = timestamps.createdAt || 'createdAt'\n      , updatedAt = timestamps.updatedAt || 'updatedAt'\n      , schemaAdditions = {};\n\n    schemaAdditions[updatedAt] = Date;\n\n    if (!this.paths[createdAt]) {\n      schemaAdditions[createdAt] = Date;\n    }\n\n    this.add(schemaAdditions);\n\n    this.pre('save', function (next) {\n      var defaultTimestamp = new Date();\n\n      if (!this[createdAt]){\n        this[createdAt] = auto_id ? this._id.getTimestamp() : defaultTimestamp;\n      }\n\n      this[updatedAt] = this.isNew ? this[createdAt] : defaultTimestamp;\n\n      next();\n    });\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "Schema",
    "string": "Schema()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Returns this documents _id cast to a string.</p>",
    "summary": "<p>Returns this documents _id cast to a string.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function idGetter () {\n  if (this.$__._id) {\n    return this.$__._id;\n  }\n\n  return this.$__._id = null == this._id\n    ? null\n    : String(this._id);\n}",
   "ctx": {
    "type": "function",
    "name": "idGetter",
    "string": "idGetter()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherit from EventEmitter.</p>",
    "summary": "<p>Inherit from EventEmitter.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "Schema.prototype = Object.create( EventEmitter.prototype );\nSchema.prototype.constructor = Schema;",
   "ctx": {
    "type": "property",
    "receiver": "Schema",
    "name": "prototype",
    "value": "Object.create( EventEmitter.prototype )",
    "string": "Schema.prototype"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "property",
     "string": "paths"
    }
   ],
   "description": {
    "full": "<p>Schema as flat paths</p>\n\n<h4>Example:</h4>\n\n<pre><code>{\n    '_id'        : SchemaType,\n  , 'nested.key' : SchemaType,\n}\n</code></pre>",
    "summary": "<p>Schema as flat paths</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>{\n    '_id'        : SchemaType,\n  , 'nested.key' : SchemaType,\n}\n</code></pre>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Schema.prototype.paths;"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "property",
     "string": "tree"
    }
   ],
   "description": {
    "full": "<p>Schema as a tree</p>\n\n<h4>Example:</h4>\n\n<pre><code>{\n    '_id'     : ObjectId\n  , 'nested'  : {\n        'key' : String\n    }\n}\n</code></pre>",
    "summary": "<p>Schema as a tree</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>{\n    '_id'     : ObjectId\n  , 'nested'  : {\n        'key' : String\n    }\n}\n</code></pre>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Schema.prototype.tree;"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Returns default options for this schema, merged with <code>options</code>.</p>",
    "summary": "<p>Returns default options for this schema, merged with <code>options</code>.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Schema.prototype.defaultOptions = function (options) {\n  if (options && false === options.safe) {\n    options.safe = { w: 0 };\n  }\n\n  if (options && options.safe && 0 === options.safe.w) {\n    // if you turn off safe writes, then versioning goes off as well\n    options.versionKey = false;\n  }\n\n  options = utils.options({\n      strict: true\n    , bufferCommands: true\n    , capped: false // { size, max, autoIndexId }\n    , versionKey: '__v'\n    , discriminatorKey: '__t'\n    , minimize: true\n    , autoIndex: true\n    , shardKey: null\n    , read: null\n    , validateBeforeSave: true\n    // the following are only applied at construction time\n    , noId: false // deprecated, use { _id: false }\n    , _id: true\n    , noVirtualId: false // deprecated, use { id: false }\n    , id: true\n//    , pluralization: true  // only set this to override the global option\n  }, options);\n\n  if (options.read) {\n    options.read = utils.readPref(options.read);\n  }\n\n  return options;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "defaultOptions",
    "string": "Schema.prototype.defaultOptions()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "prefix",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Adds key path / schema type pairs to this schema.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var ToySchema = new Schema;\nToySchema.add({ name: 'string', color: 'string', price: 'number' });\n</code></pre>",
    "summary": "<p>Adds key path / schema type pairs to this schema.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var ToySchema = new Schema;\nToySchema.add({ name: 'string', color: 'string', price: 'number' });\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.add = function add (obj, prefix) {\n  prefix = prefix || '';\n  var keys = Object.keys(obj);\n\n  for (var i = 0; i < keys.length; ++i) {\n    var key = keys[i];\n\n    if (null == obj[key]) {\n      throw new TypeError('Invalid value for schema path `'+ prefix + key +'`');\n    }\n\n    if (utils.isObject(obj[key]) && (!obj[key].constructor || 'Object' == utils.getFunctionName(obj[key].constructor)) && (!obj[key].type || obj[key].type.type)) {\n      if (Object.keys(obj[key]).length) {\n        // nested object { last: { name: String }}\n        this.nested[prefix + key] = true;\n        this.add(obj[key], prefix + key + '.');\n      } else {\n        this.path(prefix + key, obj[key]); // mixed type\n      }\n    } else {\n      this.path(prefix + key, obj[key]);\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "add",
    "string": "Schema.prototype.add()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Reserved document keys.</p>\n\n<p>Keys in this object are names that are rejected in schema declarations b/c they conflict with mongoose functionality. Using these key name will throw an error.</p>\n\n<pre><code> on, emit, _events, db, get, set, init, isNew, errors, schema, options, modelName, collection, _pres, _posts, toObject\n</code></pre>\n\n<p><em>NOTE:</em> Use of these terms as method names is permitted, but play at your own risk, as they may be existing mongoose document methods you are stomping on.</p>\n\n<pre><code> var schema = new Schema(..);\n schema.methods.init = function () {} // potentially breaking\n</code></pre>",
    "summary": "<p>Reserved document keys.</p>",
    "body": "<p>Keys in this object are names that are rejected in schema declarations b/c they conflict with mongoose functionality. Using these key name will throw an error.</p>\n\n<pre><code> on, emit, _events, db, get, set, init, isNew, errors, schema, options, modelName, collection, _pres, _posts, toObject\n</code></pre>\n\n<p><em>NOTE:</em> Use of these terms as method names is permitted, but play at your own risk, as they may be existing mongoose document methods you are stomping on.</p>\n\n<pre><code> var schema = new Schema(..);\n schema.methods.init = function () {} // potentially breaking\n</code></pre>"
   },
   "ignore": false,
   "code": "Schema.reserved = Object.create(null);\nvar reserved = Schema.reserved;\nreserved.on =\nreserved.db =\nreserved.set =\nreserved.get =\nreserved.init =\nreserved.isNew =\nreserved.errors =\nreserved.schema =\nreserved.options =\nreserved.modelName =\nreserved.collection =\nreserved.toObject =\nreserved.domain =\nreserved.emit =    // EventEmitter\nreserved._events = // EventEmitter\nreserved._pres = reserved._posts = 1 // hooks.js",
   "ctx": {
    "type": "property",
    "receiver": "Schema",
    "name": "reserved",
    "value": "Object.create(null)",
    "string": "Schema.reserved"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "constructor",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Gets/sets schema paths.</p>\n\n<p>Sets a path (if arity 2)<br />Gets a path (if arity 1)</p>\n\n<h4>Example</h4>\n\n<pre><code>schema.path('name') // returns a SchemaType\nschema.path('name', Number) // changes the schemaType of `name` to Number\n</code></pre>",
    "summary": "<p>Gets/sets schema paths.</p>",
    "body": "<p>Sets a path (if arity 2)<br />Gets a path (if arity 1)</p>\n\n<h4>Example</h4>\n\n<pre><code>schema.path('name') // returns a SchemaType\nschema.path('name', Number) // changes the schemaType of `name` to Number\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.path = function (path, obj) {\n  if (obj == undefined) {\n    if (this.paths[path]) return this.paths[path];\n    if (this.subpaths[path]) return this.subpaths[path];\n\n    // subpaths?\n    return /\\.\\d+\\.?.*$/.test(path)\n      ? getPositionalPath(this, path)\n      : undefined;\n  }\n\n  // some path names conflict with document methods\n  if (reserved[path]) {\n    throw new Error(\"`\" + path + \"` may not be used as a schema pathname\");\n  }\n\n  // update the tree\n  var subpaths = path.split(/\\./)\n    , last = subpaths.pop()\n    , branch = this.tree;\n\n  subpaths.forEach(function(sub, i) {\n    if (!branch[sub]) branch[sub] = {};\n    if ('object' != typeof branch[sub]) {\n      var msg = 'Cannot set nested path `' + path + '`. '\n              + 'Parent path `'\n              + subpaths.slice(0, i).concat([sub]).join('.')\n              + '` already set to type ' + branch[sub].name\n              + '.';\n      throw new Error(msg);\n    }\n    branch = branch[sub];\n  });\n\n  branch[last] = utils.clone(obj);\n\n  this.paths[path] = Schema.interpretAsType(path, obj);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "path",
    "string": "Schema.prototype.path()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": "constructor"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Converts type arguments into Mongoose Types.</p>",
    "summary": "<p>Converts type arguments into Mongoose Types.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Schema.interpretAsType = function (path, obj) {\n  if (obj.constructor) {\n    var constructorName = utils.getFunctionName(obj.constructor);\n    if (constructorName != 'Object') {\n      obj = { type: obj };\n    }\n  }\n\n  // Get the type making sure to allow keys named \"type\"\n  // and default to mixed if not specified.\n  // { type: { type: String, default: 'freshcut' } }\n  var type = obj.type && !obj.type.type\n    ? obj.type\n    : {};\n\n  if ('Object' == utils.getFunctionName(type.constructor) || 'mixed' == type) {\n    return new MongooseTypes.Mixed(path, obj);\n  }\n\n  if (Array.isArray(type) || Array == type || 'array' == type) {\n    // if it was specified through { type } look for `cast`\n    var cast = (Array == type || 'array' == type)\n      ? obj.cast\n      : type[0];\n\n    if (cast instanceof Schema) {\n      return new MongooseTypes.DocumentArray(path, cast, obj);\n    }\n\n    if ('string' == typeof cast) {\n      cast = MongooseTypes[cast.charAt(0).toUpperCase() + cast.substring(1)];\n    } else if (cast && (!cast.type || cast.type.type)\n                    && 'Object' == utils.getFunctionName(cast.constructor)\n                    && Object.keys(cast).length) {\n      return new MongooseTypes.DocumentArray(path, new Schema(cast), obj);\n    }\n\n    return new MongooseTypes.Array(path, cast || MongooseTypes.Mixed, obj);\n  }\n\n  var name = 'string' == typeof type\n    ? type\n    // If not string, `type` is a function. Outside of IE, function.name\n    // gives you the function name. In IE, you need to compute it\n    : utils.getFunctionName(type);\n\n  if (name) {\n    name = name.charAt(0).toUpperCase() + name.substring(1);\n  }\n\n  if (undefined == MongooseTypes[name]) {\n    throw new TypeError('Undefined type at `' + path +\n        '`\\n  Did you try nesting Schemas? ' +\n        'You can only nest using refs or arrays.');\n  }\n\n  return new MongooseTypes[name](path, obj);\n};",
   "ctx": {
    "type": "method",
    "receiver": "Schema",
    "name": "interpretAsType",
    "string": "Schema.interpretAsType()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "fn",
     "description": "callback function"
    },
    {
     "type": "return",
     "types": [
      "Schema"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Iterates the schemas paths similar to Array#forEach.</p>\n\n<p>The callback is passed the pathname and schemaType as arguments on each iteration.</p>",
    "summary": "<p>Iterates the schemas paths similar to Array#forEach.</p>",
    "body": "<p>The callback is passed the pathname and schemaType as arguments on each iteration.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.eachPath = function (fn) {\n  var keys = Object.keys(this.paths)\n    , len = keys.length;\n\n  for (var i = 0; i < len; ++i) {\n    fn(keys[i], this.paths[keys[i]]);\n  }\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "eachPath",
    "string": "Schema.prototype.eachPath()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Returns an Array of path strings that are required by this schema.</p>",
    "summary": "<p>Returns an Array of path strings that are required by this schema.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.requiredPaths = function requiredPaths () {\n  if (this._requiredpaths) return this._requiredpaths;\n\n  var paths = Object.keys(this.paths)\n    , i = paths.length\n    , ret = [];\n\n  while (i--) {\n    var path = paths[i];\n    if (this.paths[path].isRequired) ret.push(path);\n  }\n\n  return this._requiredpaths = ret;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "requiredPaths",
    "string": "Schema.prototype.requiredPaths()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Returns indexes from fields and schema-level indexes (cached).</p>",
    "summary": "<p>Returns indexes from fields and schema-level indexes (cached).</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Schema.prototype.indexedPaths = function indexedPaths () {\n  if (this._indexedpaths) return this._indexedpaths;\n\n  return this._indexedpaths = this.indexes();\n}",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "indexedPaths",
    "string": "Schema.prototype.indexedPaths()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the pathType of <code>path</code> for this schema.</p>\n\n<p>Given a path, returns whether it is a real, virtual, nested, or ad-hoc/undefined path.</p>",
    "summary": "<p>Returns the pathType of <code>path</code> for this schema.</p>",
    "body": "<p>Given a path, returns whether it is a real, virtual, nested, or ad-hoc/undefined path.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.pathType = function (path) {\n  if (path in this.paths) return 'real';\n  if (path in this.virtuals) return 'virtual';\n  if (path in this.nested) return 'nested';\n  if (path in this.subpaths) return 'real';\n\n  if (/\\.\\d+\\.|\\.\\d+$/.test(path) && getPositionalPath(this, path)) {\n    return 'real';\n  } else {\n    return 'adhocOrUndefined'\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "pathType",
    "string": "Schema.prototype.pathType()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>ignore</p>",
    "summary": "<p>ignore</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function getPositionalPath (self, path) {\n  var subpaths = path.split(/\\.(\\d+)\\.|\\.(\\d+)$/).filter(Boolean);\n  if (subpaths.length < 2) {\n    return self.paths[subpaths[0]];\n  }\n\n  var val = self.path(subpaths[0]);\n  if (!val) return val;\n\n  var last = subpaths.length - 1\n    , subpath\n    , i = 1;\n\n  for (; i < subpaths.length; ++i) {\n    subpath = subpaths[i];\n\n    if (i === last && val && !val.schema && !/\\D/.test(subpath)) {\n      if (val instanceof MongooseTypes.Array) {\n        // StringSchema, NumberSchema, etc\n        val = val.caster;\n      } else {\n        val = undefined;\n      }\n      break;\n    }\n\n    // ignore if its just a position segment: path.0.subpath\n    if (!/\\D/.test(subpath)) continue;\n\n    if (!(val && val.schema)) {\n      val = undefined;\n      break;\n    }\n\n    val = val.schema.path(subpath);\n  }\n\n  return self.subpaths[path] = val;\n}",
   "ctx": {
    "type": "function",
    "name": "getPositionalPath",
    "string": "getPositionalPath()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": "name of the document method to call later"
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "args",
     "description": "arguments to pass to the method"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Adds a method call to the queue.</p>",
    "summary": "<p>Adds a method call to the queue.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Schema.prototype.queue = function(name, args){\n  this.callQueue.push([name, args]);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "queue",
    "string": "Schema.prototype.queue()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "method",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": ""
    },
    {
     "type": "see",
     "title": "hooks.js",
     "url": "https://github.com/bnoguchi/hooks-js/tree/31ec571cef0332e21121ee7157e0cf9728572cc3",
     "visibility": "https://github.com/bnoguchi/hooks-js/tree/31ec571cef0332e21121ee7157e0cf9728572cc3"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Defines a pre hook for the document.</p>\n\n<h4>Example</h4>\n\n<pre><code>var toySchema = new Schema(..);\n\ntoySchema.pre('save', function (next) {\n  if (!this.created) this.created = new Date;\n  next();\n})\n\ntoySchema.pre('validate', function (next) {\n  if (this.name != 'Woody') this.name = 'Woody';\n  next();\n})\n</code></pre>",
    "summary": "<p>Defines a pre hook for the document.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>var toySchema = new Schema(..);\n\ntoySchema.pre('save', function (next) {\n  if (!this.created) this.created = new Date;\n  next();\n})\n\ntoySchema.pre('validate', function (next) {\n  if (this.name != 'Woody') this.name = 'Woody';\n  next();\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.pre = function(){\n  return this.queue('pre', arguments);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "pre",
    "string": "Schema.prototype.pre()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "method",
     "description": "name of the method to hook"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "fn",
     "description": "callback"
    },
    {
     "type": "see",
     "title": "hooks.js",
     "url": "https://github.com/bnoguchi/hooks-js/tree/31ec571cef0332e21121ee7157e0cf9728572cc3",
     "visibility": "https://github.com/bnoguchi/hooks-js/tree/31ec571cef0332e21121ee7157e0cf9728572cc3"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Defines a post hook for the document</p>\n\n<p>Post hooks fire <code>on</code> the event emitted from document instances of Models compiled from this schema.</p>\n\n<pre><code>var schema = new Schema(..);\nschema.post('save', function (doc) {\n  console.log('this fired after a document was saved');\n});\n\nvar Model = mongoose.model('Model', schema);\n\nvar m = new Model(..);\nm.save(function (err) {\n  console.log('this fires after the `post` hook');\n});\n</code></pre>",
    "summary": "<p>Defines a post hook for the document</p>",
    "body": "<p>Post hooks fire <code>on</code> the event emitted from document instances of Models compiled from this schema.</p>\n\n<pre><code>var schema = new Schema(..);\nschema.post('save', function (doc) {\n  console.log('this fired after a document was saved');\n});\n\nvar Model = mongoose.model('Model', schema);\n\nvar m = new Model(..);\nm.save(function (err) {\n  console.log('this fires after the `post` hook');\n});\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.post = function(method, fn){\n  // assuming that all callbacks with arity < 2 are synchronous post hooks\n  if (fn.length < 2)\n    return this.queue('on', arguments);\n  return this.queue('post', [arguments[0], function(next){\n    // wrap original function so that the callback goes last,\n    // for compatibility with old code that is using synchronous post hooks\n    fn.call(this, this, next);\n  }]);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "post",
    "string": "Schema.prototype.post()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "plugin",
     "description": "callback"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "opts",
     "description": ""
    },
    {
     "type": "see",
     "local": "plugins",
     "visibility": "plugins"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Registers a plugin for this schema.</p>",
    "summary": "<p>Registers a plugin for this schema.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.plugin = function (fn, opts) {\n  fn(this, opts);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "plugin",
    "string": "Schema.prototype.plugin()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String",
      "Object"
     ],
     "name": "method",
     "description": "name"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[fn]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Adds an instance method to documents constructed from Models compiled from this schema.</p>\n\n<h4>Example</h4>\n\n<pre><code>var schema = kittySchema = new Schema(..);\n\nschema.method('meow', function () {\n  console.log('meeeeeoooooooooooow');\n})\n\nvar Kitty = mongoose.model('Kitty', schema);\n\nvar fizz = new Kitty;\nfizz.meow(); // meeeeeooooooooooooow\n</code></pre>\n\n<p>If a hash of name/fn pairs is passed as the only argument, each name/fn pair will be added as methods.</p>\n\n<pre><code>schema.method({\n    purr: function () {}\n  , scratch: function () {}\n});\n\n// later\nfizz.purr();\nfizz.scratch();\n</code></pre>",
    "summary": "<p>Adds an instance method to documents constructed from Models compiled from this schema.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>var schema = kittySchema = new Schema(..);\n\nschema.method('meow', function () {\n  console.log('meeeeeoooooooooooow');\n})\n\nvar Kitty = mongoose.model('Kitty', schema);\n\nvar fizz = new Kitty;\nfizz.meow(); // meeeeeooooooooooooow\n</code></pre>\n\n<p>If a hash of name/fn pairs is passed as the only argument, each name/fn pair will be added as methods.</p>\n\n<pre><code>schema.method({\n    purr: function () {}\n  , scratch: function () {}\n});\n\n// later\nfizz.purr();\nfizz.scratch();\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.method = function (name, fn) {\n  if ('string' != typeof name)\n    for (var i in name)\n      this.methods[i] = name[i];\n  else\n    this.methods[name] = fn;\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "method",
    "string": "Schema.prototype.method()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "fn",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Adds static \"class\" methods to Models compiled from this schema.</p>\n\n<h4>Example</h4>\n\n<pre><code>var schema = new Schema(..);\nschema.static('findByName', function (name, callback) {\n  return this.find({ name: name }, callback);\n});\n\nvar Drink = mongoose.model('Drink', schema);\nDrink.findByName('sanpellegrino', function (err, drinks) {\n  //\n});\n</code></pre>\n\n<p>If a hash of name/fn pairs is passed as the only argument, each name/fn pair will be added as statics.</p>",
    "summary": "<p>Adds static \"class\" methods to Models compiled from this schema.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>var schema = new Schema(..);\nschema.static('findByName', function (name, callback) {\n  return this.find({ name: name }, callback);\n});\n\nvar Drink = mongoose.model('Drink', schema);\nDrink.findByName('sanpellegrino', function (err, drinks) {\n  //\n});\n</code></pre>\n\n<p>If a hash of name/fn pairs is passed as the only argument, each name/fn pair will be added as statics.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.static = function(name, fn) {\n  if ('string' != typeof name)\n    for (var i in name)\n      this.statics[i] = name[i];\n  else\n    this.statics[name] = fn;\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "static",
    "string": "Schema.prototype.static()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "fields",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Defines an index (most likely compound) for this schema.</p>\n\n<h4>Example</h4>\n\n<pre><code>schema.index({ first: 1, last: -1 })\n</code></pre>",
    "summary": "<p>Defines an index (most likely compound) for this schema.</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>schema.index({ first: 1, last: -1 })\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.index = function (fields, options) {\n  options || (options = {});\n\n  if (options.expires)\n    utils.expires(options);\n\n  this._indexes.push([fields, options]);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "index",
    "string": "Schema.prototype.index()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "key",
     "description": "option name"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[value]",
     "description": "if not passed, the current option value is returned"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets/gets a schema option.</p>",
    "summary": "<p>Sets/gets a schema option.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.set = function (key, value, _tags) {\n  if (1 === arguments.length) {\n    return this.options[key];\n  }\n\n  switch (key) {\n    case 'read':\n      this.options[key] = utils.readPref(value, _tags)\n      break;\n    case 'safe':\n      this.options[key] = false === value\n        ? { w: 0 }\n        : value\n      break;\n    default:\n      this.options[key] = value;\n  }\n\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "set",
    "string": "Schema.prototype.set()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "key",
     "description": "option name"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Gets a schema option.</p>",
    "summary": "<p>Gets a schema option.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.get = function (key) {\n  return this.options[key];\n}",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "get",
    "string": "Schema.prototype.get()"
   }
  },
  {
   "tags": [
    {
     "type": "static",
     "string": "indexTypes"
    },
    {
     "type": "receiver",
     "string": "Schema"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The allowed index types</p>",
    "summary": "<p>The allowed index types</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var indexTypes = '2d 2dsphere hashed text'.split(' ');\n\nObject.defineProperty(Schema, 'indexTypes', {\n    get: function () { return indexTypes }\n  , set: function () { throw new Error('Cannot overwrite Schema.indexTypes') }\n})",
   "ctx": {
    "type": "declaration",
    "name": "indexTypes",
    "value": "'2d 2dsphere hashed text'.split(' ')",
    "string": "indexTypes"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Compiles indexes from fields and schema-level indexes</p>",
    "summary": "<p>Compiles indexes from fields and schema-level indexes</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.indexes = function () {\n  'use strict';\n\n  var indexes = []\n    , seenSchemas = []\n  collectIndexes(this);\n  return indexes;\n\n  function collectIndexes (schema, prefix) {\n    if (~seenSchemas.indexOf(schema)) return;\n    seenSchemas.push(schema);\n\n    prefix = prefix || '';\n\n    var key, path, index, field, isObject, options, type;\n    var keys = Object.keys(schema.paths);\n\n    for (var i = 0; i < keys.length; ++i) {\n      key = keys[i];\n      path = schema.paths[key];\n\n      if (path instanceof MongooseTypes.DocumentArray) {\n        collectIndexes(path.schema, key + '.');\n      } else {\n        index = path._index;\n\n        if (false !== index && null != index) {\n          field = {};\n          isObject = utils.isObject(index);\n          options = isObject ? index : {};\n          type = 'string' == typeof index ? index :\n            isObject ? index.type :\n            false;\n\n          if (type && ~Schema.indexTypes.indexOf(type)) {\n            field[prefix + key] = type;\n          } else {\n            field[prefix + key] = 1;\n          }\n\n          delete options.type;\n          if (!('background' in options)) {\n            options.background = true;\n          }\n\n          indexes.push([field, options]);\n        }\n      }\n    }\n\n    if (prefix) {\n      fixSubIndexPaths(schema, prefix);\n    } else {\n      schema._indexes.forEach(function (index) {\n        if (!('background' in index[1])) index[1].background = true;\n      });\n      indexes = indexes.concat(schema._indexes);\n    }\n  }",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "indexes",
    "string": "Schema.prototype.indexes()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Checks for indexes added to subdocs using Schema.index().<br />These indexes need their paths prefixed properly.</p>\n\n<p>schema._indexes = [ [indexObj, options], [indexObj, options] ..]</p>",
    "summary": "<p>Checks for indexes added to subdocs using Schema.index().<br />These indexes need their paths prefixed properly.</p>",
    "body": "<p>schema._indexes = [ [indexObj, options], [indexObj, options] ..]</p>"
   },
   "ignore": true,
   "code": "function fixSubIndexPaths (schema, prefix) {\n    var subindexes = schema._indexes\n      , len = subindexes.length\n      , indexObj\n      , newindex\n      , klen\n      , keys\n      , key\n      , i = 0\n      , j\n\n    for (i = 0; i < len; ++i) {\n      indexObj = subindexes[i][0];\n      keys = Object.keys(indexObj);\n      klen = keys.length;\n      newindex = {};\n\n      // use forward iteration, order matters\n      for (j = 0; j < klen; ++j) {\n        key = keys[j];\n        newindex[prefix + key] = indexObj[key];\n      }\n\n      indexes.push([newindex, subindexes[i][1]]);\n    }\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "fixSubIndexPaths",
    "string": "fixSubIndexPaths()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "VirtualType"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Creates a virtual type with the given name.</p>",
    "summary": "<p>Creates a virtual type with the given name.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.virtual = function (name, options) {\n  var virtuals = this.virtuals;\n  var parts = name.split('.');\n  return virtuals[name] = parts.reduce(function (mem, part, i) {\n    mem[part] || (mem[part] = (i === parts.length-1)\n                            ? new VirtualType(options, name)\n                            : {});\n    return mem[part];\n  }, this.tree);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "virtual",
    "string": "Schema.prototype.virtual()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "VirtualType"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Returns the virtual type with the given <code>name</code>.</p>",
    "summary": "<p>Returns the virtual type with the given <code>name</code>.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.prototype.virtualpath = function (name) {\n  return this.virtuals[name];\n};",
   "ctx": {
    "type": "method",
    "constructor": "Schema",
    "cons": "Schema",
    "name": "virtualpath",
    "string": "Schema.prototype.virtualpath()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = exports = Schema;\n\n// require down here because of reference issues",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "exports = Schema",
    "string": "module.exports"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The various built-in Mongoose Schema Types.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var mongoose = require('mongoose');\nvar ObjectId = mongoose.Schema.Types.ObjectId;\n</code></pre>\n\n<h4>Types:</h4>\n\n<ul>\n<li><a href=\"#schema-string-js\">String</a></li>\n<li><a href=\"#schema-number-js\">Number</a></li>\n<li><a href=\"#schema-boolean-js\">Boolean</a> | Bool</li>\n<li><a href=\"#schema-array-js\">Array</a></li>\n<li><a href=\"#schema-buffer-js\">Buffer</a></li>\n<li><a href=\"#schema-date-js\">Date</a></li>\n<li><a href=\"#schema-objectid-js\">ObjectId</a> | Oid</li>\n<li><a href=\"#schema-mixed-js\">Mixed</a></li>\n</ul>\n\n<p>Using this exposed access to the <code>Mixed</code> SchemaType, we can use them in our schema.</p>\n\n<pre><code>var Mixed = mongoose.Schema.Types.Mixed;\nnew mongoose.Schema({ _user: Mixed })\n</code></pre>",
    "summary": "<p>The various built-in Mongoose Schema Types.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var mongoose = require('mongoose');\nvar ObjectId = mongoose.Schema.Types.ObjectId;\n</code></pre>\n\n<h4>Types:</h4>\n\n<ul>\n<li><a href=\"#schema-string-js\">String</a></li>\n<li><a href=\"#schema-number-js\">Number</a></li>\n<li><a href=\"#schema-boolean-js\">Boolean</a> | Bool</li>\n<li><a href=\"#schema-array-js\">Array</a></li>\n<li><a href=\"#schema-buffer-js\">Buffer</a></li>\n<li><a href=\"#schema-date-js\">Date</a></li>\n<li><a href=\"#schema-objectid-js\">ObjectId</a> | Oid</li>\n<li><a href=\"#schema-mixed-js\">Mixed</a></li>\n</ul>\n\n<p>Using this exposed access to the <code>Mixed</code> SchemaType, we can use them in our schema.</p>\n\n<pre><code>var Mixed = mongoose.Schema.Types.Mixed;\nnew mongoose.Schema({ _user: Mixed })\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Schema.Types = MongooseTypes = require('./schema/index');",
   "ctx": {
    "type": "property",
    "receiver": "Schema",
    "name": "Types",
    "value": "MongooseTypes = require('./schema/index')",
    "string": "Schema.Types"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>ignore</p>",
    "summary": "<p>ignore</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var ObjectId = exports.ObjectId = MongooseTypes.ObjectId;",
   "ctx": {
    "type": "declaration",
    "name": "ObjectId",
    "value": "exports.ObjectId = MongooseTypes.ObjectId",
    "string": "ObjectId"
   }
  }
 ],
 "schemadefault": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var Schema = require('./schema')",
   "ctx": {
    "type": "declaration",
    "name": "Schema",
    "value": "require('./schema')",
    "string": "Schema"
   }
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "system.profile"
    },
    {
     "type": "receiver",
     "string": "exports"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Default model for querying the system.profiles collection.</p>",
    "summary": "<p>Default model for querying the system.profiles collection.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "exports['system.profile'] = new Schema({\n    ts: Date\n  , info: String // deprecated\n  , millis: Number\n  , op: String\n  , ns: String\n  , query: Schema.Types.Mixed\n  , updateobj: Schema.Types.Mixed\n  , ntoreturn: Number\n  , nreturned: Number\n  , nscanned: Number\n  , responseLength: Number\n  , client: String\n  , user: String\n  , idhack: Boolean\n  , scanAndOrder: Boolean\n  , keyUpdates: Number\n  , cursorid: Number\n}, { noVirtualId: true, noId: true });"
  }
 ],
 "schematype": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var utils = require('./utils');\nvar error = require('./error');\nvar errorMessages = error.messages;\nvar CastError = error.CastError;\nvar ValidatorError = error.ValidatorError;",
   "ctx": {
    "type": "declaration",
    "name": "utils",
    "value": "require('./utils')",
    "string": "utils"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[instance]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>SchemaType constructor</p>",
    "summary": "<p>SchemaType constructor</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function SchemaType (path, options, instance) {\n  this.path = path;\n  this.instance = instance;\n  this.validators = [];\n  this.setters = [];\n  this.getters = [];\n  this.options = options;\n  this._index = null;\n  this.selected;\n\n  for (var i in options) if (this[i] && 'function' == typeof this[i]) {\n    // { unique: true, index: true }\n    if ('index' == i && this._index) continue;\n\n    var opts = Array.isArray(options[i])\n      ? options[i]\n      : [options[i]];\n\n    this[i].apply(this, opts);\n  }\n};",
   "ctx": {
    "type": "function",
    "name": "SchemaType",
    "string": "SchemaType()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function",
      "any"
     ],
     "name": "val",
     "description": "the default value"
    },
    {
     "type": "return",
     "types": [
      "defaultValue"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets a default value for this SchemaType.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var schema = new Schema({ n: { type: Number, default: 10 })\nvar M = db.model('M', schema)\nvar m = new M;\nconsole.log(m.n) // 10\n</code></pre>\n\n<p>Defaults can be either <code>functions</code> which return the value to use as the default or the literal value itself. Either way, the value will be cast based on its schema type before being set during document creation.</p>\n\n<h4>Example:</h4>\n\n<pre><code>// values are cast:\nvar schema = new Schema({ aNumber: { type: Number, default: 4.815162342 }})\nvar M = db.model('M', schema)\nvar m = new M;\nconsole.log(m.aNumber) // 4.815162342\n\n// default unique objects for Mixed types:\nvar schema = new Schema({ mixed: Schema.Types.Mixed });\nschema.path('mixed').default(function () {\n  return {};\n});\n\n// if we don't use a function to return object literals for Mixed defaults,\n// each document will receive a reference to the same object literal creating\n// a \"shared\" object instance:\nvar schema = new Schema({ mixed: Schema.Types.Mixed });\nschema.path('mixed').default({});\nvar M = db.model('M', schema);\nvar m1 = new M;\nm1.mixed.added = 1;\nconsole.log(m1.mixed); // { added: 1 }\nvar m2 = new M;\nconsole.log(m2.mixed); // { added: 1 }\n</code></pre>",
    "summary": "<p>Sets a default value for this SchemaType.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var schema = new Schema({ n: { type: Number, default: 10 })\nvar M = db.model('M', schema)\nvar m = new M;\nconsole.log(m.n) // 10\n</code></pre>\n\n<p>Defaults can be either <code>functions</code> which return the value to use as the default or the literal value itself. Either way, the value will be cast based on its schema type before being set during document creation.</p>\n\n<h4>Example:</h4>\n\n<pre><code>// values are cast:\nvar schema = new Schema({ aNumber: { type: Number, default: 4.815162342 }})\nvar M = db.model('M', schema)\nvar m = new M;\nconsole.log(m.aNumber) // 4.815162342\n\n// default unique objects for Mixed types:\nvar schema = new Schema({ mixed: Schema.Types.Mixed });\nschema.path('mixed').default(function () {\n  return {};\n});\n\n// if we don't use a function to return object literals for Mixed defaults,\n// each document will receive a reference to the same object literal creating\n// a \"shared\" object instance:\nvar schema = new Schema({ mixed: Schema.Types.Mixed });\nschema.path('mixed').default({});\nvar M = db.model('M', schema);\nvar m1 = new M;\nm1.mixed.added = 1;\nconsole.log(m1.mixed); // { added: 1 }\nvar m2 = new M;\nconsole.log(m2.mixed); // { added: 1 }\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaType.prototype.default = function (val) {\n  if (1 === arguments.length) {\n    this.defaultValue = typeof val === 'function'\n      ? val\n      : this.cast(val);\n    return this;\n  } else if (arguments.length > 1) {\n    this.defaultValue = utils.args(arguments);\n  }\n  return this.defaultValue;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaType",
    "cons": "SchemaType",
    "name": "default",
    "string": "SchemaType.prototype.default()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object",
      "Boolean",
      "String"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Declares the index options for this schematype.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ name: { type: String, index: true })\nvar s = new Schema({ loc: { type: [Number], index: 'hashed' })\nvar s = new Schema({ loc: { type: [Number], index: '2d', sparse: true })\nvar s = new Schema({ loc: { type: [Number], index: { type: '2dsphere', sparse: true }})\nvar s = new Schema({ date: { type: Date, index: { unique: true, expires: '1d' }})\nSchema.path('my.path').index(true);\nSchema.path('my.date').index({ expires: 60 });\nSchema.path('my.path').index({ unique: true, sparse: true });\n</code></pre>\n\n<h4>NOTE:</h4>\n\n<p><em>Indexes are created in the background by default. Specify <code>background: false</code> to override.</em></p>\n\n<p><a href=\"http://www.mongodb.org/display/DOCS/Indexes#Indexes-CompoundKeysIndexes\">Direction doesn't matter for single key indexes</a></p>",
    "summary": "<p>Declares the index options for this schematype.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ name: { type: String, index: true })\nvar s = new Schema({ loc: { type: [Number], index: 'hashed' })\nvar s = new Schema({ loc: { type: [Number], index: '2d', sparse: true })\nvar s = new Schema({ loc: { type: [Number], index: { type: '2dsphere', sparse: true }})\nvar s = new Schema({ date: { type: Date, index: { unique: true, expires: '1d' }})\nSchema.path('my.path').index(true);\nSchema.path('my.date').index({ expires: 60 });\nSchema.path('my.path').index({ unique: true, sparse: true });\n</code></pre>\n\n<h4>NOTE:</h4>\n\n<p><em>Indexes are created in the background by default. Specify <code>background: false</code> to override.</em></p>\n\n<p><a href=\"http://www.mongodb.org/display/DOCS/Indexes#Indexes-CompoundKeysIndexes\">Direction doesn't matter for single key indexes</a></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaType.prototype.index = function (options) {\n  this._index = options;\n  utils.expires(this._index);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaType",
    "cons": "SchemaType",
    "name": "index",
    "string": "SchemaType.prototype.index()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "bool",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Declares an unique index.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ name: { type: String, unique: true })\nSchema.path('name').index({ unique: true });\n</code></pre>\n\n<p><em>NOTE: violating the constraint returns an <code>E11000</code> error from MongoDB when saving, not a Mongoose validation error.</em></p>",
    "summary": "<p>Declares an unique index.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ name: { type: String, unique: true })\nSchema.path('name').index({ unique: true });\n</code></pre>\n\n<p><em>NOTE: violating the constraint returns an <code>E11000</code> error from MongoDB when saving, not a Mongoose validation error.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaType.prototype.unique = function (bool) {\n  if (null == this._index || 'boolean' == typeof this._index) {\n    this._index = {};\n  } else if ('string' == typeof this._index) {\n    this._index = { type: this._index };\n  }\n\n  this._index.unique = bool;\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaType",
    "cons": "SchemaType",
    "name": "unique",
    "string": "SchemaType.prototype.unique()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "bool",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Declares a sparse index.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ name: { type: String, sparse: true })\nSchema.path('name').index({ sparse: true });\n</code></pre>",
    "summary": "<p>Declares a sparse index.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ name: { type: String, sparse: true })\nSchema.path('name').index({ sparse: true });\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaType.prototype.sparse = function (bool) {\n  if (null == this._index || 'boolean' == typeof this._index) {\n    this._index = {};\n  } else if ('string' == typeof this._index) {\n    this._index = { type: this._index };\n  }\n\n  this._index.sparse = bool;\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaType",
    "cons": "SchemaType",
    "name": "sparse",
    "string": "SchemaType.prototype.sparse()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "fn",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Adds a setter to this schematype.</p>\n\n<h4>Example:</h4>\n\n<pre><code>function capitalize (val) {\n  if ('string' != typeof val) val = '';\n  return val.charAt(0).toUpperCase() + val.substring(1);\n}\n\n// defining within the schema\nvar s = new Schema({ name: { type: String, set: capitalize }})\n\n// or by retreiving its SchemaType\nvar s = new Schema({ name: String })\ns.path('name').set(capitalize)\n</code></pre>\n\n<p>Setters allow you to transform the data before it gets to the raw mongodb document and is set as a value on an actual key.</p>\n\n<p>Suppose you are implementing user registration for a website. Users provide an email and password, which gets saved to mongodb. The email is a string that you will want to normalize to lower case, in order to avoid one email having more than one account -- e.g., otherwise, <a href='mailto:avenue@q.com'>avenue@q.com</a> can be registered for 2 accounts via <a href='mailto:avenue@q.com'>avenue@q.com</a> and <a href='mailto:AvEnUe@Q.CoM'>AvEnUe@Q.CoM</a>.</p>\n\n<p>You can set up email lower case normalization easily via a Mongoose setter.</p>\n\n<pre><code>function toLower (v) {\n  return v.toLowerCase();\n}\n\nvar UserSchema = new Schema({\n  email: { type: String, set: toLower }\n})\n\nvar User = db.model('User', UserSchema)\n\nvar user = new User({email: '<a href='mailto:AVENUE@Q.COM'>AVENUE@Q.COM</a>'})\nconsole.log(user.email); // '<a href='mailto:avenue@q.com'>avenue@q.com</a>'\n\n// or\nvar user = new User\nuser.email = '<a href='mailto:Avenue@Q.com'>Avenue@Q.com</a>'\nconsole.log(user.email) // '<a href='mailto:avenue@q.com'>avenue@q.com</a>'\n</code></pre>\n\n<p>As you can see above, setters allow you to transform the data before it gets to the raw mongodb document and is set as a value on an actual key.</p>\n\n<p><em>NOTE: we could have also just used the built-in <code>lowercase: true</code> SchemaType option instead of defining our own function.</em></p>\n\n<pre><code>new Schema({ email: { type: String, lowercase: true }})\n</code></pre>\n\n<p>Setters are also passed a second argument, the schematype on which the setter was defined. This allows for tailored behavior based on options passed in the schema.</p>\n\n<pre><code>function inspector (val, schematype) {\n  if (schematype.options.required) {\n    return schematype.path + ' is required';\n  } else {\n    return val;\n  }\n}\n\nvar VirusSchema = new Schema({\n  name: { type: String, required: true, set: inspector },\n  taxonomy: { type: String, set: inspector }\n})\n\nvar Virus = db.model('Virus', VirusSchema);\nvar v = new Virus({ name: 'Parvoviridae', taxonomy: 'Parvovirinae' });\n\nconsole.log(v.name);     // name is required\nconsole.log(v.taxonomy); // Parvovirinae\n</code></pre>",
    "summary": "<p>Adds a setter to this schematype.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>function capitalize (val) {\n  if ('string' != typeof val) val = '';\n  return val.charAt(0).toUpperCase() + val.substring(1);\n}\n\n// defining within the schema\nvar s = new Schema({ name: { type: String, set: capitalize }})\n\n// or by retreiving its SchemaType\nvar s = new Schema({ name: String })\ns.path('name').set(capitalize)\n</code></pre>\n\n<p>Setters allow you to transform the data before it gets to the raw mongodb document and is set as a value on an actual key.</p>\n\n<p>Suppose you are implementing user registration for a website. Users provide an email and password, which gets saved to mongodb. The email is a string that you will want to normalize to lower case, in order to avoid one email having more than one account -- e.g., otherwise, <a href='mailto:avenue@q.com'>avenue@q.com</a> can be registered for 2 accounts via <a href='mailto:avenue@q.com'>avenue@q.com</a> and <a href='mailto:AvEnUe@Q.CoM'>AvEnUe@Q.CoM</a>.</p>\n\n<p>You can set up email lower case normalization easily via a Mongoose setter.</p>\n\n<pre><code>function toLower (v) {\n  return v.toLowerCase();\n}\n\nvar UserSchema = new Schema({\n  email: { type: String, set: toLower }\n})\n\nvar User = db.model('User', UserSchema)\n\nvar user = new User({email: '<a href='mailto:AVENUE@Q.COM'>AVENUE@Q.COM</a>'})\nconsole.log(user.email); // '<a href='mailto:avenue@q.com'>avenue@q.com</a>'\n\n// or\nvar user = new User\nuser.email = '<a href='mailto:Avenue@Q.com'>Avenue@Q.com</a>'\nconsole.log(user.email) // '<a href='mailto:avenue@q.com'>avenue@q.com</a>'\n</code></pre>\n\n<p>As you can see above, setters allow you to transform the data before it gets to the raw mongodb document and is set as a value on an actual key.</p>\n\n<p><em>NOTE: we could have also just used the built-in <code>lowercase: true</code> SchemaType option instead of defining our own function.</em></p>\n\n<pre><code>new Schema({ email: { type: String, lowercase: true }})\n</code></pre>\n\n<p>Setters are also passed a second argument, the schematype on which the setter was defined. This allows for tailored behavior based on options passed in the schema.</p>\n\n<pre><code>function inspector (val, schematype) {\n  if (schematype.options.required) {\n    return schematype.path + ' is required';\n  } else {\n    return val;\n  }\n}\n\nvar VirusSchema = new Schema({\n  name: { type: String, required: true, set: inspector },\n  taxonomy: { type: String, set: inspector }\n})\n\nvar Virus = db.model('Virus', VirusSchema);\nvar v = new Virus({ name: 'Parvoviridae', taxonomy: 'Parvovirinae' });\n\nconsole.log(v.name);     // name is required\nconsole.log(v.taxonomy); // Parvovirinae\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaType.prototype.set = function (fn) {\n  if ('function' != typeof fn)\n    throw new TypeError('A setter must be a function.');\n  this.setters.push(fn);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaType",
    "cons": "SchemaType",
    "name": "set",
    "string": "SchemaType.prototype.set()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "fn",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Adds a getter to this schematype.</p>\n\n<h4>Example:</h4>\n\n<pre><code>function dob (val) {\n  if (!val) return val;\n  return (val.getMonth() + 1) + \"/\" + val.getDate() + \"/\" + val.getFullYear();\n}\n\n// defining within the schema\nvar s = new Schema({ born: { type: Date, get: dob })\n\n// or by retreiving its SchemaType\nvar s = new Schema({ born: Date })\ns.path('born').get(dob)\n</code></pre>\n\n<p>Getters allow you to transform the representation of the data as it travels from the raw mongodb document to the value that you see.</p>\n\n<p>Suppose you are storing credit card numbers and you want to hide everything except the last 4 digits to the mongoose user. You can do so by defining a getter in the following way:</p>\n\n<pre><code>function obfuscate (cc) {\n  return '****-****-****-' + cc.slice(cc.length-4, cc.length);\n}\n\nvar AccountSchema = new Schema({\n  creditCardNumber: { type: String, get: obfuscate }\n});\n\nvar Account = db.model('Account', AccountSchema);\n\nAccount.findById(id, function (err, found) {\n  console.log(found.creditCardNumber); // '****-****-****-1234'\n});\n</code></pre>\n\n<p>Getters are also passed a second argument, the schematype on which the getter was defined. This allows for tailored behavior based on options passed in the schema.</p>\n\n<pre><code>function inspector (val, schematype) {\n  if (schematype.options.required) {\n    return schematype.path + ' is required';\n  } else {\n    return schematype.path + ' is not';\n  }\n}\n\nvar VirusSchema = new Schema({\n  name: { type: String, required: true, get: inspector },\n  taxonomy: { type: String, get: inspector }\n})\n\nvar Virus = db.model('Virus', VirusSchema);\n\nVirus.findById(id, function (err, virus) {\n  console.log(virus.name);     // name is required\n  console.log(virus.taxonomy); // taxonomy is not\n})\n</code></pre>",
    "summary": "<p>Adds a getter to this schematype.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>function dob (val) {\n  if (!val) return val;\n  return (val.getMonth() + 1) + \"/\" + val.getDate() + \"/\" + val.getFullYear();\n}\n\n// defining within the schema\nvar s = new Schema({ born: { type: Date, get: dob })\n\n// or by retreiving its SchemaType\nvar s = new Schema({ born: Date })\ns.path('born').get(dob)\n</code></pre>\n\n<p>Getters allow you to transform the representation of the data as it travels from the raw mongodb document to the value that you see.</p>\n\n<p>Suppose you are storing credit card numbers and you want to hide everything except the last 4 digits to the mongoose user. You can do so by defining a getter in the following way:</p>\n\n<pre><code>function obfuscate (cc) {\n  return '****-****-****-' + cc.slice(cc.length-4, cc.length);\n}\n\nvar AccountSchema = new Schema({\n  creditCardNumber: { type: String, get: obfuscate }\n});\n\nvar Account = db.model('Account', AccountSchema);\n\nAccount.findById(id, function (err, found) {\n  console.log(found.creditCardNumber); // '****-****-****-1234'\n});\n</code></pre>\n\n<p>Getters are also passed a second argument, the schematype on which the getter was defined. This allows for tailored behavior based on options passed in the schema.</p>\n\n<pre><code>function inspector (val, schematype) {\n  if (schematype.options.required) {\n    return schematype.path + ' is required';\n  } else {\n    return schematype.path + ' is not';\n  }\n}\n\nvar VirusSchema = new Schema({\n  name: { type: String, required: true, get: inspector },\n  taxonomy: { type: String, get: inspector }\n})\n\nvar Virus = db.model('Virus', VirusSchema);\n\nVirus.findById(id, function (err, virus) {\n  console.log(virus.name);     // name is required\n  console.log(virus.taxonomy); // taxonomy is not\n})\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaType.prototype.get = function (fn) {\n  if ('function' != typeof fn)\n    throw new TypeError('A getter must be a function.');\n  this.getters.push(fn);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaType",
    "cons": "SchemaType",
    "name": "get",
    "string": "SchemaType.prototype.get()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "RegExp",
      "Function",
      "Object"
     ],
     "name": "obj",
     "description": "validator"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[errorMsg]",
     "description": "optional error message"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[type]",
     "description": "optional validator type"
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Adds validator(s) for this document path.</p>\n\n<p>Validators always receive the value to validate as their first argument and must return <code>Boolean</code>. Returning <code>false</code> means validation failed.</p>\n\n<p>The error message argument is optional. If not passed, the <a href=\"#error_messages_MongooseError-messages\">default generic error message template</a> will be used.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>// make sure every value is equal to \"something\"\nfunction validator (val) {\n  return val == 'something';\n}\nnew Schema({ name: { type: String, validate: validator }});\n\n// with a custom error message\n\nvar custom = [validator, 'Uh oh, {PATH} does not equal \"something\".']\nnew Schema({ name: { type: String, validate: custom }});\n\n// adding many validators at a time\n\nvar many = [\n    { validator: validator, msg: 'uh oh' }\n  , { validator: anotherValidator, msg: 'failed' }\n]\nnew Schema({ name: { type: String, validate: many }});\n\n// or utilizing SchemaType methods directly:\n\nvar schema = new Schema({ name: 'string' });\nschema.path('name').validate(validator, 'validation of `{PATH}` failed with value `{VALUE}`');\n</code></pre>\n\n<h4>Error message templates:</h4>\n\n<p>From the examples above, you may have noticed that error messages support baseic templating. There are a few other template keywords besides <code>{PATH}</code> and <code>{VALUE}</code> too. To find out more, details are available <a href=\"#error_messages_MongooseError-messages\">here</a></p>\n\n<h4>Asynchronous validation:</h4>\n\n<p>Passing a validator function that receives two arguments tells mongoose that the validator is an asynchronous validator. The first argument passed to the validator function is the value being validated. The second argument is a callback function that must called when you finish validating the value and passed either <code>true</code> or <code>false</code> to communicate either success or failure respectively.</p>\n\n<pre><code>schema.path('name').validate(function (value, respond) {\n  doStuff(value, function () {\n    ...\n    respond(false); // validation failed\n  })\n }, '{PATH} failed validation.');\n</code></pre>\n\n<p>You might use asynchronous validators to retreive other documents from the database to validate against or to meet other I/O bound validation needs.</p>\n\n<p>Validation occurs <code>pre('save')</code> or whenever you manually execute <a href=\"#document_Document-validate\">document#validate</a>.</p>\n\n<p>If validation fails during <code>pre('save')</code> and no callback was passed to receive the error, an <code>error</code> event will be emitted on your Models associated db <a href=\"#connection_Connection\">connection</a>, passing the validation error object along.</p>\n\n<pre><code>var conn = mongoose.createConnection(..);\nconn.on('error', handleError);\n\nvar Product = conn.model('Product', yourSchema);\nvar dvd = new Product(..);\ndvd.save(); // emits error on the `conn` above\n</code></pre>\n\n<p>If you desire handling these errors at the Model level, attach an <code>error</code> listener to your Model and the event will instead be emitted there.</p>\n\n<pre><code>// registering an error listener on the Model lets us handle errors more locally\nProduct.on('error', handleError);\n</code></pre>",
    "summary": "<p>Adds validator(s) for this document path.</p>",
    "body": "<p>Validators always receive the value to validate as their first argument and must return <code>Boolean</code>. Returning <code>false</code> means validation failed.</p>\n\n<p>The error message argument is optional. If not passed, the <a href=\"#error_messages_MongooseError-messages\">default generic error message template</a> will be used.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>// make sure every value is equal to \"something\"\nfunction validator (val) {\n  return val == 'something';\n}\nnew Schema({ name: { type: String, validate: validator }});\n\n// with a custom error message\n\nvar custom = [validator, 'Uh oh, {PATH} does not equal \"something\".']\nnew Schema({ name: { type: String, validate: custom }});\n\n// adding many validators at a time\n\nvar many = [\n    { validator: validator, msg: 'uh oh' }\n  , { validator: anotherValidator, msg: 'failed' }\n]\nnew Schema({ name: { type: String, validate: many }});\n\n// or utilizing SchemaType methods directly:\n\nvar schema = new Schema({ name: 'string' });\nschema.path('name').validate(validator, 'validation of `{PATH}` failed with value `{VALUE}`');\n</code></pre>\n\n<h4>Error message templates:</h4>\n\n<p>From the examples above, you may have noticed that error messages support baseic templating. There are a few other template keywords besides <code>{PATH}</code> and <code>{VALUE}</code> too. To find out more, details are available <a href=\"#error_messages_MongooseError-messages\">here</a></p>\n\n<h4>Asynchronous validation:</h4>\n\n<p>Passing a validator function that receives two arguments tells mongoose that the validator is an asynchronous validator. The first argument passed to the validator function is the value being validated. The second argument is a callback function that must called when you finish validating the value and passed either <code>true</code> or <code>false</code> to communicate either success or failure respectively.</p>\n\n<pre><code>schema.path('name').validate(function (value, respond) {\n  doStuff(value, function () {\n    ...\n    respond(false); // validation failed\n  })\n }, '{PATH} failed validation.');\n</code></pre>\n\n<p>You might use asynchronous validators to retreive other documents from the database to validate against or to meet other I/O bound validation needs.</p>\n\n<p>Validation occurs <code>pre('save')</code> or whenever you manually execute <a href=\"#document_Document-validate\">document#validate</a>.</p>\n\n<p>If validation fails during <code>pre('save')</code> and no callback was passed to receive the error, an <code>error</code> event will be emitted on your Models associated db <a href=\"#connection_Connection\">connection</a>, passing the validation error object along.</p>\n\n<pre><code>var conn = mongoose.createConnection(..);\nconn.on('error', handleError);\n\nvar Product = conn.model('Product', yourSchema);\nvar dvd = new Product(..);\ndvd.save(); // emits error on the `conn` above\n</code></pre>\n\n<p>If you desire handling these errors at the Model level, attach an <code>error</code> listener to your Model and the event will instead be emitted there.</p>\n\n<pre><code>// registering an error listener on the Model lets us handle errors more locally\nProduct.on('error', handleError);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaType.prototype.validate = function (obj, message, type) {\n  if ('function' == typeof obj || obj && 'RegExp' === utils.getFunctionName(obj.constructor)) {\n    var properties;\n    if (message instanceof Object && !type) {\n      properties = utils.clone(message);\n      if (!properties.message) {\n        properties.message = properties.msg;\n      }\n      properties.validator = obj;\n    } else {\n      if (!message) message = errorMessages.general.default;\n      if (!type) type = 'user defined';\n      properties = { message: message, type: type, validator: obj };\n    }\n    this.validators.push(properties);\n    return this;\n  }\n\n  var i\n    , length\n    , arg;\n\n  for (i=0, length=arguments.length; i<length; i++) {\n    arg = arguments[i];\n    if (!(arg && 'Object' === utils.getFunctionName(arg.constructor))) {\n      var msg = 'Invalid validator. Received (' + typeof arg + ') '\n        + arg\n        + '. See http://mongoosejs.com/docs/api.html#schematype_SchemaType-validate';\n\n      throw new Error(msg);\n    }\n    this.validate(arg.validator, arg);\n  }\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaType",
    "cons": "SchemaType",
    "name": "validate",
    "string": "SchemaType.prototype.validate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "required",
     "description": "enable/disable the validator"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[message]",
     "description": "optional custom error message"
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    },
    {
     "type": "see",
     "local": "Customized Error Messages #error_messages_MongooseError-messages",
     "visibility": "Customized"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Adds a required validator to this schematype.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ born: { type: Date, required: true })\n\n// or with custom error message\n\nvar s = new Schema({ born: { type: Date, required: '{PATH} is required!' })\n\n// or through the path API\n\nSchema.path('name').required(true);\n\n// with custom error messaging\n\nSchema.path('name').required(true, 'grrr :( ');\n</code></pre>",
    "summary": "<p>Adds a required validator to this schematype.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var s = new Schema({ born: { type: Date, required: true })\n\n// or with custom error message\n\nvar s = new Schema({ born: { type: Date, required: '{PATH} is required!' })\n\n// or through the path API\n\nSchema.path('name').required(true);\n\n// with custom error messaging\n\nSchema.path('name').required(true, 'grrr :( ');\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaType.prototype.required = function (required, message) {\n  if (false === required) {\n    this.validators = this.validators.filter(function (v) {\n      return v.validator != this.requiredValidator;\n    }, this);\n\n    this.isRequired = false;\n    return this;\n  }\n\n  var self = this;\n  this.isRequired = true;\n\n  this.requiredValidator = function (v) {\n    // in here, `this` refers to the validating document.\n    // no validation when this path wasn't selected in the query.\n    if ('isSelected' in this &&\n        !this.isSelected(self.path) &&\n        !this.isModified(self.path)) return true;\n    return (('function' === typeof required) && !required.apply(this)) ||\n        self.checkRequired(v, this);\n  }\n\n  if ('string' == typeof required) {\n    message = required;\n    required = undefined;\n  }\n\n  var msg = message || errorMessages.general.required;\n  this.validators.push({ validator: this.requiredValidator, message: msg, type: 'required' });\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaType",
    "cons": "SchemaType",
    "name": "required",
    "string": "SchemaType.prototype.required()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "scope",
     "description": "the scope which callback are executed"
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "init",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Gets the default value</p>",
    "summary": "<p>Gets the default value</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaType.prototype.getDefault = function (scope, init) {\n  var ret = 'function' === typeof this.defaultValue\n    ? this.defaultValue.call(scope)\n    : this.defaultValue;\n\n  if (null !== ret && undefined !== ret) {\n    return this.cast(ret, scope, init);\n  } else {\n    return ret;\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaType",
    "cons": "SchemaType",
    "name": "getDefault",
    "string": "SchemaType.prototype.getDefault()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "scope",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "init",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Applies setters</p>",
    "summary": "<p>Applies setters</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaType.prototype.applySetters = function (value, scope, init, priorVal) {\n  if (SchemaType._isRef(this, value, scope, init)) {\n    return init\n      ? value\n      : this.cast(value, scope, init, priorVal);\n  }\n\n  var v = value\n    , setters = this.setters\n    , len = setters.length\n    , caster = this.caster;\n\n  if (Array.isArray(v) && caster && caster.setters) {\n    for (var i = 0; i < v.length; i++) {\n      v[i] = caster.applySetters(v[i], scope, init, priorVal);\n    }\n  }\n\n  if (!len) {\n    if (null === v || undefined === v) return v;\n    return this.cast(v, scope, init, priorVal)\n  }\n\n  while (len--) {\n    v = setters[len].call(scope, v, this);\n  }\n\n  if (null === v || undefined === v) return v;\n\n  // do not cast until all setters are applied #665\n  v = this.cast(v, scope, init, priorVal);\n\n  return v;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaType",
    "cons": "SchemaType",
    "name": "applySetters",
    "string": "SchemaType.prototype.applySetters()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "scope",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Applies getters to a value</p>",
    "summary": "<p>Applies getters to a value</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaType.prototype.applyGetters = function (value, scope) {\n  if (SchemaType._isRef(this, value, scope, true)) return value;\n\n  var v = value\n    , getters = this.getters\n    , len = getters.length;\n\n  if (!len) {\n    return v;\n  }\n\n  while (len--) {\n    v = getters[len].call(scope, v, this);\n  }\n\n  return v;\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaType",
    "cons": "SchemaType",
    "name": "applyGetters",
    "string": "SchemaType.prototype.applyGetters()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "SchemaType"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets default <code>select()</code> behavior for this path.</p>\n\n<p>Set to <code>true</code> if this path should always be included in the results, <code>false</code> if it should be excluded by default. This setting can be overridden at the query level.</p>\n\n<h4>Example:</h4>\n\n<pre><code>T = db.model('T', new Schema({ x: { type: String, select: true }}));\nT.find(..); // field x will always be selected ..\n// .. unless overridden;\nT.find().select('-x').exec(callback);\n</code></pre>",
    "summary": "<p>Sets default <code>select()</code> behavior for this path.</p>",
    "body": "<p>Set to <code>true</code> if this path should always be included in the results, <code>false</code> if it should be excluded by default. This setting can be overridden at the query level.</p>\n\n<h4>Example:</h4>\n\n<pre><code>T = db.model('T', new Schema({ x: { type: String, select: true }}));\nT.find(..); // field x will always be selected ..\n// .. unless overridden;\nT.find().select('-x').exec(callback);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "SchemaType.prototype.select = function select (val) {\n  this.selected = !! val;\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "SchemaType",
    "cons": "SchemaType",
    "name": "select",
    "string": "SchemaType.prototype.select()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "scope",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Performs a validation of <code>value</code> using the validators declared for this SchemaType.</p>",
    "summary": "<p>Performs a validation of <code>value</code> using the validators declared for this SchemaType.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaType.prototype.doValidate = function (value, fn, scope) {\n  var err = false\n    , path = this.path\n    , count = this.validators.length;\n\n  if (!count) return fn(null);\n\n  var validate = function(ok, validatorProperties) {\n    if (err) return;\n    if (ok === undefined || ok) {\n      --count || fn(null);\n    } else {\n      err = new ValidatorError(validatorProperties);\n      fn(err);\n    }\n  };\n\n  this.validators.forEach(function (v) {\n    var validator = v.validator;\n    var message = v.message;\n    var type = v.type;\n\n    var validatorProperties = utils.clone(v);\n    validatorProperties.path = path;\n    validatorProperties.value = value;\n\n    if (validator instanceof RegExp) {\n      validate(validator.test(value), validatorProperties);\n    } else if ('function' === typeof validator) {\n      if (2 === validator.length) {\n        validator.call(scope, value, function (ok) {\n          validate(ok, validatorProperties);\n        });\n      } else {\n        validate(validator.call(scope, value), validatorProperties);\n      }\n    }\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "SchemaType",
    "cons": "SchemaType",
    "name": "doValidate",
    "string": "SchemaType.prototype.doValidate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "SchemaType"
     ],
     "name": "self",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Document"
     ],
     "name": "doc",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "init",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Determines if value is a valid Reference.</p>",
    "summary": "<p>Determines if value is a valid Reference.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "SchemaType._isRef = function (self, value, doc, init) {\n  // fast path\n  var ref = init && self.options && self.options.ref;\n\n  if (!ref && doc && doc.$__fullPath) {\n    // checks for\n    // - this populated with adhoc model and no ref was set in schema OR\n    // - setting / pushing values after population\n    var path = doc.$__fullPath(self.path);\n    var owner = doc.ownerDocument ? doc.ownerDocument() : doc;\n    ref = owner.populated(path);\n  }\n\n  if (ref) {\n    if (null == value) return true;\n    if (!Buffer.isBuffer(value) &&  // buffers are objects too\n        'Binary' != value._bsontype // raw binary value from the db\n        && utils.isObject(value)    // might have deselected _id in population query\n       ) {\n      return true;\n    }\n  }\n\n  return false;\n}",
   "ctx": {
    "type": "method",
    "receiver": "SchemaType",
    "name": "_isRef",
    "string": "SchemaType._isRef()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = exports = SchemaType;\n\nexports.CastError = CastError;\n\nexports.ValidatorError = ValidatorError;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "exports = SchemaType",
    "string": "module.exports"
   }
  }
 ],
 "services/updateValidators": [
  {
   "tags": [],
   "description": {
    "full": "",
    "summary": "",
    "body": ""
   },
   "isPrivate": false,
   "code": "var async = require('async');\n\nvar ValidationError = require('../error/validation.js');\n\nmodule.exports = function(query, schema, castedDoc, options) {\n  var keys = Object.keys(castedDoc || {});\n  var updatedKeys = {};\n  var updatedValues = {};\n  var numKeys = keys.length;\n  for (var i = 0; i < numKeys; ++i) {\n    if (keys[i].charAt(0) === '$') {\n      var paths = Object.keys(castedDoc[keys[i]]);\n      var numPaths = paths.length;\n      for (var j = 0; j < numPaths; ++j) {\n        if (keys[i] === '$set' || keys[i] === '$setOnInsert') {\n          updatedValues[paths[j]] = castedDoc[keys[i]][paths[j]];\n        } else if (keys[i] === '$unset') {\n          updatedValues[paths[j]] = undefined;\n        }\n        updatedKeys[paths[j]] = true;\n      }\n    } else {\n      updatedValues[keys[i]] = castedDoc[keys[i]];\n      updatedKeys[keys[i]] = true;\n    }\n  }\n\n  if (options && options.upsert) {\n    paths = Object.keys(query._conditions);\n    numPaths = keys.length;\n    for (var i = 0; i < numPaths; ++i) {\n      if (typeof query._conditions[paths[i]] === 'Object') {\n        var conditionKeys = Object.keys(query._conditions[paths[i]]);\n        var numConditionKeys = conditionKeys.length;\n        var hasDollarKey = false;\n        for (var j = 0; j < numConditionKeys; ++j) {\n          if (conditionKeys[j].charAt(0) === '$') {\n            hasDollarKey = true;\n            break;\n          }\n        }\n        if (hasDollarKey) {\n          continue;\n        }\n      }\n      updatedKeys[paths[i]] = true;\n    }\n\n    if (options.setDefaultsOnInsert) {\n      castedDoc.$setOnInsert = castedDoc.$setOnInsert || {};\n      schema.eachPath(function(path, schemaType) {\n        var def = schemaType.getDefault(null, true);\n        if (!updatedKeys[path]) {\n          castedDoc.$setOnInsert[path] = def;\n          updatedValues[path] = def;\n        }\n      });\n    }\n  }\n\n  var updates = Object.keys(updatedValues);\n  var numUpdates = updates.length;\n  var validatorsToExecute = [];\n  var validationErrors = [];\n  for (var i = 0; i < numUpdates; ++i) {\n    (function(i) {\n      validatorsToExecute.push(function(callback) {\n        schema.path(updates[i]).doValidate(\n          updatedValues[updates[i]],\n          function(err) {\n            if (err) {\n              validationErrors.push(err);\n            }\n            process.nextTick(function() {\n              callback(null);\n            });\n          },\n          null);\n      });\n    })(i);\n  }\n\n  return function(callback) {\n    async.parallel(validatorsToExecute, function() {\n      if (validationErrors.length) {\n        var err = new ValidationError(null);\n        for (var i = 0; i < validationErrors.length; ++i) {\n          err.errors[validationErrors[i].path] = validationErrors[i];\n        }\n        return callback(err);\n      }\n      callback(null);\n    });\n  };\n};",
   "ctx": {
    "type": "declaration",
    "name": "async",
    "value": "require('async')",
    "string": "async"
   }
  }
 ],
 "statemachine": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var utils = require('./utils');",
   "ctx": {
    "type": "declaration",
    "name": "utils",
    "value": "require('./utils')",
    "string": "utils"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>StateMachine represents a minimal <code>interface</code> for the<br />constructors it builds via StateMachine.ctor(...).</p>",
    "summary": "<p>StateMachine represents a minimal <code>interface</code> for the<br />constructors it builds via StateMachine.ctor(...).</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "var StateMachine = module.exports = exports = function StateMachine () {\n  this.paths = {};\n  this.states = {};\n}",
   "ctx": {
    "type": "declaration",
    "name": "StateMachine",
    "value": "module.exports = exports = function StateMachine () {",
    "string": "StateMachine"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "state",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[state]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Function"
     ],
     "description": "subclass constructor"
    },
    {
     "type": "private",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>StateMachine.ctor('state1', 'state2', ...)<br />A factory method for subclassing StateMachine.<br />The arguments are a list of states. For each state,<br />the constructor's prototype gets state transition<br />methods named after each state. These transition methods<br />place their path argument into the given state.</p>",
    "summary": "<p>StateMachine.ctor('state1', 'state2', ...)<br />A factory method for subclassing StateMachine.<br />The arguments are a list of states. For each state,<br />the constructor's prototype gets state transition<br />methods named after each state. These transition methods<br />place their path argument into the given state.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "StateMachine.ctor = function () {\n  var states = utils.args(arguments);\n\n  var ctor = function () {\n    StateMachine.apply(this, arguments);\n    this.stateNames = states;\n\n    var i = states.length\n      , state;\n\n    while (i--) {\n      state = states[i];\n      this.states[state] = {};\n    }\n  };\n\n  ctor.prototype = new StateMachine();\n\n  states.forEach(function (state) {\n    // Changes the `path`'s state to `state`.\n    ctor.prototype[state] = function (path) {\n      this._changeState(path, state);\n    }\n  });\n\n  return ctor;\n};",
   "ctx": {
    "type": "method",
    "receiver": "StateMachine",
    "name": "ctor",
    "string": "StateMachine.ctor()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>This function is wrapped by the state change functions:</p>\n\n<ul>\n<li><code>require(path)</code></li>\n<li><code>modify(path)</code></li>\n<li><code>init(path)</code></li>\n</ul>",
    "summary": "<p>This function is wrapped by the state change functions:</p>",
    "body": "<ul>\n<li><code>require(path)</code></li>\n<li><code>modify(path)</code></li>\n<li><code>init(path)</code></li>\n</ul>"
   },
   "isPrivate": true,
   "ignore": true,
   "code": "StateMachine.prototype._changeState = function _changeState (path, nextState) {\n  var prevBucket = this.states[this.paths[path]];\n  if (prevBucket) delete prevBucket[path];\n\n  this.paths[path] = nextState;\n  this.states[nextState][path] = true;\n}",
   "ctx": {
    "type": "method",
    "constructor": "StateMachine",
    "cons": "StateMachine",
    "name": "_changeState",
    "string": "StateMachine.prototype._changeState()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>ignore</p>",
    "summary": "<p>ignore</p>",
    "body": ""
   },
   "ignore": true,
   "code": "StateMachine.prototype.clear = function clear (state) {\n  var keys = Object.keys(this.states[state])\n    , i = keys.length\n    , path\n\n  while (i--) {\n    path = keys[i];\n    delete this.states[state][path];\n    delete this.paths[path];\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "StateMachine",
    "cons": "StateMachine",
    "name": "clear",
    "string": "StateMachine.prototype.clear()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "state",
     "description": "that we want to check for."
    },
    {
     "type": "private",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Checks to see if at least one path is in the states passed in via <code>arguments</code><br />e.g., this.some('required', 'inited')</p>",
    "summary": "<p>Checks to see if at least one path is in the states passed in via <code>arguments</code><br />e.g., this.some('required', 'inited')</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "StateMachine.prototype.some = function some () {\n  var self = this;\n  var what = arguments.length ? arguments : this.stateNames;\n  return Array.prototype.some.call(what, function (state) {\n    return Object.keys(self.states[state]).length;\n  });\n}",
   "ctx": {
    "type": "method",
    "constructor": "StateMachine",
    "cons": "StateMachine",
    "name": "some",
    "string": "StateMachine.prototype.some()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "iterMethod",
     "description": "is either 'forEach' or 'map'"
    },
    {
     "type": "return",
     "types": [
      "Function"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>This function builds the functions that get assigned to <code>forEach</code> and <code>map</code>,<br />since both of those methods share a lot of the same logic.</p>",
    "summary": "<p>This function builds the functions that get assigned to <code>forEach</code> and <code>map</code>,<br />since both of those methods share a lot of the same logic.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "StateMachine.prototype._iter = function _iter (iterMethod) {\n  return function () {\n    var numArgs = arguments.length\n      , states = utils.args(arguments, 0, numArgs-1)\n      , callback = arguments[numArgs-1];\n\n    if (!states.length) states = this.stateNames;\n\n    var self = this;\n\n    var paths = states.reduce(function (paths, state) {\n      return paths.concat(Object.keys(self.states[state]));\n    }, []);\n\n    return paths[iterMethod](function (path, i, paths) {\n      return callback(path, i, paths);\n    });\n  };\n}",
   "ctx": {
    "type": "method",
    "constructor": "StateMachine",
    "cons": "StateMachine",
    "name": "_iter",
    "string": "StateMachine.prototype._iter()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[state]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[state]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": ""
    },
    {
     "type": "private",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Iterates over the paths that belong to one of the parameter states.</p>\n\n<p>The function profile can look like:<br />this.forEach(state1, fn);         // iterates over all paths in state1<br />this.forEach(state1, state2, fn); // iterates over all paths in state1 or state2<br />this.forEach(fn);                 // iterates over all paths in all states</p>",
    "summary": "<p>Iterates over the paths that belong to one of the parameter states.</p>",
    "body": "<p>The function profile can look like:<br />this.forEach(state1, fn);         // iterates over all paths in state1<br />this.forEach(state1, state2, fn); // iterates over all paths in state1 or state2<br />this.forEach(fn);                 // iterates over all paths in all states</p>"
   },
   "isPrivate": false,
   "ignore": true,
   "code": "StateMachine.prototype.forEach = function forEach () {\n  this.forEach = this._iter('forEach');\n  return this.forEach.apply(this, arguments);\n}",
   "ctx": {
    "type": "method",
    "constructor": "StateMachine",
    "cons": "StateMachine",
    "name": "forEach",
    "string": "StateMachine.prototype.forEach()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[state]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[state]",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    },
    {
     "type": "private",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Maps over the paths that belong to one of the parameter states.</p>\n\n<p>The function profile can look like:<br />this.forEach(state1, fn);         // iterates over all paths in state1<br />this.forEach(state1, state2, fn); // iterates over all paths in state1 or state2<br />this.forEach(fn);                 // iterates over all paths in all states</p>",
    "summary": "<p>Maps over the paths that belong to one of the parameter states.</p>",
    "body": "<p>The function profile can look like:<br />this.forEach(state1, fn);         // iterates over all paths in state1<br />this.forEach(state1, state2, fn); // iterates over all paths in state1 or state2<br />this.forEach(fn);                 // iterates over all paths in all states</p>"
   },
   "isPrivate": false,
   "ignore": true,
   "code": "StateMachine.prototype.map = function map () {\n  this.map = this._iter('map');\n  return this.map.apply(this, arguments);\n}",
   "ctx": {
    "type": "method",
    "constructor": "StateMachine",
    "cons": "StateMachine",
    "name": "map",
    "string": "StateMachine.prototype.map()"
   }
  }
 ],
 "types/array": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var EmbeddedDocument = require('./embedded');\nvar Document = require('../document');\nvar ObjectId = require('./objectid');\nvar utils = require('../utils');\nvar isMongooseObject = utils.isMongooseObject;",
   "ctx": {
    "type": "declaration",
    "name": "EmbeddedDocument",
    "value": "require('./embedded')",
    "string": "EmbeddedDocument"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "values",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Document"
     ],
     "name": "doc",
     "description": "parent document"
    },
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "inherits",
     "string": "Array"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://bit.ly/f6CnZU",
     "visibility": "http://bit.ly/f6CnZU"
    }
   ],
   "description": {
    "full": "<p>Mongoose Array constructor.</p>\n\n<h4>NOTE:</h4>\n\n<p><em>Values always have to be passed to the constructor to initialize, otherwise <code>MongooseArray#push</code> will mark the array as modified.</em></p>",
    "summary": "<p>Mongoose Array constructor.</p>",
    "body": "<h4>NOTE:</h4>\n\n<p><em>Values always have to be passed to the constructor to initialize, otherwise <code>MongooseArray#push</code> will mark the array as modified.</em></p>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function MongooseArray (values, path, doc) {\n  var arr = [];\n  arr.push.apply(arr, values);\n\n  utils.decorate( arr, MongooseArray.mixin );\n  arr.isMongooseArray = true;\n\n  arr._atomics = {};\n  arr.validators = [];\n  arr._path = path;\n\n  if (doc) {\n    arr._parent = doc;\n    arr._schema = doc.schema.path(path);\n  }\n\n  return arr;\n}\n\nMongooseArray.mixin = {",
   "ctx": {
    "type": "function",
    "name": "MongooseArray",
    "string": "MongooseArray()"
   }
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "_atomics"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Stores a queue of atomic operations to perform</p>",
    "summary": "<p>Stores a queue of atomic operations to perform</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "_atomics: undefined,"
  },
  {
   "tags": [
    {
     "type": "property",
     "string": "_parent"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Parent owner document</p>",
    "summary": "<p>Parent owner document</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "_parent: undefined,"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "value"
     ],
     "description": "the casted value"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Casts a member based on this arrays schema.</p>",
    "summary": "<p>Casts a member based on this arrays schema.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "_cast: function (value) {\n    var owner = this._owner;\n    var populated = false;\n    var Model;\n\n    if (this._parent) {\n      // if a populated array, we must cast to the same model\n      // instance as specified in the original query.\n      if (!owner) {\n        owner = this._owner = this._parent.ownerDocument\n          ? this._parent.ownerDocument()\n          : this._parent;\n      }\n\n      populated = owner.populated(this._path, true);\n    }\n\n    if (populated && null != value) {\n      // cast to the populated Models schema\n      Model = populated.options.model;\n\n      // only objects are permitted so we can safely assume that\n      // non-objects are to be interpreted as _id\n      if (Buffer.isBuffer(value) ||\n          value instanceof ObjectId || !utils.isObject(value)) {\n        value = { _id: value };\n      }\n\n      value = new Model(value);\n      return this._schema.caster.cast(value, this._parent, true)\n    }\n\n    return this._schema.caster.cast(value, this._parent, false)\n  },"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "EmbeddedDocument"
     ],
     "name": "embeddedDoc",
     "description": "the embedded doc that invoked this method on the Array"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "embeddedPath",
     "description": "the path which changed in the embeddedDoc"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Marks this array as modified.</p>\n\n<p>If it bubbles up from an embedded document change, then it takes the following arguments (otherwise, takes 0 arguments)</p>",
    "summary": "<p>Marks this array as modified.</p>",
    "body": "<p>If it bubbles up from an embedded document change, then it takes the following arguments (otherwise, takes 0 arguments)</p>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "_markModified: function (elem, embeddedPath) {\n    var parent = this._parent\n      , dirtyPath;\n\n    if (parent) {\n      dirtyPath = this._path;\n\n      if (arguments.length) {\n        if (null != embeddedPath) {\n          // an embedded doc bubbled up the change\n          dirtyPath = dirtyPath + '.' + this.indexOf(elem) + '.' + embeddedPath;\n        } else {\n          // directly set an index\n          dirtyPath = dirtyPath + '.' + elem;\n        }\n      }\n      parent.markModified(dirtyPath);\n    }\n\n    return this;\n  },"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "op",
     "description": "operation"
    },
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Register an atomic operation with the parent.</p>",
    "summary": "<p>Register an atomic operation with the parent.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "_registerAtomic: function (op, val) {\n    if ('$set' == op) {\n      // $set takes precedence over all other ops.\n      // mark entire array modified.\n      this._atomics = { $set: val };\n      return this;\n    }\n\n    var atomics = this._atomics;\n\n    // reset pop/shift after save\n    if ('$pop' == op && !('$pop' in atomics)) {\n      var self = this;\n      this._parent.once('save', function () {\n        self._popped = self._shifted = null;\n      });\n    }\n\n    // check for impossible $atomic combos (Mongo denies more than one\n    // $atomic op on a single path\n    if (this._atomics.$set ||\n        Object.keys(atomics).length && !(op in atomics)) {\n      // a different op was previously registered.\n      // save the entire thing.\n      this._atomics = { $set: this };\n      return this;\n    }\n\n    if (op === '$pullAll' || op === '$pushAll' || op === '$addToSet') {\n      atomics[op] || (atomics[op] = []);\n      atomics[op] = atomics[op].concat(val);\n    } else if (op === '$pullDocs') {\n      var pullOp = atomics['$pull'] || (atomics['$pull'] = {})\n        , selector = pullOp['_id'] || (pullOp['_id'] = {'$in' : [] });\n      selector['$in'] = selector['$in'].concat(val);\n    } else {\n      atomics[op] = val;\n    }\n\n    return this;\n  },"
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    },
    {
     "type": "method",
     "string": "$__getAtomics"
    },
    {
     "type": "memberOf",
     "parent": "MongooseArray"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Depopulates stored atomic operation values as necessary for direct insertion to MongoDB.</p>\n\n<p>If no atomics exist, we return all array values after conversion.</p>",
    "summary": "<p>Depopulates stored atomic operation values as necessary for direct insertion to MongoDB.</p>",
    "body": "<p>If no atomics exist, we return all array values after conversion.</p>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "$__getAtomics: function () {\n    var ret = [];\n    var keys = Object.keys(this._atomics);\n    var i = keys.length;\n\n    if (0 === i) {\n      ret[0] = ['$set', this.toObject({ depopulate: 1 })];\n      return ret;\n    }\n\n    while (i--) {\n      var op = keys[i];\n      var val = this._atomics[op];\n\n      // the atomic values which are arrays are not MongooseArrays. we\n      // need to convert their elements as if they were MongooseArrays\n      // to handle populated arrays versus DocumentArrays properly.\n      if (isMongooseObject(val)) {\n        val = val.toObject({ depopulate: 1 });\n      } else if (Array.isArray(val)) {\n        val = this.toObject.call(val, { depopulate: 1 });\n      } else if (val.valueOf) {\n        val = val.valueOf();\n      }\n\n      if ('$addToSet' == op) {\n        val = { $each: val }\n      }\n\n      ret.push([op, val]);\n    }\n\n    return ret;\n  },"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Returns the number of pending atomic operations to send to the db for this array.</p>",
    "summary": "<p>Returns the number of pending atomic operations to send to the db for this array.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "hasAtomics: function hasAtomics () {\n    if (!(this._atomics && 'Object' === this._atomics.constructor.name)) {\n      return 0;\n    }\n\n    return Object.keys(this._atomics).length;\n  },"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[args...]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Wraps <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/push\"><code>Array#push</code></a> with proper change tracking.</p>",
    "summary": "<p>Wraps <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/push\"><code>Array#push</code></a> with proper change tracking.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "push: function () {\n    var values = [].map.call(arguments, this._cast, this)\n      , ret = [].push.apply(this, values);\n\n    // $pushAll might be fibbed (could be $push). But it makes it easier to\n    // handle what could have been $push, $pushAll combos\n    this._registerAtomic('$pushAll', values);\n    this._markModified();\n    return ret;\n  },"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "[args...]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Pushes items to the array non-atomically.</p>\n\n<h4>NOTE:</h4>\n\n<p><em>marks the entire array as modified, which if saved, will store it as a <code>$set</code> operation, potentially overwritting any changes that happen between when you retrieved the object and when you save it.</em></p>",
    "summary": "<p>Pushes items to the array non-atomically.</p>",
    "body": "<h4>NOTE:</h4>\n\n<p><em>marks the entire array as modified, which if saved, will store it as a <code>$set</code> operation, potentially overwritting any changes that happen between when you retrieved the object and when you save it.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "nonAtomicPush: function () {\n    var values = [].map.call(arguments, this._cast, this)\n      , ret = [].push.apply(this, values);\n    this._registerAtomic('$set', this);\n    this._markModified();\n    return ret;\n  },"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "method",
     "string": "$pop"
    },
    {
     "type": "memberOf",
     "parent": "MongooseArray"
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://www.mongodb.org/display/DOCS/Updating/#Updating-%24pop",
     "visibility": "http://www.mongodb.org/display/DOCS/Updating/#Updating-%24pop"
    }
   ],
   "description": {
    "full": "<p>Pops the array atomically at most one time per document <code>save()</code>.</p>\n\n<h4>NOTE:</h4>\n\n<p><em>Calling this mulitple times on an array before saving sends the same command as calling it once.</em><br /><em>This update is implemented using the MongoDB <a href=\"http://www.mongodb.org/display/DOCS/Updating/#Updating-%24pop\">$pop</a> method which enforces this restriction.</em></p>\n\n<pre><code> doc.array = [1,2,3];\n\n var popped = doc.array.$pop();\n console.log(popped); // 3\n console.log(doc.array); // [1,2]\n\n // no affect\n popped = doc.array.$pop();\n console.log(doc.array); // [1,2]\n\n doc.save(function (err) {\n   if (err) return handleError(err);\n\n   // we saved, now $pop works again\n   popped = doc.array.$pop();\n   console.log(popped); // 2\n   console.log(doc.array); // [1]\n })\n</code></pre>",
    "summary": "<p>Pops the array atomically at most one time per document <code>save()</code>.</p>",
    "body": "<h4>NOTE:</h4>\n\n<p><em>Calling this mulitple times on an array before saving sends the same command as calling it once.</em><br /><em>This update is implemented using the MongoDB <a href=\"http://www.mongodb.org/display/DOCS/Updating/#Updating-%24pop\">$pop</a> method which enforces this restriction.</em></p>\n\n<pre><code> doc.array = [1,2,3];\n\n var popped = doc.array.$pop();\n console.log(popped); // 3\n console.log(doc.array); // [1,2]\n\n // no affect\n popped = doc.array.$pop();\n console.log(doc.array); // [1,2]\n\n doc.save(function (err) {\n   if (err) return handleError(err);\n\n   // we saved, now $pop works again\n   popped = doc.array.$pop();\n   console.log(popped); // 2\n   console.log(doc.array); // [1]\n })\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "$pop: function () {\n    this._registerAtomic('$pop', 1);\n    this._markModified();\n\n    // only allow popping once\n    if (this._popped) return;\n    this._popped = true;\n\n    return [].pop.call(this);\n  },"
  },
  {
   "tags": [
    {
     "type": "see",
     "local": "MongooseArray#$pop #types_array_MongooseArray-%24pop",
     "visibility": "MongooseArray#$pop"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Wraps <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/pop\"><code>Array#pop</code></a> with proper change tracking.</p>\n\n<h4>Note:</h4>\n\n<p><em>marks the entire array as modified which will pass the entire thing to $set potentially overwritting any changes that happen between when you retrieved the object and when you save it.</em></p>",
    "summary": "<p>Wraps <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/pop\"><code>Array#pop</code></a> with proper change tracking.</p>",
    "body": "<h4>Note:</h4>\n\n<p><em>marks the entire array as modified which will pass the entire thing to $set potentially overwritting any changes that happen between when you retrieved the object and when you save it.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "pop: function () {\n    var ret = [].pop.call(this);\n    this._registerAtomic('$set', this);\n    this._markModified();\n    return ret;\n  },"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "memberOf",
     "parent": "MongooseArray"
    },
    {
     "type": "method",
     "string": "$shift"
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://www.mongodb.org/display/DOCS/Updating/#Updating-%24pop",
     "visibility": "http://www.mongodb.org/display/DOCS/Updating/#Updating-%24pop"
    }
   ],
   "description": {
    "full": "<p>Atomically shifts the array at most one time per document <code>save()</code>.</p>\n\n<h4>NOTE:</h4>\n\n<p><em>Calling this mulitple times on an array before saving sends the same command as calling it once.</em><br /><em>This update is implemented using the MongoDB <a href=\"http://www.mongodb.org/display/DOCS/Updating/#Updating-%24pop\">$pop</a> method which enforces this restriction.</em></p>\n\n<pre><code> doc.array = [1,2,3];\n\n var shifted = doc.array.$shift();\n console.log(shifted); // 1\n console.log(doc.array); // [2,3]\n\n // no affect\n shifted = doc.array.$shift();\n console.log(doc.array); // [2,3]\n\n doc.save(function (err) {\n   if (err) return handleError(err);\n\n   // we saved, now $shift works again\n   shifted = doc.array.$shift();\n   console.log(shifted ); // 2\n   console.log(doc.array); // [3]\n })\n</code></pre>",
    "summary": "<p>Atomically shifts the array at most one time per document <code>save()</code>.</p>",
    "body": "<h4>NOTE:</h4>\n\n<p><em>Calling this mulitple times on an array before saving sends the same command as calling it once.</em><br /><em>This update is implemented using the MongoDB <a href=\"http://www.mongodb.org/display/DOCS/Updating/#Updating-%24pop\">$pop</a> method which enforces this restriction.</em></p>\n\n<pre><code> doc.array = [1,2,3];\n\n var shifted = doc.array.$shift();\n console.log(shifted); // 1\n console.log(doc.array); // [2,3]\n\n // no affect\n shifted = doc.array.$shift();\n console.log(doc.array); // [2,3]\n\n doc.save(function (err) {\n   if (err) return handleError(err);\n\n   // we saved, now $shift works again\n   shifted = doc.array.$shift();\n   console.log(shifted ); // 2\n   console.log(doc.array); // [3]\n })\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "$shift: function $shift () {\n    this._registerAtomic('$pop', -1);\n    this._markModified();\n\n    // only allow shifting once\n    if (this._shifted) return;\n    this._shifted = true;\n\n    return [].shift.call(this);\n  },"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Wraps <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/unshift\"><code>Array#shift</code></a> with proper change tracking.</p>\n\n<h4>Example:</h4>\n\n<pre><code>doc.array = [2,3];\nvar res = doc.array.shift();\nconsole.log(res) // 2\nconsole.log(doc.array) // [3]\n</code></pre>\n\n<h4>Note:</h4>\n\n<p><em>marks the entire array as modified, which if saved, will store it as a <code>$set</code> operation, potentially overwritting any changes that happen between when you retrieved the object and when you save it.</em></p>",
    "summary": "<p>Wraps <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/unshift\"><code>Array#shift</code></a> with proper change tracking.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>doc.array = [2,3];\nvar res = doc.array.shift();\nconsole.log(res) // 2\nconsole.log(doc.array) // [3]\n</code></pre>\n\n<h4>Note:</h4>\n\n<p><em>marks the entire array as modified, which if saved, will store it as a <code>$set</code> operation, potentially overwritting any changes that happen between when you retrieved the object and when you save it.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "shift: function () {\n    var ret = [].shift.call(this);\n    this._registerAtomic('$set', this);\n    this._markModified();\n    return ret;\n  },"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "[args...]",
     "description": ""
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://www.mongodb.org/display/DOCS/Updating/#Updating-%24pull",
     "visibility": "http://www.mongodb.org/display/DOCS/Updating/#Updating-%24pull"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Pulls items from the array atomically.</p>\n\n<h4>Examples:</h4>\n\n<pre><code>doc.array.pull(ObjectId)\ndoc.array.pull({ _id: 'someId' })\ndoc.array.pull(36)\ndoc.array.pull('tag 1', 'tag 2')\n</code></pre>\n\n<p>To remove a document from a subdocument array we may pass an object with a matching <code>_id</code>.</p>\n\n<pre><code>doc.subdocs.push({ _id: 4815162342 })\ndoc.subdocs.pull({ _id: 4815162342 }) // removed\n</code></pre>\n\n<p>Or we may passing the _id directly and let mongoose take care of it.</p>\n\n<pre><code>doc.subdocs.push({ _id: 4815162342 })\ndoc.subdocs.pull(4815162342); // works\n</code></pre>",
    "summary": "<p>Pulls items from the array atomically.</p>",
    "body": "<h4>Examples:</h4>\n\n<pre><code>doc.array.pull(ObjectId)\ndoc.array.pull({ _id: 'someId' })\ndoc.array.pull(36)\ndoc.array.pull('tag 1', 'tag 2')\n</code></pre>\n\n<p>To remove a document from a subdocument array we may pass an object with a matching <code>_id</code>.</p>\n\n<pre><code>doc.subdocs.push({ _id: 4815162342 })\ndoc.subdocs.pull({ _id: 4815162342 }) // removed\n</code></pre>\n\n<p>Or we may passing the _id directly and let mongoose take care of it.</p>\n\n<pre><code>doc.subdocs.push({ _id: 4815162342 })\ndoc.subdocs.pull(4815162342); // works\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "pull: function () {\n    var values = [].map.call(arguments, this._cast, this)\n      , cur = this._parent.get(this._path)\n      , i = cur.length\n      , mem;\n\n    while (i--) {\n      mem = cur[i];\n      if (mem instanceof EmbeddedDocument) {\n        if (values.some(function (v) { return v.equals(mem); } )) {\n          [].splice.call(cur, i, 1);\n        }\n      } else if (~cur.indexOf.call(values, mem)) {\n        [].splice.call(cur, i, 1);\n      }\n    }\n\n    if (values[0] instanceof EmbeddedDocument) {\n      this._registerAtomic('$pullDocs', values.map( function (v) { return v._id; } ));\n    } else {\n      this._registerAtomic('$pullAll', values);\n    }\n\n    this._markModified();\n    return this;\n  },"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Wraps <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/splice\"><code>Array#splice</code></a> with proper change tracking and casting.</p>\n\n<h4>Note:</h4>\n\n<p><em>marks the entire array as modified, which if saved, will store it as a <code>$set</code> operation, potentially overwritting any changes that happen between when you retrieved the object and when you save it.</em></p>",
    "summary": "<p>Wraps <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/splice\"><code>Array#splice</code></a> with proper change tracking and casting.</p>",
    "body": "<h4>Note:</h4>\n\n<p><em>marks the entire array as modified, which if saved, will store it as a <code>$set</code> operation, potentially overwritting any changes that happen between when you retrieved the object and when you save it.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "splice: function splice () {\n    var ret, vals, i;\n\n    if (arguments.length) {\n      vals = [];\n      for (i = 0; i < arguments.length; ++i) {\n        vals[i] = i < 2\n          ? arguments[i]\n          : this._cast(arguments[i]);\n      }\n      ret = [].splice.apply(this, vals);\n      this._registerAtomic('$set', this);\n      this._markModified();\n    }\n\n    return ret;\n  },"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Wraps <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/unshift\"><code>Array#unshift</code></a> with proper change tracking.</p>\n\n<h4>Note:</h4>\n\n<p><em>marks the entire array as modified, which if saved, will store it as a <code>$set</code> operation, potentially overwritting any changes that happen between when you retrieved the object and when you save it.</em></p>",
    "summary": "<p>Wraps <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/unshift\"><code>Array#unshift</code></a> with proper change tracking.</p>",
    "body": "<h4>Note:</h4>\n\n<p><em>marks the entire array as modified, which if saved, will store it as a <code>$set</code> operation, potentially overwritting any changes that happen between when you retrieved the object and when you save it.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "unshift: function () {\n    var values = [].map.call(arguments, this._cast, this);\n    [].unshift.apply(this, values);\n    this._registerAtomic('$set', this);\n    this._markModified();\n    return this.length;\n  },"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Wraps <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/sort\"><code>Array#sort</code></a> with proper change tracking.</p>\n\n<h4>NOTE:</h4>\n\n<p><em>marks the entire array as modified, which if saved, will store it as a <code>$set</code> operation, potentially overwritting any changes that happen between when you retrieved the object and when you save it.</em></p>",
    "summary": "<p>Wraps <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/sort\"><code>Array#sort</code></a> with proper change tracking.</p>",
    "body": "<h4>NOTE:</h4>\n\n<p><em>marks the entire array as modified, which if saved, will store it as a <code>$set</code> operation, potentially overwritting any changes that happen between when you retrieved the object and when you save it.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "sort: function () {\n    var ret = [].sort.apply(this, arguments);\n    this._registerAtomic('$set', this);\n    this._markModified();\n    return ret;\n  },"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "[args...]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": "the values that were added"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Adds values to the array if not already present.</p>\n\n<h4>Example:</h4>\n\n<pre><code>console.log(doc.array) // [2,3,4]\nvar added = doc.array.addToSet(4,5);\nconsole.log(doc.array) // [2,3,4,5]\nconsole.log(added)     // [5]\n</code></pre>",
    "summary": "<p>Adds values to the array if not already present.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>console.log(doc.array) // [2,3,4]\nvar added = doc.array.addToSet(4,5);\nconsole.log(doc.array) // [2,3,4,5]\nconsole.log(added)     // [5]\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "addToSet: function addToSet () {\n    var values = [].map.call(arguments, this._cast, this)\n      , added = []\n      , type = values[0] instanceof EmbeddedDocument ? 'doc' :\n               values[0] instanceof Date ? 'date' :\n               '';\n\n    values.forEach(function (v) {\n      var found;\n      switch (type) {\n        case 'doc':\n          found = this.some(function(doc){ return doc.equals(v) });\n          break;\n        case 'date':\n          var val = +v;\n          found = this.some(function(d){ return +d === val });\n          break;\n        default:\n          found = ~this.indexOf(v);\n      }\n\n      if (!found) {\n        [].push.call(this, v);\n        this._registerAtomic('$addToSet', v);\n        this._markModified();\n        [].push.call(added, v);\n      }\n    }, this);\n\n    return added;\n  },"
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets the casted <code>val</code> at index <code>i</code> and marks the array modified.</p>\n\n<h4>Example:</h4>\n\n<pre><code>// given documents based on the following\nvar Doc = mongoose.model('Doc', new Schema({ array: [Number] }));\n\nvar doc = new Doc({ array: [2,3,4] })\n\nconsole.log(doc.array) // [2,3,4]\n\ndoc.array.set(1,\"5\");\nconsole.log(doc.array); // [2,5,4] // properly cast to number\ndoc.save() // the change is saved\n\n// VS not using array#set\ndoc.array[1] = \"5\";\nconsole.log(doc.array); // [2,\"5\",4] // no casting\ndoc.save() // change is not saved\n</code></pre>",
    "summary": "<p>Sets the casted <code>val</code> at index <code>i</code> and marks the array modified.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>// given documents based on the following\nvar Doc = mongoose.model('Doc', new Schema({ array: [Number] }));\n\nvar doc = new Doc({ array: [2,3,4] })\n\nconsole.log(doc.array) // [2,3,4]\n\ndoc.array.set(1,\"5\");\nconsole.log(doc.array); // [2,5,4] // properly cast to number\ndoc.save() // the change is saved\n\n// VS not using array#set\ndoc.array[1] = \"5\";\nconsole.log(doc.array); // [2,\"5\",4] // no casting\ndoc.save() // change is not saved\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "set: function set (i, val) {\n    this[i] = this._cast(val);\n    this._markModified(i);\n    return this;\n  },"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns a native js Array.</p>",
    "summary": "<p>Returns a native js Array.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "toObject: function (options) {\n    if (options && options.depopulate) {\n      return this.map(function (doc) {\n        return doc instanceof Document\n          ? doc.toObject(options)\n          : doc\n      });\n    }\n\n    return this.slice();\n  },"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Helper for console.log</p>",
    "summary": "<p>Helper for console.log</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "inspect: function () {\n    return JSON.stringify(this);\n  },"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": "the item to look for"
    },
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the index of <code>obj</code> or <code>-1</code> if not found.</p>",
    "summary": "<p>Return the index of <code>obj</code> or <code>-1</code> if not found.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "indexOf: function indexOf (obj) {\n    if (obj instanceof ObjectId) obj = obj.toString();\n    for (var i = 0, len = this.length; i < len; ++i) {\n      if (obj == this[i])\n        return i;\n    }\n    return -1;\n  }\n};"
  },
  {
   "tags": [
    {
     "type": "see",
     "local": "MongooseArray#pull #types_array_MongooseArray-pull",
     "visibility": "MongooseArray#pull"
    },
    {
     "type": "see",
     "title": "mongodb",
     "url": "http://www.mongodb.org/display/DOCS/Updating/#Updating-%24pull",
     "visibility": "http://www.mongodb.org/display/DOCS/Updating/#Updating-%24pull"
    },
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "memberOf",
     "parent": "MongooseArray"
    },
    {
     "type": "method",
     "string": "remove"
    }
   ],
   "description": {
    "full": "<p>Alias of <a href=\"#types_array_MongooseArray-pull\">pull</a></p>",
    "summary": "<p>Alias of <a href=\"#types_array_MongooseArray-pull\">pull</a></p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "MongooseArray.mixin.remove = MongooseArray.mixin.pull;"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = exports = MongooseArray;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "exports = MongooseArray",
    "string": "module.exports"
   }
  }
 ],
 "types/buffer": [
  {
   "tags": [],
   "description": {
    "full": "<p>Access driver.</p>",
    "summary": "<p>Access driver.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var driver = global.MONGOOSE_DRIVER_PATH || '../drivers/node-mongodb-native';",
   "ctx": {
    "type": "declaration",
    "name": "driver",
    "value": "global.MONGOOSE_DRIVER_PATH || '../drivers/node-mongodb-native'",
    "string": "driver"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var Binary = require('../drivers/node-mongodb-native/binary')\n  , utils = require('../utils');",
   "ctx": {
    "type": "declaration",
    "name": "Binary",
    "value": "require('../drivers/node-mongodb-native/binary')",
    "string": "Binary"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Buffer"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "encode",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "offset",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "inherits",
     "string": "Buffer"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://bit.ly/f6CnZU",
     "visibility": "http://bit.ly/f6CnZU"
    }
   ],
   "description": {
    "full": "<p>Mongoose Buffer constructor.</p>\n\n<p>Values always have to be passed to the constructor to initialize.</p>",
    "summary": "<p>Mongoose Buffer constructor.</p>",
    "body": "<p>Values always have to be passed to the constructor to initialize.</p>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function MongooseBuffer (value, encode, offset) {\n  var length = arguments.length;\n  var val;\n\n  if (0 === length || null === arguments[0] || undefined === arguments[0]) {\n    val = 0;\n  } else {\n    val = value;\n  }\n\n  var encoding;\n  var path;\n  var doc;\n\n  if (Array.isArray(encode)) {\n    // internal casting\n    path = encode[0];\n    doc = encode[1];\n  } else {\n    encoding = encode;\n  }\n\n  var buf = new Buffer(val, encoding, offset);\n  utils.decorate( buf, MongooseBuffer.mixin );\n  buf.isMongooseBuffer = true;\n\n  // make sure these internal props don't show up in Object.keys()\n  Object.defineProperties(buf, {\n      validators: { value: [] }\n    , _path: { value: path }\n    , _parent: { value: doc }\n  });\n\n  if (doc && \"string\" === typeof path) {\n    Object.defineProperty(buf, '_schema', {\n        value: doc.schema.path(path)\n    });\n  }\n\n  buf._subtype = 0;\n  return buf;\n}",
   "ctx": {
    "type": "function",
    "name": "MongooseBuffer",
    "string": "MongooseBuffer()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherit from Buffer.</p>",
    "summary": "<p>Inherit from Buffer.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "//MongooseBuffer.prototype = new Buffer(0);\n\nMongooseBuffer.mixin = {"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "property",
     "string": "_parent"
    }
   ],
   "description": {
    "full": "<p>Parent owner document</p>",
    "summary": "<p>Parent owner document</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "_parent: undefined,"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "property",
     "string": "_subtype"
    }
   ],
   "description": {
    "full": "<p>Default subtype for the Binary representing this Buffer</p>",
    "summary": "<p>Default subtype for the Binary representing this Buffer</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "_subtype: undefined,"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Marks this buffer as modified.</p>",
    "summary": "<p>Marks this buffer as modified.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "_markModified: function () {\n    var parent = this._parent;\n\n    if (parent) {\n      parent.markModified(this._path);\n    }\n    return this;\n  },"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Writes the buffer.</p>",
    "summary": "<p>Writes the buffer.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "write: function () {\n    var written = Buffer.prototype.write.apply(this, arguments);\n\n    if (written > 0) {\n      this._markModified();\n    }\n\n    return written;\n  },"
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "MongooseBuffer"
     ],
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Buffer"
     ],
     "name": "target",
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Copies the buffer.</p>\n\n<h4>Note:</h4>\n\n<p><code>Buffer#copy</code> does not mark <code>target</code> as modified so you must copy from a <code>MongooseBuffer</code> for it to work as expected. This is a work around since <code>copy</code> modifies the target, not this.</p>",
    "summary": "<p>Copies the buffer.</p>",
    "body": "<h4>Note:</h4>\n\n<p><code>Buffer#copy</code> does not mark <code>target</code> as modified so you must copy from a <code>MongooseBuffer</code> for it to work as expected. This is a work around since <code>copy</code> modifies the target, not this.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "copy: function (target) {\n    var ret = Buffer.prototype.copy.apply(this, arguments);\n\n    if (target && target.isMongooseBuffer) {\n      target._markModified();\n    }\n\n    return ret;\n  }\n};"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Compile other Buffer methods marking this buffer as modified.</p>",
    "summary": "<p>Compile other Buffer methods marking this buffer as modified.</p>",
    "body": ""
   },
   "ignore": true,
   "code": ";(\n// node < 0.5\n'writeUInt8 writeUInt16 writeUInt32 writeInt8 writeInt16 writeInt32 ' +\n'writeFloat writeDouble fill ' +\n'utf8Write binaryWrite asciiWrite set ' +\n\n// node >= 0.5\n'writeUInt16LE writeUInt16BE writeUInt32LE writeUInt32BE ' +\n'writeInt16LE writeInt16BE writeInt32LE writeInt32BE ' +\n'writeFloatLE writeFloatBE writeDoubleLE writeDoubleBE'\n).split(' ').forEach(function (method) {\n  if (!Buffer.prototype[method]) return;\n  MongooseBuffer.mixin[method] = new Function(\n    'var ret = Buffer.prototype.'+method+'.apply(this, arguments);' +\n    'this._markModified();' +\n    'return ret;'\n  )\n});"
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "",
     "url": "http://bsonspec.org/#/specification",
     "visibility": "http://bsonspec.org/#/specification"
    },
    {
     "type": "param",
     "types": [
      "Hex"
     ],
     "name": "[subtype]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Binary"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Converts this buffer to its Binary type representation.</p>\n\n<h4>SubTypes:</h4>\n\n<p>var bson = require('bson')<br />  bson.BSON_BINARY_SUBTYPE_DEFAULT<br />  bson.BSON_BINARY_SUBTYPE_FUNCTION<br />  bson.BSON_BINARY_SUBTYPE_BYTE_ARRAY<br />  bson.BSON_BINARY_SUBTYPE_UUID<br />  bson.BSON_BINARY_SUBTYPE_MD5<br />  bson.BSON_BINARY_SUBTYPE_USER_DEFINED</p>\n\n<p>doc.buffer.toObject(bson.BSON_BINARY_SUBTYPE_USER_DEFINED);</p>",
    "summary": "<p>Converts this buffer to its Binary type representation.</p>",
    "body": "<h4>SubTypes:</h4>\n\n<p>var bson = require('bson')<br />  bson.BSON_BINARY_SUBTYPE_DEFAULT<br />  bson.BSON_BINARY_SUBTYPE_FUNCTION<br />  bson.BSON_BINARY_SUBTYPE_BYTE_ARRAY<br />  bson.BSON_BINARY_SUBTYPE_UUID<br />  bson.BSON_BINARY_SUBTYPE_MD5<br />  bson.BSON_BINARY_SUBTYPE_USER_DEFINED</p>\n\n<p>doc.buffer.toObject(bson.BSON_BINARY_SUBTYPE_USER_DEFINED);</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "MongooseBuffer.mixin.toObject = function (options) {\n  var subtype = 'number' == typeof options\n    ? options\n    : (this._subtype || 0);\n  return new Binary(this, subtype);\n};",
   "ctx": {
    "type": "method",
    "receiver": "MongooseBuffer.mixin",
    "name": "toObject",
    "string": "MongooseBuffer.mixin.toObject()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Buffer"
     ],
     "name": "other",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Determines if this buffer is equals to <code>other</code> buffer</p>",
    "summary": "<p>Determines if this buffer is equals to <code>other</code> buffer</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "MongooseBuffer.mixin.equals = function (other) {\n  if (!Buffer.isBuffer(other)) {\n    return false;\n  }\n\n  if (this.length !== other.length) {\n    return false;\n  }\n\n  for (var i = 0; i < this.length; ++i) {\n    if (this[i] !== other[i]) return false;\n  }\n\n  return true;\n};",
   "ctx": {
    "type": "method",
    "receiver": "MongooseBuffer.mixin",
    "name": "equals",
    "string": "MongooseBuffer.mixin.equals()"
   }
  },
  {
   "tags": [
    {
     "type": "see",
     "title": "",
     "url": "http://bsonspec.org/#/specification",
     "visibility": "http://bsonspec.org/#/specification"
    },
    {
     "type": "param",
     "types": [
      "Hex"
     ],
     "name": "subtype",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets the subtype option and marks the buffer modified.</p>\n\n<h4>SubTypes:</h4>\n\n<p>var bson = require('bson')<br />  bson.BSON_BINARY_SUBTYPE_DEFAULT<br />  bson.BSON_BINARY_SUBTYPE_FUNCTION<br />  bson.BSON_BINARY_SUBTYPE_BYTE_ARRAY<br />  bson.BSON_BINARY_SUBTYPE_UUID<br />  bson.BSON_BINARY_SUBTYPE_MD5<br />  bson.BSON_BINARY_SUBTYPE_USER_DEFINED</p>\n\n<p>doc.buffer.subtype(bson.BSON_BINARY_SUBTYPE_UUID);</p>",
    "summary": "<p>Sets the subtype option and marks the buffer modified.</p>",
    "body": "<h4>SubTypes:</h4>\n\n<p>var bson = require('bson')<br />  bson.BSON_BINARY_SUBTYPE_DEFAULT<br />  bson.BSON_BINARY_SUBTYPE_FUNCTION<br />  bson.BSON_BINARY_SUBTYPE_BYTE_ARRAY<br />  bson.BSON_BINARY_SUBTYPE_UUID<br />  bson.BSON_BINARY_SUBTYPE_MD5<br />  bson.BSON_BINARY_SUBTYPE_USER_DEFINED</p>\n\n<p>doc.buffer.subtype(bson.BSON_BINARY_SUBTYPE_UUID);</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "MongooseBuffer.mixin.subtype = function (subtype) {\n  if ('number' != typeof subtype) {\n    throw new TypeError('Invalid subtype. Expected a number');\n  }\n\n  if (this._subtype != subtype) {\n    this._markModified();\n  }\n\n  this._subtype = subtype;\n};",
   "ctx": {
    "type": "method",
    "receiver": "MongooseBuffer.mixin",
    "name": "subtype",
    "string": "MongooseBuffer.mixin.subtype()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "MongooseBuffer.Binary = Binary;\n\nmodule.exports = MongooseBuffer;",
   "ctx": {
    "type": "property",
    "receiver": "MongooseBuffer",
    "name": "Binary",
    "value": "Binary",
    "string": "MongooseBuffer.Binary"
   }
  }
 ],
 "types/documentarray": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var MongooseArray = require('./array')\n  , ObjectId = require('../drivers/node-mongodb-native/objectid')\n  , ObjectIdSchema = require('../schema/objectid')\n  , utils = require('../utils')\n  , util = require('util')\n  , Document = require('../document')",
   "ctx": {
    "type": "declaration",
    "name": "MongooseArray",
    "value": "require('./array')",
    "string": "MongooseArray"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "values",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": "the path to this array"
    },
    {
     "type": "param",
     "types": [
      "Document"
     ],
     "name": "doc",
     "description": "parent document"
    },
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "return",
     "types": [
      "MongooseDocumentArray"
     ],
     "description": ""
    },
    {
     "type": "inherits",
     "string": "MongooseArray"
    },
    {
     "type": "see",
     "title": "",
     "url": "http://bit.ly/f6CnZU",
     "visibility": "http://bit.ly/f6CnZU"
    }
   ],
   "description": {
    "full": "<p>DocumentArray constructor</p>",
    "summary": "<p>DocumentArray constructor</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function MongooseDocumentArray (values, path, doc) {\n  var arr = [];\n\n  // Values always have to be passed to the constructor to initialize, since\n  // otherwise MongooseArray#push will mark the array as modified to the parent.\n  arr.push.apply(arr, values);\n\n  utils.decorate( arr, MongooseDocumentArray.mixin );\n  arr.isMongooseArray = true;\n  arr.isMongooseDocumentArray = true;\n\n  arr._atomics = {};\n  arr.validators = [];\n  arr._path = path;\n\n  if (doc) {\n    arr._parent = doc;\n    arr._schema = doc.schema.path(path);\n    arr._handlers = {\n      isNew: arr.notify('isNew'),\n      save: arr.notify('save')\n    };\n\n    doc.on('save', arr._handlers.save);\n    doc.on('isNew', arr._handlers.isNew);\n  }\n\n  return arr;\n}",
   "ctx": {
    "type": "function",
    "name": "MongooseDocumentArray",
    "string": "MongooseDocumentArray()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherits from MongooseArray</p>",
    "summary": "<p>Inherits from MongooseArray</p>",
    "body": ""
   },
   "ignore": true,
   "code": "MongooseDocumentArray.mixin = Object.create( MongooseArray.mixin );",
   "ctx": {
    "type": "property",
    "receiver": "MongooseDocumentArray",
    "name": "mixin",
    "value": "Object.create( MongooseArray.mixin )",
    "string": "MongooseDocumentArray.mixin"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Overrides MongooseArray#cast</p>",
    "summary": "<p>Overrides MongooseArray#cast</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "MongooseDocumentArray.mixin._cast = function (value) {\n  if (value instanceof this._schema.casterConstructor) {\n    if (!(value.__parent && value.__parentArray)) {\n      // value may have been created using array.create()\n      value.__parent = this._parent;\n      value.__parentArray = this;\n    }\n    return value;\n  }\n\n  // handle cast('string') or cast(ObjectId) etc.\n  // only objects are permitted so we can safely assume that\n  // non-objects are to be interpreted as _id\n  if (Buffer.isBuffer(value) ||\n      value instanceof ObjectId || !utils.isObject(value)) {\n    value = { _id: value };\n  }\n\n  return new this._schema.casterConstructor(value, this);\n};",
   "ctx": {
    "type": "method",
    "receiver": "MongooseDocumentArray.mixin",
    "name": "_cast",
    "string": "MongooseDocumentArray.mixin._cast()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "EmbeddedDocument",
      "null"
     ],
     "description": "the subdocument or null if not found."
    },
    {
     "type": "param",
     "types": [
      "ObjectId",
      "String",
      "Number",
      "Buffer"
     ],
     "name": "id",
     "description": ""
    },
    {
     "type": "TODO",
     "string": "cast to the _id based on schema for proper comparison"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Searches array items for the first document with a matching _id.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var embeddedDoc = m.array.id(some_id);\n</code></pre>",
    "summary": "<p>Searches array items for the first document with a matching _id.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var embeddedDoc = m.array.id(some_id);\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "MongooseDocumentArray.mixin.id = function (id) {\n  var casted\n    , sid\n    , _id\n\n  try {\n    var casted_ = ObjectIdSchema.prototype.cast.call({}, id);\n    if (casted_) casted = String(casted_);\n  } catch (e) {\n    casted = null;\n  }\n\n  for (var i = 0, l = this.length; i < l; i++) {\n    _id = this[i].get('_id');\n\n    if (_id instanceof Document) {\n      sid || (sid = String(id));\n      if (sid == _id._id) return this[i];\n    } else if (!(_id instanceof ObjectId)) {\n      sid || (sid = String(id));\n      if (sid == _id) return this[i];\n    } else if (casted == _id) {\n      return this[i];\n    }\n  }\n\n  return null;\n};",
   "ctx": {
    "type": "method",
    "receiver": "MongooseDocumentArray.mixin",
    "name": "id",
    "string": "MongooseDocumentArray.mixin.id()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "optional options to pass to each documents `toObject` method call during conversion"
    },
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns a native js Array of plain js objects</p>\n\n<h4>NOTE:</h4>\n\n<p><em>Each sub-document is converted to a plain object by calling its <code>#toObject</code> method.</em></p>",
    "summary": "<p>Returns a native js Array of plain js objects</p>",
    "body": "<h4>NOTE:</h4>\n\n<p><em>Each sub-document is converted to a plain object by calling its <code>#toObject</code> method.</em></p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "MongooseDocumentArray.mixin.toObject = function (options) {\n  return this.map(function (doc) {\n    return doc && doc.toObject(options) || null;\n  });\n};",
   "ctx": {
    "type": "method",
    "receiver": "MongooseDocumentArray.mixin",
    "name": "toObject",
    "string": "MongooseDocumentArray.mixin.toObject()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Helper for console.log</p>",
    "summary": "<p>Helper for console.log</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "MongooseDocumentArray.mixin.inspect = function () {\n  return '[' + this.map(function (doc) {\n    if (doc) {\n      return doc.inspect\n        ? doc.inspect()\n        : util.inspect(doc)\n    }\n    return 'null'\n  }).join('\\n') + ']';\n};",
   "ctx": {
    "type": "method",
    "receiver": "MongooseDocumentArray.mixin",
    "name": "inspect",
    "string": "MongooseDocumentArray.mixin.inspect()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": "the value to cast to this arrays SubDocument schema"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Creates a subdocument casted to this schema.</p>\n\n<p>This is the same subdocument constructor used for casting.</p>",
    "summary": "<p>Creates a subdocument casted to this schema.</p>",
    "body": "<p>This is the same subdocument constructor used for casting.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "MongooseDocumentArray.mixin.create = function (obj) {\n  return new this._schema.casterConstructor(obj);\n}",
   "ctx": {
    "type": "method",
    "receiver": "MongooseDocumentArray.mixin",
    "name": "create",
    "string": "MongooseDocumentArray.mixin.create()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "event",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Function"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Creates a fn that notifies all child docs of <code>event</code>.</p>",
    "summary": "<p>Creates a fn that notifies all child docs of <code>event</code>.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "MongooseDocumentArray.mixin.notify = function notify (event) {\n  var self = this;\n  return function notify (val) {\n    var i = self.length;\n    while (i--) {\n      if (!self[i]) continue;\n      switch(event) {\n        // only swap for save event for now, we may change this to all event types later\n        case 'save':\n          val = self[i];\n          break;\n        default:\n          // NO-OP\n          break;\n      }\n      self[i].emit(event, val);\n    }\n  }\n}",
   "ctx": {
    "type": "method",
    "receiver": "MongooseDocumentArray.mixin",
    "name": "notify",
    "string": "MongooseDocumentArray.mixin.notify()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = MongooseDocumentArray;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "MongooseDocumentArray",
    "string": "module.exports"
   }
  }
 ],
 "types/embedded": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var Document = require('../document_provider')();\nvar inspect = require('util').inspect;\nvar Promise = require('../promise');",
   "ctx": {
    "type": "declaration",
    "name": "Document",
    "value": "require('../document_provider')()",
    "string": "Document"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": "js object returned from the db"
    },
    {
     "type": "param",
     "types": [
      "MongooseDocumentArray"
     ],
     "name": "parentArr",
     "description": "the parent array of this document"
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "skipId",
     "description": ""
    },
    {
     "type": "inherits",
     "string": "Document"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>EmbeddedDocument constructor.</p>",
    "summary": "<p>EmbeddedDocument constructor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function EmbeddedDocument (obj, parentArr, skipId, fields) {\n  if (parentArr) {\n    this.__parentArray = parentArr;\n    this.__parent = parentArr._parent;\n  } else {\n    this.__parentArray = undefined;\n    this.__parent = undefined;\n  }\n\n  Document.call(this, obj, fields, skipId);\n\n  var self = this;\n  this.on('isNew', function (val) {\n    self.isNew = val;\n  });\n}",
   "ctx": {
    "type": "function",
    "name": "EmbeddedDocument",
    "string": "EmbeddedDocument()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Inherit from Document</p>",
    "summary": "<p>Inherit from Document</p>",
    "body": ""
   },
   "ignore": true,
   "code": "EmbeddedDocument.prototype = Object.create( Document.prototype );\nEmbeddedDocument.prototype.constructor = EmbeddedDocument;",
   "ctx": {
    "type": "property",
    "receiver": "EmbeddedDocument",
    "name": "prototype",
    "value": "Object.create( Document.prototype )",
    "string": "EmbeddedDocument.prototype"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": "the path which changed"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Marks the embedded doc modified.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var doc = blogpost.comments.id(hexstring);\ndoc.mixed.type = 'changed';\ndoc.markModified('mixed.type');\n</code></pre>",
    "summary": "<p>Marks the embedded doc modified.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var doc = blogpost.comments.id(hexstring);\ndoc.mixed.type = 'changed';\ndoc.markModified('mixed.type');\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "EmbeddedDocument.prototype.markModified = function (path) {\n  if (!this.__parentArray) return;\n\n  this.$__.activePaths.modify(path);\n  if (this.isNew) {\n    // Mark the WHOLE parent array as modified\n    // if this is a new document (i.e., we are initializing\n    // a document),\n    this.__parentArray._markModified();\n  } else {\n    this.__parentArray._markModified(this, path);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "EmbeddedDocument",
    "cons": "EmbeddedDocument",
    "name": "markModified",
    "string": "EmbeddedDocument.prototype.markModified()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[fn]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Promise"
     ],
     "description": "resolved Promise"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Used as a stub for <a href=\"https://github.com/bnoguchi/hooks-js/tree/31ec571cef0332e21121ee7157e0cf9728572cc3\">hooks.js</a></p>\n\n<h4>NOTE:</h4>\n\n<p><em>This is a no-op. Does not actually save the doc to the db.</em></p>",
    "summary": "<p>Used as a stub for <a href=\"https://github.com/bnoguchi/hooks-js/tree/31ec571cef0332e21121ee7157e0cf9728572cc3\">hooks.js</a></p>",
    "body": "<h4>NOTE:</h4>\n\n<p><em>This is a no-op. Does not actually save the doc to the db.</em></p>"
   },
   "isPrivate": true,
   "ignore": false,
   "code": "EmbeddedDocument.prototype.save = function (fn) {\n  var promise = new Promise(fn);\n  promise.fulfill();\n  return promise;\n}",
   "ctx": {
    "type": "method",
    "constructor": "EmbeddedDocument",
    "cons": "EmbeddedDocument",
    "name": "save",
    "string": "EmbeddedDocument.prototype.save()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[fn]",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Removes the subdocument from its parent array.</p>",
    "summary": "<p>Removes the subdocument from its parent array.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "EmbeddedDocument.prototype.remove = function (fn) {\n  if (!this.__parentArray) return this;\n\n  var _id;\n  if (!this.willRemove) {\n    _id = this._doc._id;\n    if (!_id) {\n      throw new Error('For your own good, Mongoose does not know ' +\n                      'how to remove an EmbeddedDocument that has no _id');\n    }\n    this.__parentArray.pull({ _id: _id });\n    this.willRemove = true;\n    registerRemoveListener(this);\n  }\n\n  if (fn)\n    fn(null);\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "EmbeddedDocument",
    "cons": "EmbeddedDocument",
    "name": "remove",
    "string": "EmbeddedDocument.prototype.remove()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "EmbeddedDocument"
     ],
     "name": "sub",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Registers remove event listeners for triggering<br />on subdocuments.</p>",
    "summary": "<p>Registers remove event listeners for triggering<br />on subdocuments.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "function registerRemoveListener (sub) {\n  var owner = sub.ownerDocument();\n\n  owner.on('save', emitRemove);\n  owner.on('remove', emitRemove);\n\n  function emitRemove () {\n    owner.removeListener('save', emitRemove);\n    owner.removeListener('remove', emitRemove);\n    sub.emit('remove', sub);\n    owner = sub = emitRemove = null;\n  };\n};",
   "ctx": {
    "type": "function",
    "name": "registerRemoveListener",
    "string": "registerRemoveListener()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Override #update method of parent documents.</p>",
    "summary": "<p>Override #update method of parent documents.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "EmbeddedDocument.prototype.update = function () {\n  throw new Error('The #update method is not available on EmbeddedDocuments');\n}",
   "ctx": {
    "type": "method",
    "constructor": "EmbeddedDocument",
    "cons": "EmbeddedDocument",
    "name": "update",
    "string": "EmbeddedDocument.prototype.update()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Helper for console.log</p>",
    "summary": "<p>Helper for console.log</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "EmbeddedDocument.prototype.inspect = function () {\n  return inspect(this.toObject());\n};",
   "ctx": {
    "type": "method",
    "constructor": "EmbeddedDocument",
    "cons": "EmbeddedDocument",
    "name": "inspect",
    "string": "EmbeddedDocument.prototype.inspect()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": "the field to invalidate"
    },
    {
     "type": "param",
     "types": [
      "String",
      "Error"
     ],
     "name": "err",
     "description": "error which states the reason `path` was invalid"
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Marks a path as invalid, causing validation to fail.</p>",
    "summary": "<p>Marks a path as invalid, causing validation to fail.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "EmbeddedDocument.prototype.invalidate = function (path, err, val, first) {\n  if (!this.__parent) {\n    var msg = 'Unable to invalidate a subdocument that has not been added to an array.'\n    throw new Error(msg);\n  }\n\n  var index = this.__parentArray.indexOf(this);\n  var parentPath = this.__parentArray._path;\n  var fullPath = [parentPath, index, path].join('.');\n\n  // sniffing arguments:\n  // need to check if user passed a value to keep\n  // our error message clean.\n  if (2 < arguments.length) {\n    this.__parent.invalidate(fullPath, err, val);\n  } else {\n    this.__parent.invalidate(fullPath, err);\n  }\n\n  if (first)\n    this.$__.validationError = this.ownerDocument().$__.validationError;\n  return true;\n}",
   "ctx": {
    "type": "method",
    "constructor": "EmbeddedDocument",
    "cons": "EmbeddedDocument",
    "name": "invalidate",
    "string": "EmbeddedDocument.prototype.invalidate()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Document"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Returns the top level document of this sub-document.</p>",
    "summary": "<p>Returns the top level document of this sub-document.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "EmbeddedDocument.prototype.ownerDocument = function () {\n  if (this.$__.ownerDocument) {\n    return this.$__.ownerDocument;\n  }\n\n  var parent = this.__parent;\n  if (!parent) return this;\n\n  while (parent.__parent) {\n    parent = parent.__parent;\n  }\n\n  return this.$__.ownerDocument = parent;\n}",
   "ctx": {
    "type": "method",
    "constructor": "EmbeddedDocument",
    "cons": "EmbeddedDocument",
    "name": "ownerDocument",
    "string": "EmbeddedDocument.prototype.ownerDocument()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[path]",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "method",
     "string": "$__fullPath"
    },
    {
     "type": "memberOf",
     "parent": "EmbeddedDocument"
    }
   ],
   "description": {
    "full": "<p>Returns the full path to this document. If optional <code>path</code> is passed, it is appended to the full path.</p>",
    "summary": "<p>Returns the full path to this document. If optional <code>path</code> is passed, it is appended to the full path.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "EmbeddedDocument.prototype.$__fullPath = function (path) {\n  if (!this.$__.fullPath) {\n    var parent = this;\n    if (!parent.__parent) return path;\n\n    var paths = [];\n    while (parent.__parent) {\n      paths.unshift(parent.__parentArray._path);\n      parent = parent.__parent;\n    }\n\n    this.$__.fullPath = paths.join('.');\n\n    if (!this.$__.ownerDocument) {\n      // optimization\n      this.$__.ownerDocument = parent;\n    }\n  }\n\n  return path\n    ? this.$__.fullPath + '.' + path\n    : this.$__.fullPath;\n}",
   "ctx": {
    "type": "method",
    "constructor": "EmbeddedDocument",
    "cons": "EmbeddedDocument",
    "name": "$__fullPath",
    "string": "EmbeddedDocument.prototype.$__fullPath()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns this sub-documents parent document.</p>",
    "summary": "<p>Returns this sub-documents parent document.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "EmbeddedDocument.prototype.parent = function () {\n  return this.__parent;\n}",
   "ctx": {
    "type": "method",
    "constructor": "EmbeddedDocument",
    "cons": "EmbeddedDocument",
    "name": "parent",
    "string": "EmbeddedDocument.prototype.parent()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns this sub-documents parent array.</p>",
    "summary": "<p>Returns this sub-documents parent array.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "EmbeddedDocument.prototype.parentArray = function () {\n  return this.__parentArray;\n}",
   "ctx": {
    "type": "method",
    "constructor": "EmbeddedDocument",
    "cons": "EmbeddedDocument",
    "name": "parentArray",
    "string": "EmbeddedDocument.prototype.parentArray()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = EmbeddedDocument;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "EmbeddedDocument",
    "string": "module.exports"
   }
  }
 ],
 "types/index": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module exports.</p>",
    "summary": "<p>Module exports.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "exports.Array = require('./array');\nexports.Buffer = require('./buffer');\n\nexports.Document = // @deprecate\nexports.Embedded = require('./embedded');\n\nexports.DocumentArray = require('./documentarray');\nexports.ObjectId = require('./objectid');",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "Array",
    "value": "require('./array')",
    "string": "exports.Array"
   }
  }
 ],
 "types/objectid": [
  {
   "tags": [],
   "description": {
    "full": "<p>Access driver.</p>",
    "summary": "<p>Access driver.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var driver = global.MONGOOSE_DRIVER_PATH || '../drivers/node-mongodb-native';",
   "ctx": {
    "type": "declaration",
    "name": "driver",
    "value": "global.MONGOOSE_DRIVER_PATH || '../drivers/node-mongodb-native'",
    "string": "driver"
   }
  },
  {
   "tags": [
    {
     "type": "constructor",
     "string": "ObjectId"
    }
   ],
   "description": {
    "full": "<p>ObjectId type constructor</p>\n\n<h4>Example</h4>\n\n<pre><code>var id = new mongoose.Types.ObjectId;\n</code></pre>",
    "summary": "<p>ObjectId type constructor</p>",
    "body": "<h4>Example</h4>\n\n<pre><code>var id = new mongoose.Types.ObjectId;\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var ObjectId = require('../drivers/node-mongodb-native/objectid');\nmodule.exports = ObjectId;",
   "ctx": {
    "type": "declaration",
    "name": "ObjectId",
    "value": "require('../drivers/node-mongodb-native/objectid')",
    "string": "ObjectId"
   }
  }
 ],
 "utils": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var ReadPref = require('mongodb/lib/mongodb/connection/read_preference').ReadPreference\n  , ObjectId = require('./types/objectid')\n  , cloneRegExp = require('regexp-clone')\n  , sliced = require('sliced')\n  , mpath = require('mpath')\n  , ms = require('ms')\n  , MongooseBuffer\n  , MongooseArray\n  , Document",
   "ctx": {
    "type": "declaration",
    "name": "ReadPref",
    "value": "require('mongodb/lib/mongodb/connection/read_preference').ReadPreference",
    "string": "ReadPref"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": "a model name"
    },
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": "a collection name"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Produces a collection name from model <code>name</code>.</p>",
    "summary": "<p>Produces a collection name from model <code>name</code>.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "exports.toCollectionName = function (name, options) {\n  options = options || {};\n  if ('system.profile' === name) return name;\n  if ('system.indexes' === name) return name;\n  if (options.pluralization === false) return name;\n  return pluralize(name.toLowerCase());\n};",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "toCollectionName",
    "string": "exports.toCollectionName()"
   }
  },
  {
   "tags": [
    {
     "type": "deprecated",
     "string": "remove in 4.x gh-1350"
    }
   ],
   "description": {
    "full": "<p>Pluralization rules.</p>\n\n<p>These rules are applied while processing the argument to <code>toCollectionName</code>.</p>",
    "summary": "<p>Pluralization rules.</p>",
    "body": "<p>These rules are applied while processing the argument to <code>toCollectionName</code>.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "exports.pluralization = [\n  [/(m)an$/gi, '$1en'],\n  [/(pe)rson$/gi, '$1ople'],\n  [/(child)$/gi, '$1ren'],\n  [/^(ox)$/gi, '$1en'],\n  [/(ax|test)is$/gi, '$1es'],\n  [/(octop|vir)us$/gi, '$1i'],\n  [/(alias|status)$/gi, '$1es'],\n  [/(bu)s$/gi, '$1ses'],\n  [/(buffal|tomat|potat)o$/gi, '$1oes'],\n  [/([ti])um$/gi, '$1a'],\n  [/sis$/gi, 'ses'],\n  [/(?:([^f])fe|([lr])f)$/gi, '$1$2ves'],\n  [/(hive)$/gi, '$1s'],\n  [/([^aeiouy]|qu)y$/gi, '$1ies'],\n  [/(x|ch|ss|sh)$/gi, '$1es'],\n  [/(matr|vert|ind)ix|ex$/gi, '$1ices'],\n  [/([m|l])ouse$/gi, '$1ice'],\n  [/(kn|w|l)ife$/gi, '$1ives'],\n  [/(quiz)$/gi, '$1zes'],\n  [/s$/gi, 's'],\n  [/([^a-z])$/, '$1'],\n  [/$/gi, 's']\n];\nvar rules = exports.pluralization;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "pluralization",
    "value": "[",
    "string": "exports.pluralization"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Uncountable words.</p>\n\n<p>These words are applied while processing the argument to <code>toCollectionName</code>.</p>",
    "summary": "<p>Uncountable words.</p>",
    "body": "<p>These words are applied while processing the argument to <code>toCollectionName</code>.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "exports.uncountables = [\n  'advice',\n  'energy',\n  'excretion',\n  'digestion',\n  'cooperation',\n  'health',\n  'justice',\n  'labour',\n  'machinery',\n  'equipment',\n  'information',\n  'pollution',\n  'sewage',\n  'paper',\n  'money',\n  'species',\n  'series',\n  'rain',\n  'rice',\n  'fish',\n  'sheep',\n  'moose',\n  'deer',\n  'news',\n  'expertise',\n  'status',\n  'media'\n];\nvar uncountables = exports.uncountables;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "uncountables",
    "value": "[",
    "string": "exports.uncountables"
   }
  },
  {
   "tags": [
    {
     "type": "author",
     "string": "TJ Holowaychuk (extracted from _ext.js_)"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "string",
     "description": "to pluralize"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Pluralize function.</p>",
    "summary": "<p>Pluralize function.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "function pluralize (str) {\n  var rule, found;\n  if (!~uncountables.indexOf(str.toLowerCase())){\n    found = rules.filter(function(rule){\n      return str.match(rule[0]);\n    });\n    if (found[0]) return str.replace(found[0][0], found[0][1]);\n  }\n  return str;\n};",
   "ctx": {
    "type": "function",
    "name": "pluralize",
    "string": "pluralize()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "a",
     "description": "a value to compare to `b`"
    },
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "b",
     "description": "a value to compare to `a`"
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Determines if <code>a</code> and <code>b</code> are deep equal.</p>\n\n<p>Modified from node/lib/assert.js</p>",
    "summary": "<p>Determines if <code>a</code> and <code>b</code> are deep equal.</p>",
    "body": "<p>Modified from node/lib/assert.js</p>"
   },
   "isPrivate": true,
   "ignore": true,
   "code": "exports.deepEqual = function deepEqual (a, b) {\n  if (a === b) return true;\n\n  if (a instanceof Date && b instanceof Date)\n    return a.getTime() === b.getTime();\n\n  if (a instanceof ObjectId && b instanceof ObjectId) {\n    return a.toString() === b.toString();\n  }\n\n  if (a instanceof RegExp && b instanceof RegExp) {\n    return a.source == b.source &&\n           a.ignoreCase == b.ignoreCase &&\n           a.multiline == b.multiline &&\n           a.global == b.global;\n  }\n\n  if (typeof a !== 'object' && typeof b !== 'object')\n    return a == b;\n\n  if (a === null || b === null || a === undefined || b === undefined)\n    return false\n\n  if (a.prototype !== b.prototype) return false;\n\n  // Handle MongooseNumbers\n  if (a instanceof Number && b instanceof Number) {\n    return a.valueOf() === b.valueOf();\n  }\n\n  if (Buffer.isBuffer(a)) {\n    return exports.buffer.areEqual(a, b);\n  }\n\n  if (isMongooseObject(a)) a = a.toObject();\n  if (isMongooseObject(b)) b = b.toObject();\n\n  try {\n    var ka = Object.keys(a),\n        kb = Object.keys(b),\n        key, i;\n  } catch (e) {//happens when one is a string literal and the other isn't\n    return false;\n  }\n\n  // having the same number of owned properties (keys incorporates\n  // hasOwnProperty)\n  if (ka.length != kb.length)\n    return false;\n\n  //the same set of keys (although not necessarily the same order),\n  ka.sort();\n  kb.sort();\n\n  //~~~cheap key test\n  for (i = ka.length - 1; i >= 0; i--) {\n    if (ka[i] != kb[i])\n      return false;\n  }\n\n  //equivalent values for every corresponding key, and\n  //~~~possibly expensive deep test\n  for (i = ka.length - 1; i >= 0; i--) {\n    key = ka[i];\n    if (!deepEqual(a[key], b[key])) return false;\n  }\n\n  return true;\n};",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "deepEqual",
    "string": "exports.deepEqual()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": "the object to clone"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": "the cloned object"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Object clone with Mongoose natives support.</p>\n\n<p>If options.minimize is true, creates a minimal data object. Empty objects and undefined values will not be cloned. This makes the data payload sent to MongoDB as small as possible.</p>\n\n<p>Functions are never cloned.</p>",
    "summary": "<p>Object clone with Mongoose natives support.</p>",
    "body": "<p>If options.minimize is true, creates a minimal data object. Empty objects and undefined values will not be cloned. This makes the data payload sent to MongoDB as small as possible.</p>\n\n<p>Functions are never cloned.</p>"
   },
   "isPrivate": true,
   "ignore": true,
   "code": "exports.clone = function clone (obj, options) {\n  if (obj === undefined || obj === null)\n    return obj;\n\n  if (Array.isArray(obj))\n    return cloneArray(obj, options);\n\n  if (isMongooseObject(obj)) {\n    if (options && options.json && 'function' === typeof obj.toJSON) {\n      return obj.toJSON(options);\n    } else {\n      return obj.toObject(options);\n    }\n  }\n\n  if (obj.constructor) {\n    switch (exports.getFunctionName(obj.constructor)) {\n      case 'Object':\n        return cloneObject(obj, options);\n      case 'Date':\n        return new obj.constructor(+obj);\n      case 'RegExp':\n        return cloneRegExp(obj);\n      default:\n        // ignore\n        break;\n    }\n  }\n\n  if (obj instanceof ObjectId)\n    return new ObjectId(obj.id);\n\n  if (!obj.constructor && exports.isObject(obj)) {\n    // object created with Object.create(null)\n    return cloneObject(obj, options);\n  }\n\n  if (obj.valueOf)\n    return obj.valueOf();\n};\nvar clone = exports.clone;",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "clone",
    "string": "exports.clone()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>ignore</p>",
    "summary": "<p>ignore</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function cloneObject (obj, options) {\n  var retainKeyOrder = options && options.retainKeyOrder\n    , minimize = options && options.minimize\n    , ret = {}\n    , hasKeys\n    , keys\n    , val\n    , k\n    , i\n\n  if (retainKeyOrder) {\n    for (k in obj) {\n      val = clone(obj[k], options);\n\n      if (!minimize || ('undefined' !== typeof val)) {\n        hasKeys || (hasKeys = true);\n        ret[k] = val;\n      }\n    }\n  } else {\n    // faster\n\n    keys = Object.keys(obj);\n    i = keys.length;\n\n    while (i--) {\n      k = keys[i];\n      val = clone(obj[k], options);\n\n      if (!minimize || ('undefined' !== typeof val)) {\n        if (!hasKeys) hasKeys = true;\n        ret[k] = val;\n      }\n    }\n  }\n\n  return minimize\n    ? hasKeys && ret\n    : ret;\n};\n\nfunction cloneArray (arr, options) {\n  var ret = [];\n  for (var i = 0, l = arr.length; i < l; i++)\n    ret.push(clone(arr[i], options));\n  return ret;\n};",
   "ctx": {
    "type": "function",
    "name": "cloneObject",
    "string": "cloneObject()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "defaults",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": "the merged object"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Shallow copies defaults into options.</p>",
    "summary": "<p>Shallow copies defaults into options.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "exports.options = function (defaults, options) {\n  var keys = Object.keys(defaults)\n    , i = keys.length\n    , k ;\n\n  options = options || {};\n\n  while (i--) {\n    k = keys[i];\n    if (!(k in options)) {\n      options[k] = defaults[k];\n    }\n  }\n\n  return options;\n};",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "options",
    "string": "exports.options()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Generates a random string</p>",
    "summary": "<p>Generates a random string</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "exports.random = function () {\n  return Math.random().toString().substr(3);\n};",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "random",
    "string": "exports.random()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "to",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "from",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Merges <code>from</code> into <code>to</code> without overwriting existing properties.</p>",
    "summary": "<p>Merges <code>from</code> into <code>to</code> without overwriting existing properties.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "exports.merge = function merge (to, from) {\n  var keys = Object.keys(from)\n    , i = keys.length\n    , key;\n\n  while (i--) {\n    key = keys[i];\n    if ('undefined' === typeof to[key]) {\n      to[key] = from[key];\n    } else if (exports.isObject(from[key])) {\n      merge(to[key], from[key]);\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "merge",
    "string": "exports.merge()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>toString helper</p>",
    "summary": "<p>toString helper</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var toString = Object.prototype.toString;",
   "ctx": {
    "type": "declaration",
    "name": "toString",
    "value": "Object.prototype.toString",
    "string": "toString"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object",
      "Array",
      "String",
      "Function",
      "RegExp",
      "any"
     ],
     "name": "arg",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Determines if <code>arg</code> is an object.</p>",
    "summary": "<p>Determines if <code>arg</code> is an object.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "exports.isObject = function (arg) {\n  return '[object Object]' == toString.call(arg);\n}",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "isObject",
    "string": "exports.isObject()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>A faster Array.prototype.slice.call(arguments) alternative</p>",
    "summary": "<p>A faster Array.prototype.slice.call(arguments) alternative</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "exports.args = sliced;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "args",
    "value": "sliced",
    "string": "exports.args"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>process.nextTick helper.</p>\n\n<p>Wraps <code>callback</code> in a try/catch + nextTick.</p>\n\n<p>node-mongodb-native has a habit of state corruption when an error is immediately thrown from within a collection callback.</p>",
    "summary": "<p>process.nextTick helper.</p>",
    "body": "<p>Wraps <code>callback</code> in a try/catch + nextTick.</p>\n\n<p>node-mongodb-native has a habit of state corruption when an error is immediately thrown from within a collection callback.</p>"
   },
   "isPrivate": true,
   "ignore": true,
   "code": "exports.tick = function tick (callback) {\n  if ('function' !== typeof callback) return;\n  return function () {\n    try {\n      callback.apply(this, arguments);\n    } catch (err) {\n      // only nextTick on err to get out of\n      // the event loop and avoid state corruption.\n      process.nextTick(function () {\n        throw err;\n      });\n    }\n  }\n}",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "tick",
    "string": "exports.tick()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "any"
     ],
     "name": "v",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Returns if <code>v</code> is a mongoose object that has a <code>toObject()</code> method we can use.</p>\n\n<p>This is for compatibility with libs like Date.js which do foolish things to Natives.</p>",
    "summary": "<p>Returns if <code>v</code> is a mongoose object that has a <code>toObject()</code> method we can use.</p>",
    "body": "<p>This is for compatibility with libs like Date.js which do foolish things to Natives.</p>"
   },
   "isPrivate": true,
   "ignore": true,
   "code": "exports.isMongooseObject = function (v) {\n  Document || (Document = require('./document'));\n  MongooseArray || (MongooseArray = require('./types').Array);\n  MongooseBuffer || (MongooseBuffer = require('./types').Buffer);\n\n  return v instanceof Document ||\n         (v && v.isMongooseArray) ||\n         (v && v.isMongooseBuffer);\n};\nvar isMongooseObject = exports.isMongooseObject;",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "isMongooseObject",
    "string": "exports.isMongooseObject()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "object",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Converts <code>expires</code> options of index objects to <code>expiresAfterSeconds</code> options for MongoDB.</p>",
    "summary": "<p>Converts <code>expires</code> options of index objects to <code>expiresAfterSeconds</code> options for MongoDB.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": true,
   "code": "exports.expires = function expires (object) {\n  if (!(object && 'Object' == object.constructor.name)) return;\n  if (!('expires' in object)) return;\n\n  var when;\n  if ('string' != typeof object.expires) {\n    when = object.expires;\n  } else {\n    when = Math.round(ms(object.expires) / 1000);\n  }\n  object.expireAfterSeconds = when;\n  delete object.expires;\n};",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "expires",
    "string": "exports.expires()"
   }
  },
  {
   "tags": [
    {
     "type": "TODO",
     "string": "move this into the driver layer"
    },
    {
     "type": "param",
     "types": [
      "String",
      "Array"
     ],
     "name": "pref",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "[tags]",
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Converts arguments to ReadPrefs the driver<br />can understand.</p>",
    "summary": "<p>Converts arguments to ReadPrefs the driver<br />can understand.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "exports.readPref = function readPref (pref, tags) {\n  if (Array.isArray(pref)) {\n    tags = pref[1];\n    pref = pref[0];\n  }\n\n  switch (pref) {\n    case 'p':\n      pref = 'primary';\n      break;\n    case 'pp':\n      pref = 'primaryPreferred';\n      break;\n    case 's':\n      pref = 'secondary';\n      break;\n    case 'sp':\n      pref = 'secondaryPreferred';\n      break;\n    case 'n':\n      pref = 'nearest';\n      break;\n  }\n\n  return new ReadPref(pref, tags);\n};",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "readPref",
    "string": "exports.readPref()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Populate options constructor</p>",
    "summary": "<p>Populate options constructor</p>",
    "body": ""
   },
   "ignore": true,
   "code": "function PopulateOptions (path, select, match, options, model) {\n  this.path = path;\n  this.match = match;\n  this.select = select;\n  this.options = options;\n  this.model = model;\n  this._docs = {};\n}\n\n// make it compatible with utils.clone\nPopulateOptions.prototype.constructor = Object;\n\n// expose\nexports.PopulateOptions = PopulateOptions;",
   "ctx": {
    "type": "function",
    "name": "PopulateOptions",
    "string": "PopulateOptions()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>populate helper</p>",
    "summary": "<p>populate helper</p>",
    "body": ""
   },
   "ignore": true,
   "code": "exports.populate = function populate (path, select, model, match, options) {\n  // The order of select/conditions args is opposite Model.find but\n  // necessary to keep backward compatibility (select could be\n  // an array, string, or object literal).\n\n  // might have passed an object specifying all arguments\n  if (1 === arguments.length) {\n    if (path instanceof PopulateOptions) {\n      return [path];\n    }\n\n    if (Array.isArray(path)) {\n      return path.map(function(o){\n        return exports.populate(o)[0];\n      });\n    }\n\n    if (exports.isObject(path)) {\n      match = path.match;\n      options = path.options;\n      select = path.select;\n      model = path.model;\n      path = path.path;\n    }\n  } else if ('string' !== typeof model && 'function' !== typeof model) {\n    options = match;\n    match = model;\n    model = undefined;\n  }\n\n  if ('string' != typeof path) {\n    throw new TypeError('utils.populate: invalid path. Expected string. Got typeof `' + typeof path + '`');\n  }\n\n  var ret = [];\n  var paths = path.split(' ');\n  for (var i = 0; i < paths.length; ++i) {\n    ret.push(new PopulateOptions(paths[i], select, match, options, model));\n  }\n\n  return ret;\n}",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "populate",
    "string": "exports.populate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Return the value of <code>obj</code> at the given <code>path</code>.</p>",
    "summary": "<p>Return the value of <code>obj</code> at the given <code>path</code>.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "exports.getValue = function (path, obj, map) {\n  return mpath.get(path, obj, '_doc', map);\n}",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "getValue",
    "string": "exports.getValue()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "path",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Anything"
     ],
     "name": "val",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Sets the value of <code>obj</code> at the given <code>path</code>.</p>",
    "summary": "<p>Sets the value of <code>obj</code> at the given <code>path</code>.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "exports.setValue = function (path, val, obj, map) {\n  mpath.set(path, val, obj, '_doc', map);\n}",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "setValue",
    "string": "exports.setValue()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "o",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    },
    {
     "type": "private",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Returns an array of values from object <code>o</code>.</p>",
    "summary": "<p>Returns an array of values from object <code>o</code>.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "exports.object = {};\nexports.object.vals = function vals (o) {\n  var keys = Object.keys(o)\n    , i = keys.length\n    , ret = [];\n\n  while (i--) {\n    ret.push(o[keys[i]]);\n  }\n\n  return ret;\n}",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "object",
    "value": "{}",
    "string": "exports.object"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@see exports.options</p>",
    "summary": "<p>@see exports.options</p>",
    "body": ""
   },
   "ignore": true,
   "code": "exports.object.shallowCopy = exports.options;"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "obj",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "prop",
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Safer helper for hasOwnProperty checks</p>",
    "summary": "<p>Safer helper for hasOwnProperty checks</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "var hop = Object.prototype.hasOwnProperty;\nexports.object.hasOwnProperty = function (obj, prop) {\n  return hop.call(obj, prop);\n}",
   "ctx": {
    "type": "declaration",
    "name": "hop",
    "value": "Object.prototype.hasOwnProperty",
    "string": "hop"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Determine if <code>val</code> is null or undefined</p>",
    "summary": "<p>Determine if <code>val</code> is null or undefined</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "exports.isNullOrUndefined = function (val) {\n  return null == val\n}",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "isNullOrUndefined",
    "string": "exports.isNullOrUndefined()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>ignore</p>",
    "summary": "<p>ignore</p>",
    "body": ""
   },
   "ignore": true,
   "code": "exports.array = {};",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "array",
    "value": "{}",
    "string": "exports.array"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "arr",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[filter]",
     "description": "If passed, will be invoked with each item in the array. If `filter` returns a falsey value, the item will not be included in the results."
    },
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    },
    {
     "type": "private",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Flattens an array.</p>\n\n<p>[ 1, [ 2, 3, [4] ]] -> [1,2,3,4]</p>",
    "summary": "<p>Flattens an array.</p>",
    "body": "<p>[ 1, [ 2, 3, [4] ]] -> [1,2,3,4]</p>"
   },
   "isPrivate": false,
   "ignore": true,
   "code": "exports.array.flatten = function flatten (arr, filter, ret) {\n  ret || (ret = []);\n\n  arr.forEach(function (item) {\n    if (Array.isArray(item)) {\n      flatten(item, filter, ret);\n    } else {\n      if (!filter || filter(item)) {\n        ret.push(item);\n      }\n    }\n  });\n\n  return ret;\n}",
   "ctx": {
    "type": "method",
    "receiver": "exports.array",
    "name": "flatten",
    "string": "exports.array.flatten()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Buffer"
     ],
     "name": "a",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "b",
     "description": ""
    }
   ],
   "description": {
    "full": "<p>Determines if two buffers are equal.</p>",
    "summary": "<p>Determines if two buffers are equal.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": true,
   "code": "exports.buffer = {};\nexports.buffer.areEqual = function (a, b) {\n  if (!Buffer.isBuffer(a)) return false;\n  if (!Buffer.isBuffer(b)) return false;\n  if (a.length !== b.length) return false;\n  for (var i = 0, len = a.length; i < len; ++i) {\n    if (a[i] !== b[i]) return false;\n  }\n  return true;\n};\n\nexports.getFunctionName = function(fn) {\n  if (fn.name) {\n    return fn.name;\n  }\n  return (fn.toString().trim().match(/^function\\s*([^\\s(]+)/) || [])[1];\n};\n\nexports.decorate = function(destination, source) {\n  for (var key in source) {\n    destination[key] = source[key];\n  }\n};",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "buffer",
    "value": "{}",
    "string": "exports.buffer"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "to",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "from",
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>merges to with a copy of from</p>",
    "summary": "<p>merges to with a copy of from</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "exports.mergeClone = function(to, from) {\n  var keys = Object.keys(from)\n    , i = keys.length\n    , key\n\n  while (i--) {\n    key = keys[i];\n    if ('undefined' === typeof to[key]) {\n      // make sure to retain key order here because of a bug handling the $each\n      // operator in mongodb 2.4.4\n      to[key] = exports.clone(from[key], { retainKeyOrder : 1});\n    } else {\n      if (exports.isObject(from[key])) {\n        exports.mergeClone(to[key], from[key]);\n      } else {\n        // make sure to retain key order here because of a bug handling the\n        // $each operator in mongodb 2.4.4\n        to[key] = exports.clone(from[key], { retainKeyOrder : 1});\n      }\n    }\n  }\n}",
   "ctx": {
    "type": "method",
    "receiver": "exports",
    "name": "mergeClone",
    "string": "exports.mergeClone()"
   }
  }
 ],
 "virtualtype": [
  {
   "tags": [
    {
     "type": "parma",
     "string": "{Object} options"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>VirtualType constructor</p>\n\n<p>This is what mongoose uses to define virtual attributes via <code>Schema.prototype.virtual</code>.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var fullname = schema.virtual('fullname');\nfullname instanceof mongoose.VirtualType // true\n</code></pre>",
    "summary": "<p>VirtualType constructor</p>",
    "body": "<p>This is what mongoose uses to define virtual attributes via <code>Schema.prototype.virtual</code>.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var fullname = schema.virtual('fullname');\nfullname instanceof mongoose.VirtualType // true\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function VirtualType (options, name) {\n  this.path = name;\n  this.getters = [];\n  this.setters = [];\n  this.options = options || {};\n}",
   "ctx": {
    "type": "function",
    "name": "VirtualType",
    "string": "VirtualType()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "fn",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "VirtualType"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Defines a getter.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var virtual = schema.virtual('fullname');\nvirtual.get(function () {\n  return this.name.first + ' ' + this.name.last;\n});\n</code></pre>",
    "summary": "<p>Defines a getter.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var virtual = schema.virtual('fullname');\nvirtual.get(function () {\n  return this.name.first + ' ' + this.name.last;\n});\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "VirtualType.prototype.get = function (fn) {\n  this.getters.push(fn);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "VirtualType",
    "cons": "VirtualType",
    "name": "get",
    "string": "VirtualType.prototype.get()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "fn",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "VirtualType"
     ],
     "description": "this"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Defines a setter.</p>\n\n<h4>Example:</h4>\n\n<pre><code>var virtual = schema.virtual('fullname');\nvirtual.set(function (v) {\n  var parts = v.split(' ');\n  this.name.first = parts[0];\n  this.name.last = parts[1];\n});\n</code></pre>",
    "summary": "<p>Defines a setter.</p>",
    "body": "<h4>Example:</h4>\n\n<pre><code>var virtual = schema.virtual('fullname');\nvirtual.set(function (v) {\n  var parts = v.split(' ');\n  this.name.first = parts[0];\n  this.name.last = parts[1];\n});\n</code></pre>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "VirtualType.prototype.set = function (fn) {\n  this.setters.push(fn);\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "VirtualType",
    "cons": "VirtualType",
    "name": "set",
    "string": "VirtualType.prototype.set()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "scope",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "any"
     ],
     "description": "the value after applying all getters"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Applies getters to <code>value</code> using optional <code>scope</code>.</p>",
    "summary": "<p>Applies getters to <code>value</code> using optional <code>scope</code>.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "VirtualType.prototype.applyGetters = function (value, scope) {\n  var v = value;\n  for (var l = this.getters.length - 1; l >= 0; l--) {\n    v = this.getters[l].call(scope, v, this);\n  }\n  return v;\n};",
   "ctx": {
    "type": "method",
    "constructor": "VirtualType",
    "cons": "VirtualType",
    "name": "applyGetters",
    "string": "VirtualType.prototype.applyGetters()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "value",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "scope",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "any"
     ],
     "description": "the value after applying all setters"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Applies setters to <code>value</code> using optional <code>scope</code>.</p>",
    "summary": "<p>Applies setters to <code>value</code> using optional <code>scope</code>.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "VirtualType.prototype.applySetters = function (value, scope) {\n  var v = value;\n  for (var l = this.setters.length - 1; l >= 0; l--) {\n    v = this.setters[l].call(scope, v, this);\n  }\n  return v;\n};",
   "ctx": {
    "type": "method",
    "constructor": "VirtualType",
    "cons": "VirtualType",
    "name": "applySetters",
    "string": "VirtualType.prototype.applySetters()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>exports</p>",
    "summary": "<p>exports</p>",
    "body": ""
   },
   "ignore": true,
   "code": "module.exports = VirtualType;",
   "ctx": {
    "type": "property",
    "receiver": "module",
    "name": "exports",
    "value": "VirtualType",
    "string": "module.exports"
   }
  }
 ]
}