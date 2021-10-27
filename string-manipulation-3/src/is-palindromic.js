/* exported isPalindromic */
function isPalindromic(string) {
  const newString = string.split(' ').join('');
  return newString === newString.split('').reverse().join('');
}
