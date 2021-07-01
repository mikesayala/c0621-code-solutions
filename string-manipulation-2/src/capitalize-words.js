/* exported capitalizeWords */
function capitalizeWords(string) {
  var word = string.split(' ');
  var arr = [];
  for (var i = 0; i < word.length; i++) {
    var fullWord = word[i].charAt(0).toUpperCase();
    arr.push(fullWord + word[i].slice(1).toLowerCase());
  }
  return arr.join(' ');
}
