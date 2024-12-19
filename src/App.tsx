import { useState } from 'react'
import { Resume } from './components/Resume'
import { Education }  from './components/Education'
import './styles/App.css'
import React from 'react'



function App() {


  const initialExperiences ={
    'general': {
      'name': '',
      'email': '',
      'phone number': ''
    },
    'education': {
      'school name': '',
      'title of study': '',
      'date of study': ''
    },
    'practical': {
      'company name': '',
      'position title': '',
      'main responsibilities': '',
      'starting date': '',
      'end date': ''
    }

  }
  
  const [educationExperiences, setEducationExperiences] = useState([{...initialExperiences.education}])

  const stateMap = {
    // general: [generalExperiences, setGeneralExperiences],
    education: {get: educationExperiences, set: setEducationExperiences},
    // practical: [practicalExperiences, setPracticalExperiences]
  }
  
  const handleAdd = (e,type='education') => {
    stateMap[type].set([...stateMap[type].get, {...initialExperiences.education}])
    
  }
  const handleRemove = (e, type='education') => {
    // const newExperiences = [...stateMap[type].get]
    // delete newExperiences[e.target.parentElement.getAttribute('data-id')]
    stateMap[type].set(stateMap[type].get.filter(experience => experience!= stateMap[type].get[e.target.parentElement.getAttribute('data-id')]))
  }
  const handleChange = (e, type='education') => {
    const newExperiences = [...stateMap[type].get]
    // if (!newExperiences[e.target.getAttribute('data-id')]) {
    //   newExperiences[e.target.getAttribute('data-id')]={};
    // }
  
    newExperiences[e.target.getAttribute('data-id')][e.target.name] = e.target.value;
  
    stateMap[type].set(newExperiences)
  }


  return (
    <>
    <div className='forms block'>
      <Education 
      experiences={educationExperiences} 
      handleAdd={handleAdd} 
      handleRemove={handleRemove} 
      handleChange={handleChange}
      ></Education>
    </div>
    <div className='results block'>
      <Resume experiences={educationExperiences}/>
    </div>
      
    </>
  )
}

export default App
