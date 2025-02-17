// Task 1 Employee Salary Calculation 
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);
}

// Test Data 
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"

// Task 2 Product Price after Discount 
let calculateDiscount = (price, discountRate) => price - (price * discountRate);

// Test Data 
console.log(`Final Price: $${calculateDiscount(100, 0.2).toFixed(2)}`);
console.log(`Final Price: $${calculateDiscount(250, 0.15).toFixed(2)}`);


// Task 3 Service Fee Calculation 
let calculateServiceFee = (amount, serviceType) => {
    let fee = 0;
    if (serviceType === "Premium") {
        fee = amount * 0.15; // premium gets a 15% fee
    } else if (serviceType === "Standard") {
        fee = amount * 0.10; // standard gets a 10% fee
    } else if (serviceType === "Basic") {
        fee = amount * 0.05; // basic gets 5% fee
    }
    return fee; 
}; 

// Test Data 
console.log(calculateServiceFee(200, "Premium")); // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00")


// Task 4 Car Rental Cost Calculation 
function calculateRentalCost(days, carType, insurance = false){
    let dailyRate = 0;

    // Daily rates 
    if (carType === "Economy") {
        dailyRate = 40; 
    } else if (carType === "Standard") {
        dailyRate = 60; 
    } else if (carType === "luxury") {
        dailyRate = 100;
    }

    // Calculation 
    let totalCost = dailyRate * days;

    // Insurance 
    if (insurance) {
        totalCost += 20 * days; 
    }
    return totalCost
}

// Test data 
console.log(calculateRentalCost(3, "Economy", true));
console.log(calculateRentalCost(5, "Luxury", false));


// Task 5 Loan Payment Calculation 
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    return totalPayment;
}

// Test Data 
console.log(`Total Loan Payment: $${calculateLoanPayment(1000, 0.05, 2).toFixed(2)}`); 
console.log(`Total Loan Payment: $${calculateLoanPayment(5000, 0.07, 3).toFixed(2)}`); 

