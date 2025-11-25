// import the prompt-sync library
const prompt = require('prompt-sync')({sigint: true}); // allows CTRL+C to terminate the app


// let's try abit of a trivia using a prompt in the web browser
function greetUser(){
    let userName = prompt("please enter your name: ");
    
    if(userName.trim(/^\s+|^\t+|\t+|\s+$/g)){   // "   " will be trimmed, and therefore a falsy is applied
        console.log(`Welcome to FSD ${userName}!!!`);
    }else{
        console.log(`We did not receive your name`);
    }
}
 
greetUser();