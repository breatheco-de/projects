import React from "react";

import { Filter, Icon } from "@breathecode/ui-components";
import { SmallJumbotron } from "../components/smalljumbo.js";
import { Link } from "gatsby";
import Layout from "../components/layout"


const Home = ({ pageContext, technologyTags }) => (

    <div className="fontFamily">
    <Layout>
        <div>
            <SmallJumbotron
                jumboClass="jumbotron jumbotron-fluid mb-0 bg-white pt-0"
                containerClass="pl-3  container"
                headerClass="display-4 font-weight-bold  text-left"
                headerText="Pool of Projects"
                pClass="lead  text-left"
            />
            <div className="row sticky-top bg-white border-top border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-start pl-1  py-1">
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
                { pageContext.projects.map((p, i) => (
                <div>
                <div
                        key={i}
                        className="row text-center text-md-left mt-2  p-3 paddingLeftZero">
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
                                    <div><p className=" h2 text-dark">{p.title}</p></div>
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
                                        {p.difficulty?<span className="author badge badge-pill badge-light mr-2"><span><Icon type="circle" /></span> {p.difficulty}</span>:" "}
                                        {p.duration?<span className="author badge badge-pill badge-light mr-2"><span><Icon type="circle" /></span> {p.duration} hr duration</span>:" "}
                                        {p["video-path"]?<span className="author badge badge-pill badge-light mr-2"><span className="colorRed"><Icon type="youtube" className="text-danger" /></span> With Video</span>:<span className="author badge badge-pill badge-light mr-2"><span className="colorRed"><Icon type="youtube" className="text-danger" /></span> No Video</span>}

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
                     <hr className="my-4" />
                     </div>

                ))}
            </div>
        </div>
        </Layout>
    </div>
);
export default Home;
