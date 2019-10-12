const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', n => {
  n % 2 === 0 ? console.log('Mahmoud') : console.log('Ehab');
  return rl.close();
});