function doubleCartQuantities(cart) {
    let doubledCart = cart.map(quantity => quantity * 2);
    return doubledCart;
  }
  
  // Example cart array
  let cart = [1, 2, 3, 4, 5];
  
  console.log("Original Cart:", cart);
  
  let correctedCart = doubleCartQuantities(cart);
  
  console.log("Corrected Cart:", correctedCart);
  