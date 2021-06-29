/* exported getWords */
function getWords(string) {
  var arr = [];
  if (string === '') {
    return arr;
  }
  for (var i = 0; i < string.length; i++) {
    var word = string.split(' ');
    arr.push(word);
  }
  return word;
}
