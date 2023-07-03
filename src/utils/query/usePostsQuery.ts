import { QUERY_KEY } from './config';
import { getColRef } from '../firebase';
import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { query } from 'firebase/firestore';
import { Post } from '../types';

interface PostData extends Post {
  id: string;
}

export function usePostsQuery() {
  return useFirestoreQuery<Post, PostData[]>(
    [QUERY_KEY.POSTS],
    query(getColRef('post')),
    undefined,
    {
      select: (data) => {
        return data.docs.map((snapshot) => ({ id: snapshot.id, ...snapshot.data() }));
      },
    }
  );
}
