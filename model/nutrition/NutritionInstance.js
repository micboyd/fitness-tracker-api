const mongoose = require('mongoose');

const nutritionInstanceSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    itemName: {
        type: String
    },
    isMeal: {
        type: Boolean
    },
    totalCalories: {
        type: Number
    },
    totalProtein: {
        type: Number
    },
    totalFat: {
        type: Number
    },
    totalCarbs: {
        type: Number
    }
});

module.exports = mongoose.model('NutritionInstance', nutritionInstanceSchema);