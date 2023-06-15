import classNames from 'classnames/bind';
import styles from './index.module.scss';
import Post from './Post';

const cx = classNames.bind(styles);

function Main() {
  return (
    <div className={cx('Main')}>
      <div className={cx('title')}>
        <h1>한마디 게시판</h1>
      </div>
      <Post />
    </div>
  );
}

export default Main;
