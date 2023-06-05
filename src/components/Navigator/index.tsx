import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks";

const cx = classNames.bind(styles);

export const MENUS = [
  { title: "메인", path: "/" },
  { title: "히스토리", path: "/history" },
];

function Navigator() {
  const { pathname } = useLocation();

  useTitle();

  return (
    <nav className={cx("Navigator")}>
      <ul className={cx("links")}>
        {MENUS.map(({ title, path }) => (
          <li
            className={cx("link", { isActive: pathname === path })}
            key={path}
          >
            <NavLink to={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigator;
