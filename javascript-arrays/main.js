var colors = ['red', 'white', 'blue'];
console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

var usaColors = 'America is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.';
console.log(usaColors);

colors[2] = 'green';
var mexicoColors = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.';
console.log(mexicoColors);
console.log('value of colors:', colors);

var students = ['blade', 'laser', 'blazer', 'Fran'];
var numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' students in the class.');

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student in the array is', lastStudent);
console.log('value of students:', students);
