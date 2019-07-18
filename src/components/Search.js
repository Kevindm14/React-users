import React from 'react';

function Search(props) {
  return (
    <div className="searcher row">
      <div className="col s12 m8 offset-m2 center">
        <form>
        <h4>Searh any user</h4>
        <div className="row">
          <div className="col s12 m8 offset-m2 center">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">search</i>
                <input type="text" id="autocomplete-input" onChange={props.handleCategory} className="autocomplete"/>
                <label htmlFor="autocomplete-input">Search</label>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Search;