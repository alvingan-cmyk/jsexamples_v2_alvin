const listColors = document.querySelector("#list-colors");

function addItem(item) {
  const colorCard = document.createElement("section");
  colorCard.className = "card w-100";
  listColors.append(colorCard);

  const colorCardBody = document.createElement("article");
  colorCardBody.className = "card-body";
  colorCard.append(colorCardBody);

  const colorCardTitle = document.createElement("h5");
  colorCardTitle.className = "card-title";
  colorCardTitle.innerText = item.name;
  colorCardBody.append(colorCardTitle);

  const colorCardText = document.createElement("p");
  colorCardText.className = "card-text";
  colorCardText.innerText = item.pantone_value;
  colorCardBody.append(colorCardText);

  const colorCardColor = document.createElement("figure");
  colorCardColor.style = "background-color: " + item.color + ";";
  colorCardColor.innerText = item.color;
  colorCardBody.append(colorCardColor);

  const colorCardBreak = document.createElement("br");
  listColors.append(colorCardBreak);
}

// 1. Implement the function fetchColorsList() using the browser Fetch API to download the full color list from the following endpoint:
// https://reqres.in/api/unknown

async function fetchColorsList() {

    try {

        // Using fetch, call for the 1st page of Data from the given url
        
        // Fetch the subsequent page(s) of Data (using a For Loop)
        
        // Clear listColors first
    
        // Create an array to store the color list to localStorage
    
        // Loop through each array index to be passed to addItem(item) function for display
        // Also, convert each JSON object item into a string for storage into arrColors
    
        // Store the array data arrColors into the browser window's localStorage 
        
    } catch (error) {
        
    }
}

// 2.  Implement the loadColorsFromStorage() function so the colour values are loaded from the local storage. 
//     Open the developer tools and verify that the data is stored in the local storage.

function loadColorsFromStorage() {
    
    // Retrive the values stored in list-colors from localstorage
    
    // parse the values into Objects (JSON.parse())
    

    // iterate and populate the HTML page by calling addItem()
    
}

// 3. when the document content is loaded, 
//    if available, load the color list from localStorage
//    otherwise, invoke fetchColorsList() to fetch the colors from the external api
document.addEventListener("DOMContentLoaded", () => {

})