import React from 'react';
 
var Search = (props) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={(event) => props.handleSearchInputChange(event)}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
