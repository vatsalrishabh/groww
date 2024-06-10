import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const FixedWC:React.FC = () => {

    const handleWhatsAppClick = () => {
        const phoneNumber = '9113453768';
        const message = 'Hello, I would like to inquire about a loan from PR GROW.';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
    
    const handleCallClick = () => {
        const phoneNumber = '9113453768';
        const url = `tel:${phoneNumber}`;
        window.open(url, '_self');
    };

  return (
    <div className='fixed bottom-8 z-50 flex justify-between w-full'>
        <div onClick={handleWhatsAppClick} className="p-3 bg-green-500 rounded-full"><WhatsAppIcon sx={{ fontSize: 40 }} style={{color:'white'}} /></div>
        <div onClick={handleCallClick} className="p-3 bg-green-500 rounded-full" ><AddIcCallIcon sx={{ fontSize: 40 }}style={{color:'white'}} /></div>
    </div>
  )
}

export default FixedWC
