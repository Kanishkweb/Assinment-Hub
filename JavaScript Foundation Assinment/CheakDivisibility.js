function printNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 3 === 0 && num % 2 !== 0) {
      console.log(num);
    }
  }
}

// Example array
let numbers = [7, 9, 12, 18, 20, 27, 33, 44, 45];

console.log("Numbers divisible by 3 but not by 2:");
printNumbers(numbers);
