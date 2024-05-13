import React from 'react'
import SubNav from './SubNav'
import Footer from './Footer'
import FullEmbeded from './FullEmbeded'
import ContactForm from './ContactForm'
import subnavbg from '../assets/career/careerbg.jpg'

const Career:React.FC = () => {
  return (
    <div className='Contacus'>
      <SubNav main="Home" submain="Career" heading="Career" bgimg={subnavbg}/>
      <ContactForm/>
      <FullEmbeded/>
      <Footer/>
    </div>
  )
}

export default Career
