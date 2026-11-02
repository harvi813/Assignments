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
