// ==============================
// 14. Practice Exercises
// ==============================
  
//1
const numbers = [12, 7, 18, 25, 4, 9, 30];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

//2
const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];

for (let i = cities.length - 1; i >= 0; i--) {
    console.log(cities[i]);
}

//3
const scores = [12, 45, 7, 89, 23];

let largest = scores[0];
let secondLargest = -Infinity;

for (let i = 1; i < scores.length; i++) {
    if (scores[i] > largest) {
        secondLargest = largest;
        largest = scores[i];
    } else if (scores[i] > secondLargest && scores[i] !== largest) {
        secondLargest = scores[i];
    }
}

console.log(secondLargest);

//4
const colors = ["Red", "Blue", "Green", "Yellow"];

colors.push("Purple");
colors.unshift("Black");

console.log(colors);

//5
const matrix = [
    [10, 20, 30],
    [40, 50, 60]
];

let sum = 0;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        sum = sum + matrix[i][j];
    }
}

console.log(sum);

//6
const marks = [45, 67, 89, 32, 76, 91, 54];

let count = 0;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] > 50) {
        count++;
    }
}

console.log(count);

//7
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
}


