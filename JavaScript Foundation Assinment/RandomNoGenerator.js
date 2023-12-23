const randomNumGenerator = () => {
  return Math.floor(Math.random() * 100) + 1;
};

let result = randomNumGenerator();
console.log("Random number between 1 and 100:",result );
