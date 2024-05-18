import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ErrorPage from './ErrorPage';
import Nv from './Components/Nv';
import Contactus from './Components/Contactus';
import Home from './Components/Home';
import Career from './Components/Career';
import ApplyNow from './Components/ApplyNow';
import Gallery from './Components/Gallery';
import News from './Components/News';
import BusinessLoan from './Components/BusinessLoan';

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
        <Route path='/applynow' element={<ApplyNow/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/news' element={<News/>} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="services/business" element={<BusinessLoan/>}/>
          {/* Add more Route components for additional pages */}
        </Routes>
    
      </div>
    </Router>
  );
}

export default App;
