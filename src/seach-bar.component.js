import React from 'react';

function SeachBar(props) {
    return(
        <div className="searchBar">
            <input type="text" id="search" value={props.searchValue} onChange={(e) => {props.searchInput(e)}}/>
            <button>SEARCH</button>
        </div>
    );
}

export default SeachBar;