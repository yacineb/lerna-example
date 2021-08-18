'use strict';

const _ = require('lodash');
module.exports = function removeDupl(data) {
    console.log('hello...')
    return _.uniqBy(data, function (e) {
        return e;
      });
  };