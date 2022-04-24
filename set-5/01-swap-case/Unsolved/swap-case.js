// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {
  var strArr = str.split("");
  var result = "";

  for (var i = 0; i < strArr.length; i++) {
    var char = strArr[i];

    if (char === char.toUpperCase()) {
      char = char.toLowerCase();
      result += char;
    } else {
      char = char.toUpperCase();
      result += char;
    }
  }

  return result;
};
