function reverseString(input) {
    setTimeout(() => {
        let reversed = input.split('').reverse().join('');
        console.log("Reversed string:", reversed);
    }, 2000);
}

let inputString = "kanishk";
console.log("Original string:", inputString);
reverseString(inputString);
