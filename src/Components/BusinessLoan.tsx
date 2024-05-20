import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Footer from "./Footer";
import business from "../assets/Business/business.webp";
import SubNav from "./SubNav";
import subnavbusi from "../assets/Business/subnavbusi.jpg";
import transpar from "../assets/Business/transpar.avif";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const BusinessLoan: React.FC = () => {
  return (
    <>
      <SubNav
        main="Home"
        submain="Service Details"
        heading="Personal Loan Details"
        bgimg={subnavbusi}
      />
      <div className="Businessloan lg:flex">
        <div className="lg:w-1/3 bg-gray-200">
          <div className="options p-5 flex justify-end w-full py-10">
            {/* the vertical nav box starts */}
            <div className="put-me-right lg:w-2/3 w-full">
              <div className="box bg-white m-2 h-14 w-full flex justify-between border-l-4 border-transparent hover:border-blue-500 hover:text-blue-500">
                <div className="flex items-center p-2">Personal Loan</div>
                <div className="icon flex items-center p-2 ">
                  <ChevronRightIcon />
                </div>
              </div>

              <div className="box bg-white m-2 h-14 w-full flex justify-between border-l-4 border-transparent hover:border-blue-500 hover:text-blue-500">
                <div className="flex items-center p-2 ">Home Loan</div>
                <div className="icon flex items-center p-2">
                  <ChevronRightIcon />
                </div>
              </div>

              <div className="box bg-white m-2 h-14 w-full flex justify-between border-l-4 border-transparent hover:border-blue-500 hover:text-blue-500">
                <div className="flex items-center p-2">Auto Loan</div>
                <div className="icon flex items-center p-2">
                  <ChevronRightIcon />
                </div>
              </div>

              <div className="box bg-white m-2 h-14 w-full flex justify-between border-l-4 border-transparent hover:border-blue-500 hover:text-blue-500">
                <div className="flex items-center p-2"> LAP Loan</div>
                <div className="icon flex items-center p-2">
                  <ChevronRightIcon />
                </div>
              </div>

              <div className="box bg-white m-2 h-14 w-full flex justify-between border-l-4 border-transparent hover:border-blue-500 hover:text-blue-500">
                <div className="flex items-center p-2">Doctors Loan</div>
                <div className="icon flex items-center p-2">
                  <ChevronRightIcon />
                </div>
              </div>

              <div className="box bg-white m-2 h-14 w-full flex justify-between border-l-4 border-transparent hover:border-blue-500 hover:text-blue-500">
                <div className="flex items-center p-2">SEP Loan</div>
                <div className="icon flex items-center p-2">
                  <ChevronRightIcon />
                </div>
              </div>
            </div>
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
            <h1 className="text-4xl font-bold ">Business </h1>
            <p className="lg:p-10 p-2 py-10">
              Empower your business and elevate it to new heights with a capital
              infusion from Prgrow Company’s fast, unsecured Business Loans. We
              offer both offline and online Business Loans in India specifically
              tailored for the MSME sector, designed to meet your unique needs.
              Prgrow Company provides business owners and entrepreneurs with
              easy access to Business Loans in India, offering quick and small
              Business Loans to ensure that funding is never a barrier to your
              success. Our process is optimized at every step to ensure a
              hassle-free and time-efficient experience. You can apply for a
              Business Loan online in just a few minutes, receive fast approval,
              and have the entire amount disbursed quickly. Trust Prgrow
              Company’s Business Loans in emergencies and rest assured that a
              lack of capital will never stand in your way.
            </p>
          </div>

          {/* right side  */}
          <div className="business-heading p-10">
            <h1 className="text-4xl font-bold ">Types of Business loan </h1>
            <ul className="p-10">
              <li className="flex py-1">
                <div className="bg-blue-600 rounded-full">
                  <ChevronRightIcon sx={{ color: "white" }} />
                </div>
                <div className="px-2"> Term Loan:</div>
              </li>
              <li className="flex py-1">
                <div className="bg-blue-600 rounded-full">
                  <ChevronRightIcon sx={{ color: "white" }} />
                </div>
                <div className="px-2"> Working Capital:</div>
              </li>

              <li className="flex py-1">
                <div className="bg-blue-600 rounded-full">
                  <ChevronRightIcon sx={{ color: "white" }} />
                </div>
                <div className="px-2"> Line of Credit:</div>
              </li>
              <li className="flex py-1">
                <div className="bg-blue-600 rounded-full">
                  <ChevronRightIcon sx={{ color: "white" }} />
                </div>
                <div className="px-2"> Equipment Finance:</div>
              </li>
            </ul>
          </div>
          {/* business class heading */}

          {/* right side  */}
          <div className="business-heading lg:p-10 ">
            <h1 className="text-4xl font-bold px-10">
              Business Loan - Eligibility{" "}
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

export default BusinessLoan;
