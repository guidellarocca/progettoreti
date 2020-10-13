const express = require('express')
const amqp = require('amqplib/callback_api')
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

router.get('/chat', ensureAuth, (req,res) => {
    amqp.connect('amqp://localhost', (err, conn) => {
        conn.createChannel((err, ch) => {
            var queue = 'FirstQueue';
            var message = 'Utente in messaggistica';
            ch.assertQueue(queue,{durable:false});
            ch.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
            console.log('Utente in messaggistica');
        });
        
    });
  
      res.render('./chat', { name: req.user.firstName,});
  })


module.exports = router