const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num, str, binary = '';

rl.on('line', n => {
  !num ? num = n : str = n;
  if (num && str) {
    while (str.includes('n')) {
      binary += '1 ';
      ['o', 'n', 'e'].forEach(letter => str = str.replace(letter, ''));
    }
    while (str.includes('z')) {
      binary += '0 ';
      ['z', 'e', 'r', 'o'].forEach(letter => str = str.replace(letter, ''));
    }
    console.log(binary.trim());
    rl.close();
  } 
});