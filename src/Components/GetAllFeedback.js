import React, { useEffect, useState } from 'react';

const GetAllFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('http://localhost:3000/feedbacks');
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div>
      <h2>Feedbacks</h2>
      {feedbacks.map((feedback) => (
        <div key={feedback.id}>
          <p>Name: {feedback.sender}</p>
          <p>Comment: {feedback.valuetext}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default GetAllFeedback;
