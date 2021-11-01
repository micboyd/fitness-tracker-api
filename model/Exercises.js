const mongoose = require('mongoose');

const exercises = new mongoose.Schema({
    userId: {
        type: String
    },
    exerciseName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Exercises', exercises);