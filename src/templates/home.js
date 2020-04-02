import React, { useState } from "react";

import { Filter } from "@breathecode/ui-components";

import "@breathecode/ui-components/dist/main.css";
import Layout from "../components/layout"
import { SmallJumbotron } from "../components/smalljumbo.js";
import { ProjectCard } from "../components/projectCard.js";
import Helmet from "react-helmet";

const Home = ({ pageContext }) => {
    const [ selectedTags, setSelectedTags ] = useState(null);
    const [ withVideo, setWithVideo ] = useState(false);
    const [ displayMode, setDisplayMode ] = useState("card");
    console.log(pageContext);
    const projects = pageContext.projects.filter(p => {
        if(selectedTags && selectedTags.length>0 && selectedTags.indexOf(p.technology) === -1) return false;
        if(withVideo && !p["video-id"]) return false;
        return true;
    });

    const site_name = "BreatheCode Projects";
    const title = `${site_name} - Practice and polish your coding skills by building real life projects`;
    const preview = "https://ucarecdn.com/03b6cba5-457e-474c-b4e3-7ea65f3b3375/";
    const description = `${site_name} - Coding Projects and exercises for people learning to code or improving their coding skills`;
    return <React.Fragment>
            <div className="fontFamily">
                <Helmet>
                    <title>{title}</title>
                    <meta property="og:site_name" content={site_name}></meta>
                    <meta name="twitter:image:alt" content="BreatheCode Projects and Coding Tutorials"></meta>
                    <meta name="description" content={description} />
                    <meta itemprop="image" content=""/>
                    <meta property="og:url"                content={`https://projects.breatheco.de`} />
                    <meta property="og:type"               content="website" />
                    <meta property="og:title"              content={title} />
                    <meta property="og:description"        content={description} />
                    <meta property="og:image"              content={preview} />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:image" content={preview} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@alesanchezr" />

                </Helmet>
            <Layout>
                <div>
                    <SmallJumbotron
                        jumboClass="jumbotron jumbotron-fluid mb-0 pt-0"
                        containerClass="pl-3  container"
                        headerClass="display-4 font-weight-bold  text-left"
                        headerText="Pool of Projects"
                        pContent="Practice and develop your coding skills by building real live interactive autograded projects with solutions and video tutorials"
                        pClass="lead text-left"
                    />
                    <div className="row sticky-top bg-white border-top border-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col d-flex justify-content-start pl-1  py-1">
                                    <div className="pl-1">
                                        <Filter
                                                label="Tags"
                                                placeholder="Filter projects by tags"
                                                onChange={(selectedTags)=> setSelectedTags(selectedTags.map(t => t.value))}
                                                options={pageContext.technologyTags ? pageContext.technologyTags.map((t)=>{
                                                    return {label: t,value: t}
                                                }):[{label:" ",value: " "}]}
                                            />
                                    </div>
                                    <div className="pl-1">
                                        <Filter
                                                label="Other filters"
                                                multiselect={false}
                                                placeholder="Other filters: "
                                                direction={'row'}
                                                onChange={(t)=> setWithVideo(t ? t.value === "with-video" : false)}
                                                options={[
                                                    {label: 'Only with video tutorials',value: 'with-video'}
                                                ]}
                                            />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div class={displayMode === "card" ? "card-columns pt-3":""}>
                            { projects.map(p => <ProjectCard key={p.slug} project={p} mode={displayMode} />)}
                        </div>
                    </div>
                </div>
                </Layout>
            </div>
        </React.Fragment>
};
export default Home;
