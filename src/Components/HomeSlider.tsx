import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./HomeSlider.css"; // Import CSS file for animations
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";

const images = [home1, home2, home3]; // Array of image files

const HomeSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds, adjust as needed

    return () => clearInterval(interval);
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="HomeSlider relative w-full h-[50vh] py-5">
      {/* the image background div */}
      <div className="animation-container-wrapper">
  <div
    className="animation-container absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center"
    style={{
      backgroundImage: `url(${images[currentImageIndex]})`, // Set image as background
    }}
  ></div>
</div>


      {/* The image part ends */}

      {/* the content part starts */}
      <div className="overlay-content absolute top-0 left-0 w-full h-full flex items-center justify-between px-10">
        <div className="lg:w-2/3 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Get Instant Personal Loan at Incredibly Low Rates
          </h1>
          <p className="text-lg mb-6">
            Apply for a loan now and get instant approval. Quick payment process
            with no prepayment fees.
          </p>
      <Link to="/applynow">
          <button
            className="bg-blue-500 text-white py-3 px-8 rounded-lg text-xl hover:bg-blue-600 transition duration-300"
            onClick={() => console.log("Apply for Loan clicked")}
          >
            Apply For Loan
          </button>
      </Link>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center">
          <div
            className="text-white text-4xl cursor-pointer mb-4"
            onClick={handlePreviousImage}
          >
            &larr;
          </div>
          <div
            className="text-white text-4xl cursor-pointer"
            onClick={handleNextImage}
          >
            &rarr;
          </div>
        </div>
      </div>
      {/* the content part ends */}

      
    </div>
  );
};

export default HomeSlider;
