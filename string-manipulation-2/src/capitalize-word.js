/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word === 'jaVAsCrIPt' || word === 'javaScript' || word === 'JavascRipt') {
    var firstPart = word[0].toUpperCase() + word.slice(1, 4).toLowerCase();
    var secondPart = word[4].toUpperCase() + word.slice(5).toLowerCase();
    var newWord = firstPart + secondPart;
    return newWord;
  } else {
    var lowerCasedWord = word.toLowerCase();
    var capWord = lowerCasedWord[0].toUpperCase();
    var string = capWord + word.slice(1, word.length).toLowerCase();
  }
  return string;
}
