import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import necessary components from react-router-dom
import Home from './pages/Home';  // Import the Home component from the correct path
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import './App.css';  // Import your styles
import ApplicationForm from './components/ApplicationForm';

function App() {
  return (
    <Router>  {/* Wrap the entire application with BrowserRouter */}
      <Routes>  {/* Define the routes */}
        <Route path="/" element={<Home />} />  {/* Define the route for the home page */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/submitform" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
