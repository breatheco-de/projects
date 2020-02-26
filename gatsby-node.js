
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const fetch = require('node-fetch');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    let projects = [];
    let new_slugs = [];
    const resp_new = await fetch('https://assets.breatheco.de/apis/project/registry/all');
    if(resp_new.status >=200 && resp_new.status <400){
        const data = await resp_new.json();
        new_slugs = Object.keys(data);
        projects = new_slugs.map(slug => data[slug]);
    }
    else console.error("Error fetching projects ",resp_new);
    console.log("Projects => ",projects);
    const resp_old = await fetch('https://assets.breatheco.de/apis/project/all');
    if(resp_old.status >=200 && resp_old.status <400){
        const oldProjects = await resp_old.json();
        oldProjects.forEach(p => {
            if(!new_slugs.includes(p.slug)) projects.push(p);
        });
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