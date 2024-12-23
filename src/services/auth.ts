import { supabase } from '../lib/supabase'
import {toast} from 'react-hot-toast'

export const handleSignUp = async (email: string, password: string, fullname: string, phone: string) => {
  console.log(`Testing Sign Up ---  Email: ${email} --- Password: ${password}}`);
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        displa: fullname,
        phone: phone,
      },
    },
  })

  if (error) {
    toast.error(`Error: ${error.message} --- Email: ${email} --- Password: ${password}`)
    throw error
  }

  return data
}


export const handleSignIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  // Fetch the user ID from 'auth.users'
  const { data: userData, error: userError } = await supabase
    .from('auth.users') // Use 'auth.users' instead of 'users'
    .select('id') // 'id' is the UID field in the table
    .eq('email', email)
    .single();

  if (userError) {
    console.error('Error fetching user UID:', userError);
    throw new Error('Failed to fetch user UID.');
  }

  if (!userData) {
    throw new Error('No user found with the provided email.');
  }

  // Log or use the UID
  console.log('User UID:', userData.id);

  return userData; // Optionally return user data if needed
};

export const checkUserSession = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
   if (error) {
    throw error; // Handle error if needed
  }
   return user; // Returns the user object if logged in, or null if not
}

export const handleSignOut = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    throw error
  }
}

