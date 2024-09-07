import React, { useState } from "react";

const Signin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // You can add your API call here to send form data
      console.log("Form submitted:", formData);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (err) {
      setError("There was an issue with your submission. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl w-full max-w-md border border-gray-300"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-6">
          Connect With Us
        </h1>
        <p className="text-gray-600 mb-6 sm:mb-8">
          Need immediate assistance? Leave your details and our team will reach
          out to you shortly.
        </p>

        {error && <div className="mb-6 text-red-600">{error}</div>}

        <div className="mb-4 sm:mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out"
            required
          />
        </div>

        <div className="mb-4 sm:mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out"
            required
          />
        </div>

        <div className="mb-4 sm:mb-6">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-semibold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full py-3 ${
            isSubmitting ? "bg-blue-300" : "bg-blue-500"
          } text-white font-semibold rounded-lg shadow-lg hover:${
            isSubmitting ? "bg-blue-300" : "bg-blue-600"
          } transition duration-300 ease-in-out`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Connect Now"}
        </button>
      </form>
    </div>
  );
};

export default Signin;
