// switch statement example

let dayNumber = 3; // 1 = Monday, 2 = Tuesday, etc.

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}

// group switch statement example

let char = "e";

switch (char.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}

// while loop example

let num = 5;
let i = 1;

while (i <= 10) {
  console.log(num + " x " + i + " = " + num * i);
  i++;
}

// do-while loop example

let password;
const correctPassword = "123";

do {
  password = prompt("Enter password:");
} while (password !== correctPassword);

console.log("Access Granted!");

// for loop example

let sum = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) sum += i;
}

console.log("Sum of even numbers from 1 to 20 is: " + sum);

//array example

let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(i);
}
console.log("Array elements:", arr);

console.log("Array elements: "+arr[2]);

// =========================

let nums=[]
for (let i = 0; i < 5; i++) {
    nums.push([])
    for (let j = 0; j < 5; j++) {
        nums[i].push(i + j);

    }
}
console.log("2D Array:", nums);
console.table(nums);

// for-in loop example
let user = {
  name: "John", 
    age: 30,
    city: "New York"
};
for (let key in user) {
  console.log(key + ": " + user[key]);
}   

// for of loop example
let fruits = ["apple", 'banana', "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
