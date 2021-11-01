const router = require('express').Router();
const Exercises = require('../model/Exercises');

router.post('/add-exercise/:userId', async (req, res) => { 
    const addedExercise = await Exercises.create(
        {
            userId: req.params.userId, 
            exerciseName: req.body.exerciseName
        }
    );

    return res.json(addedExercise);
});

router.delete('/remove-exercise/:userId', async (req, res) => { 
    const removedExercise = await Exercises.deleteOne({
        $and: [
            {
                userId: req.params.userId
            },
            {
                exerciseName: req.body.exerciseName
            }
        ]
    });

    return res.json(removedExercise);
});

router.get('/all-exercises/:userId', async (req, res) => { 
    const allExercises = await Exercises.find(
        { userId: req.params.userId }
    );

    return res.json(allExercises);
});

module.exports = router;
