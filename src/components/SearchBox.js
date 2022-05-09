import React from "react";

const SearchBox = ({searchChange}) =>
{
    return(
        <div className="pa2">
            <input onChange={searchChange} className="pa3 ba b--green bg-lightest-blue tc" type="search" name="search" id="search" placeholder="Search friends..." />
        </div>
    );
}

export default SearchBox;