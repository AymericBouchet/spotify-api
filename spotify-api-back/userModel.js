const mongoose = require('mongoose');
const userData = new mongoose.Schema({
 name: String,
 spotifyLink: String,
});

const User = mongoose.model('User', userData);

module.exports = User;