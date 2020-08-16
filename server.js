// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const router = require('./routes/routes');
const bodyParser = require('body-parser');
const db = require('./db');
const initializePassport = require('./services/authServices');
const passport = require('passport');
const flash = require('express-flash');
const flash = require('express-session');


// Middlewares
initializePassport(passport)
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// auth middleware
app.use(flash())
app.use(session ({
    secret: process.env.SESSION_SECRET || 'secretly',
    resave : false, // should we resave session variable if nothing has changed 
    saveUninitialized : false // should we save empty value in session
}))
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use(router);

// Database
db.connect();

// App Listen at the last
app.listen(PORT, ()=> {
console.log(`Project 4 BE : I am listening on port: ${PORT}`);});
