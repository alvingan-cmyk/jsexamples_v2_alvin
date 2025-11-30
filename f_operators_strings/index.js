// 1. Trim a string
let wordWithTrim = "   FSD   ";
console.log(`"${wordWithTrim.trim()}"`);
console.log(`"${wordWithTrim.trimStart()}"`);
console.log(`"${wordWithTrim.trimEnd()}"`);

// 2. toString (convert a number to a string)
let statusCode = 404;       // Number
console.log(typeof statusCode.toString());
console.log(typeof String(statusCode).toString());

// 3. TypeCast boolean data type to a string
let boolVal = true; 
console.log(typeof String(boolVal).toString());

// 4. Splitting a string
let fullName = "John Doe Smith";
let splitName = fullName.split(" ");
console.log(splitName.length); ["John", "Doe"];
console.log(`Welcome ${splitName[0]} ${splitName[1]}, to our site!`);

// 5. Spilt a string and obtain the string by X elements
let sentence = "Hello World JS Coders";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);    // ["Hello", "World", "JS"]

let splitWordIndex0 = splitInstances[0].split("");
console.log(splitWordIndex0);

// 6. Slidate the string based on today's date and render a custom message
const currDate = Date.now();
const today = new Date(currDate);       // new instance of Date
let splitToday = today.toDateString();  // eee mmm dd yyyy
splitToday = splitToday.split(" ");     // ["Fri", "Nov", "28", "2025"]    

let msg = "";

switch(splitToday[0]){
    case "Mon":
            msg = "Monday Blues";
            break;
    case "Tue":
    case "Wed":
    case "Thu":
            msg = "Work, work!";
            break;
    case "Fri":
            msg = "TGIF";
            break;
    default:
            msg = "Weekend is here";
}

console.log(msg);

