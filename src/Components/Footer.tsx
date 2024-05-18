import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import mainlogo from '../assets/mainlogo.jpeg'


const Footer: React.FC = () => {
  return (
    <>
      {/* Footer blue section */}
      <div className="flex flex-col lg:flex-row bg-blue-600">
        <div className="flex justify-center items-center w-full lg:w-2/3 p-5">
          <h1 className="text-white text-4xl font-bold font-rajdhani">
            Get Business Loans Quickly
          </h1>
        </div>
        <div className="flex justify-center items-center w-full lg:w-1/3">
          <button
            type="button"
            className="px-6 py-3.5 text-2xl font-medium text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
          >
            Apply For Loan
          </button>
        </div>
      </div>
      {/* Footer blue section ends */}

      {/* Footer middle section */}
      <div className="flex flex-col lg:flex-row bg-slate-600 text-white">
        <div className="w-full lg:w-1/2 lg:flex">
          <div className="w-full lg:w-1/2 p-8">
            <div>
                <img src={mainlogo} alt="" />
            </div>
            <p>
              Prgrow Insight is your one-stop destination to search for the
              best Home Loans, Personal Loans, and Credit Cards in India. Since
              last years, more than 10K customers have fulfilled their dreams
              with us.
            </p>
          </div>
{/* explore sections belwo */}
          <div className="w-full lg:w-1/2 p-8">
            <div>
              <h1 className="mb-4 text-3xl font-bold">Explore</h1>
              <ul>
                <li className="flex items-center p-3">
                  <ArrowForwardIcon />
                  <span>About</span>
                </li>
                <li className="flex items-center p-3">
                  <ArrowForwardIcon />
                  <span>Services</span>
                </li>
                <li className="flex items-center p-3">
                  <ArrowForwardIcon />
                  <span>Latest News</span>
                </li>
                <li className="flex items-center p-3">
                  <ArrowForwardIcon />
                  <span>Testimonials</span>
                </li>
                <li className="flex items-center p-3">
                  <ArrowForwardIcon />
                  <span>Contact</span>
                </li>
                <li className="flex items-center p-3">
                  <ArrowForwardIcon />
                  <span>Loan Calculator</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
{/* contact section below */}
        <div className="w-full lg:w-1/2 lg:flex">
          <div className="w-full lg:w-1/2 p-8">
            <div>
              <h1 className="mb-4 text-3xl font-bold">Latest News</h1>
              <div className="flex items-center mb-4">
                <img src="https://upgroww.com/assets/images/resources/f1.jpg" alt="" className="w-8 h-8 mr-2" />
                <span>Easy loan solutions for All Loan</span>
              </div>
              <div className="flex items-center">
                <img src="https://upgroww.com/assets/images/resources/f2.jpg" alt="" className="w-8 h-8 mr-2" />
                <span>Prgrow excellence in providing the best loan</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 bg-blue-950 lg:m-10">
            <div className="mb-4 text-3xl font-bold">Contact</div>
            <div className="mb-4 flex border-b border-gray-400 py-2">
                <div className="m-1"><EmailIcon/></div>
                <div className="m-1"> Prgrowinsightprivatelimited@gmail.com
                    <br/>
                    
                </div>
            </div>
            <div className="mb-4 flex border-b border-gray-400 py-2">
                <div className="m-1"><AccessTimeFilledIcon/></div>
                <div className="m-1">Mon - Sat 9:00 AM - 6:00 PM
                </div>
            </div>
            <div className="mb-4 flex py-2">
                <div className="m-1"><LocationOnIcon/></div>
                <div className="m-1">
    <p><strong>HEAD Office:</strong> NH 31 PILLER NO 52, NEAR GYAN BHARTI (+2) HIGH SCHOOL, KAUSHAL COLONY, HARRAKH, BEGUSARAI, PIN- 851101</p> <br/>
    <p><strong>Corporate Office:</strong> AZAD MARKET, 1ST FLOOR, PIRMUHANI RAJENDRA PATH, KADAMKUAN, OPPOSITE- UMA CINEMA HALL, PATNA -800003</p>
</div>

            </div>
          </div>
        </div>
      </div>
      {/* Footer middle section ends */}


      {/* copyright sections starts */}
      <div className="Copyright lg:flex w-full justify-around bg-blue-950">
        <div className="lg:w-1/3 flex justify-center align-middle "><span className="text-white mx-1">© Copyright 2022 by</span> <span className="text-blue-500 ">Prgrow Insight Pvt. Ltd.</span></div>
        <div className="lg:w-1/3 flex justify-center align-middle "> <span className="text-gray-400">Design by</span> <span className="text-blue-500 mx-1">RCS info tech</span> </div>
        <div className="lg:w-1/3 flex justify-center align-middle p-2">
          <Link to=""></Link>  <div className="p-2 mx-2 rounded-full bg-slate-600"><FacebookIcon/></div>
            <div className="p-2 mx-2 rounded-full bg-slate-600"><XIcon/></div>
            <div className="p-2 mx-2 rounded-full bg-slate-600"><PinterestIcon/></div>
            <div className="p-2 mx-2 rounded-full bg-slate-600"><InstagramIcon/></div>
        </div>
        </div>
      {/* copyright section ends */}
    </>
  );
};

export default Footer;
