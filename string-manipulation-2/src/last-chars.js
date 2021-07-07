/* exported lastChars */
function lastChars(length, string) {
  var reverse = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
    var revert = reverse.substring(0, length);
    var result = revert.split('').reverse().join('');
  }
  return result;
}
