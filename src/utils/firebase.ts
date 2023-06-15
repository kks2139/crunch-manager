import { initializeApp } from 'firebase/app';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

type CollectionName = 'post' | 'maker';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,

  appId: import.meta.env.VITE_APP_ID,
};

// firebase 초기화
const app = initializeApp(firebaseConfig);

// DB get
export const firestore = getFirestore(app);

export function getCollection(name: string) {
  return collection(firestore, name);
}

export async function getDocuments<T>(colName: CollectionName) {
  const snapshot = await getDocs(getCollection(colName));

  return snapshot.docs.map((doc) => doc.data() as T);
}

export async function addDocInCollection<T extends { [x: string]: any }>(
  colName: CollectionName,
  data: T
) {
  return addDoc(getCollection(colName), { ...data });
}
