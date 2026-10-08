// =====================================================
// ASSIGNMENT: JAVASCRIPT OPERATORS
// =====================================================


// =====================================================
// B] Assignment Operators
// =====================================================
// 1. Simple Assignment =
// =====================================================
// 1
let studentName="Priya"
let marks=92
console.log(studentName)
console.log(marks)
// 2
let score=0
console.log(score)
//3
let a,b,c=50
console.log(a)
console.log(b)
console.log(c)
//4
// The output is 100.
//5
//The output is 15 30.


// =====================================================
// 2. Add and Assign +=
// =====================================================

//1
let  score=80
score+=25
console.log(score)

//2
let balance=1500
balance+=120
console.log(balance)

//3
// The output is 15.

//4
//The output is Good Morning.

//5
// The final value after :
let n=20;
n+="5";
// is 205. Because the data type of 5 is string, Javascript automatically takes the value of 20 as a string too and then string concatenation takes place.

// =====================================================
// 3. Subtract and Assign -=
// =====================================================

//1
let health=100
health-=35
console.log(health)

//2
let stock=300
stock-=45
console.log(stock)

//3
// The output is 3.

//4
// The output is 25.

//5
//Javascript  tries to convert the initial value of x into a number but since the string "abc" cannot be converted into a valid number, it results NaN. 


// =====================================================
// 4. Multiply and Assign *=
// =====================================================

//1
let price= 500
price *=1.18
console.log(price)

//2
let quantity=8
quantity*=3
console.log(quantity)

//3
// The output is 220.00000000000003.

//4
//The output is 21.

//5
//Javascript  tries to convert the string "hello" into a number but since the string "abc" cannot be converted into a valid number, it results NaN. 



// =====================================================
// 5. Divide and Assign /=
// =====================================================

//1
let chocolates=180
chocolates/=6
console.log(chocolates)

//2
let distance=300
distance/=5
console.log(distance)

//3
// The output is 50.

//4
// The output is 25.

//5
//In Javascript dividing a positive,non-zero number with zero results in infinity.

// =====================================================
// 6. Modulus and Assign %=
// =====================================================

//1
let number=47
number%=6
console.log(number)

//2
let counter=23
counter%=12
console.log(counter)

//3
//The output is 4

//4
//The output is 4.

//5
//Since dividing by zero does not produce a defined remainder, Javascript returns NaN. 

// =====================================================
// 7. Exponentiation and Assign **=
// =====================================================

//1
let side=5
side**=3
console.log(side)

//2
let number=4
number**=2
consoel.log(number)

//3
//The output is 32.

//4
//The output is 2.

//5
// A negative exponent means taking the reciprocal of the number raised to the corresponding positive exponent. Therefore the result is 0.5.


// =====================================================
// C] Comparison Operators
// =====================================================

// =====================================================
// 1. Loose Equality ==
// =====================================================

//1
// It's true.
  
//2
//It returns true.

//3
//The output is true and true.

//4
//The output is true and true.

//5
//NaN is not equal to any value,including itself and therefore it returns false.

// =====================================================
// 2. Loose Inequality !=
// =====================================================

//1
//It returns false.

//2
//It returns false.

//3
//The output is false and false.

//4
//The output is false and false.

//5
//NaN is not equal to any value,including itself and therefore it returns true.

// =====================================================
// 3. Strict Equality ===
// =====================================================

//1
//False because strict equality checks the datat type too and the value is same but the datatype of both is different.

//2
//Both return false.

//3
//The output is false and false.

//4
//The output is false and false.

//5
//Strict equality is preferred over loose equality because it checks both the value and data type.

// =====================================================
// 4. Strict Inequality !==
// =====================================================

//1
//It returns true.

//2
//Both return true.

//3
//The output is true and true

//4
//The output is true and true.

//5

