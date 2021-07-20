/* exported numVowels */
// I need to find how many vowels are in a string.
// first i'll lowercase the string
// set a counter variable to 0;
// loop through the string and if the string index is equal to a vowel increment the counter variable
function numVowels(string) {
  var lowercase = string.toLowerCase();
  var counter = 0;
  for (var i = 0; i < lowercase.length; i++) {
    if (lowercase[i] === 'a' || lowercase[i] === 'e' || lowercase[i] === 'i' || lowercase[i] === 'o' || lowercase[i] === 'u') {
      counter += 1;
    }
  }
  return counter;
}
