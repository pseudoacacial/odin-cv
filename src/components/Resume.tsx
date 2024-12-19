import React from "react";

export const Resume = ({ experiences }) => {
  return (
    <div className="resume">
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
