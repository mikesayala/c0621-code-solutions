/* exported takeRight */
function takeRight(array, count) {
  var arr = [];
  if (array.length === 0) {
    return arr;
  }
  for (var i = array.length - count; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
