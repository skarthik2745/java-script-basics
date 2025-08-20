// object literal notation

const student = {
    fullName: "Ram",
    father: "Sam",
    age: 12,
    address: "cherry road",
    city: "salem",
    about: function () {
        return `${this.fullName} is from ${this.city}`;
    },
    eligiblity: function () {
        return this.age >= 18;
    },
};

console.log(student);
console.log(student.about());
console.log(student.eligiblity());

//============================================================================
// factory function

function addStudent(fullName, father, age, address, city) {
    const user = {};
    user.fullName = fullName;
    user.father = father;
    user.age = age;
    user.address = address;
    user.city = city;
    user.about = function () {
        return `${this.fullName} is from ${this.city}`;
    };
    user.eligiblity = function () {
        return this.age >= 18;
    };
    return user;
}

const student1 = addStudent("Sam", "Raja", 25, "Gandhi Road", "Salem");
console.log(student1);
console.log(student1.about());
console.log(student1.eligiblity());

const student2 = addStudent("Kumar", "Arun", 17, "Lake View Street", "Chennai");
console.log(student2);
console.log(student2.about());
console.log(student2.eligiblity());

const student3 = addStudent("Priya", "Sundar", 20, "MG Road", "Coimbatore");
console.log(student3);
console.log(student3.about());
console.log(student3.eligiblity());
//=============================================================

// optional chaining
const user = {
    name: 'Stanley',
    address: {
        city: 'Salem'
    }
};

console.log(user); 
// {name: 'Stanley', address: {…}}

console.log(user.address); 
// {city: 'Salem'}

console.log(user.address.city); 
// Salem


const user2 = {
    name: 'Stanley',
    /*address: {
        city: 'Salem'
    }*/
};

// Option-1 
console.log(user2.address ? user2.address.city : undefined); 
// Salem

// Option-2
console.log(user2.address && user2.address.city); 
// Salem

// Option-3
console.log(user2.address?.city); 
// Salem

// Option-4
let key = 'city';
console.log(user2.address?.[key]); 
// Salem

//======================================================

// optional chaining

const user_details = {
    userId: '456',
    account: {
        accountNumber: 'AE75457',
        holder: {
            profile: {
                firsrName: 'Tutor',
                lastName: 'Joes',
                //birthDate: '1989-10-12'
            }
        }
    },
    contact: {
        address: {
            city: 'Salem',
            state: 'Tamil Nadu',
            country: 'India'
        },
        phone: [
            {
                type: 'Home',
                phoneNumber: '4027825'
            },
            {
                type: 'Office',
                phoneNumber: '9043017679'
            }
        ]
    }
}

console.log(user_details);  
// {userId: '456', account: {…}, contact: {…}}

console.log(user_details.account && user_details.account.holder && user_details.account.holder.profile && user_details.account.holder.profile.birthDate);  
//undefined

console.log(user_details.account?.holder?.profile?.birthDate);  
//undefined
//==========================================================

// func inside obj

// Combined demo from the screenshots
console.log("_________________________________________-")
// ---- Section 1: Function inside an object ----
const object = {
  name: 'Tutor Joes',
  age: 25,
  // Alternative method forms (from screenshots):
  // method: function(){ console.log("I am Method"); }
  // method(){ console.log("I am Method"); }
  // Using arrow as shown:
  method: () => {
    console.log('I am Method');
  }
};


console.log(object);
console.log(object.name);
object.method();

// ---- Section 2 & 3: this, window/globalThis, and method borrowing ----
var age = 25; // for the global this.age demo

function info() {
  console.log(this.age); //25
  console.log(this); //wind obj
}
info()

console.log("_________________________________________-");

// user + nested objects reusing info
const users = {
  age: 45,
  fun: info,
  nested: {
    age: 15,
    fun: info
  }
};

console.log(users);
users.fun();
users.nested.fun();

console.log("_________________________________________-");

// ---- Section 4: this inside normal function vs nested function vs arrow ----
var age2 = 45; // shown in screenshot before the student example
const students = {
  age: 25,
  fun1: function () {
    console.log('Fun 1 :', this.age);
    console.log('Fun 1 :', this);

    function fun2() {
      console.log('Fun 2 :', this.age);
      console.log('Fun 2 :', this);
    }
    fun2(); // plain call: this is global (window/globalThis) in browsers

    const fun3 = () => {
      console.log('Fun 3 :', this.age);
      console.log('Fun 3 :', this);
    };
    fun3(); // arrow takes this from fun1's lexical scope (the student object)
  }
};

students.fun1();

//=================================================