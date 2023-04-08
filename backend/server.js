const express = require('express');
const app = express();
const port = 3000;
const database = require('./utils/database');

database.connect(); // Call the connect() function in the database.js file to establish a connection to the MongoDB database

// Define your routes and middleware here

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
