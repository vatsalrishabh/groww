import Footer from './Footer'
import SubNav from './SubNav'
import aboutus from '../assets/AboutUs/aboutus.webp'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const AboutUs = () => {
  return (
    <div className='Aboutus'>
        <SubNav
        main="Home"
        submain="PR grow Details"
        heading="PR grow Details"
        bgimg={aboutus}
      />
{/* main content starts */}
<div className="w-full">
{/* left starts  */}
    <div className="w-1/2">

    </div>
{/* right starts */}
    <div className="w-1/2">

    </div>
</div>

{/* main content ends */}

        {/* right starts */}
        <div className="lg:w-2/3 ">
          <div className="image-container w-full flex justify-center align-middle p-10">
            <div className="the-image">
              <img src="" alt="" />
            </div>
          </div>
          <div className="business-heading p-10">
            <h1 className="text-4xl font-bold ">PR grow Overview:</h1>
            <p className="lg:p-10 p-2 py-10">
            PR grow is a leading financial services provider in Bihar, dedicated to empowering individuals and businesses with access to a wide range of financial solutions. With a focus on innovation and customer-centricity, PR grow offers personalized services to meet the diverse needs of its clients.
            </p>
            <p className="lg:p-10 p-2 py-10">
            PR grow Solutions:
PR grow Solutions serves as a comprehensive platform for accessing various financial products, including Personal Loans, Business Loans, Home Loans, Auto Loans, and more. Since its inception, PR grow has helped thousands of customers fulfill their financial goals and aspirations.


            </p>
          </div>

          {/* right side  */}
          <div className="business-heading p-10">
            <h1 className="text-4xl font-bold ">Loan Process:</h1>
            <ul className="p-10">
              <li className="flex py-1">
                <div className="bg-blue-600 rounded-full">
                  {/* <ChevronRightIcon sx={{ color: "white" }} /> */}
                </div>
                <div className="p-2 "> 90% Consultancy: PR grow's team of experienced consultants offers personalized guidance and support throughout the loan application process.</div>
              </li>
              <li className="flex py-1">
                <div className="bg-blue-600 rounded-full">
                  {/* <ChevronRightIcon sx={{ color: "white" }} /> */}
                </div>
                <div className="p-2"> 76% Financial Services: With a robust portfolio of financial services, PR grow caters to the diverse needs of its customers, ensuring access to the right solutions.</div>
              </li>

              <li className="flex py-1">
                <div className="bg-blue-600 rounded-full">
                  {/* <ChevronRightIcon sx={{ color: "white" }} /> */}
                </div>
                <div className="p-2"> 85% Customer Satisfaction: PR grow is committed to delivering exceptional customer satisfaction, providing a seamless and hassle-free experience for all clients.</div>
              </li>
              {/* <li className="flex py-1">
                <div className="bg-blue-600 rounded-full">
                  <ChevronRightIcon sx={{ color: "white" }} />
                </div>
                <div className="px-2">Loan for Travel</div>
              </li> */}
            </ul>
          </div>
          {/* business class heading */}

          {/* right side  */}
          <div className="business-heading lg:p-10 ">
            <h1 className="text-4xl font-bold px-10">
            Personal Loan - Eligibility{" "}
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
          {/* right ends */}

      <Footer/>
    </div>
  )
}

export default AboutUs
