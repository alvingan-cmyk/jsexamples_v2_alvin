// 1. Writing a function declaration

function ftnGreeting(salutation, user){

    // const msg = "Hi, " + salutation + " " + user;

    const msg = `Hi, ${salutation} ${user}`;

    return msg;
}

const result = ftnGreeting("Mr.", "Jones");
console.log(typeof result);

console.log(ftnGreeting("Mr.", "Jones"));

// 2. Function returning a sum of two values
// 2.1 Equip ftnAdd to handle non-existent ARGUMENTS (passed to its parameters eg a, b)
function ftnAdd(a = 0, b = 0){
    const result = a + b;
    return result; //return undefined
}

const sum = ftnAdd(10, 5); // ftn will sent over 2 ARGUMENTS  eg ftnAdd  
//console.log(ftnNoReturn());
console.log(sum); // 15

const anothersum = ftnAdd(); // Passing in ZERO ARGUMENTS
console.log(anothersum); //use (tyoeof anothersum) = number

// 3. Arrow Function
const anotherftnGreeting = (salutation = "", name = "") => {
  

    if(salutation.length == 0 && name.length == 0) // Handle empty values passed in
        return "Please enter your salutation and name";

    return `Hello, ${salutation} ${name}. Welcome to Generation Bootcamp.`;
        
};

console.log(anotherftnGreeting("Mr.", "Alvin"));
console.log(anotherftnGreeting());
