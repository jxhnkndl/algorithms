// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  var strArr = str.toLowerCase().split("");
  var vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  var numVowels = 0;

  for (var i = 0; i < strArr.length; i++) {
    var currentChar = strArr[i];

    if (vowelsArr.indexOf(currentChar) !== -1) {
      numVowels++;
    }
  }

  return numVowels;
};
