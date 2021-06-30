/* exported compact */
function compact(array) {
  var arr = array;
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      continue;
    }
    newArray.push(arr[i]);
  }
  return newArray;
}
