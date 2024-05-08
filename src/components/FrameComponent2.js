import React, { useState } from 'react';
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./FrameComponent1.css";

const FrameComponent = () => {
  // State to track expanded/collapsed status of each question
  const [expandedQuestions, setExpandedQuestions] = useState({});

  // Function to toggle the expanded/collapsed state of a question
  const toggleQuestion = (questionId) => {
    setExpandedQuestions(prevState => ({
     ...prevState,
      [questionId]: !prevState[questionId]
    }));
  };

  return (
    <div className="skill-selection-helper">
      <div className="union-wrapper">
        <img className="union-icon" loading="lazy" alt="" src="/union.svg" />
      </div>
      <div className="frame-parent10">
        <div className="frame-parent11">
          <div className="whats-the-guarantee-that-i-wi-parent">
            <div className="whats-the-guarantee-container">
              <p className="whats-the-guarantee">
                What’s the guarantee that I will be satisfied
              </p>
              <p className="with-the-hired">with the hired talent?</p>
              {/* Toggle button and conditional rendering */}
              <button onClick={() => toggleQuestion("guarantee")} style={{border: 'none'}}>
                {expandedQuestions["guarantee"] ? "-" : "+"}
              </button>
              {expandedQuestions["guarantee"] && (
                <div>
                  {/* Improved answer content */}
                  <p className="if-unhappy-with">We strive to ensure satisfaction with our talent. If you're unhappy, we work closely with you to address concerns and offer revisions until you're satisfied.</p>
                </div>
              )}
            </div>
          </div>
          <div className="line-div" />
        </div>
        <div className="frame-parent12">
          <div className="whats-the-guarantee-that-i-wi-parent">
            <div className="whats-the-guarantee-container">
              <p className="whats-the-guarantee">
                Can I hire multiple talents at once?
              </p>
              <p className="with-the-hired">with the hired talent?</p>
              {/* Toggle button and conditional rendering */}
              <button onClick={() => toggleQuestion("multipleTalents")} style={{border: 'none'}}>
                {expandedQuestions["multipleTalents"] ? "-" : "+"}
              </button>
              {expandedQuestions["multipleTalents"] && (
                <div>
                  {/* Improved answer content */}
                  <p className="if-unhappy-with">Yes, you can hire multiple talents simultaneously for different projects, leveraging diverse skill sets to meet your needs effectively.</p>
                </div>
              )}
            </div>
          </div>
          <div className="line-div" />
        </div>
        <div className="frame-parent13">
          <div className="whats-the-guarantee-that-i-wi-parent">
            <div className="whats-the-guarantee-container">
              <p className="whats-the-guarantee">
                Who can help me pick the right skillset?
              </p>
              <p className="with-the-hired">with the hired talent?</p>
              {/* Toggle button and conditional rendering */}
              <button onClick={() => toggleQuestion("skillsetHelp")} style={{border: 'none'}}>
                {expandedQuestions["skillsetHelp"] ? "-" : "+"}
              </button>
              {expandedQuestions["skillsetHelp"] && (
                <div>
                  {/* Improved answer content */}
                  <p className="if-unhappy-with">Our platform offers guidance in selecting the ideal skill set. Our support team can also assist you in making the best choice based on your project requirements.</p>
                </div>
              )}
            </div>
          </div>
          <div className="line-div" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
