
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Footer from './Footer';

const BusinessLoan:React.FC = () => {
  return (
    <>
    
    <div className='Businessloan   lg:flex'>
        <div className="lg:w-1/3 bg-gray-200">
          <div className="options p-5 ">

          <div className='box bg-white m-2 h-14 w-2/3 flex justify-between'>
             <div className='flex align-middle'>Personal Loan</div>
             <div className='icon'><ChevronRightIcon/></div> 
          </div>

          <div className='box bg-white m-2 h-14 w-2/3 flex justify-between'>
             <div className='flex align-middle'>Home Loan</div>
             <div className='icon'><ChevronRightIcon/></div>
         </div>

          <div className='box bg-white m-2 h-14 w-2/3 flex justify-between'>
             <div className='flex align-middle'>Auto Loan</div>
             <div className='icon'><ChevronRightIcon/></div> 
          </div>

          <div className='box bg-white m-2 h-14 w-2/3 flex justify-between'>
             <div className='flex align-middle'> LAP Loan</div>
             <div className='icon'><ChevronRightIcon/></div>
          </div>

          <div className='box bg-white m-2 h-14 w-2/3 flex justify-between'>
             <div className='flex align-middle'>Doctors Loan</div>
             <div className='icon'><ChevronRightIcon/></div>
           </div>

          <div className='box bg-white m-2 h-14 w-2/3 flex justify-between'> 
            <div className='flex align-middle'>SEP Loan</div>
             <div className='icon'><ChevronRightIcon/></div>
         </div>
          </div>
         
        </div>
{/* right starts */}
        <div className="lg:w-2/3">sf</div>
      




    </div>

  <Footer/>
    </>
   
  )
}

export default BusinessLoan
