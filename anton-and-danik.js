const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let length;

rl.on('line', n => {
  if (!length) { length = n; } else {
    n = n.split('');
    const aCount = (n.filter(letter => letter === 'A')).length;
    const dCount = (n.filter(letter => letter === 'D')).length;
    const winner = aCount > dCount ? 'Anton' : aCount < dCount ? 'Danik' : 'Friendship';
    console.log(winner);
    rl.close();
  }
});