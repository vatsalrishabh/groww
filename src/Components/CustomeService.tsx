import React from 'react'

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import './LoginServices.css'


const CustomeService:React.FC = () => {
  return (
    <div className='OurSercice w-full'>
        <div className='w-full flex align-middle justify-center p-5'>Customers Testimonials</div>
        <div className='w-full flex align-middle justify-center  lg:text-5xl text-3xl  font-bold p-5'>Customers Testimonials</div>
{/* main slider */}
<div className="flex overflow-x-auto lg:justify-center">
      {/* Slider Item 1 */}
      <div className="flex-shrink-0 w-full lg:w-1/3 max-w-sm mx-2">
        <div className="bg-white rounded-lg shadow-md p-6">
        
          <div className="text-gray-600">“I am happy with the overall service provided by cashkumar. always in touch and kept me updated on the loan status. recommend people to use it.”</div>
          <div className="text-2xl font-semibold text-blue-800 my-5">Dr. Anjani Kumar</div>
          <div className="flex justify-end mt-4">
          <div className='rounded-full bg-blue-600 white-svg'>
          <FormatQuoteIcon sx={{ fontSize: 40 }}  />
            </div>
          </div>
        </div>
      </div>

      {/* Slider Item 2 */}
      <div className="flex-shrink-0 w-full lg:w-1/3 max-w-sm mx-2">
        <div className="bg-white rounded-lg shadow-md p-6">
        
          <div className="text-gray-600">“Easy platform and great service. Thanks for helping me really quick. Shall recommend to my friends for certain.”</div>
          <div className="text-2xl font-semibold text-blue-800 my-5">Suresh Kumar Singh</div>
          <div className="flex justify-end mt-4">
          <div className='rounded-full bg-blue-600 white-svg'>
          <FormatQuoteIcon sx={{ fontSize: 40 }}  />
            </div>
          </div>
        </div>
      </div>

      {/* Slider Item 3 */}
      <div className="flex-shrink-0 w-full lg:w-1/3 max-w-sm mx-2">
        <div className="bg-white rounded-lg shadow-md p-6">
        
          <div className="text-gray-600">“Good site to get loans online. My Personal loan was processed in a week's time and I got best offers for being an Infosys employee. Good work team!”</div>
          <div className="text-2xl font-semibold text-blue-800 my-5">Aman Kumar</div>
          <div className="flex justify-end mt-4">
            <div className='rounded-full bg-blue-600 white-svg'>
            <FormatQuoteIcon sx={{ fontSize: 40 }}  />
            </div>
          </div>
        </div>
      </div>
    </div>
{/* main slider ends */}


    </div>
  )
}

export default CustomeService
