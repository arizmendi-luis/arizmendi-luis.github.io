import React from 'react' 
import Container from 'react-bootstrap/esm/Container' 
import TOBIAS from '../components/Projects/TOBIAS' 

function Projects() {
  return ( 
    <div style={{backgroundColor: 'whitesmoke'}}>
      <Container>    
          <div className='projectGrid'>   
            <div className='thirdGrid'>
              <TOBIAS/>
            </div> 
            <div className='thirdGrid'> 
              <TOBIAS/>
            </div> 
            <div className='thirdGrid'> 
              <TOBIAS/>
            </div>  
            <div className='thirdGrid'> 
              <TOBIAS/>
            </div>  
          </div> 
    </Container> 
    <div className='bottomStripe'></div>   
</div> 
  )
}

export default Projects
