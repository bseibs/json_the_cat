const request = require("request");

// API endpoint URL for Siberian breeds data
const url = "https://api.thecatapi.com/v1/breeds/search?q=siberian";

// Use request to make an HTTP GET request to the API endpoint
request.get(url, (error, response, body) => {
  // Check for errors
  if (error) {
    console.error("Error:", error.message);
    return;
  }

  // Check if response status code is not 200 OK
  if (response.statusCode !== 200) {
    console.error("Error:", response.statusCode, response.statusMessage);
    return;
  }

  // Parse the JSON string into an object
  const data = JSON.parse(body);

  // Check if data array is empty (no breeds found)
  if (data.length === 0) {
    console.log("Breed not found.");
    return;
  }

  // Print out the data object
  console.log(data);

  // Check the type of the data object
  console.log("Type of data:", typeof data);
});
