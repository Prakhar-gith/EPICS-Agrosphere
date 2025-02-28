import React from 'react';
import NavBar from '../components/NavBar';

const Dashboard = () => {
  // Dummy data
  const recommendedCrops = [
    { id: 1, name: 'Rice', description: 'Recommended based on current soil conditions' },
    { id: 2, name: 'Wheat', description: 'High suitability score for your region' },
    { id: 3, name: 'Corn', description: 'Optimal growing conditions detected' },
  ];

  const recentActivities = [
    { id: 1, activity: 'Soil Analysis Completed', time: '2 hours ago' },
    { id: 2, activity: 'New Recommendation Generated', time: 'Yesterday' },
    { id: 3, activity: 'Weather Alert: Expected rainfall in your region', time: '3 days ago' },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <NavBar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-4">Welcome back, Gupta Sexy Boy!</h1>
        
        {/* Recent Recommendations*/}
        <h2 className="text-xl font-semibold mb-2">Recent Recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendedCrops.map(crop => (
            <div key={crop.id} className="bg-white rounded shadow p-4">
              <h3 className="text-lg font-bold mb-1">{crop.name}</h3>
              <p className="text-gray-600 mb-2">{crop.description}</p>
              <button className="bg-black text-white py-1 px-3 rounded hover:bg-green-700 transition">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Recent Activity - notifs*/}
        <h2 className="text-xl font-semibold mt-8 mb-2">Recent Activity</h2>
        <div className="bg-white rounded shadow p-4">
          <ul className="space-y-3">
            {recentActivities.map(activity => (
              <li key={activity.id} className="flex items-center justify-between">
                <span className="text-gray-700">{activity.activity}</span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
