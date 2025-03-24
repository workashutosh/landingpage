import { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry"
];

const segments = [
  { value: "Equity cash / intraday", label: "Equity cash / intraday" },
  { value: "Option (Call-Put)", label: "Option (Call-Put)" },
  { value: "Future (Derivatives)", label: "Future (Derivatives)" },
  { value: "Index", label: "Index" },
  { value: "Commodity", label: "Commodity" }
];

const investments = [
  { value: "Above Rs 50000", label: "Above Rs 50000" },
  { value: "Above Rs 1 Lakhs", label: "Above Rs 1 Lakhs" },
  { value: "Above Rs 3 Lakhs", label: "Above Rs 3 Lakhs" },
  { value: "Above Rs 5 Lakhs", label: "Above Rs 5 Lakhs" },
];

const languages = [
  { value: "hindi", label: "Hindi" },
  { value: "english", label: "English" },
  { value: "andh", label: "Andh" },
  { value: "arabi", label: "Arabic" },
  { value: "asami", label: "Assamese" },
  { value: "beng", label: "Bengali" },
  { value: "bodo", label: "Bodo" },
  { value: "dogri", label: "Dogri" },
  { value: "gujarati", label: "Gujarati" },
  { value: "kan", label: "Kannada" },
  { value: "kashmiri", label: "Kashmiri" },
  { value: "konkani", label: "Konkani" },
  { value: "maithili", label: "Maithili" },
  { value: "malayalam", label: "Malayalam" },
  { value: "manipuri", label: "Manipuri" },
  { value: "marathi", label: "Marathi" },
  { value: "nepali", label: "Nepali" },
  { value: "odia", label: "Odia" },
  { value: "punjabi", label: "Punjabi" },
  { value: "sanskrit", label: "Sanskrit" },
  { value: "santhali", label: "Santhali" },
  { value: "sindhi", label: "Sindhi" },
  { value: "tamil", label: "Tamil" },
  { value: "telugu", label: "Telugu" },
  { value: "urdu", label: "Urdu" }
];

const BookingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: '',
    segment: '',
    investment: '',
    language: '',
    consent: true,
    ipAddress: '',
    utmSource: '',
    otp: '',
    verificationId: '',
  });

  const [errors, setErrors] = useState({
    fullNameError: '',
    phoneError: '',
    stateError: '',
    segmentError: '',
    investmentError: '',
    languageError: '',
    otpError: '',
  });

  const [showForm, setShowForm] = useState(true);
  const [isOtpSent, setIsOtpSent] = useState(false);

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\d{10}$/;

    if (name === "phone") {
      setFormData({
        ...formData,
        [name]: value,
      });

      if (value && !value.startsWith("+91") && phoneRegex.test(value)) {
        setErrors({ ...errors, phoneError: '' });
      } else if (value && !phoneRegex.test(value)) {
        setErrors({ ...errors, phoneError: 'Invalid phone number' });
      } else {
        setErrors({ ...errors, phoneError: '' });
      }
    } else if (name === "fullName") {
      if (nameRegex.test(value) || value === '') {
        setFormData({
          ...formData,
          [name]: value,
        });
        setErrors({ ...errors, fullNameError: '' });
      } else {
        setErrors({ ...errors, fullNameError: 'Invalid name (only alphabets and spaces allowed)' });
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleSelectChange = (name, selectedOption) => {
    setFormData({
      ...formData,
      [name]: selectedOption ? selectedOption.value : ''
    });
    setErrors({ ...errors, [`${name}Error`]: '' });
  };

  const sendOtpAndSubmit = async () => {
    try {
      const otpResponse = await axios.post(
        `https://cpaas.messagecentral.com/verification/v3/send?countryCode=91&customerId=C-BB02AA7F5FAF4D8&flowType=SMS&mobileNumber=${formData.phone}`,
        {},
        {
          headers: {
            'authToken': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLUJCMDJBQTdGNUZBRjREOCIsImlhdCI6MTc0Mjc5MDM4NywiZXhwIjoxOTAwNDcwMzg3fQ.fU5fgOHm5Vg5hI1bSZ2oXJodY6dOS1yLvS58YoAVNJCZt3zMxn6PhYTtcEUlnHb_XgpBlNzfatQMFWj3MDYE5g',
          },
        }
      );

      if (otpResponse.data.responseCode === 200) {
        setFormData(prev => ({ ...prev, verificationId: otpResponse.data.data.verificationId }));
        setIsOtpSent(true);

        // Submit form data immediately
        await fetch('https://twmresearchalert.com/subdomain/gateway/registrationget.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        setShowForm(false);
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
      setErrors(prev => ({ ...prev, phoneError: 'Failed to send OTP or submit form' }));
    }
  };

  const validateOtp = async () => {
    try {
      const response = await axios.get(
        `https://cpaas.messagecentral.com/verification/v3/validateOtp?countryCode=91&mobileNumber=${formData.phone}&verificationId=${formData.verificationId}&customerId=C-BB02AA7F5FAF4D8&code=${formData.otp}`,
        {
          headers: {
            'authToken': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLUJCMDJBQTdGNUZBRjREOCIsImlhdCI6MTc0Mjc5MDM4NywiZXhwIjoxOTAwNDcwMzg3fQ.fU5fgOHm5Vg5hI1bSZ2oXJodY6dOS1yLvS58YoAVNJCZt3zMxn6PhYTtcEUlnHb_XgpBlNzfatQMFWj3MDYE5g',
          },
        }
      );

      if (response.data.responseCode === 200 && response.data.data.verificationStatus === 'VERIFICATION_COMPLETED') {
        // Update verification status in database
        await axios.patch(
          'https://twmresearchalert.com/subdomain/gateway/registrationget.php',
          { phone: formData.phone },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        console.log('verified');
        alert('OTP Verified!');
        window.location.replace('https://twmresearchalert.com/landing/thankyou.html');
      } else {
        setErrors(prev => ({ ...prev, otpError: 'Invalid OTP' }));
      }
    } catch (error) {
      console.error('Error validating OTP:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
      setErrors(prev => ({ ...prev, otpError: 'OTP validation failed' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.fullName) validationErrors.fullNameError = 'Full name is required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) validationErrors.phoneError = 'Phone number is required and should be valid';
    if (!formData.state) validationErrors.stateError = 'State is required';
    if (!formData.segment) validationErrors.segmentError = 'Segment is required';
    if (!formData.investment) validationErrors.investmentError = 'Investment is required';
    if (!formData.language) validationErrors.languageError = 'Language is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await sendOtpAndSubmit();
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    await validateOtp();
  };

  return (
    <div className="w-full max-w-sm mx-auto p-4 sm:p-6">
      {showForm ? (
        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-lg rounded-lg space-y-4 overflow-y-auto"
        >
          <h4 className="text-center text-sm sm:text-xl md:text-xl font-bold bg-blue-600 text-white p-2 rounded-t-md">
            Claim Your Free Trial & Skyrocket Your Profits!
          </h4>

          <p className="text-center text-gray-600 text-xs sm:text-sm md:text-base">
            Join thousands who’ve boosted their investments with our expert tips
          </p>

          <div className="space-y-3 px-4">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Your Full Name"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full text-black px-3 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              {errors.fullNameError && <div className="text-red-500 text-xs mt-1">{errors.fullNameError}</div>}
            </div>

            <div>
              <input
                type="number"
                name="phone"
                placeholder="Your Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 text-black text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
              />
              {errors.phoneError && <div className="text-red-500 text-xs mt-1">{errors.phoneError}</div>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 text-black py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <Select
                name="state"
                value={formData.state ? { value: formData.state, label: formData.state } : ''}
                onChange={(selectedOption) => handleSelectChange('state', selectedOption)}
                options={indianStates.map((state) => ({ value: state, label: state }))}
                placeholder="Select Your State"
                className="w-full text-sm text-black sm:text-base"
              />
              {errors.stateError && <div className="text-red-500 text-xs mt-1">{errors.stateError}</div>}
            </div>

            <div>
              <Select
                name="segment"
                value={formData.segment ? { value: formData.segment, label: formData.segment } : ''}
                onChange={(selectedOption) => handleSelectChange('segment', selectedOption)}
                options={segments}
                placeholder="Choose Your Trading Segment"
                className="w-full text-black text-sm sm:text-base"
              />
              {errors.segmentError && <div className="text-red-500 text-xs mt-1">{errors.segmentError}</div>}
            </div>

            <div>
              <Select
                name="investment"
                value={formData.investment ? { value: formData.investment, label: formData.investment } : ''}
                onChange={(selectedOption) => handleSelectChange('investment', selectedOption)}
                options={investments}
                placeholder="Select Investment Amount"
                className="w-full text-black text-sm sm:text-base"
              />
              {errors.investmentError && <div className="text-red-500 text-xs mt-1">{errors.investmentError}</div>}
            </div>

            <div>
              <Select
                name="language"
                value={formData.language ? { value: formData.language, label: formData.language } : ''}
                onChange={(selectedOption) => handleSelectChange('language', selectedOption)}
                options={languages}
                placeholder="Preferred Language"
                className="w-full text-black text-sm sm:text-base"
              />
              {errors.languageError && <div className="text-red-500 text-xs mt-1">{errors.languageError}</div>}
            </div>

            <div className="bg-gray-100 p-3 rounded-md text-center">
              <p className="text-gray-700 text-xs sm:text-sm italic">
                "These tips doubled my returns in just 3 trades!"
              </p>
              <p className="text-blue-600 text-xs mt-1">
                - Priya K., Happy Trader
              </p>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-blue-600"
              />
              <label className="text-xs sm:text-sm text-gray-600">
                I agree to the terms and conditions
              </label>
            </div>

            <div className="text-center pb-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-md hover:bg-blue-700 focus:outline-none transition-colors font-semibold shadow-md text-sm sm:text-base"
              >
                Submit
              </button>
              <p className="text-gray-500 text-xs mt-2">
                100% Free - No Risk, Cancel Anytime
              </p>
            </div>
          </div>
        </form>
      ) : (
        <form 
          onSubmit={handleOtpSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-4"
        >
          <h4 className="text-center text-xl font-bold text-blue-600">
            Verify OTP
          </h4>
          <div>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {errors.otpError && <div className="text-red-500 text-xs mt-1">{errors.otpError}</div>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none transition-colors font-semibold shadow-md"
          >
            Verify OTP
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;