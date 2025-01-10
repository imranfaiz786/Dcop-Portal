import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap'; // Import Bootstrap components

function Dashboard({ userRole }) {
  return (
    <section className="py-5">
      <div className="container" style={{ marginBottom: '20px', marginTop: '20px' }}>
        <h2 className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '2.5rem', textTransform: 'uppercase', color: '#004614' }}>
          Dashboard Preview
        </h2>

        <div className="row">
          {/* Admin (DCO) Dashboard Preview */}
          {userRole === 'Admin' && (
            <div className="col-md-3 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Admin Dashboard</Card.Title>
                  <Card.Text>Quick links to monitor applications, assign tasks, and view performance reports.</Card.Text>
                  <ul>
                    <li><strong>Monitor Applications</strong></li>
                    <li><strong>Assign Tasks</strong></li>
                    <li><strong>View Performance Reports</strong></li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          )}

          {/* Department Head Dashboard Preview */}
          {userRole === 'DepartmentHead' && (
            <div className="col-md-3 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Department Head Dashboard</Card.Title>
                  <Card.Text>View performance metrics, track applications in progress, and manage pending applications.</Card.Text>
                  <ul>
                    <li><strong>Performance Metrics</strong></li>
                    <li><strong>Applications in Progress</strong></li>
                    <li><strong>Pending Applications</strong></li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          )}

          {/* Sub-Department User Dashboard Preview */}
          {userRole === 'SubDepartmentUser' && (
            <div className="col-md-3 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Sub-Department User Dashboard</Card.Title>
                  <Card.Text>View applications assigned, their current status, and deadlines.</Card.Text>
                  <ul>
                    <li><strong>Assigned Applications</strong></li>
                    <li><strong>Application Status</strong></li>
                    <li><strong>Upcoming Deadlines</strong></li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          )}

          {/* Applicant Dashboard Preview */}
          {userRole === 'Applicant' && (
            <div className="col-md-3 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Applicant Dashboard</Card.Title>
                  <Card.Text>Track the status of your submitted applications.</Card.Text>
                  <ul>
                    <li><strong>Track Application Status</strong></li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          )}
        </div>

        {/* Example Progress Bars */}
        <div className="row">
          {/* For demonstration purposes, showing a progress bar */}
          <div className="col-12 mb-4">
            <Card style={{ border: 'none', boxShadow: 'none' }}> {/* Remove border and shadow */}
              <Card.Body>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#004614', textTransform: 'uppercase', marginBottom: '20px' }}>
                  Application Progress
                </Card.Title>
                {/* Customizing the ProgressBar */}
                <ProgressBar 
                  now={60} 
                  label="In Progress" 
                  style={{
                    height: '30px',
                    marginBottom: '20px',
                    backgroundColor: '#e0e0e0',  // Light gray background for the empty bar
                    borderRadius: '5px'           // Optional: makes the bar edges rounded
                  }}
                >
                  <ProgressBar 
                    now={60} 
                    label="In Progress" 
                    style={{
                      height: '30px',
                      marginBottom: '20px',
                      backgroundColor: '#004614', // Custom green color for the filled progress
                      borderRadius: '5px'
                    }}
                  />
                </ProgressBar>

                <Card.Text className="mt-2" style={{ fontSize: '1.1rem', color: '#333' }}>
                  60% of applications are in progress.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
