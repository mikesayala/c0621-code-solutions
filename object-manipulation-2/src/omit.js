/* exported omit */
function omit(source, keys) {
  var newObject = {};
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    if (!keys.includes(sourceKeys[i])) {
      newObject[sourceKeys[i]] = source[sourceKeys[i]];
    }
  }
  return newObject;
}
