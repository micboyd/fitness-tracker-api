const router = require('express').Router();

// User model
const Meal = require('../../model/nutrition/Meal');

const totalCounter = (array, property) => {
    return array.map(item => item[property]).reduce((prev, next) => prev + next);
}

// Add a meal
router.post('/add-meal', async (req, res) => {

     const ingredientsArray = req.body.ingredients;

    const totalCalories = totalCounter(ingredientsArray, 'calories');
    const totalFat = totalCounter(ingredientsArray, 'fat');
    const totalProtein = totalCounter(ingredientsArray, 'protein');
    const totalCarbs = totalCounter(ingredientsArray, 'carbs');

    const meal = await Meal.create({
        userId: req.body.userId,
        mealName: req.body.mealName,
        ingredients: req.body.ingredients,
        totalCalories: totalCalories,
        totalFat: totalFat,
        totalProtein: totalProtein,
        totalCarbs: totalCarbs
    });

    res.status(200).json(meal);
});

router.put('/update-meal/:mealId', async (req, res) => {

    const ingredientsArray = req.body.ingredients;

   const totalCalories = totalCounter(ingredientsArray, 'calories');
   const totalFat = totalCounter(ingredientsArray, 'fat');
   const totalProtein = totalCounter(ingredientsArray, 'protein');
   const totalCarbs = totalCounter(ingredientsArray, 'carbs');

   const updatedMeal = await Meal.updateOne(
        { _id: req.params.mealId },
        {
            userId: req.body.userId,
            mealName: req.body.mealName,
            ingredients: req.body.ingredients,
            totalCalories: totalCalories,
            totalFat: totalFat,
            totalProtein: totalProtein,
            totalCarbs: totalCarbs
        } 
    );

    res.status(200).json(updatedMeal);
});

router.delete('/delete-meal/:mealId', async (req, res) => {    

    const deletedMeal = await Meal.deleteOne(
        { _id: req.params.mealId }
    );

    res.status(200).json(deletedMeal);
});

router.get('/all-meals/:userId', async (req, res) => {
    let allMeals = await Meal.find({ userId: req.params.userId });

    res.status(200).json(allMeals);
});

module.exports = router;