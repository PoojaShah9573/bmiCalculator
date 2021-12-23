const express=require('express');
const app=express();

//1
const bodyParser=require("body-parser");


//2 using vody-pasrer
app.use(bodyParser.urlencoded({extended:true}));


//sending location of file
/*app.get("/", function (req,res){
//console.log(__dirname)
res.sendFile(__dirname + "/index.html");
});


//3
/* app.post("/", function(req, res){
 var weight= Number(req.body.weight);
 var height= Number(req.body.height);


	res.send("the result is " + result );

});
*/


app.get("/bmiCalculator", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmiCalculator",function(req,res){
  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);

  var bmi = weight /(height + height);

  res.send("Your BMI is" + " " +  bmi);
});

app.listen(4000,function(){
	 console.log("Server stated at 4000");
})
