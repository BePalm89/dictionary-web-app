import React, { useContext, useEffect, useState} from "react";

import { ThemeContext } from "./context/ThemeProvider";
import { ErrorBoundary } from "react-error-boundary";

import { getDictionaryWord } from "./api/dictionary";

import Container from "./design-system/Container";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Word from "./components/Word/Word";
import Meaning from './components/Meaning/Meaning.jsx'
import Source from "./components/Source/Source";
import WordNotFound from "./components/WordNotFound/WordNotFound";
import ErrorFallback from "./components/ErrorBoundary/ErrorBoundary.jsx";


function App() {
  const { darkMode } = useContext(ThemeContext);
  
  const [ wordData, setWordData ] = useState({});
  const [ wordNotFound, setWordNotFound ] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode] )

  const handleOnSubmit = (word) => {
    getDictionaryWord(word).then(response => {
      setWordNotFound(false);
      return setWordData(response)
    }).catch(() => setWordNotFound(true))
  }

  return ( 
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Container>
        <Navbar />
        <SearchBar onSubmit={handleOnSubmit} />
        { wordNotFound ? <WordNotFound/> :
          <>
          <Word wordData={wordData} />
          <Meaning wordData={wordData}/>
          <Source wordData={wordData}/>
          </>
        }

      </Container>
    </ErrorBoundary>

  );
}

export default App;
