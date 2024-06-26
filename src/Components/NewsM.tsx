import gift from "../assets/newspage/gift.jpg";
import newsleft from "../assets/newspage/newsleft.jpg";
import newsright from "../assets/newspage/newsright.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NewsM = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left div */}
        <div className="lg:col-span-2">
          <div className="p-5">
            <img src={gift} alt="Gift" className="w-full" />
          </div>
          <div className="text-gray-700 mb-6">
            PR GROW  is your one-stop destination to search for the
            best Home Loans, Personal Loans in India. Since 2021, more than 50
            lakh customers have fulfilled their dreams with us. Our network of
            100+ banks and NBFCs promises the most affordable and suitable
            finance deal for you. PR GROW helps loan is the lending of money by
            one or more individuals, organizations, or other entities to other
            individuals, organizations, etc. The recipient (i.e., the borrower)
            incurs a debt and is usually liable to pay interest on that debt
            until it is repaid as well as to repay the principal amount
            borrowed.
          </div>

          <div className="border border-blue-500 bg-gray-200 text-blue-700 p-3 mb-6">
            We will match you with a loan program that meets your financial
            needs. In short term liquidity, by striving to make funds available
            to them within 24 hours of application.
          </div>
          <div className="text-gray-700 mb-6">
            PR GROW is your one-stop destination to search for the
            best Home Loans, Personal Loans and Credit Cards in India. Since
            2021, more than 1K customers have fulfilled their dreams with us.
          </div>
          <div className="lg:flex mb-6">
            <div className="mr-4">
              <img src={newsleft} alt="News Left" className="w-full" />
            </div>
            <div>
              <img src={newsright} alt="News Right" className="w-full" />
            </div>
          </div>
          <div className="lg:flex justify-between items-center mb-6">
            <div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
                Company
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
                House Loan
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
                Lap Loan
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Business Loan
              </button>
            </div>
            <div className="text-xl">
              <span className="mr-2"><FacebookIcon/></span>
              <span className="mr-2"><XIcon/></span>
              <span><LinkedInIcon/></span>
            </div>
          </div>
          <div className="bg-white p-3">
            <div className="text-xl mb-3">FAQ</div>
            <div className="flex mb-3">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded p-2 mr-2 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="YOUR FAQ"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Right div */}
        <div className="lg:col-span-1">
          <div className="search mb-6">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded p-2 w-2/3 m-2"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Search
            </button>
          </div>
          <div className="category mb-6">
            <h1 className="text-xl mb-3">Categories</h1>
            <ol>
              <li className="flex items-center">
                <ChevronRightIcon className="mr-2" />
                Business(1)
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="mr-2" />
                Car Loan(1)
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="mr-2" />
                Home Loan(2)
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="mr-2" />
                LAP Loan(1)
              </li>
            </ol>
          </div>
          <div className="recentpost">
            <h1 className="text-xl mb-3">Recent Posts</h1>
            <div className="mb-2">
              <small className="text-gray-600">23 Sep, 2022</small>
              <div>How To Apply Auto loan.</div>
            </div>
            <div className="mb-2">
              <small className="text-gray-600">23 Sep, 2022</small>
              <div>How to Apply Home Loan.</div>
            </div>
            <div className="mb-2">
              <small className="text-gray-600">23 Sep, 2022</small>
              <div>Easy way to Apply Business Loan.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsM;
