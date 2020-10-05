const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// @desc  Login/Landing page
// @route GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})

// @desc  Dashboard
// @route GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard', {
        name: req.user.firstName,
        
    })
})

// @desc  About Us
// @route GET /about
router.get('/about', ensureAuth, (req, res) => {
    res.render('about', {
        name: req.user.firstName,
    })
})


module.exports = router