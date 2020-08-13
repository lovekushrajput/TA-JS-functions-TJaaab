// Use default parameter where ever you can

/* 1. Calculator

Write a function named `calculator` that accepts three parameter

- operation ('add', 'sub', 'mul','divide')
- num1 (number)
- num2 (number)

  and if operation is

  - 'add' return num1 + num2
  - 'sub' return num1 - num2
  - 'mul' return num1 * num2
  - 'div' return num1 / num2
*/

// - Write a Function Decleration for above problem
function calculator() {
  // Your code
}
// - Execute the function with required parameter

/* 2. Grade calculator.

Write a function named `calculateGrade` that accepts a number (marks below 500) calculates the percentage out of (500) and returns the grade as following:

- "A": 90-100%
- "B": 80-89%
- "C": 70-79%
- "D": 60-69%
- "F": 0-59%
*/

// - Write a Function Decleration for above problem
function calculateGrade() {
  // Your code
}
// - Execute the function with required parameter

/* 3. Read the questions and do what is asked.

Write a function named `getFullName` that accepts two strings (firstName, lastName) and return the full name with an space between firstName and lastName

Do the following with above problem:
*/

// - Write a Function Decleration
function getFullName() {
  // Your code
}

// - Write an named Function Expression
// - Write an Arrow Function
// - Execute the function
// - Execute the function and store the return value in a variable.
// - What is the `typeof` returnValue

/* 4. toCelsius

Write a function `toCelsius` which converts temperature from Fahrenheit to Celsius:
*/

// - Write a Function Decleration for above problem

// - Execute the function with required parameter

function toCelsius() {
  // Your code
}

// Function Test
toCelsius(32); // 0
toCelsius(86); // 30
toCelsius(90); // 32.22

/* 5. Add two numers or string

Write a function that accepts two numbers or string and returns the sum of the numbers and concatenation of the strings.
Twist is when user passes anything other than number, or string value you should be able to handle that.

- If both values are number add them
- If both values are string concat theme
- Anything other than that alert "Enter valid values"

*/

function sum() {
  // Your code
}

// Function Test
sum(2, 4); // 4
sum('Arya', 'Stark'); // "Arya Stark"
sum('Arya', 2); // Enter valid Values
sum(null, 2); // Enter valid Values
sum(undefined, 2); // Enter valid Values
