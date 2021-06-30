/* exported toObject */
function toObject(keyValuePair) {
  var obj = {};
  for (var i = 0; i < keyValuePair.length - 1; i = i + 2) {
    obj[keyValuePair[i]] = keyValuePair[i + 1];
  }
  return obj;
}
