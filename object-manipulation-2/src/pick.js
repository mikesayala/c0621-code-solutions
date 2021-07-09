/* exported pick */
// need to create a new object
// if the source.key is the same as the index in the array
// maybe i need to use a for in loop since we're dealing with keys in objects
function pick(source, keys) {
  var result = {};
  for (var key in source) {
    if (keys.includes(key)) {
      result[key] = source[keys];
    }
  }
  return result;
}
