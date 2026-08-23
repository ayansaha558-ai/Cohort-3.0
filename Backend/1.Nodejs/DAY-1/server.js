let http=require("http");

let server=http.createServer((req,res)=>{
    console.log("hello iam server");
    res.end("ok i have heard you fucker");
    
})

server.listen(3000,()=>{
    console.log("server is runing on port 3000");
    
})