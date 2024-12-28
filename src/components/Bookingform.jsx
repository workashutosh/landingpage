import { useState, useEffect } from 'react';
import Select from 'react-select';

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

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: '',
    segment: '',
    investment: '',
    language: '',
    consent: true,
    ipAddress: '', // Store IP Address
    utmSource: ''  // Store UTM Source
  });

  const [errors, setErrors] = useState({
    fullNameError: '',
    phoneError: '',
    stateError: '',
    segmentError: '',
    investmentError: '',
    languageError: '',
  });

  useEffect(() => {
    // Capture the query parameter "utm" from the URL
    const params = new URLSearchParams(window.location.search);
    const utm = params.get('utm');
    if (utm) {
      setFormData(prevState => ({ ...prevState, utmSource: utm }));
    }

    // Fetch the user's IP address using an external API
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        setFormData(prevState => ({ ...prevState, ipAddress: data.ip }));
      })
      .catch((error) => console.error('Error fetching IP address:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Regex for name - allows only alphabets and spaces
    const nameRegex = /^[A-Za-z\s]+$/;

    // Regex for phone - allows only numbers and ensures a valid phone format (starts with +91)
    const phoneRegex = /^\d{10}$/;

    if (name === "phone") {
      setFormData({
        ...formData,
        [name]: value,
      });

      if (value && !value.startsWith("+91") && phoneRegex.test("+91" + value)) {
        setFormData({
          ...formData,
          [name]: "+91" + value,
        });
        setErrors({ ...errors, phoneError: '' });
      } else if (value && !phoneRegex.test(value)) {
        setErrors({ ...errors, phoneError: 'Invalid phone number' });
      } else {
        setErrors({ ...errors, phoneError: '' });
      }
    } else if (name === "fullName") {
      if (nameRegex.test(value)) {
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

  const handleSubmit = (e) => {
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
    } else {
      //console.log('Form submitted:', formData);
  
      fetch('https://twmresearchalert.com/subdomain/gateway/registrationget.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => {
          if (response.status === 200) {
            window.location.replace('https://twmresearchalert.com/landingpage/thank-you/');
          }
          return response.json();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
};
  
  

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-3 bg-white shadow-md rounded-md space-y-4">
      <h4 className="text-center text-[20px] font-bold bg-[#1e73be] rounded-[4px] text-white p-1">
        Book Your Free Trial & Start Profit Booking
      </h4>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        required
        value={formData.fullName}
        onChange={handleChange}
        className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.fullNameError && <div className="text-red-500 text-sm">{errors.fullNameError}</div>}

      <input
        type="number"
        name="phone"
        placeholder="Phone"
        required
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.phoneError && <div className="text-red-500 text-sm">{errors.phoneError}</div>}

      <input
        type="email"
        name="email"
        required
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <Select
        name="state"
        value={formData.state ? { value: formData.state, label: formData.state } : ''}
        onChange={(selectedOption) => handleSelectChange('state', selectedOption)}
        options={indianStates.map((state) => ({ value: state, label: state }))}
        placeholder="Select State"
        className="w-full"
      />
      {errors.stateError && <div className="text-red-500 text-sm">{errors.stateError}</div>}

      <Select
        name="segment"
        value={formData.segment ? { value: formData.segment, label: formData.segment } : ''}
        onChange={(selectedOption) => handleSelectChange('segment', selectedOption)}
        options={segments}
        placeholder="Select Segment"
        className="w-full"
      />
      {errors.segmentError && <div className="text-red-500 text-sm">{errors.segmentError}</div>}

      <Select
        name="investment"
        value={formData.investment ? { value: formData.investment, label: formData.investment } : ''}
        onChange={(selectedOption) => handleSelectChange('investment', selectedOption)}
        options={investments}
        placeholder="Select Investment Amount"
        className="w-full"
      />
      {errors.investmentError && <div className="text-red-500 text-sm">{errors.investmentError}</div>}

      <Select
        name="language"
        value={formData.language ? { value: formData.language, label: formData.language } : ''}
        onChange={(selectedOption) => handleSelectChange('language', selectedOption)}
        options={languages}
        placeholder="Select Language"
        className="w-full"
      />
      {errors.languageError && <div className="text-red-500 text-sm">{errors.languageError}</div>}

      <div className="flex items-center">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-sm">I agree to the terms and conditions</label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default BookingForm;
