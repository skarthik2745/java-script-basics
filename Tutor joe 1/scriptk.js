/*let myArray = [1, 2, 3, 4, 5];
let [first, , , fourth] = myArray;
console.log(first); //1
console.log(fourth); //4

let myArray = [1, 2, 3, 4, 5, 6, 7];
let [first, second, ...rest] = myArray;
console.log(first);
console.log(second);
console.log(rest);*/

let myObj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };

let { a, b, ...rest } = myObj;

console.log(a);
console.log(b);
console.log(rest);

const user = {
  name: "Tutor Joes",
  address: {
    city: "Salem",
    state: "Tamil Nadu",
    country: "India",
  },
};

const {
  name,
  address: { city, state },
} = user;

console.log(name);
console.log(city);
console.log(state);

const numbers = [1, 2, [3, 4, [5, 6]]];
const [aa, bb, [c, d, [e, f]]] = numbers;
console.log(aa);
console.log(bb);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

const users = [
  {
    name: "Tutor Joes",
    address: {
      city: "Salem",
      state: "Tamil Nadu",
      country: "India",
    },
  },
  {
    name: "Sara",
    address: {
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
  },
];

const [
  {
    name: name1,
    address: { city: city1 },
  },
  {
    name: name2,
    address: { city: city2 },
  },
] = users;

console.log(name1);
console.log(city1);
console.log(name2);
console.log(city2);

//================== nested objects
// Define address object
let empAddress = {
  street: "Cherry Road",
  city: "Salem",
  state: "Tamil Nadu",
  zip: "636007"
};

// Define employee object with nested address
let empDetails = {
  name: "Tiya",
  age: 12,
  gender: "female",
  address: empAddress
};

// Print the full employee object
console.log(empDetails);

// Object Destructuring with nested address
let { 
  name: empName, 
  age: empAge, 
  gender: empGender, 
  address: { street: empStreet, city: empCity, state: empState, zip: empZip } 
} = empDetails;

// Printing destructured values
console.log(empName);   // Tiya
console.log(empAge);    // 12
console.log(empGender); // female
console.log(empStreet); // Cherry Road
console.log(empCity);   // Salem
console.log(empState);  // Tamil Nadu
console.log(empZip);    // 636007
//=================================================================

console.log("___________________________")
//object creation

// 1. Object Literal
const person1 = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log("Hello, I'm " + this.name);
  }
};
console.log("Object Literal:", person1);
person1.greet();


// 2. Object Constructor (new Object)
const person2 = new Object();
person2.name = "Bob";
person2.age = 30;
person2.greet = function () {
  console.log("Hello, I'm " + this.name);
};
console.log("Object Constructor (new Object):", person2);
person2.greet();


// 3. Object.create()
const protoPerson = {
  greet: function () {
    console.log("Hello, I'm " + this.name);
  }
};
const person3 = Object.create(protoPerson);
person3.name = "Charlie";
person3.age = 35;
console.log("Object.create():", person3);
person3.greet();


// 4. Class (Constructor function / ES6 class)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, I'm " + this.name);
  }
}
const person4 = new Person("David", 40);
console.log("Class (ES6):", person4);
person4.greet();
//===================================================
console.log("_______________________________");

// dot, bracket

let user1 = {
  name: "Tutor",
  age: 30,
  job: "Developer",
};
console.log(user1);

// Dot notation
console.log(user1.name);
user1.name = "Joes";
console.log(user1.name);
console.log(user1);

// Bracket notation
console.log(user1["age"]);
user1["age"] = 25;
console.log(user1["age"]);
console.log(user1);

const prop1 = "name";
console.log(user1[prop1]);
// console.log(user1.prop1); // ❌ Wrong (will give undefined)

let user2 = {
  "first name": "Tutor",
  "last name": "Joes",
};
console.log(user2["first name"]);
console.log(user2["last name"]);

let key2 = "first name";
console.log(user2[key2]);
//=======================================================================
console.log("_______________________________");
// iterating throuh obj

// Iterating Through JavaScript Objects

// Using the for-in loop
const user3 = {
    name: "Tiya",
    age: 30,
    job: "Programmer"
};
console.log(user3);

for (let key3 in user3) {
    console.log(`${key3} : ${user3[key3]}`);
}

// Using Object.keys()
const keys3 = Object.keys(user3);
console.log(keys3);
keys3.forEach(key3 => {
    console.log(`${key3} : ${user3[key3]}`);
});

