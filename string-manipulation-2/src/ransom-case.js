/* exported ransomCase */
function ransomCase(string) {
  for (var i = 0; i < string.length; i = i + 2) {
    string = string.substr(0, i) + string[i].toLowerCase() + string.substr(i + 1).toUpperCase();
  }
  return string;
}
