import React from "react"
import { Link } from "gatsby"
import imageURL from "../images/breathecode.45.png"
import withLocation from "./withLocation"

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      change: false,
    }
  }

  render() {
    const { pageContext, search } = this.props
    const fromIframe = search.iframe === "true"

    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light gradient">
        <a 
          href="https://breatheco.de/"
          target="_blank"
          rel="noopener noreferrer">
          <img className="navbar-brand mb-0" src={imageURL} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            this.setState({
              change: !this.state.change,
            })
          }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`navbar-collapse collapse ${this.state.change && "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto text-center">
            <li className="nav-item mt-3 fontFamily">
              <a
                href="https://breatheco.de/aboutus"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link">
                <p
                  className={`nav-link ${this.state.change && "border-bottom"}`}
                >
                  About Us
                </p>
              </a>
            </li>
            <li className="nav-item mt-3 fontFamily">
              <a 
                href="https://breatheco.de/interactive-exercises"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link">
                <p
                  className={`nav-link ${this.state.change && "border-bottom"}`}
                >
                  Practice
                </p>
              </a>
            </li>
            <li className="nav-item mt-3 fontFamily">
              <a 
                href="https://breatheco.de/lessons"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link">
                <p
                  className={`nav-link ${this.state.change && "border-bottom"}`}
                >
                  Read
                </p>
              </a>
            </li>
            <li className="nav-item mt-3 fontFamily">
              <Link to="/" className="nav-link">
                <p
                  className={`nav-link ${this.state.change && "border-bottom"}`}
                >
                  Build
                </p>
              </Link>
            </li>
            <li className="nav-item mt-3 fontFamily">
              <a href="https://4geeksacademy.com/" className="nav-link">
                <p
                  className={`nav-link ${this.state.change && "border-bottom"}`}
                >
                  Coding Bootcamp
                  <span
                    className="position-relative d-none d-lg-inline"
                    style={{
                      color: "#007bff",
                      top: "20px",
                      left: "-66px",
                      fontSize: "14px",
                      fontStyle: "italic",
                    }}
                  >
                    sponsored
                  </span>
                </p>
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0  d-flex justify-content-center fontFamily">
            <a
              href="https://breatheco.de/contributing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link btn btn-outline-success buttonHeight mr-2"
            >
              Contribute
            </a>
            <a
              className="btn btn-outline-primary buttonHeight  px-5"
              href="https://student.breatheco.de/login"
            >
              login
            </a>
          </form>
        </div>
      </nav>
    )
  }
}

export default withLocation(Navbar)
