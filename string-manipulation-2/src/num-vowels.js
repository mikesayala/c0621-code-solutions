/* exported numVowels */
function numVowels(string) {
  var lowercase = string.toLowerCase();
  var vowel = 'aeiou';
  var counter = 0;
  for (var i = 0; i < lowercase.length; i++) {
    if (lowercase[i] === vowel[i]) {
      counter++;
    }
  }
  return counter;
}
