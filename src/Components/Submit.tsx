import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Submit: React.FC = () => {
  const [name, setName] = useState('');
  const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      loan_type: loanType,
      loan_amount: loanAmount,
      user_email: email,
      user_phone: phoneNumber, // Added phone number field
      to_name: "Prgrow Team",
      from_name: "Prgrow || Loan made easy",
      to_email: "Prgrowinsightprivatelimited@gmail.com",
      reply: email,
    };

    emailjs.send('service_ci63mzk', 'template_lttevpo', templateParams, 'isnjSagzDCz5gRdZU')
      .then(() => {
        console.log('SUCCESS!');
        setAlertMessage('Form submitted successfully!');
        setAlertType('success');
        setShowAlert(true);
        // Reset form fields after successful submission
        setName('');
        setLoanType('');
        setLoanAmount('');
        setEmail('');
        setPhoneNumber('');
      })
      .catch((error: any) => {
        console.log('FAILED...', error.text);
        setAlertMessage('Failed to submit the form. Please try again.');
        setAlertType('error');
        setShowAlert(true);
      });
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="Form">
      <div className="container mx-auto py-10">
        <h1 className="text-xl text-gray-900 dark:text-white mb-6">Calculate your loan amount</h1>
        <h1 className='text-4xl font-bold mb-6'>Other Details</h1>

        {showAlert && (
          <div className={`flex items-center p-4 mb-4 text-${alertType}-800 rounded-lg bg-${alertType}-50 dark:bg-gray-800 dark:text-${alertType}-400`} role="alert">
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium">{alertMessage}</div>
            <button type="button" onClick={closeAlert} className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" aria-label="Close">
              <span className="sr-only">Close</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </button>
          </div>
        )}

<form className="p-5" ref={form} onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Name*</label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-6">
  <label htmlFor="loan-type" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Loan Type*</label>
  <select
    id="loan-type"
    name="loan_type"
    value={loanType}
    onChange={(e) => setLoanType(e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option value="" disabled>Select Loan Type</option>
    <option value="Personal Loan">Personal Loan</option>
    <option value="Doctors Loan">Doctors Loan</option>
    <option value="Home Loan">Home Loan</option>
    <option value="Business Loan">Business Loan</option>
    <option value="Mortgage Loan">Mortgage Loan</option>
    <option value="SME Loan">SME Loan</option>
    <option value="Working Capital Loan">Working Capital Loan</option>
    {/* Add more options as needed */}
  </select>
</div>


            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="loan-amount" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Loan Amount*</label>
              <input
                type="text"
                id="loan-amount"
                name="loan_amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Loan Amount"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email*</label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label htmlFor="phone" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Phone Number*</label>
              <input
                type="text"
                id="phone"
                name="user_phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Phone Number"
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
