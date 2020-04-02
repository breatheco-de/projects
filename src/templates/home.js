import React, { useState } from "react";
import { Filter } from "@breathecode/ui-components";
import "@breathecode/ui-components/dist/main.css";
import Layout from "../components/layout"
import { SmallJumbotron } from "../components/smalljumbo.js";
import { ProjectCard } from "../components/projectCard.js";

const Home = ({ pageContext }) => {
    const [ selectedTags, setSelectedTags ] = useState(null);
    const [ difficulty, setDifficulty ] = useState(null);
    const [ withVideo, setWithVideo ] = useState(false);
    const [ displayMode, setDisplayMode ] = useState("card");

    const projects = pageContext.projects.filter(p => {
        if(selectedTags && selectedTags.length>0 && selectedTags.indexOf(p.technology) === -1) return false;
        if(difficulty && p.difficulty !== difficulty) return false;
        if(withVideo && !p["video-id"]) return false;
        return true;
    });

    return <React.Fragment>
            <Layout>
                <div className="fontFamily">
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
                                                label="Difficulty"
                                                multiselect={false}
                                                placeholder="Filter by difficulty"
                                                onChange={(difficulty)=> setDifficulty(difficulty ? difficulty.value : null)}
                                                options={pageContext.difficulties ? pageContext.difficulties.map((d)=>{
                                                    return {label: d,value: d}
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
        </React.Fragment>
};
export default Home;
