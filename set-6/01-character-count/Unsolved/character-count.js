// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

/**
 * 1) Create empty placeholder object
 * 2) Split string into array of characters
 * 3) Loop through character array
 * 4) Check to see if current character has been made into a key
 *    on the object yet
 * 5) If key doesn't exist:
 *      a) Create a new key set to the current character
 *      b) Assign the new key a value of one
 * 6) If key exists:
 *      a) Increment the key's value by one
 * 7) Return the object
 */

var characterCount = function(str) {
  var strObj = {};
  var strArr = str.split("");

  for (var i = 0; i < strArr.length; i++) {
    var currentChar = strArr[i];

    if (currentChar in strObj) {
      strObj[currentChar]++;
    } else {
      strObj[currentChar] = 1;
    }
  }

  return strObj;
};
