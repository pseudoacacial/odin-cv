import { useState } from 'react'
import { Resume } from './components/Resume'
import { Section }  from './components/Section'
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
  const [generalExperiences, setGeneralExperiences] = useState([{...initialExperiences.general}])
  const [educationExperiences, setEducationExperiences] = useState([{...initialExperiences.education}])
  const [practicalExperiences, setPracticalExperiences] = useState([{...initialExperiences.practical}])

  const stateMap = {
    general: {get: generalExperiences, set: setGeneralExperiences},
    education: {get: educationExperiences, set: setEducationExperiences},
    practical: {get: practicalExperiences, set: setPracticalExperiences}
  }
  
  const handleAdd = (e,type) => {
    stateMap[type].set([...stateMap[type].get, {...initialExperiences[type]}])
    
  }
  const handleRemove = (e, type) => {

    stateMap[type].set(stateMap[type].get.filter(experience => experience!= stateMap[type].get[e.target.parentElement.getAttribute('data-id')]))
  }
  const handleChange = (e, type) => {
    const newExperiences = [...stateMap[type].get]

  
    newExperiences[e.target.getAttribute('data-id')][e.target.name] = e.target.value;
  
    stateMap[type].set(newExperiences)
  }


  return (
    <>
    <div className='forms block'>

    <Section 
      type={'general'}
      experiences={generalExperiences} 
      handleAdd={handleAdd} 
      handleRemove={handleRemove} 
      handleChange={handleChange}
      ></Section>
      <Section 
      type={'education'}
      experiences={educationExperiences} 
      handleAdd={handleAdd} 
      handleRemove={handleRemove} 
      handleChange={handleChange}
      ></Section>
      <Section 
      type={'practical'}
      experiences={practicalExperiences} 
      handleAdd={handleAdd} 
      handleRemove={handleRemove} 
      handleChange={handleChange}
      ></Section>
    </div>
    <div className='results block'>
      <Resume title='General Experiences' experiences={generalExperiences}/>
      <Resume title='Education' experiences={educationExperiences}/>
      <Resume title='Practical Experiences' experiences={practicalExperiences}/>
    </div>
      
    </>
  )
}

export default App
