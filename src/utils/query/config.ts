import { QueryClient } from 'react-query';

export const QUERY_KEY = {
  POSTS: 'POSTS',
  NEW_POST: 'NEW_POST',
} as const;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
    mutations: {
      //
    },
  },
});
