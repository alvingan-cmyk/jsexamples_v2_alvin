// import the prompt-sync library
const prompt = require('prompt-sync')({sigint: true});  // allows CTRL+C to terminate the app

// let's try abit of a trivia using a prompt the terminal console
function greetUser(){
    let userName = prompt("Please enter your name: ");
    
    if(userName.trim()){    // "  " will be trimmed, guard rail to prevent spaces being used
        console.log(`Welcome to FSD ${userName}!!!`);
    }else{
        console.log("We did not receive your name.");
    }
}

greetUser();