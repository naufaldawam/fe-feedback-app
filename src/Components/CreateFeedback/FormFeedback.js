import React, { useState } from 'react';
import axios from 'axios';
import '../CreateFeedback/FormFeedback.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    sender: '',
    valuetext: '',
    type: 'feedback',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/feedback', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sender">Sender:</label>
        <input
          type="text"
          id="sender"
          name="sender"
          value={formData.sender}
          onChange={handleChange}
          required
        />

        <label htmlFor="valuetext">Feedback Text:</label>
        <textarea
          id="valuetext"
          name="valuetext"
          rows="4"
          value={formData.valuetext}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="type">Type:</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="feedback">Feedback</option>
          {/* Anda dapat menambahkan lebih banyak opsi di sini jika diperlukan */}
        </select>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
