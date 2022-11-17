import './App.css';
import { Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import TopNavbar from './components/TopNavbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';


function App() {
  return (
    //?  DRY up the rendering of header and footer
    <div className="App">
      {/* not rendering the navbar on landing page */}
      {/* {window.location.pathname !== '/' ? <TopNavbar /> : null} */}

      <Routes>
        
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<ContactPage />} />
      </Routes>

      {/* not rendering the footer on landing page */}
      {/* {window.location.pathname !== '/' ? <Footer /> : null} */}
    </div>
  );
}

export default App;
