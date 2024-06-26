import React from 'react'
import SubNav from './SubNav'
import Footer from './Footer'
import FullEmbeded from './FullEmbeded'
import subnavbg from '../assets/career/careerbg.jpg'
import CareerContact from './CareerContact'

const Career:React.FC = () => {
  return (
    <div className='Contacus'>
      <SubNav main="Home" submain="Career" heading="Career" bgimg={subnavbg}/>
     <CareerContact/>   {/*form to send pdf */}
      <FullEmbeded/>
      <Footer/>
    </div>
  )
}

export default Career
