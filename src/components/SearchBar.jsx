import React from "react";
import { InputBar, SearchIcon } from "../styles/customStyle";
import { ReactComponent as Search } from "../assets/svg/search_icon.svg";

const SearchBar = ({keyword, onChange, onUpDownKeyPress, onPressEnter }) => {

  const handleKeyDown = (e) => {
    switch(e.keyCode) {
      case 38:
        e.preventDefault()
        onUpDownKeyPress('up')
        break;
      case 40:
        e.preventDefault()
        onUpDownKeyPress('down')
        break;
      case 13:
        onPressEnter()
        break;
      default:
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <InputBar
        key="search-bar"
        value={keyword}
        placeholder={"Þekktir viðtakendur"}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SearchIcon>
        <Search />
      </SearchIcon>
    </div>
  );
}

export default SearchBar;
