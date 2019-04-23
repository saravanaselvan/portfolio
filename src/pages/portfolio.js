import React from 'react';
import Header from '../components/header/Header';
// import { Link } from 'gatsby';
import PersonalProjects from '../components/personal_projects/PersonalProjects';
import { Helmet } from "react-helmet"

import styles from "./resume.module.css"

export default (props) => {
  return (
    <Header>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      {/* <Link to="/calculator">Calculator</Link> */}
      <section className={styles.container}>
      <PersonalProjects />
      </section>
    </Header>
  )
}