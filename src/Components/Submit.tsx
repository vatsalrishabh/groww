import React, { useState } from 'react';

const Submit: React.FC = () => {
  const [employmentIndustry, setEmploymentIndustry] = useState('');
  const [employerName, setEmployerName] = useState('');
  const [employerStatus, setEmployerStatus] = useState('fullTimeEmployed');
  const [lengthOfEmployment, setLengthOfEmployment] = useState('');
  const [workPhoneNumber, setWorkPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="Form">
      <div className="container mx-auto py-10">
        <h1 className="text-xl text-gray-900 dark:text-white mb-6">Calculate your loan amount</h1>
        <h1 className='text-4xl font-bold mb-6'>Other Details</h1>
        <form className="p-5" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="employment-industry" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Employment Industry*</label>
              <input
                type="text"
                id="employment-industry"
                value={employmentIndustry}
                onChange={(e) => setEmploymentIndustry(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Employment Industry"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="employer-name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Employer Name*</label>
              <input
                type="text"
                id="employer-name"
                value={employerName}
                onChange={(e) => setEmployerName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Employer Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="employer-status" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Employer Status*</label>
              <select
                id="employer-status"
                value={employerStatus}
                onChange={(e) => setEmployerStatus(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="fullTimeEmployed">Full Time Employed</option>
                <option value="partTimeEmployed">Part Time Employed</option>
                <option value="selfEmployed">Self Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="student">Student</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="length-of-employment" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Length of Employment*</label>
              <input
                type="text"
                id="length-of-employment"
                value={lengthOfEmployment}
                onChange={(e) => setLengthOfEmployment(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Length of Employment"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="work-phone-number" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Work Phone Number*</label>
              <input
                type="text"
                id="work-phone-number"
                value={workPhoneNumber}
                onChange={(e) => setWorkPhoneNumber(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Work Phone Number"
              />
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

export default Submit;
