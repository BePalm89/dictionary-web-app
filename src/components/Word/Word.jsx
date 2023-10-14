import React, { useState } from 'react';
import styled from 'styled-components';

const Word = ({ wordData }) => {
  const { word, phonetic, audio } = wordData;
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    const audioElement = document.getElementById('audio');
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <SearchedWordContainer>
    <WordContainer>
      <SearchedWord>{word}</SearchedWord>
      <SearchWordPhonetic>{phonetic}</SearchWordPhonetic>
    </WordContainer>
      { word && audio &&    
        <PlayButton onClick={handlePlayClick}>
          <PlayButtonIcon src='/assets/images/icon-play.svg' alt='play-icon' />
          <SearchWordAudio id='audio' src={audio}></SearchWordAudio>
        </PlayButton>
      }
    </SearchedWordContainer>
  );
};

const SearchedWordContainer = styled.div`
  padding-top: var(--padding-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-05);
`

const SearchedWord = styled.h1`
  font-size: 64px;
  font-weight: 700;
`;

const SearchWordPhonetic = styled.p`
  color: var(--secondary-color);
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const PlayButtonIcon = styled.img`
  width: 75px;
  height: 75px;
`

const SearchWordAudio = styled.audio`
  display: none;
`;

export default Word;
