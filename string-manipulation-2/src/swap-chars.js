/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var first = firstIndex;
  var second = secondIndex;
  var stringSplit = string.split('');
  [stringSplit[first], stringSplit[second]] = [stringSplit[second], stringSplit[first]];
  var result = stringSplit.join('');
  return result;

}
