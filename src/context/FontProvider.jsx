import React, {createContext, useState} from 'react'

export const FontContext = createContext();

const FontProvider = ({children}) => {

  const [font, setFont] = useState('serif');


  const changeFont = (font) => {
    let fontFamily;
    
    switch (font) {
        case 'serif':
        fontFamily = 'Lora, serif';
        break;
        case 'sans-serif':
        fontFamily = 'Inter, sans-serif';
        break;
        case 'mono':
        fontFamily = 'Inconsolata, monospace';
        break;
        default:
        fontFamily = 'Lora, serif';
    }
    
    setFont(font);
    document.documentElement.style.setProperty('--selected-font', fontFamily);
 }

  return (
    <FontContext.Provider value={{font, changeFont}}>
        { children }
    </FontContext.Provider>
  )
}

export default FontProvider