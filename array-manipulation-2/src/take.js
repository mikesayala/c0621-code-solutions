/* exported take */
function take(array, count) {
  var arr = [];
  var newArray = array;
  if (count > array.length) {
    return arr;
  }
  for (var i = 0; i < count; i++) {
    arr.push(newArray[i]);
  }
  return arr;
}
