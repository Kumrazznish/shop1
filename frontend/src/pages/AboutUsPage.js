import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">About Us</h1>
      <p className="mb-5">Welcome to our interactive About Us page! We are excited to share our story and journey with you.</p>
      <Link to="/" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark">
        Back to Home
      </Link>
    </div>
  );
};

export default AboutUsPage;
