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
            <div className="input-group-append" style={{pointerEvents: props.searchField ? '' : 'none'}} onClick={props.searchBook}>
              <span className="btn btn-primary input-group-text" type="submit">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>
        </form>
        
      </div>
    </>
  );
};

export default SearchArea;
