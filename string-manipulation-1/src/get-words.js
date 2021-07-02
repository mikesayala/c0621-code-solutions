/* exported getWords */
function getWords(string) {
  var arr = [];
  if (string === '') {
    return arr;
  } else {
    return string.split(' ');
  }
}
