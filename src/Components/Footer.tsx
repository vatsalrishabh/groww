import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
// import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
// import XIcon from "@mui/icons-material/X";
// import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from '@mui/icons-material/Call';
import prgrow from '../assets/prgrow.jpeg'

const Footer: React.FC = () => {
  const [calculatorView,handleCalculatorView]=useState("hidden");
  const navigate = useNavigate();

 const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  console.log(event);
      if(calculatorView==="hidden"){
        handleCalculatorView("");
      }else{
        handleCalculatorView("hidden");
      }
     
    // Optionally, you can perform other actions here
  };

  return (
    <>
      {/* Footer blue section */}
      <div className="flex flex-col lg:flex-row bg-blue-600">
        <div className="flex justify-center items-center w-full lg:w-2/3 p-5">
          <h1 className="text-white text-3xl font-bold font-rajdhani">
            Get Business Loans Quickly
          </h1>
        </div>
        <div className="flex justify-center items-center w-full lg:w-1/3">
          <button
            type="button"
            className="px-6 py-3.5 text-2xl font-medium text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
            onClick={() => navigate(`../applynow`)}
          >
            Apply For Loan
          </button>
        </div>
      </div>
      {/* Footer blue section ends */}

      {/* Footer middle section */}
      <div className="flex flex-col lg:flex-row bg-slate-600 text-white">
        <div className="w-full lg:w-2/3 lg:flex">
          <div className="w-full lg:w-1/2 p-3">
            <div>
              <img src={prgrow} alt="" className="h-20 w-20" />
            </div>
            <p>
              PR GROW is your one-stop destination to search for the best Home
              Loans, Personal Loans, and Credit Cards in India. Since last
              years, more than 10K customers have fulfilled their dreams with
              us.
            </p>
            <div className="p-1 lg:p-3 lg:flex">
              <div>
          <Link to="/services/personal">
              <li className="flex items-center p-3">
                <ArrowForwardIcon />
                <span>Personal</span>
              </li>
          </Link>
          <Link to="/services/doctor">
              <li className="flex items-center p-3">
                <ArrowForwardIcon />
                <span>Doctor</span>
              </li>
          </Link>

          <Link to="/services/home">
              <li className="flex items-center p-3">
                <ArrowForwardIcon />
                <span>Home</span>
              </li>
          </Link>

          <Link to="/services/business">
              <li className="flex items-center p-3">
                <ArrowForwardIcon />
                <span>Business</span>
              </li>
          </Link>
              </div>
              <div>

                <Link to="/services/mortgage">
              <li className="flex items-center p-3">
                <ArrowForwardIcon />
                <span>Mortgage Loan</span>
              </li>
              </Link>

              <Link to="/services/sme">
              <li className="flex items-center p-3">
                <ArrowForwardIcon />
                <span>SME Loan</span>
              </li>
              </Link>

              <Link to="/services/working-capital">
              <li className="flex items-center p-3">
                <ArrowForwardIcon />
                <span>Working Capital</span>
              </li>
              </Link>
              </div>
              
            </div>
          </div>
          {/* explore sections belwo */}
          <div className="w-full lg:w-1/3 p-3">
            <div>
              <h1 className="mb-2 text-3xl font-bold">Explore</h1>
              <ul>

                <Link to='/about'>
                <li className="flex items-center p-3">
                  <ArrowForwardIcon />
                  <span>About</span>
                </li>
                </Link>

                <Link to='/services/personal'> 
                <li className="flex items-center p-3">
                  <ArrowForwardIcon />
                  <span>Services</span>
                </li>
                </Link>


                {/* <li className="flex items-center p-3">
                  <ArrowForwardIcon />
                  <span>Latest News</span>
                </li> */}


                {/* <li className="flex items-center p-3">
                  <ArrowForwardIcon />
                  <span>Testimonials</span>
                </li> */}
                <Link to='/services/personal'> 
                <li className="flex items-center p-3">
                  <ArrowForwardIcon />
                  <span>Contact</span>
                </li>
                </Link>


                {/* <button className="flex items-center p-3" onClick={handleClick}>
                  <ArrowForwardIcon />
                  <span>Loan Calculator</span>
                </button> */}
{/* Calculator Modal starts */}
<div id="default-modal" tabIndex={-1} aria-hidden="true" className={`${calculatorView} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
    <div className="relative p-4 w-full max-w-2xl max-h-full">
   
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
       
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                   Calculate Your Loan EMI
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={handleClick}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
{/* Modal Calculator Body Starts */}
            <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>

{/* Modal Calculator Body ENds */}

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>I accept</button>
                <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleClick}>Decline</button>
            </div>

        </div>
    </div>
</div>
{/* Calculator modal ends */}
                
              </ul>
            </div>
          </div>
        </div>
        {/* contact section below */}
        <div className="w-full lg:w-1/2 lg:flex">
          <div className="w-full lg:w-1/2 p-3">
            <div>
              <h1 className="mb-4 text-3xl font-bold">Latest News</h1>
              <div className="flex items-center mb-4">
                <img
                  src="https://upgroww.com/assets/images/resources/f1.jpg"
                  alt=""
                  className="w-8 h-8 mr-2"
                />
                <span>Easy loan solutions for All Loan</span>
              </div>
              <div className="flex items-center">
                <img
                  src="https://upgroww.com/assets/images/resources/f2.jpg"
                  alt=""
                  className="w-8 h-8 mr-2"
                />
                <span>PR GROW excellence in providing the best loan</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:px-3  p-3 bg-blue-950 lg:m-10">
            <div className="mb-4 text-3xl font-bold">Contact</div>
            <div className="mb-4 border-b border-gray-400 py-2">
          <div className="emailicon-email flex">
              <div className="m-1">
                <EmailIcon />
              </div>
              <div className="m-1">
                {" "}
                Prgrowinsightprivatelimited@gmail.com
               
              </div>
          </div>
          <div className="emailicon-email flex">
              <div className="m-1">
                <EmailIcon />
              </div>
              <div className="m-1">
                {" "}
                raja.kumar34537@gmail.com
              </div>
            </div>
            <div className="emailicon-email flex">
              <div className="m-1">
                <CallIcon />
              </div>
              <div className="m-1">
                {" "}
                7903368071
              </div>
            </div>
            <div className="emailicon-email flex">
              <div className="m-1">
                <CallIcon />
              </div>
              <div className="m-1">
                {" "}
                77659 54226
              </div>
            </div>


            </div>
            {/* <div className="mb-4 flex border-b border-gray-400 py-2">
              <div className="m-1">
                <AccessTimeFilledIcon />
              </div>
              <div className="m-1">Mon - Sat 9:00 AM - 6:00 PM</div>
            </div> */}

{/* first office  */}
        <div className=" flex ">
              <div className="m-1">
                <LocationOnIcon />
              </div>
              <div className="m-1">
                <p>
                <strong>HEAD Office:</strong> NH 31 PILLER NO 52, NEAR GYAN
                  BHARTI (+2) HIGH SCHOOL, KAUSHAL COLONY, HARRAKH, BEGUSARAI,
                  PIN- 851101
                </p>{" "}
                <br />
                {/* <p><strong>Corporate Office:</strong> AZAD MARKET, 1ST FLOOR, PIRMUHANI RAJENDRA PATH, KADAMKUAN, OPPOSITE- UMA CINEMA HALL, PATNA -800003</p> */}
              </div>
       </div>
  {/* second office  */}

{/* first office  */}
      <div className="mb-2 flex ">
              <div className="m-1">
                <LocationOnIcon />
              </div>
              <div className="m-1">
                <p>
                  <strong>PATNA Office:</strong>  AZAD MARKET 1 ST FLOOR ROOM NO -2, PIRMUHANI KADAMKUAN, OPPOSITE- UMA CINEMA HALL PATNA- 800003
                </p>{" "}
                <br />
                {/* <p><strong>Corporate Office:</strong> AZAD MARKET, 1ST FLOOR, PIRMUHANI RAJENDRA PATH, KADAMKUAN, OPPOSITE- UMA CINEMA HALL, PATNA -800003</p> */}
              </div>
      </div>
  {/* second office  */}
      


          </div>
        </div>
      </div>
      {/* Footer middle section ends */}

      {/* copyright sections starts */}
      <div className="Copyright lg:flex w-full justify-around bg-blue-950">
        <div className="lg:w-1/3 flex justify-center align-middle ">
          <span className="text-white mx-1">© Copyright 2022 by</span>{" "}
          <span className="text-blue-500 ">PR GROW</span>
        </div>
        <div className="lg:w-1/3 flex justify-center align-middle ">
          {" "}
          <span className="text-gray-400">Design by</span>{" "}
          <Link to="teciexsolutions.com"></Link><span className="text-blue-500 mx-1">Teciex solution</span>{" "}
        </div>
        <div className="lg:w-1/3 flex justify-center align-middle p-2">
          <Link to="https://www.facebook.com/people/PR-Grow-Insight/61561226145535/" target="_blank">{" "}
          <div className="p-2 mx-2 rounded-full bg-slate-600">
            <FacebookIcon />
          </div>
          </Link>
          {/* <div className="p-2 mx-2 rounded-full bg-slate-600">
            <XIcon />
          </div>
          <div className="p-2 mx-2 rounded-full bg-slate-600">
            <PinterestIcon />
          </div> */}
            <Link to="https://www.facebook.com/people/PR-Grow-Insight/61561226145535/" target="_blank">
          <div className="p-2 mx-2 rounded-full bg-slate-600">
            <InstagramIcon />
          </div>
          </Link>
        </div>
      </div>
      {/* copyright section ends */}
    </>
  );
};

export default Footer;
