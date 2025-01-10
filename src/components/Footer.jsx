import React from 'react';
import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-custom-green text-white py-5">
      <Container>
      <Row className="text-center text-md-left d-flex align-items-start">
  {/* Contact Information Section */}
  <Col md={3} className="mb-4" style={{ textAlign: 'left' }}>
    <h5 className="text-uppercase font-weight-bold" style={{ fontSize: '1.2rem', textAlign: 'left' }}>Contact Information</h5>
    <p style={{ fontSize: '0.8rem' }}>Email: <a href="mailto:contact@dcoportal.com" className="text-white">contact@dcoportal.com</a></p>
    <p style={{ fontSize: '0.8rem' }}>Phone: <a href="tel:+123456789" className="text-white">+123 456 789</a></p>
  </Col>

   {/* Map Section */}
   <Col md={3} className="mb-3">
            <h5 className="text-uppercase font-weight-bold footer-heading">Location</h5>
            <div className="map-container">
              <iframe
                title="Location Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/search/Mianwali+District+Coordination+Office+Portal+(DCOP)/@32.5837646,71.542932,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                allowFullScreen
              ></iframe>
            </div>
          </Col>

  {/* Quick Links Section */}
  <Col md={3} className="mb-4">
    <h5 className="text-uppercase font-weight-bold" style={{ fontSize: '1.2rem' }}>Quick Links</h5>
    <Nav className="flex-column">
      <NavLink href="/privacy-policy" className="text-white hover-underline-animation" style={{ fontSize: '0.8rem' }}>Privacy Policy</NavLink>
      <NavLink href="/terms-of-service" className="text-white hover-underline-animation" style={{ fontSize: '0.8rem' }}>Terms of Service</NavLink>
    </Nav>
  </Col>

  {/* Social Media Section */}
  <Col md={3} className="mb-4">
    <h5 className="text-uppercase font-weight-bold" style={{ fontSize: '1.2rem' }}>Follow Us</h5>
    <Nav className="social-links flex-column">
      <Nav.Link href="https://facebook.com" target="_blank" className="text-white mb-2" style={{ fontSize: '0.8rem' }}>
        <FaFacebook size={18} className="hover-icon" /> Facebook
      </Nav.Link>
      <Nav.Link href="https://twitter.com" target="_blank" className="text-white mb-2" style={{ fontSize: '0.8rem' }}>
        <FaTwitter size={18} className="hover-icon" /> Twitter
      </Nav.Link>
      <Nav.Link href="https://linkedin.com" target="_blank" className="text-white" style={{ fontSize: '0.8rem' }}>
        <FaLinkedin size={18} className="hover-icon" /> LinkedIn
      </Nav.Link>
    </Nav>
  </Col>
</Row>


        {/* Copyright Section */}
        <Row className="text-center">
          <Col>
            <p className="text-red" style={{ fontSize: '1rem', marginBottom: '-25px' }}>
            <span style={{ color: '#fff' }}> &copy; </span> 2024 District Coordination Office. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
