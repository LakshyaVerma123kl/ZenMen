import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <section className="bg-gray-200 py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
          What Our Users Say
        </h2>
        <Slider {...settings} className="px-2 md:px-4">
          {[
            {
              text: "This platform has made a significant difference in my mental health journey. The support and resources are top-notch.",
              name: "John Doe",
              role: "Software Engineer",
            },
            {
              text: "Invaluable resources and a supportive community—highly recommend! It's a game-changer for anyone seeking help.",
              name: "Jane Smith",
              role: "Content Creator",
            },
            {
              text: "The expert advice and personalized support have been incredibly beneficial. This platform truly cares about its users.",
              name: "Alice Johnson",
              role: "Freelance Writer",
            },
            {
              text: "An amazing platform with a wealth of information and a compassionate community. I feel more confident in my journey.",
              name: "Robert Brown",
              role: "Digital Marketer",
            },
            {
              text: "The user interface is friendly, and the customer support is exceptional. Highly recommend for anyone looking to improve their well-being.",
              name: "Emily Davis",
              role: "Product Manager",
            },
            {
              text: "A fantastic resource with easy-to-understand information. I’ve gained valuable insights and support through this platform.",
              name: "Michael Wilson",
              role: "Entrepreneur",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105"
            >
              <p className="italic text-base md:text-lg mb-4 text-gray-700">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-base md:text-lg text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                {testimonial.role}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
