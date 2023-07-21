import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Login/LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const [loggedInUser, setLoggedInUser] = useState(null);
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;

      const user = users.find((user) => user.username === username && user.password === password);

      if (user) {
        // console.log('nama username', user.username);
        alert('Login berhasil!');
        // setLoggedInUser(user.username);
        // console.log(setLoggedInUser);
        history('/');
      } else {
        alert('Login gagal. Periksa username dan password Anda.');
      }
      // console.log('datanya',users);
      // setErrorMessage('');
    } 
    catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Terjadi kesalahan saat melakukan login.');
      }
    }
  };
;

  return (
    <div className="space">
      <div className="container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
        <h1>Form Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
