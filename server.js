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
const frontEndUrl = process.env.Front_End_URL


// Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const whitelist = [frontEndUrl, 'http://localhost:3000']


// auth middleware

app.use(cors())

app.use(
    cors({
      origin: [frontEndUrl, 'http://localhost:3000'],
      credentials: true,
      allowedHeaders : "*",
      methods: 'GET, PUT, POST, DELETE'
    })
  );

// app.use(
//     cors({
//         origin: function (origin, callback) {
//             if (whitelist.indexOf(origin) !== -1 || !origin) {
//                 callback(null, true);
//             } else {
//                 callback(new Error('Not allowed by CORS'));
//             }
//         }
//     })
// )

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", frontEndUrl);
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, PATCH");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, x-access-token, Cookie, Content-Type, access_token, Accept");
//     next();
// });

// app.set('trust proxy', 1)
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
