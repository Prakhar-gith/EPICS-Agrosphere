import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import CropRecommendation from './pages/CropRecommendation';
import HistoricalRecords from './pages/HistoricalRecords';
import ProfileSettings from './pages/ProfileSettings';

function App() {
  return (
    
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        {/* Protected routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crop-recommendation" element={<CropRecommendation />} />
        <Route path="/historical-records" element={<HistoricalRecords />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
      </Routes>
    </Router>

    
  );
}

export default App;
