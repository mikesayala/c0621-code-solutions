/* exported getValues */
function getValues(object) {
  var arr = [];
  for (var key in object) {
    var value = object[key];
    arr.push(value);
  }
  return arr;
}
