import React from 'react' 
import Container from 'react-bootstrap/esm/Container' 
import TOBIAS from '../components/Projects/TOBIAS' 
import MakeAble from '../components/Projects/MakeAble' 
import ULA from '../components/Projects/ULA'
import TARC from '../components/Projects/TARC' 
import StatsforCNC from '../components/Projects/StatsforCNC' 
import BalloonPayload from '../components/Projects/BalloonPayload' 
import AutoSeaOtter from '../components/Projects/AutoSeaOtter'

function Projects() {
  return ( 
    <div style={{backgroundColor: 'whitesmoke'}}>
      <Container>      
          <div className='projectGrid'> 
          {/* <div className='yearGrid'> 
            <h3>2022-2023</h3>
              <div className='thirdGrid'> 
                <StatsforCNC/>
              </div> 
              <div className='thirdGrid'> 
                <BalloonPayload/>
              </div>  
              <div className='thirdGrid'> 
                <AutoSeaOtter/>
              </div> 
            </div>    */}
            <div className='yearGrid'> 
            <h3>2021-2022</h3>   
              <div className='thirdGrid'>
                <TOBIAS/>
              </div>  
            </div> 
            <div className='yearGrid'> 
            <h3>2020-2021</h3>
              <div className='thirdGrid'> 
                <TARC/>
              </div> 
              <div className='thirdGrid'> 
                <MakeAble/>
              </div>  
              <div className='thirdGrid'> 
                <ULA/>
              </div> 
            </div>  
          </div> 
    </Container> 
    <div className='bottomStripe'></div>   
</div> 
  )
}

export default Projects
