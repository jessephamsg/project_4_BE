// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Routes
app.get('/', ( req, res )=>{
//   console.log(`Get request from /, sent response.`);
//   console.log(req.params);
//   console.log(req.query);
  res.send('Project 4 BE');
});

// App Listen at the last
app.listen(PORT, ()=> {
console.log(`Project 4 BE : I am listening on port: ${PORT}`);});
