// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

/**
 * 1) Convert both strings to arrays
 * 2) Create empty mapping objects for both strings
 * 3) Loop through string arrays
 * 4) Create a character map for each string 
 * 5) Capture and compare the keys of each object
 *    - If they aren't equal, return false
 * 6) If keys are equal, compare the values of companion keys
 *    - If they aren't equal, return false
 * 7) Return true
 */

var isAnagram = function(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }

  const charMapA = {};
  const charMapB = {};
  const length = strA.length;

  for (var i = 0; i < length; i++) {
    var currentCharA = strA[i];
    var currentCharB = strB[i];

    charMapA[currentCharA] = (charMapA[currentCharA] || 0) + 1;
    charMapB[currentCharB] = (charMapB[currentCharB] || 0) + 1;
  }

  const keysA = Object.keys(charMapA);
  const keysB = Object.keys(charMapB);

  for (var key of keysA) {
    if (charMapA[key] !== charMapB[key]) {
      return false;
    }
  }

  return true;
};
