import React from 'react'
import SubNav from './SubNav'
import applybg from '../assets/Applynow/applybg.jpg'
import Footer from './Footer'
import ApplyForm from './ApplyForm'
import ApplyFormm from './ApplyFormm'
import ApplyFormmm from './ApplyFormmm'
import Submit from './Submit'

const ApplyNow:React.FC = () => {
  return (
    <div className=''>
        <SubNav main="Home" submain="Apply Now" heading="Apply Now" bgimg={applybg}/>
        <ApplyForm/>
        <ApplyFormm/>
        <ApplyFormmm/>
        <Submit/>
        <Footer/>
       
    </div>
  )
}

export default ApplyNow
