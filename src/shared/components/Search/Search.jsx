import React from "react"
import { IconLoader, IconSearch, SearchComponent, SearchInput } from "./SearchStyle";

export const Search = () => {
  return (
    <SearchComponent>
        <SearchInput type="text"/>
        <IconSearch />
        {/* <IconLoader/> */}
    </SearchComponent>
  )
}
