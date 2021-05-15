const sharp = require('sharp')
sharp.simd(false)
sharp.cache(false)
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const fetch = require('node-fetch');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    let projects = []; //filtered projects after removing repeated
    let _projects = []; //incoming projects
    const resp = await fetch(`https://assets.breatheco.de/apis/project/registry/all`);
    if(resp.status >=200 && resp.status <400){
        _projects = Object.values(await resp.json());
        console.log("Original projects: "+_projects)
    }
    else{
        console.error(`Error fetching projects with ${resp.status}`)
    }
    let technologyTags = [];
    let difficulties = [];
    for(let i = 0;i<_projects.length;i++){
        
        //skip repeated projects
        if(projects.find(p => _projects[i].slug === p.slug)) continue;
        else projects.push(_projects[i]);

        if(typeof(_projects[i].technology) === 'string') technologyTags.push(_projects[i].technology);
        if(Array.isArray(_projects[i].technologies)) technologyTags = technologyTags.concat(_projects[i].technologies);

        if(typeof(_projects[i].difficulty) === 'string'){
            if(_projects[i].difficulty === "junior") _projects[i].difficulty = "easy";
            else if(_projects[i].difficulty === "semi-senior") _projects[i].difficulty = "intermediate";
            else if(_projects[i].difficulty === "senior") _projects[i].difficulty = "hard";

            difficulties.push(_projects[i].difficulty)
        } 
    }
    technologyTags = [...new Set(technologyTags)];
    difficulties = [...new Set(difficulties)];
    

    createPage({

        path: `/`,
        component: path.resolve("./src/templates/home.js"),
        context: {
            technologyTags,
            difficulties,
            projects: projects.filter(p => !p.visibility || p.visibility === "public")
        },
    })

    projects.forEach(p => {
        console.log("Creating page for project "+p.title)
        if(typeof(p.title) === "string" && p.title !== "")
            p.title = "Coding Tutorial - " + p.title;
            
        if(typeof(p.description) !== "string" || p.description === "")
        p.description = "BreatheCode Coding Projects tutorials and exercises for people learning to code or improving their coding skills";
        if(typeof(p.preview) !== "string" || p.preview === "")
        p.preview = "https://ucarecdn.com/03b6cba5-457e-474c-b4e3-7ea65f3b3375/";

        if(typeof(p.difficulty) === "string" && p.difficulty !== "" && p.name !== "p"){
            p.canonicalPath = `/interactive-coding-tutorial/${p.difficulty}/${p.slug}`;
        }
        else{
            p.canonicalPath = `/project/${p.slug}`;
        }
        p.url = `https://projects.breatheco.de${p.canonicalPath}`;

        if (!Array.isArray(p.translations)) p.translations = ["us"];
        else p.translations = p.translations.filter(t => !["us","en"].includes(t)).concat(["us"]);
        
        
        console.log("Create page for project: "+p.canonicalPath);
        createPage({
            path: p.canonicalPath,
            component: path.resolve("./src/templates/single.js"),
            context: p,
        });
        if(p.canonicalPath !== `/project/${p.slug}`){
            createPage({
                path: `/project/${p.slug}`,
                component: path.resolve("./src/templates/single.js"),
                context: p,
            });
        }
        createPage({
            path: `/d/${p.slug}`,
            component: path.resolve("./src/templates/single.js"),
            context: p,
        });
    });

    return true;

};
