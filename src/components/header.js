import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { SmallJumbotron } from "../components/smalljumbo.js";

const Header = ({ siteTitle }) => (
  <header >
    <div className="gradient p-5 text-center">
        <SmallJumbotron
            jumboClass="jumbotron jumbotron-fluid mb-0 pt-0"
            containerClass="pl-3  container"
            headerClass="display-4 font-weight-bold  text-left"
            headerText="Pool of Projects"
            pContent="A curated list of projects to practice while learning new technologies or improving your coding skills"
            pClass="lead  text-left"
        />
    </div>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
