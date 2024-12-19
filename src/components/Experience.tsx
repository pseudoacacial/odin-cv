import React from 'react'

export const Experience = ({id, fields=[], handleChange, handleRemove}: {id: number, fields: {},handleChange:(Event)=>void, handleRemove:(Event)=>void}) => {
  return (
    <div className="experience" data-id={id}>
        {Object.keys(fields).map((field) => (
          <div key={field} className='field'> <span className="label">{field}</span><input data-id={id} name={field} value={fields[field]} onChange={handleChange}></input></div>
           ))}
           <button onClick={handleRemove}>remove</button>
    </div>
  )
}
