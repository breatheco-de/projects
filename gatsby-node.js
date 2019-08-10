
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const fetch = require('node-fetch');
const fs = require('fs');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    var content = fs.readFileSync('./json/projects_big.json').toString();
    const projects = JSON.parse(content);
    let technologyTags = [];
    for(let i = 0;i<projects.length;i++){
        if(technologyTags.indexOf(projects[i].technology) == -1)
            technologyTags.push(projects[i].technology);
    }

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

};