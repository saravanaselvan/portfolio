import React from 'react';

const Project = ({projectDetail}) => {
  const { company, duration, role, client, tools, projectDetails } = projectDetail;
  return (
    <section>
      <span>{company}</span>
      <span>{duration}</span>
      <span>{role}</span>
      <span>{client}</span>
      <span>{tools}</span>
      {
        projectDetails.map((projectDetail, i) => {
          return (
            <div key={i}>
              <span>{projectDetail.title}</span>
              <ul>
              {
                projectDetail.responsibilities.map((res, index) => {
                  return (
                    <li key={index}>{res}</li>
                  )
                })
              }
              </ul>
            </div>
          )
        })
      }
    </section>
  )
}

export default Project;