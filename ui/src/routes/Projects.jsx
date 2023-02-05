import React from 'react' 
import Container from 'react-bootstrap/esm/Container' 
import TOBIAS from '../components/Projects/TOBIAS' 

function Projects() {
  return (
    <div style={{backgroundColor: 'whitesmoke'}}>  
        <Container> 
          <TOBIAS/>
        </Container> 
    <div className='bottomStripe'></div>   
</div>
  )
}

export default Projects
