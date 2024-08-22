import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api'; // Import your axios instance
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [tests, setTests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data after login
    const fetchUserData = async () => {
      try {
        const response = await API.get('/api/auth/user');
        setUserName(response.data.name);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Fetch all test details
    const fetchAllTests = async () => {
      try {
        const response = await API.get('/api/test/tests');
        setTests(response.data); // Store the list of tests in state
      } catch (error) {
        console.error('Error fetching tests:', error);
      }
    };

    fetchUserData();
    fetchAllTests();
  }, []);

  const handleStartTest = (testId) => {
    navigate(`/environment-check/${testId}`); // Pass the test ID to the environment check page
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-greeting">Hello, {userName}!</h1>
        <button className="dashboard-logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <h2 className="dashboard-subheading">Available Tests:</h2>
      <ul className="dashboard-test-list">
        {tests.map(test => (
          <li key={test._id} className="dashboard-test-item">
            <h3 className="dashboard-test-title">{test.title}</h3>
            <p className="dashboard-test-description">{test.description}</p>
            <p className="dashboard-test-info">
              {test.questions.length} Questions | {test.duration} Minutes | {test.marks} Marks
            </p>
            <button 
              className="dashboard-start-button"
              onClick={() => handleStartTest(test._id)}>
              Start Test
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
