import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
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
  
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit} className="form-control">
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
        </select>

        <button type="submit">Submit Feedback</button>
      </form>
      <div className="button-control">
        <button className="button-finished" onClick={() => navigate('/')}>selesai input</button>
        <button className="button-finished" onClick={() => navigate('/seefeedback')}>lihat all feedback</button>
      </div>
    </div>
  );
};

export default FeedbackForm;
