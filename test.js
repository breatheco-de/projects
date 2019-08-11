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

const root = "p"
const readme = "README.md"
const arr = []

const css = {technology:"",
                difficulty:"",
                readme:""}

const dataModeling ={technology:"",
                difficulty:"",
                readme:""}
const javascript={technology:"",
                difficulty:"",
                readme:""}
const jquery={technology:"",
                difficulty:"",
                readme:""}
const php={technology:"",
                difficulty:"",
                readme:""}
const python ={technology:"",
                difficulty:"",
                readme:""}



let data = fs.readdir(root, "utf8", (err, files)=>{
    console.log(files)
    for (let i =0; i<files.length;i++){
            if (files[i]==="css")
            {css.technology = files[i]}

        else
        fs.readdir(root + "/" + files[i], "utf8", (err, files)=>{})
         const arr = ["beginner","junior","senior"]


}



})


