import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
const API_URL =  'https://owcnilmdizgazpjenyer.supabase.co';
const API_KEY =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Y25pbG1kaXpnYXpwamVueWVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDg5MDgwNiwiZXhwIjoyMDIwNDY2ODA2fQ.5vNotB94xoL6bssODTxpr5IhwAckoeOuq2yPTFQQ9Es';

export const supabase = createClient(API_URL, API_KEY);


// export const uploadFile = async (file) => {
//   const formData = new FormData();
//   formData.append('file', file);

//   try {
//     const response = await axios.post(
//       API_URL + '/storage/v1/object/files/' + file.name,
//       formData,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': 'Bearer ' + API_KEY,
//           'Apikey': API_KEY,
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {

//     if (!!error.response && error.response.data.statusCode == 409) {
//       const Key = 'files/' + file.name;
//       error.response.data.Key=Key
//       console.log("fuck console.log(error.response.data)",error.response.data)
//       return error.response.data;
//     }

//     console.error('Error uploading image:', error.response);
//   }
// };



export const uploadFile = async (file, newName) => {
  const formData = new FormData();

  // Rename the file before appending it to the form data
  const renamedFile = new File([file], newName, { type: file.type });
  formData.append('file', renamedFile);

  try {
    const response = await axios.post(
      API_URL + '/storage/v1/object/files/' + newName,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + API_KEY,
          'Apikey': API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (!!error.response && error.response.data.statusCode == 409) {
      const Key = 'files/' + newName;
      error.response.data.Key=Key;
      console.log("Error uploading image:", error.response.data);
      return error.response.data;
    }

    console.error('Error uploading image:', error.response);
  }
};
