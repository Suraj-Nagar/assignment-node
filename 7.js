const http = require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.write("I am happy to learn Full Stack Web Devlopment From PW Skills!")
    }
    res.end();
})
server.listen(4000,()=>{
console.log("The http server is running on port 4000");

});