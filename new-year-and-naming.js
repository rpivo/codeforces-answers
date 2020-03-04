const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let yearLength = 0;

rl.on('line', n => {
  input.push(n);
  if (input.length <= (4 + yearLength)) {
    if (input.length === 4 && yearLength === 0) {
      yearLength = Number(n) - 1;
    }
  } else {
    let [ 
      sequenceLengths,
      firstSequence,
      secondSequence,
      yearLength,
      ...years 
    ] = input;
    firstSequence = firstSequence.split(' ');
    secondSequence = secondSequence.split(' ');
    for (let year of years) {
      year = Number(year);
      const getIndex = (year, sequence) => {
        if (year > sequence.length) {
          return (year % sequence.length) - 1 > -1 ?
            (year % sequence.length) - 1 : sequence.length - 1;
        }
        return year - 1;
      }
      console.log(`${firstSequence[getIndex(year, firstSequence)]
        }${secondSequence[getIndex(year, secondSequence)]}`);
    }
    rl.close();
  }
});

