const mongoose = require('mongoose');

const FoodDiaryDayInstanceSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    totalCaloriesIn: {
        type: Number
    },
    totalCaloriesOut: {
        type: Number
    },
    caloriesTotal: {
        type: Number
    },
    proteinTotal: {
        type: Number
    },
    carbsTotal: {
        type: Number
    },
    fatTotal: {
        type: Number
    },
    nutritionInstances: [
        {
            referenceId: String
        }
    ]
});

module.exports = mongoose.model('FoodDiaryDayInstance', FoodDiaryDayInstanceSchema);