const mongoose = require('mongoose');

const workoutInstanceSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    date: {
        type: Date
    }
});

module.exports = mongoose.model('WorkoutInstance', workoutInstanceSchema);