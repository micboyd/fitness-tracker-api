const router = require('express').Router();
const CardioInstance = require('../model/CardioInstance');


// Add an instance of a workout
router.post('/add-cardio-instance/', async (req, res) => { 
    const addedCardioInstance = await CardioInstance.create(req.body);
    console.log(req.body);
    return res.json(addedCardioInstance);
});

// Update an instance of a workout
router.put('/update-cardio-instance/:workoutId', async (req, res) => { 
    const updatedCardioInstance = await CardioInstance.updateOne(
        {
            _id: req.params.workoutId
        },
        req.body
    );
    
    return res.json(updatedCardioInstance);
});

// Delete an instance of a workout
router.delete('/delete-cardio-instance/:workoutId', async (req, res) => { 
    const deletedCardioInstance = await CardioInstance.deleteOne(
        {
            _id: req.params.workoutId
        }
    );
    
    return res.json(deletedCardioInstance);
});

// Get all cardio instances
router.get('/get-cardio-instances/:userId', async (req, res) => { 
    const allCardioInstances = await CardioInstance.find(
        {
            userId: req.params.userId
        }
    );
    
    return res.json(allCardioInstances);
});

router.get('/get-single-workout-instance/:workoutId', async (req, res) => { 
    const singleCardioInstance = await CardioInstance.findOne(
        {
            _id: req.params.workoutId
        }
    );
    
    return res.json(singleCardioInstance);
});

router.get('/get-single-cardio-instance/:workoutId', async (req, res) => { 
    const singleCardio = await CardioInstance.findOne(
        {
            _id: req.params.workoutId
        }
    );
    
    return res.json(singleCardio);
});

module.exports = router;
