import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_ci63mzk', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });
  };
  return (
    <div className='Contact-form flex flex-wrap justify-between'>

      {/* Left side */}
      <div className="w-full sm:w-1/2 md:w-1/3 mb-8 lg:px-20 px-5">
        <div className="text-lg text-gray-400 my-4">Get in touch with us</div>
        <div className="mb-4 text-4xl font-bold text-blue-950">Your Response is Very Useful For Us</div>
        
        {/* Contact information */}
        <div className="my-4 flex items-center">
          <div className="mr-4">
          <CallIcon color="primary" sx={{ fontSize: 40 }} />
          </div>
          <div>
            <h2 className="font-bold text-blue-950 text-xl">Call 24/7</h2>
            <h4 className='text-gray-600'>+91 9693270258</h4>
          </div>
        </div>

        <div className="my-4 flex items-center">
          <div className="mr-4">
            <EmailIcon color="primary" sx={{ fontSize: 40 }} />
          </div>
          <div>
            <h2 className="font-bold text-blue-950 text-xl">Write Email</h2>
            <h4 className='text-gray-600'>Prgrowinsightprivatelimited@gmail.com <br />Prgrowinsightprivatelimited@gmail.com</h4>
          </div>
        </div>

        <div className="flex items-center">
          <div className="my-4">
            {/* <RoomIcon color="primary" sx={{ fontSize: 40 }}/> */}
          </div>
          <div>
            <h2 className="font-bold text-blue-950 text-xl">Visit Office</h2>
            <h4 className='text-gray-600'>Office No - 5th Floor, Ravi Complex above Bata, Kurji More, Patliputra Industrial estate, Patna - 800010</h4>
          </div>
        </div>
      </div>

        {/* Right side */}
        <div className="w-full sm:w-1/2 md:w-2/3 px-4 animate-fadeIn">
        <div className="bg-white rounded-lg shadow-lg p-8 transition transform hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-gray-400">
                <span className="mr-2 text-gray-500">
                  <i className="fas fa-user"></i>
                </span>
                <input type="text" name="name" placeholder='Name' className="w-full text-gray-700 placeholder-gray-500 focus:outline-none" />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-gray-400">
                <span className="mr-2 text-gray-500">
                  <i className="fas fa-phone"></i>
                </span>
                <input type="tel" name="phone" placeholder='Number' className="w-full text-gray-700 placeholder-gray-500 focus:outline-none" />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-gray-400">
                <span className="mr-2 text-gray-500">
                  <i className="fas fa-envelope"></i>
                </span>
                <input type="email" name="email" placeholder='Email' className="w-full text-gray-700 placeholder-gray-500 focus:outline-none" />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-gray-400">
                <span className="mr-2 text-gray-500">
                  <i className="fas fa-tag"></i>
                </span>
                <input type="text" name="subject" placeholder='Subject' className="w-full text-gray-700 placeholder-gray-500 focus:outline-none" />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-gray-400">
                <span className="mr-2 text-gray-500">
                  <i className="fas fa-comment"></i>
                </span>
                <textarea name="message" placeholder='Message' rows={4} className="w-full text-gray-700 placeholder-gray-500 focus:outline-none"></textarea>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-6 py-2 rounded-md hover:from-gray-600 hover:to-gray-800 transform hover:scale-105 transition-transform">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
{/* right side ends */}



    </div>
  );
};

export default ContactForm;

