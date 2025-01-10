// Home.jsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Feature from '../components/Features';
import Dashboard from '../components/Dashboard';
import PerformanceGraph from '../components/PerformanceGraph';
import Notifications from '../components/Notifications';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Feature />
      <Dashboard />
      <hr />
      <PerformanceGraph />
      <Notifications />
      <Footer />
    </div>
  );
}

export default Home;
