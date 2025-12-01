const prompt = require("prompt-sync")({sigint: true});

/* 
let getName = prompt("Please enter your name: ");

// 1. While loop
// If a condition is to be checked first, before running a while loop

while(getName === ""){                                  // Check first
    getName = prompt("Please enter your name: ");       // Do later
}

console.log(`Welcome, ${getName}`);   
*/


// 2. Do-while loop
// Since it is a must to obtain the user's name, do the executable block AT LEAST ONCE

/* 
let getName2 = "";

do {
    getName2 = prompt("Please enter your name: ");   // Do first
} while (getName2 === "");                           // Ask later

console.log(`Welcome, ${getName2}`);   
*/

// 3. Game input
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

let move = "";

function updateMove(m=""){
    if(m===UP) return console.log("You moved up.");            // Tell user he move up
    if(m===DOWN) return console.log("You moved down.");        // Tell user he move down
    if(m===LEFT)return console.log("You moved left.");         // Tell user he move left
    if(m===RIGHT)return console.log("You moved right.");       // Tell user he move right
    if(m===QUIT)return console.log("You quit the game!");      // Tell user he quit the game
    console.log("Invalid entry!");                             // Tell user he entered an invalid value
}

do{
    move = prompt("(w)up, (s)down, (a)left, (d)right, (q)exit: ");

    switch(move.toLowerCase()){
        case UP:
            updateMove(UP);
            break;
        case DOWN:
            updateMove(DOWN);
            break;
        case LEFT:
            updateMove(LEFT);
            break;
        case RIGHT:
            updateMove(RIGHT);
            break;
        case QUIT:
            updateMove(QUIT);
            break;
        default:
            updateMove();
    }
}while(move.toLowerCase() !== QUIT);

