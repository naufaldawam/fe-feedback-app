import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../GetAllFeedbackInput/SeeFeedbackForUser.css';

const SeeFeedbackForUser = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/feedbacks');
        setFeedbacks(response.data);
        console.log('datanya', response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeedbacks(); 
  }, []);

  return (
    <div className="feedback-list">
      <h1>Feedback untuk semua user</h1>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            <strong>Sender: {feedback.sender}</strong>
            <p>Feedback Text: {feedback.valuetext}</p>
            <p>Type: {feedback.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeeFeedbackForUser;
