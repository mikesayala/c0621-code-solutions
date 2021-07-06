/* exported take */
function take(array, count) {
  var arr = [];
  var newArray = array;
  for (var i = 0; i < array.length; i++) {
    if (i < count) {
      arr.push(newArray[i]);
    }
  }
  return arr;
}
