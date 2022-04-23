// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

// with array methods
var isPalindrome = function (str) {
  var revStr = str
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

  if (str === revStr) return true;
  else return false;
};

// without array methods
var isPalindrome = function (str) {
  var revStr = "";

  for (var i = str.length - 1; i >= 0; i--) {
    var currentChar = str[i];
    revStr += currentChar;
  }

  if (str === revStr) return true;
  else return false;
};
