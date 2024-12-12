import BookingForm from './Bookingform'; // Assuming this is imported from the correct path
import bg from '../images/bg.webp';
import Growth from '../images/Growth.webp';



const BookingOverlay = () => {
  return (
<div className="relative w-full min-h-screen flex items-center justify-center select-none">
  {/* Full Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center z-0" 
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  />
  
  {/* Black Overlay */}
  <div 
    className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-5"
  />
  
  <div className="relative z-10 w-full max-w-6xl px-2 flex flex-col md:flex-row gap-4">
    {/* Left Overlay Div */}
    <div className="w-full md:w-1/2 p-4 rounded-lg">
      <BookingForm />
    </div>
    
    {/* Right Overlay Div */}
    <div className="w-full md:w-1/2 p-4 rounded-lg">
      <h4 className="text-[#ff9900] text-[23px] font-semibold mb-4"> 
        Note:- Investment in securities market are subject to market risks. Read all the related documents carefully before investing. 
      </h4>
      <p className="text-[#ff9900] font-semibold mb-4">
        SEBI REGISTRATION NUMBER : INH000018081
      </p>
      
      <div className="text-white space-y-2">
        <span className="block font-semibold text-[22px]">Services we offer :</span>
        <ul className="list-disc pl-5 font-bold text-[20px] space-y-1">
          <li>Get Daily basis advice</li>
          <li>Get Daily basis Short Term/Long Term advice</li>
          <li>Get Daily basis Resistance and Support level</li>
          <li>Get Daily basis Recommendation via SMS Server</li>
        </ul>
      </div>
      <img src={Growth} alt="" className='w-[230px]' />
    </div>
  </div>
</div>

  );
};

export default BookingOverlay;