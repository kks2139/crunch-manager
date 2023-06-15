import { useState } from 'react';
import classNames from 'classnames/bind';
import { usePostsQuery } from '../../../utils/query/usePostsQuery';
import styles from './index.module.scss';
import Button from '../../common/Button';
import { useNewPostMutation } from '../../../utils/query/useNewPostMutation';

const cx = classNames.bind(styles);

function Post() {
  const { data: posts = [], isLoading: isPostsLoading } = usePostsQuery();
  const { mutateAsync, isLoading: isNewPostLoading } = useNewPostMutation();

  const [input, setInput] = useState('');

  const addPost = async () => {
    // TODO: post 추가하기 -> 사용자 이름 랜덤생성
    await mutateAsync({
      name: `Test_${Math.floor(Math.random() * 10000)}`,
      comment: input,
    });

    setInput('');
  };

  if (isPostsLoading) {
    return <>로딩중...</>;
  }

  return (
    <div className={cx('Post')}>
      <ul className={cx('comments')}>
        {posts.map(({ name, comment }) => (
          <li className={cx('row')}>
            <div className={cx('name')}>{name}</div>
            <div className={cx('comment')}>{comment}</div>
          </li>
        ))}
      </ul>
      <form className={cx('post-box')} onSubmit={(e) => e.preventDefault()}>
        <input value={input} onChange={(e) => setInput(e.currentTarget.value)} />
        <Button disabled={isNewPostLoading} loading={isNewPostLoading} onClick={addPost}>
          글쓰기
        </Button>
      </form>
    </div>
  );
}

export default Post;
