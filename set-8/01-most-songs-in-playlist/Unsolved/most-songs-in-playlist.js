// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

/**
 * 1) Sort array from smallest to largest number
 * 2) Initialize a counter variable at 0
 * 3) Loop through the array
 * 4) Check whether adding the current number to the
 *    counter makes counter less than 60
 *    - If so, move on to the next number
 *    - If not, return the existing counter
 */

var mostSongsInPlaylist = function(arr) {
  var sortedArr = arr.sort();
  var minutes = 0;
  var counter = 0;

  for (var i = 0; i < sortedArr.length; i++) {
    minutes = minutes + sortedArr[i];

    if (minutes <= 60) {
      counter++;
    }
  }

  return counter;
};

