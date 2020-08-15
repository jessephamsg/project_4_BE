// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const user= []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }));
// Routes
app.get('/', ( req, res )=>{
//   console.log(`Get request from /, sent response.`);
//   console.log(req.params);
//   console.log(req.query);
  // res.send('Project 4 BE');
  res.render('index.ejs', {name:'username'})
});

app.get('/login', (req,res) => {
  res.render('login.ejs')
})

app.get('/register', (req,res) => {
  res.render('register.ejs')
})

app.post('/register', (req,res) => {

})
// App Listen at the last
app.listen(PORT, ()=> {
console.log(`Project 4 BE : I am listening on port: ${PORT}`);});
