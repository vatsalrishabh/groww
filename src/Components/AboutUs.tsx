import Footer from './Footer'
import SubNav from './SubNav'
import aboutus from '../assets/AboutUs/aboutus.webp'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const AboutUs = () => {
  return (
    <div className='Aboutus'>
        <SubNav
        main="Home"
        submain="About Us"
        heading="About Us"
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

        {/* left starts */}
    <div className='flex'>
    <div className="lg:w-2/3 ">
          <div className="image-container w-full flex justify-center align-middle p-10">
            <div className="the-image">
              <img src="" alt="" />
            </div>
          </div>
          <div className="business-heading p-10">
            <h1 className="text-4xl font-bold ">PR GROW Overview:</h1>
            <p className="lg:p-10 p-2 py-10 text-xl font-serif">
            PR GROW is a prominent financial services provider based in Bihar, recognized for its commitment to empowering individuals and businesses through a comprehensive array of financial solutions. Established with a strong focus on innovation and customer-centricity, PR GROW has positioned itself as a trusted partner in the financial landscape, catering to diverse needs with personalized services.

At PR GROW, the core mission revolves around facilitating access to a wide range of financial products tailored to meet individual and business requirements. This includes offerings such as Personal Loans, Business Loans, Home Loans, Auto Loans, and more. By providing these essential services, PR GROW plays a pivotal role in helping clients achieve their financial goals and realize their aspirations.

The foundation of PR GROW’s success lies in its unwavering commitment to customer satisfaction and service excellence. Through a dedicated team of financial experts and advisors, PR GROW ensures that each client receives personalized attention and guidance, ensuring that their financial needs are met effectively and efficiently.

One of the key strengths of PR GROW is its ability to innovate continuously in response to market dynamics and customer feedback. By staying abreast of industry trends and leveraging technology, PR GROW enhances its service offerings and operational efficiency, thereby delivering value-added solutions to its clients.
</p>
            <p className="lg:p-10 p-2 py-10 text-xl font-serif">


Since its inception, PR GROW has garnered a strong reputation for reliability, transparency, and integrity in its dealings. The company operates with a philosophy centered on ethical business practices and adherence to regulatory standards, instilling trust and confidence among its clientele.

In the realm of Personal Loans, PR GROW provides flexible borrowing options designed to cater to diverse personal financial needs. Whether it’s funding for education, medical emergencies, weddings, or any other purpose, PR GROW offers competitive interest rates and customizable repayment plans to suit individual circumstances.

For businesses looking to expand or launch new ventures, PR GROW offers tailored Business Loans that provide the necessary capital infusion. These loans are structured to support growth initiatives, improve cash flow, purchase equipment, or meet any other operational requirements essential for business success.

Home Loans from PR GROW enable individuals and families to realize their dream of homeownership with convenient financing solutions. Whether purchasing a new property, constructing a home, or renovating an existing one, PR GROW simplifies the home loan process with flexible terms and competitive rates.

Additionally, PR GROW’s Auto Loans cater to individuals seeking to purchase a vehicle, offering attractive financing options with quick approval processes and hassle-free documentation.

Beyond its product offerings, PR GROW is committed to fostering financial literacy and empowerment within the community. Through educational initiatives and workshops, PR GROW educates clients on financial planning, budgeting, and responsible borrowing, empowering them to make informed financial decisions.

Looking ahead, PR GROW continues to expand its footprint and enhance its service offerings, driven by a steadfast commitment to customer satisfaction and innovation. With a strong emphasis on forging long-term relationships and delivering value, PR GROW remains dedicated to supporting the financial well-being and prosperity of its clients across Bihar and beyond.

            </p>
          </div>

          {/* right side  */}
       
          {/* business class heading */}

          {/* right side  */}
          <div className="business-heading lg:p-10 " >
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
          {/* left ends */}


{/* Right starts */}
    <div className="lg:w-1/3">
          <div className="p-8">
              <div className="pb-5">
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_become_a_marketing_manager.jpg" alt="" />
              </div>
          </div>
    </div>
{/* Right ends */}

    </div>
        

      <Footer/>
    </div>
  )
}

export default AboutUs
