const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log('evenNumbers:', evenNumbers);

const overFive = numbers.filter(x => x > 5);
console.log('overFive:', overFive);

const stayWithE = names.filter(x => x[0] === 'E');
console.log('stayWithE:', stayWithE);

const haveD = names.filter(x => x.includes('d') || x.includes('D'));
console.log('haveD:', haveD);
