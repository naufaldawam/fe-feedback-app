import React, { useState } from 'react';
import axios from 'axios';
import '../GetAllFeedback/SeeFeedback.css';

const SeeFeedback = () => {
  const [formData, setFormData] = useState({
    sender: '',
    valuetext: '',
    type: 'feedback',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:3000/feedback', formData);
      console.log(response.data); // Response dari server (opsional)
      // Tambahkan logika atau feedback lain sesuai dengan respons dari server (jika diperlukan)
    } catch (error) {
      console.error(error); // Tangani kesalahan jika terjadi
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
      <h1>ini feedback untuk semua user (masih dipikirkan perlu atau tidak ,user bisa melihat saja)</h1>
    </div>
  );
};

export default SeeFeedback;
