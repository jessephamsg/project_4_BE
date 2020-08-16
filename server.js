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
const session = require('express-session');


// Middlewares

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// auth middleware
app.use(flash())
app.use(session ({
    secret: process.env.SESSION_SECRET || 'secretly',
    resave : true, // should we resave session variable if nothing has changed ?
    saveUninitialized : true // should we save empty value in session ?
}))
initializePassport(passport)
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use(router);

// Database
db.connect();

// App Listen at the last
app.listen(PORT, ()=> {
console.log(`Project 4 BE : I am listening on port: ${PORT}`);});
