const router = require('express').Router();
const Workouts = require('../model/Workouts');

// Create a workout
router.post('/add-workout/:userId', async (req, res) => {

    const allExercises = [];

    req.body.exerciseList.forEach(item => {
        allExercises.push(item);
    })

    const addedWorkout = await Workouts.create(
        {
            userId: req.params.userId, 
            workoutName: req.body.workoutName,
            quality: req.body.quality,
            exerciseList: allExercises
        }
    );

    return res.json(addedWorkout);
});

// Get a users workouts
router.get('/get-workouts/:userId', async (req, res) => {
    const allUsersWorkouts = await Workouts.find(
        {
            userId: req.params.userId
        }
    )

    return res.json(allUsersWorkouts);
})

// Delete a workout
router.delete('/remove-workout/:workoutId', async (req, res) => {

    const removedWorkout = await Workouts.deleteOne(
        {
            _id: req.params.workoutId
        }
    );

    return res.json(removedWorkout);
});

// Future - Update a workout

module.exports = router;