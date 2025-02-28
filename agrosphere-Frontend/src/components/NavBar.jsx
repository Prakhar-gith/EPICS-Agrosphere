import React from 'react';
import { Link } from 'react-router-dom';
import userAvatar from '../assets/user.png';

const NavBar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 flex flex-col h-screen px-4 py-6">
      {/* Logo / App Name */}
      <div className="text-2xl font-bold mb-8">
        AgroSphere
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard" className="hover:text-green-400 transition">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/crop-recommendation" className="hover:text-green-400 transition">
              Crop Recommendation
            </Link>
          </li>
          <li>
            <Link to="/historical-records" className="hover:text-green-400 transition">
              Historical Records
            </Link>
          </li>
          <li>
            <Link to="/profile-settings" className="hover:text-green-400 transition">
              Profile Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Info at the bottom*/}
      <div className="mt-6 border-t border-gray-700 pt-4">
        <div className="flex items-center">
          <img
            src={userAvatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold">Gupta Sexy Boy</p>
            <p className="text-sm text-gray-400">Farmer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
