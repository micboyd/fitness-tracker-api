const router = require('express').Router();
const WorkoutInstance = require('../model/WorkoutInstance');

// Add an instance of a workout
router.post('/add-workout-instance/', async (req, res) => { 
    const addedWorkoutInstance = await WorkoutInstance.create(req.body);
    return res.json(addedWorkoutInstance);
});


// Update an instance of a workout
router.put('/update-workout-instance/:workoutId', async (req, res) => { 
    const updatedWorkoutInstance = await WorkoutInstance.updateOne(
        {
            _id: req.params.workoutId
        },
        req.body
    );
    
    return res.json(updatedWorkoutInstance);
});


// Delete an instance of a workout
router.delete('/delete-workout-instance/:workoutId', async (req, res) => { 
    const deletedWorkoutInstance = await WorkoutInstance.deleteOne(
        {
            _id: req.params.workoutId
        }
    );
    
    return res.json(deletedWorkoutInstance);
});

// Get all instances of a workout
router.get('/get-workout-instances/:userId', async (req, res) => { 
    const allTemplates = await WorkoutInstance.find(
        {
            userId: req.params.userId
        }
    );
    
    return res.json(allTemplates);
});

module.exports = router;
