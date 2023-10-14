import React, {useState } from 'react'
import styled from 'styled-components';


const SearchBar = ({ onSubmit}) => {

  const [searchWord, setSearchWord] = useState('');
  const [error, setError] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchWord.trim()) {
      setError(true);
    } else {
      setError(false);
      onSubmit(searchWord);
    }
  }

  return (
    
    <Form onSubmit={handleSubmit}>
      <SearchBarContainer className={error ? 'error' : ''}>
          <Input type="text" placeholder='Search for any word...' value={searchWord} onChange={event => setSearchWord(event.target.value)}/> 
          <SearchIcon src="assets/images/icon-search.svg" alt='search-icon' onClick={handleSubmit}/>
      </SearchBarContainer>
      {error && <ErrorMessage> Whoops, can't be empty</ErrorMessage>}
    </Form>
    
  )
}

const Form = styled.form``

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    padding: var(--padding-1) var(--padding-1);
    background-color: var(--bg-input);
    justify-content: space-between;
    border-radius: 10px;

    &.error {
      border: 1px solid var(--error-color);
    }

    &:focus-within {
      border: 1px solid var(--secondary-color)
    }
`

const Input = styled.input`
    background-color: inherit;
    border: none;
    width: 100%;

    &:focus {
      outline: none;
    }
    
    &::placeholder {
      color: var(--font-color-gray);
    }
`

const SearchIcon = styled.img`
    cursor: pointer;
`

const ErrorMessage = styled.span`
  display: block;
  margin-top: var(--margin-05);
  color: var(--error-color);
`

export default SearchBar