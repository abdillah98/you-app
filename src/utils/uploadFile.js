import {ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as dbRef, set } from "firebase/database";
import {storage, database} from './firebaseConfig'

export async function uploadFileFirebase(file, email) {
  // Buat referensi storage dengan nama file
  const storageRef = ref(storage, 'uploads/' + file.name);

  try {
    // Upload file
    const snapshot = await uploadBytes(storageRef, file);
    console.log('Uploaded a blob or file!');

    // Dapatkan URL download
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('File available at', downloadURL);

    // Simpan URL ke Realtime Database dengan slug email
    const emailSlug = email.replace(/@|\./g, '_');
    await set(dbRef(database, 'uploads/' + emailSlug), {
      fileName: file.name,
      url: downloadURL
    });

    console.log('File URL saved to Realtime Database!');
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}