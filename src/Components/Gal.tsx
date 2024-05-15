import React from 'react';

const Gal: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      <div>
        <img className="h-auto max-w-full w-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full w-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full w-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full w-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
      </div>
    </div>
  );
};

export default Gal;
