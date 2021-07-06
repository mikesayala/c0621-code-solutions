/* exported dropRight */
function dropRight(array, count) {
  var arr = [];
  for (var i = 0; i < array.length - count; i++) {
    arr[i] = array[i];
  }
  return arr;
}
