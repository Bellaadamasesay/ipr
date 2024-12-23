import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Use VITE_ prefix
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Use VITE_ prefix

export const supabase = createClient(supabaseUrl, supabaseAnonKey);