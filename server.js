// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const router = require('./routes/routes');
const bodyParser = require('body-parser');
const db = require('./db');
const initializePassport = require('./services/authServices');
const passport = require('passport');
const session = require('express-session');
const frontEndUrl = process.env.Front_End_URL || 'http://localhost:3000'


// Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// auth middleware
// app.use(
//     cors({
//       origin: [frontEndUrl, frontEndUrl + '/games', 'http://localhost:8000'],
//       credentials: true,
//       'Access-Control-Allow-Credentials': true, // trying this
//       methods: 'GET, PUT, POST, DELETE'
//     })
//   );

app.use(function(req, res, next) {
    const allowedOrigin = [frontEndUrl, frontEndUrl + 'games', 'http://localhost:8000']
    const origin = req.header.origin;
    if (allowedOrigin.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin)
    }

    // res.header("Access-Control-Allow-Origin", [frontEndUrl, frontEndUrl + 'games', 'http://localhost:8000']);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, x-access-token, Cookie, Content-Type, access_token, Accept");
    next();
});
app.set('trust proxy', 1)
app.use(session ({
    secret: process.env.SESSION_SECRET || 'secretly',
    resave : false, // should we resave session variable if nothing has changed ?
    saveUninitialized : true, // should we save empty value in session ?
    cookie: {
        sameSite : 'none',
        secure : true
    },
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
