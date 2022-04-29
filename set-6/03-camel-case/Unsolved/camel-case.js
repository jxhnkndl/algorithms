// Write code to create a function that accepts a string and returns the string in camelCase

/**
 * 1) Convert string to lowercase and split on spaces
 * 2) Initialize a result variable
 * 3) Loop through words array
 * 4) Leave first word as is
 * 5) For every other word:
 *    - Capture the first character
 *    - Convert the lowercase character to an uppercase character
 *    - Replace the captured character
 * 6) Concatenate the edited word to the result
 * 7) Return the result
 */

var camelCase = function(str) {
  var wordsArr = str.toLowerCase().split(" ");
  var result = wordsArr[0];
  
  for (var i = 1; i < wordsArr.length; i++) {
    var currentWord = wordsArr[i].split("");

    currentWord[0] = currentWord[0].toUpperCase();

    result += currentWord.join("");
  }

  return result;
};
