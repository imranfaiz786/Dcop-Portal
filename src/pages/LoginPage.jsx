import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Handle login form data changes
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Logic for authentication (e.g., calling an API to verify user credentials)
    console.log(loginData);
    alert('Login Successful!');
    navigate('/dashboard'); // Redirect to dashboard or home page after login
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4" style={styles.heading}>Login</h2>
        <Form onSubmit={handleLoginSubmit}>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
              style={styles.input}
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
            Login
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

export default LoginPage;
