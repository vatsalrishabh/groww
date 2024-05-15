import React, { useState } from 'react';

const ApplyFormm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('single');
  const [birthDate, setBirthDate] = useState('');
  const [dependents, setDependents] = useState('0');
  const [additionalDetails,setAdditionalDetails]=useState("a");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="Form">
      <div className="container mx-auto py-10">
        <h1 className="text-xl  text-gray-900 dark:text-white mb-6">Calculate your loan amount</h1>
        <h1 className='text-4xl font-bold mb-6'>Loan Details</h1>
        <form className="p-5" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="full-name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Full Name [as per Taxpayer ID]*</label>
              <input
                type="text"
                id="full-name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Full Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email*</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="mobile-number" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Mobile Number*</label>
              <input
                type="text"
                id="mobile-number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mobile Number"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="marital-status" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Marital Status*</label>
              <select
                id="marital-status"
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="birth-date" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Birth Date* [as per Taxpayer ID]</label>
              <input
                type="date"
                id="birth-date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Birth Date"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="dependents" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Number Of Dependents*</label>
              <input
                type="number"
                id="dependents"
                value={dependents}
                onChange={(e) => setDependents(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Number Of Dependents"
              />
            </div>
          </div>
          <h1 className='text-4xl font-bold mb-6'>Ask for More Details</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-6">
              <label htmlFor="details" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Additional Details</label>
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

export default ApplyFormm;
