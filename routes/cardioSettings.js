const router = require('express').Router();
const CardioSetting = require('../model/CardioSetting');

// Get all cardio settings
router.post('/add-cardio-settings/', async (req, res) => { 
    const addedCardioSettings = await CardioSetting.create(req.body);
    return res.json(addedCardioSettings);
});

// Get all cardio settings
router.get('/get-cardio-settings/:userId', async (req, res) => { 
    const allCardioSettings = await CardioSetting.find(
        {
            userId: req.params.userId
        }
    );
    return res.json(allCardioSettings);
});

module.exports = router;