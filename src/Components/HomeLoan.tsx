import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import business from "../assets/Business/business.webp";
import SubNav from "./SubNav";
import homeloan from "../assets/HomeLoan/homeloan.jpg";
import transpar from "../assets/Business/transpar.avif";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const HomeLoan: React.FC = () => {
  return (
    <>
      <SubNav
        main="Home"
        submain="Service Details"
        heading="Home Loan Details"
        bgimg={homeloan}
      />
      <div className="Businessloan lg:flex">
        <div className="lg:w-1/3 bg-gray-200">
          <div className="options p-5 flex justify-end w-full py-10">
            {/* the vertical nav box starts */}
            <div className="put-me-right lg:w-2/3 w-full">
              {/*1. personal loan starts */}
              <Link to="../services/personal">
              <div className="box bg-white m-2 h-14 w-full flex justify-between border-l-4 border-transparent hover:border-blue-500 hover:text-blue-500">
                <div className="flex items-center p-2">Personal Loan</div>
                <div className="icon flex items-center p-2 ">
                  <ChevronRightIcon />
                </div>
              </div>
              </Link>
              {/*1. personal loan ends */}

              {/*2. doctor loan starts */}
              <Link to="../services/doctor">
              <div className="box bg-white m-2 h-14 w-full flex justify-between border-l-4 border-transparent hover:border-blue-500 hover:text-blue-500">
                <div className="flex items-center p-2">Doctors Loan</div>
                <div className="icon flex items-center p-2 ">
                  <ChevronRightIcon />
                </div>
              </div>
              </Link>
              {/*2. doctor loan ends */}

              {/*3. Home loan starts */}
              <Link to="../services/home">
              <div className="box bg-white m-2 h-14 w-full flex justify-between border-l-4 border-transparent hover:border-blue-500 hover:text-blue-500">
                <div className="flex items-center p-2 ">Home Loan</div>
                <div className="icon flex items-center p-2">
                  <ChevronRightIcon />
                </div>
              </div>
              </Link>
              {/*3. Home loan ends */}

              {/*4. Business loan starts */}
              <Link to="../services/business">
              <div className="box bg-white m-2 h-14 w-full flex justify-between border-l-4 border-transparent hover:border-blue-500 hover:text-blue-500">
                <div className="flex items-center p-2">Business Loan</div>
                <div className="icon flex items-center p-2">
                  <ChevronRightIcon />
                </div>
              </div>
              </Link>
              {/*4. Business loan ends */}

              {/*5. Mortgage loan starts */}
              <Link to="../services/mortgage">
              <div className="box bg-white m-2 h-14 w-full flex justify-between border-l-4 border-transparent hover:border-blue-500 hover:text-blue-500">
                <div className="flex items-center p-2"> Mortgage Loan</div>
                <div className="icon flex items-center p-2">
                  <ChevronRightIcon />
                </div>
              </div>
              </Link>
              {/*5. Mortgage loan ends */}

              {/*6. SME loan starts */}
              <Link to="../services/sme">
              <div className="box bg-white m-2 h-14 w-full flex justify-between border-l-4 border-transparent hover:border-blue-500 hover:text-blue-500">
                <div className="flex items-center p-2">SME Loan</div>
                <div className="icon flex items-center p-2">
                  <ChevronRightIcon />
                </div>
              </div>
              </Link>
              {/*6. SME loan ends */}

              {/*7. Working Capital loan starts */}
              <Link to="../services/working-capital">
              <div className="box bg-white m-2 h-14 w-full flex justify-between border-l-4 border-transparent hover:border-blue-500 hover:text-blue-500">
                <div className="flex items-center p-2">
                  Working Capital Loan
                </div>
                <div className="icon flex items-center p-2">
                  <ChevronRightIcon />
                </div>
              </div>
              </Link>
  {/*7. Working Capital loan ends*/}


            </div>
            {/* the vertical nav box ends */}
          </div>
          {/* the second box in left side  */}
          <div className="contact p-5 flex justify-end w-full py-10">
            <div className="put-me-right w-full">
              {/* the left contact box */}
              <div
                className="relative h-80 w-full"
                style={{
                  backgroundImage: `url(${transpar})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <div className="icon pb-5">
                      <SupportAgentIcon sx={{ fontSize: 80 }} />
                    </div>
                    <a
                      href="tel:+9191134 53768"
                      className="block mb-4 lg:text-4xl text-2xl font-bold"
                    >
                      (+91) 91134 53768
                    </a>
                    <a
                      href="mailto:Prgrowinsightprivatelimited@gmail.com"
                      className="block mb-4 lg:text-xl"
                    >
                      Prgrowinsightprivatelimited@gmail.com
                    </a>
                    <p>
                      We are here to help our customers any time. You can call
                      us 24/7 to answer your questions.
                    </p>
                  </div>
                </div>
              </div>
              {/* the left contact box ends */}
            </div>
          </div>
        </div>

        {/* right starts */}
        <div className="lg:w-2/3 ">
          <div className="image-container w-full flex justify-center align-middle p-10">
            <div className="the-image">
              <img src={business} alt="" />
            </div>
          </div>
          <div className="business-heading p-10">
            <h1 className="text-4xl font-bold ">Home Loan</h1>
            <p className="lg:p-10 p-2 py-10">
            Achieve the milestone of owning a home with ease, thanks to Prgrow. Our home loan is the ideal financing solution for all your housing needs. With straightforward requirements, quick processing, and online application options, the process is hassle-free. Simply determine the amount you need and apply online in just five simple steps.

Prgrow offers home loans to buy, build, or renovate your home. We provide flexible tenure options and competitive rates, ensuring that your loan remains affordable. Transparency is at the heart of our operations—there are no hidden charges, guaranteed. 

With our personalized home loan options, owning your dream home is more accessible than ever. Choose Prgrow for a seamless, transparent, and efficient home loan experience.
            </p>
          </div>

          {/* right side  */}
          <div className="business-heading p-10">
            <h1 className="text-4xl font-bold ">Types of Home loan</h1>
            <ul className="p-10">
              <li className="flex py-1">
                <div className="bg-blue-600 rounded-full">
                  <ChevronRightIcon sx={{ color: "white" }} />
                </div>
                <div className="px-2">  Fixed interest rate</div>
              </li>
              <li className="flex py-1">
                <div className="bg-blue-600 rounded-full">
                  <ChevronRightIcon sx={{ color: "white" }} />
                </div>
                <div className="px-2">Floating/ variable Home Loan</div>
              </li>

            
             
            </ul>
          </div>
          {/* business class heading */}

          {/* right side  */}
          <div className="business-heading lg:p-10 ">
            <h1 className="text-4xl font-bold px-10">
            Home Loan - Eligibility{" "}
            </h1>
            <ul className="py-10">
                <div className="flex">
                  <div className="bg-blue-600 rounded-full w-6 h-6 flex justify-center align-middle">
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </div>
                  <li className="flex py-1">
                    <div className="px-2">
                      {" "}
                      The individual should be a minimum of 18 - 25 years of age
                    </div>
                  </li>
                </div>
              <div className="flex">
                <div className="bg-blue-600 rounded-full w-6 h-6 flex justify-center align-middle">
                  <ChevronRightIcon sx={{ color: "white" }} />
                </div>
                <li className="flex py-1">
                  <div className="px-2">
                    {" "}
                    The individual should not be older than 65 years of age at
                    the time of loan application.
                  </div>
                </li>
              </div>
              <div className="flex">
                <div className="bg-blue-600 rounded-full w-6 h-6 flex justify-center align-middle">
                  <ChevronRightIcon sx={{ color: "white" }} />
                </div>
                <li className="flex py-1">
                  <div className="px-2">
                    {" "}
                    The minimum turnover of the business should be as per the
                    requirements of the bank.
                  </div>
                </li>
              </div>
              <div className="flex">
                <div className="bg-blue-600 rounded-full w-6 h-6 flex justify-center align-middle">
                  <ChevronRightIcon sx={{ color: "white" }} />
                </div>
                <li className="flex py-1">
                  <div className="px-2">
                    {" "}
                    The individual should have at least 2 years of experience in
                    the industry that they are running the business in.
                  </div>
                </li>
              </div>
              <div className="flex">
                <div className="bg-blue-600 rounded-full w-6 h-6 flex justify-center align-middle">
                  <ChevronRightIcon sx={{ color: "white" }} />
                </div>
                <li className="flex py-1">
                  <div className="px-2">
                    The applicant should be a resident of India.
                  </div>
                </li>
              </div>
            </ul>
          </div>
          {/* business class heading */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomeLoan;
