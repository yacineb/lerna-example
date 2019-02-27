const a = require('project-a');
const b = require('project-b');
const _ = require('lodash');

//it's supposed to log true
console.log(_.isEqual(a([1,2,2]),b));