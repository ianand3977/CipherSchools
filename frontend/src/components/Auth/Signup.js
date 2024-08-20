import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../utils/api';
import './SignupPage.css';  // Importing the Signup CSS file

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    console.log('Signup attempt:', { name, email, password });

    try {
      const response = await signupUser({ name, email, password });
      console.log('Signup successful:', response.data);
      setMessage(response.data.message);
    } catch (err) {
      if (err.response) {
        console.error('Signup failed - Server response:', err.response.data);
        console.error('Status code:', err.response.status);
        setMessage(err.response.data.message || 'Signup failed.');
      } else if (err.request) {
        console.error('Signup failed - No response received:', err.request);
        setMessage('No response from server. Please try again later.');
      } else {
        console.error('Signup failed - Error during request setup:', err.message);
        setMessage('An error occurred during signup.');
      }
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Signup</h2>
      {message && <p className="signup-message" style={{ color: 'green' }}>{message}</p>}
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="signup-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" className="signup-button">Signup</button>
      </form>
      <p className="signup-prompt">
        Already have an account? <a href="/login" className="signup-link">Login here</a>
      </p>
    </div>
  );
}

export default Signup;
