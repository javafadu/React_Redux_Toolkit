import Counter from "./components/counter/counter";
import DarkMode from "./components/dark-mode/dark-mode";
import { useSelector } from "react-redux";
import LangSwitcher from "./components/lang-switcher/lang-switcher";
import { $lng } from "./helpers/locale-helper";

function App() {
  const darkModeStatus = useSelector((state) => state.darkMode.status);
  // Language switcher uzerinden dil degistiginde tum app i re-render yapmak icin asagidaki satiri ekliyoruz.
  const lang = useSelector((state) => state.locale.lang);

  return (
    <div className={`app m-0 t-5 ${darkModeStatus && "dark"}`}>
      <DarkMode />
      <LangSwitcher />
      <Counter />
      <div>{$lng("hello-world")}</div>
    </div>
  );
}

export default App;
