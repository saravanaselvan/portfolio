import React from "react"
import { Link } from "gatsby"
import "./Header.css"
import githubLogo from "./github-logo.png"

export default props => {
  return (
    <div>
      <nav>
        <a href="https://github.com/saravanaselvan">
          <img className="github-logo" src={githubLogo} alt="Github Link" />
        </a>
        <ul>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      {props.children}
    </div>
  )
}
