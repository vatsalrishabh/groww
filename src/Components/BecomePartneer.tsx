import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const BecomePartner: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    profession: '',
    otherProfession: 'Other',
  });

  const [showOtherProfession, setShowOtherProfession] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
    if (id === 'profession') {
      setShowOtherProfession(value === 'Others');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    emailjs.send(
      'service_7s3arwp', // Replace with your EmailJS service ID
      'template_3222uwp', // Replace with your EmailJS template ID
      formData,
      'isnjSagzDCz5gRdZU' // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md lg:flex">
        <div className="lg:w-1/2 pr-8">
          <h1 className="text-3xl font-bold mb-4">Become a Partner</h1>
          <h2 className="text-xl text-blue-800 mb-6">With PR GROW PARTNER BUSINESS PROGRAM</h2>
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
              <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
            </div>
            <div className="mb-5">
              <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Number</label>
              <input type="tel" id="number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={formData.number} onChange={handleChange} placeholder="+1234567890" required />
            </div>
            <div className="mb-5">
              <label htmlFor="profession" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Your Profession</label>
              <select id="profession" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={formData.profession} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="Direct Selling Agent">Direct Selling Agent</option>
                <option value="Insurance Agent">Insurance Agent</option>
                <option value="Chartered Accountant">Chartered Accountant</option>
                <option value="Company Secretary">Company Secretary</option>
                <option value="Mutual Fund Agent">Mutual Fund Agent</option>
                <option value="Advocates">Advocates</option>
                <option value="Others">Others</option>
              </select>
            </div>
            {showOtherProfession && (
              <div className="mb-5">
                <label htmlFor="otherProfession" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Please specify your profession</label>
                <input type="text" id="otherProfession" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={formData.otherProfession} onChange={handleChange} placeholder="Your Profession" required />
              </div>
            )}
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
              </div>
              <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Register new account</button>
          </form>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="img">
            <img src="https://upgroww.com/assets/images/resources/part.jpg" alt="Become a Partner" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomePartner;
