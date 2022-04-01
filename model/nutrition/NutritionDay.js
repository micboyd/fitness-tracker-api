const mongoose = require('mongoose');

const nutritionDaySchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    outgoingCalories: {
        type: Number
    },
    dailyCalories: {
        type: Number
    },
    dailyFat: {
        type: Number
    },
    dailyProtein: {
        type: Number
    },
    dailyCarbs: {
        type: Number
    },
    meals: [
        {
            name: {
                type: String
            },
            category: {
                type: String
            },
            totalCalories: {
                type: Number
            },
            totalFat: {
                type: Number
            },
            totalProtein: {
                type: Number
            },
            totalCarbs: {
                type: Number
            },
        }
    ]
});

module.exports = mongoose.model('NutritionDay', nutritionDaySchema);
