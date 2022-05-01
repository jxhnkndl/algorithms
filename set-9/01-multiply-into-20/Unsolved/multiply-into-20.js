// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array add up to 20, return true, else return false

/**
 * 1) Loop through number array
 * 2) Capture current number
 * 3) Slice a new array from the current number forward
 * 4) Loop through the sliced array
 * 5) Multiply the current number against each element
 * 6) If product is 20, return true
 * 7) If loop completes without returning true, return false
 */

var multiplyInto20 = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    var rest = arr.slice(i);

    for (var j = 0; j < rest.length; j++) {
      if (num * rest[j] === 20) {
        return true;
      }
    }
  }

  return false;
};
