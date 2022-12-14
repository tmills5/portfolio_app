import './App.css';
import { Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Nav from './components/Nav';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import About from './components/About';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
      {/* not rendering the navbar on landing page */}
      {window.location.pathname !== '/' ? <Nav /> : null}
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/projects' element={<ProjectsPage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
