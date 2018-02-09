const express = require('express'); 

var app=express();
app.use(express.static(__dirname+'/src'));	

app.all('*',function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Access-Control-Allow-Methods','[GET,POST,DELETE,OPTIONS]');
    next();
})


app.listen(8000);
console.log("8000 is start");