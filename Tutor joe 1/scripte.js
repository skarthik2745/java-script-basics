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
