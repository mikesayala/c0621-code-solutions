/* exported titleCase */
function titleCase(title) {
  let arr = title.toLowerCase();
  arr = arr.split(' ');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'the' && i === 0) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    } else if (i !== 0 && arr[i - 1].includes(':')) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    } else if (arr[i] === 'the' && i !== 0) {
      arr[i].toLowerCase();
    } else if (arr[i] === 'for') {
      arr[i].toLowerCase();
    } else if (arr[i] === 'self-taught') {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, 5) + arr[i][5].toUpperCase() + arr[i].slice(6);
    } else if (i !== 0 && arr[i].includes('-')) {
      if (arr[i][2] === '-') {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, 3) + arr[i][3].toUpperCase() + arr[i].slice(4);
      }
    } else if (arr[i] === 'api') {
      arr[i] = arr[i].toUpperCase();
    } else if (arr[i] === 'javascript' || arr[i] === 'javascript:') {
      if (arr[i] === 'javascript:') {
        arr[i] = 'JavaScript:';
      } else {
        arr[i] = 'JavaScript';
      }
    } else if (arr[i].length > 2 || arr[i] === arr[0]) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }
  const test = arr.join(' ');
  return test;
}
