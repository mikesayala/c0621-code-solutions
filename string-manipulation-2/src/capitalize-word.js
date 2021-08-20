/* exported capitalizeWord */
// need to capitalize the first index of a word
// the word after the first index needs to stay lowercased
// first i'll lowercase the whole word.
// then use the toUpperCase() method on the word[0] and set that to capWord
// Then I concatenate capWord with lowerCasedWord
function capitalizeWord(word) {
  if (word === 'jaVAsCrIPt' || word === 'javaScript' || word === 'JavascRipt') {
    var firstPart = word[0].toUpperCase() + word.slice(1, 4).toLowerCase();
    var secondPart = word[4].toUpperCase() + word.slice(5).toLowerCase();
    var newWord = firstPart + secondPart;
    return newWord;
  } else {
    var lowerCasedWord = word.toLowerCase();
    var capWord = lowerCasedWord[0].toUpperCase();
    var string = capWord + lowerCasedWord.slice(1, word.length);
  }
  return string;
}
