function fetchData() {
  // TODO: fetch via promise
  fetch("https://reqres.in/api/unknown", {
    headers: {"x-api-key": "reqres_dc4575bad70245a1a5462ade5ea74404"},
  }).then((response) => {

    // if the response is not ok, throw a custom response
    if (response.status === 403)
      throw new Error('Permission Denied. Please confirm authentication.');
    else if (!response.ok)
      throw new Error('Network response is NOT ok.');

    console.log(response); // status: 403 when api key is not presented 

    // otherwise return the response in JSON format
    return response.json();

  })
    .then((result) => {
      // logs out the data from the fetch request
      console.log(result.data);
    })
    .catch((error) => {
      //catch any error that occurs (error trapping)
      console.log(error);
    })
}

fetchData();