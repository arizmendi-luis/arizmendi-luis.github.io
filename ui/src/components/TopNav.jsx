//react and otehr plugins
import React, {useContext} from 'react'
//bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";   
import Nav from "react-bootstrap/Nav"; 
import  './CSS/Navbar.css'; 
import{PageContext} from './Context/PageContext' 
import { Link } from 'react-router-dom';  

function TopNav() { 
    const {page, setPage} = useContext(PageContext);
    return (
        <>  
            <ul id="nav"> 
                <li onClick = {()=>setPage('User')} ><Link to={'/User'}>User</Link></li>
                <li onClick = {()=>setPage('Settings')}><Link to={"/settings"}>Settings</Link></li>
                <li onClick = {()=>setPage('Updates')}><Link to={"/updates"}>Updates</Link></li>
                <li onClick = {()=>setPage('Contact')}><Link to={"/contact"}>Contact</Link></li>
                <li onClick = {()=>setPage('Projects')}><Link to={"/projects"}>Projects</Link></li>
                <li onClick = {()=>setPage('Home')}><Link to={"/home"}>Home</Link></li>
            </ul>
        </>
        
    ) 
} 

export default TopNav;