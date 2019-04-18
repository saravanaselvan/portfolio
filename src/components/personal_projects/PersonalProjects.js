import React from "react"

const PersonalProjects = props => {
  return (
    <section id="projects">
      <h1>Personal Projects</h1>
      <ul>
        <li>
          A To Do application with provisions log using React JS
          (https://www.spss.io) – Implemented Google Authentication with
          Firebase integration. Deployed using Netlify. Code:
          https://github.com/saravanaselvan/reacttodo
        </li>
        <li>
          Built a VS Code extension to generate Mocha Test skeleton for Express
          JS Controller TS files.
          <ul>
            <li>
              Link -
              https://marketplace.visualstudio.com/items?itemName=Saravanaselvan.mocha-test-generator
            </li>
            <li>
              Source Code:
              https://github.com/saravanaselvan/mocha-test-generator
            </li>
          </ul>
        </li>
        <li>
          Simple HTTP Server which can be installed globally to serve HTML file
          in port 3000 - https://github.com/saravanaselvan/simple-node-server
        </li>
      </ul>
    </section>
  )
}

export default PersonalProjects
