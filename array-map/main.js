const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];
const double = numbers.map(x => x * 2);
console.log('double:', double);

const price = numbers.map(x => '$' + x.toFixed(2));
console.log(price);

const upperCased = languages.map(x => x.toUpperCase());
console.log(upperCased);

const firstLetters = languages.map(x => x[0]);
console.log(firstLetters);
