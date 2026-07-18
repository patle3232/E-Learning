

import axios from "axios"; 
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import Courses from './pages/Courses'; 
import About from './pages/About'; 
import Content from './pages/Content'; 
import Live from './pages/Live'; 
import NotFound from './pages/NotFound'; 
import CourseDetail from './pages/CourseDetail'; 

function App() { 
  return ( 
    <> 
      <div> 
        <Navbar /> 
        
        
        <div className="pt-24">
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/courses" element={<Courses />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/Cnt" element={<Content />} /> 
            <Route path="/course/:id" element={<CourseDetail />} /> 
            <Route path="/LL" element={<Live />} /> 
            <Route path="*" element={<NotFound />} /> 
          </Routes> 
        </div>

      </div> 
    </> 
  ); 
} 

export default App;
