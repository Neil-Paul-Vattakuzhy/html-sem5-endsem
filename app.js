const http = require('http');
const server = http.createServer((req,res)=>{
    res.end('<h1>Welcome to my First Node.js page</h1>');
});
server.listen(3002,()=>{
console.log("Server running on 3002....");

});