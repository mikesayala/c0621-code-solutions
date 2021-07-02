/* exported numVowels */
function numVowels(string) {
  var lowercase = string.toLowerCase();
  // var vowel = ['a', 'e', 'i', 'o', 'u'];
  var counter = 0;
  for (var i = 0; i < lowercase.length; i++) {
    if (lowercase[i] === 'a' || lowercase[i] === 'e' || lowercase[i] === 'i' || lowercase[i] === 'o' || lowercase[i] === 'u') {
      counter += 1;
    }
  }
  return counter;
}
