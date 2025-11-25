// 4. Type Casting

// Converting values to numbers using Number object
console.log(Number("3.142")); // 3.142
console.log(Number(Math.PI)); // 3.141592653589793
console.log(Number("        ")); //0
console.log(Number("")); //0
console.log(Number("88 88")); //Nan (not a number)
console.log(Number("Steve")); //Nan (not a number)

// Converting values to strings using String object
console.log(new Date()); // Unformatted of today's date and time
console.log(String(new Date())); // Formatted today's date and time to a string
console.log(String("98765")); //"98765"
console.log(String(98765)); //"98765"

//Converting values into boolean
console.log(Boolean("1")); // true (truthy response)
console.log(Boolean(1)); // true
console.log(Boolean("0")); // true (truthy response)
console.log(Boolean(0)); //false
console.log(Boolean(" ")); // true (truthy response)
console.log(Boolean("")); // false
console.log(Boolean("John")); // true

