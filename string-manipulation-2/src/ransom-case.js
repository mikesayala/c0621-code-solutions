/* exported ransomCase */
function ransomCase(string) {
  var str = '';
  for (var i = 0; i < string.length; i++) {
    str = string.substr(0, i) + string[i].toUpperCase() + string.substr(i + 1);
  }
  return str;
}
