import React from 'react'   
import './CSS/boxes.css' 
import {bio} from './text/About' 
let Resume = ""

function About() {
  return (  
    <div className='sideBySide'> 
    <div className='title'> 
        <h1>About</h1>  
    </div>  
      <div className='thirdBox'>
          <p>Photo</p>
      </div> 
      <div className='twoThirdBox'> 
        <p>{bio}</p>
        <a href={Resume} target="_blank" rel="noreferrer">
        <button  type="button" 
        className='buttonCenter'>Download my Resume</button> 
        <p></p>
        </a>     
      </div> 
    </div> 
)
}

export default About
