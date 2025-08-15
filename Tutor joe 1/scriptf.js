let first_name = "John";
let last_name = "Doe";

// concatenation
let full_name = first_name + " " + last_name;
console.log("Full Name:", full_name); // Full Name: John Doe
let c=first_name.concat(" ", last_name);
console.log("Concatenated Name:", c); // Concatenated Name: John Doe

c="sk"
c+=" kumar"
console.log("Updated Name:", c); // Updated Name: sk kumar
console.log("Length of Full Name:", full_name.length); // Length of Full Name: 8
console.log("First Character:", full_name[0]); // First Character: J
console.log("Last Character:", full_name[full_name.length - 1]); // Last Character: e

// string methods
console.log("Uppercase:", full_name.toUpperCase()); // Uppercase: JOHN DOE
console.log("Lowercase:", full_name.toLowerCase()); // Lowercase: john doe
console.log("Index of 'Doe':", full_name.indexOf("Doe")); // Index of 'Doe': 5
console.log("Last Index of 'o':", full_name.lastIndexOf("o")); // Last Index of 'o': 7
console.log("Substring (0, 4):", full_name.substring(0, 4)); // Substring (0, 4): John
console.log("Substring (0, 4):", full_name.substring(4)); // Substring : doe
console.log("Substring (0, 4):", full_name.substring(4,0)); // Substring (4,0): John
console.log("Substring (0, 4):", full_name.substring(70, 40)); // Substring : 
console.log("Substring (0, 4):", full_name.substring(-4)); // Substring (-4): John doe



console.log("Slice (0, 4):", full_name.slice(0, 4)); // Slice (0, 4): John
console.log("Slice (0, 4):", full_name.slice(4)); // Slice (0, 4): doe
console.log("Slice (0, 4):", full_name.slice(70, 40 )); // Slice (70, 40):
console.log("Slice (0, 4):", full_name.slice(-3)); // Slice (-3): Doe
console.log("Trimmed Name:", full_name.trim()); // Trimmed Name: John Doe

console.log("Character at index 2:", full_name.charAt(2)); // Character at index 2: h
console.log("Code Point at index 2:", full_name.charCodeAt(2)); // Code Point at index 2: 104   

let aa=" i am from chennai ";
let b=aa.replace("chennai", "delhi");
console.log("Replaced 'chennai' with 'delhi':", b); // Replaced 'chennai' with 'delhi':  i am from delhi


console.log("Trimmed Name:", "   " + full_name.trim() + "   ");// Trimmed Name:    John Doe

let a="hello i am sk";
console.table("Split by space:", a.split(" ")); // Split by space: ['hello', 'i', 'am', 'sk']
console.log("Split by space:", full_name.split(" ")); // Split by space: ['John', 'Doe' ]
console.log("Replaced 'Doe' with 'Smith':", full_name.replace("Doe",    "Smith")); // Replaced 'Doe' with 'Smith': John Smith       
console.log("Starts with 'John':", full_name.startsWith("John")); // Starts with 'John': true
console.log("Ends with 'Doe':", full_name.endsWith("Doe")); // Ends with "Ends with 'Doe': true"
console.log("Includes 'John':", full_name.includes("John")); // Includes 'John': true
console.log("Includes 'Jane':", full_name.includes("Jane")); // Includes 'Jane':    false   

console.log("Repeat 3 times:", full_name.repeat(3)); // Repeat 3 times: John DoeJohn DoeJohn Doe
console.log("Search for 'Doe':", full_name.search("Doe")); // Search for 'Doe': 5

// escaping

c='sk\'s book';
console.log("Escaped String:", c); // Escaped String: sk's book


let q="5"
let t=q.padStart(5, "0");
console.log("Padded String:", t); // Padded String: 00005   

let u=q.padEnd(5, "$");
console.log("Padded String:", u); // Padded String: 5$$$$

// fromCharCode
let charCode = 65; // ASCII code for 'A'
let char = String.fromCharCode(charCode);
console.log("Character from Code 65:", char); // Character from Code 65: A

