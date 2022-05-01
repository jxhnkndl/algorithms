// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

/**
 * 1) Create decremeting loop
 *    - Set i = num
 *    - Set condition as i > 0
 *    - Decrement i
 * 2) Check if i * i === num
 *    - If so, return true
 *    - If not, decrement the loop and try again
 * 3) If the loop finishes wtihout returning true,
 *    the number is not a square root and the
 *    algorithm should return false
 */

var isPerfectSquare = function(num) {
  for (var i = num; i >= 0; i--) {
    if (i * i === num) {
      return true;
    }
  }

  return false;
};
