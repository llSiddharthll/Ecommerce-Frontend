import React from "react";
import Newsletter from "./Newsletter";
import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-5 lg:px-20 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto">
          Welcome to ShopEase, your one-stop solution for high-quality products
          at unbeatable prices. Learn more about who we are and what we do.
        </p>
      </div>

      {/* Mission Section */}
      <section className="py-16 px-5 lg:px-20 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-8">
          Our Mission
        </h2>
        <p className="text-lg lg:text-xl max-w-4xl mx-auto text-gray-600">
          At ShopEase, our mission is to provide the best shopping experience
          with a wide range of premium products. We strive to ensure customer
          satisfaction with seamless service and exceptional value.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 px-5 lg:px-20 bg-gray-100">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 text-gray-800">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "John Doe",
              role: "CEO & Founder",
              image: "https://via.placeholder.com/150"
            },
            {
              name: "Jane Smith",
              role: "Head of Marketing",
              image: "https://via.placeholder.com/150"
            },
            {
              name: "Sam Wilson",
              role: "Product Manager",
              image: "https://via.placeholder.com/150"
            },
            {
              name: "Emily Brown",
              role: "Customer Support Lead",
              image: "https://via.placeholder.com/150"
            }
          ].map((member) => (
            <div
              key={member.name}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-5 lg:px-20 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Alice Green",
              feedback:
                "Amazing products and top-notch service! Highly recommended.",
              image: "https://via.placeholder.com/100"
            },
            {
              name: "Mark Taylor",
              feedback:
                "Shopping here has been an absolute pleasure. I love it!",
              image: "https://via.placeholder.com/100"
            },
            {
              name: "Sophia Lee",
              feedback: "Fantastic quality and fast delivery. Will shop again!",
              image: "https://via.placeholder.com/100"
            }
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white shadow-lg rounded-lg p-6 text-center text-gray-800"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-5 lg:px-20 text-center bg-gray-50">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-12">
          Our Achievements
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { title: "Happy Customers", value: 10000 },
            { title: "Products Sold", value: 50000 },
            { title: "Global Reach", value: 20 },
            { title: "Team Members", value: 50 }
          ].map((stat) => (
            <div
              key={stat.title}
              className="flex-1 bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <h3 className="text-4xl font-bold text-indigo-600">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  suffix={stat.title === "Global Reach" ? "+" : ""}
                />
              </h3>
              <p className="text-lg text-gray-600 mt-2">{stat.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default AboutUs;
