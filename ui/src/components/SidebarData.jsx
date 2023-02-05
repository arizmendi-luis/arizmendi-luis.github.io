import React from 'react' 
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';  
import * as mdIcons from 'react-icons/md'; 
import * as grIcons from'react-icons/gr';  

export const SidebarData = [ 
{    
    title: 'Home', 
    path: '/', 
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
},  
{    
    title: 'Projects', 
    path: '/projects', 
    icon: <IoIcons.IoIosRocket/>, 
    cName: 'nav-text'
}, 
{    
    title: 'Contact', 
    path: '/contact', 
    icon: <FaIcons.FaEnvelopeOpenText/>,
    cName: 'nav-text'
},  
{    
    title: 'Updates', 
    path: '/updates', 
    icon: <mdIcons.MdOutlineTipsAndUpdates/>,
    cName: 'nav-text'
},  
{    
    title: 'Settings', 
    path: '/settings', 
    icon: <AiIcons.AiFillSetting/>,
    cName: 'nav-text'
}, 
{    
    title: 'User', 
    path: '/user', 
    icon: <FaIcons.FaUserCircle/>,
    cName: 'nav-text'
},
]