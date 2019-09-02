const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;

const compare = (a, b, count) => {
    a > b ? console.log(count) : compare((a * 3), (b * 2), ++count);
}

rl.on('line', (line) => {
  let array = line.toString().trim().split(' ').map(Number);

  compare(array[0], array[1], count);

  rl.close();
});