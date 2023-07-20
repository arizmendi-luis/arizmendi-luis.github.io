import React from 'react'
import Container from 'react-bootstrap/esm/Container' 
import Navbar from '../components/Navbar'
import WelcomeBanner from '../components/WelcomeBanner' 
import TopNav from '../components/TopNav'  
import About from '../components/About' 
import Index from  '../components/Index' 
import Notes from '../components/Notes'
var version = '1.1'

function Home() {
  return ( 
    <div style={{backgroundColor: 'whitesmoke'}}> 
        <WelcomeBanner/> 
        <Container> 
          <Notes/> 
          <About/>  
          <Index/> 
        </Container>  
        <div className='bottomStripe'> 
        <p class='forvers'>version: {version}</p>
        </div>   
    </div>
  )
}

export default Home
