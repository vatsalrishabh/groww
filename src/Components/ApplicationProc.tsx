import React from 'react';

const ApplicationProc: React.FC = () => {
  return (
    <div className="App-process bg-gradient-to-b from-blue-400 to-blue-600 py-12">
      <div className="container mx-auto">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold">Fast & Easy Application Process</h2>
          <p className="mt-4">Prgrow's loan application process is designed to be quick, simple, and hassle-free.</p>
        </div>
        <div className="flex justify-center space-x-8 px-2">
          {/* Step 1: Check Eligibility & Apply Online */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
              {/* Icon */}
              <svg
                className="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </div>
            <div className="text-white font-semibold">Check Eligibility & Apply Online</div>
          </div>
          {/* Step 2: Documents Verification */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
              {/* Icon */}
              <svg
                className="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 10l2 2 4-4M5 12h14"
                ></path>
              </svg>
            </div>
            <div className="text-white font-semibold">Documents Verify 99.9% Success</div>
          </div>
          {/* Step 3: Get Your Cash */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
              {/* Icon */}
              <svg
                className="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                ></path>
              </svg>
            </div>
            <div className="text-white font-semibold">Get Your Cash</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProc;
