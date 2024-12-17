import React, { useState } from 'react';
import { RegistrationStatus } from '../types';

export default function TrackStatus() {
  const [trackingId, setTrackingId] = useState('');
  const [status, setStatus] = useState<RegistrationStatus | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate status check
    setStatus('pending');
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Track Your Application</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Enter your tracking ID to check the status of your IPR registration.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div>
              <label htmlFor="tracking-id" className="block text-sm font-medium text-gray-700">
                Tracking ID
              </label>
              <input
                type="text"
                id="tracking-id"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Enter your tracking ID"
              />
            </div>

            <button
              type="submit"
              className="mt-6 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Track Status
            </button>
          </form>

          {status && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Application Status</h3>
              <p className="mt-2 text-sm text-gray-600">
                Your application is currently: <span className="font-medium">{status}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}