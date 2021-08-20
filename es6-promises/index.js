const takeAChance = require('./take-a-chance');

const promise1 = takeAChance('Mike');

promise1.then(resolve => {
  console.log(resolve);
});

promise1.catch(error => {
  console.log(error.message);
});
