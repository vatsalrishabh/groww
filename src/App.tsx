import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ErrorPage from './ErrorPage';
import Nv from './Components/Nv';
import Contactus from './Components/Contactus';
import Home from './Components/Home';
import Career from './Components/Career';

function App() {


  return (
    <Router>
      <div className='App'>
        <Nv />
        <Navbar />


        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/career" element={<Career/>} />
          <Route path="/error" element={<ErrorPage />} />
          {/* Add more Route components for additional pages */}
        </Routes>
    
      </div>
    </Router>
  );
}

export default App;
