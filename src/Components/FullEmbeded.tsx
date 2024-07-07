import React from 'react';

const FullEmbeded: React.FC = () => {
  return (
    <div className='w-full'>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.859490872502!2d85.14222602514123!3d25.60958487744778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585e9115a597%3A0xd99577245c540c87!2sPirmuhani%2C%20Salimpur%20Ahra%2C%20Golambar%2C%20Patna%2C%20Bihar%20800001!5e0!3m2!1sen!2sin!4v1720328266078!5m2!1sen!2sin"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default FullEmbeded;
