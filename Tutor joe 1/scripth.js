// map

const words= ["hello", "world", "javascript", "functions", "arrays"];
const wstats= words.map((value,index,array)=>{
    return {
        word: value,
        length: value.length,
        index: index,
        originalArray: array.length
    };
})
console.log(wstats); // Outputs an array of objects with word stats
console.table(wstats); // Outputs the same in a table format

// filter
// even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((value) => {
    return value % 2 === 0; // Filters even numbers
});
console.log("Even Numbers:", evenNumbers); // Outputs: Even Numbers: [2, 4, 6, 8, 10]   
console.log('____________________________________________________________')

// user

const user = [
    { full_name: "John Doe", age: 25, city: "New York", salary: 5000 },
    { full_name: "Jane Smith", age: 30, city: "Los Angeles", salary: 7000 },
    { full_name: "Alice Johnson", age: 28, city: "Chicago", salary: 6000 },
    { full_name: "Bob Brown", age: 35, city: "Houston", salary: 8000 }
];
console.table(user); // Displays the user array in a table format

const e=user.filter(value=>value.age > 29)
console.log("Users older than 28:", e); // Outputs users older than 28

// filter the words longer than 5 characters
const word = ["apple", "banana", "cherry", "date", "elderberry"];
let a=word.filter((value)=>value.length > 5);
console.log("Words longer than 5 characters:", a); // Outputs words longer than 5

// filer te fruits from an array
let items=[{name: "apple", category: "fruit"},
{name: "carrot", category: "vegetable"},{ name: "banana", category: "fruit"},
{name: "broccoli", category: "vegetable"},{ name: "orange", category: "fruit"}];

let s=items.filter(value=>value.category==="fruit")
console.log("Fruits from the items array:", s); // Outputs fruits from the items array

// filter words starting with 'a'
let wordsArray = ["apple", "banana", "avocado", "cherry", "apricot"];
let g=wordsArray.filter(w=>w.startsWith('a'))
console.log("Words starting with 'a':", g); // Outputs words starting with 'a'

console.log("____________________________________________________________");

// filter expensive and fruit category 2 condition
const products = [
    {name:"apple", category:"fruit", price: 180},
    {name:"banana", category:"fruit", price: 130},
    {name:"carrot", category:"vegetable", price: 30},
    {name:"broccoli", category:"vegetable", price: 40},
    {name:"orange", category:"fruit", price: 80},
    {name:"kiwi", category:"fruit", price: 120},
    {name:"potato", category:"vegetable", price: 20}]

let expensiveFruits = products.filter(product => product.category === "fruit" && product.price > 100);
console.log("Expensive fruits:", expensiveFruits); // Outputs expensive fruits

console.log("____________________________________________________________");

// includes javascript

let books = [
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2011 },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
  },
  {
    title:
      "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: "Jennifer Niederst Robbins",
    year: 2012,
  },
  {
    title: "HTML and CSS: Design and Build Websites",
    author: "Jon Duckett",
    year: 2011,
  },
  {
    title: "CSS Secrets: Better Solutions to Everyday Web Design Problems",
    author: "Lea Verou",
    year: 2015,
  },
  {
    title: "JavaScript and JQuery: Interactive Front-End Web Development",
    author: "Jon Duckett",
    year: 2014,
  },
  { title: "You Don't Know JS", author: "Kyle Simpson", year: "2014-2019" },
  { title: "React: Up & Running", author: "Stoyan Stefanov", year: 2016 },
  { title: "Node.js Design Patterns", author: "Mario Casciaro", year: 2014 },
  {
    title: "Head First Design Patterns",
    author: "Eric Freeman and Elisabeth Robson",
    year: 2004,
  },
];

let searchTerm = "JavaScript".toLowerCase(); // Convert search term to lowercase
let d=books.filter(book=>book.title.toLowerCase().includes(searchTerm));
console.table("Books containing 'JavaScript':", d); // Outputs books containing 'JavaScript'

console.log('___________________________________________')

// year with 2014

let y=books.filter(book=>{
    return book.year.toString().includes("2014")&& book.title.toLowerCase().includes("javascript");
})
console.table("Books with '2014' in year and 'JavaScript' in title:", y); // Outputs books with '2014' in year and 'JavaScript' in title
console.log("____________________________________________________________");

//=========================================================

// reduce

