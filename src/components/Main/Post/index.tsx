import { usePostsQuery } from '../../../utils/query/usePostsQuery';

function Post() {
  const { data: posts = [], isLoading } = usePostsQuery();

  if (isLoading) {
    return <>로딩중...</>;
  }

  return (
    <ul>
      {posts.map(({ name, comment }) => (
        <li>
          <div>{name}</div>
          <div>{comment}</div>
        </li>
      ))}
    </ul>
  );
}

export default Post;
