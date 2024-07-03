import React from 'react'
import SubNav from './SubNav'
import Footer from './Footer'
import FullEmbeded from './FullEmbeded'
import ContactForm from './ContactForm'
import subnavbg from '../assets/contactus/subnavbg.jpg'

const Contactus:React.FC = () => {
  return (
    <div className='Contacus'>
      <SubNav main="Home" submain="Contact Us" heading="Contact Us" bgimg={subnavbg}/>
      <ContactForm/>

      <div className="w-full lg:flex">
        <div className="lg:w-1/2 p-3 bg-slate-300">
            <h1 className='center'>Head Office</h1><FullEmbeded/>
        </div>
        <div className="lg:w-1/2 p-3 bg-slate-300">
        <h1 className='center'>Patna Office</h1><FullEmbeded/>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Contactus
