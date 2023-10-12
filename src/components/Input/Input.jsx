import React, {useState } from 'react'
import './Input.css';

const Input = ({ onSubmit}) => {

  const [searchWord, setSearchWord] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchWord)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className='input-container'>
        <input type="text" placeholder='Search for any word...' value={searchWord} onChange={event => setSearchWord(event.target.value)} /> 
        <img src="assets/images/icon-search.svg" alt='search-icon' onClick={handleSubmit}/>
    </div>
    </form>
    </>
  )
}

export default Input