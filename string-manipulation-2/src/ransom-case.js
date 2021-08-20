/* exported ransomCase */
// first i'll lowercase the string using toLowerCase method
// then i'll change the string into an array with the split method.
// then assign an array literal to a variable called newWord
// i'll loop through the array and inside the array use the modulus operator to determine
// which letters are uppercase and which letters are lowercase and push them into the array.
// then i'll turn the array back into a string with the join method.
function ransomCase(string) {
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
