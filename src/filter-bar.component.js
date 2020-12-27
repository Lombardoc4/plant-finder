import React from 'react';
import SeachBar from './seach-bar.component';
import AllFilters from './filters.component';

// const filters = [
//     {
//         'plantType': {
//             'Shrub': false,
//             'Tree' : false,
//             'Wildflower': false,
//             'Grass': false,
//         }
//     },
//     {
//         'bloomTime': {
//             'Spring': false,
//             'Summer': false,
//             'Fall'  : false,
//         },
//     },
//     {
//         'color': {
//             'Red': false,
//             'Purple': false,
//             'Yellow': false,
//             'White': false,
//             'Orange': false
//         }
//     },
//     {
//         'name': '',
//     }
// ]

function FilterBar(props) {


    return(
        <div id="FilterBarContainer">
            <SeachBar searchInput={props.searchInput} searchValue={props.visiblePlants.searchValue}/>
            <AllFilters checkedFilter={props.checkedFilter} filters={props.visiblePlants.filters}/>
        </div>
    );
}

export default FilterBar;