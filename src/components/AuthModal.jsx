import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AuthModal({ show, handleClose, showLoginForm, handleShowLoginForm }) {
  const [formData, setFormData] = useState({
    fullName: '',
    cnic: '',
    mobileNumber: '',
    designation: '',
    supervisor: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // Handling form changes for sign-up
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handling form changes for login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Handle Sign-Up form submission
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Sign-Up Successful!');
    handleClose();
  };

  // Handle Login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    alert('Login Successful!');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{showLoginForm ? 'Login' : 'Sign Up'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showLoginForm ? (
          // Login Form
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{backgroundColor: '#004614'}}>
              Login
            </Button>

            <div className="mt-3">
              <span onClick={() => handleShowLoginForm(false)} style={{ cursor: 'pointer' }}>
                Don't have an account? Sign Up
              </span>
            </div>
          </Form>
        ) : (
          // Sign-Up Form
          <Form onSubmit={handleSignUpSubmit}>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleSignUpChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cnic">
              <Form.Label>CNIC</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter CNIC"
                name="cnic"
                value={formData.cnic}
                onChange={handleSignUpChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter mobile number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleSignUpChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="designation">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your designation"
                name="designation"
                value={formData.designation}
                onChange={handleSignUpChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="supervisor">
              <Form.Label>Supervisor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter supervisor's name"
                name="supervisor"
                value={formData.supervisor}
                onChange={handleSignUpChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{backgroundColor: '#004614'}}>
              Sign Up
            </Button>

            <div className="mt-3">
              <span onClick={() => handleShowLoginForm(true)} style={{ cursor: 'pointer' }}>
                Already have an account? Login
              </span>
            </div>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default AuthModal;
