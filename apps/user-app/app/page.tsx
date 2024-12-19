import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-6">
              Simplify Your Payments, <br />
              Secure Your Finances.
            </h1>
            <p className="text-lg mb-6">
              Experience fast, secure, and hassle-free financial transactions
              with our platform.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg">
                Get Started
              </button>
              <button className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold">
                Learn More
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="mt-10 lg:mt-0">
            <img
              src="https://via.placeholder.com/500x400"
              alt="App mockup"
              className="w-full max-w-md mx-auto lg:max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <img
                src="https://via.placeholder.com/100"
                alt="Feature 1"
                className="w-16 h-16 mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Fast Transactions</h3>
              <p className="text-gray-600">
                Send and receive money in seconds with no delays.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <img
                src="https://via.placeholder.com/100"
                alt="Feature 2"
                className="w-16 h-16 mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Top-Notch Security</h3>
              <p className="text-gray-600">
                Your transactions are protected by advanced encryption.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <img
                src="https://via.placeholder.com/100"
                alt="Feature 3"
                className="w-16 h-16 mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Seamless Integration</h3>
              <p className="text-gray-600">
                Connect your bank accounts and manage finances effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">See It in Action</h2>
          <p className="text-lg mb-12">
            Watch how our platform makes payments and financial management a
            breeze.
          </p>
          <div className="relative w-full max-w-4xl mx-auto">
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="mb-8">
            Join thousands of users who trust our platform for their financial
            needs.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Project Name. All rights
            reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-blue-400 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
