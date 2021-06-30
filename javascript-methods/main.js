var one = 1;
var two = 2;
var three = 3;

var maximumValue = Math.max(one, two, three);
console.log('value of maximumValue:', maximumValue);

var heroes = ['Saitama', 'Naruto', 'Green Lantern', 'Spider-Man'];
var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [{
  title: 'The Adventures of Captain Underpants',
  author: 'Dav Pickley'
},
{
  title: 'Harry Potter and the Prisoner of Azkaban',
  author: 'J.K. Rowling'
},
{
  title: 'The Lord of the Rings',
  Author: 'J.R.R Tolkien'
}];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Mike Ayala';
var firstAndLastName = fullName.split(' ');
console.log('value of FirstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
