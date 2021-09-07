// Iteration #1
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/lab-movies-celebrities';

mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const celebrities = [
    { 
    name: "Tom Cruise", 
    occupation: "Actor", 
    catchPhrase: "You could be taller, but why should I" 
    },
    { 
    name: "Beyonce", 
    occupation: "Singer", 
    catchPhrase: "All the single ladies" 
    },
    { 
    name: "Messi", 
    occupation: "Football Player", 
    catchPhrase: "I miss Barcelona" 
    }
  ];
  
Celebrity.create(celebrities)
  .then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));