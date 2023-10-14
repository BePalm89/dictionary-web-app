import { useContext } from "react";
import styled from "styled-components";

import { FontContext } from "../../context/FontProvider";

const fonts = [
  { label: "Sans Serif", value: "sans-serif" },
  { label: "Serif", value: "serif" },
  { label: "Mono", value: "mono" },
];

const SwitchFont = () => {

  const { font, changeFont } = useContext(FontContext);
  
  const handleFontChange = (event) => {
    changeFont(event.target.value)
  }

  return (
    <FontSwitchContaier >
      <FontSelect value={font} onChange={handleFontChange}>
        {fonts.map((font) => (
          <FontOptions key={font.value} value={font.value}>
            {font.label}
          </FontOptions>
        ))}
      </FontSelect>
    </FontSwitchContaier>
  );
};

const FontSwitchContaier = styled.div`
    border-right: 1px solid var(--light-gray-color);
    padding: 0 1rem;
    display: inline;
`

const FontSelect = styled.select`
    border: none;
    padding-right: 1.5rem;
    appearance: none; 
    background: url('assets/images/icon-arrow-down.svg') no-repeat right center; 
    background-size: 12px;
    outline: none;
    color: inherit;

    &:active, &:focus {
      border-bottom: 1px solid var(--secondary-color);
    }
`
const FontOptions = styled.option``;

export default SwitchFont;
