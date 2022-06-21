const router = require('express').Router();

const NutritionDay = require('../../model/nutrition/NutritionDay');

router.post('/add-nutrition-day', async (req, res) => {

    const nutritionDay = await NutritionDay.create(req.body);

    res.status(200).json(nutritionDay);
});

router.put('/update-nutrition-day/:nutritionDayId', async (req, res) => {

    const updatedNutritionDay = await NutritionDay.updateOne(
        { _id: req.params.nutritionDayId },
        req.body
    );

    res.status(200).json(updatedNutritionDay);

});

router.delete('/delete-nutrition-day/:nutritionDayId', async (req, res) => {    

    const deletedNutritionDay = await NutritionDay.deleteOne(
        { _id: req.params.nutritionDayId }
    );

    res.status(200).json(deletedNutritionDay);
});

router.get('/all-nutrition-days/:userId', async (req, res) => {

    const allNutritonDays = await NutritionDay.find({ userId: req.params.userId });

    res.status(200).json(allNutritonDays);
});

router.get('/single-nutrition-day/:nutritionDayId', async (req, res) => {

    const singleNutritionDay = await NutritionDay.find({ _id: req.params.nutritionDayId });

    res.status(200).json(singleNutritionDay);
});

module.exports = router;