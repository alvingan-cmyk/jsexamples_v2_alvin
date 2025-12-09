function fetchData(){

    // via promises
    fetch('https://pokeapi.co/api/v2/pokemon?offset=1328&limit=5')   // (?) is a query parameter
    .then((response) => {                                            // obtain the response and return the json format
        
        return response.json();
    })
    .then((data) => {                                                // work on the json response
       
       const returnedCharacters = data.results;

       if(!returnedCharacters.length)
        throw new Error("No characters found.");
       
        console.log(data);
    })                                             
    .catch((error) => {                                 // handle errors
        console.log(error.message);
    });                                           

}

// call / invoke the function
fetchData();
