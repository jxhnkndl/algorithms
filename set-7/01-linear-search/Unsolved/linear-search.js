// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

/**
 * 1) Loop through array
 * 2) Compare current number to target number
 * 3) If current number matches target number, return the index
 * 4) If the target number is not found, return -1
 */

var linearSearch = function(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    var currentNum = arr[i];

    if (currentNum === target) {
      return i;
    }
  }

  return -1;
};
