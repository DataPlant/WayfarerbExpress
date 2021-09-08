const express = require('express');
const router = express.Router();

const db = require('../models/index.js');

//takes you to a visual inspo page
router.get('/inspiration', (req, res) => {
    res.render('users/userInspo.ejs', {
        oneUser: req.session.currentUser._id
    });
});


//Show Route --> DONEish
    router.get('/:userId', (req, res) => {
        let userId = req.params.userId
        db.User.findById(userId, (err, singleUser) => {
            if (err) return console.log(err)
            res.render('users/userShow.ejs', {
                singleUser: singleUser,
                oneUser: req.session.currentUser._id
            })
        })
    })

//takes you to the user profile
    router.get('/profile/:userId', (req, res) => {
        let userId = req.params.userId
        db.User.findById(userId, (err, singleUser) => {
            if (err) return console.log(err)
            res.render('users/userProfile.ejs', {
                singleUser: singleUser,
                oneUser: req.session.currentUser._id
            })
        })
    })


//Edit Route
router.get('/:userId/edit', (req, res) => {
    db.User.findById(req.params.userId, (err, editUser) => {
        if (err) return console.log(err)
        res.render('users/userEdit.ejs', {
            singleUser: editUser,
            oneUser: req.session.currentUser._id
        })
    })
})

//Update Route
router.put('/:userId', (req, res) => {
    db.User.findByIdAndUpdate(req.params.userId, req.body, (err, updatedUser) => {
        // console.log(updatedUser)
        if (err) console.log(err)
        res.redirect(`/user/${req.params.userId}`)
    })
})

module.exports = router;