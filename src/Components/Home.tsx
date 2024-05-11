import React from 'react'
import HomeSlider from './HomeSlider'
import CalculateEMI from './CalculateEMI'
import Counting from './Counting'
import Footer from './Footer'

const Home:React.FC = () => {
  return (
    <div className='Home'>
         <HomeSlider />
        <CalculateEMI/>
        <Counting/>
        <Footer/>
    </div>
  )
}

export default Home
