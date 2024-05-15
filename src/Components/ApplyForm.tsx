import React, { useState } from 'react';

const ApplyForm: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [purpose, setPurpose] = useState('business');
  const [loanYears, setLoanYears] = useState('6');
  const [additionalDetails, setAdditionalDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="Form">
      <div className="container mx-auto py-10">
        <h1 className="text-xl  text-gray-900 dark:text-white mb-6">Calculate your loan amount</h1>
        <h1 className='text-4xl font-bold'>Loan Details</h1>
        <form className="p-5" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="loan-amount" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Loan Amount*</label>
              <div className="relative">
                <input
                  type="text"
                  id="loan-amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Loan Amount"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="monthly-income" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Monthly Income*</label>
              <div className="relative">
                <input
                  type="text"
                  id="monthly-income"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Monthly Income"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="purpose" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Purpose of Loan</label>
              <select
                id="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="business">Business</option>
                <option value="personal">Personal</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="loan-years" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Loan Years</label>
              <select
                id="loan-years"
                value={loanYears}
                onChange={(e) => setLoanYears(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="6">6 Months</option>
                <option value="12">1 Year</option>
                <option value="24">2 Years</option>
                <option value="36">3 Years</option>
                <option value="48">4 Years</option>
                <option value="60">5 Years</option>
              </select>
            </div>
            <div className="w-full px-4 mb-6">
              <label htmlFor="details" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Ask for More Details</label>
              <textarea
                id="details"
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Additional Details"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
