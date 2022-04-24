// Write code to create a function that accepts a string and returns an acronym for the given string

/**
 * 1) split string into array of words
 * 2) initialize empty acronym string
 * 3) loop through array of words
 * 4) capture first character and convert to uppercase
 * 5) add uppercase character to acronym string
 * 6) return acronym
 */

var acronymBuilder = function(str) {
  var words = str.split(" ");
  var acronym = "";

  for (var i = 0; i < words.length; i++) {
    var firstChar = words[i][0];

    acronym += firstChar.toUpperCase();
  }

  return acronym;
};