const mongoose = require('mongoose');

const snackSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    snackName: {
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
});

module.exports = mongoose.model('Snack', snackSchema);
