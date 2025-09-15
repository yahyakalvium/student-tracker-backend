// index.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error}`);
  });

// Middleware and routes can be added here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
  console.log(`http://localhost:${PORT}`)
});