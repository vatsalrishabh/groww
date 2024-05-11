import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Nv: React.FC = () => {
  const gogoFB = () => {
    // Define the action for clicking on Facebook icon
    window.open('https://www.facebook.com/', '_blank');
  };

  const gotoX = () => {
    // Define the action for clicking on X icon
    // You may define your action here
  };

  const gotoPinet = () => {
    // Define the action for clicking on Pinterest icon
    window.open('https://www.pinterest.com/', '_blank');
  };

  const gotoInsta = () => {
    // Define the action for clicking on Instagram icon
    window.open('https://www.instagram.com/', '_blank');
  };

  const sendmail = () => {
    // Define the action for clicking on email icon
    // This will open the default email client with the provided email address
    window.location.href = 'mailto:vatsalrishabh00@gmail.com';
  };

  const call = () => {
    // Define the action for clicking on the phone number icon
    // This will initiate a call to the provided phone number
    window.location.href = 'tel:8123573669';
  };

  return (
    <div className='hidden w-full lg:flex bg-slate-200 sm:hidden md:hidden'>
      <div className="w-1/2 flex">
        <div className="w-1/2 flex justify-end">
          <div className='mx-1 hover:cursor-pointer' onClick={gogoFB}><FacebookIcon /></div>
          <div className='mx-1 hover:cursor-pointer' onClick={gotoX}><XIcon /></div>
          <div className='mx-1 hover:cursor-pointer' onClick={gotoPinet}><PinterestIcon /></div>
          <div className='mx-1 hover:cursor-pointer' onClick={gotoInsta}><InstagramIcon /></div>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className='px-2 hover:cursor-pointer'>Login</div>   
          <div className='px-2 hover:cursor-pointer'>/Company News</div>
          <div className='px-2 hover:cursor-pointer'>/FAQs</div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="email">
          <div className="icon px-2 hover:cursor-pointer" onClick={sendmail}>
            <EmailIcon /> vatsalrishabh00@gmail.com
          </div>
        </div>
        <div className="timings">
          <div className="icon px-2 hover:cursor-pointer" onClick={call}>
            <AccessTimeFilledIcon /> 8123573669
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nv;
