// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./db');

// Routes
app.get('/', ( req, res )=>{
  res.send('Project 4 BE');
});

// Database
db.connect(); 

// App Listen at the last
app.listen(PORT, ()=> {
console.log(`Project 4 BE : I am listening on port: ${PORT}`);});
