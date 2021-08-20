/* exported truncate */
function truncate(length, string) {
  var truncatedString = string.slice(string[0], length) + '...';
  return truncatedString;
}
