// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const router = require('./routes/routes');
const bodyParser = require('body-parser');
const db = require('./db');
// const ParentsController = require('./controllers/ParentsController');

<<<<<<< HEAD
// const user= []

// app.set('view-engine', 'ejs')
// app.use(express.urlencoded({ extended: false }));
// // Routes
// app.get('/', ( req, res )=>{
// //   console.log(`Get request from /, sent response.`);
// //   console.log(req.params);
// //   console.log(req.query);
//   // res.send('Project 4 BE');
//   res.render('index.ejs', {name:'username'})
// });

// app.get('/login', (req,res) => {
//   res.render('login.ejs')
// })

// app.get('/register', (req,res) => {
//   res.render('register.ejs')
// })

// app.post('/register', async (req,res) => {
//   console.log(req.body)
//   try {
//     await Parents.findOne(
//       {$or:[
//         {username: req.body.username},
//         {email:req.body.email}
//       ]
//     }, async (err, result) => {
//       if (err) throw err;
//       if (result) return res.send ('username or email already existed')
//       if(!result) {
//         try {
//           const hashPassword
//         }
//       }
//     }
//     )
//   }
// })
=======
// Middlewares
app.use(bodyParser.json());

>>>>>>> c0f9742e92f7ef1a40407e4f4a996ac849c93b05
// Routes
app.use(router);

// Database
db.connect();

// App Listen at the last
app.listen(PORT, ()=> {
console.log(`Project 4 BE : I am listening on port: ${PORT}`);});
