import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Global
let changeFilter;

const AllFilters = (props) => {
    const [visibleFilters, setVisibility] = useState(false);
    const toggleFitlers = () => {
        setVisibility(!visibleFilters);
    }

    const filterToggle = visibleFilters ? {'display': 'block'} : {'display': 'none'};

    const groups = {...props.filters};

    const finalGroups = [];


    for (const key in {...props.filters}) {
        if ({...props.filters}.hasOwnProperty(key)) {
            // console.log(key);
            // groups[key] = <FilterGroups changeFilter={props.changeFilter} key={key} group={groups[key]} groupID={key}/>;
            finalGroups.push(<FilterGroups checkedFilter={props.checkedFilter} key={key} group={groups[key]} groupID={key}/>);

            // console.log(finalGroups);
            // return (<FilterGroups checkedFilter={props.checkedFilter} key={key} group={groups[key]} groupID={key}/>)
        }
    }

    return(
        <div className="filters">
            <div onClick={toggleFitlers}>Toggle Filters</div>
            <span style={filterToggle}>
                <>{finalGroups}</>
            </span>
        </div>
    );
}

const FilterGroups = (props) => {

    const filterList = [];
    const groupTitle = props.groupID;

    for (const [key, value] of Object.entries(props.group)) {
        // console.log([key, value]);
        filterList.push(<Filter checkedFilter={props.checkedFilter} key={key} groupID={props.groupID} title={key} value={value}/>)
    }

    // console.log(Object.entries(group));

    // console.log(groupTitle)
    // console.log(filterList)


    return(
        <div className="filterGroup">{groupTitle}{filterList}</div>
    );
}

const Filter = (props) => {
    let onValue = ""
    if (props.value){
        onValue= "on";
    }
    return(
        <div >
            <input type="checkbox" onChange={() => {props.checkedFilter(props.groupID, props.title)}} checked={props.value}/><span className={onValue} onClick={() => {props.checkedFilter(props.groupID, props.title);}}>{props.title}</span>
        </div>
    );
}

Filter.propTypes = {
    groupID: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.bool,
};

export default AllFilters;