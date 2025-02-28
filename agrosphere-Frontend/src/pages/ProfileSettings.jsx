import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    fullName: 'Gupta Sexy Boy',
    email: 'sasti@randi.com',
    phone: '+420420420',
  });
  
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  // Handle changes for personal info inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle changes for notification toggles
  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Handle form submission (placeholder for API integration)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Save the updated profile settings via API
    console.log('Profile saved', formData, notificationSettings);
  };

  return (
    <div className="flex min-h-screen">
      <NavBar />
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
          {/* Personal Information Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emailNotifications"
                  name="emailNotifications"
                  checked={notificationSettings.emailNotifications}
                  onChange={handleNotificationChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="emailNotifications" className="ml-2 text-gray-700">
                  Email Notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="smsNotifications"
                  name="smsNotifications"
                  checked={notificationSettings.smsNotifications}
                  onChange={handleNotificationChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="smsNotifications" className="ml-2 text-gray-700">
                  SMS Notifications
                </label>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="newPassword" className="block text-gray-700">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  placeholder="Enter new password"
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
              onClick={() => window.location.reload()} // Placeholder for cancel action
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
