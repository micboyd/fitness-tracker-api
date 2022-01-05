const router = require('express').Router();
const WorkoutInstance = require('../../model/strength/WorkoutInstance');
const fns = require('date-fns');

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

router.get('/get-single-workout-instance/:workoutId', async (req, res) => { 
    const singleWorkout = await WorkoutInstance.findOne(
        {
            _id: req.params.workoutId
        }
    );
    
    return res.json(singleWorkout);
});



// Get statistics
router.get('/get-user-statistics/:userId', async (req, res) => { 
    const allWorkouts = await WorkoutInstance.find(
        {
            userId: req.params.userId
        }
    );

    const weekWorkouts = [];
    const monthWorkouts = [];
    const yearWorkouts = [];

    allWorkouts.forEach((item) => {
        if (fns.isThisWeek(item.date)) {
            weekWorkouts.push(item.date);
        }

        if (fns.isThisMonth(item.date)) {
            monthWorkouts.push(item.date);
        }

        if (fns.isThisYear(item.date)) {
            yearWorkouts.push(item.date);
        }
    });

    const stats = {
        thisWeek: weekWorkouts.length,
        thisMonth: monthWorkouts.length,
        thisYear: yearWorkouts.length
    };
    
    return res.json(stats);
});



module.exports = router;
