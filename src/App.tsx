import Button from "./components/common/Button";
import styles from "./App.module.scss";
import classNames from "classnames";
import Navigator from "./components/Navigator";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Index";
import History from "./components/History/Index";

const cx = classNames.bind(styles);

function App() {
  return (
    <main className={cx("App")}>
      <Navigator />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Button>Test</Button>
    </main>
  );
}

export default App;
