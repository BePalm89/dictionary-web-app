import { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../context/ThemeProvider";


const SwtichTheme = () => {

  const { toggleDarkMode } = useContext(ThemeContext);
  
  const handleToogle = () => {
    toggleDarkMode();
  }

  return (
    <>
      <Label>
        <Input type="checkbox" onChange={handleToogle}/>
        <SwitchToggle />
      </Label>
      <ThemeIcon src="/assets/images/icon-moon.svg" alt="switch-logo" />
    </>
  );
};

const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
`

const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`

const SwitchToggle = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--dark-gray-color);
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 4px;
      bottom: 4px;
      background-color: var(--white);
      -webkit-transition: .4s;
      transition: .4s;
      border-radius: 50%;
    }

  ${Input}:checked + & {
    background-color: var(--secondary-color);
  }

  ${Input}:focus + & {
    box-shadow: 0 0 1px var(--secondary-color);
  }

  ${Input}:checked + &::before {
    transform: translateX(18px);
  }
`
const ThemeIcon = styled.img``

export default SwtichTheme;
