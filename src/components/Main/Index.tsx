import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

function Main() {
  return (
    <div className={cx("Main")}>
      <div className={cx("title")}>
        <h1>크런치 만들자</h1>
      </div>
    </div>
  );
}

export default Main;
