import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/api';
import './LoginPage.css';  // Importing the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await loginUser({ email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');  // Redirect to the dashboard after successful login
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Login failed.');
      } else if (err.request) {
        setError('No response from server. Please try again later.');
      } else {
        setError('An error occurred during login.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      {error && <p className="login-error-message">{error}</p>}
      <p className="login-signup-prompt">
        Don't have an account yet? <a href="/signup" className="login-signup-link">Create Account</a>
      </p>
    </div>
  );
}

export default Login;
