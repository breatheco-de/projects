import React from "react";
import { Icon } from "@breathecode/ui-components";
import { Link } from "gatsby";
export const ProjectCard = ({ project, mode }) => {
    const previewUrl = typeof(project.preview) !== "undefined" ? 
        project.preview.indexOf('http') > -1 ? project.preview : "https://projects.breatheco.de/"+project.preview
        :
        null;

        return  mode === "row" ? 
        <Row project={project} preview={previewUrl} />
        :
        <Card project={project} preview={previewUrl} />;
};


const Card = ({ project, preview }) => {
    const p = project;
    return <div className="card">                            
        <Link className="text-dark" to={p.canonicalPath}>
            { preview && <img className="card-img-top" src={preview} alt={`Preview for ${p.title}`} />}
            <div className="card-body p-2">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description}</p>
                <div>
                    {p.difficulty?<span className="author badge badge-pill badge-light mr-2"><span><Icon type="circle" /></span> {p.difficulty}</span>:" "}
                    {p.duration?<span className="author badge badge-pill badge-light mr-2"><span><Icon type="circle" /></span> {p.duration} hr duration</span>:" "}
                    {p["video-id"] && <span className="author badge badge-pill badge-light mr-2"><span className="colorRed"><Icon type="youtube" className="text-danger" /></span> Video Tutorial</span>}
                    {p.technology?<span className="author badge badge-pill badge-light mr-2"><span><Icon type="code" /></span> {p.technology}</span>:" "}
                </div>
            </div>
        </Link>
    </div>
};

const Row = ({ project, preview }) => {
    const p = project;
    return <div className="row text-center text-md-left mt-2  p-3 paddingLeftZero">
        { preview && <div className="col-12 col-md-2 d-flex justify-content-center align-items-center">
                    <img className="img-fluid " src={preview} alt={`Preview for ${p.title}`} />
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
                    {p.description}
                    </small>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-12 p-2 col-md">
                        {p.difficulty?<span className="author badge badge-pill badge-light mr-2"><span><Icon type="circle" /></span> {p.difficulty}</span>:" "}
                        {p.duration?<span className="author badge badge-pill badge-light mr-2"><span><Icon type="circle" /></span> {p.duration} hr duration</span>:" "}
                        {p["video-id"]?<span className="author badge badge-pill badge-light mr-2"><span className="colorRed"><Icon type="youtube" className="text-danger" /></span> Video Tutorial</span>:<span className="author badge badge-pill badge-light mr-2"><span className="colorRed"><Icon type="youtube" className="text-danger" /></span> No Video</span>}
                        {p.technology?<span className="author badge badge-pill badge-light mr-2"><span><Icon type="code" /></span> {p.technology}</span>:" "}

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
};