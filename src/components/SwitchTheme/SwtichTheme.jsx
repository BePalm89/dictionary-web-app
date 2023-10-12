import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import "./SwitchTheme.css";

const SwtichTheme = () => {

  const { toggleDarkMode } = useContext(ThemeContext);
  
  const handleToogle = () => {
    toggleDarkMode();
  }

  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={handleToogle}/>
        <span className="slider round"></span>
      </label>
      <img src="/assets/images/icon-moon.svg" alt="switch-logo"></img>
    </>
  );
};

export default SwtichTheme;
