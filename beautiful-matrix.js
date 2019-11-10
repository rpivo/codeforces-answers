const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let matrix = [], location = [];

rl.on('line', n => {
  matrix.push(n.split(' ').map(Number));
  if (matrix.length === 5) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].includes(1)) {
        location.push(i, matrix[i].indexOf(1));
        break;
      }
    }

    console.log(Math.abs(location[0] - 2) + Math.abs(location[1] - 2));
    rl.close();
  }
});