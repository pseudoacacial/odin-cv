
import React from 'react'
import { Experience } from './Experience'



// ````````````
//todo:
// ?change Education into Section Component, with new props title and initialExperiences?
// `````````````

// const fields = {
//   general: ['name', 'email', 'phone number'],
//   education: ['school name', 'title of study', 'date of study'],
//   'practical experience': ['company name', 'position title', 'main responsibilities', 'starting date', 'end date']
// }

export const Education = ({experiences, handleAdd, handleRemove, handleChange}) => {


  console.log(experiences)



  return (
    <div className='education form'>
      <h2>Education</h2>
      <div className='experiences'>
        {experiences.map((experience, id)=> (
          <Experience key={id} id={id} fields={experience} handleChange={handleChange} handleRemove={handleRemove}></Experience>
        ))}
      </div>
      <button onClick={handleAdd}>add</button>
      </div>
  )
}
