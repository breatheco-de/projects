const https = require('https');
const fs = require("fs")

const hostname = '127.0.0.1';
const port = 3000;

const server = https.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const url = "https://jsonplaceholder.typicode.com/posts/1";
const exercises = []

https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);

    console.log(body);
    exercises.push(body)
    console.log(exercises)
  });
});

const root = fs.readdirSync("p")
const arr =[]

function start(node){


   if (node.includes("README.md")){console.log("README.md")}
    else{
   node.forEach((i)=>{start(fs.readdirSync("p/" +i)) })
    }

}

start(root)


