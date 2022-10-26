import './App.css';
import { Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
// import TopNavbar from './components/TopNavbar';
import Home from './components/Home';
// import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {/* put the footer and navbar in the home component */}
      {/* <Footer /> */}
      
 
      <Routes>
        {/* <TopNavbar /> */}
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/home' element={<Home />} />

      </Routes>

    </div>
  );
}

export default App;
