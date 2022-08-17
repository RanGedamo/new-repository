const http = require('http');
const hostname = '127.0.0.1';
const port = 3533;
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.
  res.setHeader('Content-Type','text/plain');
  res.end('Hello world');
});

server.listen(port,hostname, () =>{
  console.log(`server is running at port ${port}`);
});
