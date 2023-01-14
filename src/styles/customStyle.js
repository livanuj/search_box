import styled from "styled-components";

export const InputBar = styled.input`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-size: 16px;
  line-height: 163.41%;
  width: 314px;
  height: 56px;
  box-sizing: border-box;
  background: #F3F7FF;
  border: 1px solid #D5E0FF;
  border-radius: 4px;
  padding-left: 48px;
  :focus {
    border: 1px solid #2823FB;
    border-radius: 4px;
  }
  ::placeholder {
    opacity: 1;
    font-weight: 400;
    font-size: 16px;
    line-height: 163.41%;
    /* or 26px */
    display: flex;
    align-items: center;

    /* Blue text */
    color: #98A4C5;
  }
`;

export const SearchIcon = styled.i`
  position: absolute;
  width: 16px;
  left: 16px;
  top: 35.71%;
`;

export const SearchResultBox = styled.div`
  max-width: 314px;
  margin-top: 10px;
  padding: 8px;
  background: #FFFFFF;
  box-shadow: 0px 8px 18px #E0E2EE;
  border-radius: 4px;
`;

export const ResultDiv = styled.div`
  width: 278px;
  height: 68px;
  border-radius: 4px;
  padding: 0px 10px;
  :hover {
    cursor: pointer;
  }
`;

export const ResultHeaderText = styled.span`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 188.55%;
  /* or 30px */

  display: flex;
  align-items: center;

  /* Text */

  color: #474747;
  white-space: nowrap;
  overflow: hidden;
`;

export const ResultSubHeadText = styled.span`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 188.55%;
  /* or 26px */

  display: flex;
  align-items: center;

  color: #98A4C5;
  white-space: nowrap;
  overflow: hidden;
`;

export const NoResultText = styled.span`
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 188.55%;
  /* or 30px */
  display: flex;
  align-items: center;
  /* Blue text */
  color: #98A4C5;
`;
