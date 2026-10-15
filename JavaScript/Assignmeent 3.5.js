//Part G]: typeof Operator
//===========================================
//Part a:
//===========================================
//1.Declare a variable name = "Rahul" and print its type using typeof.
let name="Shreya";
console.log(typeof(name));

//2.Declare a variable age = 25 and print its type.
let age=25;
console.log(typeof(age));

//3.Declare a variable isStudent = true and print its type.
let isStudent=true;
console.log(typeof(isStudent));

//4.Declare a variable city (without assigning a value) and print its type.
let city;
console.log(typeof(city));

//5.Print the type of the value null.
let result=null;
console.log(typeof(result));
//====================================================
//part b
//====================================================
//6.Predict the output:
console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);

//7.Predict the output:
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

//8.Predict the output:
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof function(){});

//9.Create three variables:
price = 99.99
message = "Welcome"
isActive = false
//Print the type of each variable with a clear message.
console.log(typeof(price));
console.log(typeof(message));
console.log(typeof(isActive));

//10.Predict the output:
let value = null;
console.log(typeof value);
console.log(typeof value === "object");
//================================================
//Part c:
//===============================================
//11.Predict the output:
console.log(typeof typeof 100);
console.log(typeof typeof "Hi");
console.log(typeof typeof true);

//12.Predict the output:
let a = 10;
let b = "10";
console.log(typeof a === typeof b);
console.log(typeof a == typeof b);

//13.Predict the output:
console.log(typeof null === "object");
console.log(typeof [] === "object");
console.log(typeof {} === "object");

//14.Predict the output:
let x;
console.log(typeof x);
x = null;
console.log(typeof x);
x = 0;
console.log(typeof x);

//15.Predict the output:
console.log(typeof NaN === "number");
console.log(typeof Infinity === "number");
console.log(typeof (1 / 0));
//==========================================================================================================================================================================
//==========================================================================================================================================================================
//Part H]: Type Coercion
//=================================================
//Part a:
//=================================================
//1.Convert the string "25" into a number using Number() and add 10 to it. Print the result.
let num="25";
let total=Number(num)+10;
console.log(total);

//2.Convert the number 100 into a string using String() and join it with " rupees". Print the result.
let price=100;
let amount=String(price) + "rupees";
console.log(amount);

//3.Convert the value 0 into a boolean using Boolean() and print it.
let value=0;
let conditions=Boolean(value);
console.log(conditions);

//4.Convert the value "Hello" into a boolean and print it.
let text="Hello";
let txt=Boolean(text);
console.log(txt);

//5.Use the unary + operator to convert "50" into a number and multiply it by 2.
let number="50";
let number2=+(50)*2;
console.log(number2)
//================================================
//Part b:
//================================================
//6.Predict the output:
console.log("10" - 5);
console.log("10" + 5);
console.log("10" * 2);
console.log("10" / 2);

//7.Predict the output:
console.log("5" - "2");
console.log("5" + "2");
console.log("5" * "2");
console.log("5" / "2");

//8.Predict the output:
console.log(Number("123"));
console.log(Number("123abc"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

//9.Predict the output:
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(null));

//10.Predict the output:
console.log(String(100));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
console.log(100 + "");
//===============================================
//Part c:
//===============================================
//11.Predict the output:
console.log("5" + 3 + 2);
console.log(5 + 3 + "2");
console.log("5" - 3 + 2);
console.log(5 - "3" + "2");

//12.Predict the output:
console.log(true + true);
console.log(true + false);
console.log(true + "false");
console.log(false + "true");

//13.Predict the output:
console.log(null + 5);
console.log(undefined + 5);
console.log(null + "5");
console.log(undefined + "5");

//14.Predict the output:
console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log({} + {});

//15.Predict the output:
let a = "10";
let b = 5;
let c = a + b;
let d = a - b;
let e = +a + b;
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);

//16.Predict the output:
console.log(!!"Hello");
console.log(!!"");
console.log(!!0);
console.log(!!1);
console.log(!!null);
console.log(!!undefined);

//17.Predict the output:
console.log(Number(""));
console.log(Number(" "));
console.log(Number("0"));
console.log(Number("  25  "));
console.log(Number("25px"));

//18.Predict the output:
let val1 = "5";
let val2 = 2;
console.log(val1 + val2);
console.log(+val1 + val2);
console.log(val1 - val2);
console.log(val1 * val2);
console.log(val1 / val2);
