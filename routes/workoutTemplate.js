const router = require('express').Router();
const WorkoutTemplate = require('../model/WorkoutTemplate');

// Add an instance of a workout
router.post('/add-workout-template/', async (req, res) => { 
    const addedWorkoutTemplate = await WorkoutTemplate.create(req.body);

    return res.json(addedWorkoutTemplate);
});

// Update an instance of a workout
router.put('/update-workout-template/:workoutId', async (req, res) => { 
    const updatedWorkoutInstance = await WorkoutTemplate.updateOne(
        {
            _id: req.params.workoutId
        },
        req.body
    );
    
    return res.json(updatedWorkoutInstance);
});

// Delete an instance of a workout
router.delete('/delete-workout-template/:workoutId', async (req, res) => { 
    const deletedWorkoutTemplate = await WorkoutTemplate.deleteOne(
        {
            _id: req.params.workoutId
        }
    );
    
    return res.json(deletedWorkoutTemplate);
});

// Get all users templates
router.get('/get-workout-templates/:userId', async (req, res) => {
    const allTemplates = await WorkoutTemplate.find(
        {
            userId: req.params.userId
        }
    );
    
    return res.json(allTemplates);
});

module.exports = router;
