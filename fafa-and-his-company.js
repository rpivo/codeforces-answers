const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (employees) => {
  let teamLeaders = ways = 0;
  for (let index = 1; index < employees; index++) {
    if (teamLeaders >= employees) {
      console.log(ways);
      return rl.close();
    } else if ((employees - index) % (teamLeaders + index) === 0) {
      teamLeaders += index;
      employees -= index;
      ways += 1;
      index -= index;
    }
  }
  console.log(ways);
  return rl.close();
});