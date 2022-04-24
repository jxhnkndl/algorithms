// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

/** 
 * 1) split string into array of words
 * 2) initialize new empty array for result
 * 3) loop through words array
 * 4) add the current word to the beginning of the result
 *    array using unshift method
 * 5) join results word array into string with space
 *    separator
 * 6) return the reversed string
*/

// using array reverse method
var reverseWords = function(str) {
  var words = str.split(" ");
  var reverseWords = words.reverse();

  return reverseWords.join(" ");
};

// without array reverse method
var reverseWords = function(str) {
  var words = str.split(" ");
  var reverseWords = [];

  for (var i = 0; i < words.length; i++) {
    var currentWord = words[i];

    reverseWords.unshift(currentWord);
  }

  return reverseWords.join(" ");
};
