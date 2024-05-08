import React, { useState } from 'react';
import { TextField, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

import "./FormField.css";

const FormField = () => {
 const navigate = useNavigate();
 const [email, setEmail] = useState('');
 const [errorMessage, setErrorMessage] = useState('');

 const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
    } else {
      setErrorMessage('');
      // Here you can handle the form submission, e.g., send the data to a server
      console.log('Form submitted with email:', email);
      navigate('/success'); // Navigate to the success page only if the form is valid
    }
 };

 const handleCloseClick = () => {
  navigate('/');
};

 return (
    <div className="form-field-empty">
      <img className="path70-icon3" alt="" src="/path70.svg" />
      <img className="image-4-icon4" alt="" src="/image-4@2x.png" />
      <img className="image-32315-icon4" alt="" src="/image-32315@2x.png" />
      <img className="image-32510-icon4" alt="" src="/image-32510@2x.png" />
      <section className="combiner">
        <div className="frame-parent3">
          <img
            className="frame-inner"
            loading="lazy"
            alt=""
            src="/frame-1261155216.svg"
          />
          <div className="form-container1">
          <div className="flex cursor-pointer items-center justify-center text-3xl text-white caret-transparent">
  <div className="group relative inline-flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 font-medium shadow-md md:h-20 md:w-20" onClick={handleCloseClick}>
    <span className="ease absolute z-10 flex h-full w-full translate-y-full items-center justify-center rounded-full bg-[#d1b98a] text-white duration-300 group-hover:translate-y-0"></span>
    <div className="absolute z-50 flex h-full w-full items-center justify-center text-[#f6f2f2] group-hover:text-white">
      <svg height="35px" width="33px" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <path fill="black" d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"></path>
      </svg>
    </div>
  </div>
</div>

          </div>
        
        </div>
        <div className="side-panel">
          <div className="form-panel-parent">
            <div className="form-panel">
              <h2 className="registration-form1">Registration Form</h2>
              <h1 className="start-your-success1">
                Start your success Journey here!
              </h1>
            </div>
            <form className="input-area" onSubmit={handleSubmit}>
              <div className="input-field-labels">
                <TextField
                 className="input-labels"
                 placeholder="Enter your name"
                 variant="outlined"
                 sx={{
                    "& fieldset": { borderColor: "rgba(0, 0, 0, 0.02)" },
                    "& .MuiInputBase-root": {
                      height: "75px",
                      backgroundColor: "#efefef",
                      borderRadius: "64px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": { color: "#827a7a" },
                 }}
                />
                <TextField
                 className="input-labels1"
                 placeholder="Enter your email"
                 variant="outlined"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 error={!!errorMessage}
                 helperText={errorMessage}
                 sx={{
                    "& fieldset": { borderColor: "rgba(0, 0, 0, 0.02)" },
                    "& .MuiInputBase-root": {
                      height: "75px",
                      backgroundColor: "#efefef",
                      borderRadius: "64px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": { color: "#827a7a" },
                 }}
                />
              </div>
              <Button
                className="submit-button-area1"
                disableElevation={true}
                variant="contained"
                sx={{
                 textTransform: "none",
                 color: "#fff",
                 fontSize: "18",
                 background: "linear-gradient(97.55deg, #1c1c1c, #454444)",
                 borderRadius: "107.05555725097656px",
                 "&:hover": {
                  background: "linear-gradient(97.55deg, #4E4E4E, #4E4E4E)",
                },
                 height: 77,
                }}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
      <img
        className="form-field-empty-child"
        alt=""
        src="/group-1171281438@2x.png"
      />
      <div className="background">
        <img className="mask-group-icon2" alt="" />
      </div>
    </div>
 );
};

export default FormField;
