const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();  // To load environment variables from .env file

const app = express();

// Middleware
app.use(cors());            // Enable Cross-Origin Requests
app.use(express.json());    // Parse incoming JSON data

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Sample route to test the server
app.get('/', (req, res) => {
  res.send('Hello from the Resume Builder API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
