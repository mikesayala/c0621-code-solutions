/* exported isVowel */
function isVowel(character) {
  var vowel = 'aeiou';
  for (var i = 0; i < vowel.length; i++) {
    if (character.toLowerCase() === vowel[i]) {
      return true;
    }
    if (character.toLowerCase() !== vowel[i]) {
      return false;
    }
  }
}
