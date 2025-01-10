import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [applicationType, setApplicationType] = useState('');
  const [area, setArea] = useState('');
  const [document, setDocument] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('applicationType', applicationType);
    formData.append('area', area);
    formData.append('document', document);

    try {
      const response = await axios.post('http://localhost:5000/api/applications', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setStatusMessage(response.data.message);
      setLoading(false);
    } catch (error) {
      setStatusMessage('Error submitting application');
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.cardBody}>
          <h2 style={styles.heading}>Submit Your Application</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Application Type</label>
              <select
                value={applicationType}
                onChange={(e) => setApplicationType(e.target.value)}
                required
                style={styles.select}
              >
                <option value="">Select Application Type</option>
                <option value="Permit/License">Permit/License Application</option>
                <option value="Government Services">Government Services Request</option>
                <option value="Land/Property Issue">Land or Property Issue</option>
                <option value="Environmental Compliance">Environmental Compliance</option>
                <option value="Financial Assistance">Financial Assistance</option>
                <option value="Health Services">Health Services Request</option>
                <option value="Educational Support">Educational Support</option>
                <option value="Public Safety/Security">Public Safety or Security Request</option>
                <option value="Infrastructure Development">Infrastructure Development Request</option>
                <option value="Consumer Protection">Consumer Protection Complaints</option>
                <option value="Tourism Promotion">Tourism Promotion</option>
                <option value="General Complaint/Feedback">General Complaint or Feedback</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Area</label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
                style={styles.select}
              >
                <option value="">Select Area</option>
                <option value="Mianwali District">Mianwali District</option>
                <option value="MC Daudkhel">MC Daudkhel</option>
                <option value="MC Mianwali">MC Mianwali</option>
                <option value="Agriculture Area">Agriculture Area</option>
                <option value="Health Area">Health Area (DDO Health)</option>
                <option value="Municipal Area">Municipal Area</option>
                <option value="Urban Areas">Urban Areas</option>
                <option value="Rural Areas">Rural Areas</option>
                <option value="Education Zone">Education Zone</option>
                <option value="Industrial Zones">Industrial Zones</option>
                <option value="Protected Environmental Zones">Protected Environmental Zones</option>
                <option value="Tourism Zones">Tourism Zones</option>
                <option value="Commercial Area">Commercial Area</option>
                <option value="Residential Areas">Residential Areas</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Upload Supporting Document</label>
              <input
                type="file"
                onChange={(e) => setDocument(e.target.files[0])}
                required
                style={styles.input}
              />
            </div>

            <button
              type="submit"
              style={styles.submitBtn}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>

          {statusMessage && (
            <div style={styles.statusMessage}>
              <p style={statusMessage.includes('Error') ? styles.errorText : styles.successText}>
                {statusMessage}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f1f1f1, #dfe9f3)',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  cardBody: {
    padding: '0',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#004614',
    marginBottom: '30px',
    textTransform: 'uppercase',
  },
  form: {
    display: 'grid',
    gap: '20px',
    textAlign: 'left',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: '1.1rem',
    marginBottom: '8px',
    color: '#444',
    fontWeight: '600',
  },
  input: {
    padding: '14px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    fontSize: '1.1rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  select: {
    padding: '14px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    fontSize: '1.1rem',
    width: '100%',
    outline: 'none',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  submitBtn: {
    padding: '14px 25px',
    fontSize: '1.2rem',
    backgroundColor: '#004614',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    width: '100%',
    fontWeight: '600',
  },
  submitBtnDisabled: {
    backgroundColor: '#b0c4de',
    cursor: 'not-allowed',
  },
  statusMessage: {
    marginTop: '25px',
    fontSize: '1.1rem',
  },
  successText: {
    color: '#28a745',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#dc3545',
    fontWeight: 'bold',
  },
};

export default ApplicationForm;
