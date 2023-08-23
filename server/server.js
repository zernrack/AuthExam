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
  try {
    const { username, password } = req.body;
    console.log("Received login request for:", username);

    const response = await axios.post(
      "https://netzwelt-devtest.azurewebsites.net/Account/SignIn",
      { username, password }
    );

    console.log("API response:", response.data);
    res.json({ token: response.data.username }); // Respond with the token
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(401).json({ error: "Authentication failed" });
  }
});

// Handle GET requests to '/territory' endpoint
app.get("/territory", async (req, res) => {
  try {
    const response = await axios.get(
      "https://netzwelt-devtest.azurewebsites.net/Territories/All"
    );
    res.json(response.data); // Respond with fetched data
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." }); // Respond with an error message
  }
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
