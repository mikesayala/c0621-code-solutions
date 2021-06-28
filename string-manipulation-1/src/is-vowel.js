/* exported isVowel */
function isVowel(character) {
  var vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i = 0; i < character.length; i++) {
    if (character !== vowel[i]) {
      return true;
    }
  }
}
