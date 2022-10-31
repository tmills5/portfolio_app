import './App.css';
import { Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
// import TopNavbar from './components/TopNavbar';
// import Home from './components/Home';
//? might take home out 
import Projects from './components/Projects';
import About from './components/About';
// import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      
      {/* <TopNavbar /> */}
      <Routes>
        
        <Route exact path='/' element={<Landing />} />
        {/* <Route exact path='/home' element={<Home />} /> */}
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/about' element={<About />} />

      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
