import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-8 flex flex-wrap">
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sem et nibh semper blandit. In hac habitasse platea dictumst.
          </p>
          <p>
            <a href="#" className="text-gray-300 hover:text-white">Read More</a>
          </p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">Shop</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
          <h3 className="text-lg font-bold mb-4">Subscribe</h3>
          <p className="mb-4">
            Get the latest news and updates from our store.
          </p>
          <form>
            <div className="mb-4">
              <input type="text" placeholder="Enter your email" className="w-full p-2 rounded-lg text-gray-800" />
            </div>
            <div>
              <button type="submit" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-white">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-square mr-2"></i> Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter-square mr-2"></i> Twitter
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram-square mr-2"></i> Instagram
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-linkedin mr-2"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-700 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-300">© 2022 Book Ecommerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;