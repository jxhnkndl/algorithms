// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

/**
 * 1) Initialize variables for two largest numbers as 
   2) Loop through array
   3) Run conditionals
      - IF largest is undefined, set current number to largest
      - IF number is > largest, set current number to largest and
        move current largest to second largest
      - IF number > secondLargest but < largest, set current number
        to second largest
 */

var productOfLargestTwo = function(arr) {
  var largest;
  var secondLargest;

  for (var i = 0; i < arr.length; i++) {
    var currentNum = arr[i];

    if (!largest) {
      largest = currentNum;

    } else if (currentNum > largest) {
      secondLargest = largest;
      largest = currentNum;
      
    } else if (currentNum > secondLargest && currentNum < largest) {
      secondLargest = currentNum;
    }
  }

  return largest * secondLargest;
};