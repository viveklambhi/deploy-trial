
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/home', function(req,res){
  res.status(200).json("its working");
})
app.get('/', function(req, res){
  res.status(200).json("change url to home");
})
app.get('/favicon.ico', function(req, res) {
  res.sendStatus(200);
})
app.listen(PORT, function() {
  console.log(`running at ${PORT}`)
})