// Using Object.values()
const values3 = Object.values(user3);
console.log(values3);
values3.forEach(value3 => {
    console.log(`${value3}`);
});

// Using Object.entries()
const entries3 = Object.entries(user3);
console.log(entries3);
entries3.forEach(entry3 => {
    console.log(`${entry3[0]} : ${entry3[1]}`);
});

for (let i3 = 0; i3 < entries3.length; i3++) {
    console.log(`${entries3[i3][0]} : ${entries3[i3][1]}`);
}
//=================================================
console.log("_______________________________");

// objects inside array

// Objects inside Arrays in JavaScript

const users4 = [
    { name: 'joes', age: 25, email: 'joes@gmail.com' },
    { name: 'ram', age: 32, email: 'ram@gmail.com' },
    { name: 'sam', age: 45, email: 'sam@gmail.com' }
];
console.log(users4);

for (const user4 of users4) {
    // console.log(user4);
    console.log(user4.email);
}

const olderUsers4 = users4.filter(user4 => user4.age > 30);
console.log(olderUsers4);
//===================================================================
console.log("_______________________________");

// Differences between Rest Parameter Functions and Spread Operators in JavaScript

// Rest Parameter Functions
function myFunction5(first5, second5, ...rest5) {
    console.log(first5);
    console.log(second5);
    console.log(rest5);
}

myFunction5(10, 20, 30, 40, 50, 60);

// Spread Operators
let myArray5 = [1, 2, 3,44,55];
let newArray5 = [...myArray5, 4, 5];
console.log(newArray5);
//===================================================================
console.log("_______________________________");

// Parameter Destructuring with Default Values
function sayHello({ name, age = 25 }) {
    console.log(`Hello, ${name}!`);
    console.log(`age is, ${age}`);
}

const person11 = { name: 'Joes', age: 35 };
sayHello(person11);

// Array Destructuring in Parameters
const numbers1 = [5, 10, 15];

function add([a, b, c]) {
    return a + b + c;
}

console.log(add(numbers1));

// Using Rest with Object Destructuring
const person22 = { name: 'Alex', age: 40, city: 'London', country: 'UK' };

function sayHello2({ name, age, ...rest }) {
    console.log(`Hello, ${name}! You are ${age} years old`);
    console.log(rest);
}

sayHello2(person22);
//========================================================================
console.log("_______________________________");
// call , apply , bind

function joes1() {
  console.log(this);
}

console.log(joes1.name); // fun name
console.log(joes1.toString()); // func body
joes1();
joes1.call();

function welcome1() {
  console.log("Welcome : " + this.user_name1);
}

const student1 = { user_name1: "Raja" };
welcome1.call(student1);

function total1(eng1, mat1) {
  console.log(this.user_name1 + " got " + (eng1 + mat1) + " Marks");
}

total1(25, 35);
total1.call(student1, 25, 35);

let subjects1 = [25, 35];
total1.apply(student1, subjects1);

const fun1 = total1.bind(student1, 85, 95);
console.log(fun1);
fun1();
//===================================================================
console.log("_______________________________");

// Example 1: Using call()
const persons1 = {
    firstName: "Tutor",
    lastName: "Joes",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

console.log(persons1.fullName()); 
// output → Tutor Joes

const anotherPerson1 = {
    firstName: "Ram",
    lastName: "Kumar",
};

console.log(persons1.fullName.call(anotherPerson1)); 
// output → Ram Kumar



// Example 2: Using apply() with array arguments
const persons2 = {
    firstName: "Tutor",
    lastName: "Joes",
    fullName: function (age, city) {
        return this.firstName + " " + this.lastName + " , Age: " + age + " , City: " + city;
    },
};

console.log(persons2.fullName(25, "Chennai")); 
// output → Tutor Joes , Age: 25 , City: Chennai

const anotherPerson2 = {
    firstName: "Ram",
    lastName: "Kumar",
};

// Here arguments are passed as an array
console.log(persons2.fullName.apply(anotherPerson2, [30, "Coimbatore"])); 
// output → Ram Kumar , Age: 30 , City: Coimbatore



// Example 3: Using bind()
const persons3 = {
    firstName: "Tutor",
    lastName: "Joes",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

console.log(persons3.fullName()); 
// output → Tutor Joes

const anotherPerson3 = {
    firstName: "Ram",
    lastName: "Kumar",
};

// bind returns a new function
const boundFullName = persons3.fullName.bind(anotherPerson3);

console.log(boundFullName()); 
// output → Ram Kumar
//====================================================================