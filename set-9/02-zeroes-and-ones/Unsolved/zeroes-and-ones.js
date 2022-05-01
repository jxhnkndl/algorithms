// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

/**
 * 1) Split num string into array
 * 2) Initialize counters for 0s and 1s
 * 3) Loop through the array
 * 4) Increment counters each time a 0 or 1 is matched
 *    with the current character
 * 5) Check whether the counters are equal to one another
 * 6) If counters are equal, return true
 * 7) If counters aren't equal, return false
 */

var zeroesAndOnes = function(str) {
  var zeros = 0;
  var ones = 0;

  for (var i = 0; i < str.length; i++) {
    var num = str[i];

    if (num === "0") {
      zeros++;
    } else if (num === "1") {
      ones++;
    }
  }

  return zeros === ones;
};
