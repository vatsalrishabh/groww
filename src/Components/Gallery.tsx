import React from 'react'
import gallery from '../assets/Gallery/gallery.jpg'
import SubNav from './SubNav'
import Gal from './Gal'
import Footer from './Footer'
import image1 from '../assets/Gal/first1.avif'
import image2 from '../assets/Gal/first2.jpg'
import image3 from '../assets/Gal/image3.webp'
import image4 from '../assets/Gal/image4.jpg'
import image5 from '../assets/Gal/first.webp'
import image6 from '../assets/Gal/image6.jpg'
import image7 from '../assets/Gal/image7.webp'
import image8 from '../assets/Gal/c.jpg'

const Gallery:React.FC = () => {

  return (
    <div className='Gallery'>
       <SubNav main="Home" submain="Gallery" heading="Gallery" bgimg={gallery}/>
       <div className="lg:text-4xl text-2xl font-bold p-10">
          Our Gallery
       </div>
       <div className='m-10'>
       <Gal image1={image1} image2={image2} image3={image3} image4={image4} />
       </div>
       <div className='m-10'>
       <Gal image1={image6} image2={image5} image3={image7} image4={image8} />
       </div>
       <Footer/>
    </div>
  )
}

export default Gallery
