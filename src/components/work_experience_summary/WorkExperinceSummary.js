import React from 'react';
import Project from '../project/Project';
import { PROJECTS } from '../../constants/projects.constants';

const WorkExperienceSummary = (props) => {
  const projectDetails = PROJECTS;
  return (
    <section>
      <h1>Work Experience Summary</h1>
      {
        projectDetails.map((project, index) => {
          return (
            <Project projectDetail={project} key={index}></Project>
          )
        })
      }
    </section>
  )
}

export default WorkExperienceSummary;