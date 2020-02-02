'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(item => item.split(':'))
    .reduce((result, [key, value]) => {
      if (value) {
        result[key.trim()] = value.trim();
      }

      return result;
    }, {});
}

module.exports = convertToObject;
