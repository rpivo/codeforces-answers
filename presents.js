const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let friendCount, friendNums = [];

rl.on('line', n => {
  if (!friendCount) { friendCount = n } else {
    n = n.split(' ').map(Number);
    let min = Math.min(...n);
    let max = Math.max(...n);
    for (min; min <= max; min++) {
      friendNums.push(n.indexOf(min) + 1);
    }
    console.log(...friendNums);
    rl.close();
  }
});