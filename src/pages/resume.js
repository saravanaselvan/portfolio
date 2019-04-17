import React from 'react';
import Header from '../components/header/Header';
import ProfessionalSummary from '../components/professional_summary/ProfessionalSummary';
import PersonalProjects from '../components/personal_projects/PersonalProjects';
import WorkExperienceSummary from '../components/work_experience_summary/WorkExperinceSummary';

const Resume = (props) => {
  return (
    <Header>
      <ProfessionalSummary></ProfessionalSummary>
      <PersonalProjects></PersonalProjects>
      <WorkExperienceSummary></WorkExperienceSummary>
    </Header>
  )
}

export default Resume;