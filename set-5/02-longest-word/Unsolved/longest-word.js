// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

/**
 * 1) split string into array of words
 * 2) set initial longest word to first word in array
 * 3) loop through the rest of the words in the array
 * 4) compare the length of the current word to the
 *    existing longest word
 * 5) if current word is longer, replace the existing
 *    longest word
 * 6) return the longest word
 */


var longestWord = function(str) {
  var words = str.split(" ");
  var longestWord = words[0];

  for (var i = 0; i < words.length; i++) {
    var currentWord = words[i];

    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }

  return longestWord;
};
