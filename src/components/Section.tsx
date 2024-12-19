import React from "react";
import { Experience } from "./Experience";

export const Section = ({
  type,
  experiences,
  handleAdd,
  handleRemove,
  handleChange,
}) => {
  return (
    <div className="education form">
      <h2>{type}</h2>
      <div className="experiences">
        {experiences.map((experience, id) => (
          <Experience
            type={type}
            key={id}
            id={id}
            fields={experience}
            handleChange={handleChange}
            handleRemove={handleRemove}
          ></Experience>
        ))}
      </div>
      <button
        onClick={(e) => {
          handleAdd(e, type);
        }}
      >
        add
      </button>
    </div>
  );
};
