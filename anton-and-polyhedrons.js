const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const polyhedrons = {
  Tetrahedron: 4,
  Cube: 6,
  Octahedron: 8,
  Dodecahedron: 12,
  Icosahedron:20,
}
let sum = 0, count = 0, int;

rl.on('line', (line) => {
  if (typeof int !== 'undefined' && line in polyhedrons) {
    sum += polyhedrons[line];
    if (++count === Number(int)) {
      console.log(sum);
      rl.close()
    }
  } else int = line;
});