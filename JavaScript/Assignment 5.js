// ---------------------------------------
//   Q1. Counting Numbers 
// ---------------------------------------

for (let i = 1; i <= 15; i++) {
    console.log(i);
}

// ---------------------------------------
//   Q2. Even Numbers
// ---------------------------------------

for (let i = 2; i <= 40; i += 2) {
    console.log(i);
}

// ---------------------------------------
//   Q3. Odd Numbers
// ---------------------------------------

for (let i = 1; i <= 35; i += 2) {
    console.log(i);
}

// ---------------------------------------
//   Q4. Saving Money 
// ---------------------------------------


let total = 0;

for (let day = 1; day <= 10; day++) {
    total += day * 10;
}

console.log("Total savings after 10 days: ₹" + total);


// ---------------------------------------
//   Q5. Multiplication Table 
// ---------------------------------------

for (let i = 1; i <= 10; i++) {
    console.log("12 x " + i + " = " + (12 * i));
}

// ---------------------------------------
//   Q6. Daily Water Intake
// ---------------------------------------

let total = 0;

for (let day = 1; day <= 7; day++) {
    total += 3;
    console.log("Day " + day + ": " + total + " glasses");
}

// ---------------------------------------
//   Q7. Shopping Calculation 
// ---------------------------------------

for (let i = 1; i <= 10; i++) {
    console.log(i + " chocolates = ₹" + (i * 15));
}

// ---------------------------------------
//   Q8. Sum of Even Numbers 
// ---------------------------------------

let sum = 0;

for (let i = 2; i <= 30; i += 2) {
    sum += i;
}

console.log("Sum of even numbers: " + sum);

// ---------------------------------------
//  Q9. Weekly Exercise 
// ---------------------------------------

for (let day = 1; day <= 7; day++) {
    console.log("Day " + day + ": " + (day * 5) + " push-ups");
}

// ---------------------------------------
//  Q10. Movie Tickets 
// ---------------------------------------
for (let people = 1; people <= 8; people++) {
    console.log(people + " people: ₹" + (people * 150));
}
