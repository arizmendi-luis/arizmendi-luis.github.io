import React from 'react'
import Container from 'react-bootstrap/esm/Container' 
import Navbar from '../components/Navbar'
import WelcomeBanner from '../components/WelcomeBanner' 
import TopNav from '../components/TopNav'  
import About from '../components/About' 
import Index from  '../components/Index' 
import Notes from '../components/Notes'


function Home() {
  return ( 
    <div style={{backgroundColor: 'whitesmoke'}}> 
        <WelcomeBanner/> 
        <Container> 
          <Notes/> 
          <About/>  
          <Index/> 
        </Container> 
        <div className='bottomStripe'></div>   
    </div>
  )
}

export default Home
