var util = require("./util");

exports['test monggose.Shema'] = function() {
  util.assertCompletion("require('mongoose').S", {
    "start": {
      "line": 0,
      "ch": 20
     },
     "end": {
      "line": 0,
      "ch": 21
     },
     "isProperty": true,
     "isObjectKey": false,
     "completions": [{"name":"set","type":"fn(key: string, value: string)","doc":"\n\nSets mongoose options","origin":"node-mongoose"},
                     {"name":"STATES","type":"?","doc":"\n\nExpose connection states for user-land","origin":"node-mongoose"},
                     {"name":"Schema","type":"fn(definition: Object)","doc":"\n\nThe Mongoose <a href=\"#schema_Schema\">Schema</a> constructor","origin":"node-mongoose"},
                     {"name":"SchemaType","type":"fn(path: string, options?: Object, instance?: string)","doc":"\n\nThe Mongoose <a href=\"#schematype_SchemaType\">SchemaType</a> constructor","origin":"node-mongoose"},
                     {"name":"SchemaTypes","type":"?","doc":"\n\nThe various Mongoose SchemaTypes.","origin":"node-mongoose"}
                    ]
  });
}