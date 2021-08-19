'use strict';

const _ = require('lodash');
module.exports = function removeDupl(data) {
    console.log('giving this a shot')
    return _.uniqBy(data, function (e) {
        return e;
      });
  };