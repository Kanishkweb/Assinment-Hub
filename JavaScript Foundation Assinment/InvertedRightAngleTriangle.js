/**
 * Inverted Right angle pattern
 */

function pattern(input) {
  // Loop for the
  for (row = 0; row <= input; row++) {
    let str = "";
    for (j = row; j <= input; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}
let input = 6;
let result = pattern(input);

