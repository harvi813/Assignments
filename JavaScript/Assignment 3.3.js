// =====================================================
// Part C] Relational Operator
// =====================================================
// 5. Greater Than >
// =====================================================

//1
let marks=78
let passing_marks=40
let result=marks>passing_marks
console.log(result)

//2
let temp=35
let yesterday_temp=28
let result=temp>yesterday_temp
console.log(result)

//3
//The output is true,false and false.

//4
//The output is true,true and false.

//5
//The result of both is false. JavaScript converts null into zero which is not greater than 0 and hence the result is false. JavaScript converts underdefined into NaN which is not greater than 0 and hence the result is false.

//6
let stock=120
let items=85
let result=stock>items 
console.log(result)

//7
console.log(true > false);
//The result is true. JavaScript converts true into 1 and false into 0 which then replaced in the condition becomes 1>0, which is true.

console.log("10" > "2");
//The result is false. JavaScript does not convert both the strings into numbers and hence a number is compared with a string which results in false.
console.log(NaN > 5);
//The result is false. NaN(Not A Number) is an invaild number which compared with a valid number 5 results in false.

// =====================================================
// 6. Less Than <
// =====================================================

//1
let max=50
let current=42
let result=current<max
console.log(result)

//2
let age=16
let required=18
let result=age<required
console.log(result)

//3
//The output is true,false and false.

//4
//The output is true,true and false.

//5
//JavaScript converts null into 0 and therefore it results into false. JavaScript converts underdefined into NaN and hence the result is false.

//6
let capacity=500
let current=375
let result=current<capacity
console.log(result)

//7
console.log(false < true);
//The result is true. JavaScript converts false into 0 and true into 1 which then replaced in the condition that becomes 0<1, which is true.
console.log("5" < "15");
//The result is false. Sice both of them are strings, the ASCII values of the chracters are compared and since the ASCII value of 5 is greater than 1, the result is false.
console.log(NaN < 10);
//The result is false. NaN( Not A Number) is an invaild number which compared with a valid number 10 results in false.


// =====================================================
// 7. Greater Than or Equal To >=
// =====================================================

//1
let min=75
let marks=75
let result= marks>=min
console.log(result)

//2
let price=300
let money=300
let result=money>=price
console.log(result)

//3
//The output is true,true and false.

//4
//The output is true,false and true.

//5
//JavaScript converts undefined into NaN. NaN compared with any number results in false.

//6
let max=8
let current=8
let result=current>=max
console.log(result)

//7
console.log(true >= 1);
//The result is true. JavaScript converts true into 1 and 1>=1. Therefore the result is true.
console.log("" >= 0);
//The result is true. The empty string is converted into 0 and 0>=0 is true.
console.log(NaN >= NaN);
//The result is false. Any relational comparision involving NaN returns false.

// =====================================================
// 8. Less Than or Equal To <=
// =====================================================

//1
let max=60
let current=60
let result=current<=max
console.log(result)

//2
let marks=40
let score=39
let result=score<=marks
console.log(result)

//3

