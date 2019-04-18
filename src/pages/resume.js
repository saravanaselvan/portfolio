import React from "react"
import Header from "../components/header/Header"
import ProfessionalSummary from "../components/professional_summary/ProfessionalSummary"
import PersonalProjects from "../components/personal_projects/PersonalProjects"
import WorkExperienceSummary from "../components/work_experience_summary/WorkExperinceSummary"

import styles from "./resume.module.css"

const Resume = props => {
  return (
    <Header>
      <section className={styles.container}>
        <ProfessionalSummary />
        <PersonalProjects />
        <WorkExperienceSummary />
      </section>
    </Header>
  )
}

export default Resume
