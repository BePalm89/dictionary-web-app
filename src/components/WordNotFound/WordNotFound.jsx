import React from 'react'
import styled from 'styled-components'

const WordNotFound = () => {
  return (
    <NotFoundContainer>
        <NotFoundText>The word was not found, please try with an other word</NotFoundText>
    </NotFoundContainer>
  )
}

const NotFoundContainer = styled.div`
    margin-top: var(--margin-2);
    color: var(--error-color);
`

const NotFoundText = styled.h3``

export default WordNotFound