
const express = require('express');
const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/home', function(req,res){
  res.status(200).json("its working");
})

app.listen(port, function() {
  console.log(`running at ${port}`)
})