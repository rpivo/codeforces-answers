const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineNumber = 0, n;

rl.on('line', (line) => {
  lineNumber += 1;

  lineNumber === 1 && (n = line);

  if (lineNumber === 2) {
    let answers = line;
    answers.includes('1') ? console.log('HARD') : console.log('EASY');
    rl.close();
  }
});