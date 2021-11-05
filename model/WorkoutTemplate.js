const mongoose = require('mongoose');

const workoutTemplateSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            exerciseName: {
                type: String
            }
        }
    ]
});

module.exports = mongoose.model('WorkoutTemplate', workoutTemplateSchema);