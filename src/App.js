import Counter from "./components/counter/counter";
import { Container } from "reactstrap";
import DarkMode from "./components/dark-mode/dark-mode";
import { useSelector } from "react-redux";
import LangSwitcher from "./components/lang-switcher/lang-switcher";

function App() {
  const darkModeStatus = useSelector((state) => state.darkMode.status);

  return (
    <div className={`app m-0 t-5 ${darkModeStatus && "dark"}`}>
      <DarkMode />
      <LangSwitcher/>
      <Counter />
    </div>
  );
}

export default App;
