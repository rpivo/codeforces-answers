const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cases, arr = [], toBuy = [];

rl.on('line', n => {
  if (!cases) { cases = n } else {
    arr.push(n);
    cases--;
    if (cases === 0) {
      arr.map(Number).forEach(num => {
        num < 4 ? toBuy.push(4 - num) : num % 2 === 0 ? toBuy.push(0) : toBuy.push(1);
      });
      toBuy.forEach(num => console.log(num));
      rl.close();
    }
  }
});