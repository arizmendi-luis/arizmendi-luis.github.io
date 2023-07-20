import React, {useContext} from 'react' 
import{PageContext} from './Context/PageContext' 
import { Link } from 'react-router-dom'; 

function Index() { 
    const {page, setPage} = useContext(PageContext);
  return (
    <div className='sideBySide'> 
        <div className='title'> 
            <h1>Index</h1>  
        </div>  
        <div className='thirdBox'>
            <h4>View portfolio</h4> 
            <p>Click here to see Projects</p> 
            <Link to={'/projects'}><button className ='buttonCenter' onClick = {()=>setPage('Projects')}>
                Projects</button></Link><p></p>
        </div> 
        <div className='thirdBox'> 
            <h4>Reach out?</h4> 
            <p>Click for Contact page</p> 
            <Link to={'/contact'}><button className ='buttonCenter' onClick = {()=>setPage('Contact')}>
                Contact</button></Link><p></p>
        </div> 
        <div className='thirdBox'> 
            <h4>Want to see what's new?</h4> 
            <p>Click here for Updates</p> 
            <Link to={'/updates'}><button className ='buttonCenter' onClick = {()=>setPage('Updates')}>
                Updates</button></Link><p></p>
        </div> 
        <div className='thirdBoxSettingIndex'> 
            <h4>Change how you see the site?</h4> 
            <p>Click here for Settings</p> 
            <Link to={'/settings'}><button className ='buttonCenter' onClick = {()=>setPage('Settings')}>
                Settings</button></Link><p></p>
        </div> 
        <div className='thirdBox'> 
            <h4>Link your Microsft Account?</h4> 
            <p>Click here for User</p>  
            <p>(Feature coming soon)</p><p></p>
        </div>
    </div>
  )
}

export default Index
