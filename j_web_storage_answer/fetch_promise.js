function fetchData() {
    fetch("https://reqres.in/api/unknown", {
        headers: { "x-api-key": "<your-api-key>" }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

fetchData();