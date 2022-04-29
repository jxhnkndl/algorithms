// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

/**
 * 1) Create empty object for key mapping
 * 2) Loop through number array
 * 3) Check to see if number key exists in object
 * 4) If not, create a new object key for the number
 * 5) If so, return false
 * 6) If the loop completes without returning false, there are no
 *    duplicates and the function should return true
 */

var isUnique = function(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var currentNum = arr[i];

    if (currentNum in obj) {
      return false;
    } else {
      obj[currentNum] = true;
    }
  }

  return true;
};

