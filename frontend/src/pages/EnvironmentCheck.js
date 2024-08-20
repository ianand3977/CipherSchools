import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EnvironmentCheck.css'; // Import the CSS file

const EnvironmentCheck = () => {
  const [error, setError] = useState(null);
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const { testId } = useParams(); // Get the testId from the route params

  useEffect(() => {
    const requestPermissions = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }

        setCameraAllowed(true); // Set camera allowed to true if permission is granted

        // Clean up: Stop the video stream when the component unmounts
        return () => {
          mediaStream.getTracks().forEach(track => track.stop());
        };
      } catch (err) {
        setError('Camera permission denied. Test cannot be started.');
        setCameraAllowed(false); // Set camera allowed to false if permission is denied
      }
    };

    requestPermissions();
  }, []); // Removed `stream` from dependencies

  const handleProceed = () => {
    if (cameraAllowed) {
      navigate(`/test/${testId}`); // Navigate to the test interface with the test ID
    } else {
      setError('Please allow camera permission to proceed.');
    }
  };

  return (
    <div className="environment-check-container">
      <h2 className="environment-check-heading">Environment Check</h2>
      {error ? (
        <p className="environment-check-error">{error}</p>
      ) : (
        <div className="camera-preview-container">
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            width="320" 
            height="240" 
            className="camera-preview"
          />
          <p className="camera-instructions">Please ensure that your camera is functioning properly.</p>
        </div>
      )}

      <div className="test-instructions">
        <h3>Test Instructions</h3>
        <ul>
          <li>You can navigate between the questions.</li>
          <li>Sit in a well-lit environment.</li>
          <li>Uphold honesty and integrity while taking the test.</li>
          <li>Do not switch windows during the test.</li>
        </ul>
      </div>
      
      <br />
      <button 
        className="proceed-button" 
        onClick={handleProceed} 
        disabled={!cameraAllowed}>
        Proceed
      </button>
    </div>
  );
};

export default EnvironmentCheck;
