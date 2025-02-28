import React from 'react';
import NavBar from '../components/NavBar';

const HistoricalRecords = () => {
  // Dummy data
  const records = [
    {
      id: 1,
      category: 'Soil Analysis',
      date: '2023-05-15',
      yield: 'High',
    },
    {
      id: 2,
      category: 'Crop Recommendation',
      date: '2023-05-16',
      yield: 'Medium',
    },
    {
      id: 3,
      category: 'Soil Analysis',
      date: '2023-05-17',
      yield: 'Low',
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Navigation Sidebar*/}
      <NavBar />

      {/* Main Content Area*/}
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Historical Records</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Yield</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map(record => (
                <tr key={record.id} className="border-t">
                  <td className="py-3 px-4">{record.category}</td>
                  <td className="py-3 px-4">{record.date}</td>
                  <td className="py-3 px-4">{record.yield}</td>
                  <td className="py-3 px-4">
                    <button className="mr-2 bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 transition">
                      View Details
                    </button>
                    <button className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 transition">
                      Export
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HistoricalRecords;
