const pricesInUSD = {
    "item1": 20,   // Price in USD
    "item2": 35,
    "item3": 50,
};

const exchangeRate = 80; // 1 USD to 80 INR

const pricesInRupees = Object.keys(pricesInUSD).map(item => {
    return {
        [item]: pricesInUSD[item] * exchangeRate
    };
});

const convertedPrices = Object.assign({}, ...pricesInRupees);
console.log("Prices in INR:", convertedPrices);
