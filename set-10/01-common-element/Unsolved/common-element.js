// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

/**
 * 1) Loop through the first array
 * 2) Capture the current number
 * 3) Loop through the second array
 * 4) Check the captured number from the first array against
 *    the current number in the second array
 * 5) If the two numbers are equal, return the number
 */

var commonElement = function(arrA, arrB) {
  for (var i = 0; i < arrA.length; i++) {
    var outerNum = arrA[i];

    for (var j = 0; j < arrB.length; j++) {
      var innerNum = arrB[j];

      if (outerNum === innerNum) {
        return innerNum;
      }
    }
  }
};
