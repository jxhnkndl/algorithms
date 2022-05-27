// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

/**
 * 1) Create empty array to push intersecting elements into
 * 2) Loop through first array
 * 3) Capture current number
 * 4) Loop through second array
 * 5) Compare current number from first array with current
 *    number from second array
 * 6) If numbers match, push the number into the results
 *    array and remove it from the second array
 * 7) Return the new array
 */

var arrayIntersection = function(arr1, arr2) {
  var intersection = [];

  for (var i = 0; i < arr1.length; i++) {
    var currentNum = arr1[i];

    for (var j = 0; j < arr2.length; j++) {
      if (currentNum === arr2[j]) {
        intersection.push(currentNum);
        arr2.splice(j, 1);
      }
    }
  }

  return intersection;
};
