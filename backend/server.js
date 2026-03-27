const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Database connection
const dbURI = 'your_mongo_db_connection_string'; // Replace with your MongoDB connection string
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));

// Sample API route
app.get('/api/sample', (req, res) => {
    res.status(200).json({ message: 'Sample API route working!' });
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
