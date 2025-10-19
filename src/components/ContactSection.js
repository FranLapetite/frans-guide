import React, { useState } from 'react';

const tourOptions = [
  { value: '', label: 'Select a tour (optional)' },
  { value: 'city', label: 'City Tour' },
  { value: 'museum', label: 'Museum Tour' },
  { value: 'food', label: 'Food Tour' },
  { value: 'custom', label: 'Custom Tour' },
];

function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    tour: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError('');
    setSuccess('');
  };

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return 'Please enter a valid email address.';
    if (!form.message.trim()) return 'Please enter your message.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setSuccess('');
      return;
    }
    setSubmitting(true);
    setError('');
    setSuccess('');
    setTimeout(() => {
      setSubmitting(false);
      setSuccess('Thank you for reaching out! I will get back to you soon.');
      setForm({ name: '', email: '', tour: '', message: '' });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f9f7f4 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 1.5rem',
        fontFamily: "'Poppins', sans-serif",
        color: '#4a5875',
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .form-container {
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.04);
          max-width: 600px;
          width: 100%;
          padding: 3rem 3.5rem;
          box-sizing: border-box;
          animation: fadeUp 1s ease forwards;
          font-family: 'Poppins', sans-serif;
          color: #4a5875;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.8rem;
          color: #1E2A5E;
          margin-bottom: 1.5rem;
          font-weight: 700;
          text-align: center;
        }
        label {
          display: block;
          width: 100%;
          margin-bottom: 1.25rem;
          font-weight: 600;
          color: #4a5875;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          user-select: none;
        }
        input[type="text"],
        input[type="email"],
        select,
        textarea {
          width: 100%;
          background: #f7f8fa;
          border: 1.5px solid transparent;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          color: #4a5875;
          transition: border-color 0.3s ease;
          resize: vertical;
          box-sizing: border-box;
        }
        input[type="text"]:focus,
        input[type="email"]:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: #1E2A5E;
          background: #f7f8fa;
        }
        input[type="text"]:hover,
        input[type="email"]:hover,
        select:hover,
        textarea:hover {
          background-color: #f2f3f5;
        }
        .form-error {
          color: #b33a3a;
          background: #f9d6d6;
          border-radius: 8px;
          padding: 0.6rem 1rem;
          margin-bottom: 1rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          box-shadow: inset 0 1px 3px rgba(179, 58, 58, 0.2);
          width: 100%;
          text-align: center;
        }
        .form-success {
          color: #1E2A5E;
          background: #e6e9f0;
          border-radius: 8px;
          padding: 0.6rem 1rem;
          margin-bottom: 1rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          box-shadow: none;
          width: 100%;
          text-align: center;
        }
        .cta-button {
          background: #1E2A5E;
          border: none;
          border-radius: 8px;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 700;
          padding: 0.85rem 2.2rem;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          font-family: 'Poppins', sans-serif;
          user-select: none;
          width: 100%;
          margin-top: 0.5rem;
          box-sizing: border-box;
          text-align: center;
          display: inline-block;
        }
        .cta-button:hover:not(:disabled) {
          background-color: #14204B;
          transform: translateY(-3px);
        }
        .cta-button:disabled {
          cursor: not-allowed;
          opacity: 0.7;
          background-color: #1E2A5E;
          transform: none;
        }
        .contact-info {
          max-width: 600px;
          width: 100%;
          margin-top: 2.5rem;
          font-family: 'Poppins', sans-serif;
          color: #4a5875;
          animation: fadeUp 1s ease forwards;
          animation-delay: 0.3s;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: center;
          user-select: none;
        }
        .contact-info p {
          font-size: 1rem;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
        .contact-info a {
          color: #4a5875;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
          font-family: 'Poppins', sans-serif;
        }
        .contact-info a:hover {
          color: #14204B;
          text-decoration: underline;
        }
        @media (max-width: 650px) {
          .form-container {
            padding: 2.5rem 2rem;
          }
        }
      `}</style>
      <div className="form-container">
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off" noValidate>
          <h2>Get in Touch</h2>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={submitting}
              autoComplete="off"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={submitting}
              autoComplete="off"
            />
          </label>
          <label>
            Tour
            <select
              name="tour"
              value={form.tour}
              onChange={handleChange}
              disabled={submitting}
            >
              {tourOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              disabled={submitting}
            />
          </label>
          {error && <div className="form-error" role="alert">{error}</div>}
          {success && <div className="form-success" role="status">{success}</div>}
          <button
            className="cta-button"
            type="submit"
            disabled={submitting}
            aria-busy={submitting}
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;