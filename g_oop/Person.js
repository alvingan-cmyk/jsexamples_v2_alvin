// a) Create a person object
const person = {name: "John"};
console.log(person);

// b) Create Person object
// when create a 'function' Person, you can use 'prototype' to add proprty to the Person, and instantiate using 'new'
function Person(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
}

// instantiating new Person objects
const person1 = new Person("John", "Doe");
const person2 = new Person("Alice", "Smith");

console.log(person1);
console.log(person2);

// c) Add a new property to a Person constructor function
Person.prototype.gender = "Male";
Person.prototype.membership = "Basic";

// What is the outcome when I print out person1 and person2?
console.log(person1.gender);
console.log(person2.gender);

person2.gender = "Female";
person2.membership = "Premium";

// d) Introduce a new method to Person
Person.prototype.getFulName = function(){
    // return this.firstName + " " + this.lastName;
    return `Member: ${this.firstName} ${this.lastName}. `;
}

Person.prototype.getMembership = function() {
    return `Type: ${this.membership} `;
}

console.log("Member: " + person1.firstName, person1.lastName + ".", "Type: " + person1.membership + ".", "Gender: " + person1.gender);
console.log(person2.firstName, person2.lastName, person2.membership, person2.gender);

console.log(person1.getFulName() + person1.getMembership());
console.log(person2.getFulName() + person2.getMembership());

