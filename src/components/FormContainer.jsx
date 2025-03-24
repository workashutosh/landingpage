import React from 'react';
import BookingForm from './Bookingform';
import bg from '../images/bg.webp';
import PopupForm from './Popup';


const BookingOverlay = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
  
    if (!formData.fullName) validationErrors.fullNameError = 'Full name is required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) validationErrors.phoneError = 'Phone number is required and should be valid';
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      fetch('https://twmresearchalert.com/subdomain/gateway/registrationget.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => {
          if (response.status === 200) {
            window.location.replace('https://twmresearchalert.com/landing/thankyou.html');
          }
          return response.json();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

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
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
      />
      <PopupForm onSubmit={handleSubmit} />
      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-6xl px-4 sm:px-6 py-8 sm:py-12 mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left Side (Text) on Desktop, Full Content on Mobile */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
            {/* Value Proposition */}
            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 leading-tight">
              Maximize Your Returns with Expert Daily Guidance
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6">
              Join thousands of successful investors who trust our SEBI-registered strategies
            </p>

            {/* Guarantee & Regulatory Info - Above Form on Mobile */}
            <div className="order-2 lg:order-none mb-6">
              <p className="text-white/80 text-md sm:text-[16px] mb-2">
                ✓ First earn - Then pay
              </p>
              
              
            </div>

            {/* Form on Mobile */}
            <div className="order-3 lg:order-none mb-8 lg:hidden">
              <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md p-6 rounded-lg">
                <BookingForm />
              </div>
            </div>

            {/* Key Benefits - Below Form on Mobile */}
            <div className="order-4 lg:order-none">
              
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Why Choose Us?
              </h2>
              <ul className="space-y-3 mb-6 text-md sm:text-base">
                <li className="flex items-start justify-center lg:justify-start">
                  <span className="text-[#ff9900] mr-2">✓</span>
                  Daily expert advice to solve your investment challenges
                </li>
                <li className="flex items-start justify-center lg:justify-start">
                  <span className="text-[#ff9900] mr-2">✓</span>
                  Short-term & long-term strategies for maximum profits
                </li>
                <li className="flex items-start justify-center lg:justify-start">
                  <span className="text-[#ff9900] mr-2">✓</span>
                  Precise resistance & support levels for smart decisions
                </li>
                <li className="flex items-start justify-center lg:justify-start">
                  <span className="text-[#ff9900] mr-2">✓</span>
                  Instant recommendations via SMS
                </li>
              </ul>
            </div>

            {/* Testimonial */}
            <div className="order-5 bg-white/20 p-4 rounded-md mb-6">
              <p className="text-sm sm:text-base italic">
                "Their daily advice helped me grow my portfolio by 35% in just 3 months!"
              </p>
              <p className="text-[#ff9900] text-xs sm:text-sm mt-2">
                - Priya K., Happy Investor
              </p>
            </div>
            <p className="text-[#ff9900] text-xs sm:text-sm mb-2">
                SEBI REGISTRATION NUMBER: INH000018081
              </p>
            <p className="text-white/80 text-xs">
                Note: Investment in securities market are subject to market risks. Read all related documents carefully before investing.
              </p>
          </div>

          {/* Right Side: Form on Desktop Only */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-2 rounded-lg">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingOverlay;