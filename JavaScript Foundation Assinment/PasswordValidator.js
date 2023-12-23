const prompt = require("prompt-sync")();
const enteredPassword = prompt("Enter a password !");
const confirmPassword = prompt("Enter again password to reclarify !");

if (enteredPassword === confirmPassword) {
  console.log("Password Matched");
} else {
  console.log("Password did not matched.");
}
