const express = require('express');
const mongoose = require('mongoose');
const routes = require('./userRoutes');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});

// Use the cors middleware to enable Cross-Origin Resource Sharing
app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});