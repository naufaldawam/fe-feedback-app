import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../GetAllFeedbackInput/SeeFeedbackForUser.css';

const SeeFeedbackForUser = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fungsi untuk mengambil data dari server
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/feedbacks');
        setFeedbacks(response.data); // Mengatur data feedback yang diambil dari server ke state feedbacks
      } catch (error) {
        console.error(error); // Tangani kesalahan jika terjadi
      }
    };

    fetchFeedbacks(); // Panggil fungsi fetchFeedbacks saat komponen dimuat
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
