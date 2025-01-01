import React from 'react';

function Footer() {
  return (
    <footer className="pt-10 md:pt-12 text-white py-10">
        <NewsletterSubscribe />
      <div className="container mx-auto pt-20 md:px-12">
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 font-serif">Zerah-Luxury</h2>
            <p className="text-sm">
              Welcome to Zerah-Luxury, where fashion meets individuality. Our journey began with a simple idea: to create clothing that not only looks good but feels good. We believe that every piece of clothing tells a story, and we are here to help you write yours.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm">
              Founded in 2024, Zerah-Luxury has grown from a passion project into a community-driven brand cherished by fashion enthusiasts worldwide. Our designs are inspired by the perfect blend of tradition and innovation, capturing the spirit of those who dare to stand out.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm">
              Email: support@zerah-luxury.com<br />
              Phone: +1 (234) 567-890<br />
              Address: 123 Fashion Ave, New York, NY 10001
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 Zerah-Luxury. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;




function NewsletterSubscribe() {
  return (
    <div className="bg-gray-800 text-white py-10 md:py-20 my-4">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-sm mb-6">
          Stay updated with the latest news and exclusive offers from Zerah-Luxury.
        </p>
        <form className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full md:w-1/2 rounded-md text-gray-800"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}