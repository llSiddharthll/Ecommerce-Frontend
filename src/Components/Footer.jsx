// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 py-10 px-5 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <h2 className="text-xl font-bold text-black mb-4">ShopEase</h2>
          <p className="text-sm opacity-70">
            Discover the best products at unbeatable prices. ShopEase is your
            one-stop destination for quality shopping.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                alt=""
                href="https://google.com"
                className="hover:text-black hover:bg-[#00000020] hover:p-2 hover:px-4 hover:rounded-md transition-all duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                alt=""
                href="https://google.com"
                className="hover:text-black hover:bg-[#00000020] hover:p-2 hover:px-4 hover:rounded-md transition-all duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                alt=""
                href="https://google.com"
                className="hover:text-black hover:bg-[#00000020] hover:p-2 hover:px-4 hover:rounded-md transition-all duration-200"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                alt=""
                href="https://google.com"
                className="hover:text-black hover:bg-[#00000020] hover:p-2 hover:px-4 hover:rounded-md transition-all duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">
            Customer Support
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                alt=""
                href="https://google.com"
                className="hover:text-black hover:bg-[#00000020] hover:p-2 hover:px-4 hover:rounded-md transition-all duration-200"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                alt=""
                href="https://google.com"
                className="hover:text-black hover:bg-[#00000020] hover:p-2 hover:px-4 hover:rounded-md transition-all duration-200"
              >
                Shipping & Returns
              </a>
            </li>
            <li>
              <a
                alt=""
                href="https://google.com"
                className="hover:text-black hover:bg-[#00000020] hover:p-2 hover:px-4 hover:rounded-md transition-all duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                alt=""
                href="https://google.com"
                className="hover:text-black hover:bg-[#00000020] hover:p-2 hover:px-4 hover:rounded-md transition-all duration-200"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Contact Us</h3>
          <p className="text-sm mb-2">
            <span className="font-semibold">Email:</span> support@shopease.com
          </p>
          <p className="text-sm mb-2">
            <span className="font-semibold">Phone:</span> +1 123-456-7890
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Icons */}
            <a
              alt=""
              href="https://google.com"
              className="hover:text-black hover:bg-[#00000020] hover:p-2 hover:px-4 hover:rounded-md transition-all duration-200"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a
              alt=""
              href="https://google.com"
              className="hover:text-black hover:bg-[#00000020] hover:p-2 hover:px-4 hover:rounded-md transition-all duration-200"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a
              alt=""
              href="https://google.com"
              className="hover:text-black hover:bg-[#00000020] hover:p-2 hover:px-4 hover:rounded-md transition-all duration-200"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a
              alt=""
              href="https://google.com"
              className="hover:text-black hover:bg-[#00000020] hover:p-2 hover:px-4 hover:rounded-md transition-all duration-200"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} ShopEase. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
