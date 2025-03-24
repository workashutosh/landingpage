import React, { useState } from 'react';
import BookingForm from './Bookingform';

const SEBIEXBanner = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="w-full bg-white py-12 px-4 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-8 border-t-4 border-blue-600 rounded-lg shadow-lg">
        {/* Value Proposition Headline */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
          Unlock Expert Investment Insights Today
        </h2>
        <p className="text-center text-gray-600 text-lg mb-6">
          Discover how our daily guidance can transform your financial future
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">✓</span>
            <p className="text-gray-700">Daily expert advice tailored to your goals</p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">✓</span>
            <p className="text-gray-700">Proven strategies for short & long-term gains</p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">✓</span>
            <p className="text-gray-700">Real-time market support levels</p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">✓</span>
            <p className="text-gray-700">Instant SMS recommendations</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-gray-700 italic text-center">
            "Their expertise boosted my returns by 25% in just weeks!"
          </p>
          <p className="text-blue-600 text-sm mt-2 text-center">
            - Rahul M., Satisfied Client
          </p>
        </div>

        {/* Call to Action & Guarantee */}
        <div className="flex flex-col items-center">
          <button 
            onClick={handleButtonClick}
            className="bg-blue-600 text-white font-medium py-3 px-8 rounded-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-md mb-4"
          >
            Get Expert Advice Now
          </button>
          <p className="text-gray-600 text-sm">
            30-Day Money-Back Guarantee - Try Risk-Free!
          </p>
        </div>
      </div>

      {/* Modal Form */}
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
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Start Your Investment Journey
              </h3>
              <BookingForm onClose={closeForm} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEBIEXBanner;