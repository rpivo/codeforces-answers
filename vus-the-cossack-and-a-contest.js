const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', n => {
  let [participants, pens, notebooks] = n.split(' ').map(number => Number(number));
  participants <= pens && participants <= notebooks ? console.log('Yes') : console.log('No');
  return rl.close();
});