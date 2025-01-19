const express=require("express");

const app=express();

const numberofRequests={}

setInterval(()=> {
    numberofRequests={};
},1000);

app.use(function(req,res,next){
    const userId=req.headers["user-id"]
    if(numberofRequests[userId]){
        numberofRequests[userId]=numberofRequests[userId]+1;
        if(numberofRequests[userId] > 5){
            res.status(404).send("you have reached the maxiumum limit ")
        }
        else{
            next();
        }
    }
    else{
        numberofRequests[userId]=1
        next();
    }
})
app.get("/user", function (req, res) {
    res.status(200).json({ name: "Rohan" });
});

// create a route for POST request on /user path
app.post("/user", function (req, res) {
    res.status(200).json({ msg: "created dummy user" });
});

app.listen(3000, () =>{
    console.log("server running on port 3000");
});