import { initializeApp } from 'firebase/app';
import {
  CollectionReference,
  addDoc,
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';

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

export function getColRef<T>(colName: CollectionName) {
  const ref = collection(firestore, colName) as CollectionReference<T>;

  return ref;
}

export async function getDocuments<T>(colName: CollectionName) {
  const snapshot = await getDocs(getColRef(colName));

  return snapshot.docs.map((doc) => doc.data() as T);
}

export async function addDocInCollection<T extends { [x: string]: any }>(
  colName: CollectionName,
  data: T
) {
  return addDoc(getColRef(colName), { ...data });
}
