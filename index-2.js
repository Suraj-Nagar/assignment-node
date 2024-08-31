var fs =require('fs');
fs.writeFile('nodejs_architecture.txt','Node.js architecture is based on a single-threaded, event-driven model that efficiently handles multiple concurrent requests using non-blocking I/O operations. This allows Node.js to perform asynchronously, making it highly scalable and suitable for I/O-bound tasks like web servers and real-time applications.',function(err){
    if (err) {
        console.log(err);
    }else{
        console.log("write sucess");
        
    }
});


fs.appendFile('nodejs_architecture.txt','Node.js provides several key advantages, including high performance through the V8 engine, which compiles JavaScript into machine code for faster execution. Its event-driven, non-blocking I/O model efficiently handles numerous concurrent connections, making it highly scalable and ideal for real-time applications like chat apps. Additionally, Node.js allows developers to use JavaScript on both the client and server sides, streamlining the development process. The extensive npm ecosystem offers a vast range of libraries and tools, further boosting productivity and accelerating development',function(err) {
    if (err) {
        console.log(err);
        
    }else{
        console.log("append sucessfully");
        
    }

    const data=fs.readFile('nodejs_architecture.txt',function(err,data){
        if (err) {
            console.log(err);
            
        }else{
            console.log("data",data.toString());
            
        }
    });
});

fs.unlink('nodejs_architecture.txt',function(err){
    if (err) {
        console.log(err);
    } else{
        console.log('file deleted sucessfully');
        
    }
})

