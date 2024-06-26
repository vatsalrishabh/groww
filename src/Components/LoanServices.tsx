import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import personal from '../assets/Ourservices/personal.jpg'
import home from '../assets/Ourservices/home.jpg'
import business from '../assets/Ourservices/business.jpg'
import doctor from '../assets/Ourservices/doctor.jpeg'
import mortgage from '../assets/Ourservices/mortgage.jpg'
import sme from '../assets/Ourservices/sme.png'
import WORKING from '../assets/Ourservices/WORKING.jpg'
import './LoginServices.css'


const LoanServices:React.FC = () => {
  return (
    <div className='OurSercice w-full'>
        <div className='w-full flex align-middle justify-center p-5'>PR GROW Offering</div>
        <div className='w-full flex align-middle lg:text-5xl text-3xl  font-bold p-5'>Loans Services</div>
{/* main slider */}
<div className="flex overflow-y-scroll lg:overflow-x-scroll lg:justify-center">
      {/* Slider Item 1 */}
      <div className="flex-shrink-0 w-full lg:w-1/3 max-w-sm mx-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src={personal} alt="" className="mb-4" />
          <div className="text-2xl font-semibold mb-2">Personal Loan</div>
          <div className="text-gray-600">Personal loans are an unsecured form of credit that is popular to meet immediate requirements. It is multi-purpose in nature and therefore can be used for various purposes including wedding, home renovation, travel purposes and more.</div>
          <div className="flex justify-end mt-4">
          <div className='rounded-full bg-blue-600 white-svg'>
            <ArrowForwardIcon sx={{ fontSize: 40}}  />
            </div>
          </div>
        </div>
      </div>

      {/* Slider Item 2 */}
      <div className="flex-shrink-0 w-full lg:w-1/3 max-w-sm mx-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src={home} alt="" className="mb-4" />
          <div className="text-2xl font-semibold mb-2">Home Loan</div>
          <div className="text-gray-600">The PR GROW  Home Loan comes with a host of benefits such as smaller EMIs where you can space out your payment over a longer tenure, attractive interest rates, an easy application process, doorstep service.</div>
          <div className="flex justify-end mt-4">
          <div className='rounded-full bg-blue-600 white-svg'>
            <ArrowForwardIcon sx={{ fontSize: 40 }}  />
            </div>
          </div>
        </div>
      </div>

      {/* Slider Item 3 */}
      <div className="flex-shrink-0 w-full lg:w-1/3 max-w-sm mx-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src={business} alt="" className="mb-4" />
          <div className="text-2xl font-semibold mb-2">Business Loan</div>
          <div className="text-gray-600">We understand the value of effective business finance and offer a tailored solution for your funding needs. PR GROW Solutions Business Loan is a financing instrument you can rely on whenever your enterprise needs fast Business Loans or capital on cost-effective terms.</div>
          <div className="flex justify-end mt-4">
            <div className='rounded-full bg-blue-600 white-svg'>
            <ArrowForwardIcon sx={{ fontSize: 40 }}  />
            </div>
          </div>
        </div>
      </div>
    {/* slider item 4 */}
    <div className="flex-shrink-0 w-full lg:w-1/3 max-w-sm mx-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src={doctor} alt="" className="mb-4" />
          <div className="text-2xl font-semibold mb-2">Doctor Loan</div>
          <div className="text-gray-600">We understand the value of effective business finance and offer a tailored solution for your funding needs. PR GROW Solutions Business Loan is a financing instrument you can rely on whenever your enterprise needs fast Business Loans or capital on cost-effective terms.</div>
          <div className="flex justify-end mt-4">
            <div className='rounded-full bg-blue-600 white-svg'>
            <ArrowForwardIcon sx={{ fontSize: 40 }}  />
            </div>
          </div>
        </div>
      </div>
    {/* slider item 5 */}
    <div className="flex-shrink-0 w-full lg:w-1/3 max-w-sm mx-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src={mortgage} alt="" className="mb-4" />
          <div className="text-2xl font-semibold mb-2">Mortgage Loan</div>
          <div className="text-gray-600">We understand the value of effective business finance and offer a tailored solution for your funding needs. PR GROW Solutions Business Loan is a financing instrument you can rely on whenever your enterprise needs fast Business Loans or capital on cost-effective terms.</div>
          <div className="flex justify-end mt-4">
            <div className='rounded-full bg-blue-600 white-svg'>
            <ArrowForwardIcon sx={{ fontSize: 40 }}  />
            </div>
          </div>
        </div>
      </div>
       {/* slider item 6 */}
    <div className="flex-shrink-0 w-full lg:w-1/3 max-w-sm mx-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src={sme} alt="" className="mb-4" />
          <div className="text-2xl font-semibold mb-2">SME Loan</div>
          <div className="text-gray-600">We understand the value of effective business finance and offer a tailored solution for your funding needs. PR GROW Solutions Business Loan is a financing instrument you can rely on whenever your enterprise needs fast Business Loans or capital on cost-effective terms.</div>
          <div className="flex justify-end mt-4">
            <div className='rounded-full bg-blue-600 white-svg'>
            <ArrowForwardIcon sx={{ fontSize: 40 }}  />
            </div>
          </div>
        </div>
      </div>
       {/* slider item 7 */}
    <div className="flex-shrink-0 w-full lg:w-1/3 max-w-sm mx-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src={WORKING} alt="" className="mb-4" />
          <div className="text-2xl font-semibold mb-2">Working Capital Loan</div>
          <div className="text-gray-600">We understand the value of effective business finance and offer a tailored solution for your funding needs. PR GROW Solutions Business Loan is a financing instrument you can rely on whenever your enterprise needs fast Business Loans or capital on cost-effective terms.</div>
          <div className="flex justify-end mt-4">
            <div className='rounded-full bg-blue-600 white-svg'>
            <ArrowForwardIcon sx={{ fontSize: 40 }}  />
            </div>
          </div>
        </div>
      </div>







    </div>
{/* main slider ends */}


    </div>
  )
}

export default LoanServices
