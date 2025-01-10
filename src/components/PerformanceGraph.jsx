import React from 'react';
import { Card } from 'react-bootstrap'; // For displaying charts in cards
import { Pie, Bar } from 'react-chartjs-2'; // For charts
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

function PerformanceGraph() {
  // Pie Chart Data (Pending, In Progress, Completed applications)
  const pieData = {
    labels: ['Pending', 'In Progress', 'Completed'],
    datasets: [
      {
        data: [30, 50, 20], // Example data: 30% Pending, 50% In Progress, 20% Completed
        backgroundColor: ['#ffcc00', '#004614', '#007bff'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  // Bar Chart Data (Efficiency by Sub-Departments)
  const barData = {
    labels: ['Dept 1', 'Dept 2', 'Dept 3', 'Dept 4'],
    datasets: [
      {
        label: 'Efficiency (%)',
        data: [80, 65, 75, 90], // Example efficiency data
        backgroundColor: '#004614',
        borderColor: '#0056b3',
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="py-5">
      <div className="container" style={{ marginBottom: '30px' }}>
        <h2 className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '2.5rem', textTransform: 'uppercase', color: '#004614', paddingBottom: '20px' }}>
          Performance Graphs
        </h2>

        <div className="row">
  {/* Pie Chart for Application Status and Text */}
  <div className="col-md-6 mb-4 d-flex align-items-center" style={{ border: 'none' }}>
    <Card style={{ flex: 1, border: 'none' }}> {/* Remove border from Card */}
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold', fontSize: '2rem', textTransform: 'uppercase', paddingBottom: '12px' }}>Application Status</Card.Title>
        <div style={{ width: '100%', height: '450px', border: 'none' }}> {/* Remove border from div */}
          <Pie data={pieData} options={{ responsive: true }} />
        </div>
      </Card.Body>
    </Card>
  </div>

          <div className="col-md-6 mb-4 d-flex align-items-center mt-0">
            <div style={{ fontSize: '0.9rem', color: '#333', lineHeight: '1.8'}}>
              <p><strong style={{textTransform: 'uppercase', color: '#004614', fontSize: '1.5rem'}}>Application Status Overview:</strong></p>
              <p>The pie chart represents the current status of applications within the District Coordination Office Portal (DCOP). It visually depicts the progress of applications through various stages in the system. The chart provides valuable insights into the status of applications across departments and sub-departments, ensuring effective management and timely resolution. As of now:</p>
              <ul>
                <li><strong>30%</strong> of applications are <strong>Pending</strong></li>
                <li><strong>50%</strong> of applications are <strong>In Progress</strong></li>
                <li><strong>20%</strong> of applications are <strong>Completed</strong></li>
              </ul>
              <p style={{ fontSize: '0.9rem'}}>This visualization helps track the overall progress and pending tasks across departments.</p>
            </div>
          </div>
        </div>

        <div className="row">
  {/* Bar Chart for Department Efficiency and Text */}
  <div className="col-md-6 mb-4 d-flex align-items-center" style={{ border: 'none' }}>
    <Card style={{ flex: 1, border: 'none' }}> {/* Remove border from Card */}
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold', fontSize: '2rem', textTransform: 'uppercase', paddingBottom: '12px' }}>Department Efficiency</Card.Title>
        <div style={{ width: '100%', height: '250px', border: 'none' }}> {/* Remove border from div */}
          <Bar data={barData} options={{
            responsive: true,
            scales: {
              x: {
                ticks: {
                  maxRotation: 45, // Reduce label angle to make them more readable
                  minRotation: 0
                }
              }
            }
          }} />
        </div>
      </Card.Body>
    </Card>
  </div>


          <div className="col-md-6 mb-4 d-flex align-items-center">
            <div style={{ fontSize: '0.9rem', color: '#333', lineHeight: '1.8'}}>
              <p><strong style={{textTransform: 'uppercase', color: '#004614', fontSize: '1.5rem'}}>Department Efficiency Overview:</strong></p>
              <p>The bar chart displays the efficiency of various departments. The efficiency percentages are calculated based on how quickly each department is resolving applications:</p>
              <ul>
                <li><strong>Dept 1:</strong> 80% efficiency</li>
                <li><strong>Dept 2:</strong> 65% efficiency</li>
                <li><strong>Dept 3:</strong> 75% efficiency</li>
                <li><strong>Dept 4:</strong> 90% efficiency</li>
              </ul>
              <p style={{ fontSize: '0.9rem'}}>This chart helps identify areas of improvement and track departmental performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerformanceGraph;
