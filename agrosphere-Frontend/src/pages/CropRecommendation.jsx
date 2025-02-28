import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    ph: '',
    temperature: '',
    humidity: '',
    rainfall: '',
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult({
      recommendedCrop: 'Wheat',
      advice: 'Ensure proper irrigation and balanced fertilizer application for optimal growth.',
    });
  };

  return (
    <div className="flex min-h-screen">
      <NavBar />
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Crop Recommendation</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nitrogen" className="block text-gray-700">Nitrogen (N)</label>
              <input
                type="number"
                id="nitrogen"
                name="nitrogen"
                value={formData.nitrogen}
                onChange={handleChange}
                placeholder="e.g., 50"
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label htmlFor="phosphorus" className="block text-gray-700">Phosphorus (P)</label>
              <input
                type="number"
                id="phosphorus"
                name="phosphorus"
                value={formData.phosphorus}
                onChange={handleChange}
                placeholder="e.g., 30"
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label htmlFor="potassium" className="block text-gray-700">Potassium (K)</label>
              <input
                type="number"
                id="potassium"
                name="potassium"
                value={formData.potassium}
                onChange={handleChange}
                placeholder="e.g., 40"
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label htmlFor="ph" className="block text-gray-700">pH Value</label>
              <input
                type="number"
                id="ph"
                name="ph"
                value={formData.ph}
                onChange={handleChange}
                placeholder="e.g., 6.5"
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label htmlFor="temperature" className="block text-gray-700">Temperature (°C)</label>
              <input
                type="number"
                id="temperature"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                placeholder="e.g., 25"
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label htmlFor="humidity" className="block text-gray-700">Humidity (%)</label>
              <input
                type="number"
                id="humidity"
                name="humidity"
                value={formData.humidity}
                onChange={handleChange}
                placeholder="e.g., 80"
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label htmlFor="rainfall" className="block text-gray-700">Rainfall (mm)</label>
              <input
                type="number"
                id="rainfall"
                name="rainfall"
                value={formData.rainfall}
                onChange={handleChange}
                placeholder="e.g., 200"
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-200"
          >
            Get Recommendations
          </button>
        </form>
        
        {result && (
          <div className="mt-8 bg-white p-6 rounded shadow-md max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Recommendation Result</h2>
            <p className="text-xl">Recommended Crop: {result.recommendedCrop}</p>
            <p className="text-gray-700">{result.advice}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropRecommendation;
