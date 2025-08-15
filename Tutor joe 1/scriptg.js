// call back function

function greet(){
    console.log("Hello, World!");}

function greetUser(func) {
    func();
}

console.log(greetUser(greet)); // Hello, World!

// setTimeout
setTimeout(function(){
    console.log("This message is delayed by 5 second.");
} , 5000); // Executes after 5 second

//setInterval
setInterval(function() {
    console.log("This message is repeated every 2 seconds.");
}, 2000); // Executes every 2 seconds

const n=[1,2,3,4,5];
n.forEach(function(num) {
    console.log(num * 2); // Outputs each number multiplied by 2
}); // Outputs: 2, 4, 6, 8, 10

// block scope

if(true) {
    let blockScopedVariable = "I am block scoped";
    console.log(blockScopedVariable); // I am block scoped
}   
// console.log(blockScopedVariable); // ReferenceError: blockScopedVariable is not defined


// array

let a=[1, 2, 3, 4, 5,true, "hello", {name: "Alice"}, [1, 2, 3]];
console.table(a); 

let b=new Array(12,34,56,78,true, "world", {name: "Bob"}, [4, 5, 6]);
console.table(b); 
console.log("First element of array a:", a[8]); 

// array methods

// forEach
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((value) => {
    console.log(value * 2);
 }) // Outputs each number multiplied by 2

numbers.forEach((value,index) => {
    console.log("value "+value+" index "+index);
 })

 const users = [
   { full_name: "Ram", age: 12, city: "Salem", salary: 10000 },
   { full_name: "Sam", age: 15, city: "Chennai", salary: 10500 },
   { full_name: "Ravi", age: 22, city: "Namakkal", salary: 12000 },
   { full_name: "Joes", age: 18, city: "Hosur", salary: 6000 },
   { full_name: "Aureen", age: 47, city: "Dharmapuri", salary: 10000 },
   { full_name: "Stanley", age: 10, city: "Salem", salary: 8000 },
 ];

 console.table(users); // Displays the users array in a table format
 users.forEach((value) => {
   console.log(value.full_name);
 }); // Outputs each user's full name

 const fruits = ["Apple", "Banana", "Cherry", "Date"];
    fruits.forEach((fruit, index) => {
    console.log(`Fruit: ${fruit}, Index: ${index}`); // Outputs each fruit with its index
    }); // Outputs each fruit with its index

    // sum of each element in an array
const num = [1, 2, 3, 4, 5];
let sum=0;
num.forEach((value) => {
    sum+=value;
})
console.log("Sum of numbers:", sum); // Outputs the sum of the numbers in the array


// double each element in an array and store in a new array
const j=[1, 2, 3, 4, 5];
let t;
let v=[]; // Initialize an empty array to store results
j.forEach((value) => {
    t=value * 2;
    v.push(t);
    });
console.log("New array after forEach:",v); // Outputs the new array after forEach

// num=[1, 2, 3, 4, 5]; finding maximum value in an array
let max = num[0]; // Initialize max with the first element
num.forEach((value) => {
    if (value > max) {
        max = value; // Update max if current value is greater
    }
});
console.log("Maximum value in the array:", max); // Outputs the maximum value in the array

// average of an array
let total = 0;
num.forEach((value) => {
    total += value; // Sum all elements
    });
let average = total / num.length; // Calculate average
console.log("Average of the array:", average); // Outputs the average of the array

// filter even numbers from an array
let even=[];
num.forEach((value) => {
    if (value % 2 === 0) {
        even.push(value); // Add even numbers to the new array
    }
});
console.log("Even numbers in the array:", even); // Outputs the even numbers in the array

// update each element in an array (e.g., convert to uppercase)
let names=["Alice", "Bob", "Charlie", "David", "Eve"];
names.forEach((value, index) => {
    names[index] = value.toUpperCase(); // Convert each name to uppercase
});
console.log("Updated names:", names); // Outputs the updated names in uppercase


