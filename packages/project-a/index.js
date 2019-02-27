'use strict';

const _ = require('lodash');
module.exports = function removeDupl(data) {
    return _.uniqBy(data, function (e) {
        return e;
      });
  };