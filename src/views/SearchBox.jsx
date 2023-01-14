import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResultList from "../components/SearchResultList";
import { serchableData } from "../helper/dataList";

import { toast } from "react-toastify";

const SearchBox = () => {
  const [searchKeyword, setSearchKeyword] = React.useState('')
  const [cursor, setCursor] = React.useState(0);

  const filterSearchQuery = (value) => {
    if (!value) {
      setCursor(0)
      return null;
    }

    return serchableData.filter((user) => {
      const serchableQuery = `${user.name.toLowerCase()} ${user.email.toLowerCase()}`
      return serchableQuery.includes(value.toLowerCase())
    })
  }

  const filteredSearchData = React.useMemo(() => {
    return filterSearchQuery(searchKeyword);
  }, [searchKeyword])

  const handleCursorChange = (keyname) => {
    if (keyname === 'up' && cursor > 0) {
      setCursor(cursor - 1)
    } else if (keyname === 'down' && cursor < Math.min(filteredSearchData.length - 1, 2)) {
      setCursor(cursor + 1)
    }
  }

  const handleOnKeywordChange = (value) => {
    setSearchKeyword(value)
  }

  const submitSelectedUser = () => {
    const submitUser = filteredSearchData[cursor]
    if (!!submitUser) {
      toast.success(`Submitted with ssn: ${filteredSearchData[cursor].ssn}, name: ${filteredSearchData[cursor].name}`)
      setSearchKeyword('')
    }
  }

  return (
    <div>
      <SearchBar
        keyword={searchKeyword}
        onChange={handleOnKeywordChange}
        onUpDownKeyPress={handleCursorChange}
        onPressEnter={submitSelectedUser}
      />
      <SearchResultList
        searchResult={!!searchKeyword && filteredSearchData?.slice(0, 3)}
        cursor={cursor}
        changeCurserValue={(val) => setCursor(val)}
        onResultClick={submitSelectedUser}
      />
    </div>
  );
}

export default SearchBox;
