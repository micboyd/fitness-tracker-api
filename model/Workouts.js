const mongoose = require('mongoose');

const workouts = new mongoose.Schema({
    userId: {
        type: String
    },
    workoutName: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    quality: {
        type: Number
    },
    exerciseList: [
        {
            exerciseName: {
                type: String
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            weight: {
                type: Number
            }
        }
    ]
});

module.exports = mongoose.model('Workouts', workouts);