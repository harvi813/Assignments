// ===============
//  push()
// ===============


//1
const colors = ["Red", "Blue", "Green"];

colors.push("Yellow", "Purple");

console.log(colors);

//2
const numbers = [];

numbers.push(5);
numbers.push(10);
numbers.push(15);

console.log(numbers);

//3
const items = ["Pen", "Book"];

items.push("Eraser", "Scale");

console.log(items);

// 4
// `push()` adds new elements at the end of an array.

// 5
// Yes, `push()` modifies the original array.


// ===============
//  pop()
// ===============

//1
const numbers = [10, 20, 30, 40, 50];

let removed1 = numbers.pop();
let removed2 = numbers.pop();

console.log(numbers);
console.log(removed1);
console.log(removed2);

//2
const colors = ["Red", "Blue", "Green"];

let removed = colors.pop();

console.log(colors);
console.log(removed);

//3
const numbers = [100, 200, 300, 400];

let removed = numbers.pop();

console.log(removed);
console.log(numbers);


// 4
// `pop()` returns the last removed element.

// 5
// Calling `pop()` on an empty array returns `undefined`.


// ===============
//  unshift()
// ===============


//1
const languages = ["CSS", "JavaScript"];

languages.unshift("HTML");

console.log(languages);

//2
const numbers = [20, 30];

numbers.unshift(5, 10);

console.log(numbers);

//3
const cities = [];

cities.unshift("Ahmedabad");
cities.unshift("Surat");
cities.unshift("Rajkot");

console.log(cities);

// 4
// `unshift()` adds new elements at the beginning of an array.

// 5
// Yes, `unshift()` can add multiple elements at the same time.

// ===============
//  shift()
// ===============

//1
const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara"];

let removed = cities.shift();

console.log(cities);
console.log(removed);

//2
const numbers = [10, 20, 30, 40];

let removed1 = numbers.shift();
let removed2 = numbers.shift();

console.log(numbers);
console.log(removed1);
console.log(removed2);

//3
const fruits = ["Apple", "Banana", "Mango"];

let removed = fruits.shift();

console.log(removed);
console.log(fruits);

//4
// `shift()` removes the first element, whereas `pop()` removes the last element.

// 5
// `shift()` returns the removed first element.

// ===============
//  indexOf()
// ===============


//1
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple"];

console.log(fruits.indexOf("Mango"));
console.log(fruits.indexOf("Watermelon"));

//2
const letters = ["A", "B", "C", "B", "D"];

console.log(letters.indexOf("B"));

//3
const students = ["Rahul", "Jenil", "Mahir", "Arjun"];

console.log(students.indexOf("Jenil"));

// 4
// `indexOf()` returns `-1` if the element is not found.

// 5
// It returns the index of the first occurrence of the element.


// ===============
//   lastIndexOf()
// ===============

//1
const numbers = [10, 20, 30, 20, 40, 20];

console.log(numbers.lastIndexOf(20));

//2
const letters = ["X", "Y", "Z", "Y", "X"];

console.log(letters.lastIndexOf("Y"));
console.log(letters.lastIndexOf("X"));

//3
const numbers = [5, 10, 15, 10, 20];

console.log(numbers.lastIndexOf(10));

// 4
// `indexOf()` returns the first occurrence, whereas `lastIndexOf()` returns the last occurrence.

// 5
// We use `lastIndexOf()` when we want to find the last occurrence of an element.

// ===============
//   lastIndexOf()
// ===============
## 7. includes()

**1.**
```javascript
const friends = ["Rahul", "Jenil", "Mahir", "Arjun"];

if (friends.includes("Jenil")) {
    console.log("Name is present");
} else {
    console.log("Name is not present");
}
```

**2.**
```javascript
const numbers = [11, 22, 33, 44];

console.log(numbers.includes(33));
console.log(numbers.includes(55));
```

**3.**
```javascript
const subjects = ["JavaScript", "Python", "HTML", "CSS"];

console.log(subjects.includes("Python"));
console.log(subjects.includes("Maths"));
```

**4.** `includes()` returns `true` if an element is found and `false` if it is not found.

**5.** Yes, `includes()` works with both numbers and strings.

