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