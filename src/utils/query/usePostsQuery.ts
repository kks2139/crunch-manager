import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { QUERY_KEY } from './config';
import { getDocuments } from '../firebase';
import { Post } from '../types';

export function usePostsQuery(options?: UseQueryOptions<Post[]>) {
  return useQuery<Post[]>({
    ...options,
    queryKey: [QUERY_KEY.POSTS],
    queryFn: () => getDocuments('post'),
  });
}
