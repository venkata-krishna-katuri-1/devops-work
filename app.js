var http = require('http');
let fsobj = require("fs");

var server = http.createServer(function (req,res){
    if(req.url == '/'){
         // set response header
         res.writeHead(200, { 'Content-Type': 'text/html' }); 
         let data = fsobj.readFileSync("1.html");
         let str1 = String(data);   
         res.write(str1);
         res.end();
    }
    else if(req.url == '/2'){
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
         let data = fsobj.readFileSync("2.html");
         let str1 = String(data);   
         res.write(str1);
         res.end();
    }
    else if(req.url == '/3'){
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        let data = fsobj.readFileSync("3.html");
        let str1 = String(data);   
        res.write(str1);
        res.end();
    }
    else {
        res.end("404 ERROR NOT FOUND ");
    }
});

server.listen(8000);
console.log('server is running at port 1200');
