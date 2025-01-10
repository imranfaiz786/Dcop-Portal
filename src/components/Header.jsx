import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo/logo.png'; // Ensure the correct logo path

function Header({ userRole, isAuthenticated, onLogout }) {
  const [language, setLanguage] = useState('en'); // State for language toggle

  // Optionally, set the default language based on user's preference
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) setLanguage(storedLanguage);
  }, []);

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="py-3"
      style={{
        position: 'fixed', // Fix the header to the top
        top: 0,            // Align it at the top
        left: 0,           // Align it to the left
        right: 0,          // Ensure it spans the full width
        width: '100%',     // Take the full width of the viewport
        zIndex: 1000,      // Ensure it stays above other content
        backgroundColor: 'transparent', // Make the navbar background transparent
        boxShadow: '0 4px 2px -2px gray', // Optional: Add a shadow for better visibility
      }}
    >
      {/* Background with opacity using a separate div */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#fff', // Set the background color
          opacity: 0.5, // Apply opacity only to the background
          zIndex: '-1', // Place it behind the content of the navbar
        }}
      ></div>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo and portal name */}
        <Navbar.Brand href="/" className="d-flex align-items-center" style={{ marginLeft: '40px' }}>
          <img
            src={logo} // Correctly use the logo import
            alt="DCOP Portal Logo"
            style={{ height: '80px' }} // Adjust the height of the logo
            className="me-3"
          />
          <span style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>DCOP Portal</span>
        </Navbar.Brand>

        {/* Navbar links */}
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto d-flex align-items-center w-100">
            {/* Centering only HOME link */}
            <div className="d-flex justify-content-center w-100">
              <Nav.Item className="mx-3">
                <Link
                  to="/"
                  className="nav-link"
                  style={{
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    textTransform: 'uppercase',
                    color: '#004614',
                  }}
                >
                  home
                </Link>
              </Nav.Item>
            </div>

            {/* Role-specific links */}
            {userRole === 'Admin' && (
              <>
                <Nav.Item className="mx-3">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-3">
                  <Link className="nav-link" to="/application-management">
                    Application Management
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-3">
                  <Link className="nav-link" to="/reports">
                    Reports
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-3">
                  <Link className="nav-link" to="/user-management">
                    User Management
                  </Link>
                </Nav.Item>
              </>
            )}

            {userRole === 'DepartmentHead' && (
              <>
                <Nav.Item className="mx-3">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-3">
                  <Link className="nav-link" to="/application-management">
                    Application Management
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-3">
                  <Link className="nav-link" to="/report-submission">
                    Report Submission
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-3">
                  <Link className="nav-link" to="/performance-monitoring">
                    Performance Monitoring
                  </Link>
                </Nav.Item>
              </>
            )}

            {userRole === 'SubDepartmentUser' && (
              <>
                <Nav.Item className="mx-3">
                  <Link className="nav-link" to="/application-submission">
                    Application Submission
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-3">
                  <Link className="nav-link" to="/performance-monitoring">
                    Performance Monitoring
                  </Link>
                </Nav.Item>
              </>
            )}

            {userRole === 'Applicant' && (
              <>
                <Nav.Item className="mx-3">
                  <Link className="nav-link" to="/application-submission">
                    Application Submission
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-3">
                  <Link className="nav-link" to="/track-application">
                    Track Application Status
                  </Link>
                </Nav.Item>
              </>
            )}

            {/* Language Toggle */}
            {/* The Language Toggle component is removed as requested */}

            {/* Login/Logout Button */}
            {isAuthenticated ? (
              <NavDropdown title="Profile" id="navbar-profile-dropdown" className="mx-3">
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Item className="mx-3">
                <Link
                  to="/login"
                  className="btn btn-primary btn-sm"
                  style={{
                    backgroundColor: '#004614',
                    fontSize: '1.5rem',
                    padding: '8px 0px', // Adding padding to button
                    width: '140px',
                    marginRight: '40px',
                  }}
                >
                  Log in
                </Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;