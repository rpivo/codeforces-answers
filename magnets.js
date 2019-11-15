const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numOfMagnets, magnets = [], groups = 0;

rl.on('line', n => {
  if (!numOfMagnets) { numOfMagnets = n; } else {
    magnets.push(n);
    if (magnets.length === +numOfMagnets) {
      for (let i = 0; i < magnets.length; i++) {
        if (magnets[i] !== magnets[i - 1]) groups += 1;
      }
      console.log(groups);
      rl.close();
    }
  }
});