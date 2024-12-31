import axios from 'axios';
import { createClient } from '@supabase/supabase-js'

const API_URL = 'https://owcnilmdizgazpjenyer.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Y25pbG1kaXpnYXpwamVueWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4OTA4MDYsImV4cCI6MjAyMDQ2NjgwNn0.AX9GbWpiGWcJ9UMPa70Q09xUTZsbimgwZ6ncnsc31PQ'
const TABLE_NAME = 'phrases';

export const SUPABASE = createClient(API_URL, API_KEY)

// export const createPhrase = async (newPhrase) => {
//   try {
//     const response = await axios.post(`${API_URL}/rest/v1/${TABLE_NAME}`, newPhrase, {
//       headers: {
//         'apikey': API_KEY,
//         'Content-Type': 'application/json',
//         'Prefer': 'return=representation',
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error('Error creating phrase:', error);
//     throw error;
//   }
// };


export const createPhrase = async (newPhrase) => {
  try {
    const response = await axios.post(`${API_URL}/rest/v1/${TABLE_NAME}`, newPhrase, {
      headers: {
        'apikey': API_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
    });

    if (response.status === 200) {
      const fileUrl = supabase.storage.from('bucket-name').getPublicUrl('file-name');
      console.log('File URL:', fileUrl);
    } else {
      console.error('Upload failed:', response.data);
    }
  } catch (error) {
    console.error('Upload failed:', error);
  }
};

export const getAllPhrases = async () => {
  try {
    const response = await axios.get(`${API_URL}/rest/v1/${TABLE_NAME}`, {
      headers: {
        'apikey': API_KEY,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching phrases:', error);
    throw error;
  }
};

export const  deleteAllData =async (tableName)=>{
  try {

    const endpoint = `${API_URL}/rest/v1/tables/${TABLE_NAME}/rows`;

    const { data } = await axios.delete(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        'apikey': API_KEY
      }
    });

    console.log(`Successfully deleted all data from the "${tableName}" table.`);
  } catch (error) {
    console.error('Error deleting data:', error.message);
  }
}

export const updatePhrase = async (phraseId, updatedData) => {
  try {
    const { data, error } = await SUPABASE
      .from(TABLE_NAME)
      .update(updatedData)
      .eq('id', phraseId);

    if (error) {
      console.error('Update failed:', error.message);
      return;
    }

    console.log('Update successful:', data);
  } catch (error) {
    console.error('Update failed:', error.message);
  }
};

export const deletePhrase = async (phraseId) => {
  try {
    const { data, error } = await SUPABASE
      .from(TABLE_NAME)
      .delete()
      .eq('id', phraseId);

    if (error) {
      console.error('Delete failed:', error.message);
      return;
    }

    console.log('Delete successful:', data);
  } catch (error) {
    console.error('Delete failed:', error.message);
  }
};
