// Number
var aa = 25.5;
console.log(typeof aa); // number

// String
var fname = "Tutor Joes";
console.log(typeof fname); // string

// Boolean
var isMarried = true;
console.log(typeof isMarried); // boolean

// Null
var phone = null;
console.log(phone); // null
console.log(typeof phone); // object

// Undefined
let b;
console.log(typeof b); // undefined

// Symbol (ES6)
const s1 = Symbol();
console.log(typeof s1); // symbol

const s2 = Symbol();
console.log(typeof s2); // symbol

// Array
var courses = ["C", "C++", "Java"];
console.log(typeof courses); // object

// Object
var student = {
  name: "Joes",
  age: 22,
};
console.log(typeof student); // object

// Date
var d = new Date();
console.log(d);
console.log(typeof d); // object/


//Type Conversion

// num to string
let a;
a = 25;
console.log(a, typeof a, '->', String(a), typeof String(a));

a = 25.5;
console.log(a, typeof a, '->', String(a), typeof String(a));

a = true;
console.log(a, typeof a, '->', String(a), typeof String(a));

a = new Date();
console.log(a, typeof a, '->', String(a), typeof String(a));

a = [1, 2, 3, 4, 5];
console.log(a, typeof a, '->', String(a), typeof String(a));

a = 25;
console.log(a, typeof a, '->', a.toString(), typeof a.toString());

b=String(a);
console.log(b, typeof b);

// string to number

// Type Conversion

// String to Number
a = "125";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = false;
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = [1, 2, 3, 4, 5];
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = "Tutor Joes";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);// NaN

a = "35";
console.log(a, typeof a);
a = parseInt(a);
console.log(a, typeof a);

a = "35.55";
console.log(a, typeof a);
a = parseInt(a);
console.log(a, typeof a); //35  trunc

a = "35.55";
console.log(a, typeof a);
a = parseFloat(a);
console.log(a, typeof a);

// Other type conversions
a = [1, 2, 3, 4, 5];
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = 25;
console.log(a, typeof a);
a = a.toString();
console.log(a, typeof a);


// type coercion

let x="90"
let y=90
console.log(x+y)

d=Number(x)
console.log(d+y)