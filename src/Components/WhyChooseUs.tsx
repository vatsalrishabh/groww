import React from 'react';
import SavingsIcon from '@mui/icons-material/Savings';
import whychoose from '../assets/whychoose/whychoose.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const WhyChooseUs: React.FC = () => {
  return (
    <div className='Why-choose bg-gray-100 py-12'>
      <div className="container mx-auto lg:flex">
        {/* Left Side */}
        <div className="lg:w-1/2 pr-4">
          <div className="bg-blue-800 rounded-lg p-6 flex items-center justify-center mb-4">
            <div className="icon-work flex items-center">
              <div className='icon mr-4'><SavingsIcon sx={{fontSize: 40, color: 'white'}} /></div>
              <div className='text-white text-2xl'>4 years of working experience</div>
            </div>
          </div>
          <div className="bg-blue-800 rounded-lg p-6 mb-4">
            <img src={whychoose} alt="Why Choose Us" className="w-full" />
          </div>
          <div className="bg-blue-800 rounded-lg p-6 text-white text-center">Trust us!</div>
        </div>
        {/* Right Side */}
        <div className="lg:w-1/2 pl-4">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <p className="mb-6">PR GROW  has created a mark of excellence in providing the best loan deals to our customers across various long ranges of Loan products.</p>
            <div className="middle flex justify-between mb-6">
              <div className="w-1/3 flex items-start">
                <div className="icon mt-1"><ArrowRightIcon color="primary"/></div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Dedicated Specialists</h3>
                  <p className="text-sm">Our dedicated team of professionals brings an informed perspective to each challenge</p>
                </div>
              </div>
              <div className="w-1/3 flex items-start">
                <div className="icon mt-1"><ArrowRightIcon color="primary"/></div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">No Front Appraisal Fees!</h3>
                  <p className="text-sm">A no-appraisal fees that doesn't require at various loan appraisal.</p>
                </div>
              </div>
              <div className="w-1/3 flex items-start">
                <div className="icon mt-1"><ArrowRightIcon color="primary"/></div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Success Stories Rating</h3>
                  <p className="text-sm">Check out some of our customer reviews and find out how we can help you improve your business.</p>
                </div>
              </div>
            </div>
            <ul className="list-disc ml-6 mb-6">
              <li className="mb-3 flex items-center">
                Loan Process: 
                <div className="ml-3 w-full bg-gray-200 rounded-full">
                  <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '90%'}}>90%</div>
                </div>
              </li>
              <li className="mb-3 flex items-center">
                Consultancy: 
                <div className="ml-3 w-full bg-gray-200 rounded-full">
                  <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '80%'}}>80%</div>
                </div>
              </li>
              <li className="mb-3 flex items-center">
                Payment Benefits: 
                <div className="ml-3 w-full bg-gray-200 rounded-full">
                  <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '85%'}}>85%</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
