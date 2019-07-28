let stdin = process.openStdin();

stdin.addListener("data", function(input) {
  let string = input.toString().trim().split(' ');
  let subtractedNumber = string[0];
  let count = string[1];

  for (count; count > 0; count--) {
    if (subtractedNumber % 10 === 0) {
      subtractedNumber = subtractedNumber / 10;
    } else {
      subtractedNumber--;
    }
  }

  console.log(subtractedNumber);
  process.exit();
});