import { useState } from 'react'
import { Resume } from './components/Resume'
import { Education }  from './components/Education'
import './styles/App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='forms block'>
      <Education></Education>
    </div>
    <div className='results block'>
      <Resume />
    </div>
      
    </>
  )
}

export default App
