// Write code to merge two sorted arrays into a new sorted array

/**
 *    BUBBLE SORT APPROACH
 * 1) Concatenate the two arrays
 * 2) Init sorted variable as false
 * 3) Init while loop to run while sorted is false
 * 4) Set sorted to true for breaking out of the loop
 *    once the array is sorted
 * 5) Loop through concatenated array
 * 6) Check whether current number is greater than the
 *    following number
 * 7) If current number > next number, swap the position
 *    of the two numbers
 * 8) Set sorted back to false to ensure the loop runs
 *    at least one more time
 * 9) Return the fully sorted array
 */

var mergeSorted = function (arr1, arr2) {
  var numArr = arr1.concat(arr2);
  var sorted = false;

  while (!sorted) {
    sorted = true;

    for (var i = 0; i < numArr.length; i++) {
      if (numArr[i] > numArr[i + 1]) {
        var temp = numArr[i];
        numArr[i] = numArr[i + 1];
        numArr[i + 1] = temp;

        sorted = false;
      }
    }
  }

  return numArr;
};
