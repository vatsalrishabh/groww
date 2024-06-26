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
      <FullEmbeded/>
      <Footer/>
    </div>
  )
}

export default Contactus
