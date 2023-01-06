import './App.css';
import { Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Nav from './components/Nav';
import Home from './components/Home';
// import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
// import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
      {/* not rendering the navbar on landing page */}
      {window.location.pathname !== '/' ? <Nav /> : null}
      {/* {window.location.pathname !== '/' ? <Footer /> : null} */}
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/home' element={<Home />} />
        {/* <Route exact path='/projects' element={<Projects />} /> */}
        <Route exact path='/about' element={<About />} />
        {/* <Route exact path='/contact' element={<ContactPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
