//================================================
// Section 2: Function Declaration
//================================================

//1.
function displayCourse(){
   return "JavaScript Fundamentals";
}

console.log(displayCourse())

//2.
function getStudentStatus(){
   return "Active Learner";
}

let res= getStudentStatus();
console.log(res)

//3.


//================================================
// Section 3: Function Expression
//================================================


//1.
let showMotto = function(){
  return "Code. Learn. Grow.";
}
console.log(showMotto())


//2.
let getSemester = function(){
  return 3 ;
}
console.log(getSemester())

//3.



//================================================
// Section 4: Function Calling (Invocation)
//================================================

//1.
function greetStudents(){
  return "All the best for your coding journey!";
}
console.log(greetStudents())
console.log(greetStudents())
console.log(greetStudents())
console.log(greetStudents())

//2.
function todayFocus(){
  return "Focus on functions today" ;
}
let res = todayFocus();
console.log(res)

//3.
function greet(){
  return "Hello!";
}

luck = function(){
  return "Wishing you a lucky day!";
}


console.log(greet())
console.log(greet())
console.log(luck())
console.log(luck())


//================================================
// Section 5: Parameters vs Arguments
//================================================

//1.
function subtract(a,b){
  return a-b;
}
console.log(subtract(50,18))

//2.
greetUser = function(name){
  return "Welcome, " + name + "!" ;
}

console.log(greetUser("Aarav"))

//3.
function calculateArea(length, breadth){
  return length*breadth ;
}

console.log(calculateArea(12,5))
console.log(calculateArea(8,9))


//================================================
// Section 6: Return Statement
//================================================

//1.
function squareOfNumber(n){
  return n**2;
}

console.log(squareOfNumber(9))

//2.
function isAdult(age){
  return age>18;
}
console.log(isAdult(17))
console.log(isAdult(20))

//3.
function getFullName(firstName, lastName){
  return firstName +" " + lastName;
}

console.log(getFullName("Rohit","Sharma"))

//================================================
// Section 7: Why Use Functions? (Real-world Example)
//================================================

//1.
function getTotal(m1, m2, m3){
  return (m1+m2+m3)/3;
}

console.log(getTotal(25,85,96))
console.log(getTotal(79,89,57))
console.log(getTotal(75,89,99))
console.log(getTotal(98,97,99))

//2.
function calculateSimpleInterest(principal, rate, time){
  return (principal*rate*time)/100;
}

console.log(calculateSimpleInterest(1000,5,3))
console.log(calculateSimpleInterest(20000,9,12))


//================================================
// Section 8: Function Scope
//================================================


//1
function showCity() {
    let city = "Ahmedabad";
    console.log(city);
}

showCity();

console.log(city);

//2

let trainer = "CodingGita Mentor";

function displayTrainer() {
    console.log(trainer);
}

displayTrainer();

console.log(trainer);

//3
function demoScope() {
    let value = 50;
    console.log(value);
}

demoScope();

console.log(value);


//================================================
// Section 9: Combining Function Concepts
//================================================


//1
function generateMessage(name, score) {
    let result;

    if (score >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    return name + " has scored " + score + " and the result is " + result;
}

console.log(generateMessage("Aarav", 65));

//2
function billCalculator(item1, item2, item3) {
    let total = item1 + item2 + item3;

    if (total >= 1000) {
        return "Total = " + total + ", Discount Applied";
    } else {
        return "Total = " + total + ", No Discount";
    }
}

console.log(billCalculator(400, 350, 300));
console.log(billCalculator(200, 300, 100));

//3
function performanceReport(student, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    let remark;

    if (average >= 80) {
        remark = "Excellent";
    } else {
        remark = "Keep Improving";
    }

    return "Name: " + student +
           ", Total: " + total +
           ", Average: " + average +
           ", Remark: " + remark;
}

console.log(performanceReport("Aarav", 90, 85, 95));


//================================================
// Section 10: Nested Functions
//================================================


//1
function mainTask() {

    function helperTask() {
        return "Task completed successfully";
    }

    return helperTask();
}

console.log(mainTask());

//2
function calculateFinal(m1, m2) {

    function getTotal() {
        return m1 + m2;
    }

    return "Final marks = " + getTotal();
}

console.log(calculateFinal(40, 50));

//3
function studentStatus(name, marks) {

    function getGrade() {
        if (marks >= 80) {
            return "A";
        } else if (marks >= 60) {
            return "B";
        } else {
            return "C";
        }
    }

    return name + " has received grade " + getGrade();
}

console.log(studentStatus("Aarav", 85));
console.log(studentStatus("Riya", 65));
console.log(studentStatus("Rahul", 45));
