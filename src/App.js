import React, { useContext, useEffect, useState} from "react";
import "./App.css";

import { ThemeContext } from "./context/ThemeProvider";

import { getDictionaryWord } from "./api/dictionary";

import Container from "./styled-components/Container";
import Navbar from "./components/Navbar/Navbar";
import Input from "./components/Input/Input";
import Word from "./components/Word/Word"

function App() {
  const { darkMode } = useContext(ThemeContext);
  
  const [wordData, setWordData] = useState({});

  useEffect(() => {
    document.body.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode] )

  const handleOnSubmit = (word) => {
    getDictionaryWord(word).then(response => {

      return setWordData(response)
      })
  }

  console.log(wordData);

  return ( 
    <Container>
      <Navbar></Navbar>
      <Input onSubmit={handleOnSubmit}></Input>
      <Word wordData={wordData} ></Word>
    </Container>
  );
}

export default App;
