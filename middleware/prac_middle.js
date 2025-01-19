/*const express=require("express");
const app=express();
app.use(express.json());

app.use(function(req,res,next){
	const age=req.body.ag;
	if(age >= 15){
		next();
	}
	else{
		res.status(403).send({message:"you are not eligible to enter this website"});
	}
})
app.get("/hey",function(req,res){
	res.status(200).json({name:"sudo"})
})
app.get("/hello",function(req,res){
	res.status(200).json({name:"apt"})
})
app.listen(3000);
*/
// error in middleware
const express=require("express");
const app=express();
let errorcount=0;
app.get("/handling",function(req,res){
	throw new Error("crashed");
	res.status(200).json({status:"done"});
})
app.get("/demo",function(req,res){
	res.send("done");
})
app.use(function(err,req,res,next){
	res.send("error detected");
	res.send("error count is" + errorcount);
})
app.listen(3000, function() {
	console.log("started the server at  3000");
});
















