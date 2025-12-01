let ans = 10;

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase(); //converted to a string with .toLowerCase

// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput !== 'q') {
    console.log(userInput);
        if(Number(userInput) === 10){ //use Number(userInput) to check the answer '10' as a number instead of a string
            alert("You are correct"); // if the user enter the correct answer, provide an alert
            break;
        }
        else if(!userInput){ // input empty string, provide an alert and prompt
            userInput = prompt("Your answer is empty. Please enter a value").toLowerCase();
        }
        else { // wrong answer, provide an alert and prompt

            const hint = (userInput < ans) ? "Higher" : "Lower"; // provide hints on a range

            alert(`Answer incorrect. ${hint} number please.`);
            userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
        }

}
