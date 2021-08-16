/* exported reverseWords */
function reverseWords(string) {
  let reversed = [];
  const splitString = string.split(' ');
  for (let i = 0; i < splitString.length; i++) {
    reversed.push(splitString[i].split('').reverse().join(''));
  }
  reversed = reversed.join(' ');
  return reversed;
}
