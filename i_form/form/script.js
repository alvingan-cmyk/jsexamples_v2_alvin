// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// Create the array to populate selectDom
const arrTopics = new Array("Methods", "Properties", "Eventlisteners");

// Create the array to store selected values (for submission)
const arrSelected = new Array();

// Declare constant selectDom to refer to <select> of id = "selectTopics"
const selectDom = document.getElementById("selectTopics");

// Set the attributes of selectDom
selectDom.setAttribute("multiple", "true");

// Populate the options in selectDom
arrTopics.forEach((topic, index) => {
  selectDom.options.add(new Option(`${index + 1}. ${topic}`, topic));
});

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options
arrTopics.forEach((topic, index) => {
  selectDom.options[index].setAttribute(
    "class",
    "btn btn-primary d-block m-2 "
  );
  // selectDom.options[index].classList.add("btn", "btn-primary", "d-block", "m-2");
});

// 12. element.addEventListener()
// Adding an event listener to a button
selectDom.addEventListener("change", () => {
  // get the collection of options from the <select> object
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions
  const collection = selectDom.selectedOptions;

  // iterate through the collection
  for (let index = 0; index < collection.length; index++) {
    //obtain the selected option from <select>
    const itemValue = collection[index].getAttribute("value");
    //console.log(itemValue);

    //check if arrSelected contains one of the selected list items
    const found = arrSelected.find((item) => item === itemValue);

    // only if it is not found, then add it to the list to display
    if (!found) {
      // create the list items element to be appended on to listSelected <ul>
      // list item element should show the text stored in itemValue
      const listItem = document.createElement("li");
      listItem.textContent = itemValue;
      document.getElementById("listSelected").append(listItem);

      //update arrSelected
      arrSelected.push(itemValue);
    }
  }
});

// Clear the selection from listSelected and arrSelected
// Use the splice method to remove all elements in an array
const btnClearSelectList = document.getElementById("btnClearSelection");

btnClearSelectList.addEventListener("click", () => {

  // clear all selected items
  document.getElementById("listSelected").innerHTML = "";
  
  // clear the array arrSelected (if there are 3 elements, arrSelected.length = 3)
  arrSelected.splice(0, arrSelected.length);
  
  // after clearing the array, the length should be 0
  console.log(arrSelected.length);
});
