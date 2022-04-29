// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
  // compare string lengths; if they don't match, they can't be anagrams
  if (strA.length !== strB.length) {
    return false;
  }

  // init individual string character maps
  var aLetterMap = {};
  var bLetterMap = {};
  // set a shared strength length to use in for loop
  var strLength = strA.length;

  for (var i = 0; i < strLength; i++) {
    // capture the current character in each string
    var aLetter = strA[i];
    var bLetter = strB[i];

    // update character maps with properties for each letter in string:
    // if letter exists, add 1
    // if letter doesn't exist, initialize at 0 and add 1
    aLetterMap[aLetter] = (aLetterMap[aLetter] || 0) + 1;
    bLetterMap[bLetter] = (bLetterMap[bLetter] || 0) + 1;
  }

  // iterate over character properties in char map
  for (var key in aLetterMap) {
    // if the characters and quantities don't match, no anagram
    if (aLetterMap[key] !== bLetterMap[key]) {
      return false;
    }
  }

  return true;
};
