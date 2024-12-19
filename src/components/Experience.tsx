import React from "react";

export const Experience = ({
  id,
  fields = [],
  handleChange,
  handleRemove,
  type
}: {
  id: number;
  fields: {};
  handleChange: (Event) => void;
  handleRemove: (Event) => void;
  type: string
}) => {
  return (
    <div className="experience" data-id={id}>
      {Object.keys(fields).map((field) => (
        <div key={field} className="field">
          <span className="label">{field}</span>
          <input
            data-id={id}
            name={field}
            value={fields[field]}
            onChange={(e) => {handleChange(e, type)}}
          ></input>
        </div>
      ))}
      <button onClick={(e) => {handleRemove(e, type)}}>remove</button>
    </div>
  );
};
