const sharp = require('sharp')
sharp.simd(false)
sharp.cache(false)
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const fetch = require('node-fetch');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    let projects = [];
    const resp = await fetch('https://assets.breatheco.de/apis/project/all');
    if(resp.status >=200 && resp.status <400){
        projects = await resp.json();
    }
    let technologyTags = [];
    for(let i = 0;i<projects.length;i++){
        if(typeof(projects[i].technology) === 'string') technologyTags.push(projects[i].technology);
        if(Array.isArray(projects[i].technologies)) technologyTags = technologyTags.concat(projects[i].technologies);
    }
    technologyTags = [...new Set(technologyTags)];

    createPage({

        path: `/`,
        component: path.resolve("./src/templates/home.js"),
        context: {
            technologyTags,
            projects: projects.filter(p => !p.visibility || p.visibility === "public")
        },
    })

    projects.forEach(p => {
        console.log("Create page for project: /"+p.slug);
        createPage({
            path: `/project/${p.slug}`,
            component: path.resolve("./src/templates/single.js"),
            context: p,
        })
        createPage({
            path: `/d/${p.slug}`,
            component: path.resolve("./src/templates/single.js"),
            context: p,
        })
    });

    return true;

};