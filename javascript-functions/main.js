function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('There are' + ' ' + convertMinutesToSecondsResult + ' ' + 'seconds');

function greet(name) {
  return 'Hey,' + ' ' + name;
}
var greetResult = greet('Mike');
console.log('result:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var getAreaResult = getArea(2, 3);
console.log('The area is', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var getFirstNameResult = getFirstName({ firstName: 'Sand', lastName: 'Wich' });
console.log('The first name is', getFirstNameResult);

function getLastElement(array) {
  var lastEl = array[array.length - 1];
  return lastEl;
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('The last element is', getLastElementResult);
