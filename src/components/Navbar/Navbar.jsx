import React from "react";
import styled from 'styled-components';

import SwitchFont from "../SwitchFont/SwitchFont";
import SwtichTheme from "../SwitchTheme/SwitchTheme";


const Navbar = () => {
  return (
    <Nav>
      <Img src="assets/images/logo.svg" alt="logo" />
      <SwitchContaier>
        <SwitchFont />
        <SwtichTheme />
      </SwitchContaier>
    </Nav>
  );
};

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: var(--padding-3);
`
const Img = styled.img``

const SwitchContaier = styled.div`
    display: flex;
    gap: var(--gap-1);
`

export default Navbar;
