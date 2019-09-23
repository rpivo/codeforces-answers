const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const denominations = [100, 20, 10, 5, 1];
  let sum = 0;
  num = Number(line);
  denominations.forEach(bill => {
    while(num >= bill) {
      sum += 1;
      num -= bill;
    }
  });
  console.log(sum);
  rl.close();
});