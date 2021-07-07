/* exported chunk */
function chunk(array, size) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    var lastArr = arr[arr.length - 1];
    if (!lastArr || lastArr.length === size) {
      arr.push([array[i]]);
    } else {
      lastArr.push(array[i]);
    }
  }
  return arr;
}
