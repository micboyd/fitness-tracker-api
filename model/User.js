const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        min: 6,
        max: 255
    }, 
    surname: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    }, 
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    completeMunros: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('User', userSchema);