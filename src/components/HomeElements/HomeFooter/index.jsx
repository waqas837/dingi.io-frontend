"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Users,
  HeadphonesIcon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const HomeFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-[#0B0F15] text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <img src="/ddd.webp" alt="Dingi" className="h-12 mb-4" />
            <hr className="border-gray-800 my-4" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/track" className="hover:text-blue-400">
                  Track
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-blue-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Polices */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Polices</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy-policy" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-blue-400">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="/shipping-policy" className="hover:text-blue-400">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="hover:text-blue-400">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Description and Newsletter */}
          <div>
            <p className="mb-6 text-sm text-gray-300">
              Discover our range of products crafted for all your needs, from
              the latest tech to timeless fashion. Enjoy seamless shopping with
              24/7 customer support and free shipping on order
            </p>

            <div>
              <h4 className="text-base mb-3">Stay in the loop. No spam</h4>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Customer Service Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <details className="group cursor-pointer">
            <summary className="flex items-center space-x-3 text-lg font-medium">
              <HeadphonesIcon className="w-5 h-5" />
              <span>Customer Service</span>
              <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-4 pl-8 space-y-3 text-sm text-gray-300">
              <p>
                While we strive to respond to every email or chat 24/7, we do
                have official office hours.
              </p>
              <p>
                <span className="font-medium text-white">
                  Customer Service:
                </span>{" "}
                Monday - Friday: 9:00 AM to 5:00 PM
              </p>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@dingi.io</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 618 988 0690</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  30 North Gould Street, Sheridan 82801, Wyoming, USA.
                </span>
              </div>
            </div>
          </details>
        </div>

        {/* Follow Us Section */}
        <div className="mt-6 border-t border-gray-800 pt-6">
          <details className="group cursor-pointer">
            <summary className="flex items-center space-x-3 text-lg font-medium">
              <Users className="w-5 h-5" />
              <span>Follow Us</span>
              <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-4 pl-8 space-y-4">
              <p className="text-sm text-gray-300">
                Connect with us on social media for the latest updates and
                exclusive offers.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </details>
        </div>

        {/* Copyright and Payment Methods */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="text-sm text-center text-gray-400 mb-6">
            © 2024 Dingi Inc
          </div>

          {/* Payment Methods */}
          <div className="flex justify-center space-x-4 flex-wrap">
            <svg
              className="h-6"
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="pi-american_express"
            >
              <title id="pi-american_express">American Express</title>
              <g fill="none">
                <path
                  fill="#000"
                  d="M35,0H3C1.3,0,0,1.3,0,3v18c0,1.7,1.4,3,3,3h32c1.7,0,3-1.3,3-3V3C38,1.3,36.6,0,35,0z"
                />
                <path
                  fill="#006FCF"
                  d="M35,1c1.1,0,2,0.9,2,2v18c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V3c0-1.1,0.9-2,2-2H35"
                />
                <path
                  fill="#FFF"
                  d="M8.971,10.268l0.774-1.876H12.6v1.876H8.971z M12.6,12.116v1.875H8.971l-0.774-1.875H12.6z M21.137,10.268h3.654v1.876h-3.654V10.268z M24.791,12.116v1.875h-3.654v-1.875H24.791z M17.483,10.268l0.774-1.876h2.855v1.876H17.483z M21.137,8.392v1.876h-2.855l-0.774-1.876H21.137z"
                />
              </g>
            </svg>

            <svg
              className="h-6"
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="pi-apple_pay"
            >
              <title id="pi-apple_pay">Apple Pay</title>
              <path
                fill="#000"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              />
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              />
              <path
                fill="#000"
                d="M23.5 3.5c2.2 0 3.7 1.2 3.7 3.2 0 2.1-1.5 3.2-3.7 3.2h-2.2v-6.4h2.2zm-1.2 5.4h1.2c1.5 0 2.4-.8 2.4-2.2s-.9-2.2-2.4-2.2h-1.2v4.4zm5.1-5.4H29v6.4h-1.6v-6.4zm4.9 0h1.6l2.5 4.1h.1V3.5h1.5v6.4h-1.6l-2.5-4.1h-.1v4.1h-1.5V3.5z"
              />
            </svg>

            <svg
              className="h-6"
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="pi-google_pay"
            >
              <title id="pi-google_pay">Google Pay</title>
              <path
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                fill="#000"
                opacity=".07"
              />
              <path
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                fill="#FFF"
              />
              <path
                d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.146.374.883.883 0 0 0-.276.65zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z"
                fill="#5F6368"
              />
              <path
                d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z"
                fill="#4285F4"
              />
              <path
                d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z"
                fill="#34A853"
              />
              <path
                d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z"
                fill="#FBBC04"
              />
              <path
                d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z"
                fill="#EA4335"
              />
            </svg>

            <svg
              className="h-6"
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="pi-master"
            >
              <title id="pi-master">Mastercard</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              />
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              />
              <circle fill="#EB001B" cx="15" cy="12" r="7" />
              <circle fill="#F79E1B" cx="23" cy="12" r="7" />
              <path
                fill="#FF5F00"
                d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
              />
            </svg>

            <svg
              className="h-6"
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="pi-paypal"
            >
              <title id="pi-paypal">PayPal</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              />
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              />
              <path
                fill="#003087"
                d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
              />
              <path
                fill="#3086C8"
                d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
              />
              <path
                fill="#012169"
                d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"
              />
            </svg>

            <svg
              className="h-6"
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="pi-visa"
            >
              <title id="pi-visa">Visa</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              />
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              />
              <path
                d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                fill="#142688"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
