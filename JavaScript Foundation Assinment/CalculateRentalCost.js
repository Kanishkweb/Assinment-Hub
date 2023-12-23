function calculateRentalCost(daysRented, carType) {
    let rentalCostPerDay = 0;
  
    // Determine rental cost per day based on car type
    switch (carType.toLowerCase()) {
      case 'economy':
        rentalCostPerDay = 4000; // Rs. 4,000
        break;
      case 'midsize':
        rentalCostPerDay = 15000; // Rs. 15,000
        break;
      case 'luxury':
        rentalCostPerDay = 20000; // Rs. 20,000
        break;
      default:
        return "Invalid car type. Please choose from Economy, Midsize, or Luxury.";
    }
  
    let totalCost = rentalCostPerDay * daysRented;
    return totalCost;
  }
  
  // Example usage:
  let days = 5;
  let carType = 'midsize';
  
  let totalRentalCost = calculateRentalCost(days, carType);
  console.log(`Total rental cost for ${days} days of ${carType} car: Rs. ${totalRentalCost}/-`);
  