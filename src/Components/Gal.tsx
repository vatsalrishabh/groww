import React from 'react';

interface GalProps{
  image1:string,
  image2:string,
  image3:string,
  image4:string,

}

const Gal: React.FC<GalProps> = (props) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg h-64" src={props.image1} alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg h-64" src={props.image2} alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg h-64" src={props.image3} alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg h-64" src={props.image4} alt="" />
        </div>
      </div>
    </div>
  );
  
  
};

export default Gal;
