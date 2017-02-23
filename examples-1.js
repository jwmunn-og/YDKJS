
/* “You should set up some constants for the “tax rate,” 
“phone price,” “accessory price,” and “spending threshold,” 
as well as a variable for your “bank account balance.”
*/
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 1303.91;
var amount = 0;

function calculateTax(amount){
  return amount * TAX_RATE;
}

function formatAmount(amount){
  return "$" + amount.toFixed( 2 );
}

// Keep purchasing phones until you run out of money
while (amount < bank_balance) {
  amount = amount + PHONE_PRICE;
  // Add accessories if lower than your balance
  if (amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }
  console.log("A phone purchase.");
}

amount = amount + calculateTax(amount);

console.log(
  "Your Purchase: " + formatAmount(amount)
);
  // Check against bank account to see if you can afford it

if (amount > bank_balance) {
  console.log(
    "You can't afford this purchase. :("
  );
}