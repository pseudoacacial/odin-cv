import React from "react";

export const Resume = ({ experiences, title }) => {
  return (
    <div className="resume">
      <h2>{title}</h2>
      {experiences.map((experience) =>
        Object.keys(experience).map((field) => (
          <li>
            <strong>{field}: </strong>
            <span>{experience[field]}</span>
          </li>
        ))
      )}
    </div>
  );
};
