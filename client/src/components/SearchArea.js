import React from "react";

const SearchArea = (props) => {
  return (
    <>
      <div className="search-area d-flex">
        <form
          onSubmit={props.searchBook}
          action=""
          className="navbar-form form-inline"
        >
          <div className="input-group search-box">
            <input
              onChange={props.handleSearch}
              type="text"
              id="search"
              className="form-control"
              placeholder="Search here..."
            />
            
          </div>
        </form>
        
      </div>
    </>
  );
};

export default SearchArea;
