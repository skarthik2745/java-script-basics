// =========================
// JavaScript - Basic Operations
// =========================

// 1. Arithmetic Operations
let a = 10,
  b = 3;
console.log("Arithmetic:", a + b, a - b, a * b, a / b, a % b, a ** b);
// +, -, *, /, %, **

// 2. Assignment Operations
let x = 5;
x += 3; // 8
x -= 2; // 6
x *= 4; // 24
x /= 6; // 4
x %= 3; // 1
console.log("Assignment:", x);

// 3. Comparison Operations (==, ===, !=, !==)
let p = 5,
  q = "5";
console.log("Comparison:", p == q, p === q, p != q, p !== q);

// 4. Logical Operations (&&, ||, !)
let m = true,
  n = false;
console.log("Logical:", m && n, m || n, !m);

// 5. Relational Operations (<, >, <=, >=)
let r = 7,
  s = 10;
console.log("Relational:", r < s, r > s, r <= 7, s >= 10);

// 6. Bitwise Operations (&, |, ^, ~, <<, >>)
let num1 = 5,
  num2 = 3; // binary: 101 & 011
console.log(
  "Bitwise:",
  num1 & num2,
  num1 | num2,
  num1 ^ num2,
  ~num1,
  num1 << 1,
  num1 >> 1
);
/*
// 7. Ternary Operator (? :)
let age = 20;
console.log("Ternary:", age >= 18 ? "Adult" : "Minor");  */

// 8. Increment & Decrement
let count = 5;
console.log("Inc/Dec:", count++, ++count, count--, --count);


// ternary operator example
// Using Ternary Operator for Eligibility Check
const age = 22;
const result = age >= 18 ? "Eligible" : "Not Eligible";
console.log(result); // Eligible

// Handling null values
function welcome(name) {
  const result = name ? name : "No Name";
  console.log("Welcome " + result); // Welcome No Name / Welcome Joes
}
welcome();
welcome(null);
welcome("Joes");

user = { name:'sk', age: 25 };
console.log(user); // {name: 'Tiya', age: 25}
console.log(user.name); // Tiya

const greeting = (user) => {
  const name = user.name ? user.name : "No Name";
  return "Hello " + name; // Hello Tiya
};

console.log(greeting(user));
// =========================