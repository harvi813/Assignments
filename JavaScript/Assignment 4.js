// =====================================================
// ASSIGNMENT: Conditional Statements
// =====================================================


// -----------------------------------------------------
// A] if Statement
// -----------------------------------------------------

//1
let num=15;
if (num%5==0){
  console.log("Divisible by 5")
}

// 2
let age = 60;
if(age >= 60){
    console.log("Senior Citizen")
}

//3
let num = 102;
if(num > 100){
    console.log("Big Number")
}

//4.
let temperature = 5;
if(temperature <10){
    console.log("Very Cold")
}

//5
let marks =100;
if (marks == 100){
    console.log("Perfect Score")
}

//6
let num = -1;
if (num<0){
    console.log("Negative Number")
}

//7
let x = "";
if (x==""){
    console.log("No input provided")
}

//8
let year = 2000;
if(year%100==0){
    console.log("Century Year")
}

//9
let num =12;
if (num %2==0 && num>=0){
    console.log("Positive Even Number")
}

//10
let marks=39;
if(35<=marks<100){
    console.log("Valid Marks")
}

// -----------------------------------------------------
//B] if...else Statement
// -----------------------------------------------------

// 1
let num = 4;
if(num%2==0){
    console.log("Even Number")
}else{
    console.log("Odd Number")
}

// 2
let age = 35;
if(age>=18){
    console.log("Eligible")
}else{
    console.log("Not Eligible")
}

// 3
let num = 1;
if (num>=0){
    console.log("positive number")
}else{
    console.log("Negative Number")
}

// 4
let marks=35;
if(marks>=35){
    console.log("passed")
}else{
    console.log("failed")
}

// 5
let ch = "A";
if (ch >= "A" && ch <= "Z") {
    console.log("Uppercase letter");
} else {
    console.log("Not an uppercase letter");
}

// 6
let num = 6;
if(num%3==0){
    console.log("Number is divisible by 3")
}else{
    console.log("Number is niot divisible by 3")
}

// 7
let password="admin123"
if(password=="admin123"){
    console.log("Login Successful")
}else{
    console.log("Incorrect Password")
}

//8
let year=2026;
if(year%4==0){
    console.log("leap year")
}else{
    console.log("Not a leap year")
}

//9
let a = 10;
let b = 20;
if (a > b) {
    console.log("a is greater");
} else {
    console.log("b is greater");
}

//10
let num = -5;
if (num > 0) {
    console.log("Positive number");
} else {
    if (num < 0) {
        console.log("Negative number");
    } else {
        console.log("Zero");
    }
}

// -----------------------------------------------------
// C] if...else if...else Statement
// -----------------------------------------------------

//1
let month = 2;
if (month == 12 || month == 1 || month == 2) {
    console.log("Winter");
}else if (month >= 3 && month <= 5) {
    console.log("Summer");
}else if (month >= 6 && month <= 8) {
    console.log("Monsoon");
}else if (month >= 9 && month <= 11) {
    console.log("Autumn");
}else {
    console.log("Invalid month");
}

//2
let income = 15;
let tax;
if (income < 300000) {
    tax = 0;
}else if (income <= 700000) {
    tax = income * 5 / 100;
}else if (income <= 1000000) {
    tax = income * 10 / 100;
}else {
    tax = income * 15 / 100;
}
console.log("Tax amount = ₹" + tax);

//3
let score = 40;
if (score >= 90) {
    console.log("Outstanding");
}else if (score >= 70) {
    console.log("Good");
}else if (score >= 40) {
    console.log("Average");
}else {
    console.log("Needs Improvement");
}

//4
let speed = 50;
if (speed < 40) {
    console.log("Slow");
}else if (speed <= 80) {
    console.log("Normal");
}else {
    console.log("Fast");
}

//5
let height = 150;
if (height < 150) {
    console.log("Short");
}else if (height <= 170) {
    console.log("Average");
}else {
    console.log("Tall");
}

//6
let day = 4;
if (day >= 1 && day <= 5) {
    console.log("Weekday");
}else if (day == 6 || day == 7) {
    console.log("Weekend");
}else {
    console.log("Invalid day number");
}

// 7
let units =40;
let bill;
if(0<=units<=50){
    bill=units*2
}else if(51<=units<=150){
    bill=units*4
}else{
    bill=units*6
}
console.log("the total bill",bill)

//8
let attendance = 45;
if (attendance >= 90 && attendance <= 100) {
    console.log("Excellent");
}else if (attendance >= 75) {
    console.log("Good");
}else if (attendance >= 50) {
    console.log("Satisfactory");
}else if (attendance >= 0) {
    console.log("Poor");
}else {
    console.log("Invalid attendance");
}

//9
let a = 100;
let b = 200;
let c = 300;
if (a >= b && a >= c) {
    console.log("Highest marks = " + a);
}else if (b >= a && b >= c) {
    console.log("Highest marks = " + b);
}else {
    console.log("Highest marks = " + c);
}

//10
let num = 64;
if (num == 0) {
    console.log("Zero");
}else if (num > 0 && num % 2 == 0) {
    console.log("Positive Even");
}else if (num > 0 && num % 2 != 0) {
    console.log("Positive Odd");
}else if (num < 0 && num % 2 == 0) {
    console.log("Negative Even");
}else {
    console.log("Negative Odd");
}

// -----------------------------------------------------
// D] Nested if Statement
// -----------------------------------------------------

//1
let num=40;
if(num>10){
    if(num%3==0){
        console.log("number is greater than 10 and divisible by 3")
    }
}

//2
let age = 19;
let voterId = true;
if(age>=18){
    if(voterId==true){
        console.log("Can Vote")
    }
}

//3
let marks = 40;
let score = 80;
if(marks>=40){
    if(score>=80){
        console.log("Passed with Distinction")
    }
}

//4
let pin = 1234;
let balance = 5000;
let amount = 1000;
if (pin == 1234) {
    if (amount <= balance) {
        balance = balance - amount;
        console.log("Withdrawal successful");
        console.log("Remaining balance:", balance);
    }
}

//5
let year = 2026;
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("it is a leap year")
        }
    }
}

//6
let email = "diya123@gmail.com";

if (email.includes("@")) {
    if (email.endsWith(".com")) {
        if (email.length > 10) {
            console.log("Valid Email");
        }
    }
}

//7
let total = 1500;
let premium = true;
let discount;
if(total>=1000){
    if(premium==true){
       discount=total*20/100 
    }
    else{
        discount=total*10/100
    }
}
console.log("discount",discount)

//8
let num =40;
if(num>=0){
    if(num%2==0){
        if(num%4==0){
            console.log("Positive Even and Divisible by 4")
        }
    }
}

//9
let age = 25;
let degree = true;
let experience = 3;
if (age >= 21 && age <= 30) {
    if (degree == true) {
        if (experience >= 2) {
            console.log("Eligible for Interview");
        }
    }
}

//10
let present = true;
let internalMarks = 35;
let externalMarks = 40;
if (present == true) {
    if (internalMarks >= 30) {
        if (externalMarks >= 35) {
            console.log("Eligible for Final Exam");
        }
    }
}
