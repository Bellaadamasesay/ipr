import React, { useEffect, useState } from 'react';
import { checkUserSession } from '../../services/auth';
import { supabase } from '../../lib/supabase';
import { toast } from 'react-hot-toast';
import { User } from '@supabase/supabase-js';

interface Property {
  id: string;
  title: string;
  description: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userSession = await checkUserSession();
        if (userSession) {
          setUser(userSession);
          await fetchUserProperties(userSession.id);
        }
      } catch (error) {
        console.error('Error fetching user session:', error);
        toast.error('Failed to fetch user session.');
      }
    };

    fetchUserData();
  }, []);

  const fetchUserProperties = async (userId: string) => {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      console.error('Error fetching properties:', error);
      toast.error('Failed to fetch properties.');
    } else {
      setProperties(data || []);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {user ? (
        <div>
          <h2 className="text-xl font-semibold">User Information</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Full Name:</strong> {user.user_metadata.full_name}</p>
          <p><strong>Phone:</strong> {user.user_metadata.phone}</p>

          <h2 className="text-xl font-semibold mt-6">Registered Properties</h2>
          {properties.length > 0 ? (
            <ul className="list-disc pl-5">
              {properties.map((property) => (
                <li key={property.id} className="mt-2">
                  <strong>{property.title}</strong> - {property.description}
                </li>
              ))}
            </ul>
          ) : (
            <p>No properties registered.</p>
          )}
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default Profile;

