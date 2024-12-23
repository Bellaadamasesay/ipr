
import { supabase } from '../lib/supabase'
// import {toast} from 'react-hot-toast'

export const registerIPR = async (propertyName: string, description: string, ownerId: number) => {
 const { data, error } = await supabase
   .from('IntellectualProperties')
   .insert([
     { PropertyName: propertyName, Description: description, OwnerID: ownerId }
   ]);
  if (error) {
   console.error('Error submitting IPR registration:', error);
   return { success: false, error };
 }
  console.log('IPR registration submitted successfully:', data);
 return { success: true, data };
};