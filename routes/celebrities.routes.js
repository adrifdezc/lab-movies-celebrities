// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const express = require("express");
const router = express.Router();

//require the Celebrity model here
const Celebrity = require("../models/Celebrity.model");

//Route to the celebrities.hbs
router.get("/celebrities", (req, res, next) => {
  // List the Celebrities
  Celebrity.find().then((allTheCelebritiesFromDB) => {
    console.log("Celebrities from the DB: ", allTheCelebritiesFromDB);
    res.render("../views/celebrities/celebrities", {
      celebrities: allTheCelebritiesFromDB,
    });
  })
  .catch(error => error);
});

//Route to create a new celebrity form
router.get("/celebrities/create", (req, res, next) => {
  res.render("../views/celebrities/new-celebrity.hbs");
});

//Create new celebrity
router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  console.log(req.body);
  Celebrity.create({ name, occupation, catchPhrase })
    .then((celebrityFromDB) => {
      console.log(`New celebrity created: ${celebrityFromDB.name}.`);
      res.redirect("/celebrities");
    })
    .catch((error) => {
      // res.send(error)
      res.render("../views/celebrities/celebrities.hbs.hbs", error);
      console.log(error);
    });
});



module.exports = router;
