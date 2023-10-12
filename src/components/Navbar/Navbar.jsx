import React from "react";
import Select from "../Select/Select";
import SwtichTheme from "../SwitchTheme/SwtichTheme";
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <img src="assets/images/logo.svg" alt="logo"></img>
        <div>
          <Select />
          <SwtichTheme />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
