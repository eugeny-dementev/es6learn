var _ = require('lodash')

module.exports = function stringMaker() {
  var result = '';

  _.each(arguments, function(string) {
    result += string + ' ';
  });

  return result;
};
