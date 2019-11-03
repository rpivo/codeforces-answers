const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', n => {
  const a = Array.from(n).filter(letter => letter === 'a').length;
  console.log((a > (n.length / 2)) ? n.length : (a + (a - 1)));
  rl.close();
});