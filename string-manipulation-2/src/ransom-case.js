/* exported ransomCase */
function ransomCase(string) {
  // for (var i = 0; i < string.length; i = i + 2) {
  //   string = string.substr(0, i) + string[i].toLowerCase() + string.substr(i + 1).toUpperCase();
  // }
  // return string;
  var lowerCase = string.toLowerCase();
  var split = lowerCase.split('');
  var newWord = [];
  for (var i = 0; i < split.length; i++) {
    var index = i % 2;
    if (index === 1) {
      var bigLetter = split[i].toUpperCase();
      newWord.push(bigLetter);
    } else {
      var smolLetter = split[i].toLowerCase();
      newWord.push(smolLetter);
    }
  }
  return newWord.join('');
}
