import React from 'react'
import styled from 'styled-components';

const Source = ({ wordData }) => {

  const { sourceUrls } = wordData;

  return (
      
    sourceUrls && sourceUrls.length > 0 &&
      <SourceUrlsContainer>
            <SourceTitle>Source </SourceTitle>
                {sourceUrls.map((src, index) => (
                    <SourceUrlsLinkContainer key={index}>
                        <SourceUrlsList>
                        <SourceUrl>{src}</SourceUrl>
                            <SourceUrlsItems>
                                <SourceUrlLink href={src} target="_blank">
                                    <SourcUrlIcon src='assets/images/icon-new-window.svg'/>
                                </SourceUrlLink>
                            </SourceUrlsItems>
                        </SourceUrlsList>
                    </SourceUrlsLinkContainer>
                ))}
        </SourceUrlsContainer>
    
        
  )
}

const SourceUrlsContainer = styled.div`
    padding-top: var(--padding-2);
    display: flex;
    flex-wrap: wrap;
`

const SourceTitle = styled.p`
    text-decoration: underline;
    color: var(--font-color-gray);
    font-size: 14px;
    margin-right: var(--margin-1);
`

const SourceUrlsLinkContainer = styled.div``

const SourceUrl = styled.span`
    text-decoration: underline;
    font-size: 14px;
`
const SourceUrlsList = styled.ul`
    list-style: none;
    display: flex;
    gap: var(--gap-05);
`
const SourceUrlsItems = styled.li`
    margin-right: var(--margin-05);
`

const SourceUrlLink = styled.a`
    
`

const SourcUrlIcon = styled.img`
    display: inline;
`

export default Source