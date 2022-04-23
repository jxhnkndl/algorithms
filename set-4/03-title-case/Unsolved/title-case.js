// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
  var strArr = str.split(" ");

  for (var i = 0; i < strArr.length; i++) {
    var wordArr = strArr[i].split("");

    var firstLetter = wordArr[0].toUpperCase();

    wordArr.splice(0, 1, firstLetter);

    var word = wordArr.join("");

    strArr.splice(i, 1, word);
  } 
  
  return strArr.join(" ");
};
