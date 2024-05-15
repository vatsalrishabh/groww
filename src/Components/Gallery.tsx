import React from 'react'
import gallery from '../assets/Gallery/gallery.jpg'
import SubNav from './SubNav'
import Gal from './Gal'
import Footer from './Footer'

const Gallery:React.FC = () => {
  return (
    <div className='Gallery'>
       <SubNav main="Home" submain="Gallery" heading="Gallery" bgimg={gallery}/>
       <Gal/>
       <Footer/>
    </div>
  )
}

export default Gallery
