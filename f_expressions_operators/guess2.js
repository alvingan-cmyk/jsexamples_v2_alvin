let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase(); //converted to a string with .toLowerCase

// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput !== 'q') {
    console.log(userInput);
        if(Number(userInput) === 10 || userInput === "ten"){ //use Number(userInput) to check the answer '10' as a number instead of a string
            alert("You are correct"); // if the user enter the correct answer, provide an alert
            break;
        }
        else if(!userInput){
            userInput = prompt("Your answer is empty. Please enter a value").toLowerCase();
        }
        else {
            alert("Answer incorrect.")
            userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
        }

    // if the user puts in an empty string, provide an alert

    // if the user enter a wrong anwser, provide an alert as well


/*   if (userInput == ans) {
    alert("You are correct!!");
    break;
  } else if (!userInput) {
    
    userInput = prompt("Your answer is empty. Please try again.");
  } else {
    userInput = prompt("Wrong answer. Guess again. Press q or Q to quit.");
  } */
}
