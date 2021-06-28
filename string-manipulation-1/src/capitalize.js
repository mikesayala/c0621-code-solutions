/* exported capitalize */
function capitalize(word) {
  for (var i = 0; i < word.length; i++) {
    var capitalizedWord = word.toLowerCase();
    var firstChar = word.charAt(0);
    var upperChar = firstChar.toUpperCase();
  }
  return upperChar + capitalizedWord.slice(1);
}
