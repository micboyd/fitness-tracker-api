const mongoose = require('mongoose');

const mealInstanceSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    mealName: {
        type: String
    },
    ingredients: [
        {
            ingredientName: {
                type: String
            },
            calories: {
                type: Number
            },
            protein: {
                type: Number
            },
            fat: {
                type: Number
            },
            carbs: {
                type: Number
            }
        }
    ]
});

module.exports = mongoose.model('MealInstance', mealInstanceSchema);