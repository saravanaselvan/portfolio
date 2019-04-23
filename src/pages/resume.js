import React from "react"
import Header from "../components/header/Header"
import ProfessionalSummary from "../components/professional_summary/ProfessionalSummary"
import PersonalProjects from "../components/personal_projects/PersonalProjects"
import WorkExperienceSummary from "../components/work_experience_summary/WorkExperinceSummary"
import ContactCard from "../components/contact_card/ContactCard"
import { Helmet } from "react-helmet"

import styles from "./resume.module.css"

const Resume = props => {
  return (
    <Header>
      <Helmet>
        <title>Resume</title>
      </Helmet>
      <section className={styles.container}>
        <ContactCard />
        <ProfessionalSummary />
        <PersonalProjects />
        <WorkExperienceSummary />
      </section>
    </Header>
  )
}

export default Resume
