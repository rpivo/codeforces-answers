const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  let numbers = [];
  let addedNumbers = line.split(' ').map(Number);
  let abc = Math.max(...addedNumbers);
  addedNumbers.splice(addedNumbers.indexOf(abc), 1);
  addedNumbers.forEach((number) => {
    numbers.push(abc - number);
  });

  console.log(...numbers);
});