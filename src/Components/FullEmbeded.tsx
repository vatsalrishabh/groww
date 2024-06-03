import React from 'react';

const FullEmbeded: React.FC = () => {
  return (
    <div className='w-full'>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d225.2185555845097!2d86.1219698782534!3d25.42164626226171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDI1JzE4LjAiTiA4NsKwMDcnMTkuNSJF!5e0!3m2!1sen!2sin!4v1717344074284!5m2!1sen!2sin"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default FullEmbeded;
