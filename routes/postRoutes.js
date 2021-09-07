const router = require('express').Router();
const db = require('../models/index.js');



router.get('/', (req, res) => {
    db.Post.find({}, (err, foundPost) => {
        if (err) return console.log(err);
        res.json(foundPost);
        // console.log('so far so goooooood')
    })
})

router.get('/:id', (req, res) => {
    db.Post.findById(req.params.id)
    .populate('cities')
    .exec((err, foundPost) => {
        if(err) return console.log(err);

        res.json(foundPost)
    }) 
})

router.post('/new', (req, res) => {
    db.Post.create(req.body, (err, createdPost) => {
        if (err) return console.log(err)

        res.json(createdPost)
    })
})
router.get('/new', (req, res) => {
    db.Cities.find({}, (err, foundCity) => {
        if (err) return console.log(err)

        res.json(foundCity)
    })
})

router.put('/:id', (req, res) => {
    db.Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedPost) => {
            if (err) return console.log(err)

            res.json(updatedPost)
        }
    )
})

router.delete('/:id', (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err) return console.log(err)
        console.log('Deleted Post')
        res.json({message: 'Deleted'})
    })
})
module.exports = router;

