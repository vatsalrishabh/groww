import React from 'react';
import loanicon1 from '../assets/calculateemi/loanicon1.png'
import loanicon2 from '../assets/calculateemi/loanicon2.png'

const CalculateEMI: React.FC = () => {
  return (
    <div className='w-full lg:flex'>
      <div className="w-full lg:w-1/2 p-6 ">
        <div className="mb-6 p-10">
          <h1 className="text-xl  mb-2 ">Company Introductions </h1>
          <h2 className=" text-4xl font-rajdhani font-bold mb-4">You’ll never worry about money again. </h2>
          
        <p className='py-5'> Upgroww Solutions is your one-stop destination to search for the best Home Loans, Personal Loans in India. Since 2021, more than 50 lakh customers have fulfilled their dreams with us. Our network of 100+ banks and NBFCs promises the most affordable and suitable finance deal for you.</p> 
        <div className='icon-container lg:flex lg:p-5'>
        <div className="flex items-center lg:w-1/2 py-3">
            <div className="mr-4 ">
              <img src={loanicon1} alt="Award Winning" className="h-8" />
            </div>
            <div>
              <h2 className="font-bold text-xl">Award Winning</h2>
              <p className="text-gray-600">5+</p>
            </div>
          </div>
          <div className="flex items-center lg:w-1/2">
            <div className="mr-4">
              <img src={loanicon2} alt="Certified Company" className="h-8" />
            </div>
            <div>
              <h2 className="font-bold text-xl">Certified Company</h2>
              <p className="text-gray-600">provide loans</p>
            </div>
          </div>
        </div> 
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-6 bg-white">
        <div className="form mb-6">
          <h1 className="text-2xl font-bold mb-4">Calculate EMI</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700">Loan Amount (Rs.):</label>
              <input type="text" id="loan-amount" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="loan-tenure" className="block text-sm font-medium text-gray-700">Loan Tenure (Year.):</label>
              <input type="text" id="loan-tenure" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700">Interest Rate (%):</label>
              <input type="text" id="interest-rate" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Calculate EMI</button>
          </form>
        </div>
        <div className="form-output mb-6">
          <div className="text-gray-700 mb-2">Monthly Loan EMI:</div>
          <div className="text-gray-700 mb-2">Principle Amount:</div>
          <div className="text-gray-700 mb-2">Loan on Interest:</div>
          <div className="text-gray-700">Total Amount to be paid:</div>
        </div>
        <div className="pie-chart bg-gray-300 h-40 rounded-md">

        </div>
      </div>
    </div>
  );
};

export default CalculateEMI;
