// task 1
const colors = ["red", "blue", "green", "yellow", "orange"];
colors.reverse();
console.log(colors);

// Task 2
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers);

// Task 3
var numbers = ["Tom", "Tim", "Tin", "Tik"];
var result = numbers.join("");
console.log(result);

// Task 4
const statement = "I am a hard working person";
const words = statement.split(" ");
// console.log(words);
words.reverse();
const result = words.join(" ");
console.log(result);

// Task 5
const numbers = [1, 2, 3, 4, 5];
const num = [...numbers];
num[0] = 99;
console.log("Original:", numbers);
console.log("Copy:", num);

// Task 6
const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];
for (const student of students) {
  console.log(`${student.name} scored ${student.marks}`);
}

// Task 7
const input = [
  [1, 2],
  [3, 4],
  [5, 6],
];
input[1][0] = 99;
console.log(input);
