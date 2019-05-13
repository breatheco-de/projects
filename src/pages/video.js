import React from "react";
import { Link } from "gatsby";
import ReactPlayer from 'react-player';
import SEO from "../components/seo";
import "../styles/video.css";
import withLocation from "../components/withLocation";
import { Button } from "@breathecode/ui-components";

const Menu = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-0">
                <li className="nav-item active">
                    <Button iconName="book" />
                </li>
            </ul>
        </div>
    </nav>
)

const Video = () => (
  <div className="bcvideo">
    <SEO title="Page two" />
    <Menu />
    <ReactPlayer
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        width="100%" height="100vh" playing
    />
  </div>
);

export default withLocation(Video)
