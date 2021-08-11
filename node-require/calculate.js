const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = process.argv[2];
const y = process.argv[4];

if (process.argv[3] === 'plus') {
  console.log('result:', add(parseInt(x), parseInt(y)));
}
if (process.argv[3] === 'minus') {
  console.log('result:', subtract(x, y));
}
if ((process.argv[3] === 'times')) {
  console.log('result:', multiply(x, y));
}
if ((process.argv[3] === 'divided')) {
  console.log('result:', divide(x, y));
}
