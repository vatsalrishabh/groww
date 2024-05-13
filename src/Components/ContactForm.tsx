import React from 'react';
import CallIcon  from '@mui/icons-material/Call';
import EmailIcon  from '@mui/icons-material/Email';



const ContactForm: React.FC = () => {
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
            <h4 className='text-gray-600'>support@upgroww.in <br />info@upgroww.in</h4>
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
      <div className="w-full sm:w-1/2 md:w-2/3 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-4">
            <input type="text" placeholder='Name' className="w-full border border-gray-300 rounded-md p-2 focus:outline-none" />
          </div>
          <div className="mb-4">
            <input type="tel" placeholder='Number' className="w-full border border-gray-300 rounded-md p-2 focus:outline-none" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder='Email' className="w-full border border-gray-300 rounded-md p-2 focus:outline-none" />
          </div>
          <div className="mb-4">
            <input type="text" placeholder='Subject' className="w-full border border-gray-300 rounded-md p-2 focus:outline-none" />
          </div>
          <div className="mb-4">
            <textarea placeholder='Message' rows={4} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"></textarea>
          </div>
          <div className="text-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
