// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const router = require('./routes/routes');
const bodyParser = require('body-parser');
const db = require('./db');

// Middlewares
app.use(bodyParser.json());

// Routes
app.use(router);

// Database
db.connect();

// App Listen at the last
app.listen(PORT, ()=> {
console.log(`Project 4 BE : I am listening on port: ${PORT}`);});
