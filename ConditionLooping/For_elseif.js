let numbers = [10, -5, 0, 7, -2];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    console.log(numbers[i] + " Positive");
  } else if (numbers[i] < 0) {
    console.log(numbers[i] + " Negative");
  } else {
    console.log(numbers[i] + " Zero");
  }
}
