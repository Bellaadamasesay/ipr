import { supabase } from '../lib/supabase';
import { toast } from 'react-hot-toast';

export const handleSignUp = async (email: string, password: string, fullname: string, phone: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullname,
        phone: phone,
      },
    },
  });

  if (error) {
    toast.error(`Error: ${error.message}`);
    throw error;
  }

  return data;
};

export const handleSignIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    toast.error(`Error: ${error.message}`);
    throw error;
  }

  return data;
};

export const checkUserSession = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error) {
    throw error;
  }

  return user;
};

export const handleSignOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }
};

