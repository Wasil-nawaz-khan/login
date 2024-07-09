// src/LoginForm.js
import React, { useState } from 'react';
// import './LoginForm.css'; // Create this file for custom styles
import './App.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (email === '' || password === '') {
      setErrorMessage('All fields are required.');
      return;
    }
    
    // Simulate a login
    if (email === 'user@example.com' && password === 'password') {
      alert('Login successful!');
      // Here you can redirect the user to another page or perform other actions
    } else {
      setErrorMessage('Invalid credentials.');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
