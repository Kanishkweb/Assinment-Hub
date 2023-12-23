let str = "america";
let count = 0;
function vowelCounter(str) {
  for (i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;

      default:
        break;
    }
  }
  return count;
}

let result = vowelCounter(str);
console.log(result);
