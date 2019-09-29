const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let card, hand;

rl.on('line', (line) => {
  !card ? card = new Set(line) : hand = new Set(line.replace(/\s/g, ''));
  if (card && hand) {
    for (const char of hand) {
      if (card.has(char)) {
        rl.close();
        return console.log('YES');
      }
    }
    rl.close();
    return console.log('NO');
  }
});