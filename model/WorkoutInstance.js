const mongoose = require('mongoose');

const workoutInstanceSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    workoutQuality: {
        type: Number
    },
    exercises: [
        {
            exerciseName: {
                type: String
            },
            sets: [
                {
                    setNumber: {
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
        }
    ]
});

module.exports = mongoose.model('WorkoutInstance', workoutInstanceSchema);