import './App.css';
import { Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
// import TopNavbar from './components/TopNavbar';
import Home from './components/Home';
// import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {/* <TopNavbar /> */}
      {/* <Footer /> */}
      <Landing />
 
      <Routes>
        {/* <Route exact path='/' element={<Landing />} /> */}
      </Routes>
    </div>
  );
}

export default App;
