const calculateTotalCost = (cart) => {
  let totalCost = 0;

  cart.forEach((item) => {
    totalCost += item.unitPrice * item.quantity;
  });

  return totalCost;
};

let customerCart = [
  { unitPrice: 10, quantity: 2 },
  { unitPrice: 15, quantity: 3 },
  { unitPrice: 20, quantity: 1 },
];

let finalOrderPrice = calculateTotalCost(customerCart);
console.log("Final Order Price:", finalOrderPrice);
