const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    mealName: {
        type: String
    },
    ingredients: [
        {
            name: {
                type: String
            },
            calories: {
                type: Number
            },
            fat: {
                type: Number
            },
            protein: {
                type: Number
            },
            carbs: {
                type: Number
            }
        }
    ],
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
});

module.exports = mongoose.model('Meal', mealSchema);
