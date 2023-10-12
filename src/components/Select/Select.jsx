import { useContext } from "react";
import { FontContext } from "../../context/FontProvider";
import "./Select.css";

const fonts = [
  { label: "Sans Serif", value: "sans-serif" },
  { label: "Serif", value: "serif" },
  { label: "Mono", value: "mono" },
];

const Select = () => {

  const { font, changeFont } = useContext(FontContext);
  
  const handleFontChange = (event) => {
    changeFont(event.target.value)
  }

  return (
    <div className="fonts-select-container">
      <select className="fonts-select" value={font} onChange={handleFontChange}>
        {fonts.map((font) => (
          <option key={font.value} value={font.value}>
            {font.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
