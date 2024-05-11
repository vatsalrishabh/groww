import React from 'react';

const FullEmbeded: React.FC = () => {
  return (
    <div className='w-full'>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775.323105450673!2d77.65812203988996!3d12.993485772822355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11479f875faf%3A0x5a73e340904ebbf5!2sPai%20Layout%2C%20Mahadevapura%2C%20Bengaluru%2C%20Karnataka%20560016!5e0!3m2!1sen!2sin!4v1715427269906!5m2!1sen!2sin"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default FullEmbeded;
