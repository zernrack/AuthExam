const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

// Use the cors middleware to handle Cross-Origin Resource Sharing
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Handle POST requests to '/login' endpoint
app.post("/login", async (req, res) => {
  console.log("test log", req.body); // Log the request body for debugging purposes
  try {
    // Extract username and password from the request body
    const { username, password } = req.body;
    console.log("Received login request for:", username);

    // Make a POST request to external authentication API
    const response = await axios.post(
      "https://netzwelt-devtest.azurewebsites.net/Account/SignIn",
      {
        username,
        password,
      }
    );

    console.log("API response:", response.data);

  } catch (error) {
    console.error("Login error:", error.message);
    res.status(401).json({ error: "Authentication failed" });
  }
});

// Handle GET requests to '/territory' endpoint
app.get("/territory", (req, res) => {
    const url = "https://netzwelt-devtest.azurewebsites.net/Territories/All";
  
    // Make a GET request to the external API to fetch territory data
    axios
      .get(url)
      .then((response) => {
        res.send("Response data: " + JSON.stringify(response.data)); // Respond with fetched data
      })
      .catch((error) => {
        res.send("Error: " + error.message); // Respond with an error message
      });
  });

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
