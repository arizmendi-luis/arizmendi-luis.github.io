import React from 'react'   
import './CSS/boxes.css' 
import {bio} from './text/About' 
let Resume = ""

function Notes() {
  return (  
    <div className='sideBySide'> 
    <div className='title'> 
        <h1>Notes</h1>  
    </div>  
      <div className='thirdBox'>
          <p>WARNING!</p>
      </div> 
      <div className='twoThirdBox'> 
        <p>* Website is still underdevelopment, many features are yet to be implemented and sections 
            and button implementation is unfunctional or nonexistent. Thanks for visiting</p>    
      </div> 
    </div> 
)
}

export default Notes