import  { useState } from 'react';

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
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-3 bg-white shadow-md rounded-md space-y-4"
    >
      <h4 className="text-center text-[20px] font-bold bg-[#1e73be] rounded-[4px] text-white p-1">
        Book Your Free Trial & Start Profit Booking
      </h4>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex items-center space-x-2">
        <span className="px-1 py-2 border text-sm rounded-l-md bg-gray-100 text-gray-700">+91</span>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="flex-1 px-1 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        name="state"
        value={formData.state}
        onChange={handleChange}
        className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">State</option>
        <option value="state1">State 1</option>
        <option value="state2">State 2</option>
      </select>

      <select
        name="segment"
        value={formData.segment}
        onChange={handleChange}
        className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Segment</option>
        <option value="segment1">Segment 1</option>
        <option value="segment2">Segment 2</option>
      </select>

      <select
        name="investment"
        value={formData.investment}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Investment</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <select
        name="language"
        value={formData.language}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Language</option>
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
      </select>

      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="w-5 h-5 text-blue-500 border rounded focus:ring-2 focus:ring-blue-500"
        />
        <label className="text-sm font-semibold text-gray-600">
          I agree to all Terms & Conditions. I authorize the company to call me
          even if my number is registered in DND.
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Get Free Trades Now
      </button>
    </form>
  );
};

export default BookingForm;