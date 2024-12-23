import React, { useState } from 'react';

interface Registration {
  id: number;
  name: string;
  email: string;
  propertyTitle: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

const initialRegistrations: Registration[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', propertyTitle: 'Sunny Villa', status: 'Pending' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', propertyTitle: 'Mountain Retreat', status: 'Approved' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', propertyTitle: 'City Loft', status: 'Pending' },
  { id: 4, name: 'Diana Ross', email: 'diana@example.com', propertyTitle: 'Beachfront Condo', status: 'Rejected' },
];

const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState<Registration[]>(initialRegistrations);

  const handleApprove = (id: number) => {
    setRegistrations(registrations.map(reg => 
      reg.id === id ? { ...reg, status: 'Approved' } : reg
    ));
  };

  const handleDelete = (id: number) => {
    setRegistrations(registrations.filter(reg => reg.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {registrations.map((registration) => (
              <tr key={registration.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{registration.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.propertyTitle}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    registration.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                    registration.status === 'Rejected' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {registration.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {registration.status === 'Pending' && (
                    <button
                      onClick={() => handleApprove(registration.id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Approve
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(registration.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;

