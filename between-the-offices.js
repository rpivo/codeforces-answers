const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let days, toSF = toSea = 0;

rl.on('line', n => {
  if (!days) { days = n } else {
    n.toLowerCase().split('')
      .forEach((letter, i, arr) =>
          (letter !== arr[i - 1] && i !== 0) && (letter === 'f' ? toSF++ : toSea++));
    console.log(toSF > toSea ? 'YES' : 'NO');
    rl.close();
  }
});