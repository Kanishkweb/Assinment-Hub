// Function to create a new customer account
function createAccount(name, initialBalance) {
    return {
      name: name,
      balance: initialBalance,
      deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposit of Rs. ${amount} successful. Current balance: Rs. ${this.balance}`);
      },
      withdraw: function(amount) {
        if (this.balance >= amount) {
          this.balance -= amount;
          console.log(`Withdrawal of Rs. ${amount} successful. Current balance: Rs. ${this.balance}`);
        } else {
          console.log("Insufficient funds. Withdrawal unsuccessful.");
        }
      }
    };
  }
  
  let customer = createAccount("Kanishk", 5000);
  
  customer.deposit(2000);
  customer.withdraw(1500);
  customer.withdraw(7000); 
  