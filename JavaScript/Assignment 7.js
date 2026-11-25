// =============================
// Section 1: What Is Scope?
// =============================

//1
// Surat
// India
// `city` is global. `country` is function-scoped. Both are accessible inside `display()`.

// 2
// 550
// 500
  
// 3
// - `college` – Global scope
// - `name` – Function scope (`student`)
// - `age` – Function scope (`student`)
// - `subject` – Function scope (`teacher`)

// 4
// ReferenceError: number is not defined
// `number` is accessible only inside `first()`.

//5
var city = "Ahmedabad";

function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}

display();
console.log(city);

// =============================
// Section 2: Global Scope 
// =============================


// 6
// I like Cricket
// Cricket

// 7
// English
// Gujarati
// Gujarati
// The global variable is changed by `changeLanguage()`.

// 8
// 75
// No error occurs because `marks` is assigned before `displayMarks()` is called.

// 9
// Favorite color: Red
// Red
// ReferenceError: message is not defined `message` is function-scoped.

//10
var school = "Sunrise School";

function showSchool() {
    console.log(school);
}

function updateSchool() {
    school = "Green Valley School";
}

showSchool();
updateSchool();
showSchool();
console.log(school);

// =============================
// Section 3: Function Scope
// =============================


// 11
// 300
// ReferenceError: first is not defined

// 12
// ReferenceError: salary is not defined
// `salary` is declared inside `employee()`.

// 13
// 25
// 15
// The local variable shadows the global variable.

// 14
// 50
// 50
// A new local variable is created each time the function runs. It cannot be accessed after the function finishes.

// 15
function calculateArea() {
    var length = 8;
    var width = 4;
    var area = length * width;
    console.log(area);
}

calculateArea();

// =====================================
// Section 4: No Block Scope with "var"
// =====================================

// 16
// Success
// `var` is not block-scoped.

// 17
// 2
// Both declarations refer to the same function/global-scoped variable.

// 18
// End
// A standalone block does not create a separate scope for `var`.

// 19
// undefined
// The declaration is hoisted, but the assignment is not executed.

// 20
if (true) {
    let secret = "Hidden";
    console.log(secret);
}
// `let` is block-scoped.

// =====================================
// Section 5: Block Scope with Loops
// =====================================

// 21
// 2
// 4
// 6
// Final: 8

// 22
// 1
// 2
// 3
// Count: 4

// 23
// 5
// 4
// 3
// After loop: 2

// 24
// Item: 1
// Item: 2
// Item: 3
// Last item: 4
// No error occurs because `var` is not block-scoped.

// 25
for (let step = 1; step <= 4; step++) {
    console.log(step);
}
// `step` cannot be accessed outside the loop.

// =====================================
// Section 6: Function Scope Inside Loops
// =====================================

// 26
// 10
// 20
// 30
// Final: 4

// 27
// 60
// 70
// 80
// 90
// ReferenceError: marks is not defined.
// The first four uses are inside `student()`. The final use is outside the function.

// 28
// 5
// 6
// 7
// Final value: 8
// The loop executes 3 times.

// 29
// ReferenceError: i is not defined.
// `i` is declared inside `calculate()` and cannot be accessed outside it.

// 30
function printNumbers() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
    console.log(i);
}

printNumbers();
console.log(i);

// =====================================
// Section 7: Hoisting with "var"
// =====================================


// 31
// undefined
// 90

// 32
// undefined
// 20
// The local variable `a` is hoisted and shadows the global variable.

// 33
// undefined
// undefined
// 100
// 200

// 34
// undefined
// 50
// ==>
Hoisted version:
function calculate() {
    var total;
    console.log(total);
    total = 50;
    console.log(total);
}

calculate();

// 35
// undefined
// 100
// The local `price` declaration is hoisted and shadows the global `price`.

// =========================================
// Section 8: Function Declaration Hoisting
// =========================================


// 36
// Hello from CodingGita

// 37
// Function is hoisted completely

// 38
// TypeError: greet is not a function
// The variable declaration is hoisted, but the function assignment is not.

// 39
// function
// I am hoisted

// 40
var message = "Welcome to JavaScript";

showMessage();

function showMessage() {
    console.log(message);
}


// ==============================
// Section 9: Scope Chain 
// ==============================

// 41
// 2025
// CSE
// CodingGita

// 42
// I am global
// I am outer
// ReferenceError: innerVar is not defined.

// 43
// 1 2 3
// All three variables are accessible inside `deep()` through the scope chain.

// 44
// first
// global

// 45
var a = "Global";

function outer() {
    var b = "Outer";

    function middle() {
        var c = "Middle";

        function inner() {
            var d = "Inner";
            console.log(d);
            console.log(c);
            console.log(b);
            console.log(a);
        }

        inner();
    }

    middle();
}

outer();

// ================================
// Section 10: Variable Shadowing 
// ================================

// 46
// 90
// 50

// 47
// Local Name
// Global Name

// 48
// 20
// 20
// Without `var`, the existing global variable is modified.

// 49
// Inside: Red
// Outside: Blue
  
// 50
var marks = 70;

function showMarks() {
    var marks = 95;
    console.log(marks);
}

showMarks();
console.log(marks);

// ===============================
// Section 11: Nested Functions
// ===============================

// 51
// Jenil
// Kartik Sir
// Neither `teacher` nor `student` can be accessed outside `outer()`.

// 52
// Parent
// Child
// Grandchild

// 53
// ReferenceError: inner is not defined
//Correct code:
function outer() {
    var secret = "Hidden";

    function inner() {
        console.log(secret);
    }

    inner();
}

outer();

// 54
// Hello students
// The inner function retains access to `greeting` through a closure.

// 55
function studentInfo() {
    var name = "Rahul";
    var course = "JavaScript";

    function display() {
        console.log(name);
        console.log(course);
    }

    display();
}

studentInfo();

// ===================================
// Section 12: Common Errors with var
// ===================================


//56
function test() {
    var x = 100;
    console.log(x);
}

test();

// Declaring `x` with `var` prevents accidentally creating a global variable.

// 57
// 20
// `var` is not block-scoped, so `x` is accessible outside the `if` block.

// 58
// undefined
// The declaration is hoisted, but the assignment happens later.

// 59
// 20
// Redeclaring a variable with `var` in the same scope is allowed.

//60
function calculate() {
    var total = 0;

    for (var i = 1; i <= 5; i++) {
        total = total + i;
    }

    console.log(total);
}

calculate();
// `total` is function-scoped and cannot be accessed outside `calculate()`.

