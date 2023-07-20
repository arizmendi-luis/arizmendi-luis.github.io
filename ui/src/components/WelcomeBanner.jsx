import React from 'react' 
import './CSS/banner.css' 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import{ 
  faYoutube, 
  faGithub, 
  faLinkedin, 
} from '@fortawesome/free-brands-svg-icons'; 
import{ 
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import * as HiIcons from "react-icons/hi"; 
import * as SiIcons from "react-icons/si"; 
//import Typical from "react-typical";

function WelcomeBanner() {
  return ( 
      <div className='banner'> 
        <p className='bannerWords'>Luis Arizmendi</p>  
        <p className='bannerSub'>Aspiring Software Engineer </p>  
          {/* <Typical className='bannerSub'
          loop={Infinity} 
          wrapper="c" 
          steps={[
              ' Software Enginner', 
              5000, 
              ' Mechanical Enginner', 
              5000, 
              ' Aerospace Enginner', 
              5000,
          ]}/></p>   */}
        <a 
          href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' 
          className='youtube social'  
          rel='noreferrer' 
          target="_blank"
        > 
          <FontAwesomeIcon icon={faYoutube} size='2x'/> 
        </a>  
        <a 
          href='https://github.com/arizmendi-luis' 
          className='Github social' 
          rel='noreferrer' 
          target="_blank" 
        > 
          <FontAwesomeIcon icon={faGithub} size='2x'/> 
        </a> 
        <a 
          href='https://www.linkedin.com/in/luis-arizmendi-6a2381197/' 
          className='LinkedIn social' 
          rel='noreferrer' 
          target="_blank" 
        > 
          <FontAwesomeIcon icon={faLinkedin} size='2x'/> 
        </a> 

        <a 
          href='mailto:larizmen@stanford.edu' 
          className='Mail social' 
          rel='noreferrer'  
          target="_blank"
        >  
          <FontAwesomeIcon icon={faEnvelope} size='2x'/>
        </a>  
        <a 
          href='https://www.thingiverse.com/luisarizmendi02/designs' 
          className='Thingiverse social' 
          rel='noreferrer' 
          target="_blank" 
        > 
          <SiIcons.SiThingiverse fontSize= '30px'/> 
        </a> 
      </div>  
      
  )
}

export default WelcomeBanner
