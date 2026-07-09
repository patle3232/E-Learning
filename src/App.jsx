import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Content from './pages/Content';

import Live from './pages/Live';
import NotFound from './pages/NotFound';

function App() {
  return (
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
  );
}

export default App;
