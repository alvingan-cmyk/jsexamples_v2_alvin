async function fetchData() {
  // TODO: fetch via async/await
  try {
    
    // take note of the prepended keyword await
    const response = await fetch("https://reqres.in/api/unknown", {
      headers: {"x-api-key": "reqres_dc4575bad70245a1a5462ade5ea74404"},
    });

    //Handle errors gracefully,
    if(response.status === 403)
      throw new Error('Permission denied. Please confirm authentication.');
    else if(!response.ok)
      throw new Error('Network response is NOT ok.');

    // take note of the prepended keyword await
    const result = await response.json();             // const result = response.json();     
    console.log(result.data);                        // console.log(result);

  } catch (error) {
    // manage the error messages incl. those custom ones
    console.log(error.message);
  }
}
fetchData();
