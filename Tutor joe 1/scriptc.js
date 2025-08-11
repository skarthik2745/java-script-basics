//cond chain

var aa=9
var r
r=aa>=90? "A grade":aa>=75? "B grade":aa>=50? "C grade":"D grade"
console.log(r)


// bitwise

let a = 2; // 0010 in binary
let b = 3; // 0011 in binary

// Bitwise AND
let andOp = a & b;
console.log("Bitwise AND of a & b = " + andOp);

// Bitwise OR
let orOp = a | b;
console.log("Bitwise OR of a | b = " + orOp);

// Bitwise NOT
let notOp = ~a;
console.log("Bitwise NOT of a (~a) = " + notOp);

// Bitwise XOR
let xorOp = a ^ b;
console.log("Bitwise XOR of a ^ b = " + xorOp);

// Left Shift
let leftShift = a << 1;
console.log("Left shift of a << 1 = " + leftShift);

// Right Shift
let rightShift = a >> 1;
console.log("Right shift of a >> 1 = " + rightShift);

// Unsigned Right Shift
let unsignedRight = a >>> 1;
console.log("Unsigned right shift of a >>> 1 = " + unsignedRight);

// =========================

// nullish coalescing operator

const user={name:"John", age:30, city:"New York"};
console.table(user)
user.phno??= "1234567890"; // Assigns if phno is null or undefined
console.table(user)


// Example with null
let aaa = null;
let result1 = aaa ?? 100;
console.log("When aaa is null: " + result1);  // 100 (default value)

// Example with undefined
let bb;
let result2 = bb ?? 2000;
console.log("When bb is undefined: " + result2);  // 200 (default value)

// Example with a normal value
let c = 10;
let result3 = c ?? 300;
console.log("When c has value 10: " + result3);  // 10 (original value)

//============================================

//if


var age =prompt("Enter your age:");
if (age >= 18) {
    console.log("You are eligible to vote.");
}
else 
{
    console.log("You are not eligible to vote.");
}



// if else if

var e=9

if (e>0){
    console.log("positive")
}
else if (a<0){
    console.log("negative")
}
else{
    console.log("zero")
}

var m=90

if(m>=90 && m<=100){
    console.log("A grade");
}
else if(m>=75 && m<90){
    console.log("B grade");
}
else if(m>=50 && m<75){
    console.log("C grade");
}
else if(m>=35 && m<50){
    console.log("D grade");
}
else {
    console.log("Fail");
}


// nested if

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else {
  if (score >= 75) {
    console.log("Grade: B");
  } else if (score >= 50) {
    console.log("Grade: C");
  } else {
    console.log("Grade: F");
  }
}

// eg 2

let english = 88,
  tamil = 92,
  maths = 79;
let total = english + tamil + maths;
let avg = total / 3;

console.log("Total : " + total);
console.log("Average : " + avg.toFixed(2));

if (english >= 35 && tamil >= 35 && maths >= 35) {
  console.log("Result : Pass");

  if (avg > 90) {
    console.log("Grade : A");
  } else if (avg > 80) {
    console.log("Grade : B");
  } else if (avg > 70) {
    console.log("Grade : C");
  } else {
    console.log("Grade : D");
  }
} else {
  console.log("Result : Fail");
  console.log("Grade : No Grade");
}


var w=55.9487
console.log(w.toFixed(2)); // 55.95
console.log(w.toFixed(1)); // 55.9
console.log(w.toFixed(3)); // 55.949