const router = require('express').Router();
const db = require('../models/index.js');


router.get('/', (req, res) => {
    db.Cities.find({})
    .populate('posts')
    .exec((err, foundCity) => {
        if (err) return console.log(err);
        res.json(foundCity);
        console.log('so far so goooooood')
    })
})

// router.get('/newCity', (req, res) => {
    
// })

router.get('/:id', (req, res) => {
    db.Cities.findById(req.params.id)
    .populate('posts')
    .exec((err, foundCity) => {
        if(err) return console.log(err);

        res.json(foundCity)
    }) 
})

router.post('/new', (req, res) => {
    db.Cities.create(req.body, (err, createdCity) => {
        if (err) return console.log(err)

        res.redirect('/cities')
    })
})

router.put('/:id', (req, res) => {
    db.Cities.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedCity) => {
            if (err) return console.log(err)

            res.json(updatedCity)
        }
    )
})

router.delete('/:id', (req, res) => {
    db.Cities.findByIdAndDelete(req.params.id, (err, deletedCity) => {
        if (err) return console.log(err)
        console.log('Deleted City')
        res.json({message: 'Deleted'})
    })
})
module.exports = router;