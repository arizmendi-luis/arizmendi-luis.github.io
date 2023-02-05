import React, {useState, useContext} from 'react'; 
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from 'react-icons/ai'; 
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'; 
import './CSS/Navbar.css'; 
import {IconContext} from 'react-icons';  
import TopNav from './TopNav';  
import Nav from "react-bootstrap/Nav"; 
import{PageContext} from './Context/PageContext' 
 
function Navbar() { 
    const [sidebar, setSidebar] = useState(false); 
    const showSidebar = () => setSidebar(!sidebar); 
    const {page, setPage} = useContext(PageContext);  
    return (
        <> 
            <IconContext.Provider value={{color:'#fff'}}> 
                <div className = 'navbarEnd'>   
                    <Link to="#" className="menu-bars"> 
                        <FaIcons.FaBars onClick={showSidebar}/>      
                    </Link>     
                </div> 
                <div className = 'navbarTitle'>   
                      <h1 className='navTitle'>{page}</h1>
                </div> 
                 <div className = 'navbar'>   
                </div> 
                <TopNav/>  
                <nav className={sidebar ? 'nav-menu active': 'nav-menu'}> 
                    <ul className="nav-menu-items" onClick={showSidebar}>  
                        <li className='navbar-toggle'>  
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose/> 
                            </Link>
                        </li> 
                        {SidebarData.map((item, index) => { 
                            return( 
                                <li key={index} className={item.cName} onClick = {(e)=>setPage(item.title)}>
                                    <Link to={item.path}>  
                                        {item.icon} 
                                        <span>{item.title}</span>
                                    </Link> 
                                    
                                </li>
                            )
                        })} 
                    </ul> 
                </nav>  
            </IconContext.Provider>
        </>
    )
}

export default Navbar
