import { supabase } from '../supabase';

export const handleSignUp = async () => {
      const { user, error } = await supabase.auth.signUp({
        email: 'test@example.com',
        password: 'password123',
      });
  
      if (error) {
        console.error('Error signing up:', error.message);
      } else {
        console.log('Signed up successfully:', user);
      }
    }