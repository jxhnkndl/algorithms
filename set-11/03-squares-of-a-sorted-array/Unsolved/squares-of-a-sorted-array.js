// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

/**
 * 1) Map over array squaring each element as it returns
 * 2) Init a sorted variable to track whether new array is sorted
 * 3) Create a while loop that runs while array IS NOT sorted
 * 4) Set sorted to true to eventually break out of the loop
 * 5) Loop through the squared array
 * 6) Compare current number to next number
 * 7) If next number is less than current number, swap the indeces and
 *    set sorted back to false
 * 8) Return the sorted squared array
 */

var sortedSquares = function(arr) {
  var squaredArr = arr.map((num) => num * num);
  var sorted = false;

  while (!sorted) {
    sorted = true;

    for (var i = 0; i < squaredArr.length; i++) {
      if (squaredArr[i] > squaredArr[i + 1]) {
        var temp = squaredArr[i];
        squaredArr[i] = squaredArr[i + 1];
        squaredArr[i + 1] = temp;

        sorted = false;
      }
    }
  }

  return squaredArr;
};
