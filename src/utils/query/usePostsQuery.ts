import {useQuery} from '@tanstack/react-query'
import { QUERY_KEY } from './config'
import { getDocsData } from '../firebase'
import { Post } from '../types'

export function  usePostsClient(){
  return useQuery<Post[]>({
    queryKey: [QUERY_KEY.POSTS],
    queryFn: ()=> getDocsData('post'),
  })
}