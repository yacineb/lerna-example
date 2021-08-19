'use strict';

const _ = require('lodash');
module.exports = function removeDupl(data) {
    console.log('to cheessee')
    return _.uniqBy(data, function (e) {
        return e;
      });
  };