import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Success.css";

const Success = () => {
 const [seconds, setSeconds] = useState(5); // Initialize the counter state
  // Use the useHistory hook to get access to the history instance
 const navigate = useNavigate();
 useEffect(() => {
    // Set up the interval to decrement the counter every second
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    // Set up the timeout to redirect to the homepage after 5 seconds
    const timeoutId = setTimeout(() => {
      navigate('/'); // Redirect to the homepage
    }, 5000);

    // Cleanup function to clear the interval and timeout when the component unmounts
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
 }, [history]); // Dependency array includes history to ensure the effect runs with the updated history instance

 return (
    <div className="success">
      <img className="path70-icon2" alt="" src="/path70.svg" />
      <img className="image-4-icon3" alt="" src="/image-4@2x.png" />
      <img className="image-32315-icon3" alt="" src="/image-32315@2x.png" />
      <img className="image-32510-icon3" alt="" src="/image-32510@2x.png" />
      <section className="frame-parent1">
        <img
          className="frame-item"
          loading="lazy"
          alt=""
          src="/frame-1261155216.svg"
        />
        <div className="frame-wrapper">
          <div className="frame-parent2">
            <div className="tick-round-parent">
              <div className="tick-round">
                <img
                 className="frame-icon"
                 loading="lazy"
                 alt=""
                 src="/frame.svg"
                />
              </div>
              <div className="success-submitted-parent">
                <h2 className="success-submitted">Success Submitted</h2>
                <div className="congratulations-parent">
                 <h1 className="congratulations">Congratulations</h1>
                 <h3 className="your-request-has">
                    Your request has been successfully submitted to us. We will
                    validate your information and reach out to your shortly with
                    updates
                 </h3>
                </div>
              </div>
            </div>
            <footer className="redirecting-you-to-container">
              <span>
                <span>Redirecting you to Homepage in</span>
                <span className="span">{` `}</span>
              </span>
              <b className="seconds">{seconds} Seconds</b> {/* Display the counter */}
            </footer>
          </div>
        </div>
      </section>
      <img className="success-child" alt="" src="/group-1171281438@2x.png" />
      <div className="mask-group-container">
        <img className="mask-group-icon1" alt="" />
      </div>
    </div>
 );
};

export default Success;
