// Example: 2D Array
/* **************** */
const array2D = [
  [3, 2, 7],        // index 0 of array2D
  [2, 9, 5],        // index 1 of array2D
  [5, 1, 5]         // index 2 of array2D       
];

console.log(array2D);

// accessing elements of a 2D Array
const element = array2D[1][1];
console.log("Element selected: ", element);

// Create a 2D array of game tiles
const myField = [
  ['░', '░', 'O', '░'],
  ['*', 'O', '░', 'O'],
  ['░', '^', '░', '░'],
];

console.log(myField);

// Using a for loop to create a 2D array with initial values of 0s
// constant arr2D is filled with 0s across all rows
const rows = 3;
const cols = 3;
const arr2D = [];

for (let i = 0; i < rows; i++) {
  arr2D[i] = [];      // Does this line create each row (or index) of the 2d array (yes / no)?

  for (let j = 0; j < cols; j++) {
    arr2D[i][j] = 0; // Initialize with 0 or any other value (you can amend this to populate with random tiles)
  }
}

console.log(arr2D);
