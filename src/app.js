import React, { useState, useEffect, useRef } from 'react';
import { hot } from 'react-hot-loader';
import FilterBar from './filter-bar.component';
import PlantFloor from './plant-floor.component';
import plantEx from '../public/plant.json';

// import './scss/app.scss';
let finalPlantList = [];
const plantExample = [
    {'plantName': 'sunflower', 'plantType': 'Wildflower', 'bloomTime': 'Summer', 'color': 'MiYellow' },
    {'plantName': 'tulip', 'plantType': 'Wildflower', 'bloomTime': 'Spring', 'color': 'Orange' },
    {'plantName': 'mint', 'plantType': 'Wildflower', 'bloomTime': 'Fall', 'color': 'Purple' },
    {'plantName': 'yarrow', 'plantType': 'Wildflower', 'bloomTime': 'Summer', 'color': 'White' },
    {'plantName': 'milkweed', 'plantType': 'Wildflower', 'bloomTime': 'Summer', 'color': 'Orange' }

]


const App = () => {
    // console.log('plantEx', plantEx);

    // State Lives Here for visible plants
    const [visiblePlants, setVisibility] = useState({
        'searchValue': '',
        'filters': {
            'Plant Type': {
                'Shrub': false,
                'Tree' : false,
                'Wildflower': false,
                'Grass': false,
            },
            'Bloom Time': {
                'Spring': false,
                'Summer': false,
                'Fall'  : false,
            },
            'Color': {
                'Red': false,
                'Purple': false,
                'Yellow': false,
                'White': false,
                'Orange': false
            },
            // 'Height': {
            //     '0-1\'': false,
            //     '2-3\'': false,
            //     '4-6\'': false,
            //     '7\'+': false,
            // },
            // 'Spread': {
            //     '0-1\'': false,
            //     '2\'-3\'': false,
            //     '4\'-6\'': false,
            //     '7\'+': false,
            // },
        },
    });


    const outputPlants = (updatedFilters) => {

        // TODO : Fix to represent incomplete searches such as 'mi...' or 'shr...'
        // ** use add condition for multiple filters! needs to have both qualities
        finalPlantList = [...plantExample];

        if (updatedFilters.length) {



            updatedFilters.filter(item => {


                if (Array.isArray(item)){
                    let minifiedFilter = item[0].charAt(0).toLowerCase() + item[0].slice(1);
                    minifiedFilter = minifiedFilter.replace(/\s/g, '');

                    const filteredPlants = plantExample.filter(plant => plant[minifiedFilter] === item[1])
                    finalPlantList = filteredPlants;

                } else {

                    for(let i = 0; i < item.length; i++){

                        // console.log(item[i]);
                        // *** Searching Plant Names
                        // finalPlantList = finalPlantList.filter(plant => plant.plantName.charAt(i) === item.charAt(i));

                        // *** Searching All Attributes
                        finalPlantList = finalPlantList.reduce((acc, curr) => {
                            Object.values(curr).some((val) => {
                                if(val.toLowerCase().startsWith(item)){
                                    acc.push(curr);
                                }
                                return (val.toLowerCase().startsWith(item));
                            });
                            return acc;
                        }, []);
                    }
                }

            })
        }
        else {
            // IF no filters or search show all plants
            finalPlantList = [...plantExample];
        }
    }


    // const interateFilters

    const plantList = () => {
        const plantFilters = [];
        const filters = {...visiblePlants.filters};

        console.log(filters);

        // console.log('gogogo', filters);
        // if (finalPlantList.length) {

            for (const key in filters) {
                if (filters != null && hasOwnProperty.call(filters, key)){
                    const filter = filters[key];

                    for (const key2 in filter) {
                        if (filter != null && hasOwnProperty.call(filter, key2)){

                            // console.log('values', [filter[key], key])
                            if (filter[key2]){
                                plantFilters.push([key, key2]);
                            }
                        }

                    }

                }

            }
        // }

        // If search applied
        if (visiblePlants.searchValue.length) {
            // console.log('search in progress');
            plantFilters.push(visiblePlants.searchValue);
        }

        outputPlants(plantFilters);
    }



    const searchInput  = (e) => {
        let newState = {...visiblePlants, searchValue : e.target.value};

        setVisibility(newState);
    }

    plantList();


    // function Counter() {
    //     const [count, setCount] = useState(0);

    //     const prevCountRef = useRef();
    //     useEffect(() => {
    //         console.log(count);
    //       prevCountRef.current = count;
    //     });
    //     const prevCount = prevCountRef.current;
    //     console.log(prevCountRef.current);

    //     return (
    //         <div>
    //             <h1>Now: {count}, before: {prevCount}</h1>
    //             <div onClick={() => {setCount(count + 1)}}>Test</div>
    //         </div>
    //     );
    // }



    const changeFilter  = (groupID, filter) => {

        const filters = {...visiblePlants.filters}

        filters[groupID][filter] = !filters[groupID][filter];


        setVisibility({...visiblePlants, filters})
    }

    return (
        <React.Fragment>
            <FilterBar searchInput={searchInput} checkedFilter={changeFilter} visiblePlants={visiblePlants}/>
            <PlantFloor plantExample={finalPlantList}/>
        </React.Fragment>
    );
}

export default hot(module)(App);
