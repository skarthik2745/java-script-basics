// concat arrays
const a=[11,22,33,44,55];
const b=[66,77,88,99,100];
const c=[111,222,333,444,555];
let d=a.concat(b);
console.log("Concatenated Array:", d); // Outputs: Concatenated Array: [11, 22, 33, 44, 55, 66, 77, 88, 99, 100]
d=a.concat(b,c);
console.log("Concatenated Array with 3 arrays:", d); // Outputs: Concatenated Array with 3 arrays: [11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 111, 222, 333, 444, 555]
d=a.concat(b,c,100,200,300);
console.log("Concatenated Array with 3 arrays and additional elements:", d); // Outputs: Concatenated Array with 3 arrays and additional elements: [11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 111, 222, 333, 444, 555, 100, 200, 300]
d=a.concat(b,100,200,300,['a','b','c']);
console.log("Concatenated Array with additional elements and array:", d); // Outputs: Concatenated Array with additional elements and array: [11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 111, 222, 333, 444, 555, 100, 200, 300, 'a', 'b', 'c']
console.table(d); // Displays the concatenated array in a table format    
console.log("____________________________________________________________");

// sort array
const names = ["John", "Alice", "Bob", "Charlie", "Eve", "David","sk"];
let sortedNames = names.sort(); // Sorts the array in ascending order
console.log("before sorting:", names); // Outputs: before sorting: [ 'John', 'Alice', 'Bob', 'Charlie', 'Eve', 'David', 'sk' ]  
console.log("Sorted Names:", sortedNames); // Outputs: Sorted Names: [ 'Alice',

const r=[11,77,44,77,33,22,9,88,22,33,45];
console.log("before sorting:", r); // Outputs: before sorting: [ 11, 77, 44, 77, 33, 22, 99, 88, 22, 33, 45 ]
console.log("Sorted Numbers:", r.sort((a,b)=>{
    return a - b; // Sorts the numbers in ascending order
})); // Outputs: Sorted Numbers: [ 9, 11, 22, 22, 33, 33, 44, 45, 77, 77, 88 ]


console.log("Sorted Numbers:", r.sort((a,b)=>{
    return b-a; // Sorts the numbers in descending order
})); // Outputs: Sorted Numbers: [ 88, 77, 77, 45, 44, 33, 33, 22, 22, 11, 9 ]

//===========================================================

// sorting objects in an array

let users = [
  { name: "Ram", age: 12, city: "Salem", salary: 10000 },
  { name: "Sam", age: 15, city: "Chennai", salary: 10500 },
  { name: "Ravi", age: 22, city: "Namakkal", salary: 12000 },
  { name: "Joes", age: 18, city: "Hosur", salary: 6000 },
  { name: "Aureen", age: 47, city: "Dharmapuri", salary: 10000 },
  { name: "Stanley", age: 10, city: "Salem", salary: 8000 },
];

console.table(users);

// Sorting by age ascending
users.sort((a, b) => {
  return a.age - b.age;
});
console.table(users);

// Sorting by name a-z 
users.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});
console.table(users);

//=======================================================

// fill   
let n=[1,2,3,4,5]
console.log(n)
n.fill('a')
console.log(n);

let j = [1, 2, 3, 4, 5];
j.fill('x',3)
console.log(j);

let k = [1, 2, 3, 4, 5];
k.fill('k',2,4)
console.log(k);

//========================================================

//Includes(value, start_index)
const products = ["Pen", "Pencil", "Eraser", "Box", "Pen"];

let result = products.includes("Pen");
console.log(result);

result = products.includes("Scale");
console.log(result);

result = products.includes("Pen", 2);
console.log(result);

//==========================================================

//array.join(separator)
const product = ["Pen", "Pencil", "Eraser", "Box"];
console.log(product);

console.log(product.join()); // Default , as Separator
console.log(product.join('|')); // | as Separator
//=============================================================

// reverse
const nn = [1, 2, 3, 4, 5, 6];
console.log("Before Reverse : ", nn);
n.reverse();
console.log("After Reverse : ", nn);

//Array Element With Length Property
const x = { 0: 10, 1: 20, 2: 30, 3: 40, length: 4 };
console.log(x);

Array.prototype.reverse.call(x);
console.log(x);
//==============================================================
// push

let nm = [1, 2, 3, 4, 5];
console.log(nm);
console.log(nm.push(60));
console.log(nm);
console.log(nm.push(70, 85, 90, 100));
console.log(nm);

let fruits = ["Apple"];
console.log(fruits);
fruits.push("Orange");
console.log(fruits);
fruits.push("Banana", "Pineapple");
console.log(fruits);

//Merging Two Arrays
let users1 = ["Ram", "Sam", "Ravi"];
let users2 = ["Rajesh", "Kumar"];

users1.push(...users2);
console.log(users1);

// Example: Using pop() in JavaScript

// Create an array
let fruit = ["Apple", "Banana", "Mango", "Orange"];

console.log("Original array:", fruit);

// Remove the last element using pop()
let removedFruit = fruit.pop();

console.log("Removed element:", removedFruit);
console.log("Array after pop():", fruit);

// Pop again
removedFruit = fruit.pop();
console.log("Removed element:", removedFruit);
console.log("Array after second pop():", fruit);

