// Write your solution in this file!


// Task 1: Declare customerName to be 'bob' in global scope
var customerName = 'bob';

// Task 2: Write a function that modifies customerName
function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}

// Task 3: Write a function that declares and assigns a variable in global scope
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Task 4: Write a function that overwrites the best customer variable
function overwriteBestCustomer() {
  bestCustomer = 'still not bob';
}

// Task 5: Declare a constant in global scope and write a function that tries to reassign it
const leastFavoriteCustomer = 'John Doe';

function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = 'Jane Smith';
  } catch (error) {
    // Handle the error if needed.
  }
}

// Export the functions if needed
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer,
};


