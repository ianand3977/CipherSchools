import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../utils/api';
import styles from './SignupPage.module.css';  // Importing the Signup CSS module

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
    <div className={styles.signupContainerWrapper}>
      <div className={styles.signupContainer}>
        <h2 className={styles.signupHeading}>Signup</h2>
        {message && <p className={styles.signupMessage}>{message}</p>}
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.signupInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="email"
            className={styles.signupInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            className={styles.signupInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" className={styles.signupButton}>Signup</button>
        </form>
        <p className={styles.signupPrompt}>
          Already have an account? <a href="/login" className={styles.signupLink}>Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
