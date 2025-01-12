import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-primary mb-5 text-center">
        About Us
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Welcome to our world of stationery! We are passionate about providing quality products to inspire creativity and organization.
      </p>

      {/* Interactive Section */}
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Our mission is to empower individuals, students, and professionals with premium-quality stationery that adds a touch of elegance and functionality to their workspaces. Whether you're a student taking notes, an artist creating masterpieces, or an office worker staying organized, we have something for you!
        </p>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-primary">Innovative Designs</h3>
            <p className="text-gray-600">
              Our stationery is designed with both aesthetics and functionality in mind, ensuring every piece brings joy to your day-to-day activities.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-primary">Eco-Friendly Products</h3>
            <p className="text-gray-600">
              We are committed to sustainability, offering eco-friendly materials to help protect our planet while you create, work, or study.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Fun Section */}
      <div className="mt-10 bg-gray-100 shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">Did You Know?</h2>
        <p className="text-gray-700 mb-4">
          The first pencil was invented in 1795, and it revolutionized the way people wrote and drew. Imagine how far we've come with our stationery products today!
        </p>
        <button
          onClick={() => alert("Thank you for learning more about stationery with us!")}
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark"
        >
          Fun Fact!
        </button>
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-10">
        <Link to="/" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AboutUsPage;
