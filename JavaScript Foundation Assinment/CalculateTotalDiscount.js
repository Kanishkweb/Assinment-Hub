const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    let discountAmount = originalPrice - discountedPrice;
    let discountPercentage = (discountAmount / originalPrice) * 100;
    
    return discountPercentage.toFixed(2);
  };
  
  // Example prices
  let originalPrice = 50;
  let discountedPrice = 30;
  
  let discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log("Discount Percentage:", discountPercentage + "%");
  