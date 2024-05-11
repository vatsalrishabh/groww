import React, { useEffect, useState } from "react";

const Counting: React.FC = () => {
  // State variables for counting
  const [loanApprovals, setLoanApprovals] = useState<number>(0);
  const [banks, setBanks] = useState<number>(0);
  const [customers, setCustomers] = useState<number>(0);
  const [staffMembers, setStaffMembers] = useState<number>(0);

  // Simulate counting animation effect with upper limit and finish within 5 seconds
  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + 100000; // Finish within 5 seconds
    const interval = setInterval(() => {
      const currentTime = Date.now();
      if (currentTime >= endTime) {
        // Finish counting after 5 seconds
        clearInterval(interval);
      } else {
        // Increase the count by a random value between 1 to 5 until the end time
        setLoanApprovals((prev) => Math.min(prev + Math.floor(Math.random() * 5) + 1, 98)); // Upper limit 100
        setBanks((prev) => Math.min(prev + Math.floor(Math.random() * 5) + 1, 50)); // Upper limit 100
        setCustomers((prev) => Math.min(prev + Math.floor(Math.random() * 5) + 1, 270000)); // Upper limit 100
        setStaffMembers((prev) => Math.min(prev + Math.floor(Math.random() * 5) + 1, 200)); // Upper limit 100
      }
    }, 100); // Update count every 100 milliseconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Run effect only once after initial render

  return (
    <div className="Counting w-full bg-blue-400 lg:flex lg:h-[28vh] justify-center align-middle">

      {/* First half with two cards */}
      <div className="lg:flex lg:w-1/2 justify-center">
        <div className="box1 text-white p-14">
          <h1 className="text-6xl">{loanApprovals}%</h1>
          <h4 className="text-2xl">We Approve Loans</h4>
        </div>

        <div className="box2 text-white p-14">
          <h1 className="text-6xl">{banks}+</h1>
          <h4 className="text-2xl">Banks & NBFCs</h4>
        </div>
      </div>

      {/* Second half with two div */}
      <div className="lg:flex lg:w-1/2 justify-center">
        <div className="box3 text-white p-14">
          <h1 className="text-6xl">{customers}+</h1>
          <h4 className="text-2xl">Happy Customers</h4>
        </div>

        <div className="box4 text-white p-14">
          <h1 className="text-6xl">{staffMembers}+</h1>
          <h4 className="text-2xl">Staff Members</h4>
        </div>
      </div>

    </div>
  );
};

export default Counting;
