const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numFriends, fenceHeight;

rl.on('line', n => {
  if (!numFriends && !fenceHeight) {
    n = n.split(' ').map(Number);
    numFriends = n[0];
    fenceHeight = n[1];
  } else {
    const width = n.split(' ').map(Number).reduce((acc, curr) => {
      return curr > fenceHeight ? acc + 2 : acc + 1;
    }, 0);
    console.log(width);
    rl.close();
  }
});