const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  // API endpoint URL for breed data
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // Use request to make an HTTP GET request to the API endpoint
  request.get(url, (error, response, body) => {
    // Check for errors
    if (error) {
      callback(error, null);
      return;
    }

    // Check if response status code is not 200 OK
    if (response.statusCode !== 200) {
      const errorMessage = `Error: ${response.statusCode} ${response.statusMessage}`;
      callback(new Error(errorMessage), null);
      return;
    }

    // Parse the JSON string into an object
    const data = JSON.parse(body);

    // Check if data array is empty (no breeds found)
    if (data.length === 0) {
      const errorMessage = "Breed not found.";
      callback(new Error(errorMessage), null);
      return;
    }

    // Return the first breed description found
    const breedDescription = data[0].description;
    callback(null, breedDescription);
  });
};

module.exports = { fetchBreedDescription };
