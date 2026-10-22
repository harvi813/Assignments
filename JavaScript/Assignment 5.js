//==========================================
// Part A] For Loop
//==========================================


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


//==================================================
// Part B] For Loop (Additional advanced questions)
//==================================================

//1 ------------------------------------------------------------------------------------
let temp = [28, 32, 25, 40, 18, 35];
let count = 0;

for (let i = 0; i < temp.length; i++) {
    if (temp[i] > 30) {
        count++; 
    }
}
console.log("Hot days:", count);

//2 -----------------------------------------------------------------------------------
let num = 4729;
let sum = 0;

for (; num > 0; num = Math.floor(num / 10)) {
    sum += num % 10;
}

console.log("Sum:", sum);

//3 -----------------------------------------------------------------------------------
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
        console.log(i);
    }
}

//4 ------------------------------------------------------------------------------------

let str = "JavaScript";
let consts = "";

for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();

    if (
        ch !== "a" &&
        ch !== "e" &&
        ch !== "i" &&
        ch !== "o" &&
        ch !== "u"
    ) {
        consts += str[i];
    }
}

console.log(consts);


//5 ------------------------------------------------------------------------------------

let numbers = [12, 45, 7, 89, 34, 67];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

//6 ------------------------------------------------------------------------------------

let num = 28;
let sum = 0;

for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        sum += i;
    }
}

if (sum === num) {
    console.log("Perfect number");
} else {
    console.log("Not a perfect number");
}

//7 ------------------------------------------------------------------------------------

let num = 1;

for (let i = 1; i <= 8; i++) {
    console.log(num);
    num *= 2;
}

//8 ------------------------------------------------------------------------------------

let a = 0;
let b = 1;

for (let i = 1; i <= 20; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}

//9 ------------------------------------------------------------------------------------

let scores = [45, 78, 90, 32, 56, 88];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

let average = sum / scores.length;
let count = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > average) {
        count++;
    }
}

console.log("Average:", average);
console.log("Students above average:", count);

//10 ------------------------------------------------------------------------------------

let num = 13;
let binary = "";

for (; num > 0; num = Math.floor(num / 2)) {
    let remainder = num % 2;
    binary = remainder + binary;
}

console.log("Binary:", binary);

