// 1. Primitive Data type

let pi = 3.142; // Variable with a number of 3.142
console.log(typeof pi);

let strValue = "Hello"; // Variable (camelCase naming) with a value of "Hello"
console.log(typeof strValue);

let boolValue = true; // Variable storing a boolean of true
console.log(typeof boolValue);

let nullValue = null; // Variable of null value (object)
console.log(typeof nullValue);

let undefineValue; // Variable that is declared BUT uninitialised
console.log(typeof undefineValue);

// 2. Non-primitve Types

let arr = ["a", "b", "c"]; // An array of 3 elements, starting index: 0, 1, 2
console.log(arr);

let faang = new Array(); // Declare a new INSTANCE of an Array called faang
faang[0] = "Facebook"; // Storing the value of "Facebook" to index position 0 of the array
faang[1] = "Amazon"; // Storing the value of "Amazon" to index position 1 of the array
console.log(faang);

console.log(faang[0]); // Accessing the value from index position 0 from array: faang
console.log(faang[1]); // Accessing the value from index position 1 from array: faang

let person = { name: "Sam", age: 42 }; // Create a Javascript object with 2 key values pairs (name, age)

console.log(`Name: ${person.name}`); // ("Name: ", person.name);
console.log(`Age: ${person.age}`);

let vehicle = new Object(); // Declaring a new INSTANCE of an Object called vehicle
vehicle.name = "Suzuki"; // Giving the vehicle object a PROPERTY called "name" and assigning it a value:i "Suzuki"
vehicle.model = "Swift"; // Giving the vehicle object a PROPERTY called "name" and assigning it a value:i "Swift"
vehicle.color = "Blue"; // ? what other related properties can be associated with the vehicle object

let announce = function(){console.log("Hello JS");}; // Declaring an new object as a function
announce(); // Invoke and execute the new object "announce()" as a function

// function announce(){ console.log("Hello JS"); }
// announce();

let announce2 = () => { //Declaring a new object "announce2" as an ARROW function
  console.log("Hello JS again.");
}
announce2(); // Invoke and execute the arrow function "announce2()"

// 3. Declaring variables using let, const and var
// const keyword
const PI = 3.14159; //Declare a immutable variable called PI
// PI = 3.142 

console.log(PI);

// let keyword (mutable variable)
function greet(){
    let greeting = "Welcome FSD Learners"; //varible let is locally scoped, only accessble in the function
    console.log(greeting);
}

// console.log(greeting); // ? is the varible greeting accessibble here?

//var keyword (NOT advisable to use)
var globalMsg = "Welcome to Full Stack Developer"; // I have a localMsg here

function welcome(){
    var localMsg = "Welcome to Full Stack Developer"; // I also have localMsg here
    console.log(localMsg); // Display message
}

// console.log(localMsg); // An error will appear
console.log(globalMsg); //Naturally, the compile uses globalMsg from line 68


 
