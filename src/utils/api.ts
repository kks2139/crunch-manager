import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";
import { Post } from "./types";

export async function getPosts (){
  const colRef = collection(firestore, 'post');
  const snapshot = await getDocs(colRef);

  return snapshot.docs.map((doc)=> doc.data() as Post);
}