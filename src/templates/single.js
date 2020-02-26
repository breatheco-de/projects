import React from "react";
import { Link } from "gatsby";
import { MarkdownParser, Icon } from "@breathecode/ui-components";
import "../styles/home.css";
import withLocation from "../components/withLocation";
import Iframe from "../components/iframe";
import Layout from "../components/layout";
import Helmet from "react-helmet";


class Single extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showVideo: false,
            markdown: props.pageContext.markdown
        }
    }

    componentDidMount(){
        const { pageContext, search } = this.props;
        console.log("Context: ", pageContext);

        if(typeof(markdown) !== 'string'){
            const readmeURL = pageContext.readme.indexOf("../") == 0 ?
                "https://projects.breatheco.de/json/?slug="+pageContext.slug+"&readme&size=big"
                :
                pageContext.readme;
    
            fetch(readmeURL)
                .then(resp => resp.text())
                .then(data => this.setState({ markdown: data }))
                .catch(err => {
                    alert("Error loading the markdon file");
                    console.error(err);
                });
        }
    }

    render(){
        const { pageContext, search } = this.props;

        const fromIframe = (search.iframe === 'true');
        return(
            <React.Fragment>
              <Helmet>
                    <title>Projects BreatheCode - {pageContext.title}</title>
                    <meta name="description" content="BreatheCode Projects - Coding Projects and exercises for people learning to code or improving their coding skills" />
                     <meta itemprop="image" content="../images/breathecode.32.png"/>
                </Helmet>
            <div className="fontFamily">
                { this.state.showVideo && <Iframe
                        src={`https://assets.breatheco.de/apps/video/?v=https://assets.breatheco.de/apis/vtutorial/project/${pageContext.slug}`}
                        height="60vh"
                    />
                }
                <Layout>
                    <div className="container fontFamily single-project">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6 col-xl-7 order-2 order-md-1">
                                <MarkdownParser source={this.state.markdown} />
                            </div>
                            <div className="col-12 col-md-6 col-lg- col-xl-5 order-1 order-md-2 mb-3">
                            { !fromIframe &&
                                <div className="row p-1 sticky-top mt-2">
                                    <div className="col text-right">
                                        <Link  className="btn btn-outline-secondary btn-lg d-none d-lg-block " to="/">
                                                Browse all projects
                                        </Link>
                                    </div>
                                </div>
                            }
                                <div className="row p-1 sticky-top mt-2">
                                    <div className="col">
                                        <div className="card ">
                                            <div className="card-body text-left">
                                                <h5 className="card-title font-weight-bold lead h4">Goal</h5>
                                                <p className="card-subtitle mb-2 text-muted font-italic mb-3">
                                                {pageContext.description}
                                                </p>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-5 ">Difficulty</div>
                                                    <div className="col-7 d-flex justify-content-end">{pageContext.difficulty}</div>
                                                </div>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-6 "><span className="colorRed"><Icon type="youtube" className="text-danger"/></span><span className="ml-1">Video available:</span></div>
                                                    <div className="col-6 d-flex justify-content-end ">{pageContext["video-path"]?"Available":"Not available"}</div>
                                                </div>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-7 "><span ><Icon type="play" className="text-danger font-size" /></span><span className="ml-2">Live demo available:</span></div>
                                                    <div className="col-5 d-flex justify-content-end ">{pageContext["live-url"]?"Available":"Not available"}</div>
                                                </div>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-8 "><span><Icon type="circle" /></span><span className="ml-1">Project average duration:</span></div>
                                                    <div className="col-4 d-flex justify-content-end">{pageContext.duration} hr</div>
                                                </div>
                                                <div className="row border-bottom p-1 m-0 no-gutters small">
                                                    <div className="col-5"><span><Icon type="code" /></span><span className="ml-1">Technologies:</span></div>
                                                    <div className="col-7 d-flex justify-content-end ">{pageContext.technology}</div>
                                                </div>
                                                <div className="row p-1 m-0 no-gutters small">
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

                                                        {pageContext["video-id"]?<button
                                                            onClick={() => this.setState({ showVideo: true })}
                                                            className="btn btn-outline-success btn-md px-4 w-100 ">
                                                            Watch Video
                                                        </button>:" "}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Layout>
                </div>
            </React.Fragment>
        );
    }
}
export default withLocation(Single);