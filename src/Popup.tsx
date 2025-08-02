// src/popup/Popup.tsx
import React, { useState } from 'react';

const Popup = () => {
  const [name, setName] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [resumeLink, setResumeLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Data:', {
      name,
      jobDesc,
      resumeLink
    });
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '10px', width: '300px' }}>
      <h3>Job Referral Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        /><br /><br />
        <textarea
          placeholder="Job Description"
          value={jobDesc}
          onChange={e => setJobDesc(e.target.value)}
          required
        /><br /><br />
        <input
          type="url"
          placeholder="Resume Link"
          value={resumeLink}
          onChange={e => setResumeLink(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Popup;
