const router = require('express').Router();

// User model
const Snack = require('../../model/nutrition/Snack');

router.post('/add-snack', async (req, res) => {

    const snack = await Snack.create(req.body);

    res.status(200).json(snack);
});

router.put('/update-snack/:snackId', async (req, res) => {

   const updatedSnack = await Snack.updateOne(
        { _id: req.params.snackId },
        req.body
    );

    res.status(200).json(updatedSnack);
});

router.delete('/delete-snack/:snackId', async (req, res) => {    

    const deletedSnack = await Snack.deleteOne(
        { _id: req.params.snackId }
    );

    res.status(200).json(deletedSnack);
});

router.get('/all-snacks/:userId', async (req, res) => {

    const allSnacks = await Snack.find({ userId: req.params.userId });

    res.status(200).json(allSnacks);
});

router.get('/single-snack/:snackId', async (req, res) => {
    
    const singleSnack = await Snack.find({ _id: req.params.snackId });

    res.status(200).json(singleSnack);
});

module.exports = router;