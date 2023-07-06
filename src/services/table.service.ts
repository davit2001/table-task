import { initializeApp } from 'firebase/app';
import { ref, getDatabase, get, child } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBjGi_4vSi_TTX9_aBaHwnNTovm67JNHmI",
  authDomain: "table-task-eadec.firebaseapp.com",
  databaseURL: "https://table-task-eadec-default-rtdb.firebaseio.com",
  projectId: "table-task-eadec",
  storageBucket: "table-task-eadec.appspot.com",
  messagingSenderId: "76073580083",
  appId: "1:76073580083:web:4962ebe5e16217cef7d546",
  measurementId: "G-7MJCLDB3D4"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a reference to the database
const database = getDatabase(app);

export const getTable = async () => {
  try {
    const dataRef = ref(database, 'data')
    const tableRef = child(dataRef, 'table');
    const snapshot = await get(tableRef);

    if (snapshot.exists()) return snapshot.val();

    return null
  } catch (error) {
    throw new Error(error.message)
  }
};