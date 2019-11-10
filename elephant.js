const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let steps = 0;

rl.on('line', n => {
  if (n < 5) {
    console.log(++steps);
    rl.close();
  } else {
    steps += n / 5;
    console.log(Number.isInteger(steps) ? steps : Math.floor(steps) + 1);
    rl.close();
  }
});