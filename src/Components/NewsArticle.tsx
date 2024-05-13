import React from 'react';
import car from '../assets/Newsimg/car.jpg';
import home from '../assets/Newsimg/home.jpg';
import business from '../assets/Newsimg/business.jpg';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NewsArticle: React.FC = () => {
  return (
    <div className="News-article w-full bg-gray-100">
      {/* Heading */}
      <div className="text-center text-5xl font-bold py-10">Directly From the Blog</div>

      {/* News cards */}
      <div className="flex justify-center">
        <div className="w-11/12 lg:w-2/3 lg:flex justify-between">
          {/* Card 1 */}
          <div className="card flex-1 m-2 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="img h-40 bg-cover bg-center" style={{ backgroundImage: `url(${car})` }}>
              <div className="bg-blue-500 text-white p-1 w-1/3">23 Sep, 2022</div>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <div className="mr-2"><PersonIcon color="primary" sx={{fontSize:20}} /> Admin</div>
                <div><CreditCardIcon color="primary" sx={{fontSize:20}} />Auto loan</div>
              </div>
              <div className="text-xl font-semibold text-blue-900 mb-4">How To Apply Auto loan.</div>
              <div className="flex justify-between">
                <div className="left text-gray-500"><ArrowForwardIcon color="primary" sx={{fontSize:20}}/>Read More</div>
                <div className="right text-gray-500"><ForumIcon color="primary" sx={{fontSize:20}}/>0 Comments</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card flex-1 m-2 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="img h-40 bg-cover bg-center" style={{ backgroundImage: `url(${home})` }}>
              <div className="bg-blue-500 text-white p-1 w-1/3">23 Sep, 2022</div>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <div className="mr-2"><PersonIcon color="primary" sx={{fontSize:20}} />Admin</div>
                <div className=''><CreditCardIcon color="primary" sx={{fontSize:20}} />Home loan</div>
              </div>
              <div className="text-xl font-semibold text-blue-900 mb-4">How To Apply Auto loan.</div>
              <div className="flex justify-between">
                <div className="left text-gray-500"><ArrowForwardIcon color="primary" sx={{fontSize:20}}/>Read More</div>
                <div className="right text-gray-500"><ForumIcon color="primary" sx={{fontSize:20}}/>0 Comments</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card flex-1 m-2 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="img h-40 bg-cover bg-center" style={{ backgroundImage: `url(${business})` }}>
              <div className="bg-blue-500 text-white p-1 w-1/3">23 Sep, 2022</div>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <div className="mr-2"><PersonIcon color="primary" sx={{fontSize:20}} /> Admin</div>
                <div><CreditCardIcon color="primary" sx={{fontSize:20}} />Business loan</div>
              </div>
              <div className="text-xl font-semibold text-blue-900 mb-4">How To Apply Auto loan.</div>
              <div className="flex justify-between">
                <div className="left text-gray-500"><ArrowForwardIcon color="primary" sx={{fontSize:20}}/>Read More</div>
                <div className="right text-gray-500"><ForumIcon color="primary" sx={{fontSize:20}}/>0 Comments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
