/* exported includesSeven */
function includesSeven(array) {
  var bool = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      bool = true;
      return bool;
    }
  }
  return false;
}
