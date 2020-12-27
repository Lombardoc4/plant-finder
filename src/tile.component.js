import React from 'react';
import PropTypes from 'prop-types';


function Tile(props) {
    // Maybe state to determine if it's open
    return(
        <div className="tile">
            {props.children}!
        </div>
    );
}

Tile.propTypes = {
    children: PropTypes.array
};

export default Tile;
