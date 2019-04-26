import React from "react"
import "./PersonalProjects.css"
import githubLogo from "../../images/github-logo.png"
import vsCodeDarkLogo from "../../images/vscode-dark-blue.png"

const PersonalProjects = props => {
  return (
    <section id="projects">
      <h1>Personal Projects</h1>
      <div className="project-container">
        <h2>
          <a href="https://github.com/saravanaselvan/reacttodo">
            React To Do
            <img className="github-link" src={githubLogo} alt="Github Logo" />
          </a>
        </h2>
        <div className="project-description">
          A To Do application with provisions log using React JS. Implemented
          Google Authentication with Firebase integration. Deployed using
          Netlify.
        </div>
        <h2>
          <a href="https://marketplace.visualstudio.com/items?itemName=Saravanaselvan.mocha-test-generator">
            VS Code Extension
            <img
              className="vscode-link"
              src={vsCodeDarkLogo}
              alt="Github Logo"
            />
          </a>
        </h2>
        <div className="project-description">
          Built a VS Code extension to generate Mocha Test skeleton for Express
          JS Controller TS files.
        </div>
        <h2>
          <a href="https://github.com/saravanaselvan/simple-node-server">
            Node JS HTTP Server
            <img className="github-link" src={githubLogo} alt="Github Logo" />
          </a>
        </h2>
        <div className="project-description">
          Simple HTTP Server which can be installed globally to serve HTML file
          in port 3000
        </div>
        <h2>
          <a href="https://portfolio.spss.com/saravanaselvan/rent-receipt">
            Rent Receipt Generator
          </a>
        </h2>
        <div className="project-description">
          Simple form to fill user details and generate rent receipt. Access ,<a href="/rent-receipt">here</a>
        </div>
      </div>
    </section>
  )
}

export default PersonalProjects
