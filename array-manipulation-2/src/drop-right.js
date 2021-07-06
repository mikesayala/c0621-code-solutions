/* exported dropRight */
function dropRight(array, count) {
  var arr = [];
  for (var i = count; i < array.length; i++) {
    if (count > array.length) {
      return array;
    } else if (count <= array.length) {
      arr.unshift(array[i]);
    }
  }
  return arr;
}
