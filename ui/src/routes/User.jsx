import React from 'react' 
import Container from 'react-bootstrap/esm/Container' 

function User() {
  return (
    <div style={{backgroundColor: 'whitesmoke'}}>   
        <Container> 
          <div style={{marginBottom: '2rem'}}> 
            <h1>Page Under Development</h1> 
          </div>  
          <div style={{marginBottom: '100%'}}>   
            <h3>This page is yet to be updated or given content. Please navigate to other pages.</h3> 
          </div>
        </Container>  
        <div className='bottomStripe'></div>   
    </div>
  )
}

export default User
