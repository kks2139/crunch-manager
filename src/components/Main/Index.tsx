import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useState } from "react";
import { Post } from "../../utils/types";

const cx = classNames.bind(styles);

function Main() {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <div className={cx("Main")}>
      <div className={cx("title")}>
        <h1>크런치</h1>
      </div>
      <button
        onClick={async (e) => {
          e.preventDefault();
        }}
      >
        새로고침
      </button>

      <ul>
        {posts.map(({ name, comment }) => (
          <li>
            <span>{name}</span> : <span>{comment}</span>
          </li>
        ))}
      </ul>

      <form>
        <input />
        <button>글등록</button>
      </form>
    </div>
  );
}

export default Main;
