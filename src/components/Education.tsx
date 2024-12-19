import React, { useState } from 'react'
import { Experience } from './Experience'

const initialExperiences ={
  'education': {
    'school name': '',
    'title of study': '',
    'date of study': ''
  }
}

// ````````````
//todo:
// move state up
// ?change Education into Section Component, with new props title and initialExperiences?
// `````````````

// const fields = {
//   general: ['name', 'email', 'phone number'],
//   education: ['school name', 'title of study', 'date of study'],
//   'practical experience': ['company name', 'position title', 'main responsibilities', 'starting date', 'end date']
// }

export const Education = () => {

  const [experiences, setExperiences] = useState({[crypto.randomUUID()]: {...initialExperiences.education}})

  console.log(experiences)

  const handleAdd = (e) => {
    setExperiences({...experiences, [crypto.randomUUID()]: {...initialExperiences.education}})
    
  }
  const handleRemove = (e) => {
    const newExperiences = {...experiences}
    delete newExperiences[e.target.parentElement.getAttribute('data-id')]
    setExperiences(newExperiences)
  }
  const handleChange = (e) => {
    const newExperiences = {...experiences}
    // if (!newExperiences[e.target.getAttribute('data-id')]) {
    //   newExperiences[e.target.getAttribute('data-id')]={};
    // }

    newExperiences[e.target.getAttribute('data-id')][e.target.name] = e.target.value;

    setExperiences(newExperiences)
  }

  return (
    <div className='education form'>
      <h2>Education</h2>
      <div className='experiences'>
        {Object.keys(experiences).map(experience=> (
          <Experience key={experience} id={experience} fields={experiences[experience]} handleChange={handleChange} handleRemove={handleRemove}></Experience>
        ))}
      </div>
      <button onClick={handleAdd}>add</button>
      </div>
  )
}
