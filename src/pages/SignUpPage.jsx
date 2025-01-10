import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    cnic: '',
    mobileNumber: '',
    designation: '',
    supervisor: '',
  });

  const navigate = useNavigate();

  // Handle sign-up form data changes
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle sign-up form submission
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Logic for sign-up (e.g., sending data to an API)
    console.log(formData);
    alert('Sign-Up Successful!');
    navigate('/login'); // Redirect to login page after sign-up
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="shadow-lg p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4" style={styles.heading}>Sign Up</h2>
        <Form onSubmit={handleSignUpSubmit}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleSignUpChange}
              required
              style={styles.input}
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
              required
              style={styles.input}
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
              required
              style={styles.input}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="designation">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter designation"
              name="designation"
              value={formData.designation}
              onChange={handleSignUpChange}
              required
              style={styles.input}
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
              required
              style={styles.input}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={styles.submitBtn}
            className="w-100"
          >
            Sign Up
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

const styles = {
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#004614',
    textTransform: 'uppercase',
    marginBottom: '30px',
  },
  input: {
    borderRadius: '8px',
    padding: '12px',
    borderColor: '#ddd',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
  },
  submitBtn: {
    backgroundColor: '#004614',
    borderColor: '#004614',
    fontSize: '1.1rem',
    padding: '12px',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
};

export default SignUpPage;
