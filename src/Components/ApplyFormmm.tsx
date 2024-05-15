import React, { useState } from 'react';

const ApplyFormmm: React.FC = () => {
  const [houseNumber, setHouseNumber] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="Form">
      <div className="container mx-auto py-10">
        <h1 className="text-xl text-gray-900 dark:text-white mb-6">Calculate your loan amount</h1>
        <h1 className='text-4xl font-bold mb-6'>Address Details</h1>
        <form className="p-5" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="house-number" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">House No/Name*</label>
              <input
                type="text"
                id="house-number"
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="House Number/Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="street" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Street*</label>
              <input
                type="text"
                id="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Street"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="city" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">City*</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="City"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="state" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">State*</label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="State"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="country" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Country*</label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Country"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="pin-code" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Pin Code*</label>
              <input
                type="text"
                id="pin-code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pin Code"
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

export default ApplyFormmm;
