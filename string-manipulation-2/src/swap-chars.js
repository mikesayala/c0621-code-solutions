/* exported swapChars */
// i need to create two variables one for the first index and one for the second index
// i need to split the string into an array.
// i need to get the indexes and swap them by setting their indexes to each other.
// then im turning it back into a string.
function swapChars(firstIndex, secondIndex, string) {
  var first = firstIndex;
  var second = secondIndex;
  var stringSplit = string.split('');
  [stringSplit[first], stringSplit[second]] = [stringSplit[second], stringSplit[first]];
  var result = stringSplit.join('');
  return result;

}
