// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

/**
 * 1) Initialize counter variable
 * 2) Create outer loop for looping through parent array
 * 3) Create inner loop for looping through child arrays
 * 4) Inside inner loop, check whether each element is
 *    equal to a capital X
 * 5) If a capital X is found, increment the counter
 * 6) Return the counter
 */

var arraySearch2D = function(arr) {
  var counter = 0;

  for (var i = 0; i < arr.length; i++) {
    var subArray = arr[i];

    for (var j = 0; j < subArray.length; j++) {
      var char = subArray[j];

      if (char === "X") {
        counter++;
      }
    }
  }

  return counter;
};
