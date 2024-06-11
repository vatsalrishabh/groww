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
import PersonalLoan from './Components/PersonalLoan';
import HomeLoan from './Components/HomeLoan';
import AboutUs from './Components/AboutUs';
import FixedWC from './Components/FixedWC';
import DoctorsLoan from './Components/DoctorsLoan';
import Mortgage from './Components/Mortgage';
import SME from './Components/SME';
import WorkingCapital from './Components/WorkingCapital';

function App() {


  return (
    <Router>
      <div className='App'>
        <Nv />
        <Navbar />
<FixedWC/>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/career" element={<Career/>} />
        <Route path='/applynow' element={<ApplyNow/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/news' element={<News/>} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="services/personal" element={<PersonalLoan/>}/>
        <Route path="services/doctor" element={<DoctorsLoan/>}/>
        <Route path="services/home" element={<HomeLoan/>}/>
        <Route path="services/business" element={<BusinessLoan/>}/>
        <Route path="services/mortgage" element={<Mortgage/>}/>
        <Route path="services/sme" element={<SME/>}/>
        <Route path="services/working-capital" element={<WorkingCapital/>}/>
        <Route path="about/team" element={<AboutUs/>}/>
        <Route path="about/company" element={<AboutUs/>}/>
          {/* Add more Route components for additional pages */}
        </Routes>
    
      </div>
    </Router>
  );
}

export default App;
