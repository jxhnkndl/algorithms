// Write code to create a function that accepts a string and returns an object
// The object should contain keys for each character in the string
// Each key should point to an array containing the indexes the character is found in the string

/**
 * 1) Initialize empty result object
 * 2) Loop over string
 * 3) Check whether current character has an object property
 *    a) If not, create a new object property for the character
 *       and assign an array containing the character's index
 *       position to it
 *    b) If so, push current character's index position into 
 *       its object property's array
 * 4) Return the result object
 */

var stringMap = function(str) {
  var result = {};

  for (var i = 0; i < str.length; i++) {
    var currentChar = str[i];

    if (currentChar in result) {
      result[currentChar].push(i);
    } else {
      result[currentChar] = [i];
    }
  }

  return result;
};
