import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
      <p className="mb-5">Feel free to reach out to us for any inquiries or assistance. We're here to help!</p>
      <Link to="/" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark">
        Back to Home
      </Link>
    </div>
  );
};

export default ContactPage;
