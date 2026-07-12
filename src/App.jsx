import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Content from './pages/Content';

import Live from './pages/Live';
import NotFound from './pages/NotFound';
// import Galaxy from './components/Galaxy';


function App() {




  return (
    <>
{/* 
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Galaxy />
      </div>

// With custom prop values
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div> */}

      <div>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/Cnt" element={<Content />} />
          <Route path="/LL" element={<Live />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </>

  );
}

export default App;
