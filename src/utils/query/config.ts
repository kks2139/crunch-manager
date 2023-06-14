import {QueryClient } from "@tanstack/react-query";

export const QUERY_KEY = {
  POSTS: 'POSTS'
} as const;

export const  queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'always',
      refetchOnWindowFocus: true,
    }
  }
});