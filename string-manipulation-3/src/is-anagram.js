/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const firstArray = firstString.split(' ');
  const reunitedFirst = firstArray.join('');
  const firstReunion = reunitedFirst.split('').sort().join('');

  const secondArray = secondString.split(' ');
  const reunitedSecond = secondArray.join('');
  const secondReunion = reunitedSecond.split('').sort().join('');

  return firstReunion === secondReunion;
}
