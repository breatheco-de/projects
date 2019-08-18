const https = require('https');
const fs = require("fs")
const path = require("path")

const hostname = '127.0.0.1';
const port = 3000;

const server = https.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  //console.log(`Server running at http://${hostname}:${port}/`);
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

    exercises.push(body)
  });
});


let projectsArray = [];
let technologies = ['css','javascript','php','jquery','python','data-modeling', 'final-project']
let level = ["beginner", "junior", "senior","semi-senior", "full-stack"]
let projects = []

fs.readdirSync("./css/beginner").forEach(e=>projects.push(String(e)))
fs.readdirSync("./css/career-support").forEach(e=>projects.push(String(e)))
fs.readdirSync("./css/junior").forEach(e=>projects.push(String(e)))
fs.readdirSync("./css/senior").forEach(e=>projects.push(String(e)))
fs.readdirSync("./data-modeling/beginner").forEach(e=>projects.push(String(e)))
fs.readdirSync("./final-project/full-stack").forEach(e=>projects.push(String(e)))
fs.readdirSync("./javascript/beginner").forEach(e=>projects.push(String(e)))
fs.readdirSync("./javascript/junior").forEach(e=>projects.push(String(e)))
fs.readdirSync("./javascript/semi-senior").forEach(e=>projects.push(String(e)))
fs.readdirSync("./jquery/beginner").forEach(e=>projects.push(String(e)))
fs.readdirSync("./php/begginer").forEach(e=>projects.push(String(e)))
fs.readdirSync("./php/junior").forEach(e=>projects.push(String(e)))
fs.readdirSync("./python/beginner").forEach(e=>projects.push(String(e)))

function search(route) {

    let folderList = fs.readdirSync(route);

console.log(folderList)
    folderList.forEach(folder=>{

        let newPath = route+'/'+folder


        if (String(folder).toUpperCase().includes("README"))
            projectsArray.push({
                technology: newPath.split('/').find(dir => technologies.includes(dir.toLowerCase())),
                project_Name:newPath.split('/').find(dir => projects.includes(dir.toLowerCase())),
                difficulty:newPath.split('/').find(folder=> level.includes(folder.toLowerCase())),
                readMe:newPath

            })


        if (fs.lstatSync(newPath).isDirectory()===true) {
                search(newPath)
        }

    })
}

search(".");
console.log("this:" + projects)

projectsArray.forEach(e => {


    console.log(e)


   // console.log(JSON.stringify(e))
    console.log('')
    //fs.writeFileSync("/workspace/breathecojson/projects/" + e.project_Name + ".json" , JSON.stringify(e))


})





