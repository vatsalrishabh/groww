import React from 'react'
import HomeSlider from './HomeSlider'
import CalculateEMI from './CalculateEMI'
import Counting from './Counting'
import Footer from './Footer'
import LoanServices from './LoanServices'
import ApplicationProc from './ApplicationProc'
import NewsArticle from './NewsArticle'
import BecomePartner from './BecomePartneer'
import CustomeService from './CustomeService'
import WhyChooseUs from './WhyChooseUs'

const Home:React.FC = () => {
  return (
    <div className='Home'>
         <HomeSlider />
        <CalculateEMI/>
        <LoanServices/>
        <ApplicationProc/>
        <BecomePartner/>
        <CustomeService/>
        <WhyChooseUs/>
        <NewsArticle/>
        <Counting/>
        <Footer/>
    </div>
  )
}

export default Home