const numbersArray = [1, 2, 3, 4, 5];
const sum = numbersArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // Sums all elements
}, 0);  
console.log("Sum of numbers:", sum); // Outputs: Sum of numbers: 15
console.log("____________________________________________________________");

// flatten an array
const nestedArray = [[1, 2], [3, 4], [5], [6, 7], [8, 9]];
const flattenedArray = nestedArray.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue); // Flattens the array
}, []);
console.log("Flattened Array:", flattenedArray); // Outputs: Flattened Array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("____________________________________________________________");

// color count

const colors = ["red", "blue", "green", "red", "blue", "yellow", "green", "red", "blue", "green"];
let count=colors.reduce((accumulator, currentValue) => {
    if(currentValue in accumulator) {
        accumulator[currentValue] += 1; // Increment count for existing color
    }else{
        accumulator[currentValue] = 1; // Initialize count for new color
    }
    return accumulator; // Return the updated accumulator
}, {});
console.log("Color Count:", count); // Outputs: Color Count: { red: 3, blue: 3, green: 3, yellow: 1 }
console.log("____________________________________________________________");

// max element in an array
const number = [5, 10, 15, 20, 25];
let q=number.reduce((max, current) => {
    if(current > max) {
        max=current; // Update max if current is greater
    }
    return max; // Return the maximum value found so far
},0);
console.log("Maximum Element in Array:", q); // Outputs: Maximum Element in Array: 25
console.log("____________________________________________________________");

// math.max with reduce
const nums = [3, 5, 7, 2, 8];
let maxNum = nums.reduce((max, current) => {
    return Math.max(max, current); // Returns the maximum value using Math.max
}, nums[0]); // Initialize with the first element
console.log("Maximum Number in Array:", maxNum); // Outputs: Maximum Number in Array: 8
console.log("____________________________________________________________");
//=========================================================================

// grouping data with reduce based on city

const people = [
    { name: "Alice", city: "New York", age: 25 },
    { name: "Bob", city: "Los Angeles", age: 30 },
    { name: "Charlie", city: "New York", age: 35 },
    { name: "David", city: "Chicago", age: 28 },
    { name: "Eve", city: "Los Angeles", age: 22 }]

let groupedByCity = people.reduce((accumulator, value) => {
    if(value.city in accumulator) {
        accumulator[value.city].push(value); // Add person to existing city group
    }
    else{
        accumulator[value.city] = [value]; // Initialize with the first person from that city
    }
    return accumulator; // Return the updated accumulator
},{});
console.log("Grouped by City:", groupedByCity); // Outputs: Grouped by City:
console.table(groupedByCity); // Displays the grouped data in a table format
console.log("____________________________________________________________");

// slice

const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const slicedArray = numb.slice(2, 6); // Slices elements from index 2 to 4
console.log("Sliced Array:", slicedArray); // Outputs: Sliced Array: [3, 4, 5, 6]
const w= numb.slice(3); // Slices elements from index 3 to the end
console.log("Sliced Array from index 3:", w); // Outputs: Sliced Array from index 3: [4, 5, 6, 7, 8, 9, 10]
const r= numb.slice(-3); // Slices the last 3 elements
console.log("Last 3 elements:", r); // Outputs: Last 3 elements: [8, 9, 10]
console.log("____________________________________________________________");

// splice 

const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const removedElements = numbersList.splice(4, 3); // Removes 3 elements starting from index 4
console.log("Removed Elements:", removedElements); // Outputs: Removed Elements: [5, 6, 7]
console.log("Updated Array after Splice:", numbersList); // Outputs: Updated Array after Splice: [1, 2, 3, 4, 8, 9, 10, 11, 12]

const i= numbersList.splice(2); // Removes all elements from index 2 to the end
console.log("Removed Elements from index 2:", i); // Outputs: Removed Elements from index

//====================================================

// adding new elements using splice
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 6, 7); // Adds 6 and 7 at index 2 without removing any elements
console.log("Array after adding elements:", arr); // Outputs: Array after adding elements: [1, 2, 6, 7, 3, 4, 5]
console.log("____________________________________________________________");

const n3= [1, 2, 3, 4, 5];
n3.splice(3, 0, 6, 7,77,88,99); // Adds 6, 7, 77, 88, and 99 at index 3 without removing any elements
console.log("Array after adding multiple elements:", n3); // Outputs: Array after adding multiple elements: [1, 2, 3, 6, 7, 77, 88, 99, 4, 5]
console.log("____________________________________________________________");