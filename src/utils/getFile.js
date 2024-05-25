import {ref as dbRef, get } from "firebase/database";
import {database} from './firebaseConfig'

// Fungsi untuk mendapatkan URL file berdasarkan email
export async function getFileUrlByEmail(email) {
  const emailSlug = email.replace(/@|\./g, '_');
  const fileRef = dbRef(database, 'uploads/' + emailSlug);

  try {
    const snapshot = await get(fileRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log('File data:', data);
      return data.url; // Kembalikan URL file
    } else {
      console.log('No data available');
      return null;
    }
  } catch (error) {
    console.error('Error getting data:', error);
    return null;
  }
}
