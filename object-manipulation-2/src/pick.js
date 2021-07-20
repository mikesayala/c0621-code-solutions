/* exported pick */
// need to create a new object
// if the source.key is the same as the index in the array
// maybe i need to use a for in loop since we're dealing with keys in objects
// function pick(source, keys) {
//   var obj = {};
//   for (var i = 0; i < keys.length; i++) {
//     if (source[keys[i]]) {
//       obj[keys[i]] = source[keys[i]];
//     }
//   }
//   return obj;
// }
function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]]) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}
