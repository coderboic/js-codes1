const express=require("express");
const add=express();
add.use(express.json());
let todo=[{
    description:"codeforces",
    status:"not_done"
}];
add.get("/",function(req,res){
    res.json(todo);
});
add.post("/",function(req,res){
    const desc=req.body.des;
    const sta=req.body.stat;
    todo.push({
        description:desc,
        status:sta
    })
    res.send("added the task ");
})
add.put("/",function(req,res){
    const new_d=req.body.des;
    const stats=req.body.stat;
    const temp=[];
    let taskFound=false;
    for(let i=0;i<todo.length;++i){
        if(todo[i].description !== new_d){
            temp.push(todo[i]);
        }
        else{
            temp.push({
                description:new_d,
                status:stats
            });
            taskFound=true;
        }
    }
    todo=temp;
    if(taskFound){
        res.send("Updated the task successfully");
    }
    else{
        res.send("Task not found");
    }
})
add.delete("/",function(req,res){
    const new_d=req.body.des;
    const st=req.body.stat;
    const temp=[];
    for(let i=0;i<todo.length;++i){
        if(todo[i].description !== new_d){
            temp.push(todo[i]);
        }
    }
    todo=temp;
    res.send("deleted the task "+ new_d+" ");
})
add.listen(3000);

