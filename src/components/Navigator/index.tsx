import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

const MENU = [
  { title: "메인", path: "/" },
  { title: "히스토리", path: "/history" },
];

function Navigator() {
  return (
    <nav className={cx("Navigator")}>
      <ul>
        {MENU.map(({ title, path }) => (
          <NavLink key={path} to={path}>
            {title}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Navigator;
