'use strict';

const _ = require('lodash');
module.exports = function removeDupl(data) {
    console.log('oh hey i deeed it')
    return _.uniqBy(data, function (e) {
        return e;
      });
  };