import React from 'react';

const Search = props =>
<form className="form-inline">
    <input className="form-control mr-sm-2"
        onChange={props.handleUserInput}
        value={props.value}
        name="search"
        type='text'
        placeholder="Search For Card"
        id='search'
    />
<button onClick={props.handleFormSubmit} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>;

export default Search
