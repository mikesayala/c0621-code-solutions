/* exported titleCase */
function titleCase(title) {
  var arr = title.split(' ');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'the' && i === 0) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
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
  var test = arr.join(' ');
  return test;
}
