/* exported titleCase */
function titleCase(title) {
  var arr = title.split(' ');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > 2 || arr[i] === arr[0] || arr === 'an' || arr !== 'to') {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }
  var test = arr.join(' ');
  return test;
}
