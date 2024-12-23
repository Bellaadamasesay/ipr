import React, { useEffect, useState } from 'react';
import { checkUserSession } from '../../services/auth'; // Import the checkUserSession function
import { supabase } from '../../lib/supabase'; // Ii supabase instance
import { toast } from 'react-hot-toast';

const Profile = () => {
 const [user, setUser] = useState<any>(null); // State to hold user info
 const [properties, setProperties] = useState<any[]>([]); // State to hold properties
  useEffect(() => {
   const fetchUserData = async () => {
     try {
       const userSession = await checkUserSession();
       if (userSession) {
         setUser(userSession);
         await fetchUserProperties(userSession.id); // Fetch properties for the logged-in user
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
     .from('properties') // Assuming 'properties' is the table name
     .select('*')
     .eq('user_id', userId); // Assuming 'user_id' is the foreign key in properties table
    if (error) {
     console.error('Error fetching properties:', error);
     toast.error('Failed to fetch properties.');
   } else {
     setProperties(data);
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
}
;
export default Profile;