let express=require("express");

let app=express();
app.use(express.json())
let port=3000;

let users=[];

//create
app.post("/create",(req,res)=>{
    let body=req.body;

    users.push(body)

    res.send(users);
})

//read
app.get("/",(req,res)=>{

    res.send(users)
})

//delete
app.delete("/delete/:id",(req,res)=>{
    let {id}=req.params;

    users=users.filter((val)=>val.id!==id);

    res.send("user deleted sucessfully")
})

app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
    
})