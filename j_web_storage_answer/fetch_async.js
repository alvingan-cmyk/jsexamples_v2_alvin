async function fetchData() {
  try {
    const response = await fetch("https://reqres.in/api/unknown", {
        headers: { "x-api-key": "<your-api-key>" }
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();
