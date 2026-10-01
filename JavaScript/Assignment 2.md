# Assignment : Introduction to Variables and Datatypes
---
## Part I : Variables (let, var, const)

### Part a — 4 Questions

**1. Personal Information**
Declare variables for `name`, `age`, and `city` using appropriate variable keywords. Assign values and print all three variables.

**2. Change the Score**
Create a variable `score` with the value `50`. Change its value to `80` and print the final value. Use the appropriate keyword for a value that can change.

**3. Constant Value**
Create a constant variable `PI` with the value `3.14`. Print its value. Do not try to change the value.

**4. Uninitialized Variables**
Declare one variable having name `num1` using `var` and one having name `num2` using `let` without assigning values. Print both variables. Then assign values to them and print the values again.

**2. Change the Score**
Create a variable `score` with the value `50`. Change its value to `80` and print the final value. Use the appropriate keyword for a value that can change.

**3. Constant Value**
Create a constant variable `PI` with the value `3.14`. Print its value. Do not try to change the value.

**4. Uninitialized Variables**
Declare one variable having name `num1` using `var` and one having name `num2` using `let` without assigning values. Print both variables. Then assign values to them and print the values again.

<img width="854" height="1064" alt="WhatsApp Image 2026-10-01 at 9 16 44 AM_edited" src="https://github.com/user-attachments/assets/0f4bb11e-e86a-4e89-8cd3-ee252ba72753" />
<img width="948" height="334" alt="WhatsApp Image 2026-10-01 at 9 16 44 AM (1)_edited" src="https://github.com/user-attachments/assets/05263c78-57cc-4271-b9d0-2c75ba4e5f7d" />


---

### Part b — 4 Questions

**5. Choose the Correct Keyword**
Create the following variables using the most appropriate keyword:

* `studentName` — the value will not change
* `marks` — the value may change
* `schoolName` — the value will not change

Assign values to all three variables. Change `marks` and print all variables.

**6. Understand Scope**
Write a program where `var`, `let`, and `const` variables are declared inside an `if` block. Try to access all three variables outside the block. Observe and identify which variables can be accessed.

**7. Test Re-declaration**
Declare a variable named `user` using `var` and declare it again with a different value. Then perform the same experiment using `let`. Observe what happens and identify which declaration allows re-declaration.

**8. Test Re-assignment**
Create three variables using `var`, `let`, and `const`. Assign an initial value to each. Try to change the value of all three variables. Observe which variables allow re-assignment and which one produces an error.
<img width="948" height="1086" alt="WhatsApp Image 2026-10-01 at 9 16 44 AM (1)_edited" src="https://github.com/user-attachments/assets/854a5aa6-394e-4d34-8d87-28d168d901bd" />

<img width="776" height="1290" alt="WhatsApp Image 2026-10-01 at 9 16 44 AM (2)" src="https://github.com/user-attachments/assets/21248b91-517a-4e9d-911f-187e2468e379" />



---

### Part c — 2 Questions

**9. Predict and Explain**
Without running the code, predict the output of each `console.log()` and identify which lines cause errors. Explain your answer using the rules of scope, re-assignment, and variable declaration.

```javascript
var x = 10;

if (true) {
    var x = 20;
    let y = 30;
    const z = 40;
}

console.log(x);
console.log(y);
console.log(z);
```

**10. Fix the Program**
The following program contains multiple errors. Fix the code so that it runs correctly. Make sure your solution follows the rules for **initialization, re-declaration, re-assignment, and scope**.

```javascript
const name;

let age = 20;
let age = 25;

if (true) {
    var city = "Delhi";
    let country = "India";
}

console.log(country);

const score = 50;
score = 80;
```

<img width="894" height="1441" alt="WhatsApp Image 2026-10-01 at 9 16 45 AM" src="https://github.com/user-attachments/assets/7fafa12f-a5a7-4540-87b6-54c20de95f8a" />
<img width="838" height="1279" alt="WhatsApp Image 2026-10-01 at 9 16 45 AM (1)_edited" src="https://github.com/user-attachments/assets/b7f63352-274c-4382-a894-bb1ec6a2c5cd" />


#### Part d — 2 Question 

**11. Predict the Hoisting Behavior**  
Without running the code, predict the output of each `console.log()` and identify which lines cause errors. Explain your answer using the rules of hoisting for `var`, `let`, and `const`.

```javascript
console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30;
```

Output:
undefined
ReferenceError
ReferenceError

Explanation:
- var a is hoisted and initialized with undefined, so console.log(a) prints undefined.
- let b is hoisted, but it is not initialized. It causes a ReferenceError.
- const c behaves like let. Thus it also causes a ReferenceError.

**12. Fix the Hoisting Errors**  
The following program contains errors related to hoisting. Fix the code so that it runs correctly without any errors. Make sure your solution follows the rules of hoisting for `var`, `let`, and `const` (you may reorder declarations/assignments or change keywords only where necessary to make it work properly).

```javascript
console.log(x);
console.log(y);
console.log(z);

var x = "Hello";
let y = "World";
const z = "!";

console.log(x + " " + y + z);
```
Output:
Hello
World
!
Hello World!

Explanation:
All variables are declared and initialized before they are accessed. This avoids the Temporal Dead Zone for let and const.

**Questions on Primitive vs Non-Primitive Data Types**

---

### Part e — Basic Identification (4 Questions)

**1. Classify the Types**  
Declare one variable of each of the following types and print both the value and its type using `typeof`:
- A whole number  
- A decimal number  
- A piece of text  
- A true/false value

