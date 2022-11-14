import React, { useState } from 'react';

const FORM_END =
  'https://public.herotofu.com/v1/2ef75930-63c6-11ed-891b-4f350712a1f0';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        {/* SUBMISSION SUCCESS MESSAGE */}
        <div className='message-success'>
          Thank you! Your Message Has Been Sent
        </div>
      </>
    );
  }

  return (
    <div className='form-container'>
      <h3>Contact</h3>
      <form
        action={FORM_END}
        id='contact-form'
        onSubmit={handleSubmit}
        method='POST'
        target='_blank'
      >
        <div className='label-input'>
          <label>
            <input placeholder='Name' type='text' id='name' name='name' />
          </label>
        </div>
        <div className='label-input'>
          <label>
            <input placeholder='Email' type='email' id='email' name='email' />
          </label>
        </div>
        <div className='label-input'>
          <label>
            <input
              placeholder='Subject'
              type='text'
              id='subject'
              name='subject'
            />
          </label>
        </div>
        <div className='label-input'>
          <label>
            <textarea placeholder='Send Message' id='message' name='message' />
          </label>
        </div>
        <button className='primary submit' type='submit' value='Submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
