const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  let number = parseInt(line, 10);
  let sentence = 'I hate';
  let feeling = 'love';

  for (index = 1; index <= number; index++) {
    if (number > 1 && index < number) sentence += ` that I ${feeling}`;
    feeling === 'love' ? feeling = 'hate' : feeling = 'love';
    index === number && (sentence += ' it');
  }

  console.log(sentence);

  rl.close();
});