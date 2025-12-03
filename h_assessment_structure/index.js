const prompt = require("prompt-sync")({ sigint: true });

// DONE: Game elements/assets constants
const GRASS = "░";
const HOLE = "O";
const HAT = "^";
const PLAYER = "*";

// DONE: UP / DOWN / LEFT / RIGHT / QUIT keyboard constants
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

// DONE: MSG_UP / MSG_DOWN / MSG_LEFT / MSG_RIGHT / MSG_ QUIT / MSG_INVALID message constants
const MSG_UP = "You moved up.";
const MSG_DOWN = "You moved down.";
const MSG_LEFT = "You moved left.";
const MSG_RIGHT = "You moved right.";
const MSG_QUIT = "You quit the game.";
const MSG_INVALID = "Invalid entry.";
const MSG_WELCOME =
  "\n*******************************\n Welcome to Find Your Hat Game\n*******************************\n";

// DONE: WIN / LOSE / OUT messages constants
const WIN = "Congratulations, you won!";
const LOSE = "You fell into a hole, you lost!";
const OUT = "You went out-of-bounds! Please restart.";

// DONE: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 6;
const COLS = 10;
const PERCENT = 0.2; // variable that set the % of randomisation of holes in game field to 20%

class Field {
  /**
   * DONE: constructor, a built-in method of a class (invoked when an object of a class is instantiated)
   * @param {Array} field - field is passed in as an Array to populate the property field of this class' instance
   */
  constructor(field = null) {
    this.field = field; // Initialise all the property within the class: field, gamePlay & playerPosition
    this.gamePlay = false; // game is by default = false
    this.playerPosition = { x: 0, y: 0 }; // player position is by default x:0, y:0; javaScript object
  }

  /**
   * DONE: generateField is a static method, returning a 2D array of the fields
   * @param {Number} rows    - rows for the field
   * @param {Number} cols    - cols for the field
   * @param {Number} percent - percentage of random holes
   * @returns {Array}        - 2D array to be used by the instance of the game
   */
  static generateField(rows = 8, cols = 8, percent = 0.1) {
    const map = new Array();

    // generate fileds by rows and cols passed in
    for (let row = 0; row < rows; row++) {            // for each row


      map[row] = new Array();                         // create a new array

      for (let col = 0; col < cols; col++) {          // for each col

        map[row][col] = Math.random() > percent ? GRASS : HOLE; // use math.random() to randomise the holes in the map
      }
    }

    if (map[0][0] === HOLE) {                        // Check the starting position (0,0) for HOLE.
      map[0][0] = PLAYER;                            // if true, reset the position to PLAYER
    }

                                
    return map;
  }

  /**
   * DONE: welcomeMessage is a static method, displays a string
   * @param {*} msg  - is a string value to print out to the user at the start of the game
   */
  static welcomeMessage(msg) {
    console.log(msg);
  }

  // DONE: setHat positions the hat along a random x and y position within field array
  setHat() {
    // position of the Hat
    const xHat = Math.floor(Math.random() * (ROWS - 1)) + 1; // (0 + 3) + 1, therefore, my min x = 1
    const yHat = Math.floor(Math.random() * (COLS - 1)) + 1; // (0 + 3) + 1, therefore, my min y = 1
    this.field[xHat][yHat] = HAT;
  }

  // DONE: printField displays the updated status of the field position
  printField() {
    this.field.forEach((row) => {
      console.log(row.join(""));
    });
  }
  // DONE: updateMove displays the move (key) entered by the user
  /**
   *
   * @param {String} m - passes in the value representing the player's move
   * @returns
   */
  updateMove(m = "") {
    if (m === UP) return console.log(MSG_UP);
    if (m === DOWN) return console.log(MSG_DOWN);
    if (m === LEFT) return console.log(MSG_LEFT);
    if (m === RIGHT) return console.log(MSG_RIGHT);
    if (m === QUIT) return console.log(MSG_QUIT);
    return console.log(MSG_INVALID);
  }

  /**
   * !! DONE: updateGame Assessment Challenge
   * @param {*} m accept the value of the player's move (UP|DOWN|LEFT|RIGHT)
   */
  updateGame(m = "") {
    const oldX = this.playerPosition.x;                            // Capture the player's current X and Y position (store old position)
    const oldY = this.playerPosition.y;

    let newX = oldX;                                               // Determine the new position based on input 'm'
    let newY = oldY;

    if (m === UP) newX -= 1;
    if (m === DOWN) newX += 1;
    if (m === LEFT) newY -= 1;
    if (m === RIGHT) newY += 1;

    if (newX < 0 || newX >= ROWS || newY < 0 || newY >= COLS) {    // Check for out of bounds 
      console.log(OUT);
      process.exit();
    }

    const destination = this.field[newX][newY];                   // Check what is at the new location

    if (destination === HOLE) {
      console.log(LOSE);
      process.exit();
    } else if (destination === HAT) {
      console.log(WIN);
      process.exit();
    }

    this.field[oldX][oldY] = GRASS;                              // Update the previous position to grass

    this.playerPosition.x = newX;                                // Update the player's stored position coordinates
    this.playerPosition.y = newY;


    this.field[newX][newY] = PLAYER;                             // Update the field map with the player's new location
  }
  
  //  DONE: start() a public method of the class to start the game
  start() {
    this.gamePlay = true;                                       // start the game
    this.setHat();                                              // the postion of the Hat
    this.updateGame();

    // while gamePlay === true, track player moves and updates
    do {
      this.printField();                                        // print the formatted field
      const input = prompt("(w)up, (s)down, (a)left, (d)right, (q)exit:");

      switch (input.toLowerCase()) {
        case UP:
          this.updateMove(UP);
          break;
        case DOWN:
          this.updateMove(DOWN);
          break;
        case LEFT:
          this.updateMove(LEFT);
          break;
        case RIGHT:
          this.updateMove(RIGHT);
          break;
        case QUIT:
          this.updateMove(QUIT);
          break;
        default:
          this.updateMove();                                 // return (MSG_INVALID)
          break;
      }

      if (input.toLowerCase() === QUIT) this.gamePlay = false;

      this.updateGame(input);
    } while (this.gamePlay);
  }
}

// DONE: Generate a new field - using Field's static method: generateField
const gameField = Field.generateField(ROWS, COLS, PERCENT);

// DONE: Generate aa welcome message
Field.welcomeMessage(MSG_WELCOME);

// DONE: Create a new instance of the game
const game = new Field(gameField);

// DONE: Invoke method start(...) from the instance of game object
game.start();
