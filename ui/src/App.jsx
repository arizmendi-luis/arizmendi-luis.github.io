import './App.css';  
import './components/CSS/banner.css'
import Navbar from "./components/Navbar"; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Home from './routes/Home' 
import {PageContextProvider} from './components/Context/PageContext';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import Updates from './routes/Updates'; 
import Settings from './routes/Settings'; 
import User from './routes/User';
//comment more comment
function App() {
  return (
    <>  
    <PageContextProvider>
      <Router> 
        <Navbar/> 
        <Routes> 
          <Route path = "/"  element={<Home/>}/> 
          <Route path = "/home"  element={<Home/>}/>  
          <Route path = "/projects"  element={<Projects/>}/>  
          <Route path = "/contact"  element={<Contact/>}/> 
          <Route path = "/updates"  element={<Updates/>}/>  
          <Route path = "/settings"  element={<Settings/>}/>  
          <Route path = "/User"  element={<User/>}/>  
        </Routes> 
      </Router> 
      </PageContextProvider>
    </>
  );
}

export default App;
