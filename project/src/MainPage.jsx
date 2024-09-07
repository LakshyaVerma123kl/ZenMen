import React from "react";
import SupportSection from "./SupportSection";
import Testimonial from "./Testimonial";
import Signin from "./Signin";
import Issues from "./Issues";
import Doctor from "./Doctor";

const heroImage = "https://via.placeholder.com/1500x600?text=Hero+Image";
const featureImage1 = "https://via.placeholder.com/400x300?text=Feature+1";
const featureImage2 = "https://via.placeholder.com/400x300?text=Feature+2";
const featureImage3 = "https://via.placeholder.com/400x300?text=Feature+3";

function MainPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white py-24 px-6 lg:py-32 lg:px-10">
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Empower Your Wellness Journey
          </h1>
          <p className="text-base sm:text-lg mb-8">
            Access valuable resources and support for mental and private
            wellness, designed to fit your unique needs.
          </p>
          <a
            href="#get-started"
            className="bg-yellow-500 text-blue-700 py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out text-lg font-semibold"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img
                src={featureImage1}
                alt="Feature 1"
                className="w-full h-40 sm:h-48 object-cover mb-4 sm:mb-6 rounded-t-lg"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
                Personalized Wellness Plans
              </h3>
              <p className="text-sm sm:text-base">
                Custom plans to meet your wellness goals with tailored support
                and resources.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img
                src={featureImage2}
                alt="Feature 2"
                className="w-full h-40 sm:h-48 object-cover mb-4 sm:mb-6 rounded-t-lg"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
                Expert Advice & Resources
              </h3>
              <p className="text-sm sm:text-base">
                Access a wealth of expert advice and up-to-date resources to
                guide your wellness journey.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img
                src={featureImage3}
                alt="Feature 3"
                className="w-full h-40 sm:h-48 object-cover mb-4 sm:mb-6 rounded-t-lg"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
                Community Support
              </h3>
              <p className="text-sm sm:text-base">
                Join a supportive community and connect with others on the same
                path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections */}
      <SupportSection />
      <Issues />

      <Testimonial />
      <Signin />
    </div>
  );
}

export default MainPage;
