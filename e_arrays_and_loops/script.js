// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
const myArray = [1, 2,3, 4, "Hello", true, null];
console.log(myArray.length);

// B) ARRAY METHODS

// i - map function of an array
// Implement your code here
const mappedArray = [1, 2, 3, 4, 5, 6];

const multiplyArrayBy10 = mappedArray.map(item => item * 10); // Shorthand of the arrow function
console.log(multiplyArrayBy10);

const multiplyArrayBy20 = mappedArray.map((item) => { // the full code for the arrow function
    return item * 20;
});
console.log(multiplyArrayBy20);

// ii - filter function of an array
// Implement your code here
const vowels = ["a", "e", "i", "o"];

const filteredVowels = vowels.filter(vowel => vowel === "a" || vowel === "u");
console.log(filteredVowels);

const filteredVowelslong = vowels.filter((vowel) => {
    return vowel === "a" || vowel === "u";
});
console.log(filteredVowelslong);

// iii - sort function of an array
// Implement your code here
const nums = [1, 2, 4, 5, 3, 6];
const names = ["James", "Chris", "Jax", "Lemon"];

// Sort by descending order
// Implement your code here
const descendNums = nums.sort((a, b) => a > b ? -1 : 1 );  /* ? is if, : is else */
console.log("decend", descendNums);

const acendNums = nums.sort((a, b) => a > b ? 1 : -1 ); // nums.sort(); works for ascending sort
console.log("ascend", acendNums);

// Sort by descending order
// Implement your code here
const descendNames = names.sort((a, b) => a > b ? -1 : 1 );  
console.log(descendNames);

const ascendNames = names.sort();  
console.log(ascendNames);

// iv - reduce function of an array
// Implement your code here
const numbers = new Array(1, 2, 3, 4);
const product_of_arr = numbers.reduce((a, b) => a * b);
console.log(product_of_arr);

// another approach of applying a reduce function of an array
// Implement your code here
const arr = new Array(2, 3, 4, 5);

function product(a, b){
    return a* b;
}

const resultOfProduct = arr.reduce(product);
console.log(resultOfProduct);

// append elements to an EXISTING array
const teamList = ["Tony", "Bruce", "Hulk", "Scarlet"];
//teamList[4] = "Strange" //for assigning a new name to the [4] location
teamList.push("Strange"); //add a name to list
console.log(teamList.length); //count the number of names
console.log(teamList);

teamList.pop(); //remove the last name from the list
console.log(teamList.length); //count the number of names
console.log(teamList);

//shift and unshift
const mag7 = ["FB", "AMZN", "AAPL", "TSLA", "GOOG"];
console.log(mag7.shift()); //FB removed
console.log(mag7); //AMZN, AAPL, TSLA, GOOG
// Unshift (prepend, META, NVDA, MSFT)
mag7.unshift("META", "NVDA", "MSFT");
console.log(mag7);

// Slice data (insert or replace data in an array)
const bballTeam = ["Jordan", "Pippen", "Bill"];
const index = 2;
const newPlayer = "Steph";
bballTeam.splice(index, 0, newPlayer); //insert newPlayer=Steph at index=2, 0= no replacing
console.log(bballTeam);


const newPlayer1 = "Dennis";
bballTeam.splice(1, 0, newPlayer1); //insert newPlayer1=Dennis at 1 (2nd position), 0= no replacing
console.log(bballTeam);

bballTeam.splice(bballTeam.length - 1, 1, "Rodman"); //insert Rodman at the (-1 = before the last of the index) and (1 = remove the last from the list. Bill removed)
console.log(bballTeam);
// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here

// Do a count up (1 - 10)
const max = 10;
for (let index = 1; index <= max; index++) {
    console.log(index);
};

// Index, the condition and the step are variables
const max100 = 100;
for (let index = 10; index <= max100; index = index + 10) { //index +=10
    console.log(index);
};

// countdown (10 - 1)
for (let index = max; index >= 1; index--) {
    console.log(index);

    if(index === 1)
        console.log("Merry X'mas!");
    else 
        console.log(index);
};

// countdown (10 - 1); TERNARY operation
for (let index = max; index >= 1; index--) {

    (index === 0) ? console.log("Merry X'mas") : console.log(index);
}


//index, the condition and the step can be changed


// ii - for-each loop
// Implement your code here

const tickerSymbols = ["META", "AMZN", "GOOG", "MSFT"];

for (let index = 0; index < tickerSymbols.length; index++){
    console.log(`${index +1}. ${tickerSymbols[index]}`);
}

tickerSymbols.forEach((element, index) => { console.log(`${element}`) });

// iii - do-while loop (execute first, check for the condition later)
// Implement your code here
let i = 0;

do {
    console.log(i); // print 0 to 10
    i++;
} while (i <= 5);


// iv - while loop (check the conditions first before running the while loop)
// Implement your code here

let j = 0;
while (j <= 10) {
    console.log(j);
    j++;
}