// Example array of marks
const marks = [78, 92, 85, 68, 97];

// Finding the highest marks using the ternary operator
const highestMarks = marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);

// Displaying the highest marks
console.log(`The highest marks scored by a student in the class: ${highestMarks}`);
