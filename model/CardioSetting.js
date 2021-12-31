const mongoose = require('mongoose');

const cardioSettingsSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    cardioName: {
        type: String
    },
    cardioType: {
        type: String,
    },
});

module.exports = mongoose.model('CardioSetting', cardioSettingsSchema);