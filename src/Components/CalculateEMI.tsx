import { useState, useEffect } from 'react';
import {  Slider, Typography, Box, Container } from '@mui/material';
import Finance from 'financejs';
import loanicon1 from '../assets/calculateemi/loanicon1.png';
import loanicon2 from '../assets/calculateemi/loanicon2.png';

const CalculateEMI = () => {
  const [loanAmount, setLoanAmount] = useState(1000000); // Default to 1 lakh
  const [loanTenure, setLoanTenure] = useState(1); // Default to 1 year
  const [interestRate, setInterestRate] = useState(7); // Default to 7%
  const [monthlyEMI, setMonthlyEMI] =  useState<number | null>(null);

  const calculateEMI = () => {
    const finance = new (Finance as any)();
    const monthlyRate = interestRate / (12 * 100);
    const numOfMonths = loanTenure * 12;
    const emi = finance.AM(loanAmount, monthlyRate, numOfMonths);
    setMonthlyEMI(emi);
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, loanTenure, interestRate]);

  return (
    <Container  className="w-full lg:flex">
  {/* left box starts */}
      <Box className="w-full lg:w-1/2 mb-6">
        <Box className="mb-6 p-10">
          <Typography variant="h5" gutterBottom>Company Introductions</Typography>
          <Typography variant="h3" gutterBottom>You’ll never worry about money again.</Typography>
          <Typography variant="body1" paragraph>
            PR GROW is your one-stop destination to search for the best Home Loans, Personal Loans in India.
            Since 2021, more than 2000+ customers have fulfilled their dreams with us. Our network of 100+
            banks and NBFCs promises the most affordable and suitable finance deal for you.
          </Typography>
          <Box className='icon-container lg:flex lg:p-5'>
            <Box className="flex items-center lg:w-1/2 py-3">
              <Box className="mr-4">
                <img src={loanicon1} alt="Award Winning" className="h-8" />
              </Box>
              <Box>
                <Typography variant="h6">Award Winning</Typography>
                <Typography variant="body2" color="textSecondary">5+</Typography>
              </Box>
            </Box>
            <Box className="flex items-center lg:w-1/2">
              <Box className="mr-4">
                <img src={loanicon2} alt="Certified Company" className="h-8" />
              </Box>
              <Box>
                <Typography variant="h6">Certified Company</Typography>
                <Typography variant="body2" color="textSecondary">Provide loans</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
{/* left box ends */}


{/* right box starts */}
      <Box className="w-full lg:w-1/2 p-6 bg-white">
        <Box className="form mb-6">
          <Typography variant="h4" gutterBottom>Calculate EMI</Typography>
          <Box className="mb-4">
            <Typography gutterBottom>Loan Amount (Rs.):</Typography>
            <Slider
              value={loanAmount}
              onChange={(e, value:any) => setLoanAmount(value)}
              min={100000}
              max={6000000}
              step={10000}
              marks={[
                { value: 100000, label: '1L' },
                { value: 6000000, label: '60L' },
              ]}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box className="mb-4">
            <Typography gutterBottom>Loan Tenure (Years):</Typography>
            <Slider
              value={loanTenure}
              onChange={(e, value:any) => setLoanTenure(value)}
              min={1}
              max={30}
              marks={[
                { value: 1, label: '1Y' },
                { value: 30, label: '30Y' },
              ]}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box className="mb-4">
            <Typography gutterBottom>Interest Rate (%):</Typography>
            <Slider
              value={interestRate}
              onChange={(e, value:any) => setInterestRate(value)}
              min={7}
              max={30}
              step={0.1}
              marks={[
                { value: 7, label: '7%' },
                { value: 30, label: '30%' },
              ]}
              valueLabelDisplay="auto"
            />
          </Box>
        </Box>
        {monthlyEMI !== null && (
  <Box className="form-output mb-6">
    <Typography variant="h6" color="textSecondary" gutterBottom>
      Monthly Loan EMI: ₹{typeof monthlyEMI === 'number' ? monthlyEMI.toFixed(2) : ''}
    </Typography>
    <Typography variant="body1" color="textSecondary" gutterBottom>
      Principle Amount: ₹{loanAmount}
    </Typography>
    <Typography variant="body1" color="textSecondary" gutterBottom>
      Loan on Interest: ₹{typeof monthlyEMI === 'number' ? ((monthlyEMI * loanTenure * 12 - loanAmount).toFixed(2)) : ''}
    </Typography>
    <Typography variant="body1" color="textSecondary">
      Total Amount to be Paid: ₹{typeof monthlyEMI === 'number' ? ((monthlyEMI * loanTenure * 12).toFixed(2)) : ''}
    </Typography>
  </Box>
)}

      </Box>
{/* right box ends */}


    </Container>
  );
};

export default CalculateEMI;
