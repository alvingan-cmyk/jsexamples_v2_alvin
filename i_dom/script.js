// DOM Manipulation:
document.body.append("Appended string.");

const pagetitle = document.getElementById("pageTitle");

// 1. element.innerHTML
// Setting HTML markup contained within the element.

// Implement Code here
pagetitle.innerHTML = "<pre>Document Object Model: DOM<pre>";

// 2. element.innerText
// Rendering text content of a node and its descendants.

// Implement Code here
// pagetitle.innerText = "document object model".toUpperCase();

// 3. element.style
// Modifying the style of HTML elements

// Implement Code here
pagetitle.style.height = "2rem";
pagetitle.style.color = "#f00";

// 4. getElementById
// refer to the example above (line 4)

// 5. getElementsByTagName
// Using getElementsByTagName method, search for elements that match a tag name

// Implement Code here
const spans = document.getElementsByTagName("span");
/* spans[0].style.display = "block";
spans[1].style.display = "block";

spans[0].innerHTML = "Properties of the DOM";
spans[1].innerText = "Methods of the DOM.";  */

const spanInputs = ["Properties of the DOM.", "Methods of the DOM."];

// Using getElementsByTagName method, search for elements that match a tag's index

// Implement Code here
for (let index = 0; index < spans.length; index++) {
    spans[index].style.display = "block";
    spans[index].style.fontWeight = "bolder";
    //spans[index].innerText = `Span no. ${index + 1}.`;
    //spans[index].innerText = `Properties of the DOM ${[index] + 1}.`;
    //spans[index].innerText = `${spans[index].innerText}.`;
    spans[index].innerText = spanInputs[index];
}

// 6. createElement
// Adding a new HTML element in JavaScript.

// Implement Code here
const paragraph = document.createElement("p");
paragraph.innerText = "Appended Paragraph";
document.body.append(paragraph);

// 7. querySelector
// Selecting the first instance of h2 tag and adding an innerText
// * # - querySelector recognises a id
// * .- querySelector recognises a class
// *  - querySelector recognises a tag
// * input[type="type_name"] - querySelector recognises the input(s)

//document.querySelector only targets the 1st instance of the selected element

const header2 = document.querySelector("h2");
header2.innerText = "Heading 2 - tag selector";

const header3 = document.querySelector(".heading3");
header3.innerText = "Heading 3 - class selector";

const header4 = document.querySelector("#heading4");
header4.innerText = "Heading 4 - id selector";

const inputTxt = document.querySelector('input[type="text"]');
inputTxt.value = "Input selector engaged";

// Implement Code here

// Using querySelectorAll method, search for elements that match a tag's class

// Implement Code here
const updateListItems = document.querySelectorAll(".menuItem");

/* updateListItems[0].innerText = "menu item 1";
updateListItems[1].innerText = "menu item 2";
updateListItems[2].innerText = "menu item 3"; */


//Create a horizontal menu
//Each menu item to be a link with specific styles
const ulMenuBar = document.querySelector("ul");
ulMenuBar.classList.add("d-flex", "py-4");
ulMenuBar.setAttribute("name", "menubar");

// TODO: set the bar to 100% according to screen width

const menuTitles = ["Home", "About", "Product", "Promotion", "Contact"];
    
menuTitles.forEach((title, index) => {

    //create a list item to append (as a child) to the unordered list
    const listItem = document.createElement("li");
    listItem.setAttribute("name", `nav-menu-item`);
    listItem.setAttribute("key", `nav-menu-item-${index + 1}`);
    listItem.classList.add("mx-auto", "list-unstyled");
    ulMenuBar.appendChild(listItem);

    // create an anchor tag to insert into each list item
    const anchor = document.createElement("a");
    anchor.innerText = title;
    anchor.setAttribute("href", "#");
    anchor.setAttribute("name",`navlink`);
    anchor.classList.add("btn", "btn-success");

    listItem.appendChild(anchor);
});

// Learn to target the name of an element
const navbarElement = document.getElementsByName("menubar");
navbarElement[0].classList.add("bg-dark");

// Learn to target the elements with the same name
const navMenuElements = document.getElementsByName("nav-menu-item");
for (let index = 0; index < navMenuElements.length; index++){
    const element = navMenuElements[index];
    element.classList.add("border", "rounded", "border-2");
}


// 8. element.append()
// Adding a new HTML element inside an existing element.

// Implement Code here
const headerTwoGreeting = document.createElement("h2");
headerTwoGreeting.innerText = "Welcome to the world of JS!";

// 9. parentNode.appendChild(node)
// Adding a node using appendChild

// Implement Code here
const amendTitle = document.body.appendChild(headerTwoGreeting);
console.log("amendTitle: ", amendTitle);

amendTitle.innerText = "Welcome to the world of JS and CSS";

// ----------------------------------------------
// Refer to ./form/form.html and ./form/script.js
// ----------------------------------------------

// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options

// 12. element.addEventListener()
// Adding an event listener to a button