// map
const numbersArray = [1, 2, 3, 4, 5];
const doubledArray = numbersArray.map(num => num * 2);
console.log("Doubled Array:", doubledArray); // Doubled Array: [2, 4, 6, 8, 10]

const squareRoots = numbersArray.map(num => {
    return Math.sqrt(num).toFixed(2); // Returns the square root of each number, rounded to 2 decimal places
});
console.table("Square Roots:", squareRoots); // Square Roots: [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]

//=====================================================
 const user = [
   { full_name: "Ram", age: 12, city: "Salem", salary: 10000 },
   { full_name: "Sam", age: 15, city: "Chennai", salary: 10500 },
   { full_name: "Ravi", age: 22, city: "Namakkal", salary: 12000 },
   { full_name: "Joes", age: 18, city: "Hosur", salary: 6000 },
   { full_name: "Aureen", age: 47, city: "Dharmapuri", salary: 10000 },
   { full_name: "Stanley", age: 10, city: "Salem", salary: 8000 },
 ];


    const userNames = user.map((user) => ({
       fname: user.full_name,
         age: user.age,
            city: user.city,
            salary: user.salary,
            status: user.age >= 18? "yes":"no" // Add eligibility based on age
    }));

    console.table(userNames); // Displays the user names with their details in a table format

    const userName = user.map((user) => ({
      ...user,
      status: user.age >= 18 ? "yes" : "no", // Add eligibility based on age
    }));

    console.table(userName);

    //======================================================

    const d=[1, 2, 3, 4, 5];
    const doubled = d.map(num => num * 2);
console.log("Doubled Array:", doubled); // Doubled Array: [2, 4, 6, 8, 10]

d.map((num,index)=>{
    console.log(`Index: ${index}, Value: ${num}`); // Outputs each index and value
});

//=========================================================

// modify each element in an array
const w=["Alice", "Bob", "Charlie", "David", "Eve"];
const capitalizedNames = w.map(name => name.toUpperCase());
console.log("Capitalized Names:", capitalizedNames); // Capitalized Names: ["ALICE", "BOB", "CHARLIE", "DAVID", "EVE"]

//=========================================================

// combining arrays
const fruits1 = ["Apple", "Banana", "Cherry"];
const colors1 = ["Red", "Yellow", "Pink"];
const combined = fruits1.map((fruit, index) => ({
    fruit: fruit,
    color: colors1[index] // Combine with corresponding color
}));
console.table(combined); // Displays combined fruits and colors in a table format

const combined2 = fruits1.map((fruit, index) => 
    fruit+"-"+colors1[index] // Combine with corresponding color
);
console.table(combined2); 

//==========================================================
// filtering an array

const numbersArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const e=numbersArray2.map(num => num%2==0);
console.log("Even Numbers:", e); // Even Numbers: [false, true, false, true, false, true, false, true, false, true]
//===============================================

//extracting specific properties from an array of objects
 const user3 = [
   { full_name: "Ram", age: 12, city: "Salem", salary: 10000 },
   { full_name: "Sam", age: 15, city: "Chennai", salary: 10500 },
   { full_name: "Ravi", age: 22, city: "Namakkal", salary: 12000 },
   { full_name: "Joes", age: 18, city: "Hosur", salary: 6000 },
   { full_name: "Aureen", age: 47, city: "Dharmapuri", salary: 10000 },
   { full_name: "Stanley", age: 10, city: "Salem", salary: 8000 },
 ];

 const names3= user3.map((user) =>user.full_name);
 console.log("User Names:", names3); // User Names: ["Ram", "Sam", "Ravi", "Joes", "Aureen", "Stanley"]
const ages = user3.map(user => user.age);
console.log("User Ages:", ages); // User Ages: [12, 15, 22, 18, 47, 10]

//============================================

// modifying each element in an array of objects

const user4= user3.map(user => ({
    ...user,
    full_name: user.full_name.toUpperCase(), // Convert full_name to uppercase
    city: user.city.toLowerCase() // Convert city to lowercase
}));
console.table(user4); // Displays modified user details in a table format
//========================================================
