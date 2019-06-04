import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
const Header = ({ siteTitle }) => (
  <header >
    <div className="gradient p-5 text-center">
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
