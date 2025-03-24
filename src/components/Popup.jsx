import { useState, useEffect } from 'react';
import BookingForm from './Bookingform';

function PopupForm({ onSubmit }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', 
    ipAddress: '',
    phone: '',  
    utmSource: '',  
    state: null,  
    segment: null, 
    investment: null, 
    language: null   
  });
  const [errors, setErrors] = useState({});

  // Show popup every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPopupVisible(true);
    }, 10000); 

    return () => clearInterval(interval); 
  }, []);

  //utm paypass 
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm = params.get('utm');
    if (utm) {
      setFormData(prevState => ({ ...prevState, utmSource: utm }));
    }

    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        setFormData(prevState => ({ ...prevState, ipAddress: data.ip }));
      })
      .catch((error) => console.error('Error fetching IP address:', error));
  }, []);

  // Handle manual close
  const handleClose = () => {
    setPopupVisible(false);
    setFormData({ fullName: '', phone: '', state: null, segment: null, investment: null, language: null });
    setErrors({});
  };

  return (
    <>
      {popupVisible && (
        <div className="fixed inset-0 pt-6 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-sm  mx-2 animate-fade-in md:p-3">
            <div className="flex justify-between items-center mb-2 md:mb-3">
              <h2 className="text-lg font-semibold text-gray-700 md:text-xl">
                Get Expert Advice & Instant Trial
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 font-bold text-lg md:text-xl"
              >
                ×
              </button>
            </div>
            <BookingForm onSubmit={onSubmit} />
          </div>
        </div>
      )}
    </>
  );
}

export default PopupForm;