Output:
25 "number"
10.5 "number"
Hello "string"
true "boolean"

**2. Undefined vs Null**  
Declare two variables:
- `a` using `let` without assigning any value  
- `b` and intentionally assign `null` to it  

Print both variables and their `typeof` results. Explain the difference between `undefined` and `null`.

Output:
undefined "undefined"
null "object"

Difference
- undefined means a variable has been declared but has not been assigned a value.
- null represents an intentional absence of a value.
- typeof null returns "object". This is a historical behavior in JavaScript.

**3. Number Special Values**  
Create variables for the following and print each value along with its type:
- Positive Infinity  
- Negative Infinity  
- Not-a-Number (`NaN`)  
- A large number written with scientific notation (e.g., `2.5e3`)  
- A number written with underscores for readability (e.g., `1_000_000`)

  Output:
Infinity "number"
-Infinity "number"
NaN "number"
2500 "number"
1000000 "number"

**4. String Styles**  
Create three string variables using:
- Single quotes  
- Double quotes  
- Template literals (backticks) that include another variable  

Print all three strings.

Output:
Hello
World
Hello, Alex!

---

### Part f — Advanced Primitive Types (3 Questions)

**5. Symbol Uniqueness**  
Create two Symbols with the same description (`'id'`).  
Compare them using `===` and print the result.  
Then use both Symbols as keys in an object and retrieve the values.  
Explain why the comparison returns `false`.

```javascript
let symbol1 = Symbol("id");
let symbol2 = Symbol("id");

console.log(symbol1 === symbol2);

let user = {};

user[symbol1] = "First Value";
user[symbol2] = "Second Value";

console.log(user[symbol1]);
console.log(user[symbol2]);
```
Output:
false
First Value
Second Value

Explanation
Every Symbol() creates a unique value, even when the descriptions are identical.
Symbol("id") === Symbol("id")

returns:
false

Therefore, both symbols can act as separate object keys.

**6. BigInt Precision**  
Create a regular `number` with the value `9007199254740991` (Number.MAX_SAFE_INTEGER).  
Add `1`, `2`, and `3` to it and print the results.  
Now create the same value as a `BigInt` and perform the same additions.  
Print the results and explain the difference.

```javascript
let num = 9007199254740991;

console.log(num + 1);
console.log(num + 2);
console.log(num + 3);

let big = 9007199254740991n;

console.log(big + 1n);
console.log(big + 2n);
console.log(big + 3n);
```
Output:
9007199254740992
9007199254740992
9007199254740994

9007199254740992n
9007199254740993n
9007199254740994n

Explanation
JavaScript's Number type can safely represent integers only up to:
```javascript
Number.MAX_SAFE_INTEGER
```
which is:
9007199254740991

BigInt can represent integers larger than this while maintaining integer precision.
Important: BigInt literals use n:
```javascript
123n
```
You cannot directly mix Number and BigInt in arithmetic.

**7. Choose the Correct Type**  
For each description below, write the most appropriate primitive data type and give an example declaration:
- A unique identifier that is never equal to another value with the same description
  ```javascript
  let id = Symbol("id");
  ```
- A very large integer that must keep exact precision
- ```javascript
  let value = 12345678901234567890n;
  ```
- A variable that has been declared but not yet given a value
- ```javascript
  let x;
  ```
- An intentional empty value  
```javascript
  let x = null;
  ```
---

### Part g — Prediction & Fixing (3 Questions)

**8. Predict the Output**  
Without running the code, predict what each `console.log` will print (value + type). Explain your reasoning.

```javascript
let a;
let b = null;
let c = 42;
let d = "Hello";
let e = true;
let f = Symbol("key");
let g = 123n;

console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);
console.log(typeof d, d);
console.log(typeof e, e);
console.log(typeof f, f);
console.log(typeof g, g);
```
Output:
undefined undefined
object null
number 42
string Hello
boolean true
symbol Symbol(key)
bigint 123n


**9. Fix the Code**  
The following program has mistakes related to primitive types. Fix it so that it runs correctly and prints meaningful values.

```javascript
let num = 10;
let text = Hello;
let flag = True;
let empty;
let nothing = Null;
let unique = symbol("id");
let big = 9007199254740991;

console.log(num, text, flag, empty, nothing, unique, big);
```

Correct code:
```javascript
let num = 10;
let text = "Hello";
let flag = true;
let empty;
let nothing = null;
let unique = Symbol("id");
let big = 9007199254740991n;

console.log(num, text, flag, empty, nothing, unique, big);
```
Output:
10 Hello true undefined null Symbol(id) 9007199254740991n

**10. Primitive vs Non-Primitive**  
Answer the following questions in your own words and give one example for each:

a) What is the main difference between Primitive and Non-Primitive data types?  
b) Why are Numbers, Strings, Booleans, Undefined, Null, Symbol, and BigInt called Primitive?  
c) Give one example of a Non-Primitive data type and explain why it is considered Non-Primitive.

Answer:
a) Main difference
Primitive data types represent a single, basic value and are immutable.
Non-primitive data types are more complex structures that can contain multiple values or properties and are handled through references.

b) Why are Number, String, Boolean, Undefined, Null, Symbol, and BigInt primitive?
They are called primitive data types because they represent basic, individual values rather than collections of values.
The seven JavaScript primitive types are:
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

c) Example of a Non-Primitive Data Type
Object is a non-primitive data type.
```javascript
let student = {
    name: "Alex",
    age: 20
};
```

An object is non-primitive because it can contain multiple properties and values and is treated as a reference value.
Other common non-primitive types include:
```javascript
Array
Object
Function
```
---


