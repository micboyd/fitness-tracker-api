const router = require('express').Router();
const MealInstance = require('../model/MealInstance');


// Add an instance of a workout
router.post('/add-meal-instance/', async (req, res) => { 
    const addedMealInstance = await MealInstance.create(req.body);
    return res.json(addedMealInstance);
});

// // Update an instance of a workout
// router.put('/update-cardio-instance/:workoutId', async (req, res) => { 
//     const updatedCardioInstance = await CardioInstance.updateOne(
//         {
//             _id: req.params.workoutId
//         },
//         req.body
//     );
    
//     return res.json(updatedCardioInstance);
// });

// Delete an instance of a workout
router.delete('/delete-meal-builder-instance/:mealId', async (req, res) => { 
    const deletedMealInstance = await CardioInstance.deleteOne(
        {
            _id: req.params.mealId
        }
    );
    
    return res.json(deletedMealInstance);
});

// Get all meal builder instances
router.get('/get-meal-builder-instances/:userId', async (req, res) => { 
    const allMealBuilderInstances = await MealInstance.find(
        {
            userId: req.params.userId
        }
    );
    
    return res.json(allMealBuilderInstances);
});

// router.get('/get-single-workout-instance/:workoutId', async (req, res) => { 
//     const singleCardioInstance = await CardioInstance.findOne(
//         {
//             _id: req.params.workoutId
//         }
//     );
    
//     return res.json(singleCardioInstance);
// });

module.exports = router;
