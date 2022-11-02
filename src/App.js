import './App.css';
import { Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import TopNavbar from './components/TopNavbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
// import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {window.location.pathname !== '/' ? <TopNavbar /> : null}

      <Routes>
        
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/about' element={<About />} />

      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
