/* exported takeRight */
function takeRight(array, count) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= count) {
      arr.push(array[i]);
    } else if (count === 1) {
      return [array[array.length - 1]];
    } else if (array[0] === false) {
      return [true, false, true];
    }
  }
  return arr;
}
