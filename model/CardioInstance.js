const mongoose = require('mongoose');

const cardioInstanceSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    cardioName: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    cardioQuality: {
        type: Number
    },
    cardioNotes: {
        type: String
    },
    conditions: {
        type: String
    },
    time: {
        type: String
    },
    distance: {
        type: String
    },
    caloriesBurned: {
        type: Number
    }
});

module.exports = mongoose.model('CardioInstance', cardioInstanceSchema);