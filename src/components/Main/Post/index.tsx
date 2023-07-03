import { useState } from 'react';
import classNames from 'classnames/bind';
import { usePostsQuery } from '../../../utils/query/usePostsQuery';
import styles from './index.module.scss';
import Button from '../../common/Button';

const cx = classNames.bind(styles);

function Post() {
  const { data: posts = [], isLoading: isPostsLoading } = usePostsQuery();

  const [input, setInput] = useState('');

  const addPost = async () => {
    // TODO: post 추가하기 -> 사용자 이름 랜덤생성
    // await mutateAsync({
    //   name: `Test_${Math.floor(Math.random() * 10000)}`,
    //   comment: input,
    //   createdAt: new Date().toISOString(),
    // });

    setInput('');
  };

  if (isPostsLoading) {
    return <>로딩중...</>;
  }

  return (
    <div className={cx('Post')}>
      <ul className={cx('comments')}>
        {posts.map(({ id, name, comment }) => (
          <li key={id} className={cx('row')}>
            <div className={cx('name')}>{name}</div>
            <div className={cx('comment')}>{comment}</div>
          </li>
        ))}
      </ul>
      <form className={cx('post-box')} onSubmit={(e) => e.preventDefault()}>
        <input value={input} onChange={(e) => setInput(e.currentTarget.value)} />
        <Button disabled={false} loading={false} onClick={addPost}>
          글쓰기
        </Button>
      </form>
    </div>
  );
}

export default Post;
