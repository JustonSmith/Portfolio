import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import  Home  from './pages/Home'
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
import './stylesheets/home.css';
import './stylesheets/header-footer.css';
import './stylesheets/carousel.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element= { <Home />} />
          <Route path='/projects' element= { <Projects />} />
          <Route path='/skills' element= { <Skills />} />
          <Route path='/about' element= { <About />} />
          <Route path='/contact' element= { <Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
