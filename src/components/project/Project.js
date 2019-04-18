import React from "react"
import styles from "./Project.module.css"

const Project = ({ projectDetail }) => {
  const {
    company,
    duration,
    role,
    client,
    tools,
    projectDetails,
  } = projectDetail
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
            <div>{projectDetail.title}</div>
            <ul>
              {projectDetail.responsibilities.map((res, index) => {
                return <li key={index}>{res}</li>
              })}
            </ul>
          </div>
        )
      })}
    </section>
  )
}

export default Project
