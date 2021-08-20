/* exported invert */
function invert(source) {
  var object = {};
  for (var key in source) {
    var value = source[key];
    object[value] = key;
  }
  return object;
}
