var student = {
  firstName: 'Mike',
  lastName: 'Ayala',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'shift lead';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of students previous occupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'toyota',
  model: 'supra',
  year: 2021
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'bacon',
  type: 'pig'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
