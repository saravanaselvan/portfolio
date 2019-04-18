import React from "react"
import styles from "./Project.module.css"

const Project = ({ projectDetail }) => {
  const { company, duration, role, tools, projectDetails } = projectDetail
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <span>{role} | </span>
        <span>{company} | </span>
        <span>{duration}</span>
      </div>
      {/* <div>{client}</div> */}
      <div className={styles.tools}>{tools}</div>
      {projectDetails.map((projectDetail, i) => {
        return (
          <div key={i}>
            <h2 className={styles.projectTitle}>{projectDetail.title}</h2>
            <ul>
              {projectDetail.responsibilities.map((res, index) => {
                return (
                  <li key={index} dangerouslySetInnerHTML={{ __html: res }} />
                )
              })}
            </ul>
          </div>
        )
      })}
    </section>
  )
}

export default Project
