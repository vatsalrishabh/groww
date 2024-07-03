import React, { useState, useEffect } from 'react';
import { Slider, Typography, Box } from '@mui/material';
import PieChart from './PieChart';

const CalculateEMI: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<any>(1000000); // Default to 10 lakh
  const [loanTenure, setLoanTenure] = useState<any>(1); // Default to 1 year
  const [interestRate, setInterestRate] = useState<any>(7); // Default to 7%
  const [monthlyEMI, setMonthlyEMI] = useState<any | null>(null);
  const [principalAmount, setPrincipalAmount] = useState<any>(0);
  const [totalInterest, setTotalInterest] = useState<any>(0);

  function calculateValue(p: number, r: number, t: number): number {
    const n = 12; // number of compounding periods per year
    r = r / 100; // Convert percentage to decimal

    // Calculate the value of the expression
    let numerator = (p * r) / n;
    let denominator = 1 - Math.pow((1 + r / n), -n * t);
    let result = numerator / denominator;

    return result;
  }

  useEffect(() => {
    const p = parseFloat(String(loanAmount));
    const r = parseFloat(String(interestRate));
    const t = parseFloat(String(loanTenure));
    if (!isNaN(p) && !isNaN(r) && !isNaN(t)) {
      const result = calculateValue(p, r, t);
      setMonthlyEMI(result);
      setPrincipalAmount(p);
      setTotalInterest((result * t * 12) - p);
    } else {
      setMonthlyEMI(null);
    }
  }, [loanAmount, loanTenure, interestRate]);

  return (
    <div className="w-full lg:flex">
      {/* left box starts */}
      <div className="allLeft lg:w-1/2">
        <Box className="w-full mb-6">
          <Box className="mb-6 p-10">
            <Typography variant="h5" gutterBottom>Company Introductions</Typography>
            <Typography variant="h3" gutterBottom>You’ll never worry about money again.</Typography>
            <Typography variant="body1" paragraph>
              PR GROW is your one-stop destination to search for the best Home Loans, Personal Loans in India.
              Since 2021, more than 2000+ customers have fulfilled their dreams with us. Our network of 100+
              banks and NBFCs promises the most affordable and suitable finance deal for you.
            </Typography>
          </Box>
        </Box>
      </div>
      {/* left box ends */}

      {/* right box starts */}
      <div className="allRight lg:w-1/2">
        <Box className="w-full p-6 bg-white">
          <Box className="form mb-6">
            <Typography variant="h4" gutterBottom>Calculate EMI</Typography>
            <Box className="mb-4">
              <Typography gutterBottom>Loan Amount (Rs.):</Typography>
              <Slider
                value={loanAmount}
                onChange={(e, value) => {
                  setLoanAmount(value as number);
                  console.log(e)
                }}
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
                onChange={(e, value) => {
                  setLoanTenure(value as number);
                  console.log(e);
                }}
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
                onChange={(e, value) =>{
                   setInterestRate(value as number);
                   console.log(e);
                    }
                  }
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
                Monthly Loan EMI: ₹{monthlyEMI.toFixed(2)}
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Principle Amount: ₹{loanAmount}
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Loan on Interest: ₹{((monthlyEMI * loanTenure * 12) - loanAmount).toFixed(2)}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Total Amount to be Paid including interest: ₹{(monthlyEMI * loanTenure * 12).toFixed(2)}
              </Typography>
            </Box>
          )}
        </Box>

        <div className='w-72 h-72'>
          <PieChart principal={principalAmount} interest={totalInterest} />
        </div>
      </div>
      {/* right box ends */}
    </div>
  );
};

export default CalculateEMI;
