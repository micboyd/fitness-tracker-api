const router = require('express').Router();
const Munro = require('../model/Munro');
const User = require('../model/User');

// Returns all incomplete munros - Param: User ID
router.get('/incomplete/:userId', async (req, res) => {
    const selectedUser = await User.findOne({_id: req.params.userId});
    const incomplete = await Munro.find(
        {"_id" : 
            {"$nin" : selectedUser.completeMunros}
        }
    );

    return res.json(incomplete);
});

// Returns all complete munros - Param: User ID
router.get('/complete/:userId', async (req, res) => {
    const selectedUser = await User.findOne({_id: req.params.userId});
    const complete = await Munro.find(
        {"_id" : 
            {"$in" : selectedUser.completeMunros}
        }
    );

    return res.json(complete);
});

// Mark a munro as complete - Param: User ID
router.put('/mark-complete/:userId', async (req, res) => {
    const newMunro = await User.updateOne(
        {_id: req.params.userId}, 
        {$addToSet: 
            {completeMunros: req.body.munroId}
        }
    );

    return res.json(newMunro);
});

// Mark a munro as incomplete - Param: User ID
router.put('/mark-incomplete/:userId', async (req, res) => { 
    const removedMunro = await User.updateOne(
        {_id: req.params.userId}, 
        {$pull: 
            {completeMunros: req.body.munroId}
        }
    );

    return res.json(removedMunro);
});

router.get('/all-munros', async (req, res) => {
    const allMunros = await Munro.find();
    return res.json(allMunros);
});

module.exports = router;