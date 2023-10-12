import React from 'react'

const Word = ({wordData}) => {
  const { word,  phonetic, audio} = wordData
  return (
    <>
        {word}
        {phonetic} 
        {audio}
    </>
  )
}

export default Word