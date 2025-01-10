import React from 'react';
import { Alert, ListGroup, ListGroupItem, Card } from 'react-bootstrap';

function Notifications() {
  // Sample notification data
  const notifications = [
    { type: 'warning', message: 'Application 12345 is pending review.', deadline: '2024-12-30' },
    { type: 'info', message: 'The deadline for Application 67890 is approaching on 2024-12-28.', deadline: '2024-12-28' },
    { type: 'danger', message: 'Application 11223 is overdue!', deadline: '2024-12-20' },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <h2 className="text-center mb-5" style={{ fontWeight: 'bold', fontSize: '2.5rem', textTransform: 'uppercase', color: '#004614' }}>Notifications</h2>

        {/* Alert Section with Buttons */}
        <div className="row mb-4">
          <div className="col-md-12">
            {notifications.map((notification, index) => (
              <Alert key={index} variant={notification.type} className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>{notification.message}</span>
                  <span className="text-muted"><strong>Deadline:</strong> {notification.deadline}</span>
                </div>
              </Alert>
            ))}
          </div>
        </div>

        {/* Notifications List with Enhancements */}
        <div className="row">
          <div className="col-md-12">
            <Card className="shadow-sm" style={{ borderRadius: '10px' }}>
              <Card.Body>
                <Card.Title className="mb-3" style={{ fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'uppercase', color: '#004614' }}>
                  Recent Notifications
                </Card.Title>
                <ListGroup variant="flush">
                  {notifications.map((notification, index) => (
                    <ListGroupItem key={index} variant={notification.type} className="d-flex justify-content-between align-items-center">
                      <span>{notification.message}</span>
                      <span className="text-muted"><strong>Deadline:</strong> {notification.deadline}</span>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Notifications;
