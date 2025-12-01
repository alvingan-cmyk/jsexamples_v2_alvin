//import and use package "parse" from numbers-from-words. At Terminal, key: npm install numbers-from-words

const ans = 88;

const feedbackGuess = "Guess the number."; //ask the user to guess a number
const feedbackQuit = "Press q or Q to quit."; // allow the user to quit
const feedbackCorrect = "Your answer is correct."; //display when anwser is correct
const feedbackWrong = "Your answer is wrong."; // display when answer is wrong
const feedbackTooHigh = "Lower number please. Try again."; // display if number is too high
const feedbackTooLow = "Higher number please. Try again."; // display if number is too low
const feedbackEmpty = "Your answer is empty."; // display is the number is empty

// let userInput = prompt(feedbackGuess + " " + feedbackQuit).toLowerCase(); //default code
let userInput = prompt(feedbackGuess.concat(" ", feedbackQuit)).toLowerCase();

while (userInput !== "q") {

  let correctAns = false; //flag (instantiated as false)
  let feedback = ""; // message placeholder (instantiated as empty string "")

  switch (true) {
    case (Number(userInput) === ans || text2num(userInput) === ans):// answer is correct
      correctAns = true;
      feedback = feedbackCorrect;
      break;
    case !userInput: // answer is empty (boolean of an empty string === false, when !true === false)
      correctAns = false;
      feedback = feedbackEmpty;
      break;
    case Number(userInput) > ans || text2num(userInput) > ans: // answer is too high
      correctAns = false;
      feedback = feedbackTooHigh;
      break;
    case (Number(userInput) < ans || text2num(userInput) < ans): // answer is too low
      correctAns = false;
      feedback = feedbackTooLow;
      break;

    default:
      correctAns = false; // answer is wrong
      feedback = feedbackWrong;
  }

  //prepare the feedback to the user
  //if answer is correct
  if (correctAns) {
    alert(feedback);
    break;
  }

  // otherwise answer is wrong, ask for user input again
  alert(feedback);
  userInput = prompt(feedbackGuess.concat(" ", feedbackQuit)).toLowerCase();
}
