function generateRandomNumberWithDelay(delayInSeconds) {
    let timeLeft = delayInSeconds;

    const countdown = setInterval(() => {
        console.log(`Generating random number in ${timeLeft} second(s)...`);
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdown);
            const randomNumber = Math.floor(Math.random() * 100); // Generating a random number between 0 and 99
            console.log(`Random number generated: ${randomNumber}`);
        }
    }, 1000);
}

// Example usage: Generate a random number after a delay of 3 seconds
const delay = 3;
generateRandomNumberWithDelay(delay);
