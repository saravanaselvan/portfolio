import React from 'react';

const ProfessionalSummary = (props) => {
  const summary = [
    "Having 12+ years of experience in Web Development",
    "Exposure to Web App development with Jquery, Angular JS, Angular 2+, Ruby on Rails & Express JS.",
    "Experience in working with Agile delivery model with focus on testing within iterations.",
    "Experienced in working with Continuous performance delivery model using Jenkins.",
    "Hands on knowledge of setting up server with AWS.",
    "Have the ability to learn new technologies quickly and solve problems.",
    "Looking for an opportunity to work with Javascript Stack.",
  ];
  return (
    <section id="professional_summary">
      <h1>Professional Summary</h1>
      <ul>
        {summary.map((item, i) => {
          return (
            <li key={i}>{item}</li>
          )
        })}
      </ul>
    </section>
  )
}

export default ProfessionalSummary;
