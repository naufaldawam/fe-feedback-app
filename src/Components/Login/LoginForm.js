import React, { useState } from 'react';
import '../Login/LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lakukan logika untuk mengirim data login ke server atau melakukan validasi di sini
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <div>
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;