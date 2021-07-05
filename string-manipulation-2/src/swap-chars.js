/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  newString = string.charAt(secondIndex) + string.substring(1, string.length - 1) + string.charAt(0);
  return newString;
}
