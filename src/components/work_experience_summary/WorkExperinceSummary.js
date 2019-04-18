import React from "react"
import Project from "../project/Project"
import { PROJECTS } from "../../constants/projects.constants"
import styles from "./WorkExperienceSummary.module.css"

const WorkExperienceSummary = props => {
  const projectDetails = PROJECTS
  return (
    <section id="work_experience">
      <h1>Work Experience Summary</h1>
      <div className={styles.project_container}>
        {projectDetails.map((project, index) => {
          return <Project projectDetail={project} key={index} />
        })}
      </div>
    </section>
  )
}

export default WorkExperienceSummary
