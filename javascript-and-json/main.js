var array = [
  {
    isbn: '9780545504928',
    title: 'Captain Underpants and the Sensational Saga of Sir Stinks-a-Lot',
    author: 'Dav Pilkey'
  },
  {
    isbn: '9780545871877',
    title: 'Captain Underpants and the Perilous Plot of Professor Poopypants',
    author: 'Dav Pilkey'
  },
  {
    isbn: '9781338216233',
    title: 'Captain Underpants and the Wrath of the Wicked Wedgie Woman',
    author: 'Dav Pilkey'
  }
];

console.log('typeof array:', typeof array);

var jason = JSON.stringify(array);
console.log('typeof jason:', typeof jason);

var student = '{"numberId": "1", "StringName": "Mike Ayala"}';
console.log('typeof student:', typeof student);
var JSONStudent = JSON.parse(student);
console.log('typeof JSONStudent:', typeof JSONStudent);
