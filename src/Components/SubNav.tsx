import React from 'react';

interface SubnavProps {
  main: string;
  submain: string;
  heading: string;
  bgimg:string;
}

const SubNav: React.FC<SubnavProps> = (props) => {
  return (
    <div className='Subnav flex justify-center w-full bg-cover bg-no-repeat lg:h-[43vh] ' style={{ backgroundImage: `url(${props.bgimg})` }}>
      <div className="w-full lg:w-2/3 py-10 lg:py-20">
        <div className='flex'>
          <h4 className='text-lg p-2 lg:p-5'>{props.main}</h4> <h4 className='text-lg p-2 lg:p-5'>{props.submain}</h4>
        </div>
        <div>
          <h1 className='p-2 lg:text-6xl text-4xl font-semibold'>{props.heading}</h1>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
