const router = require('express').Router();

const NutritionInstance = require('../../model/nutrition/NutritionInstance');

// Create nutrition instance
router.post('/add-nutrition-instance/', async (req, res) => { 
    const addedNutritionInstance = await NutritionInstance.create(req.body);
    return res.json(addedNutritionInstance);
});

// Read all nutrition instances
router.get('/get-nutrition-instances/:userId', async (req, res) => { 
    const allNutritionInstances = await NutritionInstance.find(
        {
            userId: req.params.userId
        }
    );
    
    return res.json(allNutritionInstances);
});

// Update nutrition instance
router.put('/update-nutrition-instance/:instanceId', async (req, res) => { 
    const updatedNutritionInstance = await NutritionInstance.updateOne(
        {
            _id: req.params.instanceId
        },
        req.body
    );
    
    return res.json(updatedNutritionInstance);
});

// Delete nutrition instance
router.delete('/delete-nutrition-instance/:instanceId', async (req, res) => { 
    const deletedNutritionInstance = await NutritionInstance.deleteOne(
        {
            _id: req.params.instanceId
        }
    );
    
    return res.json(deletedNutritionInstance);
});

const addTotals = (inputArray) => {
    const reducer = (accumulator, curr) => accumulator + curr;
    return inputArray.reduce(reducer);
}

module.exports = router;
