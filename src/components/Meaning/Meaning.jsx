import React from 'react'
import styled from 'styled-components';

const Meaning = ({wordData}) => {
  
    const {meanings} = wordData;

  return (

     meanings && 
    <MeaningsContainer>
        { meanings && meanings.map((meaning, index) => (
            <MeaningBody key={index}>
                <PartOfSpeech > {meaning.partOfSpeech}</PartOfSpeech>
                <MeaningText > Meaning </MeaningText>
                <MeaningList>
                    {meaning.definitions && meaning.definitions.map((definition, index) => (
                        <MeaningItem key={index}>
                            {definition.definition}
                        </MeaningItem>
                    ))}
                </MeaningList>
                {meaning.synonyms.length > 0  && <MeaningText> Synonyms 
                { meaning.synonyms.map((syn, index) => (
                    <Synonyms key={index}> {syn}</Synonyms>
                ))}
                </MeaningText>}
            </MeaningBody>
        ))}
    </MeaningsContainer>
    
  )
}

const MeaningsContainer = styled.div`
    padding-top: var(--padding-3);
    border-bottom: 1px solid var(--light-gray-color);
`
const MeaningBody = styled.div`
    display:flex;
    flex-direction: column;
    gap:var(--gap-1);
    margin-bottom: var(--margin-2);
`

const PartOfSpeech = styled.h3`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-style: italic;

    &::after {
        content: '';
        flex: 1;
        margin-left: var(--margin-1);
        height: 1px;
        background-color: var(--light-gray-color);
    }
`

const MeaningText = styled.h4`
    color: var(--font-color-gray);
`

const MeaningList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--gap-1);
    padding-left: var(--padding-2);
    margin-bottom: var(--margin);
`

const MeaningItem = styled.li`
  color: var(--font-color-gray);
  &::before {
    content: "•";
    color: var(--secondary-color);
    font-weight: bold;
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
    font-size: 18px;
  }
`

const Synonyms = styled.span`
    color: var(--secondary-color);
    font-size: 20px;
    font-weight: 700;
`

export default Meaning