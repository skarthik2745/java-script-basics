// class , inheritance

// ES6 Example
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hello, my name is " + this.name);
    }
}

var person = new Person("Joes");
console.log(person);
person.sayHello();

class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  eligiblity() {
    console.log(
      this.name +
        " age is " +
        this.age +
        " " +
        (this.age >= 18 ? "Eligible" : "Not Eligible")
    );
  }
}

var student = new Student("Ram", 12);
student.sayHello();
student.eligiblity();
//============================================

console.log("________________________________")
//types of inheritance
// -------------------------
// Example 1: Class & Object
// -------------------------

// A simple class "Person"
class Person1 {
    constructor(name, age) {
        this.name = name;   // property
        this.age = age;     // property
    }

    // method
    introduce() {
        console.log("Hi, I am " + this.name + " and I am " + this.age + " years old.");
    }
}

// creating object of Person1 class
const p1 = new Person1("Joes", 25);
p1.introduce();  
// output → Hi, I am Joes and I am 25 years old.


// --------------------------------------------------
// Example 2: Single Inheritance
// (One parent → One child)
// --------------------------------------------------

class Animal2 {
    sound() {
        console.log("Animals make sounds");
    }
}

// Dog2 inherits from Animal2
class Dog2 extends Animal2 {
    bark() {
        console.log("Dog barks: Woof Woof!");
    }
}

const dog2 = new Dog2();
dog2.sound();   // from parent class
dog2.bark();    // from child class
// output → Animals make sounds
// output → Dog barks: Woof Woof!


// --------------------------------------------------
// Example 3: Multilevel Inheritance
// (Grandparent → Parent → Child)
// --------------------------------------------------

class LivingBeing3 {
    breathe() {
        console.log("All living beings breathe");
    }
}

class Mammal3 extends LivingBeing3 {
    hasMilk() {
        console.log("Mammals produce milk");
    }
}

class Human3 extends Mammal3 {
    speak() {
        console.log("Humans can speak");
    }
}

const human3 = new Human3();
human3.breathe();  // from grandparent
human3.hasMilk();  // from parent
human3.speak();    // from child
// output → All living beings breathe
// output → Mammals produce milk
// output → Humans can speak


// --------------------------------------------------
// Example 4: Hierarchical Inheritance
// (One parent → Multiple children)
// --------------------------------------------------

class Shape4 {
    area() {
        console.log("Different shapes have different areas");
    }
}

// Circle4 extends Shape4
class Circle4 extends Shape4 {
    area() {
        console.log("Area of Circle = πr²");
    }
}

// Square4 extends Shape4
class Square4 extends Shape4 {
    area() {
        console.log("Area of Square = side × side");
    }
}

const circle4 = new Circle4();
const square4 = new Square4();
circle4.area();
// output → Area of Circle = πr²
square4.area();
// output → Area of Square = side × side


// --------------------------------------------------
// Example 5: Multiple Inheritance (⚠ Not directly supported in JS)
// --------------------------------------------------

// In Java, C++, multiple inheritance is allowed directly.
// In JavaScript, classes can extend only ONE parent.
// But we can achieve similar behavior using "Mixins".

// Example: Two functionalities
let CanFly5 = Base => class extends Base {
    fly() {
        console.log("I can fly!");
    }
};

let CanSwim5 = Base => class extends Base {
    swim() {
        console.log("I can swim!");
    }
};

// Base class
class Creature5 {}

// Apply mixins to achieve multiple behavior
class Duck5 extends CanFly5(CanSwim5(Creature5)) {
    quack() {
        console.log("Duck says Quack!");
    }
}

const duck5 = new Duck5();
duck5.fly();   // from CanFly5
duck5.swim();  // from CanSwim5
duck5.quack(); // from Duck5
// output → I can fly!
// output → I can swim!
// output → Duck says Quack!

//=====================================================
console.log("_______________________________");
// getter, setter
class Person22 {
  constructor(firstName33, lastName44) {
    this.firstName33 = firstName33;
    this.lastName44 = lastName44;
  }

  get fullName55() {
    return this.firstName33 + " " + this.lastName44;
  }

  set fullName55(name66) {
    const parts77 = name66.split(" ");
    this.firstName33 = parts77[0];
    this.lastName44 = parts77[1];
  }
}

const p88 = new Person22("Tutor", "Joes");
console.log(p88);
console.log(p88.fullName55);

p88.fullName55 = "Raj Kumar";
console.log(p88);
console.log(p88.fullName55);
//=========================================
console.log("_______________________________");

// getter , setter
class Rectangle77 {
  constructor(width22, height33) {
    this.width22 = width22;
    this.height33 = height33;
  }

  // Getter: calculate area
  get area55() {
    return this.width22 * this.height33;
  }

  // Setter: if area is changed, adjust height (keeping width constant)
  set area55(newArea66) {
    this.height33 = newArea66 / this.width22;
  }
}

const rect88 = new Rectangle77(10, 5);

console.log("Width:", rect88.width22);
console.log("Height:", rect88.height33);
console.log("Area:", rect88.area55);

