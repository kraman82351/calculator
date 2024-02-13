const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use("/", bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function(req, res){
  var h = parseFloat(req.body.hight);
  var w = parseFloat(req.body.weight);

  var resp = h /(w*w);
  res.send("the bmi result is : " + resp);
});

app.listen(3000, function(){
  console.log("running");
});
