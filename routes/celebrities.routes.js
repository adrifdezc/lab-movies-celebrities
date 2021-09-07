// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const express = require('express');
const router = express.Router();

//require the Celebrity model here
const Celebrity = require('../models/Celebrity.model')

//Route to the celebrities.hbs
router.get('/celebrities', (req, res, next) => {
    // List the Celebrities
    Celebrity.find()
      .then(allTheCelebritiesFromDB =>{
        console.log('Celebrities from the DB: ', allTheCelebritiesFromDB);
        res.render('../views/celebrities/celebrities-list', {celebrities: allTheCelebritiesFromDB})
      })
  });


//Route to create a new celebrity form
router.get('/celebrities/create', (req, res, next) => {
// Iteration #3: Add a new drone
res.render('../views/celebrities/new-celebrity.hbs')
});

module.exports = router;
