/* exported capitalizeWords */
// i need to capitalize the beginning of a word in a string and lowercase everything else
// first i'll split the string into an array.
// then i'll loop through the array and uppercase the first index of the array using the toUpperCase method and put
// that in a variable.
// then i'll push the variable concatenated with the rest of the indexes into a new string
// lastly i'll turn them back into a string using the join method.
function capitalizeWords(string) {
  var word = string.split(' ');
  var arr = [];
  for (var i = 0; i < word.length; i++) {
    var fullWord = word[i].charAt(0).toUpperCase();
    arr.push(fullWord + word[i].slice(1).toLowerCase());
  }
  return arr.join(' ');
}
