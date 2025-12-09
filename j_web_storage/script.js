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

// Fetch the subsequent page(s) of Data (using a For Loop)
async function fetchColorsList() {

    try {

        // Using fetch, call for the 1st page of Data from the given url
        const response = await fetch("https://reqres.inx/api/unknown", {
           // headers: { "x-api-key": "reqres_dc4575bad70245a1a5462ade5ea74404" }
        });
        const resp = await response.json();
        console.log(resp.data);

        if (!resp.data)
            throw new Error("There was an error.");

        // Fetch the subsequent page(s) of Data (using a For Loop)
        let allColors = resp.data;              // 6 items
        let page = resp.page + 1;               // move pointer to page 2
        let totalPages = resp.total_pages;      // total pages === 2

        // start fetching from the 2nd page onwards
        for (let currentPage = page; currentPage <= totalPages; currentPage++) {
            const response = await fetch(`https://reqres.inx/api/unknown?page=${currentPage}`, {
               // headers: { "x-api-key": "reqres_dc4575bad70245a1a5462ade5ea74404" }
            });
            console.log("currentPage");
            const resp = await response.json();
            allColors.push(...resp.data); //spread operator: returned array to be pushed into allColors array
        }

        console.log(allColors); // [1,2,3,4,5,6,7,8,9,10,11,12] you should see elements

        // Clear listColors first
        listColors.innerHTML = "";

        // Create an array to store the color list to localStorage
        const arrColors = new Array();

        // Loop through each array index to be passed to addItem(item) function for display
        // Also, convert each JSON object item into a string for storage into arrColors
        allColors.forEach((color) => {
            addItem(color);
            arrColors.push(color);
        })
        // Store the array data arrColors into the browser window's localStorage 
        window.localStorage.setItem("list-colors", JSON.stringify(arrColors))

    } catch (error) {
        const errHeader = document.createElement("div");
        errHeader.className = "d-flex justify-content-center text-danger py-2";
        errHeader.textContent = ("Error loading colours!");
        listColors.append(errHeader);
    }
}
// 2.  Implement the loadColorsFromStorage() function so the colour values are loaded from the local storage.
//     Open the developer tools and verify that the data is stored in the local storage.

function loadColorsFromStorage() {
    // Retrive the values stored in list-colors from localstorage
    const arrColors = window.localStorage.getItem("list-colors");

    // parse the values into Objects (JSON.parse())
    const parsedColors = JSON.parse(arrColors);

    // iterate and populate the HTML page by calling addItem()
    parsedColors.forEach((color) => {
        addItem(color);
    })
}
// 3. when the document content is loaded,
//    if available, load the color list from localStorage
//    otherwise, invoke fetchColorsList() to fetch the colors from the external api
document.addEventListener("DOMContentLoaded", () => {

    const loadColors = window.localStorage.getItem("list-colors");

    if (loadColors)
        return loadColorsFromStorage();

    return fetchColorsList();
});
