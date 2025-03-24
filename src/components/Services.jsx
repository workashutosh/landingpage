import React, { useState } from 'react';
import stockCashImage from '../images/stock_cash.webp';
import stock_future from '../images/stock_future.webp';
import BookingForm from './Bookingform';

// Updated service data with benefit-focused descriptions
const serviceData1 = [
  {
    imgSrc: stockCashImage,
    title: "Stock Cash Advice",
    description: "Perfect for small to medium investors seeking consistent cash market gains. Get 1-2 daily expert recommendations, totaling 20-22 per month, delivered via SMS or phone with precise entry and exit timing.",
    testimonial: "Increased my cash returns by 20% in a month!",
    testimonialAuthor: "Vikram P.",
  },
  {
    imgSrc: stock_future,
    title: "Stock Future Advice",
    description: "Ideal for futures traders wanting reliable profits. Receive 1-2 daily stock future picks, 20-22 monthly, with timely SMS or phone support for optimal trades.",
    testimonial: "Made futures trading stress-free and profitable!",
    testimonialAuthor: "Neha R.",
  },
];

const serviceData2 = [
  {
    imgSrc: stockCashImage,
    title: "Nifty Future Advice",
    description: "Designed for Nifty and Bank Nifty futures investors. Get 3-4 weekly expert tips via SMS or phone, with clear entry and exit points for maximum gains.",
    testimonial: "Nifty trades are now my strength!",
    testimonialAuthor: "Arjun S.",
  },
  {
    imgSrc: stock_future,
    title: "Bank Nifty Future Advice",
    description: "Tailored for Bank Nifty futures enthusiasts. Enjoy 3-4 weekly recommendations via SMS or phone, ensuring timely and profitable trades.",
    testimonial: "Bank Nifty profits soared with their guidance!",
    testimonialAuthor: "Priya T.",
  },
];

const serviceData3 = [
  {
    imgSrc: stockCashImage,
    title: "Nifty Option Advice",
    description: "Great for options traders targeting Nifty and Bank Nifty. Receive 3-4 weekly expert picks via SMS or phone, with precise timing for success.",
    testimonial: "Options trading became so much easier!",
    testimonialAuthor: "Karan M.",
  },
  {
    imgSrc: stock_future,
    title: "Bank Nifty Option Advice",
    description: "Perfect for Bank Nifty options investors. Get 3-4 weekly tips via SMS or phone, designed for profitable entry and exit strategies.",
    testimonial: "Best options advice I’ve ever had!",
    testimonialAuthor: "Suman K.",
  },
];

const serviceData4 = [
  {
    imgSrc: stockCashImage,
    title: "Stock Option Advice",
    description: "Suited for stock options traders seeking steady wins. Enjoy 1-2 daily recommendations, 20-22 monthly, via SMS or phone with expert timing.",
    testimonial: "Stock options are now my go-to profit source!",
    testimonialAuthor: "Ravi D.",
  },
];

const ServiceCard = ({ service }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center max-w-md mx-auto transition-transform hover:scale-105">
        <img 
          src={service.imgSrc} 
          alt={service.title} 
          className="w-[100px] h-[100px] object-cover rounded-full mb-4" 
        />
        <h4 className="text-black font-bold text-xl uppercase mb-2">{service.title}</h4>
        <p className="text-gray-600 text-sm text-center mb-4">{service.description}</p>
        
        {/* Testimonial */}
        <div className="bg-gray-100 p-3 rounded-md mb-4 w-full">
          <p className="text-gray-700 text-sm italic">"{service.testimonial}"</p>
          <p className="text-blue-600 text-xs mt-1 text-right">- {service.testimonialAuthor}</p>
        </div>

        {/* CTA with Guarantee */}
        <button 
          onClick={handleButtonClick}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Try plan for free
        </button>
        <p className="text-gray-500 text-xs mt-2">No Risk - Cancel Anytime</p>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full m-4">
            <div className="relative p-6">
              <button
                onClick={closeForm}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
              <h3 className="text-lg font-semibold mb-4">Try {service.title}</h3>
              <BookingForm onClose={closeForm} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Services = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="flex justify-center items-center p-4">
        <span className="text-center font-semibold text-2xl md:text-3xl mt-2 p-2 border-b-4 border-blue-600 text-gray-800">
          Our Expert Services
        </span>
      </div>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Unlock your investment potential with our proven strategies and expert guidance
      </p>
      <div className="p-8 flex flex-col gap-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceData1.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceData2.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceData3.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceData4.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;