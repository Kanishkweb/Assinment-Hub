function calculateBillPerPerson(costPerDish, numberOfPeople) {
  let totalBill = costPerDish.reduce((acc, val) => acc + val, 0);
  let billPerPerson = totalBill / numberOfPeople;

  return {
    totalBill: totalBill,
    billPerPerson: billPerPerson,
  };
}

// Example cost of each dish
let costOfDishes = [25, 30, 15, 20];
let peopleSharing = 4;

let billDetails = calculateBillPerPerson(costOfDishes, peopleSharing);

console.log("Total Bill:", billDetails.totalBill);
console.log("Bill per Person:", billDetails.billPerPerson);
