const mongoose = require('mongoose');

const mealInstanceSchema = new mongoose.Schema({
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
    },
    Ingredients: [
        {
            ingredientName: {
                type: String
            },
            calories: {
                type: String
            },
            protein: {
                type: Number
            },
            carbs: {
                type: Number
            },

        }
    ]
});

module.exports = mongoose.model('MealInstance', mealInstanceSchema);