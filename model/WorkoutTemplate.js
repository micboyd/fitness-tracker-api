const mongoose = require('mongoose');

const workoutTemplateSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    name: {
        type: String
    },
    exercises: {
        type: [String]
    }
});

module.exports = mongoose.model('WorkoutTemplate', workoutTemplateSchema);