// ===============
//   lastIndexOf()
// ===============
## 8. reverse()

**1.**
```javascript
const numbers = [10, 20, 30, 40, 50];

console.log("Before:", numbers);

numbers.reverse();

console.log("After:", numbers);
```

**2.**
```javascript
const letters = ["A", "B", "C", "D"];

letters.reverse();

console.log(letters);
```

**3.**
```javascript
const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara"];

cities.reverse();

console.log(cities);
```

**4.** `reverse()` modifies the original array.

**5.** In-place means that the original array is modified directly instead of creating a new array.

// ===============
//   sort()
// ===============

//1
const students = ["Rahul", "Jenil", "Mahir", "Arjun", "Karan"];

students.sort();

console.log(students);

//2
const animals = ["Dog", "Cat", "Elephant", "Ant"];

animals.sort();

console.log(animals);

//3
const numbers = [40, 100, 5, 25];

numbers.sort();

console.log(numbers);

// 4
// `sort()` converts numbers into strings and sorts them alphabetically by default, which can produce an unexpected numerical order.

// 5
// Yes, `sort()` modifies the original array.

// ===============
//   join()
// ===============

//1
const languages = ["JavaScript", "Python", "Java", "C++"];

let result = languages.join(" | ");

console.log(result);

//2
const languages = ["HTML", "CSS", "JavaScript"];

let result = languages.join(" - ");

console.log(result);

//3
const subjects = ["Maths", "Science", "Computer"];

let result = subjects.join(" / ");

console.log(result);

// 4
// If no separator is passed, `join()` uses a comma (`,`) by default.

//5
// `join()` returns a string.

// ===============
//   concat()
// ===============


//1
const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60];

const result = arr1.concat(arr2);

console.log(result);
console.log(arr1);
console.log(arr2);

//2
const arr1 = [1, 2];
const arr2 = [3, 4];

const result = arr1.concat(arr2);

console.log(result);

//3
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const result = arr1.concat(arr2, arr3);

console.log(result);

4
No, `concat()` does not modify the original arrays. It returns a new array.

5
Yes, multiple arrays can be combined using one `concat()` call.

// ===============
//  slice()
// ===============

//1
const numbers = [5, 10, 15, 20, 25, 30];

const result = numbers.slice(2, 5);

console.log(result);

//2
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);
console.log(numbers);

//3
const numbers = [10, 20, 30, 40, 50, 60];

const result = numbers.slice(0, 3);

console.log(result);

// 4
// No, `slice()` does not modify the original array.

// 5
// If the second argument is omitted, `slice()` extracts elements from the starting index to the end of the array.

// ===============
//   splice()
// =============== 

//1
const students = ["Jenil", "Mahir", "Arjun"];

students.splice(1, 0, "Krishna");

console.log(students);

//2
const numbers = [10, 20, 30, 40, 50];

numbers.splice(1, 2, 25);

console.log(numbers);

//3
const numbers = [100, 200, 300];

numbers.splice(1, 1, 250);

console.log(numbers);


//4
//`slice()` extracts elements without changing the original array, whereas `splice()` can add, remove, or replace elements in the original array.

// 5
// Yes, `splice()` modifies the original array.

// ===============
//   toString()
// ===============

//1
const movies = ["Avatar", "Titanic", "Frozen", "Inception"];

let result = movies.toString();

console.log(result);

//2
const numbers = [1, 2, 3, 4];

let result = numbers.toString();

console.log(result);

//3
const subjects = ["Maths", "Science", "Computer"];

let result = subjects.toString();

console.log(result);

//4
// `toString()` converts an array into a comma-separated string, whereas `join()` allows us to choose a separator.

//5
//`toString()` uses a comma (`,`) as the default separator.

// ===============
//   fill()
// ===============

//1
const numbers = [1, 2, 3, 4, 5, 6];

numbers.fill(10);

console.log(numbers);

//2
const numbers = [1, 2, 3, 4, 5];

numbers.fill(0);

console.log(numbers);

//3
const values = [1, 2, 3, 4];

values.fill("Hello");

console.log(values);

// 4
// Yes, `fill()` modifies the original array.

// 5
// Yes, `fill()` can change only a part of an array by specifying the start and end indexes.
