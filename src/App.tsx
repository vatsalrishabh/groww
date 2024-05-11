import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ErrorPage from './ErrorPage';
import Nv from './Components/Nv';
import HomeSlider from './Components/HomeSlider';
import Footer from './Components/Footer';
import CalculateEMI from './Components/CalculateEMI';

function App() {
  const [count, setCount] = useState<string>('4');

  return (
    <Router>
      <div className='App'>
        <Nv />
        <Navbar />
        <HomeSlider />
        <CalculateEMI/>

        <Routes>
          <Route path="/error" element={<ErrorPage />} />
          {/* Add more Route components for additional pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
