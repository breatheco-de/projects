import React from "react";
import { Link } from "gatsby";
import { MarkdownParser, Icon } from "@breathecode/ui-components";
import "../styles/home.css";
import withLocation from "../components/withLocation";


const Single = ({ pageContext, search }) => {
    const iframe = (search.iframe === 'true');
    return(<div>
            <div className="container">
                <div className="row p-4">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-7 ">
                        <MarkdownParser source={pageContext.markdown} />
                    </div>
                    <div className="col-12 col-md-6 col-lg- col-xl-5">
                    { !iframe &&
                        <div className="row p-1 sticky-top mt-2">
                            <div className="col text-right">
                                <Link  className="btn btn-outline-secondary btn-lg d-none d-lg-block " to="/home">
                                        Browse all projects
                                </Link>
                            </div>
                        </div>
                    }
                        <div className="row p-1 sticky-top mt-2">
                            <div className="col">
                                <div className="card ">
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold lead h4">Goal</h5>
                                        <p className="card-subtitle mb-2 text-muted font-italic mb-3">
                                        {pageContext.description}
                                        </p>
                                        <div className="row border-bottom p-1 m-0 no-gutters">
                                            <div className="col-5 ">Difficulty</div>
                                            <div className="col-7 d-flex justify-content-end">{pageContext.difficulty}</div>
                                        </div>
                                        <div className="row border-bottom p-1 m-0 no-gutters">
                                            <div className="col-6 ">Video available:</div>
                                            <div className="col-6 d-flex justify-content-end ">{pageContext["video-path"]?"Available":"Not available"}</div>
                                        </div>
                                        <div className="row border-bottom p-1 m-0 no-gutters">
                                            <div className="col-6 ">Live demo available:</div>
                                            <div className="col-6 d-flex justify-content-end ">{pageContext["live-url"]?"Available":"Not available"}</div>
                                        </div>
                                        <div className="row border-bottom p-1 m-0 no-gutters">
                                            <div className="col-8 ">Project average duration</div>
                                            <div className="col-4 d-flex justify-content-end">{pageContext.duration} hr</div>
                                        </div>
                                        <div className="row border-bottom p-1 m-0 no-gutters">
                                            <div className="col-5">Technologies: </div>
                                            <div className="col-7 d-flex justify-content-end ">{pageContext.technology}</div>
                                        </div>
                                        <div className="row p-1 m-0 no-gutters">
                                            <div className="col-12 mb-2">Skills: </div>
                                            <div className="col-12">
                                                <ul className="list list-unstyled row ml-0">
                                                {pageContext.talents?pageContext.talents.map((t,i)=>{
                                                        return(
                                                        <li key={i} className="list-item col-6 mb-0">{t.badge}</li>
                                                        );
                                                }):""}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="row text-center">
                                            <div className="col-6">
                                                {pageContext.demo? <a
                                                    href={pageContext.demo}
                                                    className="btn btn-outline-primary btn-md px-4 w-100 ">
                                                    Live Demo
                                                </a>:" "}

                                            </div>
                                            <div className="col-6">

                                                {pageContext["video-id"]?<a
                                                    href={"https://projects.breatheco.de/d/"+pageContext.slug+"#video"}
                                                    className="btn btn-outline-success btn-md px-4 w-100 ">
                                                    Watch Video
                                                </a>:" "}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default withLocation(Single);