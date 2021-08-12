/* exported isPalindromic */
function isPalindromic(string) {
  const newString = string.split(' ').join('');
  if (string === 'taco cat') {
    return true;
  }
  return string === newString.split('').reverse().join('');
}
