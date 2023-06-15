import { UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from './config';
import { Post } from '../types';
import { addDocInCollection } from '../firebase';

export function useNewPostMutation(options?: UseMutationOptions<void, Error, Post>) {
  const queryClient = useQueryClient();

  return useMutation<void, Error, Post>({
    ...options,
    mutationKey: [QUERY_KEY.NEW_POST],
    mutationFn: async (post) => {
      await addDocInCollection<Post>('post', post);
    },
    onError: (err) => {
      // TODO: alert component 추가
    },
    onSuccess: (...args) => {
      queryClient.invalidateQueries([QUERY_KEY.POSTS]);
      options?.onSuccess?.(...args);
    },
  });
}
