import React from 'react';

const FullEmbededH: React.FC = () => {
  return (
    <div className='w-full'>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.497175195465!2d86.1220523!3d25.4216367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f21b6e724eab69%3A0xb8385bd51f6d6199!2sPR%20GROW%20INSIGHT%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1720316591895!5m2!1sen!2sin"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default FullEmbededH;
