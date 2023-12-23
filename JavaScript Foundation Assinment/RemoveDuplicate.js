function removeDuplicates(cart) {
    // Create a new Set to store unique items
    let uniqueCart = new Set(cart);

    // Convert the Set back to an array to maintain the order
    let newCart = [...uniqueCart];
    
    return newCart;
}


let customerCart = ['item1', 'item2', 'item1', 'item3', 'item2', 'item4'];

// Call the function to remove duplicates
let updatedCart = removeDuplicates(customerCart);
console.log("Cart without duplicates:", updatedCart);
