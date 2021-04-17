const mongoose = require('mongoose');
const connection = require('./../db');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: 2,
    },
    lastName: {
        type: String,
        minLength: 2,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ['ADMIN', 'MODERATOR', 'USER'],
        required: true,
    },
});


const User = connection.model('User', userSchema);
module.exports = User;