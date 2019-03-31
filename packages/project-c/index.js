const a = require("project-a");
const b = require("project-b");
const _ = require("lodash");

//it's supposed to log true
console.log(_.isEqual(a([1, 2, 2]), b));

function logEvery2Seconds(i) {
  setTimeout(() => {
    console.log("Infinite Loop Test n:", i);
    logEvery2Seconds(++i);
  }, 2000);
}

logEvery2Seconds(0);