// functions
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Hello, Alice!

function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // 15

function multiply(a, b) {
    console.log(a * b);
}
multiply(5, 10); // 50

// arbitrary number of arguments
function sum()
{
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;   

}
console.log("Sum of 1, 2, 3:", sum(1, 2, 3)); // Sum of 1, 2, 3: 6
console.log("Sum of 1, 2, 3, 4, 5:", sum(1, 2, 3, 4, 5)); // Sum of 1, 2, 3, 4, 5: 15
console.log("Sum of 1, 2, 3, 4, 5, 6:", sum(1, 2, 3, 4, 5, 6)); // Sum of 1, 2, 3, 4, 5, 6: 21

function sum(...args) {
    let total = 0;
    for (let arg of args) {
        total += arg;
    }
    return total;
}
console.log("Sum of 1, 2, 3:", sum(1, 2, 3)); // Sum of 1, 2, 3: 6
console.log("Sum of 1, 2, 3, 4, 5   :", sum(1, 2, 3, 4, 5)); // Sum of 1, 2, 3, 4, 5: 15
console.log("Sum of 1, 2, 3, 4, 5, 6:", sum(1, 2, 3, 4, 5, 6)); // Sum of 1, 2, 3, 4, 5, 6: 21


function multiply(...args) {
    let result = 1;
    for (let arg of args) {
        result *= arg;
    }
    return result;
}   
console.log("Multiply 2, 3:", multiply(2, 3)); // Multiply 2, 3: 6
console.log("Multiply 2, 3, 4:", multiply(2, 3, 4)); // Multiply 2, 3, 4: 24
console.log("Multiply 2, 3, 4, 5:", multiply(2, 3, 4, 5)); // Multiply 2, 3, 4, 5: 120

// func as expression
let square = function(x) {
    return x * x;
};  
console.log("Square of 5:", square(5)); // Square of 5: 25
let cube = function(x) {
    return x * x * x;
};
console.log("Cube of 3:", cube(3)); // Cube of 3: 27

// arrow functions
let addArrow = (a, b) => a + b;
console.log("Arrow Function Add 5 + 10:", addArrow(5, 10)); // Arrow Function Add 5 + 10: 15
let multiplyArrow = (a, b) => a * b;
console.log("Arrow Function Multiply 5 * 10:", multiplyArrow(5, 10)); // Arrow Function Multiply 5 * 10: 50


// arrow function with map()
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);    
console.log("Squares of [1, 2, 3, 4, 5]:", squares); // Squares of [1, 2, 3, 4, 5]: [1, 4, 9, 16, 25]

// arrow function with filter()
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers from [1, 2, 3, 4, 5]:", evenNumbers); // Even Numbers from [1, 2, 3, 4, 5]: [2, 4]

let o=['apple', 'banana', 'cherry','orange'];
let filteredFruits = o.filter(fruit => fruit.startsWith('b'));
console.log("Fruits starting with 'b':", filteredFruits); // Fruits starting with 'b': ['banana']

let i = ["apple", "banana", "cherry", "orange"];
let filteredFruit = i.filter(fruit => fruit.length > 5);
console.log("Fruits with more than 5 characters:", filteredFruit); // Fruits with more than 5 characters: ['banana', 'cherry', 'orange']



// arrow function with reduce()
let sumOfNumbers = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of [1, 2, 3, 4, 5]:", sumOfNumbers); // Sum of [1, 2, 3, 4, 5]: 15 

let productOfNumbers = numbers.reduce((accumulator, current) => accumulator * current, 1);
console.log("Product of [1, 2, 3, 4, 5]:", productOfNumbers); // Product of [1, 2, 3, 4, 5]: 120

// arrow function with closure
let createCounter=()=>{
    let count = 0;
    return () => {
        count++;
        return count;
    };
}
let counter = createCounter();
console.log("Counter:", counter()); // Counter: 1
console.log("Counter:", counter()); // Counter: 2
console.log("Counter:", counter()); // Counter: 3
console.log("Counter:", counter()); // Counter: 4

