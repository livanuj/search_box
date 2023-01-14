import React from "react";
import {
  NoResultText,
  ResultDiv,
  ResultHeaderText,
  ResultSubHeadText,
  SearchResultBox } from "../styles/customStyle";

const SearchResultList = ({ searchResult, cursor, changeCurserValue, onResultClick }) => {

  const renderEachElement = (user, index) => {
    let resultDivStyle = { background: "#FFFFFF" }
    if (index === cursor) {
      resultDivStyle = { background: "#F3F7FF" }
    }

    return (
      <ResultDiv
        key={index}
        style={resultDivStyle}
        onMouseOver={() => changeCurserValue(index)}
        onClick={onResultClick}
      >
        <ResultHeaderText>{user.name}</ResultHeaderText>
        <ResultSubHeadText>{user.email}</ResultSubHeadText>
      </ResultDiv>
    )
  }

  if (!searchResult) {
    return null;
  }

  if (!searchResult.length) {
    return (
      <SearchResultBox>
        <ResultDiv style={{display: 'flex', alignItems: 'center', cursor: 'default' }}>
          <NoResultText>Engar niðurstöður</NoResultText>
        </ResultDiv>
      </SearchResultBox>
    )
  }

  return (
    <SearchResultBox>
      {searchResult.map(renderEachElement)}
    </SearchResultBox>
  )
}

export default SearchResultList;
