/* exported getKeys */
function getKeys(object) {
  var arr = [];
  for (var key in object) {
    if (key in object) {
      arr.push(key);
    }
  }
  return arr;
}
