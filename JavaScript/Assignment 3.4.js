//Part F]: Logical Operators
//1. Logical AND &&
//1.Stored username is "admin" and password is 1234. Check if both are valid using && and print the result.
let userName=true;
let password=false;
let loggedIn=userName&&password;
console.log(loggedIn);

//2.A user is logged in (isLoggedIn = true) and has permission (hasPermission = true). Check if they can access a page using &&.
let isLoggedIn = true;
let hasPermission = true;
let canAccess=isLoggedIn&&hasPermission;
console.log(canAccess);

//3.A product is in stock (inStock = true) and its price is less than ₹1000 (price = 800). Check if it can be bought using &&.
let inStock = true;
let price=800;
let canBuy=(price<1000)&&inStock;
console.log(canBuy)

//4.A student has marks 75 and attendance 80. Passing requires marks greater than 65 and attendance greater than 70. Check using &&.
let marks=75;
let attendance=80;
let passed=(marks>65)&&(attendance>70);
console.log(passed);

//5.Two conditions: isWeekend = true and isHoliday = false. A party happens only if both are true. Check using &&.
let isWeekend = true;
let isHoliday = false;
let partyHappening=isWeekend&&isHoliday;
console.log(partyHappening);

//6.Predict the output:
let a = 0;
let b = 10;
let result1 = a && b;
console.log(result1);

//7.Predict the output:
let s = 5;
let h = 10;
let result2 = (s > 3 && h) || 0;
console.log(result2);

//8.Predict the output:
let p = "Hello";
let q = "";
let r = "World";
let result = p && q && r;
console.log(result);

//9.Predict the output:
let val = 5;
let condition = val && (val = 0);
console.log(condition);
console.log(val);

//10.Predict the output:
let x = 10;
let y = 20;
let result3 = (x && y) && (x > y);
console.log(result3);


//2. Logical OR ||
//1.A user can login with either a correct password (passwordCorrect = true) or a valid OTP (otpValid = false). Check if login is allowed using ||.
let passwordCorrect = true;
let otpValid = false;
let loginAllowed=passwordCorrect||otpValid;
console.log(loginAllowed);

//2.A discount applies if the user is a member (isMember = false) or has a coupon (hasCoupon = true). Check using ||.
let isMember = false;
let hasCoupon = true;
let discount=isMember&&hasCoupon;
console.log(discount);

//3.Entry is allowed if age is above 18 (age = 16) or height is above 150 cm (height = 155). Check using ||.
let age = 16;
let height = 155;
let entryAllowed=(age>18)||(height>150);
console.log(entryAllowed);

//4.A form is valid if either email is given (emailGiven = true) or phone is given (phoneGiven = false). Check using ||.
let emailGiven = true;
let phoneGiven = false;
let formValid=(emailGiven||phoneGiven);

//5.A game level opens if score is above 1000 (score = 900) or time bonus is collected (timeBonus = true). Check using ||.
let score = 900;
let timeBonus = true;
let gameLevelOpens=(score>1000)||timeBonus;
console.log(gameLevelOpens);

//6.Predict the output:
let a = 0;
let b = false;
let c = "";
let d = null;
let e = 42;
let result = a || b || c || d || e;
console.log(result);

//7.Predict the output:
let s = "Hello" || 0;
let h = 0 || "Hi";
console.log(s, h);

//8.Predict the output:
let v = 10;
let z = 20;
let result1 = (v < 5) || (z > 15);
console.log(result1);

//9.Predict the output:
let val = 5;
let condition = val || (val = 0);
console.log(condition);
console.log(val);

//10.Predict the output:
let x = "" || 0 || false || null || undefined || "OK";
console.log(x);
