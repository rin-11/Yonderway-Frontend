const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

function connect() {
  const uri = process.env.MONGODB_URI;
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch(err => {
      console.error('Error connecting to MongoDB:', err.message);
    });
}

module.exports = { connect };
