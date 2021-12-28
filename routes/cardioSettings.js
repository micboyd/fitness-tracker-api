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

router.delete('/delete-cardio-setting/:workoutId', async (req, res) => { 
    const deletedCardioInstance = await CardioSetting.deleteOne(
        {
            _id: req.params.workoutId
        }
    );
    
    return res.json(deletedCardioInstance);
});

module.exports = router;