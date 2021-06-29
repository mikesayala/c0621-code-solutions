/* exported isVowel */
function isVowel(character) {
  var char = character.toLowerCase();
  var vowel = 'aeiou';
  for (var i = 0; i < char.length; i++) {
    if (char.indexOf(vowel) === vowel[i]) {
      return true;
    }
  }
}
