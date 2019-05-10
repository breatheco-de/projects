import React from "react";

import { Filter, Icon } from "@breathecode/ui-components";
import { SmallJumbotron } from "../components/smalljumbo.js";
import { Link } from "gatsby";









const Home = ({ pageContext, technologyTags }) => (

    <div>
        <div>
            <SmallJumbotron
                jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
                containerClass="pl-4  container"
                headerClass="display-4 font-weight-bold  text-left"
                headerText="Pool of Projects"
                pClass="lead  text-left"
            />
            <div className="row sticky-top bg-white border-top border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-start  py-1">
                        <div className="pl-1">
                            <Filter
                                    label="Tags"
                                    placeholder="Select one or more tags"
                                    onChange={(technologyTags)=>console.log(technologyTags)}
                                    options={technologyTags?technologyTags.map((t)=>{
                                        return {label: t,value: t}
                                    }):[{label:" ",value: " "}]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                { pageContext.projects.map((p, i) => (<div
                        key={i}
                        className="row text-center text-md-left mt-2  border-bottom p-3">
                        { p.preview && <div className="col-12 col-md-2 d-flex justify-content-center align-items-center">
                                <img
                                        className="img-fluid "
                                        src={"https://projects.breatheco.de/"+p.preview}
                                    />

                            </div>
                        }
                        <div className="col-12 col-md">
                            <div className="row">
                                <div className="col-12">
                                    <div className="h2 text-dark">{p.title}</div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <small className="text-muted lead font-italic">
                                        in the following technologies:
                                        <span className="linkDecoration">
                                            &nbsp;
                                            {p.technology}
                                        </span>
                                    </small>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-12 p-2 col-md">
                                        {p.difficulty?<span className="badge badge-pill badge-light mr-2">{p.difficulty}</span>:" "}
                                        {p.duration?<span className="badge badge-pill badge-light mr-2">{p.duration}</span>:" "}
                                        {p["video-path"]?<span className="badge badge-pill badge-light mr-2">With Video</span>:" "}

                                </div>
                                <div className="col-12 col-md-3 d-flex justify-content-md-end">
                                    <div className="row mx-auto">
                                        <div className="col-12 d-flex align-items-end">
                                            <Link className="btn btn-outline-primary buttonHeight  px-2 " to={"/project/" + p.slug}>
                                                README.md
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
export default Home;
