// Import required modules
const express = require('express');
const app = express();
const port = 3000; // You can change this to any available port you prefer

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
