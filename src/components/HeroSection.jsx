import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';  // Import the Button component
import AuthModal from './AuthModal'; // Make sure the path to AuthModal is correct
import img1 from '../images/bodyimg2.jpg';

function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // State to trigger fade-in animation
  const [isVisible, setIsVisible] = useState(false);

  // Set visibility to true after the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        height: '832px',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '122px',
      }}
    >
      {/* Background Image with Opacity using Pseudo-element */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img1}) no-repeat center center/cover`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          opacity: 0.9,  // Opacity applied only to the background image
          zIndex: '-1',  // Send the background to the back, so text is above
        }}
      ></div>

      {/* Content Section */}
      <div
        className="container"
        style={{
          animation: isVisible ? 'fadeIn 2s ease-out' : 'none', // Apply animation to the content only
        }}
      >
        {/* Title */}
        <h1 className="display-3" style={{ fontWeight: 'bold', fontSize: '3.5rem', textTransform: 'uppercase' }}>
          Welcome to the District Coordination <br /> Office Portal
        </h1>

        {/* Subtitle */}
        <p className="lead" style={{ textTransform: 'uppercase', paddingTop: '24px' }}>
          Streamlining Departmental Operations and Application Tracking
        </p>

        {/* CTA Buttons with padding of 12px between text and button */}
        <div className="d-flex justify-content-center" style={{ paddingTop: '24px' }}>
          <Link
            to="/login"
            style={{
              backgroundColor: '#004614',
              border: 'none',
              color: 'white',
              padding: '12px 24px', // Button padding
              fontSize: '1.25rem',
              textTransform: 'uppercase', // Capitalize the text on the button
            }}
            className="btn btn-lg mx-2 custom-btn"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            style={{
              backgroundColor: '#004614',
              border: 'none',
              color: 'white',
              padding: '12px 24px', // Button padding
              fontSize: '1.25rem',
              textTransform: 'uppercase', // Capitalize the text on the button
            }}
            className="btn btn-lg mx-2 custom-btn"
          >
            Sign up
          </Link>

          {/* Trigger the modal */}
          <Button
            variant="primary"
            style={{
              backgroundColor: '#004614',
              border: 'none',
              color: 'white',
              padding: '12px 24px', // Button padding
              fontSize: '1.25rem',
              textTransform: 'uppercase', // Capitalize the text on the button
            }}
            onClick={handleShow}
            className="mx-2 custom-btn"
          >
            Open Authentication Modal
          </Button>
        </div>
      </div>

      {/* AuthModal Component */}
      <AuthModal
        show={showModal}
        handleClose={handleClose}
        showLoginForm={showLoginForm}
        handleShowLoginForm={setShowLoginForm}
      />
    </section>
  );
}

export default HeroSection;
