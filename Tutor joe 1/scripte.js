// converting object to array


let user = {
  name: "Tiya",
  age: 25,
  city: "New York",
  phno: "1234567890",
};
let key = Object.keys(user);
let value = Object.values(user);
console.log("Keys:", key); // Keys: [ 'name', 'age', 'city', 'phno' ]
console.log("Values:", value); // Values: [ 'Tiya', 25, 'New York', '1234567890' ]

console.table(key); // Display keys in a table format
console.table(value); // Display values in a table format
//================================

//break
console.log("Break Example:");
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Exit the loop when i is 3
  }
  console.log(i); // Output: 0, 1, 2
}
//===================================

// continue
console.log("Continue Example:");
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip the iteration when i is 2
  }
  console.log(i); // Output: 0, 1, 3, 4
}

//===================================

// label block

console.log("Label Block Example 1:");

let groups = [
  ["Ram", "Sam", "Ravi"],
  ["Kumar", "Tiya", "Sundar"],
  ["Rajesh", "Sara", "Rahul"],
];

for (let group of groups) {
  inner: for (let member of group) {
    if (member.startsWith("R")) {
      console.log("found one starting with R:", member);
      break inner;
    }
  }
}

console.log("Label Block Example 2:");

outer: 
for (let group of groups) {
  inner:
   for (let member of group) {
    if (member.startsWith("R")) {
      console.log("found one starting with R:", member);
      break outer; // jumps completely out of BOTH loops
    }
  }
}

console.log("label block example 3:");

let grid = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

// label for the outer loop
outerLoop: 
for (let row of grid) {
  for (let num of row) {
    console.log("Checking:", num);

    if (num > 50) {
      console.log("Found number > 50:", num);
      break outerLoop; // jumps out of BOTH loops immediately
    }
  }
}
console.log("Search finished!");

//===================================

// math functions

let c;
c = Math.PI; // Returns the value of PI
console.log("Value of PI:", c);
c = Math.abs(-5); // Returns the absolute value
console.log("Absolute value of -5:", c);
c = Math.ceil(4.2); // Rounds up to the nearest integer
console.log("Ceiling of 4.2:", c);
c = Math.floor(4.8); // Rounds down to the nearest integer
console.log("Floor of 4.8:", c);  


c = Math.max(10, 20, 30); // Returns the maximum value
console.log("Maximum value:", c); 
c = Math.min(10, 20, 30); // Returns the minimum value
console.log("Minimum value:", c);
c = Math.random(); // Returns a random number between 0 and 1
console.log("Random number:", c);
c = Math.round(4.5); // Rounds to the nearest integer
console.log("Rounded value of 4.5:", c);


c = Math.sqrt(16); // Returns the square root
console.log("Square root of 16:", c);
c = Math.pow(2, 3); // Returns 2 raised to the power of 3
console.log("2 raised to the power of 3:", c);
c = Math.log(10); // Returns the natural logarithm
console.log("Natural logarithm of 10:", c);
c = Math.exp(1); // Returns e raised to the power of 1
console.log("e raised to the power of 1:", c);
c = Math.sin(Math.PI / 2); // Returns the sine of an angle in radians
console.log("Sine of PI/2:", c);
c = Math.cos(0); // Returns the cosine of an angle in radians
console.log("Cosine of 0:", c);


c = Math.tan(Math.PI / 4); // Returns the tangent of an angle in radians
console.log("Tangent of PI/4:", c);
c=Math.E; // Returns Euler's number
console.log("Euler's number (e):", c);
c=Math.trunc(4.7); // Returns the integer part of a number
console.log("Truncated value of 4.7:", c);
c=Math.min(5, 10, 15); // Returns the minimum value
console.log("Minimum of 5, 10, 15:", c);


c=Math.floor(Math.random() * 100); // Generates a random integer between 0 and 99
console.log("Random integer between 0 and 99:", c);
c=Math.floor(Math.random() * 100+1); // Generates a random integer between 1 and 100
console.log("Random integer between 1 and 100:", c);
c=Math.sign(5); // Returns the sign of a number (-1, 0, or 1)
console.log("Sign of 5:", c);

c=Math.sign(-9); // Returns the sign of a number (-1, 0, or 1)
console.log("Sign of -9:", c);

c=Math.sign(0); // Returns the sign of a number (-1, 0, or 1)
console.log("Sign of 0:", c);

c=Math.cbrt(27); // Returns the cube root of a number
console.log("Cube root of 27:", c);

