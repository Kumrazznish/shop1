import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // null, "success", "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null); // Reset form status

    try {
      const response = await fetch('https://formspree.io/f/myzzlada', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: new URLSearchParams(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
      <p className="mb-5">Feel free to reach out to us for any inquiries. We will get back to you as soon as possible!</p>

      <form onSubmit={handleSubmit} method="POST">
        <div className="mb-3">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        {formStatus === 'success' && (
          <p className="text-green-500 mb-3">Thank you for reaching out! We will get back to you soon.</p>
        )}
        {formStatus === 'error' && (
          <p className="text-red-500 mb-3">Oops! Something went wrong. Please try again later.</p>
        )}

        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Send Message'}
        </button>
      </form>
      <div className="text-center mt-10">
              <Link to="/" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark">
                Back to Home
              </Link>
            </div>
    </div>
  );
};

export default ContactPage;
