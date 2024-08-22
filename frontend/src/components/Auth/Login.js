import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/api';
import styles from './LoginPage.module.css';  // Importing the CSS module

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
    <div className={styles.loginContainerWrapper}>
      <div className={styles.loginContainer}>
        <h2 className={styles.loginHeading}>Login</h2>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.loginInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            className={styles.loginInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
        {error && <p className={styles.loginErrorMessage}>{error}</p>}
        <p className={styles.loginSignupPrompt}>
          Don't have an account yet? <a href="/signup" className={styles.loginSignupLink}>Create Account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
