/* exported lastChars */
// i need to get the last part of a string.
// i'll then set a variable reverse to an empty string.
// i'll use a reverse for loop to access the back half of the string.
// i'll add each index of the string to the reverse variable.
// i need to use the substring method to take the length of the string I need.
// Then i need to split the string into an array, reverse the array and join the string together again.
function lastChars(length, string) {
  var reverse = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
    var revert = reverse.substring(0, length);
    var result = revert.split('').reverse().join('');
  }
  return result;
}
