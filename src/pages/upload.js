import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import "../styles/video.css";
import withLocation from "../components/withLocation";
import { ProjectCard } from "../components/projectCard";
import useDebounce from "../hooks/debounce";
import { Button } from "@breathecode/ui-components";
import { StaticQuery } from "gatsby";

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;
let timer = null;

const projectURL = (url) => {
    const regex = /https:\/\/github\.com\/([a-z0-9-]+)\/([a-z0-9-]+)$/gm;
    let m = regex.exec(url);
    return !m ? null : ({
        url: [
            `https://raw.githubusercontent.com/${m[1]}/${m[2]}/master/learn.json`,
            `https://raw.githubusercontent.com/${m[1]}/${m[2]}/master/bc.json`,
            `https://raw.githubusercontent.com/${m[1]}/${m[2]}/master/.learn/learn.json`,
        ],
        slug: m[2]
    });
}
console.log("Assets url: ",process.env.ASSETS_URL);
const uploadProject = async (location, project) => {
    const params = new URLSearchParams(location.search);
    const token = params.get('assets_token');

    if(!token) throw new Error("Missing token");
    if(!process.env.ASSETS_URL) throw new Error("Missing assets url");
    const resp = await fetch(`${process.env.ASSETS_URL}/apis/project/registry/${project.slug}?access_token=${token}`,{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(project)
    });
    if(resp.status === 200){
        const data = await resp.json();
        return data;
    }
    else{
        const error = await resp.json();
        throw new Error(error.msg);
    }
}

const Upload = ({ location }) => {
    //https://raw.githubusercontent.com/breatheco-de/exercise-random-card/master/bc.json
    const [ formData, setFormData ] = useState({ slug: "", url: "" });
    const debouncedSearchTerm = useDebounce(formData.url, 1000);
    const [ status, setStatus ] = useState({ value: "idle", message: null, error: false, step: 1 });
    const [ results, setResults ] = useState(null);

    useEffect(
        () => {
            // Make sure we have a value (user has entered something in input)
            if (debouncedSearchTerm) {
                const bc = projectURL(debouncedSearchTerm);
                if(bc){
                    setStatus({ value: "searching", error: false, message: "", step: 1 });
                    searchProject(bc.url).then(results => {
                        setResults(results);
                        if(results) setStatus({ value: "found", error: false, step: 2 });
                        else setStatus({ value: "idle", error: false, step: 1 });
                    });
                }
                else{
                    setStatus({ value: "idle", error: true, message: "Invalid Project URL", step: 1 });
                }
            } else {
                setResults(null);
                setStatus({ value: "idle", error: false, step: 1 });
            }
        },
        // This is the useEffect input array
        // Our useEffect function will only execute if this value changes ...
        // ... and thanks to our hook it will only change if the original ...
        // value (searchTerm) hasn't changed for more than 500ms.
        [debouncedSearchTerm]
      );

    return (
    <div className="container mt-5">
        <h1>Upload new project to BreatheCode</h1>
        {status.message && <div className={`alert alert-${status.error ? "danger": "success"}`}>{status.message}</div>}
        <div>
            <div className="form-group">
                <label>Project url</label>
                <div className="input-group">
                    <input type="url" className="form-control" placeholder="Starting with https://..." 
                        value={formData.url}
                        onChange={(e) => setFormData({url: e.target.value })}
                        disabled={status.value === "found"}
                        />
                    {status.value === "found" && <div className="input-group-append border-left-0">
                        <span className="input-group-text border-left-0 btn-light p-0 m-0 pointer">
                            <span className="btn m-0 border-0" onClick={() => {
                                setFormData({url: "" });
                                setStatus({value: "idle", step: 1 });
                            }}>clear</span>
                        </span>
                    </div>}
                </div>
            </div>
            { status.value === "searching" && <div>Searching...</div>}
            {
                status.step === 2 && results &&
                <div>
                    <div>
                    { !results.difficulty && <li class="text-danger">Missing difficulty</li> }
                    { !results.description && <li class="text-danger">Missing description</li> }
                    { !results.technologies && <li class="text-danger">Missing technologies</li> }
                    { !results.solution && <li class="text-warning">Missing solution</li> }
                    { !results.duration && <li class="text-warning">Missing duration</li> }
                    { !results["video-id"] && <li class="text-warning">Missing video</li> }
                    </div>
                    <ProjectCard mode="row" 
                        key={results.slug} project={results}
                        defaultPreview={"https://ucarecdn.com/03b6cba5-457e-474c-b4e3-7ea65f3b3375/"}
                        target="_blank"
                    />
                    <p>
                        {status.value === "found" && <button 
                            className="btn btn-primary form-control"
                            onClick={() => uploadProject(location, {
                                ...results,
                                repository: formData.url
                            })
                            .then(data => {
                                setStatus({ error: false, message: "Project updated successfully", value:"idle" });
                                setFormData({ url: "" });
                            })
                            .catch(error => setStatus({ error: true, message: error.msg || error.message || error, value: "done" }))}
                            >
                                Upload project seed
                            </button>
                        }
                    </p>
                </div>
            }  
        </div>
    </div>
    );
}

// API search function
const searchProject = async (url) => {
    if(!Array.isArray(url)) url = [url];
    for(let i = 0;i<url.length;i++){
        let resp = await fetch(url[i], { cache: "no-store" });
        if(resp.status === 200) return await resp.json();
    }
    
    throw new Error("Project configuration not found");
}
  
export default withLocation(Upload)