//==================================================

// Shift
let students = ["Kumar", "Aureen", "Joes", "Zara", "Stanley", "Rajesh"];

console.log("Before shift : " + students);
let element = students.shift();
console.log("After shift : " + students);
console.log("Removed Element : " + element);

console.log("Before shift : " + students);
element = students.shift();
console.log("After shift : " + students);
console.log("Removed Element : " + element);
//==================================================
console.log("____________________________________________________________________")
// Unshift()
// Add First element at start
stu = ["Kumar", "Aureen", "Joes", "Zara", "Stanley", "Rajesh"];
console.log("Before unshift : " + stu);

let len = stu.unshift("Tiya");
console.log("Length : " + len);
console.log("After unshift : " + stu);

// Multiple Values
len = stu.unshift("Riya", "Diya");
console.log("Length : " + len);
console.log("After unshift : " + stu);
//====================================================

console.log(
  "____________________________________________________________________"
);

SC = ["Tiya", "Aureem", "Joes", "Zara", "Stanley", "Rajesh"];

let i = SC.indexOf("Tiya");
console.log("Index : " + i);

let user = "Tutor Joes";
let index = user.indexOf("o");
console.log("Index : " + index);

index = user.indexOf("o", 5);
console.log("Index : " + index);

//====================================================

console.log(
  "____________________________________________________________________"
);

stud = ["Tiya", "Aureen", "Joes", "Zara", "Stanley", "Tiya", "Rajesh"];

i = stud.indexOf("Tiya");
console.log(i);

i = stud.lastIndexOf("Tiya");
console.log(i);

let address = "Tutor Joes Cherry Road Salem Joes";
i = address.indexOf("Joes");
console.log(i);

i = address.lastIndexOf("Joes");
console.log(i);
//======================================================

n = [12, 18, 10, 8];

 result = n.every((value) => {
  return value % 2 == 0;
});

console.log("All Elements are Even :", result);

result = n.some((value) => {
  return value % 2 == 0;
});

console.log("All Elements are Even :", result);

function checkEven(value) {
  return value % 2 == 0;
}

result = n.every(checkEven);

console.log("checkEven All Elements are Even :", result);

users = [
  { name: "Ram", age: 25 },
  { name: "Tiya", age: 45 },
  { name: "Raja", age: 18 },
  { name: "Sara", age: 12 },
];

function isEligible(element) {
  return element.age >= 18;
}

results = users.every(isEligible);
console.log("Every Eligible :", results);

results = users.some(isEligible);
console.log("Some Eligible :", results);
//==============================================
// primitive
aa = 10;
bb = aa;
console.log("A :" + aa);
console.log("B :" + bb);
aa = 25;
console.log("A :" + aa);
console.log("B :" + bb);

//Reference Type
//Object
user = { name: "joes", age: 30 };
let user2 = user;
console.log("User 1 :", user);
console.log("User 2 :", user2);
user.age = 25;
console.log("User 1 :", user);
console.log("User 2 :", user2);

//Array
let arr1 = [10, 20, 30];
let arr2 = arr1;
console.log("Array 1 :", arr1);
console.log("Array 2 :", arr2);
arr1.push(40);
console.log("Array 1 :", arr1);
console.log("Array 2 :", arr2);
//======================================

// Object Clone use Spread and Object.assign() in JavaScript

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);
//===========================================

let originalArray = [1, 2, 3];

// Spread operator
let clonedArray1 = [...originalArray];
console.log("Cloned with Spread:", clonedArray1);

// slice()
let clonedArray2 = originalArray.slice();
console.log("Cloned with slice:", clonedArray2);

// concat
let clonedArray3 = [].concat(originalArray);
console.log("Cloned with concat:", clonedArray3);

// Array.from()
let clonedArray4 = Array.from(originalArray);
console.log("Cloned with Array.from:", clonedArray4);
//=================================================================



// Define reusable student methods
const studentMethod = {
  // Method to return student's name and city
  about: function () {
    return `${this.fullName} is from ${this.city}`;
  },

  // Method to check if student is eligible (age >= 18)
  eligibility: function () {
    return this.age >= 18;
  },
};

// Function to create a new student object
function addStudent(fullName, father, age, address, city) {
  const user = {}; // Empty object

  // Assign values
  user.fullName = fullName;
  user.father = father;
  user.age = age;
  user.address = address;
  user.city = city;

  // ✅ Assign methods (without calling them)
  user.about = studentMethod.about;
  user.eligibility = studentMethod.eligibility;

  return user; // Return the final object
}

// Create three students
const student1 = addStudent("Sam", "Raja", 25, "Gandhi Road", "Salem");
const student2 = addStudent("Karthik", "Suresh", 17, "Anna Nagar", "Chennai");
const student3 = addStudent("Priya", "Mohan", 20, "MG Street", "Coimbatore");

// Print all students and test their methods
console.log(student1);
console.log(student1.about());        // "Sam is from Salem"
console.log(student1.eligibility());  // true

console.log(student2);
console.log(student2.about());        // "Karthik is from Chennai"
console.log(student2.eligibility());  // false

console.log(student3);
console.log(student3.about());        // "Priya is from Coimbatore"
console.log(student3.eligibility());  // true