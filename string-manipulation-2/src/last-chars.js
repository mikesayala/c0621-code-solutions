/* exported lastChars */
function lastChars(length, string) {
  var word = '';
  for (var i = 0; i < string.length; i++) {
    word += string[i];
  }
  return word;
}