rect88.area55 = 200; // update area, height adjusts
console.log("Updated Height:", rect88.height33);
console.log("New Area:", rect88.area55);
//===========================================================
console.log("_______________________________");
// getter setter
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.radius);
console.log(myCircle.diameter);
console.log(myCircle.area);

myCircle.diameter = 12;
console.log(myCircle.radius);
console.log(myCircle.diameter);
console.log(myCircle.area);
//==================================================================
console.log("_______________________________");
// static 

class MyClass {
  static myStaticProperty = "Joes";

  static myStaticMethod() {
    console.log("I am from Static Method");
  }
}

MyClass.myStaticMethod();
console.log(MyClass.myStaticProperty);

class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }
}

console.log(MathUtils.add(10, 20));
console.log(MathUtils.subtract(10, 20));
console.log(MathUtils.multiply(10, 20));
console.log(MathUtils.divide(10, 20));
//======================================================
console.log("_______________________________");
// singleton

//Example 2: Singleton Pattern
class Database {
  static instance = null;
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2);

// Singleton Logger Example // store data
class Logger {
  static instance = null;

  constructor() {
    this.messages = []; // memory inside the single instance
  }

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message) {
    this.messages.push(message);
    console.log(this.messages);
  }
}

const logger1 = Logger.getInstance();
logger1.log("First message");
logger1.log("Second message");

const logger2 = Logger.getInstance();
logger2.log("Third message");
// overwrite
// Singleton Example: Overwriting the data
class UserSession {
  static instance = null;

  constructor() {
    this.currentUser = null; // only one slot in memory
  }

  static getInstance() {
    if (!UserSession.instance) {
      UserSession.instance = new UserSession();
    }
    return UserSession.instance;
  }

  login(userName) {
    this.currentUser = userName;  // overwrite the old user
    console.log(`Logged in as: ${this.currentUser}`);
  }

  getUser() {
    return this.currentUser;
  }
}

// Usage
const session1 = UserSession.getInstance();
session1.login("Alice");   // Overwrites -> currentUser = "Alice"

const session2 = UserSession.getInstance();
session2.login("Bob");     // Overwrites -> currentUser = "Bob"

console.log("From session1:", session1.getUser()); // Bob
console.log("From session2:", session2.getUser()); // Bob
console.log(session1 === session2); // true
//======================================================
console.log("_______________________________");

// Example 3: Constants
class Colors {
  static RED = "#ff0000";
  static GREEN = "#00ff00";
  static BLUE = "#4c00ffff";
}

console.log(Colors.RED);
console.log(Colors.GREEN);
console.log(Colors.BLUE);
//=====================================

// prototype
let arr = ["apple", "orange"];

let obj = {
  name: "Joes",
  city: "salem",
  info: function () {
    return `${this.name} from ${this.city}`;
  },
};

function myFunction() {}

// ------------------ Console Prints ------------------
/*
// Array prototype chain
console.log("arr._proto", arr.proto_); 
// -> [constructor: f, at: f, concat: f, copyWithin: f, fill: f, …]

console.log("Array.prototype", Array.prototype); 
// -> same as arr._proto_, contains all array methods

console.log("arr._proto.proto", arr.proto.proto_); 
// -> {constructor: f, hasOwnProperty: f, isPrototypeOf: f, …}

console.log("arr._proto.proto.proto", arr.proto.proto.proto_); 
// -> null

// Object prototype chain
console.log("obj._proto", obj.proto_); 
// -> {constructor: f, hasOwnProperty: f, isPrototypeOf: f, …}

console.log("obj._proto.proto", obj.proto.proto_); 
// -> null

// Function prototype chain
console.log("myFunction.prototype", myFunction.prototype); 
// -> {constructor: f}  (an empty object with a constructor pointing back to myFunction)

console.log("myFunction.prototype._proto", myFunction.prototype.proto_); 
// -> {constructor: f, hasOwnProperty: f, isPrototypeOf: f, …}

console.log("myFunction.prototype._proto.proto", myFunction.prototype.proto.proto_); 
// -> null

*/
// prototype chaining

// ---------------- Example 1: Object with Prototype Chain ----------------
console.log("_____________")
let obj1 = {
  name: "Joes",
  city: "salem",
  info: function () {
    return `${this.name} is from ${this.city}`;
  },
};

/*
// Another way (commented in your code):
let obj2 = {
  name: "Raja",
  city: "chennai",
};
obj2._proto_ = obj1;
*/

const obj2 = Object.create(obj1);
obj2.name = "Raja";

// ---------------- Example 2: Extending Array Prototype ----------------
Array.prototype.doubleLength = function () {
  return this.length * 2;
};

let arrr = ["apple", "orange"];

console.log(arrr._proto_);
// -> Array.prototype { doubleLength: f, constructor: f, at: f, concat: f, ... }

console.log(arrr.doubleLength()); 
// -> 4  (2 elements × 2)


// ---------------- Example 3: Constructor Function with Prototype ----------------
function fun() {}

function Persons(name) {
  this.name = name;
}

Persons.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Persons("Alice");
const bob = new Persons("Bob");

alice.greet(); // -> Hello, my name is Alice
bob.greet();   // -> Hello, my name is Bob
//=====================================================