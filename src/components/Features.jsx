import React from 'react';
import { FaRegCheckCircle, FaTasks, FaChartLine, FaBell, FaFileAlt } from 'react-icons/fa'; // Font Awesome icons

function Feature() {
  return (
    <section className="py-5 bg-light" >
      <div className="container" style={{marginBottom: '30px', marginTop: '30px' }}>
        <h2 className="text-center" style={{ fontWeight: 'bold', fontSize: '2.5rem', textTransform: 'uppercase', color: '#004614', marginBottom: '60px' }}>Key Features of the Portal</h2>
        
        <div className="row">
          {/* Application Submission */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <FaRegCheckCircle size={50} style={{ color: '#004614' }} className="mb-3" />
                <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'uppercase' }}>Application Submission</h5>
                <p className="card-text">Applicants can easily submit applications through the portal.</p>
              </div>
            </div>
          </div>

          {/* Tracking and Monitoring */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <FaTasks size={50} style={{ color: '#004614' }} className="mb-3" />
                <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'uppercase' }}>Tracking and Monitoring</h5>
                <p className="card-text">Track the progress of applications at all levels in real-time.</p>
              </div>
            </div>
          </div>

          {/* Performance Monitoring */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <FaChartLine size={50} style={{ color: '#004614' }} className="mb-3" />
                <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'uppercase' }}>Performance Monitoring</h5>
                <p className="card-text">View graphical metrics to monitor department performance.</p>
              </div>
            </div>
          </div>

          {/* Notification System */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <FaBell size={50} style={{ color: '#004614' }} className="mb-3" />
                <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'uppercase' }}>Notification System</h5>
                <p className="card-text">Automated alerts keep users informed about important deadlines.</p>
              </div>
            </div>
          </div>

          {/* Report Generation */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <FaFileAlt size={50} style={{ color: '#004614' }} className="mb-3" />
                <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'uppercase' }}>Report Generation</h5>
                <p className="card-text">Generate comprehensive performance reports for departments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
