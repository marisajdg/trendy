const express = require('express');
const router = express.Router();
const Outfits = require('../models/outfits');

// Request get all outfits
router.get('/', (req, res) => {
    Outfits.find()
        .then(outfit => res.json(outfit))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// Request add new outfit
router.post('/add', (req, res) => {
    const newOutfit = new Outfits({
        img: req.body.img
    })

    // save to mongodb
    newOutfit
        .save()
        .then(() => res.json('The new Outfit posted successfully!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// Request find outfit by id
router.get('/:id', (req, res) => {
    Outfits.findById(req.params.id)
        .then(outfit => res.json(outfit))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

// Request find outfit by ID and update
router.put('/update/:id', (req, res) => {
    Outfits.findById(req.params.id)
        .then(outfit => {
            outfit.img = req.body.img;

            outfit
                .save()
                .then(() => res.json('The outfit has been updated successfully!'))
                .catch(err => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// Request find outfit by id and delete
router.delete('/delete/:id', (req, res) => {
    Outfits.findByIdAndDelete(req.params.id)
        .then(() => res.json('The outfit has been deleted successfully.'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});


// create router to create new article , to request to find by id and update by id, request to delete article (CRUD)

module.exports = router;
