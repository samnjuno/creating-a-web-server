//import package(s)
//http package
const http = require('http');

//create server
const web = http.createServer((request,response)=>{
    response.statusCode=200;
    response.setHeader('content-Type','text/plain');
    response.end('I have just created my first web server!');
});

//launch the server
web.listen(3000,()=>{
    console.log('Server is running on port:3000')
});