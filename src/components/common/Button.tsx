import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

interface Props {
  type?: "basic" | "alert";
  children?: React.ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: Props) {
  return (
    <button className={cx("Button")} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
