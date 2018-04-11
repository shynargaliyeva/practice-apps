const mongoose = require('mongoose');
// const Schema = mongoose.Schema --> destructered into:
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

// one argument means we are trying to fetch something out of mongoose, 
// two arguments means we're trying to load something into it
mongoose.model('users', userSchema);